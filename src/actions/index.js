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

const delTodos = (id) => ({
    type: 'DEL_TODO',
    id
})


export function logId(id) {
    return function (dispatch) {
        setTimeout(function () {
            dispatch(delTodos(id))
            console.log('Hello I am function')
            }, 1000)
    }
}
