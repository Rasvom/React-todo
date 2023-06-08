import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoItem from "./Components/TodoItem";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TodoItem />
    </>
  );
}

export default App;
