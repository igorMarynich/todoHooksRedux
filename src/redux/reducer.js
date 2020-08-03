import {ADD_TODO, TOGGLE_TODO, DELETE_TODO, FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAIL} from './types'

const initialState = {
    isLoading: false,
    data: [],
    error: ''
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_TODO:
            return {
                data: [
                            ...state.data,
                            {
                                id: new Date().toString(),
                                title: action.title,
                                completed: false
                            }
                        ]
            }

        case DELETE_TODO:
            return {
                data: state.data.filter( todo => action.id !== todo.id)
            }

        case TOGGLE_TODO:
            return {
                data: state.data.map(todo => {
                        if (todo.id === action.id) {
                          todo.completed = !todo.completed
                        }
                        return todo
                      })
            }

        case FETCH_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case FETCH_SUCCESS:
            return {
                isLoading: false,
                data: action.data,
                error: ''
            }

        case FETCH_FAIL:
            return {
                isLoading: false,
                data: [],
                error: action.error
            }

        default:
            return state
    }
}

export default reducer