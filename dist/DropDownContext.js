"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropDownContextProvider = exports.DropDownContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("../assets/style.css");
const initialState = {
    name: "",
    hideList: true,
};
const reducer = (state, action) => (Object.assign(Object.assign({}, state), action));
exports.DropDownContext = (0, react_1.createContext)({
    state: initialState,
    update: () => { },
});
const DropDownContextProvider = (props) => {
    const [state, update] = (0, react_1.useReducer)(reducer, initialState);
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(exports.DropDownContext.Provider, { value: { state, update }, children: props.children }) }));
};
exports.DropDownContextProvider = DropDownContextProvider;
