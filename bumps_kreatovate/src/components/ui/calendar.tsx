"use client";

import * as React from "react";
import { Globe } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CalendarProps {
  onDatesChange?: (dates: Date[]) => void; // callback for selected dates
}

export function Calendar({ onDatesChange }: CalendarProps) {
  const [selectedDates, setSelectedDates] = React.useState<Date[]>([]);
  const [selectedZone, setSelectedZone] = React.useState("CET");

  const timeZones = [
    { code: "CET", label: "Central European Time (GMT+1)" },
    { code: "BST", label: "British Summer Time (GMT+1)" },
    { code: "UTC", label: "Coordinated Universal Time (GMT+0)" },
    { code: "EST", label: "Eastern Standard Time (GMT-5)" },
    { code: "PST", label: "Pacific Standard Time (GMT-8)" },
    { code: "IST", label: "India Standard Time (GMT+5:30)" },
    { code: "JST", label: "Japan Standard Time (GMT+9)" },
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
            selectedDates.length > 0
              ? `${selectedDates.length} date(s) selected`
              : undefined
          }
          className="mx-auto"
          modifiersClassNames={{
            selected:
              "bg-gradient-to-r from-[#9b5cff] to-[#ff2fd1] text-white rounded-full",
            today: "bg-purple-700 text-white rounded-full",
          }}
        />
      </div>

      {/* Time Zone Selector */}
      <div className="mt-4">
        <p className="text-sm text-white/70 mb-1">Time zone</p>
        <Select onValueChange={setSelectedZone} defaultValue={selectedZone}>
          <SelectTrigger className="w-full bg-white/5 border border-white/10 text-white/80 px-3 py-2 rounded-md flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-white/60" />
              <SelectValue placeholder="Select a timezone" />
            </div>
          </SelectTrigger>
          <SelectContent className="bg-[#0f1419]/95 border border-purple-600/40 text-white rounded-lg shadow-lg max-h-[60vh] overflow-y-auto">
            {timeZones.map((zone) => (
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
          {selectedDates.map((date) => (
            <span
              key={date.toISOString()}
              className="px-1 py-1 bg-purple-600/50 rounded-full text-xs"
            >
              {date.toDateString()}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
