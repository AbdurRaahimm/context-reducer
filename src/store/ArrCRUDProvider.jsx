import { createContext, useContext, useReducer } from "react";
import { userList } from "../data/user";
import { arrReducer } from "../reducer/arrReducer";

export const ArrCRUDContext = createContext();

const initialState = {
  data: userList,
};

export default function ArrCRUDProvider({ children }) {
  const [state, dispatch] = useReducer(arrReducer, initialState);

  const contextValue = {
    state,
    dispatch,
  };
  return (
    <ArrCRUDContext.Provider value={contextValue}>
      {children}
    </ArrCRUDContext.Provider>
  )
};


// custom hook
export const useArrCRUD = () => {
  return useContext(ArrCRUDContext);
};
