"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = List;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ListItem_1 = __importDefault(require("./ListItem"));
const DropDownContext_1 = require("../DropDownContext");
const debounce_1 = __importDefault(require("../utils/debounce"));
function List({ countryList }) {
    const { state } = (0, react_1.useContext)(DropDownContext_1.DropDownContext);
    const [filteredData, setFilteredData] = (0, react_1.useState)(countryList);
    const filteredDataFn = () => {
        const filteredResolve = countryList.filter((item) => item.name.toLowerCase()
            .includes(state.name.toLowerCase()));
        setFilteredData(filteredResolve);
    };
    const debounceFilter = (0, debounce_1.default)(filteredDataFn, 500);
    (0, react_1.useMemo)(() => {
        debounceFilter();
    }, [state.name]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "list", children: !state.hideList &&
            ((0, jsx_runtime_1.jsx)("div", { children: filteredData && filteredData.map((item) => (0, jsx_runtime_1.jsx)(ListItem_1.default, { item: item }, item.name)) })) }));
}
