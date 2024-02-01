import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

const AddTodo = () => {

  const [Input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(Input))
    setInput('')
  }

  return (
   <>
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
    <input 
    type="text" 
    className="drop-shadow-2xl bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2
    focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8
transition-colors duration-200 ease-in-out"
    placeholder="Enter A Todo..." 
    value={Input} 
    onChange={(e) => setInput(e.target.value)}
    />
    <button type="submit" className="text-white border-o py-2
px-6 focus:outline-none bg-cyan-500 shadow-lg hover:shadow-cyan-500/50 skew-y-0 hover:skew-y-6 rounded text-lg">
    Add ToDo
    </button>
    </form>
   </>
  )
}

export default AddTodo
