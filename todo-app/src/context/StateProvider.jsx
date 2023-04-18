import React, { createContext, useReducer, useState } from "react";
import stateReducer from "../reducer/state-reducer";
import routerReducer from "../reducer/router-reducer";

export const StateContext = createContext();

export default function StateProvider({ children }) {
  // const [state, dispatch] = useReducer(stateReducer, initialState);
  const [state, dispatch] = useReducer(
    stateReducer,
    JSON.parse(window.localStorage.getItem("state")) || initialState
  );
  // const [router, routerDispatch] = useReducer(routerReducer, initialRouter);
  const [router, routerDispatch] = useReducer(
    routerReducer,
    JSON.parse(window.localStorage.getItem("router")) || initialRouter
  );

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = (className) => {
    // console.log("핸들다크모드 :", className);
    // console.log("isDarkmode", isDarkMode);
    // console.log(`styles.${className}-dark`);
    return isDarkMode
      ? `styles.${className}-dark`
      : `styles.${className.split("-")[0]}`;
  };

  return (
    <StateContext.Provider
      value={{
        state,
        dispatch,
        router,
        routerDispatch,
        isDarkMode,
        setIsDarkMode,
        handleDarkMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

const initialState = {
  counter: 2,
  todos: [
    { id: 1, text: "리액트 공부하기", checked: true },
    {
      id: 2,
      text: "넥스트 공부하기",
      checked: false,
    },
  ],
};

const initialRouter = {
  All: true,
  Active: false,
  Complete: false,
};

const initialDarkMode = false;
