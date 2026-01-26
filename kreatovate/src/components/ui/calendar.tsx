// "use client";

// import * as React from "react";
// import { Globe, Clock } from "lucide-react";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// type Slot = { startTime: string; endTime: string };

// interface CalendarProps {
//   onDateChange?: (date: Date | null) => void;
//   onTimeZoneChange?: (zone: string) => void;
//   onSlotChange?: (slot: Slot | null) => void;
// }

// function isSameDayInTimeZone(
//   iso: string,
//   date: Date,
//   timeZone: string
// ) {
//   const slotDate = new Date(iso);

//   const slotDay = slotDate.toLocaleDateString("en-CA", { timeZone });
//   const selectedDay = date.toLocaleDateString("en-CA", { timeZone });

//   return slotDay === selectedDay;
// }


// export function Calendar({ onDateChange, onTimeZoneChange, onSlotChange }: CalendarProps) {
//   const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
//   const [selectedZone, setSelectedZone] = React.useState("America/New_York");
//   const [slots, setSlots] = React.useState<Slot[]>([]);
//   const [selectedSlotKey, setSelectedSlotKey] = React.useState<string>("");

//   const [loadingSlots, setLoadingSlots] = React.useState(false);
//   const [slotError, setSlotError] = React.useState<string>("");

//   const timeZones = [
//     { code: "UTC", label: "UTC (GMT+0)" },
//     { code: "America/New_York", label: "Eastern Time" },
//     { code: "America/Chicago", label: "Central Time" },
//     { code: "America/Denver", label: "Mountain Time" },
//     { code: "America/Los_Angeles", label: "Pacific Time" },
//   ];

//   const dateKey = React.useMemo(() => {
//     if (!selectedDate) return "";
//     const y = selectedDate.getFullYear();
//     const m = String(selectedDate.getMonth() + 1).padStart(2, "0");
//     const d = String(selectedDate.getDate()).padStart(2, "0");
//     return `${y}-${m}-${d}`;
//   }, [selectedDate]);


//   async function fetchSlots(date: Date, tz: string) {
//     setLoadingSlots(true);
//     setSlotError("");
//     setSlots([]);
//     setSelectedSlotKey("");
//     onSlotChange?.(null);

//     try {
//       const res = await fetch("/api/ghl/free-slots", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ dateISO: date.toISOString(), timezone: tz }),
//       });

//       const data = await res.json();

//       if (!res.ok || data?.error) {
//         throw new Error(data?.message || "Failed to load slots");
//       }

//       const map = data?.slots || {};
//       const list: Slot[] = Array.isArray(map[dateKey]) ? map[dateKey] : [];

//       // Filter out anything without endTime (some calendars may return only start time)
//       const clean = list.filter((s) => typeof s.startTime === "string" && !!s.startTime);

//       setSlots(clean);
//       if (clean.length === 0) setSlotError("No available slots for this date.");
//     } catch (e: any) {
//       setSlotError(e?.message || "Unable to load slots.");
//     } finally {
//       setLoadingSlots(false);
//     }
//   }

//   React.useEffect(() => {
//     if (selectedDate) fetchSlots(selectedDate, selectedZone);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [selectedZone]);

//   const slotOptions = React.useMemo(() => {
//     return slots.map((s) => {
//       const start = new Date(s.startTime);
//       const end = s.endTime ? new Date(s.endTime) : null;

//       const label =
//         `${start.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}` +
//         (end
//           ? ` - ${end.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}`
//           : "");

//       return {
//         key: s.startTime, // unique enough
//         label,
//         slot: s,
//       };
//     });
//   }, [slots]);

//   return (
//     <div className="bg-linear-to-br w-full mx-auto p-4 sm:p-6 from-[#1a0b2e] via-[#16213e] to-[#0f1419] rounded-2xl border border-purple-500/30 shadow-lg text-white overflow-hidden">
//       <style jsx global>{`
//         .rdp {
//           width: 100% !important;
//           max-width: 100% !important;
//           margin: 0 auto !important;
//         }
//         .rdp-months {
//           width: 100% !important;
//           margin: 0 !important;
//           padding: 0 !important;
//           display: block !important;
//         }
//         .rdp-month {
//           width: 100% !important;
//         }
//         .rdp-table {
//           width: 100% !important;
//           table-layout: fixed !important;
//         }
//         .rdp-head_cell,
//         .rdp-cell {
//           padding: 6px 0 !important;
//           text-align: center !important;
//         }
//         .rdp-day {
//           margin: 0 auto !important;
//           width: 36px !important;
//           height: 36px !important;
//           line-height: 36px !important;
//         }
//       `}</style>

