"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = debounce;
function debounce(func, wait = 0) {
    let timeoutID = null;
    return function (...args) {
        const context = this;
        timeoutID && clearTimeout(timeoutID);
        timeoutID = setTimeout(function () {
            timeoutID = null;
            func.apply(context, args);
        }, wait);
    };
}
