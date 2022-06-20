import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../redux/actions/todoActions";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const [loading, setLoading] = useState(true);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getTodos());
    setLoading(false);
  }, [dispatch]);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-xl m-auto mt-10 ">
      {todos?.map((item, k) => {
        return <TodoCard key={item._id} item={item} />;
      })}
      {!todos[0] && (
        <div className="w-full h-full flex flex-col items-center justify-center fixed top-0 left-0 ">
          <h1>No todos to show</h1>
          <h1>Click the + button to add todos</h1>
        </div>
      )}
    </div>
  );
};

export default TodoList;
