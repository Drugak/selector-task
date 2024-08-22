"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Input;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const DropDownContext_1 = require("../DropDownContext");
function Input() {
    const { state, update } = (0, react_1.useContext)(DropDownContext_1.DropDownContext);
    const inputChange = (e) => {
        update({ name: e.target.value, hideList: false });
    };
    const toogleList = () => {
        update({ hideList: !state.hideList });
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("input", { autoComplete: "off", pattern: "[a-zA-Z]{2,}", "aria-label": "input", onClick: toogleList, onChange: inputChange, type: "text", id: "country-input", value: state.name, name: "country", required: true, placeholder: "Please type the country name or select from the list." }) }));
}
