import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList, } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
export function Combobox({ id, label, options, multiple = false, value: controlledValue, onChange, optionLabel = "label", outlined = false, withSearch = true, }) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(controlledValue ?? (multiple ? [] : ""));
    const [search, setSearch] = React.useState("");
    const handleSelect = (selectedValue) => {
        if (multiple) {
            let newValue;
            if (Array.isArray(value) && value.includes(selectedValue)) {
                newValue = value.filter((v) => v !== selectedValue);
            }
            else {
                newValue = [...(Array.isArray(value) ? value : []), selectedValue];
            }
            setValue(newValue);
            onChange?.(newValue);
        }
        else {
            setValue(selectedValue);
            setOpen(false);
            onChange?.(selectedValue);
        }
    };
    const displayLabel = () => {
        if (multiple) {
            if (Array.isArray(value) && value.length > 0) {
                return value
                    .map((v) => options.find((o) => o.value === v)?.[optionLabel])
                    .filter(Boolean);
            }
            return [];
        }
        else {
            return options.find((o) => o.value === value)?.[optionLabel] ?? "";
        }
    };
    const highlightMatch = (text) => {
        if (!search)
            return text;
        const regex = new RegExp(`(${search})`, "gi");
        const parts = text.split(regex);
        return (_jsx(_Fragment, { children: parts.map((part, i) => regex.test(part) ? (_jsx("span", { className: "text-green-500 font-semibold", children: part }, i)) : (part)) }));
    };
    return (_jsxs("div", { className: "flex flex-col gap-1", children: [label && (_jsx("label", { htmlFor: id, className: "text-sm font-medium text-gray-700", children: label })), _jsxs(Popover, { open: open, onOpenChange: setOpen, children: [_jsx(PopoverTrigger, { asChild: true, children: _jsxs(Button, { id: id, variant: outlined ? "outline" : "default", role: "combobox", "aria-expanded": open, className: cn("min-w-[600px] justify-start gap-2 flex-wrap", multiple && "flex flex-wrap items-center"), children: [multiple ? (Array.isArray(displayLabel()) && displayLabel().length > 0 ? (_jsx("div", { className: "flex flex-wrap gap-1", children: displayLabel().map((labelText, i) => (_jsx(Badge, { variant: "secondary", children: labelText }, i))) })) : null) : (_jsx("span", { children: displayLabel() })), _jsx(ChevronsUpDown, { className: "opacity-50 ml-auto" })] }) }), _jsx(PopoverContent, { className: "min-w-[600px] p-0", children: _jsxs(Command, { children: [withSearch && (_jsx("input", { type: "text", className: "w-full border-b border-gray-200 px-2 py-1 h-9 focus:outline-none", value: search, onChange: (e) => setSearch(e.target.value) })), _jsxs(CommandList, { role: "listbox", children: [_jsx(CommandEmpty, { children: "No options found." }), _jsx(CommandGroup, { children: options.map((option) => (_jsxs(CommandItem, { role: "option", value: option.value, onSelect: () => handleSelect(option.value), children: [highlightMatch(option[optionLabel]), multiple ? (Array.isArray(value) && value.includes(option.value) && (_jsx(Check, { className: "ml-auto opacity-100" }))) : (_jsx(Check, { className: cn("ml-auto", value === option.value ? "opacity-100" : "opacity-0") }))] }, option.value))) })] })] }) })] })] }));
}
