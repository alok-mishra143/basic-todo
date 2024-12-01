import "./App.css";
import AllTodos from "./components/allTodos";
import { CreateTodo } from "./components/CreateTodo";

function App() {
  return (
    <div>
      <CreateTodo />
      <AllTodos />
    </div>
  );
}

export default App;
