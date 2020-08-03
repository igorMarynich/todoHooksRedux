import React from 'react';
import TodoItem from './TodoItem'

const Todolist = ({ todos }) => {
  return (
    <div className="App">
      <ul style={{ listStyleType: 'none'}}>
          {todos.map( (todo, id) => {
              return (
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    id={id}/>
              )
          }
          )}
      </ul>
    </div>
  );
}

export default Todolist;
