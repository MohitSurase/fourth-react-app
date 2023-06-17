import { useState } from "react";

function MyTodoList() {
  let [todoList, setTodoList] = useState([]);

  let getAllTodoAction = async () => {
    let url = "http://localhost:4000/find-all-todo";

    let res = await fetch(url);
    let list = await res.json();
    console.log(list);

    setTodoList([...list]);
  };
  return (
    <>
      <h1>Display all Todo</h1>
      <input
        type="button"
        value="Get all Data from Server"
        onClick={getAllTodoAction}
      />

      {todoList.map((item) => (
        <>
          <div className="alert alert-success">
            {item.task}
            <p>{item.description}</p>
          </div>
        </>
      ))}
    </>
  );
}

export default MyTodoList;
