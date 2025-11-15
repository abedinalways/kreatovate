'use client';

import * as React from 'react';
import { Globe } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface CalendarProps {
  onDatesChange?: (dates: Date[]) => void; // callback for selected dates
}

export function Calendar({ onDatesChange }: CalendarProps) {
  const [selectedDates, setSelectedDates] = React.useState<Date[]>([]);
  const [selectedZone, setSelectedZone] = React.useState('CET');

  const timeZones = [
    { code: 'UTC', label: 'Coordinated Universal Time (GMT+0)' },
    { code: 'GMT', label: 'Greenwich Mean Time (GMT+0)' },
    { code: 'ECT', label: 'European Central Time (GMT+1)' },
    { code: 'EET', label: 'Eastern European Time (GMT+2)' },
    { code: 'ART', label: 'Eastern European Summer Time (GMT+3)' },
    { code: 'EAT', label: 'Eastern Africa Time (GMT+3)' },
    { code: 'MET', label: 'Middle East Time (GMT+3:30)' },
    { code: 'NET', label: 'Near East Time (GMT+4)' },
    { code: 'PLT', label: 'Pakistan Lahore Time (GMT+5)' },
    { code: 'IST', label: 'India Standard Time (GMT+5:30)' },
    { code: 'BST', label: 'Bangladesh Standard Time (GMT+6)' },
    { code: 'VST', label: 'Vietnam Standard Time (GMT+7)' },
    { code: 'CTT', label: 'China Taiwan Time (GMT+8)' },
    { code: 'JST', label: 'Japan Standard Time (GMT+9)' },
    { code: 'ACT', label: 'Australia Central Time (GMT+9:30)' },
    { code: 'AET', label: 'Australia Eastern Time (GMT+10)' },
    { code: 'SST', label: 'Solomon Standard Time (GMT+11)' },
    { code: 'NST', label: 'New Zealand Standard Time (GMT+12)' },
    { code: 'MIT', label: 'Midway Islands Time (GMT-11)' },
    { code: 'HST', label: 'Hawaii Standard Time (GMT-10)' },
    { code: 'AST', label: 'Alaska Standard Time (GMT-9)' },
    { code: 'PST', label: 'Pacific Standard Time (GMT-8)' },
    { code: 'MST', label: 'Mountain Standard Time (GMT-7)' },
    { code: 'CST', label: 'Central Standard Time (GMT-6)' },
    { code: 'EST', label: 'Eastern Standard Time (GMT-5)' },
    { code: 'IET', label: 'Indiana Eastern Standard Time (GMT-5)' },
    { code: 'PRT', label: 'Puerto Rico and US Virgin Islands Time (GMT-4)' },
    { code: 'CNT', label: 'Canada Newfoundland Time (GMT-3:30)' },
    { code: 'AGT', label: 'Argentina Standard Time (GMT-3)' },
    { code: 'BET', label: 'Brazil Eastern Time (GMT-3)' },
    { code: 'CAT', label: 'Central Africa Time (GMT+2)' },
  ];

  const handleSelect = (dates: Date[] | Date | undefined) => {
    if (!dates) return;
    const updatedDates: Date[] = Array.isArray(dates) ? dates : [dates];
    setSelectedDates(updatedDates);
    onDatesChange?.(updatedDates);
  };

  return (
    <div className="bg-gradient-to-br w-full max-w-md mx-auto md:p-6 p-4  from-[#1a0b2e] via-[#16213e] to-[#0f1419] rounded-2xl border border-purple-500/30 shadow-lg text-white">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Select Date & Time
      </h2>

      <div className="overflow-hidden rounded-2xl">
        <DayPicker
          mode="multiple"
          selected={selectedDates}
          onSelect={handleSelect}
          footer={
            <div className="mt-4 text-center text-sm text-gray-300">
              {selectedDates.length > 0
                ? `${selectedDates.length} date(s) selected`
                : 'No date selected'}
            </div>
          }
          className="mx-auto"
          modifiersClassNames={{
            selected:
              'bg-gradient-to-r from-[#9b5cff] to-[#ff2fd1] text-white rounded-full my-2',
            today: 'bg-purple-700 text-white rounded-full ',
          }}
        />
      </div>

      {/* Time Zone Selector */}
      <div className="mt-4">
        <p className="text-sm text-white/70 mb-1">Time zone</p>
        <Select onValueChange={setSelectedZone} defaultValue={selectedZone}>
          <SelectTrigger className="w-full bg-white/5 border border-white/10 text-white/80 px-3 py-2 rounded-md flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-white/60" />
              <SelectValue placeholder="Select a timezone" />
            </div>
          </SelectTrigger>
          <SelectContent className="bg-[#0f1419]/95 border border-purple-600/40 text-white rounded-lg shadow-lg max-h-[60vh] overflow-y-auto">
            {timeZones.map(zone => (
              <SelectItem
                key={zone.code}
                value={zone.code}
                className="px-3 py-2 hover:bg-white/10 text-white text-sm"
              >
                {zone.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Selected Dates Preview */}
      {selectedDates.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {selectedDates.map(date => (
            <span
              key={date.toISOString()}
              className="px-2 py-2 bg-purple-600/50 rounded-full text-xs"
            >
              {date.toDateString()}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
