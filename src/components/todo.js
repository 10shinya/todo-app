import React from "react";
import Reboot from "material-ui/Reboot";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";



export default function TodoApp({ todoList, item, inputTodo, addTodo, changeIsDone, deleteTodo, resetTodo, notComplete, toHome }) {
  
  const todos = todoList.map(todo => {
    return (
      <li className="todolist" key={todo.id}>
        <input type="checkbox" checked={todo.isDone} onChange={() => changeIsDone(todo)} />
        <span className={todo.isDone ? "done" : ""}>
          {todo.title}
        </span>
        <span className="delete" onClick={() => deleteTodo(todo)}>[x]</span>
      </li>
    );
  });

  const filterTodos = todoList.filter(filterTodo => {
    return !filterTodo.isDone;
  });

  return (
    <div className="whole">
      <Reboot />
      <AppBar position="static">
        <Toolbar>
          <div className="home" onClick={() => toHome()}>Home</div> 
        </Toolbar>
      </AppBar>
      <div className="mytodos">
        <span className="m">M</span>
        <span className="y">y</span> <span className="t">T</span>
        <span className="o">o</span>
        <span className="d">d</span>
        <span className="oo">o</span>
        <span className="s">s</span>
      </div>
      <div className="number"> 未完了 {filterTodos.length}  /  総数  {todos.length}</div>
      <div className="form">
        <input className="text" type="text" value={item} placeholder=" todoを入力してください" onChange={(e) => inputTodo(e.target.value)} />
        <input className="add" type="submit" value="add" onClick={() => addTodo(item)} />
        <input className="reset" type="submit" value="reset" onClick={() => resetTodo()} />
      </div>
      <div>
        <button className="show" onClick={() => notComplete()}>show  "not complete todos"</button>
      </div>
      <ul className="list">
        {todos.length ? todos : <h3>nothing to do !</h3>}
      </ul>
    </div>
  );
}