"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DeelDropDown;
const react_1 = __importDefault(require("react"));
const Input_1 = __importDefault(require("./Input"));
const List_1 = __importDefault(require("./List"));
function DeelDropDown() {
    return (<div>
      <Input_1.default />
      <List_1.default />
    </div>);
}
