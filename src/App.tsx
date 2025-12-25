import styles from "./styles.module.css";
import Header from "./components/header";
import { useState } from "react";
import List from "./components/list";

export interface ITodo {
  id: number;
  text: string;
  isReady: boolean;
}

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (newTodo: ITodo) => {
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (deleteTodoId: number) => {
    const newTodos = todos.filter((todo) => todo.id !== deleteTodoId);

    setTodos(newTodos);
  };

  const markTodoReady = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isReady: true,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className={styles.app}>
      <Header addTodo={addTodo} />
      <List
        todos={todos}
        deleteTodo={deleteTodo}
        markTodoReady={markTodoReady}
      />
    </div>
  );
}

export default App;
