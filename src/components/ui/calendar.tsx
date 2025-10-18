'use client';

import * as React from 'react';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Globe,
} from 'lucide-react';
import { DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'ghost',
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>['variant'];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <div className="w-full max-w-md mx-auto mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b0b0f] via-[#12121a] to-[#0b0b0f] p-6 sm:p-8 shadow-[0_0_25px_rgba(255,0,255,0.08)] text-white">
      {/* Title */}
      <h2 className="text-lg sm:text-xl font-semibold mb-6 text-white/90">
        Select a Date & Time
      </h2>

      {/* Calendar */}
      <DayPicker
        mode="range"
        showOutsideDays={showOutsideDays}
        numberOfMonths={1}
        className={cn('text-white w-full', className)}
        captionLayout={captionLayout}
        formatters={{
          formatMonthDropdown: date =>
            date.toLocaleString('default', { month: 'long' }),
          ...formatters,
        }}
        classNames={{
          months: 'flex flex-col gap-4 relative w-full',
          month_caption:
            'flex items-center justify-center text-sm font-medium mb-3',
          nav: 'flex items-center justify-between absolute inset-x-0 top-0',
          button_previous: cn(
            buttonVariants({ variant: buttonVariant }),
            'p-2 rounded-full hover:bg-white/10 transition-all'
          ),
          button_next: cn(
            buttonVariants({ variant: buttonVariant }),
            'p-2 rounded-full hover:bg-white/10 transition-all'
          ),
          table: 'w-full border-collapse text-sm',
          weekdays: 'flex justify-between text-xs text-white/40 mb-2',
          weekday: 'flex-1 text-center font-normal',
          week: 'flex justify-between w-full',
          day: 'relative flex items-center justify-center w-[2.2rem] h-[2.2rem] sm:w-[2.5rem] sm:h-[2.5rem]',
          day_button:
            'w-full h-full rounded-full flex items-center justify-center text-sm transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500',
          day_selected:
            'bg-gradient-to-r from-[#9b5cff] to-[#ff2fd1] text-white font-medium shadow-[0_0_10px_rgba(255,0,200,0.4)]',
          range_start:
            'bg-gradient-to-r from-[#9b5cff] to-[#c55cff] text-white font-medium rounded-l-full',
          range_middle:
            'bg-gradient-to-r from-[#9b5cff]/60 to-[#ff2fd1]/60 text-white font-medium',
          range_end:
            'bg-gradient-to-r from-[#c55cff] to-[#ff2fd1] text-white font-medium rounded-r-full',
          day_today: 'border border-purple-400',
          outside: 'text-white/25',
          ...classNames,
        }}
        components={{
          Chevron: ({ orientation }) =>
            orientation === 'left' ? (
              <ChevronLeftIcon className="w-4 h-4 text-white/70" />
            ) : (
              <ChevronRightIcon className="w-4 h-4 text-white/70" />
            ),
          DayButton: CalendarDayButton,
          ...components,
        }}
        {...props}
      />

      {/* Timezone Section */}
      <div className="mt-8 flex items-center justify-between bg-white/5 px-3 py-2 rounded-md text-sm text-white/70">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4" />
          <span>Central European Time (8:11pm)</span>
        </div>
        <ChevronDownIcon className="w-4 h-4 text-white/60" />
      </div>
    </div>
  );
}

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
        'w-full h-full rounded-full text-sm transition-all',
        'hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500',
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
