import Modal from "react-modal/lib/components/Modal";
import { GrAdd } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../redux/actions/todoActions";
import { FiEdit } from "react-icons/fi";

const customStyle = {
  content: {
    width: "350px",
    height: "400px",
    margin: "auto",
    position: "relative",
    inset: "0px",
    border: "none",
    boxShadow: "5px 5px 7px #0000007d",
  },
};

const AddTodo = ({todo, setTodo, isModalOpen, setIsModalOpen, isUpdate}) => {

  const dispatch = useDispatch()

  const handleSubmit = () => {
    const newTodo = {
      ...todo,
      date:new Date()
    }
    dispatch(addTodo(newTodo))
    closeModal()
  }
  const editTodo = () => {
    const updatedTodo = {
      name:todo.name,
      description:todo.description,
      isComplete: todo.isComplete,
      date:todo.date,
      author:todo.author,
      uid:todo.uid
    }
    dispatch(updateTodo(updatedTodo, todo._id))
    closeModal()
  }
  const closeModal = () => {
    setIsModalOpen(false)
    setTodo({
      name:"",
    })
  }
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyle}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="flex flex-col justify-evenly text-center h-full ">
          <h1 className="text-xl">{isUpdate ? "Edit Todo" : "Add Todo"}</h1>
          <input
            onChange={(e) => setTodo({ ...todo, name: e.target.value, })}
            value={todo.name}
            className="p-2 border rounded-md focus:outline-none"
            type="text"
            placeholder="Enter Title"
          />
          <textarea
            className="p-2 border rounded-md focus:outline-none"
            name=""
            id=""
            cols="30"
            rows="7"
            placeholder="Description"
            onChange={(e) => setTodo({...todo, description: e.target.value})}
            value={todo.description}
          ></textarea>
          <button
            onClick={isUpdate ? editTodo : handleSubmit}
            className="flex items-center gap-3 bg-green-500 px-3 py-1 rounded-md justify-center"
          >
            {isUpdate ? 
          <>
            Update <FiEdit/>
          </>  :
          <>
          Add <GrAdd />
          </>
          }
          </button>
        </div>
        <p
          className=" absolute top-3 right-3 text-2xl hover:bg-red-600 hover:text-white cursor-pointer "
          onClick={closeModal}
        >
          <IoMdClose />
        </p>
      </Modal>
     
    </>
  );
};

export default AddTodo;
