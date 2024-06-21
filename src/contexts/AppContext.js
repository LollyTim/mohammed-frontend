// src/contexts/AppContext.js
import React, { createContext, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  editItem: null,
  data: [],
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_EDIT_ITEM":
      return { ...state, editItem: action.payload };
    case "CLEAR_EDIT_ITEM":
      return { ...state, editItem: null };
    case "FETCH_DATA_SUCCESS":
      return { ...state, data: action.payload, error: null };
    case "FETCH_DATA_FAILURE":
      return { ...state, error: action.payload };
    case "DELETE_ITEM_SUCCESS":
      return {
        ...state,
        data: state.data.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
