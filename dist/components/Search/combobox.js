var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList, } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
export function Combobox(_a) {
    var id = _a.id, label = _a.label, options = _a.options, _b = _a.multiple, multiple = _b === void 0 ? false : _b, controlledValue = _a.value, onChange = _a.onChange, _c = _a.optionLabel, optionLabel = _c === void 0 ? "label" : _c, _d = _a.outlined, outlined = _d === void 0 ? false : _d, _e = _a.withSearch, withSearch = _e === void 0 ? true : _e;
    var _f = React.useState(false), open = _f[0], setOpen = _f[1];
    var _g = React.useState(controlledValue !== null && controlledValue !== void 0 ? controlledValue : (multiple ? [] : "")), value = _g[0], setValue = _g[1];
    var _h = React.useState(""), search = _h[0], setSearch = _h[1];
    var handleSelect = function (selectedValue) {
        if (multiple) {
            var newValue = void 0;
            if (Array.isArray(value) && value.includes(selectedValue)) {
                newValue = value.filter(function (v) { return v !== selectedValue; });
            }
            else {
                newValue = __spreadArray(__spreadArray([], (Array.isArray(value) ? value : []), true), [selectedValue], false);
            }
            setValue(newValue);
            onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
        }
        else {
            setValue(selectedValue);
            setOpen(false);
            onChange === null || onChange === void 0 ? void 0 : onChange(selectedValue);
        }
    };
    var displayLabel = function () {
        var _a, _b;
        if (multiple) {
            if (Array.isArray(value) && value.length > 0) {
                return value
                    .map(function (v) { var _a; return (_a = options.find(function (o) { return o.value === v; })) === null || _a === void 0 ? void 0 : _a[optionLabel]; })
                    .filter(Boolean);
            }
            return [];
        }
        else {
            return (_b = (_a = options.find(function (o) { return o.value === value; })) === null || _a === void 0 ? void 0 : _a[optionLabel]) !== null && _b !== void 0 ? _b : "";
        }
    };
    var highlightMatch = function (text) {
        if (!search)
            return text;
        var regex = new RegExp("(".concat(search, ")"), "gi");
        var parts = text.split(regex);
        return (_jsx(_Fragment, { children: parts.map(function (part, i) {
                return regex.test(part) ? (_jsx("span", { className: "text-green-500 font-semibold", children: part }, i)) : (part);
            }) }));
    };
    return (_jsxs("div", { className: "flex flex-col gap-1", children: [label && (_jsx("label", { htmlFor: id, className: "text-sm font-medium text-gray-700", children: label })), _jsxs(Popover, { open: open, onOpenChange: setOpen, children: [_jsx(PopoverTrigger, { asChild: true, children: _jsxs(Button, { id: id, variant: outlined ? "outline" : "default", role: "combobox", "aria-expanded": open, className: cn("min-w-[600px] justify-start gap-2 flex-wrap", multiple && "flex flex-wrap items-center"), children: [multiple ? (Array.isArray(displayLabel()) && displayLabel().length > 0 ? (_jsx("div", { className: "flex flex-wrap gap-1", children: displayLabel().map(function (labelText, i) { return (_jsx(Badge, { variant: "secondary", children: labelText }, i)); }) })) : null) : (_jsx("span", { children: displayLabel() })), _jsx(ChevronsUpDown, { className: "opacity-50 ml-auto" })] }) }), _jsx(PopoverContent, { className: "min-w-[600px] p-0", children: _jsxs(Command, { children: [withSearch && (_jsx("input", { type: "text", className: "w-full border-b border-gray-200 px-2 py-1 h-9 focus:outline-none", value: search, onChange: function (e) { return setSearch(e.target.value); } })), _jsxs(CommandList, { role: "listbox", children: [_jsx(CommandEmpty, { children: "No options found." }), _jsx(CommandGroup, { children: options.map(function (option) { return (_jsxs(CommandItem, { role: "option", value: option.value, onSelect: function () { return handleSelect(option.value); }, children: [highlightMatch(option[optionLabel]), multiple ? (Array.isArray(value) && value.includes(option.value) && (_jsx(Check, { className: "ml-auto opacity-100" }))) : (_jsx(Check, { className: cn("ml-auto", value === option.value ? "opacity-100" : "opacity-0") }))] }, option.value)); }) })] })] }) })] })] }));
}
