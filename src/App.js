import { useEffect, useState } from "react";
import "./App.scss";
import queryString from "query-string"; //import packages nay de chuyen 1 obj qua string

import ColorBox from "./components/ColorBox";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import PostFiltersForm from "./components/PostFiltersForm";
import Clock from "./components/Clock";
import MagicBox from "./components/MagicBox";

function App() {
  //state
  const [todoList, setTodoList] = useState([
    //tạo 1 state
    { id: 1, title: "I love you" },
    { id: 2, title: "He love you" },
    { id: 3, title: "They love you" },
  ]);

  const [postlist, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 2,
  });

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  //useEffect
  useEffect(() => {
    // goi api bang lib Fetch
    async function fetchPostList() {
      try {
        //_limit=10&_page=1
        const paramString = queryString.stringify(filters); // chuyen obj filter sang string

        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data, pagination } = responseJSON;

        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Lỗi rồi kìa :3");
      }
    }

    fetchPostList();
  }, [filters]);

  // function handle
  function handlePageChange(newPage) {
    console.log(newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  function handleTodoClick(todo) {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList]; // tao list moi bang todolist
    newTodoList.splice(index, 1); // xoa 1 phan tu o vi tri index
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log(formValues);
    // add new todo to current todolist
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };

    const newTodoList = [...todoList];
    newTodoList.push(newTodo); //them 1 item
    setTodoList(newTodoList);
  }

  function handleFiltersChange(newFilters) {
    console.log("new: ", newFilters);
    setFilters({
      ...filters,
      _page: 1, // reset ve trang 1 vi filter ko tới trang 2 3
      title_like: newFilters.searchTerm, // title_like là key search xử lý search ở backend r
    });
  }

  return (
    <div className="app">
      <h1>
        React hooks - ColorBox - TodoList - TodoForm - PostList(API) -
        Pagination - Clock(use cleanup)
      </h1>

      {/* <ColorBox />
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onToDoClick={handleTodoClick} /> */}

      {/* <PostFiltersForm onSubmit={handleFiltersChange} /> */}

      {/* <PostList posts={postlist} /> */}
      {/* <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}

      <Clock />
      <MagicBox />

    </div>
  );
}

export default App;
