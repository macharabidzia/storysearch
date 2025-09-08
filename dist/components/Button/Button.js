var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
export var Button = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, backgroundColor = _a.backgroundColor, label = _a.label, props = __rest(_a, ["primary", "size", "backgroundColor", "label"]);
    // Base button styles
    var baseClasses = 'font-semibold rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';
    // Size classes
    var sizeClasses = size === 'small'
        ? 'px-3 py-1 text-sm'
        : size === 'large'
            ? 'px-6 py-3 text-lg'
            : 'px-4 py-2 text-base'; // medium
    // Color classes
    var colorClasses = primary
        ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 ';
    // If backgroundColor prop is provided, override Tailwind bg color
    var style = backgroundColor ? { backgroundColor: backgroundColor } : undefined;
    return (_jsx("button", __assign({ type: "button", className: "".concat(baseClasses, " ").concat(sizeClasses, " ").concat(colorClasses), style: style }, props, { children: label })));
};
