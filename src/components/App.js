import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import SetHeader from '../containers/SetHeader'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <SetHeader />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
