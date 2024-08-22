"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const DropDownContext_1 = require("../DropDownContext");
const ListItem = (0, react_1.memo)(function ListItem({ item }) {
    const { state, update } = (0, react_1.useContext)(DropDownContext_1.DropDownContext);
    const highlightMatches = (name) => {
        const substring = new RegExp(state.name, "gi");
        const original = name;
        return original.replace(substring, (match) => `<span class="highlight-matches">${match}</span>`);
    };
    const handleImgLoadingError = (e) => (e.target.src = 'https://assets.codepen.io/148866/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1666958116&width=256');
    return ((0, jsx_runtime_1.jsxs)("div", { className: "list-item", onClick: () => update({ name: item.name, hideList: true }), children: [(0, jsx_runtime_1.jsx)("img", { src: item.flag, alt: item.name, width: "50px", height: "30px", onError: (e) => handleImgLoadingError(e) }), state.name.length > 0 ? (0, jsx_runtime_1.jsx)("span", { dangerouslySetInnerHTML: { __html: highlightMatches(item.name) } }) : (0, jsx_runtime_1.jsx)("span", { children: item.name })] }));
});
exports.default = ListItem;
