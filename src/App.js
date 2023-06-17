import { useState } from "react";
import MyTodo from "./Pages/MyTodo";

function App() {
  return (
    <>
      <h1>Registration</h1>
      <MyRegistration />
    </>
  );
}

function MyRegistration() {
  let [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
  });

  let handlerUsernameAction = (e) => {
    let newUser = { ...user, username: e.target.value };
    setUser(newUser);
  };

  let handlerPasswordAction = (e) => {
    let newUser = { ...user, password: e.target.value };
    setUser(newUser);
  };

  let handlerEmailAction = (e) => {
    let newUser = { ...user, email: e.target.value };
    setUser(newUser);
  };

  let handlerMobileAction = (e) => {
    let newUser = { ...user, mobile: e.target.value };
    setUser(newUser);
  };

  let registerAction = async () => {
    //Backend :
    let url = `http://localhost:4000/adduser?username=${user.username}&password=${user.password}&email=${user.email}&mobile=${user.mobile}`;
    await fetch(url);

    let newUser = {
      username: "",
      password: "",
      email: "",
      mobile: "",
    };
    setUser(newUser);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter username"
        className="form-control"
        value={user.username}
        onChange={handlerUsernameAction}
      />
      <input
        type="password"
        placeholder="Enter password"
        className="form-control"
        value={user.password}
        onChange={handlerPasswordAction}
      />
      <input
        type="text"
        placeholder="Enter email        "
        className="form-control"
        value={user.email}
        onChange={handlerEmailAction}
      />
      <input
        type="text"
        placeholder="Enter mobile             "
        className="form-control"
        value={user.mobile}
        onChange={handlerMobileAction}
      />
      <input
        type="button"
        value="Register"
        className="w-100"
        onClick={registerAction}
      />
    </>
  );
}

export default App;
