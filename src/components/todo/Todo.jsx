import { useSelector } from "react-redux";
import TodoList from "./TodoList";
import { Navigate } from "react-router-dom";
import TodoForm from "./TodoForm";

const Todo = () => {
  const auth = useSelector((state) => state.auth);

  if (!auth._id) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
};
export default Todo;
