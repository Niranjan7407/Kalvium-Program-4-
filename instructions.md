## Overview
This milestone project is a basic Todo List application built using React. The goal is to test your understanding of React core concepts, including state management, event handling, and conditional rendering.

## Problem Statement
You are tasked with building a Todo List where users can:
- Add new tasks.
- Mark tasks as completed by clicking on them.
- Delete tasks from the list.

## Key Features
- **Add Todos:** Users should be able to add new tasks by typing in the input field and clicking the "Add Todo" button.
- **Delete Todos:** Users can remove tasks by clicking the "Delete" button next to each task.
- **Erase the input after adding the Todo**

## Files to Focus On
`src/components/TodoList.jsx`: This is the main component where you will implement the necessary functionalities.

## Component Instructions
- **State Initialization:**
  - `todos`: An array of todo objects `{ text: string, completed: boolean }`.
  - `newTodo`: A string representing the current input value.
  
- **Event Handlers:**
  - **`handleInputChange`**: Updates the `newTodo` state.
  - **`handleAddTodo`**: Adds a new todo to the `todos` array and clears the input.
  - **`handleToggleComplete`**: Toggles the `completed` status of a todo.
  - **`handleDeleteTodo`**: Removes a todo from the list.

## Test Cases
Jasmine test cases are provided to evaluate your implementation:
1. **should render correctly with no todos**
2. **should allow adding a todo**
3. **should clear input field after adding a todo**
4. **should delete a todo**


## Expected Output
Refer to the Loom video below to see the expected output:
[Expected Output Video](https://www.loom.com/share/4c7474a2a8034efd976d6fa351b863aa?sid=4e8562af-d35e-4e9d-bbe0-b257b39e81e8)

## How to Run the Test Cases

1. Use `npm run test:serve` to run the tests and visualize the results.


**You are expected to complete the code functions in TodoList.jsx**
