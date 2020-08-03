import React, { useState, useEffect }  from 'react';
import TodoList from './components/TodoList';
import Context from './context'
import AddTodo from './components/AddTodo'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, toggleTodo, fetchData} from './redux/actions'

const App = () => {

  const [todos, setTodos] = useState([])
  const dispatch = useDispatch()
  const list = useSelector(state => state.data)

  useEffect(() => {
    setTodos(list)
  }, [list])

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch]);

  const onDeleteItem = id => {
    dispatch(deleteTodo(id))
  }

  const onToggle = id => {
    dispatch(toggleTodo(id))
  }

  const addTodos = title => {
    dispatch(addTodo(title))
  }


  return (
    <Context.Provider value={{
      onDeleteItem,
      onToggle,
      addTodos
    }}>
      <div className="App">
        <AddTodo />
        {todos.length > 0
          ? <TodoList
            todos={list}
            onDelete={onDeleteItem}
            onCheck={onToggle}/>
          : <p> No Todos</p>}
      </div>
    </Context.Provider>
  );
}

export default App;
