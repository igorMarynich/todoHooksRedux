import React, { useContext } from 'react';
import './Todoitem.css'
import Context from '../context'

const TodoItem = ({ todo, id }) => {
    const { onDeleteItem, onToggle } = useContext(Context)


    const classes = [];

    if (todo.completed) {
        classes.push('done')
    }


  return (
    <li>
        <span className={classes.join(' ')}>
            <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}/>
            <strong>
                {id + 1 }
                &nbsp;
            </strong>
                {todo.title}
        </span>
        <button
            style={{ margin: 5}}
            onClick={() => onDeleteItem(todo.id)}>
                Delete item
        </button>
    </li>
  );
}

export default TodoItem;
