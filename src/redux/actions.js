import {ADD_TODO, TOGGLE_TODO, DELETE_TODO, FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAIL} from './types'
import axios from 'axios'

export const addTodo = title => {
    return {
        type: ADD_TODO,
        title
    }
}

export const toggleTodo = id =>{
    return{
        type: TOGGLE_TODO,
        id
    }
}

export const deleteTodo = id =>{
    return{
        type: DELETE_TODO,
        id
    }
}

export const fetchRequest = () => {
    return{
        type: FETCH_REQUEST
    }
}

export const fetchSuccess = data => {
    return{
        type: FETCH_SUCCESS,
        data
    }
}

export const fetchFail = error => {
    return{
        type: FETCH_FAIL,
        error
    }
}

export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchRequest)
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => {
                const list = response.data
                dispatch(fetchSuccess(list))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(fetchFail(errorMessage))
            })
    }
}





