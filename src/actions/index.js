import fetch from 'isomorphic-fetch'

let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

const addName = (id, login) => ({
    type: 'ADD_LOGIN',
    payload: login,
    id
})


export const addLogin = (id) => {
    return function (dispatch) {
            fetch('https://api.github.com/users/yarickhr')
                .then(response => response.json())
                .then(data => {
                    dispatch(addName(id, data.login))
                })
            console.log('Hello I am add a image')
    }
}
