import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {

  return (
    <>
    <div className='drop-shadow-2xl'>My To-Do</div>
     <AddTodo />
     <Todos />
    </>
  )
}

export default App
