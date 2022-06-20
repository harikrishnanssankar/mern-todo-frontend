import {toast} from "react-toastify"
const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_TODOS":
            return action.todos.data
        case "ADD_TODO":
            toast.success("Todo added...")
            return [action.todo.data,...state] 
        case "UPDATE_TODO":
            toast.success("Todo updated...")
            return state.map((todo) => todo._id === action.todo.data._id ? action.todo.data : todo)
        case "CHECK_TODO":
            toast.success("Todo status changed...")
            return state.map((todo) => todo._id === action.todo.data._id ? action.todo.data : todo)
        case "DELETE_TODO":
            toast.success("Todo deleted...")
            return state.filter((todo) => todo._id !== action.id )
        default:
            return state
    }
}

export default todoReducer;