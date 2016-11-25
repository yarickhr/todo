import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text, ondelClick }) => (
    <div>
        <li
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
        {text}
        </li>
        <button onClick={ondelClick}>GET LOGIN</button>
    </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
