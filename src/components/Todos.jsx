import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../store/todoSlice";

const Todos = () => {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <>
      <ul className="list-none">
        {todos?.map((todo) => (
          <li
            className="mt-4 flex justify-between
items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <button onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-lime-500 border-0
py-1 px-4 focus:outline-none rounded text-md">
              <svg className="w-6 h-6 hover:fill-red-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                id="delete"><path d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,
0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,
0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,
1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,
2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,
8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,
1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,
0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z"></path></svg>
            </button>
            {/* <button onClick={() => dispatch(updateTodo(todo.id))} className="text-white bg-lime-100 hover:bg-lime-600 border-0
py-1 px-4 focus:outline-none rounded text-md"><svg className="w-6 h-6 hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="edit">
            <path d="M82.2 79.2H18.8c-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4h63.4c1.3 0 
            2.4-1.1 2.4-2.4s-1.1-2.4-2.4-2.4zM16.5 58.2l-.1 11.3c0 .6.2 1.3.7 1.7.5.4 1.1.7 
            1.7.7l11.3-.1c.6 0 1.2-.3 1.7-.7l38.8-38.8c.9-.9.9-2.5 0-3.4L59.4 17.7c-.9-.9-2.5-.9-3.4 
            0l-7.8 7.8-31 31c-.5.5-.7 1.1-.7 1.7zm49-27.6L61.1 35l-7.8-7.8 4.4-4.4 7.8 7.8zM21.3 
            59.2l28.6-28.6 7.8 7.8L29.1 67h-7.8v-7.8z"></path></svg></button> */}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
