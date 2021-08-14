import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array,
    onToDoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todos: [],
    onToDoClick: null,
}


function TodoList(props) {
    const {todos, onToDoClick} = props; // su dung obj destructoring de lay props

    function handleClick(todo) {
        if (onToDoClick) {
            onToDoClick(todo);
        }
    }

    return (
        <ul className="todo-list">
            {todos.map(todo => ( //map : tra ve 1 mang moi co gia tri tuong ung todos
                <li 
                    key={todo.id}
                    onClick={() => handleClick(todo)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}


export default TodoList;