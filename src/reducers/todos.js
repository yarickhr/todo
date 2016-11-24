const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}


const deltodo = (state, action) => {
    switch (action.type) {
        case 'DEL_TODO':
            if (state.id == action.id) {
                return {
                    id: action.id,
                    completed: true,
                    text: 'I am del'
                }
            }

        default:
            return state
    }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )

    case 'DEL_TODO':
      return state.map(obj =>
            deltodo(obj, action)
        )

    default:
      return state
  }
}

export default todos
