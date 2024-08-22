"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function ErrorBoundary({ children }) {
    const [isError, setIsError] = (0, react_1.useState)(false);
    const lisnerFn = () => setIsError(true);
    (0, react_1.useEffect)(() => {
        window.addEventListener('error', lisnerFn);
        return () => {
            window.removeEventListener('error', lisnerFn);
        };
    }, []);
    return (isError ? (0, jsx_runtime_1.jsx)("h1", { children: "Sorry, some error, we are working on it..." }) : children);
}
exports.default = ErrorBoundary;
