"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DeelDropDown;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Input_1 = __importDefault(require("./Input"));
const List_1 = __importDefault(require("./List"));
const DropDownContext_1 = require("../DropDownContext");
const fetcher_1 = __importDefault(require("../utils/fetcher"));
const ErrorBoundary_1 = __importDefault(require("./ErrorBoundary"));
function Layout() {
    const [response, setResponse] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const dataFetch = () => __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, fetcher_1.default)("https://restcountries.com/v2/all");
            setResponse(data);
        });
        dataFetch();
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { id: "deel-drop-down", children: (0, jsx_runtime_1.jsxs)(DropDownContext_1.DropDownContextProvider, { children: [(0, jsx_runtime_1.jsx)(Input_1.default, {}), response && (0, jsx_runtime_1.jsx)(List_1.default, { countryList: response })] }) }));
}
function DeelDropDown() {
    return ((0, jsx_runtime_1.jsx)(ErrorBoundary_1.default, { children: (0, jsx_runtime_1.jsx)(Layout, {}) }));
}
