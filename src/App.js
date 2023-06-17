import { useRef, useState } from "react";

function App() {
  return (
    <>
      <h1>Counter App</h1>
      <CounterApp />
      <h1>Stateful List</h1>
      <MyTodo />
    </>
  );
}

function CounterApp() {
  let [Counter, setCounter] = useState(1);
  let [Counter2, setCounter2] = useState(1);
  let LikeMeAction = () => {
    Counter = Counter + 1;
    setCounter(Counter);
  };

  let DislikeAction = () => {
    Counter2 = Counter2 + 1;
    setCounter2(Counter2);
  };
  return (
    <>
      {Counter}
      <input type="button" value="LikeMe" onClick={LikeMeAction} />
      {Counter2}
      <input type="button" value="Dislike" onClick={DislikeAction} />
    </>
  );
}

function MyTodo() {
  let inputRef = useRef();
  let [Todo, SetTodo] = useState(["Hi"]);

  let AddMessage = () => {
    let inputValue = inputRef.current.value;
    let newTodo = [...Todo, inputValue];
    SetTodo(newTodo);

    inputRef.current.value = "";
  };
  return (
    <>
      <input type="text" ref={inputRef} placeholder="Enter Message" />
      <input type="button" value="Add Message" onClick={AddMessage} />

      {Todo.map((item) => (
        <Context message={item} />
      ))}
    </>
  );
}

function Context({ message }) {
  return (
    <>
      <h1>Context {message}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ab
        officia eveniet nihil eligendi maxime. Fugiat quaerat ut sed earum
        consequuntur voluptatibus praesentium at, sint officia, dolor impedit
        magnam libero? Minima quo accusantium maiores a ea maxime tempore,
        corrupti, in accusamus repellat, voluptatibus nostrum commodi debitis
        dolorem libero illum. Quo?
      </p>
      <div>
        <input type="button" value="&#128077;" />
        <input type="button" value="&#128078;" />
      </div>
    </>
  );
}

export default App;
