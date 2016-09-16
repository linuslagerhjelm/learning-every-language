var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
var status = require('node-status');

var START_URL = "http://www.aftonbladet.se/";
var SEARCH_WORD = "nyheter";
var MAX_PAGES_TO_VISIT = 1000;
var SEARCH_WORD_OCCURANCES = 0;

var pagesVisited = {};
var numPagesVisited = 0;
var pagesToVisit = [];
var url = new URL(START_URL);
var baseUrl = url.protocol + "//" + url.hostname;

var pagesProgress = status.addItem("page", {
  type: ['bar','percentage'],
  max: MAX_PAGES_TO_VISIT
})
console = status.console();

pagesToVisit.push(START_URL);
status.start();
crawl();

function crawl() {
    if (numPagesVisited >= MAX_PAGES_TO_VISIT) {
        console.log("Reached max pag to visit ("+MAX_PAGES_TO_VISIT+")");
        console.log("Your search phrase: "+SEARCH_WORD+" was found "+SEARCH_WORD_OCCURANCES+" times");
        return;
    }
    
    var nextPage = pagesToVisit.pop();
    if (nextPage in pagesVisited) {
        crawl();
    } else if (!nextPage) {
        visitPage(START_URL, crawl);
    } else {
        visitPage(nextPage, crawl);
    }
}

function visitPage(url, callback) {
    pagesVisited[url] = true;
    numPagesVisited++;
    pagesProgress.inc();
    
    console.log("Visiting page "+url);
    request(url, function(error, response, body){
        if (error) {
            console.log("ERROR: "+error);
        }
        
        if (response.statusCode === 200) {
            var $ = cheerio.load(body)
            var wordIsFound = searchForWords($, SEARCH_WORD);
            if (wordIsFound) {
                SEARCH_WORD_OCCURANCES++;
            }
            collectInternalLinks($);
            callback();    
        } else {
            callback();
        }
    });
}


function searchForWords($, word) {
    var bodyText = $('html > body').text();
    if (bodyText.toLowerCase().indexOf(word.toLowerCase()) !== -1) {
        return true;
    }
    return false;
}

function collectInternalLinks($) {
    var relativeLinks = $("a[href^='http://www.aftonbladet.se']");
    relativeLinks.each(function() {
        pagesToVisit.push($(this).attr('href'));
    });
}