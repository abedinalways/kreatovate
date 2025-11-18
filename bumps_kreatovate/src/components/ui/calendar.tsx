"use client";

import * as React from "react";
import { Globe, Clock } from "lucide-react";
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
  onDatesChange?: (dates: Date[]) => void;
  onTimeZoneChange?: (zone: string) => void;
  onTimeSlotChange?: (slot: { start: string; end: string }) => void;
}

export function Calendar({
  onDatesChange,
  onTimeZoneChange,
  onTimeSlotChange,
}: CalendarProps) {
  const [selectedDates, setSelectedDates] = React.useState<Date[]>([]);
  const [selectedZone, setSelectedZone] = React.useState("America/New_York");
  const [selectedSlot, setSelectedSlot] = React.useState("");

  const timeZones = [
    { code: "UTC", label: "UTC (GMT+0)" },
    { code: "America/New_York", label: "Eastern Time — GMT-5" },
    { code: "America/Chicago", label: "Central Time — GMT-6" },
    { code: "America/Denver", label: "Mountain Time — GMT-7" },
    { code: "America/Los_Angeles", label: "Pacific Time — GMT-8" },
  ];

  const timeSlots = Array.from({ length: 24 }, (_, i) => ({
    key: `${i}`,
    start: `${i}:00`,
    end: `${i + 1}:00`,
    label: `${new Date(0, 0, 0, i).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    })} - ${new Date(0, 0, 0, i + 1).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    })}`,
  }));

  const handleSelect = (dates: Date[] | Date | undefined) => {
    if (!dates) return;
    const arr = Array.isArray(dates) ? dates : [dates];
    setSelectedDates(arr);
    onDatesChange?.(arr);
  };

  return (
    <div className="bg-linear-to-br w-full mx-auto p-4 sm:p-6 from-[#1a0b2e] via-[#16213e] to-[#0f1419] rounded-2xl border border-purple-500/30 shadow-lg text-white overflow-hidden">
      {/* FIX ALL RESPONSIVE ISSUES */}
      <style jsx global>{`
        .rdp {
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 auto !important;
        }

        .rdp-months {
          width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          display: block !important;
        }

        .rdp-month {
          width: 100% !important;
        }

        .rdp-table {
          width: 100% !important;
          table-layout: fixed !important;
        }

        .rdp-head_cell,
        .rdp-cell {
          padding: 6px 0 !important;
          text-align: center !important;
        }

        /* FIX circle size so it never forces overflow */
        .rdp-day {
          margin: 0 auto !important;
          width: 36px !important;
          height: 36px !important;
          line-height: 36px !important;
        }
      `}</style>

      {/* Calendar */}
      <DayPicker
        mode="multiple"
        selected={selectedDates}
        onSelect={handleSelect}
        className="w-full"
        modifiersClassNames={{
          today:
            "bg-gradient-to-r from-[#5e2bff] to-[#b05bff] text-white rounded-full shadow-md font-semibold",
          selected:
            "bg-gradient-to-r from-[#ff4ad8] to-[#ff77ef] text-white rounded-full shadow-lg font-bold",
        }}
        footer={
          <div className="mt-4 text-center text-sm text-gray-300">
            {selectedDates.length > 0
              ? `${selectedDates.length} date(s) selected`
              : "Select at least one date"}
          </div>
        }
      />

      {/* TIME SLOT */}
      <div className="mt-6">
        <p className="text-sm text-white/70 mb-1">Select Time Slot</p>

        <Select onValueChange={setSelectedSlot} value={selectedSlot}>
          <SelectTrigger className="w-full bg-white/5 border-white/10 text-white px-3 py-2">
            <Clock className="w-4 h-4 text-white/60" />
            <SelectValue placeholder="Choose a time slot" />
          </SelectTrigger>

          <SelectContent className="bg-[#0f1419]/95 border border-purple-600/40 text-white max-h-[40vh] overflow-y-auto">
            {timeSlots.map((slot) => (
              <SelectItem key={slot.key} value={slot.key}>
                {slot.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* TIME ZONE */}
      <div className="mt-6">
        <p className="text-sm text-white/70 mb-1">Time Zone</p>

        <Select onValueChange={setSelectedZone} value={selectedZone}>
          <SelectTrigger className="w-full bg-white/5 border-white/10 text-white px-3 py-2">
            <Globe className="w-4 h-4 text-white/60" />
            <SelectValue placeholder="Select timezone" />
          </SelectTrigger>

          <SelectContent className="bg-[#0f1419]/95 border border-purple-600/40 text-white max-h-[50vh] overflow-y-auto">
            {timeZones.map((zone) => (
              <SelectItem key={zone.code} value={zone.code}>
                {zone.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* PREVIEW */}
      {selectedDates.length > 0 && (
        <div className="mt-6 text-sm text-white/70">
          <p className="mb-2">Selected dates:</p>
          <div className="grid grid-cols-2 gap-2">
            {selectedDates.map((date) => (
              <span
                key={date.toISOString()}
                className="px-3 py-1 bg-purple-700/40 rounded-full text-xs text-center"
              >
                {date.toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
