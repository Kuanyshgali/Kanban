import {useGetTodosQuery} from "./store/todos/todos.api";
import {Route, Routes} from "react-router-dom";
import {TodoLists} from "./pages/TodoLists";
import {Todo} from "./pages/Todo";
import {useActions} from "./hooks/useActions";
import {useEffect} from "react";
import "./App.scss"

export const App = () => {
//localStorage.clear()
  const { data: todos } = useGetTodosQuery()
  const { setTodos } = useActions()

  useEffect(() => {
    setTodos(localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : todos)

  }, [todos])

  return (
    <div className={"App"}>
      <Routes>
        <Route path="/" element={<TodoLists />} />
        <Route path="/todo/:id" element={<Todo />} />
      </Routes>
    </div>
  );
}
