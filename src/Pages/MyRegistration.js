import { useRef, useState } from "react";

function MyRegistration() {
  let formRef = useRef();
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
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      //Backend :
      let url = `http://localhost:4000/adduser?username=${user.username}&password=${user.password}&email=${user.email}&mobile=${user.mobile}`;
      let res = await fetch(url);

      if (res.status != 200) {
        // alert("Error server side");
        throw new Error("Server side error");
      }
      let newUser = {
        username: "",
        password: "",
        email: "",
        mobile: "",
      };
      setUser(newUser);

      formRef.current.classList.remove("was-validated");
      alert("Success");
    } catch (err) {
      alert("Error");
    }
  };

  return (
    <>
      <form ref={formRef} className="needs-validation">
        <input
          type="text"
          placeholder="Enter username"
          className="form-control"
          value={user.username}
          onChange={handlerUsernameAction}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          className="form-control"
          value={user.password}
          onChange={handlerPasswordAction}
          required
        />
        <input
          type="text"
          placeholder="Enter email        "
          className="form-control"
          value={user.email}
          onChange={handlerEmailAction}
          required
        />
        <input
          type="text"
          placeholder="Enter mobile             "
          className="form-control"
          value={user.mobile}
          onChange={handlerMobileAction}
          required
        />
        <input
          type="button"
          value="Register"
          className="w-100"
          onClick={registerAction}
        />
      </form>
    </>
  );
}

export default MyRegistration;
