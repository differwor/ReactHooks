import { useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';

function App() {

  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love you'},
    { id: 2, title: 'He love you'},
    { id: 3, title: 'They love you'}
  ]);

  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return; 

    const newTodoList = [ ...todoList ]; // tao list moi bang todolist
    newTodoList.splice(index, 1); // xoa 1 phan tu o vi tri index
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>React hooks - TodoList</h1>
      
      <ColorBox />
      <TodoList todos={todoList} onToDoClick={handleTodoClick} />
    </div>
  );
}

export default App;
