import { ReactNode, createContext, useState } from "react";

type Props = {
  children: ReactNode;
};
type ValueProps = {
  progress: number;
  currentTitle: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  setCurrentTitle: React.Dispatch<React.SetStateAction<number>>;
};

const ProgressContext = createContext<ValueProps | null>(null);

function ProgressProvider({ children }: Props) {
  const [progress, setProgress] = useState<number>(0);
  const [currentTitle, setCurrentTitle] = useState<number>(0);

  const value: ValueProps = {
    progress,
    currentTitle,
    setProgress,
    setCurrentTitle,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export { ProgressProvider };
export default ProgressContext;
