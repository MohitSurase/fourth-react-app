import { useNavigate } from "react-router-dom";

function MyNavigationLinksUsingButton() {
  const navigate = useNavigate();

  let gotoHomeAction = () => navigate("/home");
  let gotoTodoAction = () => navigate("/todo");
  let gotoRegistrationAction = () => navigate("/registration");

  return (
    <>
      <div>
        <input type="button" value="Home" onClick={gotoHomeAction} />
        <input type="button" value="Todo" onClick={gotoTodoAction} />
        <input
          type="button"
          value="Registration"
          onClick={gotoRegistrationAction}
        />
      </div>
    </>
  );
}
export default MyNavigationLinksUsingButton;