//       {/* Date picker (single date) */}
//       <DayPicker
//         mode="single"
//         selected={selectedDate ?? undefined}
//         onSelect={(d) => {
//           const date = d ?? null;
//           setSelectedDate(date);
//           onDateChange?.(date);

//           setSelectedSlotKey("");
//           onSlotChange?.(null);

//           if (date) fetchSlots(date, selectedZone);
//           else {
//             setSlots([]);
//             setSlotError("");
//           }
//         }}
//         className="w-full"
//         modifiersClassNames={{
//           today:
//             "bg-gradient-to-r from-[#5e2bff] to-[#b05bff] text-white rounded-full shadow-md font-semibold",
//           selected:
//             "bg-gradient-to-r from-[#ff4ad8] to-[#ff77ef] text-white rounded-full shadow-lg font-bold",
//         }}
//         footer={
//           <div className="mt-4 text-center text-sm text-gray-300">
//             {selectedDate ? "1 date selected" : "Select a date"}
//           </div>
//         }
//       />

//       {/* Time Zone */}
//       <div className="mt-6">
//         <p className="text-sm text-white/70 mb-1">Time Zone</p>
//         <Select
//           onValueChange={(zone) => {
//             setSelectedZone(zone);
//             onTimeZoneChange?.(zone);
//           }}
//           value={selectedZone}
//         >
//           <SelectTrigger className="w-full bg-white/5 border-white/10 text-white px-3 py-2">
//             <Globe className="w-4 h-4 text-white/60" />
//             <SelectValue placeholder="Select timezone" />
//           </SelectTrigger>

//           <SelectContent className="bg-[#0f1419]/95 border border-purple-600/40 text-white max-h-[50vh] overflow-y-auto">
//             {timeZones.map((zone) => (
//               <SelectItem key={zone.code} value={zone.code}>
//                 {zone.label}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>

//       {/* Slots */}
//       <div className="mt-6">
//         <p className="text-sm text-white/70 mb-1">Available Time Slots</p>

//         <Select
//           value={selectedSlotKey}
//           onValueChange={(key) => {
//             setSelectedSlotKey(key);
//             const found = slotOptions.find((o) => o.key === key)?.slot || null;
//             onSlotChange?.(found);
//           }}
//           disabled={!selectedDate || loadingSlots || slotOptions.length === 0}
//         >
//           <SelectTrigger className="w-full bg-white/5 border-white/10 text-white px-3 py-2">
//             <Clock className="w-4 h-4 text-white/60" />
//             <SelectValue
//               placeholder={
//                 !selectedDate
//                   ? "Select a date first"
//                   : loadingSlots
//                     ? "Loading slots..."
//                     : slotOptions.length === 0
//                       ? "No slots available"
//                       : "Choose a slot"
//               }
//             />
//           </SelectTrigger>

//           <SelectContent className="bg-[#0f1419]/95 border border-purple-600/40 text-white max-h-[40vh] overflow-y-auto">
//             {slotOptions.map((o) => (
//               <SelectItem key={o.key} value={o.key}>
//                 {o.label}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>

//         {slotError ? (
//           <p className="mt-2 text-xs text-red-300">{slotError}</p>
//         ) : null}
//       </div>
//     </div>
//   );
// }


// // version 2 is under test
// "use client";

// import * as React from "react";
// import { Globe, Clock } from "lucide-react";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// /* ---------------- TYPES ---------------- */

// type Slot = {
//   startTime: string;
//   endTime: string;
// };

// interface CalendarProps {
//   onDateChange?: (date: Date | null) => void;
//   onTimeZoneChange?: (zone: string) => void;
//   onSlotChange?: (slot: Slot | null) => void;
// }

// /* ---------------- HELPERS ---------------- */

// /**
//  * Compare if an ISO datetime occurs on the same calendar day
//  * as `date`, evaluated in a specific timezone.
//  *
//  * This avoids ALL timezone key mismatch bugs.
//  */
// function isSameDayInTimeZone(
//   iso: string,
//   date: Date,
//   timeZone: string
// ) {
//   const slotDate = new Date(iso);

//   const slotDay = slotDate.toLocaleDateString("en-CA", { timeZone });
//   const selectedDay = date.toLocaleDateString("en-CA", { timeZone });

//   return slotDay === selectedDay;
// }

// /* ---------------- COMPONENT ---------------- */

// export function Calendar({
//   onDateChange,
//   onTimeZoneChange,
//   onSlotChange,
// }: CalendarProps) {
//   const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
//   const [selectedZone, setSelectedZone] = React.useState("America/New_York");

//   const [slots, setSlots] = React.useState<Slot[]>([]);
//   const [selectedSlotKey, setSelectedSlotKey] = React.useState("");

