const _ = require('lodash')

/**
 * Boring node.js specific setups
 */
const readline = require('readline');
const stdin = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const clearScreen = () => {
  process.stdout.write('\x1Bc')
  process.stdout.write('\n')
}

/**
 * Boring application administration setup
 */
function clean_input(dirty_input) {
    parts = dirty_input.match(/(".*?"|[^"\s]+)+(?=\s*|\s*$)/g)
    if (!parts[0] || !ACTIONS[parts[0]]) {
        throw `The action ${parts[0]} is not supported`
    }
    return parts
}

var id = 0
const getNextId = () => ++id

function printItem(item) {
  console.log('===================')
  console.log(`Id: ${item.id}`)
  console.log(`Title: ${item.title}`)
  console.log(`Description: ${item.description}`)
  console.log(`Complete: ${item.complete}`)
  console.log(`Created: ${new Date(item.created)}`)
  console.log('\n')  
}

const ACTIONS = {
    "h": print_usage,
    "help": print_usage,
    "l": list_items,
    "list": list_items,
    "a": add_item,
    "add": add_item,
    "t": toggle_item,
    "toggle": toggle_item,
    "d": delete_item,
    "delete": delete_item,
    "q": quit,
    "quit": quit
}

const ITEMS = {}

/**
 * Actual functionality
 */
function print_usage() {
  console.log("Bellow follows a set of supported commands for interacting with the application:")
  console.log("\t h | help - Print this help")
  console.log("\t l | list - Prints all Todo-Items currently in the application")
  console.log("\t a | add <title> <description> - Adds a new todo to the application")
  console.log("\t t | toggle <id> - change complete status for the given id")
  console.log("\t d | delete <id> - deletes the item with the given id")
  console.log("\t q | quit - exits this application")
}

function add_item([title, description]) {
  const id = getNextId()
  const item = {
    id,
    title,
    description,
    complete: false,
    created: new Date().getTime(),
  }
  ITEMS[id] = item
  console.log('Created item:')
  printItem(item)
}

function list_items() {
  if (!_.size(ITEMS)) {
    console.log("No todo items yet!")
  } else {
    _.each(ITEMS, printItem)
  }
}

function toggle_item([id]) {
  if (!ITEMS[id]) return
  ITEMS[id].complete = !ITEMS[id].complete
}

function delete_item(id) {
  delete ITEMS[id]
}

function quit() {
  stdin.close()
  console.log("Good bye! ❤️")
  process.exit()
}

(function main() {
  clearScreen()  
  console.log("=====================================")
  console.log("Hello and welcome to Todo Application v. 1.0!")
  print_usage()
  innerLoop()
  
  function innerLoop() {
    stdin.question('Todo#~> ', (dirtyCommand) => {
      try {
        input = clean_input(dirtyCommand)
        ACTIONS[input[0]](input.slice(1))
      } catch (err) {
        console.log(err)
        print_usage()
      } finally {
        innerLoop()
      }
    })
  }
})()
