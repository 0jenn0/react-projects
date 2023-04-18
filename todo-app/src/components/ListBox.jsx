import React, { useContext } from "react";
import List from "./List";
import { StateContext } from "../context/StateProvider";
import styles from "./ListBox.module.css";

export default function ListBox() {
  const { state, dispatch, router, routerDispatch } = useContext(StateContext);

  if (router.All === true)
    return (
      <div className={styles.container}>
        {state.todos.map((todo) => (
          <List
            key={todo.id.toString()}
            text={todo.text}
            id={todo.id}
            checked={todo.checked}
          />
        ))}
      </div>
    );

  if (router.Active === true)
    return (
      <div className={styles.container}>
        {state.todos
          .filter((todo) => todo.checked === false)
          .map((todo) => (
            <List
              key={todo.id.toString()}
              text={todo.text}
              id={todo.id}
              checked={todo.checked}
            />
          ))}
      </div>
    );

  if (router.Complete === true)
    return (
      <div className={styles.container}>
        {state.todos
          .filter((todo) => todo.checked === true)
          .map((todo) => (
            <List
              key={todo.id.toString()}
              text={todo.text}
              id={todo.id}
              checked={todo.checked}
            />
          ))}
      </div>
    );
}
