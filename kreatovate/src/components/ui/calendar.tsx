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



type Slot = {
  startTime: string;
  endTime: string;
};

interface CalendarProps {
  onDateChange?: (date: Date | null) => void;
  onTimeZoneChange?: (zone: string) => void;
  onSlotChange?: (slot: Slot | null) => void;
}

/* ---------------- HELPERS ---------------- */

/**
 * Parse GMT offset from Intl "shortOffset" like:
 * - "GMT-06:00"
 * - "GMT+05:30"
 * - sometimes "GMT-6"
 */
function parseGmtOffsetToMinutes(tzName: string): number {
  const m = tzName.match(/GMT([+-])(\d{1,2})(?::(\d{2}))?/i);
  if (!m) return 0;
  const sign = m[1] === "-" ? -1 : 1;
  const hours = Number(m[2] || 0);
  const mins = Number(m[3] || 0);
  return sign * (hours * 60 + mins);
}


function getTimeZoneOffsetMinutes(dateY: number, dateM1: number, dateD: number, timeZone: string) {
  const probe = new Date(Date.UTC(dateY, dateM1, dateD, 12, 0, 0)); // noon UTC
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "shortOffset",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(probe);

  const tzPart = parts.find((p) => p.type === "timeZoneName")?.value || "GMT";
  return parseGmtOffsetToMinutes(tzPart);
}

/**
 * Compute the exact UTC milliseconds representing:
 * - start of selected calendar day in selected timezone
 * - end of selected calendar day in selected timezone
 *
 * This avoids ALL server-timezone day shifting.
 */
function computeDayRangeMsInTimeZone(date: Date, timeZone: string) {
  const y = date.getFullYear();
  const m1 = date.getMonth(); // 0-based
  const d = date.getDate();

  const offsetMin = getTimeZoneOffsetMinutes(y, m1, d, timeZone);

  // Local midnight in TZ expressed as UTC = UTC_midnight - offset
  const startUtc = Date.UTC(y, m1, d, 0, 0, 0, 0) - offsetMin * 60_000;
  const endUtc = Date.UTC(y, m1, d, 23, 59, 59, 999) - offsetMin * 60_000;

  return { startDate: startUtc, endDate: endUtc };
}

/* ---------------- COMPONENT ---------------- */

export function Calendar({
  onDateChange,
  onTimeZoneChange,
  onSlotChange,
}: CalendarProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedZone, setSelectedZone] = React.useState("America/Chicago");

  const [slots, setSlots] = React.useState<Slot[]>([]);
  const [selectedSlotKey, setSelectedSlotKey] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [slotError, setSlotError] = React.useState("");

  const requestIdRef = React.useRef(0);

  const timeZones = [
    { code: "UTC", label: "UTC (GMT)" },
    { code: "America/New_York", label: "GMT-05:00 America/New_York (EST)" },
    { code: "America/Chicago", label: "GMT-06:00 America/Chicago (CST)" },
    { code: "Asia/Dhaka", label: "GMT+06:00 Asia/Dhaka (GMT)" },
    { code: "America/Los_Angeles", label: "GMT-08:00 America/Los_Angeles (PST)" },
  ];

  async function fetchSlots(date: Date, tz: string) {
    const myId = ++requestIdRef.current;

    setLoading(true);
    setSlotError("");
    setSlots([]);
    setSelectedSlotKey("");
    onSlotChange?.(null);

    try {
      const { startDate, endDate } = computeDayRangeMsInTimeZone(date, tz);

      const res = await fetch("/api/ghl/free-slots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          startDate,
          endDate,
          timezone: tz,
        }),
      });

      const data = await res.json();

      if (myId !== requestIdRef.current) return;

      if (!res.ok || data?.error) {
        throw new Error(data?.message || "Failed to load slots");
      }

      const map = data?.slots || {};
      const allSlots: Slot[] = Object.values(map).flat() as Slot[];

      setSlots(allSlots);

      if (!allSlots.length) {
        setSlotError("No available slots for this date.");
      }
    } catch (err: unknown) {
      if (myId !== requestIdRef.current) return;
      console.error("SLOT LOAD ERROR:", err);
      setSlotError((err instanceof Error ? err.message : String(err)) || "Unable to load slots.");
    } finally {
      if (myId === requestIdRef.current) setLoading(false);
    }
  }

  React.useEffect(() => {
    if (selectedDate) fetchSlots(selectedDate, selectedZone);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedZone]);

  // Show ONLY start times (matches GHL widget)
  const slotOptions = React.useMemo(() => {
    return slots.map((slot) => {
      const start = new Date(slot.startTime);
      const label = start.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        timeZone: selectedZone,
      });

      return { key: slot.startTime, label, slot };
    });
  }, [slots, selectedZone]);

  return (
    <div className="bg-linear-to-br w-full mx-auto p-4 sm:p-6 from-[#1a0b2e] via-[#16213e] to-[#0f1419] rounded-2xl border border-purple-500/30 shadow-lg text-white overflow-hidden">
      <DayPicker
        mode="single"
        selected={selectedDate ?? undefined}
        onSelect={(date) => {
          setSelectedDate(date ?? null);
          onDateChange?.(date ?? null);

          setSlots([]);
          setSlotError("");
          setSelectedSlotKey("");
          onSlotChange?.(null);

          if (date) fetchSlots(date, selectedZone);
        }}
        className="w-full"
      />

      {/* Time Zone */}
      <div className="mt-6">
        <p className="text-sm text-white/70 mb-1">Time zone</p>
        <Select
          value={selectedZone}
          onValueChange={(zone) => {
            setSelectedZone(zone);
            onTimeZoneChange?.(zone);
          }}
        >
          <SelectTrigger className="w-full bg-white/5 border-white/10 text-white px-3 py-2">
            <Globe className="w-4 h-4 text-white/60" />
            <SelectValue />
          </SelectTrigger>

          <SelectContent className="bg-[#0f1419]/95 border border-purple-600/40 text-white">
            {timeZones.map((z) => (
              <SelectItem key={z.code} value={z.code}>
                {z.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Time Slots */}
      <div className="mt-6">
        <p className="text-sm text-white/70 mb-1">Available Time Slots</p>

        <Select
          value={selectedSlotKey}
          onValueChange={(key) => {
            setSelectedSlotKey(key);
            const found = slotOptions.find((o) => o.key === key)?.slot || null;
            onSlotChange?.(found);
          }}
          disabled={!selectedDate || loading || slotOptions.length === 0}
        >
          <SelectTrigger className="w-full bg-white/5 border-white/10 text-white px-3 py-2">
            <Clock className="w-4 h-4 text-white/60" />
            <SelectValue
              placeholder={
                !selectedDate
                  ? "Select a date first"
                  : loading
                    ? "Loading slots..."
                    : slotOptions.length === 0
                      ? "No slots available"
                      : "Choose a time slot"
              }
            />
          </SelectTrigger>

          <SelectContent className="bg-[#0f1419]/95 border border-purple-600/40 text-white max-h-[40vh] overflow-y-auto">
            {slotOptions.map((o) => (
              <SelectItem key={o.key} value={o.key}>
                {o.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {slotError && (
          <p className="mt-2 text-xs text-red-300">{slotError}</p>
        )}
      </div>
    </div>
  );
}