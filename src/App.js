import { useRef, useState } from "react";

function App() {
  return (
    <>
      <h1>My project</h1>
      <ListDemo />
    </>
  );
}

function ListDemo() {
  let inputRef = useRef();
  let [List, SetList] = useState(["Hi"]);

  let AddMessage = () => {
    let inputValue = inputRef.current.value;
    let newList = [...List, inputValue];
    SetList(newList);

    inputRef.current.value = "";
  };
  return (
    <>
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-sm-12 col-md-6">
          <h1>Register App</h1>
          <input
            type="text"
            className="form-control"
            ref={inputRef}
            placeholder="Enter User Input"
          />
          <input
            type="text"
            className="form-control"
            ref={inputRef}
            placeholder="Password"
          />
          <input
            type="text"
            className="form-control"
            ref={inputRef}
            placeholder="Email"
          />
          <input type="button" value="Login" onClick={AddMessage} />
        </div>
      </div>
    </>
  );
}

export default App;
