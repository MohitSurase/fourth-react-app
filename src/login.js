import { useRef, useState } from "react";

function App() {
  return (
    <>
      <h1>My Project</h1>
      <ListDemo />
    </>
  );
}

function ListDemo() {
  let inputRef = useRef();
  let [list, setList] = useState(["delhi"]);

  let addItemAction = () => {
    let inputValue = inputRef.current.value;
    let newList = [inputValue, ...list];
    setList(newList);

    inputRef.current.value = "";
  };

  return (
    <>
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-sm-12 col-md-6">
          <h1>Registraton App</h1>
          <input
            className="form-control"
            type="text"
            id="id1"
            ref={inputRef}
            placeholder="Enter user input..."
          />
          <input
            className="form-control"
            type="text"
            id="id1"
            ref={inputRef}
            placeholder="Enter Password..."
          />
          <input
            className="form-control"
            type="text"
            id="id1"
            ref={inputRef}
            placeholder="Enter Email..."
          />
          <input type="button" value="Login" onClick={addItemAction} />
        </div>
      </div>
    </>
  );
}

function MessageDemo({ message }) {
  return (
    <>
      <h1>Hello {message}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        dolorem quas sequi tenetur quo odit cupiditate assumenda voluptas
        quibusdam blanditiis voluptatem quis mollitia eaque molestiae animi,
        provident eligendi facilis incidunt.
      </p>
      <div>
        <input type="button" value="&#128077;" />
        <input type="button" value="&#128078;" />
      </div>
    </>
  );
}

export default App;
