import React, { useState, useContext } from 'react'
import Context from '../context'

const AddTodo = () => {
    const [ value, setValue ] = useState('')
    const { addTodos } = useContext(Context)

    const handleForm = event => {
        event.preventDefault()
        addTodos(value)
        setValue('')
    }
    return(
        <form
            style={{ margin: 5}}
            onSubmit={handleForm}>
            <input
                type="text"
                value={value}
                onChange={ e => setValue(e.target.value)}
            />
            <button type="submit">
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo

