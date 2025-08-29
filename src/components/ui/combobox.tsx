"use client"

import * as React from "react"
import { ChevronSelectorVertical, Check } from "@untitled-ui/icons-react";
import { cn } from "../../lib/utils"
import { Label } from "@/components/ui/label"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover"

const topics = [
  { value: "Setting up modem", label: "Setting up modem" },
  { value: "Outage information", label: "Outage information" },
  { value: "Payment help", label: "Payment help" },
  { value: "Disconnecting", label: "Disconnecting" },
  { value: "What is eSIM?", label: "What is eSIM?" },
]

export interface ComboboxProps {
  placeholder?: string
  emptyMessage?: string
  className?: string
  label?: string
}

export function Combobox({ 
  placeholder = "Select topic", 
  emptyMessage = "No topic found.", 
  className,
  label = "Topic"
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const comboboxId = React.useId()
  const labelId = React.useId()

  return (
    <div className="flex flex-col space-y-2">
      <Label id={labelId} htmlFor={comboboxId}>{label}</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            id={comboboxId}
            type="button"
            role="combobox"
            aria-expanded={open}
            aria-haspopup="listbox"
            aria-controls={open ? "combobox-listbox" : undefined}
            aria-labelledby={labelId}
            aria-autocomplete="list"
            className={cn(
              "flex items-center font-proxima-regular justify-between w-full sm:w-[200px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sys-secondary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              "border-sys-divider-decorative border-2 h-10",
              className
            )}
          >
            <span className="truncate">
              {value
                ? topics.find((topic) => topic.value === value)?.label
                : placeholder}
            </span>
            <ChevronSelectorVertical className="w-4 h-4 ml-2 opacity-50 shrink-0" aria-hidden="true" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-full sm:w-[200px] font-proxima-regular bg-transparent p-0" align="start">
          <Command className="rounded-2xl">
            <CommandInput placeholder="Search topic..." className="h-9 font-proxima-regular" />
            <CommandList id="combobox-listbox">
              <CommandEmpty>{emptyMessage}</CommandEmpty>
              <CommandGroup>
                {topics.map((topic) => (
                  <CommandItem
                    key={topic.value}
                    value={topic.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                    role="option"
                    aria-selected={value === topic.value}
                  >
                    {topic.label}
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === topic.value ? "opacity-100" : "opacity-0"
                      )}
                      aria-hidden="true"
                    />
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