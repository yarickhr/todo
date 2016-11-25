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
        case 'ADD_LOGIN':
            if (state.id == action.id) {
                return {
                    id: action.id,
                    completed: false,
                    text: action.payload
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

    case 'ADD_LOGIN':
      return state.map(obj =>
            deltodo(obj, action)
        )

    default:
      return state
  }
}

export default todos
