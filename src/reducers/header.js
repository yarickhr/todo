const headers = (state = { text: 'no one'}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
        return {
            id: action.id,
            text: action.text,
            completed: false
        }
    default:
      return state
  }
}

export default headers
