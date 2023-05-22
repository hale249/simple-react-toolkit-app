import './App.css'
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {

  return (
    <>
        <div style={{ marginTop: '10px', marginLeft: '20px' }}>
            <div>App todo list</div>
            <AddTodo />
            <TodoList />
        </div>
    </>
  )
}

export default App
