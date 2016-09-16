package utils
import "errors"

// Element defines a wrapper for values put on th stack
type Element struct {
	Value interface{}
	Next  *Element
}

// Stack is implemented as your common stack. 
// Very similar to the one fund in Java   
type Stack struct {
	Size  uint32
	Front *Element
}

// Empty returns true if the stack has no elements, otherwise false
func (stack *Stack) Empty() bool {
	return stack.Size == 0
}

// Peek returns the top of the stack without removing it
func (stack *Stack) Peek() (interface{}, error) {
    if stack.Size == 0 {
        return nil, errors.New("Cannot peek on empty stack")
    }
	return stack.Front.Value, nil
}

// Push adds the specified element to the stack
func (stack *Stack) Push(value interface{}) {
    stack.Front = &Element{value, stack.Front}
    stack.Size++
}

// Pop returns the top of the stack and removes it from the stack
func (stack *Stack) Pop() (interface{}, error) {
    if stack.Size <= 0 {
        return nil, errors.New("Pop on empty stack")
    }
    front := stack.Front
    stack.Front = front.Next
    stack.Size--
    return front.Value, nil
}

// Search returns zero based index of the first occurance 
// of the element on the stack. -1 is returned if element
// was not found on stack
func (stack *Stack) Search(val interface{}) int {
    current := stack.Front
    for i := uint32(0); i < stack.Size; i++ {
        if current.Value == val {
            return int(i)
        }
        current = current.Next
    }
    return -1
}