import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyTodo from "./Pages/MyTodo";
import MyRegistration from "./Pages/MyRegistration";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Hello </h1>} />
          <Route path="/home" element={<h1>Home </h1>} />
          <Route path="/todo" element={<MyTodo />} />
          <Route path="/registration" element={<MyRegistration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
