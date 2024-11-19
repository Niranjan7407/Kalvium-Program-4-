import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from '../src/components/TodoList.jsx';

describe('TodoList Component', () => {

  // Test case for initial render
  it('should render correctly with no todos', () => {
    const { getByPlaceholderText, getByText } = render(<TodoList />);
    expect(getByPlaceholderText('Add a new task')).toBeTruthy();
    expect(getByText('Add Todo')).toBeTruthy();
  });

  // Test case for adding a todo
  it('should allow adding a todo', () => {
    const { getByPlaceholderText, getByText } = render(<TodoList />);
    const input = getByPlaceholderText('Add a new task');
    const addButton = getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'Buy Groceries' } });
    fireEvent.click(addButton);

    expect(getByText('Buy Groceries')).toBeTruthy();
  });

  // Test case for clearing the input field after adding a todo
  it('should clear input field after adding a todo', () => {
    const { getByPlaceholderText, getByText } = render(<TodoList />);
    const input = getByPlaceholderText('Add a new task');
    const addButton = getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'Buy Groceries' } });
    fireEvent.click(addButton);

    expect(input.value).toBe(''); // Input should be cleared
  });

  // Test case for deleting a todo
  it('should delete a todo', () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<TodoList />);
    const input = getByPlaceholderText('Add a new task');
    const addButton = getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'Buy Groceries' } });
    fireEvent.click(addButton);

    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);

    expect(queryByText('Buy Groceries')).toBeNull(); // Todo should be deleted
  });

  
});