//   const [loading, setLoading] = React.useState(false);
//   const [slotError, setSlotError] = React.useState("");

//   const timeZones = [
//     { code: "UTC", label: "UTC (GMT)" },
//     { code: "America/New_York", label: "Eastern Time" },
//     { code: "America/Chicago", label: "Central Time" },
//     { code: "America/Denver", label: "Mountain Time" },
//     { code: "America/Los_Angeles", label: "Pacific Time" },
//   ];

//   /* ---------------- FETCH SLOTS ---------------- */

//   async function fetchSlots(date: Date, tz: string) {
//     setLoading(true);
//     setSlotError("");
//     setSlots([]);
//     setSelectedSlotKey("");
//     onSlotChange?.(null);

//     try {
//       const res = await fetch("/api/ghl/free-slots", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           dateISO: date.toISOString(),
//           timezone: tz,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok || data?.error) {
//         throw new Error(data?.message || "Failed to load slots");
//       }

//       /**
//        * Backend guarantees:
//        * {
//        *   "YYYY-MM-DD": [{ startTime, endTime }]
//        * }
//        *
//        * BUT we DO NOT trust keys — we flatten & filter by timezone-safe comparison.
//        */
//       const map = data?.slots || {};
//       const allSlots: Slot[] = Object.values(map).flat();

//       const filtered = allSlots.filter((slot) =>
//         isSameDayInTimeZone(slot.startTime, date, tz)
//       );

//       setSlots(filtered);

//       if (filtered.length === 0) {
//         setSlotError("No available slots for this date.");
//       }
//     } catch (err: any) {
//       console.error("SLOT LOAD ERROR:", err);
//       setSlotError(err.message || "Unable to load slots.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   /* ---------------- EFFECTS ---------------- */

//   React.useEffect(() => {
//     if (selectedDate) {
//       fetchSlots(selectedDate, selectedZone);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [selectedZone]);

//   /* ---------------- SLOT OPTIONS ---------------- */

//   const slotOptions = React.useMemo(() => {
//     return slots.map((slot) => {
//       const start = new Date(slot.startTime);
//       const end = new Date(slot.endTime);

//       const label =
//         `${start.toLocaleTimeString("en-US", {
//           hour: "numeric",
//           minute: "2-digit",
//           timeZone: selectedZone,
//         })} - ${end.toLocaleTimeString("en-US", {
//           hour: "numeric",
//           minute: "2-digit",
//           timeZone: selectedZone,
//         })}`;

//       return {
//         key: slot.startTime,
//         label,
//         slot,
//       };
//     });
//   }, [slots, selectedZone]);

//   /* ---------------- RENDER ---------------- */

//   return (
//     <div className="bg-linear-to-br w-full mx-auto p-4 sm:p-6 from-[#1a0b2e] via-[#16213e] to-[#0f1419] rounded-2xl border border-purple-500/30 shadow-lg text-white overflow-hidden">
//       {/* Calendar */}
//       <DayPicker
//         mode="single"
//         selected={selectedDate ?? undefined}
//         onSelect={(date) => {
//           setSelectedDate(date ?? null);
//           onDateChange?.(date ?? null);

//           setSlots([]);
//           setSlotError("");
//           setSelectedSlotKey("");
//           onSlotChange?.(null);

//           if (date) {
//             fetchSlots(date, selectedZone);
//           }
//         }}
//         className="w-full"
//         modifiersClassNames={{
//           today:
//             "bg-gradient-to-r from-[#5e2bff] to-[#b05bff] text-white rounded-full",
//           selected:
//             "bg-gradient-to-r from-[#ff4ad8] to-[#ff77ef] text-white rounded-full",
//         }}
//       />

//       {/* Time Zone */}
//       <div className="mt-6">
//         <p className="text-sm text-white/70 mb-1">Time Zone</p>
//         <Select
//           value={selectedZone}
//           onValueChange={(zone) => {
//             setSelectedZone(zone);
//             onTimeZoneChange?.(zone);
//           }}
//         >
//           <SelectTrigger className="w-full bg-white/5 border-white/10 text-white px-3 py-2">
//             <Globe className="w-4 h-4 text-white/60" />
//             <SelectValue />
//           </SelectTrigger>

//           <SelectContent className="bg-[#0f1419]/95 border border-purple-600/40 text-white">
//             {timeZones.map((z) => (
//               <SelectItem key={z.code} value={z.code}>
//                 {z.label}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>

//       {/* Time Slots */}
//       <div className="mt-6">
//         <p className="text-sm text-white/70 mb-1">Available Time Slots</p>

