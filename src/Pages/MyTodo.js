import { useRef, useState } from "react";

function MyTodo() {
  let formRef = useRef();
  let [successBox, setSuccessBox] = useState(false);
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
    formRef.current.classList.add("was-validated");
    let formStatus = formRef.current.checkValidity();
    if (!formStatus) {
      return;
    }

    let url = `http://localhost:4000/addtodo?task=${todo.task}&description=${todo.description}`;
    await fetch(url);

    let newTodo = { task: "", description: "" };
    SetTodo(newTodo);
    setSuccessBox(true);
    setTimeout(() => {
      setSuccessBox(false);
    }, 3000);

    formRef.current.classList.remove("was-validated");
  };

  return (
    <>
      <form ref={formRef} className="needs-validation">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Task"
          value={todo.task}
          onChange={handleChangeTaskAction}
          required
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
          required
        ></textarea>
        <input type="button" value="Add Todo" onClick={addTodoAction} />
        {successBox && (
          <div className="alert alert-success">Operation Success</div>
        )}
      </form>
    </>
  );
}

export default MyTodo;
