import { useEffect, useState } from "react";

function MyTodoList() {
  let [todoList, setTodoList] = useState([]);

  //special function, hook => useEffect()
  // useEffect(() => {}, []);

  useEffect(() => {
    getAllTodoAction();
  }, []);

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
