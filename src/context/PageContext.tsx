import { ReactNode, createContext, useReducer } from "react";

type Props = {
  children: ReactNode;
};
interface State {
  isNavigation: boolean;
  isHeader: boolean;
  isCardOrList: boolean;
  isSidebar: boolean;
  isDark: boolean;
  isReactOrEmoji: boolean;
}
interface Value {
  state: State;
  dispatch: React.Dispatch<ActionType>;
}

export type ActionType = {
  type:
    | "navigation"
    | "header"
    | "cartOrList"
    | "sidebar"
    | "dark"
    | "reactOrEmoji";
  payload: boolean;
};

const initialValue: State = {
  isNavigation: false,
  isHeader: false,
  isCardOrList: true,
  isSidebar: true,
  isDark: false,
  isReactOrEmoji: true,
};

function reducer(state: State, action: ActionType) {
  switch (action.type) {
    case "navigation":
      return {
        ...state,
        isNavigation: action.payload,
      };

    case "header":
      return {
        ...state,
        isHeader: action.payload,
      };
    case "cartOrList":
      return {
        ...state,
        isCardOrList: action.payload,
      };

    case "sidebar":
      return {
        ...state,
        isSidebar: action.payload,
      };
    case "dark":
      return {
        ...state,
        isDark: action.payload,
      };
    case "reactOrEmoji":
      return {
        ...state,
        isReactOrEmoji: action.payload,
      };

    default:
      throw new Error("error in reducer ");
  }
}

const PageContext = createContext<Value | null>(null);
function PageProvider({ children }: Props) {
  // const [isOn, setIsOn] = useState<boolean>(false);
  // const value: Value = { isOn, setIsOn };

  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <PageContext.Provider value={{ state, dispatch }}>
      {children}
    </PageContext.Provider>
  );
}

export { PageProvider };
export default PageContext;
