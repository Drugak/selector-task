import React, { ReactNode } from 'react';
import '../assets/style.css';
type ContextState = {
    name: string;
    hideList: boolean;
};
type ActionType = Partial<ContextState>;
type DropDownContextType = {
    state: ContextState;
    update: React.Dispatch<ActionType>;
};
export declare const DropDownContext: React.Context<DropDownContextType>;
type DropDownContextProviderProps = {
    children: ReactNode;
};
export declare const DropDownContextProvider: (props: DropDownContextProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
