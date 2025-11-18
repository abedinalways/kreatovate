module.exports = [
"[project]/.next-internal/server/app/api/ghl/book-consultation/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/ghl/book-consultation/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
const GHL_BASE_URL = ("TURBOPACK compile-time value", "https://services.leadconnectorhq.com") || "https://services.leadconnectorhq.com";
const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
const GHL_CALENDAR_ID = process.env.GHL_CALENDAR_ID;
async function POST(req) {
    try {
        const body = await req.json();
        if (!GHL_API_KEY) throw new Error("GHL_API_KEY is not configured");
        if (!GHL_LOCATION_ID) throw new Error("GHL_LOCATION_ID is not configured");
        if (!GHL_CALENDAR_ID) throw new Error("GHL_CALENDAR_ID is missing — cannot create appointments");
        // Validate form data
        if (!body.firstName || !body.lastName || !body.email) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: true,
                message: "firstName, lastName, and email are required"
            }, {
                status: 400
            });
        }
        // STEP 1 — CREATE CONTACT FIRST (required for appointment)
        const contactPayload = {
            locationId: GHL_LOCATION_ID,
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            phone: body.phone,
            companyName: body.companyName,
            source: "Website - Consultation Form",
            tags: body.tags || [
                "Consultation Request"
            ],
            customFields: body.customFields || []
        };
        const contactResponse = await fetch(`${GHL_BASE_URL}/contacts/upsert`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${GHL_API_KEY}`,
                Version: "2021-07-28",
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(contactPayload)
        });
        const contactData = await contactResponse.json();
        if (!contactResponse.ok) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: true,
                message: contactData.message || "Contact creation failed"
            }, {
                status: 400
            });
        }
        const contactId = contactData.contact?.id || contactData.id;
        if (!contactId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: true,
                message: "Contact ID missing from GHL response"
            }, {
                status: 500
            });
        }
        // STEP 2 — NOW TRY TO CREATE APPOINTMENTS
        const appointments = body.appointments || [];
        let failedError = null;
        for (const appointment of appointments){
            const appointmentPayload = {
                title: `Consultation - ${body.firstName} ${body.lastName}`,
                calendarId: GHL_CALENDAR_ID,
                locationId: GHL_LOCATION_ID,
                contactId,
                startTime: appointment.startTime,
                endTime: appointment.endTime,
                timezone: appointment.timezone,
                appointmentStatus: "confirmed"
            };
            const res = await fetch(`${GHL_BASE_URL}/calendars/events/appointments`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${GHL_API_KEY}`,
                    Version: "2021-07-28",
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(appointmentPayload)
            });
            const resData = await res.json();
            if (!res.ok) {
                failedError = resData.message || resData.msg || "Failed to create appointment";
                break; // STOP processing more appointments
            }
        }
        // ❌ ERROR? DELETE CONTACT + RETURN FAILURE
        if (failedError) {
            await fetch(`${GHL_BASE_URL}/contacts/${contactId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${GHL_API_KEY}`,
                    Version: "2021-07-28"
                }
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: true,
                message: failedError
            }, {
                status: 400
            });
        }
        // SUCCESS RESPONSE
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: "Appointments successfully created.",
            contactId
        });
    } catch (error) {
        console.error("GHL API ERROR:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: true,
            message: error.message || "Internal server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__020b8c25._.js.map