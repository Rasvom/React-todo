import React, { useState } from "react";
import styles from "./TodoItem.module.css";

interface todo {
  id: number,
  text: string,
  completed: boolean
}

const TodoItem = () => {
  const [todos, setTodos] = useState<todo[]>([
    {
      id: 214125,
      text: "rwqrqw",
      completed: true,
    },
  ]);

  const [value, setValue] = useState("");

  function onChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function addTodo() {
    let todo = {
      id: Date.now(),
      text: value,
      completed: false,
    };
    setTodos([todo, ...todos]);
  }

  function removeTodo(id:number) {
    setTodos(todos.filter((item) => item.id !== id));
  }

  function onClickCheckbox(id: number) {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  }

  return (
    <div className={styles.wrap}>
      <input className={styles.input} placeholder="Введите текст" value={value} onChange={onChangeInput} />
      <button className={styles.addBtn} onClick={addTodo}>ADD</button>
      <div className={styles.todos}>
        {todos.map((item) => {
          return (
            <div key={item.id} className={item.completed ? `${styles.todo} ${styles.selected}` : styles.todo} >
              <span onClick={() => onClickCheckbox(item.id)}>★</span>
              <div>{item.text}</div>
              <button
                className={styles.removeBtn}
                onClick={() => removeTodo(item.id)}
              >
                ❌
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoItem;
