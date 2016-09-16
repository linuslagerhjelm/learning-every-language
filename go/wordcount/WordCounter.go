package main

import (
	"bufio"
	"fmt"
	"io/ioutil"
	"os"
	"strings"
)

var words map[string]int

//Handle errors
func check(err error) {
	if err != nil {
		panic(err)
	}
}

func readFileContent(path string) string {
	fp, err := ioutil.ReadFile(path)
	check(err)
	return string(fp)
}

func main() {
	words = make(map[string]int)
	fileToRead := os.Args[1]
	fileContent := readFileContent(fileToRead)

	//Create a scanner to parse the text
	scanner := bufio.NewScanner(strings.NewReader(fileContent))
	scanner.Split(bufio.ScanWords)

	//Separate the words in the string and add to map
	for scanner.Scan() {
		_, present := words[scanner.Text()]
		if present {
			words[scanner.Text()] += 1
		} else {
			words[scanner.Text()] = 1
		}
	}

	//Iterate over map and print keys and values
	for key := range words {
		fmt.Printf("%s: %d\n", key, words[key])
	}
}
