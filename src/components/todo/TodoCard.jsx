import { FiEdit } from "react-icons/fi";
import { MdOutlineDone } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import Moment from "react-moment";
import AddTodo from "./AddTodo";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { checkTodo, deleteTodo } from "../../redux/actions/todoActions";


const tailwindClasses = {
  iconButtons : "text-xl cursor-pointer hover:scale-150"
}


const TodoCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todo, setTodo] = useState({});
  const handleUpdate = () => {
    setIsModalOpen(true);
    setTodo(item);
  };
  const dispatch = useDispatch();
  const handleStatus = () => {
    dispatch(checkTodo(item._id));
  };
  const handleDelete = () => {
    dispatch(deleteTodo(item._id));
  };
  return (
    <div className="p-4" >
      <div className="shadow-lg hover:shadow-xl flex justify-between p-3 h-44  ">
        <div className="h-full flex flex-col justify-between">
          <div  >
            <h1 className={`text-2xl ${item.isComplete&& "text-gray-400"} `} >{item.name}</h1>
            <p className={item.isComplete ? "text-gray-400" : ""}>{item?.description}</p>
          </div>
          <p className={`text-xs ${item.isComplete && "text-gray-400"} `}>
            <Moment date={item.date} fromNow />
          </p>
        </div>
        <div className="h-full flex flex-col justify-evenly">
          <p className={`${tailwindClasses.iconButtons} ${item.isComplete ? "text-green-700" : "text-zinc-600" }`}    onClick={handleStatus}>
            <MdOutlineDone />
          </p>
          <p className={`${tailwindClasses.iconButtons} text-blue-800`} onClick={handleUpdate}>
            <FiEdit />
          </p>
          <p className={`${tailwindClasses.iconButtons} text-red-700`} onClick={handleDelete}>
            <BsTrash />
          </p>
        </div>
      </div>
      <AddTodo
        isUpdate={true}
        todo={todo}
        setTodo={setTodo}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default TodoCard;
