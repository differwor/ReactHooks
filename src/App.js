import { useEffect, useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const [todoList, setTodoList] = useState([ //tạo 1 state 
    { id: 1, title: 'I love you'},
    { id: 2, title: 'He love you'},
    { id: 3, title: 'They love you'}
  ]);

  const [postlist, setPostList] = useState([]);

  useEffect(() => {

    // goi api bang lib Fetch
    async function fetchPostList() {

      try {
        const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      console.log({responseJSON});

      const {data} = responseJSON;
      setPostList(data);
      } catch (error) {
        console.log('Lỗi rồi kìa :3')
      }
      
    }

    fetchPostList();
  }, []);

  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return; 

    const newTodoList = [ ...todoList ]; // tao list moi bang todolist
    newTodoList.splice(index, 1); // xoa 1 phan tu o vi tri index
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log(formValues);
    // add new todo to current todolist
    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    };

    const newTodoList = [...todoList];
    newTodoList.push(newTodo); //them 1 item
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>React hooks - ColorBox - TodoList - TodoForm - PostList</h1>
      
      {/* <ColorBox />
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onToDoClick={handleTodoClick} /> */}

      <PostList posts={postlist} />
      
    </div>
  );
}

export default App;
