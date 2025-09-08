import { jsx as _jsx } from "react/jsx-runtime";
export const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props }) => {
    // Base button styles
    const baseClasses = 'font-semibold rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';
    // Size classes
    const sizeClasses = size === 'small'
        ? 'px-3 py-1 text-sm'
        : size === 'large'
            ? 'px-6 py-3 text-lg'
            : 'px-4 py-2 text-base'; // medium
    // Color classes
    const colorClasses = primary
        ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 ';
    // If backgroundColor prop is provided, override Tailwind bg color
    const style = backgroundColor ? { backgroundColor } : undefined;
    return (_jsx("button", { type: "button", className: `${baseClasses} ${sizeClasses} ${colorClasses}`, style: style, ...props, children: label }));
};
