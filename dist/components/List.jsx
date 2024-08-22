"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = List;
const react_1 = __importDefault(require("react"));
const ListItem_1 = __importDefault(require("./ListItem"));
function List() {
    return (<div>
      <ListItem_1.default />
      <ListItem_1.default />
      <ListItem_1.default />
    </div>);
}
