export interface ComboboxOption {
    value: string;
    label: string;
}
export interface ComboboxProps {
    id?: string;
    label?: string;
    options: ComboboxOption[];
    multiple?: boolean;
    value?: string | string[];
    onChange?: (value: string | string[]) => void;
    optionLabel?: keyof ComboboxOption;
    outlined?: boolean;
    withSearch?: boolean;
}
export declare function Combobox({ id, label, options, multiple, value: controlledValue, onChange, optionLabel, outlined, withSearch, }: ComboboxProps): import("react/jsx-runtime").JSX.Element;
