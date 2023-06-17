import { useState } from "react";

function App() {
  return (
    <>
      <h1>My Todo</h1>
      <MyTodo />
    </>
  );
}

function MyTodo() {
  let [todo, SetTodo] = useState({ task: "", description: "" });

  let handleChangeTaskAction = (e) => {
    //console.log(e.target);
    //e.target == input object

    let newTodo = { ...todo, task: e.target.value };
    SetTodo(newTodo);
  };

  let handleChangeDescriptionAction = (e) => {
    let newTodo = { ...todo, description: e.target.value };
    SetTodo(newTodo);
  };

  let addTodoAction = async () => {
    // alert(todo.task + todo.description);
    // console.log(todo);

    let url = `http://localhost:4000/addtodo?task=${todo.task}&description=${todo.description}`;
    await fetch(url);
  };
  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Task"
        value={todo.task}
        onChange={handleChangeTaskAction}
      />
      <textarea
        name=""
        className="form-control"
        id=""
        cols="30"
        rows="3"
        placeholder="Enter Description"
        value={todo.description}
        onChange={handleChangeDescriptionAction}
      ></textarea>
      <input type="button" value="Add Todo" onClick={addTodoAction} />
    </>
  );
}

export default App;
