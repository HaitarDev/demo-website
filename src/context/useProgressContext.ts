import { useContext } from "react";
import ProgressContext from "./ProgressContext";

export function useProgressContext() {
  const context = useContext(ProgressContext);
  if (context === null) throw new Error(`Progress context is not available`);

  return context;
}
