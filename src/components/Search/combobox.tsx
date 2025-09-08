
import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export interface ComboboxOption {
  value: string
  label: string
}

export interface ComboboxProps {
  id?: string
  label?: string
  options: ComboboxOption[]
  multiple?: boolean
  value?: string | string[]
  onChange?: (value: string | string[]) => void
  optionLabel?: keyof ComboboxOption
  outlined?: boolean
  withSearch?: boolean
}

export function Combobox({
  id,
  label,
  options,
  multiple = false,
  value: controlledValue,
  onChange,
  optionLabel = "label",
  outlined = false,
  withSearch = true,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<string | string[]>(
    controlledValue ?? (multiple ? [] : "")
  )
  const [search, setSearch] = React.useState("")

  const handleSelect = (selectedValue: string) => {
    if (multiple) {
      let newValue: string[]
      if (Array.isArray(value) && value.includes(selectedValue)) {
        newValue = value.filter((v) => v !== selectedValue)
      } else {
        newValue = [...(Array.isArray(value) ? value : []), selectedValue]
      }
      setValue(newValue)
      onChange?.(newValue)
    } else {
      setValue(selectedValue)
      setOpen(false)
      onChange?.(selectedValue)
    }
  }

  const displayLabel = () => {
    if (multiple) {
      if (Array.isArray(value) && value.length > 0) {
        return value
          .map((v) => options.find((o) => o.value === v)?.[optionLabel])
          .filter(Boolean)
      }
      return []
    } else {
      return options.find((o) => o.value === value)?.[optionLabel] ?? ""
    }
  }

  const highlightMatch = (text: string) => {
    if (!search) return text
    const regex = new RegExp(`(${search})`, "gi")
    const parts = text.split(regex)
    return (
      <>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <span key={i} className="text-green-500 font-semibold">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    )
  }

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id={id}
            variant={outlined ? "outline" : "default"}
            role="combobox"
            aria-expanded={open}
            className={cn(
              "min-w-[600px] justify-start gap-2 flex-wrap",
              multiple && "flex flex-wrap items-center"
            )}
          >
            {multiple ? (
              Array.isArray(displayLabel()) && displayLabel().length > 0 ? (
                <div className="flex flex-wrap gap-1">
                  {(displayLabel() as string[]).map((labelText, i) => (
                    <Badge key={i} variant="secondary">
                      {labelText}
                    </Badge>
                  ))}
                </div>
              ) : null
            ) : (
              <span>{displayLabel() as string}</span>
            )}
            <ChevronsUpDown className="opacity-50 ml-auto" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="min-w-[600px] p-0">
          <Command>
            {withSearch && (
              <input
                type="text"
                className="w-full border-b border-gray-200 px-2 py-1 h-9 focus:outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            )}
            <CommandList role="listbox">
              <CommandEmpty>No options found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    role="option"
                    key={option.value}
                    value={option.value}
                    onSelect={() => handleSelect(option.value)}
                  >
                    {highlightMatch(option[optionLabel] as string)}
                    {multiple ? (
                      Array.isArray(value) && value.includes(option.value) && (
                        <Check className="ml-auto opacity-100" />
                      )
                    ) : (
                      <Check
                        className={cn(
                          "ml-auto",
                          value === option.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
