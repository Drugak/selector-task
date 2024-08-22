import React, { createContext, useReducer, ReactNode } from 'react';
import '../assets/style.css';

type ContextState = {
  name: string;
  hideList: boolean;
};

type ActionType = Partial<ContextState>;

const initialState: ContextState = {
  name: "",
  hideList: true,
};

const reducer = (state: ContextState, action: ActionType): ContextState => ({
  ...state,
  ...action,
});

type DropDownContextType = {
  state: ContextState;
  update: React.Dispatch<ActionType>;
};

export const DropDownContext = createContext<DropDownContextType>({
  state: initialState,
  update: () => {},
});

type DropDownContextProviderProps = {
  children: ReactNode;
};

export const DropDownContextProvider = (props: DropDownContextProviderProps) => {
  const [state, update] = useReducer(reducer, initialState);

  return (
    <div>
      <DropDownContext.Provider value={{ state, update }}>
        {props.children}
      </DropDownContext.Provider>
    </div>
  );
};
