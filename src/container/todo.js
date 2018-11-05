import { connect } from "react-redux";
import { inputTodo, addTodo, changeIsDone, deleteTodo, resetTodo, notComplete } from "../actions/todo";
import TodoApp from "../components/todo";
import { push } from "react-router-redux";


function mapStateToProps({todo}) {
  return {
    todoList: todo.todoList,
    item: todo.item
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inputTodo(text) {
      dispatch(inputTodo(text));
    },
    addTodo(item) {
      dispatch(addTodo(item));
    },
    changeIsDone(todo) {
      dispatch(changeIsDone(todo));
    },
    deleteTodo() {
      dispatch(deleteTodo());
    },
    resetTodo() {
      dispatch(resetTodo());
    },
    notComplete() {
      dispatch(notComplete());
    },
    toHome() {
      dispatch(push("/"));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
