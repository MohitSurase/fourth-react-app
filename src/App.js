import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import MyTodo from "./Pages/MyTodo";
import MyRegistration from "./Pages/MyRegistration";
import MyNavigationLinks from "./Pages/MyNavigationLinks";
import MyNavigationLinksUsingButton from "./Pages/MyNavigationLinksUsingButton";
import MyTodoList from "./Pages/MyTodoList";
function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavigationLinks />
        <Routes>
          <Route path="/" element={<h1>Hello </h1>} />
          <Route path="/home" element={<h1>Home </h1>} />
          <Route path="/todo" element={<MyTodo />} />
          <Route path="/todo-list" element={<MyTodoList />} />
          <Route path="/registration" element={<MyRegistration />} />
          <Route path="*" element={<h1>Page not found </h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
