import { createContext } from "react";
import reducer, { initialState } from "./reducer";

export const Context = createContext();

const Provider = ({ children }) => {
  const useState = useReducer(reducer, initialState);

  return <Context.Provider value={[...useState]}>{children}</Context.Provider>
};

export default Provider;