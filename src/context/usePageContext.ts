import { useContext } from "react";
import PageContext from "./PageContext";

function usePageDispatchContext() {
  const context = useContext(PageContext);

  if (!context) throw new Error(`ERROR: on Page context`);

  return context.dispatch;
}

function usePageStateContext() {
  const context = useContext(PageContext);
  if (!context) throw new Error(`ERROR: on Page context`);

  const state = context.state;

  return state;
}

export { usePageDispatchContext, usePageStateContext };
