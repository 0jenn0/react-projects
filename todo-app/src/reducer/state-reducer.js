//import { act } from "react-dom/test-utils";

export default function stateReducer(state, action) {
  switch (action.type) {
    case "add": {
      const { form } = action;
      const newCount = state.counter + 1;
      return {
        ...state,
        counter: newCount,
        todos: [...state.todos, { id: newCount, text: form, checked: false }],
      };
    }
    case "remove": {
      const id = action.id;
      const newCount = state.counter - 1;
      return {
        ...state,
        counter: newCount,
        todos: state.todos.filter((todo) => todo.id !== id),
      };
    }
    case "check": {
      const id = action.id;
      const updatedTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      );

      const updatedState = {
        ...state,
        todos: updatedTodos,
      };
      return updatedState;
    }
  }
}
