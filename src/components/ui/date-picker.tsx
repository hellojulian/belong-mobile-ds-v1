"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { DateRange, DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export interface DatePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: 'single' | 'range'
}

export function DatePicker({
  className,
  mode = 'range',
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date | DateRange | undefined>(undefined)

  const disabledDays = [
    { before: new Date(1976, 0, 1) },
    { after: new Date(2050, 11, 31) },
  ]

  const handleSelect = (newDate: Date | DateRange | undefined) => {
    setDate(newDate)
  }

  const formatDate = (date: Date | DateRange | undefined) => {
    if (!date) return "Select a date"
    if (mode === 'single' && date instanceof Date) {
      return format(date, "LLL dd, y")
    }
    if (mode === 'range' && 'from' in date && date.from) {
      const from = format(date.from, "LLL dd, y")
      const to = date.to ? format(date.to, "LLL dd, y") : null
      return to ? `${from} - ${to}` : from
    }
    return "Invalid date"
  }

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground",
              "focus:ring-2 focus:ring-sys-secondary focus:ring-offset-2"
            )}
            aria-label={formatDate(date)}
          >
            <CalendarIcon className="w-4 h-4 mr-2" aria-hidden="true" />
            {formatDate(date)}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 tracking-tight bg-white shadow-lg rounded-3xl font-proxima-semibold" align="start">
          <Card>
            <CardContent className="p-0">
              <DayPicker
                mode={mode}
                defaultMonth={mode === 'single' ? date as Date : (date as DateRange)?.from ?? new Date()}
                selected={date}
                onSelect={handleSelect}
                numberOfMonths={mode === 'single' ? 1 : 2}
                disabled={disabledDays}
                showOutsideDays
                className="p-4"
                classNames={{
                  months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                  month: "space-y-4",
                  caption: "flex justify-center pt-1 relative items-center",
                  caption_label: "text-xl font-bold font-proxima",
                  nav: "space-x-1 flex items-center",
                  nav_button: cn(
                    buttonVariants({ variant: "outline" }),
                    "h-7 w-7 bg-transparent p-0 focus:ring-4 focus:ring-sys-secondary focus:ring-offset-2"
                  ),
                  nav_button_previous: "absolute left-1",
                  nav_button_next: "absolute right-1",
                  table: "w-full border-collapse space-y-1",
                  head_row: "flex",
                  head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
                  row: "flex w-full mt-2",
                  cell: "text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-xl [&:has([aria-selected].day-outside)]:bg-sys-surface-bright [&:has([aria-selected])]:bg-sys-secondary-container first:[&:has([aria-selected])]:rounded-l-xl last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                  day: cn(
                    buttonVariants({ variant: "ghost" }),
                    "h-9 w-9 p-0 font-normal aria-selected:opacity-100 focus:ring-4 focus:ring-sys-secondary focus:ring-offset-2"
                  ),
                  day_range_end: "day-range-end",
                  day_selected: "bg-sys-secondary text-sys-secondary-container rounded-lg border-sys-secondary hover:bg-sys-secondary hover:text-sys-secondary-container focus:bg-sys-secondary focus:text-sys-secondary-container",
                  day_today: "bg-transparent text-accent-foreground",
                  day_outside: "day-outside text-muted-foreground aria-selected:bg-sys-surface-bright aria-selected:text-muted-foreground",
                  day_disabled: "text-sys-divider-decorative",
                  day_range_middle: "aria-selected:bg-sys-secondary-container aria-selected:text-sys-on-secondary-container",
                  day_hidden: "invisible",
                }}
                components={{
                  IconLeft: ({ ...props }) => <ChevronLeft className="w-4 h-4" />,
                  IconRight: ({ ...props }) => <ChevronRight className="w-4 h-4" />,
                }}
              />
            </CardContent>
            <CardFooter className="p-4 border-t border-border">
              <Button
                variant="primary"
                className="w-full focus:ring-2 focus:ring-sys-secondary focus:ring-offset-2"
                onClick={() => handleSelect(undefined)}
              >
                Clear selected date{mode === 'range' ? 's' : ''}
              </Button>
            </CardFooter>
          </Card>
        </PopoverContent>
      </Popover>
    </div>
  )
}