import { useContext } from "react";
import { Context } from "./context";

const useHook = () => {
  const [store, dispatch] = useContext(Context);

  return {
    store,
  };
}

export default useHook;