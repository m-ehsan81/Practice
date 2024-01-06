import { Navigate, Route, Routes } from "react-router-dom";
import TodoList from "./pages/TodoList";
import NotFound from "./pages/404";

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/todos" />} />
      <Route path="/todos" element={<TodoList />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