//         <Select
//           value={selectedSlotKey}
//           onValueChange={(key) => {
//             setSelectedSlotKey(key);
//             const found = slotOptions.find((o) => o.key === key)?.slot || null;
//             onSlotChange?.(found);
//           }}
//           disabled={!selectedDate || loading || slotOptions.length === 0}
//         >
//           <SelectTrigger className="w-full bg-white/5 border-white/10 text-white px-3 py-2">
//             <Clock className="w-4 h-4 text-white/60" />
//             <SelectValue
//               placeholder={
//                 !selectedDate
//                   ? "Select a date first"
//                   : loading
//                     ? "Loading slots..."
//                     : slotOptions.length === 0
//                       ? "No slots available"
//                       : "Choose a time slot"
//               }
//             />
//           </SelectTrigger>

//           <SelectContent className="bg-[#0f1419]/95 border border-purple-600/40 text-white max-h-[40vh] overflow-y-auto">
//             {slotOptions.map((o) => (
//               <SelectItem key={o.key} value={o.key}>
//                 {o.label}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>

//         {slotError && (
//           <p className="mt-2 text-xs text-red-300">{slotError}</p>
//         )}
//       </div>
//     </div>
//   );
// }


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

/* ---------------- TYPES ---------------- */

type Slot = {
  startTime: string;
  endTime: string;
};

interface CalendarProps {
  onDateChange?: (date: Date | null) => void;
  onTimeZoneChange?: (zone: string) => void;
  onSlotChange?: (slot: Slot | null) => void;
}

/* ---------------- COMPONENT ---------------- */

export function Calendar({
  onDateChange,
  onTimeZoneChange,
  onSlotChange,
}: CalendarProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedZone, setSelectedZone] = React.useState("America/New_York");

  const [slots, setSlots] = React.useState<Slot[]>([]);
  const [selectedSlotKey, setSelectedSlotKey] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [slotError, setSlotError] = React.useState("");

  const timeZones = [
    { code: "UTC", label: "UTC (GMT)" },
    { code: "America/New_York", label: "Eastern Time" },
    { code: "America/Chicago", label: "Central Time" },
    { code: "America/Denver", label: "Mountain Time" },
    { code: "America/Los_Angeles", label: "Pacific Time" },
  ];

  /* ---------------- FETCH SLOTS ---------------- */

  async function fetchSlots(date: Date, tz: string) {
    setLoading(true);
    setSlotError("");
    setSlots([]);
    setSelectedSlotKey("");
    onSlotChange?.(null);

    try {
      const res = await fetch("/api/ghl/free-slots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dateISO: date.toISOString(),
          timezone: tz,
        }),
      });

      const data = await res.json();

      if (!res.ok || data?.error) {
        throw new Error(data?.message || "Failed to load slots");
      }

      /**
       * Backend already returns ONLY slots for the selected date.
       * Do NOT re-filter by date or timezone again.
       */
      const map = data?.slots || {};
      const allSlots: Slot[] = Object.values(map).flat();

      setSlots(allSlots);

      if (allSlots.length === 0) {
        setSlotError("No available slots for this date.");
      }
    } catch (err: any) {
      console.error("SLOT LOAD ERROR:", err);
      setSlotError(err.message || "Unable to load slots.");
    } finally {
      setLoading(false);
    }
  }

  /* ---------------- EFFECTS ---------------- */

  React.useEffect(() => {
    if (selectedDate) {
      fetchSlots(selectedDate, selectedZone);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedZone]);

  /* ---------------- SLOT OPTIONS ---------------- */

  const slotOptions = React.useMemo(() => {
    return slots.map((slot) => {
      const start = new Date(slot.startTime);
      const end = new Date(slot.endTime);

      const label =
        `${start.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          timeZone: selectedZone,
        })} - ${end.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          timeZone: selectedZone,
        })}`;

      return {
        key: slot.startTime,
        label,
        slot,
      };
    });
  }, [slots, selectedZone]);

  /* ---------------- RENDER ---------------- */

  return (
    <div className="bg-linear-to-br w-full mx-auto p-4 sm:p-6 from-[#1a0b2e] via-[#16213e] to-[#0f1419] rounded-2xl border border-purple-500/30 shadow-lg text-white overflow-hidden">
      {/* Calendar */}
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

          if (date) {
            fetchSlots(date, selectedZone);
          }
        }}
        className="w-full"
        modifiersClassNames={{
          today:
            "bg-gradient-to-r from-[#5e2bff] to-[#b05bff] text-white rounded-full",
          selected:
            "bg-gradient-to-r from-[#ff4ad8] to-[#ff77ef] text-white rounded-full",
        }}
      />

      {/* Time Zone */}
      <div className="mt-6">
        <p className="text-sm text-white/70 mb-1">Time Zone</p>
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

