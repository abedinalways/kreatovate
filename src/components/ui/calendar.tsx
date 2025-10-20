'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import { DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  const [selectedZone, setSelectedZone] = React.useState('CET');

  // Predefined timezone options
  const timeZones = [
    { code: 'CET', label: 'Central European Time (GMT+1)' },
    { code: 'BST', label: 'British Summer Time (GMT+1)' },
    { code: 'UTC', label: 'Coordinated Universal Time (GMT+0)' },
    { code: 'EST', label: 'Eastern Standard Time (GMT-5)' },
    { code: 'PST', label: 'Pacific Standard Time (GMT-8)' },
    { code: 'IST', label: 'India Standard Time (GMT+5:30)' },
    { code: 'JST', label: 'Japan Standard Time (GMT+9)' },
  ];

  const defaultClassNames = getDefaultClassNames();

  return (
    <div className="w-full max-w-[95vw] sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto mt-2 sm:mt-4 md:mt-6 p-4 sm:p-6 md:p-8 lg:p-10 shadow-[0_0_25px_rgba(255,0,255,0.08)] text-white rounded-lg sm:rounded-xl border border-purple-500/30 bg-gradient-to-br from-[#1a0b2e] via-[#16213e] to-[#0f1419]">
      {/* Title */}
      <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 md:mb-5 text-white/90 text-center sm:text-left">
        Select a Date & Time
      </h2>

      {/* Calendar */}
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn(
          'group/calendar p-2 sm:p-4 md:p-6 lg:p-8 [--cell-size:theme(spacing.9)] sm:[--cell-size:theme(spacing.10)] md:[--cell-size:theme(spacing.12)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent',
          String.raw`rtl:**:[.rdp-button_next>svg]:rotate-180`,
          String.raw`rtl:**:[.rdp-button_previous>svg]:rotate-180`,
          className
        )}
        captionLayout={captionLayout}
        formatters={{
          formatMonthDropdown: date =>
            date.toLocaleString('default', { month: 'short' }),
          ...formatters,
        }}
        classNames={{
          root: cn('w-fit mx-auto', defaultClassNames.root),
          months: cn(
            'flex gap-2 sm:gap-4 flex-col relative',
            defaultClassNames.months
          ),
          month: cn(
            'flex flex-col w-full gap-2 sm:gap-4',
            defaultClassNames.month
          ),
          nav: cn(
            'flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between',
            defaultClassNames.nav
          ),

          button_previous: cn(
            buttonVariants({ variant: 'ghost' }),
            'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none transition-all hover:bg-purple-500/10 hover:shadow-[0_0_10px_rgba(255,0,255,0.3)]',
            defaultClassNames.button_previous
          ),
          button_next: cn(
            buttonVariants({ variant: 'ghost' }),
            'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none transition-all hover:bg-purple-500/10 hover:shadow-[0_0_10px_rgba(255,0,255,0.3)]',
            defaultClassNames.button_next
          ),
          month_caption: cn(
            'flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)',
            defaultClassNames.month_caption
          ),
          dropdowns: cn(
            'w-full flex items-center  text-xs sm:text-sm font-medium justify-center h-(--cell-size) gap-1 sm:gap-1.5',
            defaultClassNames.dropdowns
          ),
          dropdown_root: cn(
            'relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md',
            defaultClassNames.dropdown_root
          ),
          dropdown: cn(
            'absolute bg-black inset-0 opacity-0',
            defaultClassNames.dropdown
          ),
          caption_label: cn(
            'select-none font-medium',
            captionLayout === 'label'
              ? 'text-xs sm:text-sm'
              : 'rounded-md pl-2 pr-1 flex items-center gap-1 text-xs sm:text-sm h-7 sm:h-8 [&>svg]:text-muted-foreground [&>svg]:size-3 sm:[&>svg]:size-3.5',
            defaultClassNames.caption_label
          ),
          table: 'w-full border-collapse',
          weekdays: cn('flex', defaultClassNames.weekdays),
          weekday: cn(
            'text-muted-foreground rounded-md flex-1 font-normal text-[0.65rem] sm:text-[0.75rem] md:text-[0.8rem] select-none',
            defaultClassNames.weekday
          ),
          week: cn('flex w-full mt-1 sm:mt-2', defaultClassNames.week),
          week_number_header: cn(
            'select-none w-(--cell-size)',
            defaultClassNames.week_number_header
          ),
          week_number: cn(
            'text-[0.65rem] sm:text-[0.75rem] md:text-[0.8rem] select-none text-muted-foreground',
            defaultClassNames.week_number
          ),
          day: cn(
            'relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none',
            defaultClassNames.day
          ),
          range_start: cn(
            'rounded-l-md bg-accent',
            defaultClassNames.range_start
          ),
          range_middle: cn('rounded-none', defaultClassNames.range_middle),
          range_end: cn('rounded-r-md bg-accent', defaultClassNames.range_end),
          today: cn(
            'bg-gradient text-accent-foreground rounded-md data-[selected=true]:rounded-none',
            defaultClassNames.today
          ),
          outside: cn(
            'text-muted-foreground aria-selected:text-muted-foreground',
            defaultClassNames.outside
          ),
          disabled: cn(
            'text-muted-foreground opacity-50',
            defaultClassNames.disabled
          ),
          hidden: cn('invisible', defaultClassNames.hidden),
          ...classNames,
        }}
        components={{
          Chevron: ({ orientation }) =>
            orientation === 'left' ? (
              <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            ) : (
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            ),
          DayButton: CalendarDayButton,
          ...components,
        }}
        {...props}
      />

      {/* 🕐 Time Zone Dropdown */}
      <div className="mt-4 sm:mt-5 md:mt-6">
        <p className="text-xs sm:text-sm text-white/60 mb-1 sm:mb-2">
          Time zone
        </p>

        <Select onValueChange={setSelectedZone} defaultValue={selectedZone}>
          <SelectTrigger className="w-full bg-white/5 border border-white/10 hover:border-purple-400/50 transition-all text-xs sm:text-sm text-white/80 px-2 sm:px-3 py-2 sm:py-2.5 rounded-md flex items-center justify-between">
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden">
              <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-white/60 flex-shrink-0" />
              <SelectValue
                placeholder="Select a timezone"
                className="truncate"
              />
            </div>
          </SelectTrigger>

          <SelectContent className="bg-[#0f1419]/95 border border-purple-600/40 text-white rounded-lg shadow-lg max-h-[60vh] overflow-y-auto">
            {timeZones.map(zone => (
              <SelectItem
                key={zone.code}
                value={zone.code}
                className="cursor-pointer hover:bg-white/10 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm"
              >
                {zone.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

// 🔮 Day Button Component
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      className={cn(
        'w-full h-full rounded-full text-xs sm:text-sm transition-all',
        'hover:bg-white/10 focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-purple-500',
        'data-[selected-single=true]:bg-gradient-to-r data-[selected-single=true]:from-[#9b5cff] data-[selected-single=true]:to-[#ff2fd1] data-[selected-single=true]:text-white',
        'data-[range-middle=true]:bg-gradient-to-r data-[range-middle=true]:from-[#9b5cff]/60 data-[range-middle=true]:to-[#ff2fd1]/60',
        'data-[range-start=true]:bg-gradient-to-r data-[range-start=true]:from-[#9b5cff] data-[range-start=true]:to-[#c55cff] data-[range-start=true]:text-white rounded-l-full',
        'data-[range-end=true]:bg-gradient-to-r data-[range-end=true]:from-[#c55cff] data-[range-end=true]:to-[#ff2fd1] data-[range-end=true]:text-white rounded-r-full',
        className
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
