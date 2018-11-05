const initialState = {
  todoList: [],
  item: ""
};



export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "INPUT_TODO":
      return {
        ...state,
        item: action.payload.text
      };
    case "ADD_TODO":
      if (state.item.trim() === "") {
        alert("todoを入力してください");
        return state;
      }
      return {
        ...state,
        todoList: state.todoList.concat([action.payload]),
        item: ""
      };
    case "CHANGE_IS_DONE":
      const todos = state.todoList.map(todo => {
        return {id: todo.id, title: todo.title, isDone: todo.isDone}
      });
      const pos = state.todoList.map(todo => {
        return todo.id;
      }).indexOf(action.payload.todo.id);
      todos[pos].isDone = !todos[pos].isDone;
      return {
        ...state,
        todoList: todos
      };
    case "DELETE_TODO":
      const newTodos = state.todoList.slice();
      const position = state.todoList.indexOf(action.payload.todo);
      newTodos.splice(position, 1);
      return {
        ...state,
        todoList: newTodos
      };
    case "RESET_TODO":
      return {
        ...state,
        todoList: []
      };
    case "NOT_COMPLETE":
      const notTodos = state.todoList.filter(todo => {
        return !todo.isDone;
      });
      return {
        ...state,
        todoList: notTodos
      };
    default: return state;
  }
}

