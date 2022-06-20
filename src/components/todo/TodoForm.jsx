import { useState } from "react";
import { GrAdd } from "react-icons/gr";
import AddTodo from "./AddTodo";

const TodoForm = () => {
    const [todo, setTodo] = useState({
        name: "",
        isComplete: false,
      });
      const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
     <AddTodo isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} todo={todo} setTodo={setTodo} />
        <button
        className="absolute bottom-5 right-5 bg-green-500 p-5 focus:outline-none shadow-md shadow-gray-600 rounded-full text-white "
        onClick={() => setIsModalOpen(true)}
      >
        <GrAdd />
      </button>
    </>
  )
}

export default TodoForm