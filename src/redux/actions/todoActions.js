import axios from "axios"
import { setHeaders, url } from "../../api"
import {toast} from "react-toastify"


export const getTodos = () => {
    return (dispatch) => {
        axios.get(`${url}todos`, setHeaders()).then(todos => {
            dispatch({
                type:"GET_TODOS",
                todos
            })
        }).catch(error => {
            console.log(error);
            toast.error("Cant get todos, please try later...")
        })
    } 
}

export const addTodo = (todo) => {
    return (dispatch, getState) => {
        const author = getState().auth.name
        const uid = getState().auth._id
        axios.post(`${url}todos`, {...todo, author, uid}, setHeaders()).then(todo => {
            dispatch({
                type:"ADD_TODO",
                todo
            })
        }).catch(error => {
            console.log(error.message);
            toast.error(error.response?.data)
        })
    }
}

export const updateTodo = (updatedTodo, id) => {
    return (dispatch) => {
        axios.put(`${url}todos/${id}`, updatedTodo, setHeaders()).then(todo => {
            dispatch({
                type:"UPDATE_TODO",
                todo
            })
        }).catch(error => {
            console.log(error.message);
            toast.error(error.response?.data)
        })
    }
}

export const checkTodo = (id) => {
    return (dispatch) => {
        axios.patch(`${url}todos/${id}`, {}, setHeaders()).then(todo => {
            dispatch({
                type:"CHECK_TODO",
                todo
            })
        }).catch(error => {
            console.log(error.message);
            toast.error(error.response?.data)
        })
    }
}
export const deleteTodo = (id) => {
    return (dispatch) => {
        axios.delete(`${url}todos/${id}`, setHeaders(), {}).then(() => {
            dispatch({
                type:"DELETE_TODO",
                id
            })
        }).catch(error => {
            console.log(error.message);
            toast.error(error.response?.data)
        })
    }
}


