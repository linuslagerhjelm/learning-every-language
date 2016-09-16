package utils

import (
	"fmt"
	"testing"
)

func TestStack(t *testing.T) {
	ExampleStackIsEmpty()
    ExampleStackPush()
    ExampleStackPeek()
    ExamplePopCurrectValue()
    ExamplePopRemoveElement()
    ExamplePushMultipleElements()
    ExampleMultiplePushPop()
    ExampleSearch()
}

func ExampleStackIsEmpty() {
	s := new(Stack)
	if s.Empty() == false {
		fmt.Println("Stack was not empty allthough it should have been!")
	} else {
		fmt.Println("Stack was empty as expected")
	}
	// Output: Stack was empty as expected
}

func ExampleStackPush() {
    s := new(Stack)
    s.Push(3)
    if s.Empty() == false {
		fmt.Println("Push seems to work")
	} else {
		fmt.Println("Something's wrong with push")
	}
	// Output: Push seems to work
}

func ExampleStackPeek() {
    s := new(Stack)
    s.Push(1337)
    front := s.Peek()
    if front != 1337 {
        fmt.Printf("Value of front was: %d", front)
    } else {
        fmt.Println("Peek returned the right value")
    }
    // Output: Peek returned the right value
}

func ExamplePopCurrectValue() {
    s := new(Stack)
    s.Push(1234)
    val := s.Pop()
    if val != 1234 {
        fmt.Printf("val was equal to %d", val)
    } else {
        fmt.Println("Pop had the correct value")
    }
    // Output: Pop had the correct value
}

func ExamplePopRemoveElement() {
    s := new(Stack)
    s.Push(1)
    s.Pop()
    if s.Empty() == false {
        fmt.Println("Stack should be empty when element is removed")
    } else {
        fmt.Println("Pop removes element")
    }
    // Output: Pop removes element
}

func ExamplePushMultipleElements() {
    s := new(Stack)
    values := [...]int{1,2,3,4}
    for i := 0; i < len(values); i++ {
        s.Push(values[i])
    }
    if int(s.Size) != len(values) {
        fmt.Println("Incorrect length")
    } else {
        fmt.Println("Multiple pushes resulted in expected length")
    }
    // Output: Multiple pushes resulted in expected length
}

func ExampleMultiplePushPop()  {
    s := new(Stack)
    values := [...]int{1,2,3,4,5,6,7,8,9,10}
    result := [10]int{}
    for i := 0; i < len(values); i++ {
        s.Push(values[i])
    }
    for j := int(s.Size-1); j >= 0 ; j-- {
        result[j] = s.Pop().(int)
    }
    correct := true
    for i := 0; i < len(values); i++ {
        if result[i] != values[i] {
            correct = false
            break
        }
    }
    if !correct {
        fmt.Println("Some values were ruined")
    } else {
        fmt.Println("Multiple values were okay")
    }
    // Output: Multiple values were okay
}

func ExampleSearch() {
    s := new(Stack)
    values := [...]int{1,2,3,4,5,6,7,8,9,10}
    for i := 0; i < len(values); i++ {
        s.Push(values[i])
    }
    res := s.Search(3)
    if res != 7 {
        fmt.Printf("Expected 7, got %d", res)
    } else {
        fmt.Println("Found the right index")
    }
    // Output: Found the right index
}