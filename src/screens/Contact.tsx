import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

const CATEGORIES = [
  { value: "app_enquiry", label: "App enquiry" },
  { value: "refund", label: "Refund" },
  { value: "cancellation", label: "Cancellation" },
  { value: "org_app", label: "Org app" },
  { value: "general", label: "General" },
];

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success" }
  | { state: "error"; message: string };

export default function ContactUs() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "general",
    bookingRef: "",
    message: "",
    company: "", // honeypot (should remain empty)
  });

  const canSubmit = useMemo(() => {
    const ok =
      form.name.trim().length >= 2 &&
      form.email.trim().length >= 5 &&
      form.message.trim().length >= 10;
    return ok && status.state !== "submitting";
  }, [form, status.state]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // honeypot spam check
    if (form.company.trim().length > 0) return;

    setStatus({ state: "submitting" });

    try {
      // const res = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     name: form.name,
      //     email: form.email,
      //     category: form.category,
      //     bookingRef: form.bookingRef,
      //     message: form.message,
      //     source: "web",
      //     createdAt: new Date().toISOString(),
      //   }),
      // });

      // if (!res.ok) {
      //   const data = await res.json().catch(() => null);
      //   throw new Error(
      //     data?.message || "Something went wrong. Please try again."
      //   );
      // }

      setStatus({ state: "success" });
      setForm({
        name: "",
        email: "",
        category: "general",
        bookingRef: "",
        message: "",
        company: "",
      });
    } catch (err) {
      setStatus({ state: "error", message: err?.message || "Failed to send." });
    }
  }

  return (
    <main className="min-h-[calc(100vh-90px)] bg-white">
      {/* Top band */}
      <div className="border-b border-zinc-200 bg-emerald-50/60">
        <div className="mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
                Contact us
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-700 sm:text-base">
                Need help with a booking, refund, or your organization account?
                Send us a message and we’ll respond as soon as possible.
              </p>
            </div>

            <Link
              to="/faq"
              className="inline-flex items-center gap-2 self-start rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-emerald-800 shadow-sm ring-1 ring-emerald-200 transition hover:bg-emerald-50"
            >
              <HelpCircle className="h-4 w-4" />
              Visit FAQ
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Form */}
          <section className="lg:col-span-7">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
              <h2 className="text-lg font-semibold text-zinc-900">
                Send us a message
              </h2>
              <p className="mt-1 text-sm text-zinc-600">
                The more details you include, the faster we can help.
              </p>

              {/* Status */}
              {status.state === "success" && (
                <div className="mt-5 flex items-start gap-3 rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-100">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-700" />
                  <div>
                    <p className="text-sm font-semibold text-emerald-900">
                      Message sent
                    </p>
                    <p className="text-sm text-emerald-800/80">
                      Thanks! We’ll get back to you shortly.
                    </p>
                  </div>
                </div>
              )}

              {status.state === "error" && (
                <div className="mt-5 flex items-start gap-3 rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-100">
                  <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-700" />
                  <div>
                    <p className="text-sm font-semibold text-amber-900">
                      Couldn’t send your message
                    </p>
                    <p className="text-sm text-amber-800/80">
                      {status.message}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={onSubmit} className="mt-6 space-y-5">
                {/* honeypot */}
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, company: e.target.value }))
                  }
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-zinc-900">
                      Name
                    </label>
                    <input
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-zinc-900">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-zinc-900">
                      Category
                    </label>
                    <select
                      value={form.category}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, category: e.target.value }))
                      }
                      className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c.value} value={c.value}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-zinc-900">
                      Booking reference{" "}
                      <span className="text-zinc-500">(optional)</span>
                    </label>
                    <input
                      value={form.bookingRef}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, bookingRef: e.target.value }))
                      }
                      placeholder="e.g. TXN-123456 or Booking ID"
                      className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-zinc-900">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    placeholder="Tell us what happened, what pitch, date/time, and anything else that helps."
                    rows={6}
                    className="mt-2 w-full resize-y rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm leading-relaxed text-zinc-900 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                    required
                  />
                  <p className="mt-2 text-xs text-zinc-500">
                    Please don’t share sensitive payment details (e.g., full
                    card numbers).
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  {status.state === "submitting"
                    ? "Sending..."
                    : "Send message"}
                </button>

                <p className="text-xs text-zinc-500">
                  By submitting, you agree that we may contact you about your
                  request.
                </p>
              </form>
            </div>
          </section>

          {/* Info / FAQ / Notes */}
          <aside className="lg:col-span-5">
            <div className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h3 className="text-sm font-semibold text-zinc-900">
                  Contact information
                </h3>

                <div className="mt-4 space-y-3 text-sm text-zinc-700">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 text-emerald-700" />
                    <div>
                      <p className="font-medium text-zinc-900">Email</p>
                      <a
                        href="mailto:support@pitchbookng.com"
                        className="text-emerald-700 hover:underline"
                      >
                        support@pitchbookng.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-emerald-700" />
                    <div>
                      <p className="font-medium text-zinc-900">Phone</p>
                      <p className="text-zinc-700">+234 (0) 70 679 00656</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-emerald-700" />
                    <div>
                      <p className="font-medium text-zinc-900">Address</p>
                      <p className="text-zinc-700">Abuja, Nigeria</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-emerald-700" />
                    <div>
                      <p className="font-medium text-zinc-900">Support hours</p>
                      <p className="text-zinc-700">Mon–Sat, 9:00am – 6:00pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-emerald-50 p-6 ring-1 ring-emerald-100">
                <h3 className="text-sm font-semibold text-zinc-900">
                  Before you send a message
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                  <li>• Include the pitch name and booking date/time.</li>
                  <li>
                    • For refunds/cancellations, add your booking reference.
                  </li>
                  <li>• Don’t share sensitive card details in the message.</li>
                </ul>

                <Link
                  to="/faq"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-emerald-800 shadow-sm ring-1 ring-emerald-200 transition hover:bg-emerald-50"
                >
                  <HelpCircle className="h-4 w-4" />
                  Check FAQs first
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

// import { Images } from "../assets";

// export const Contact = () => {
//   return (
//     <div className="relative min-h-[calc(100vh-90px)] overflow-hidden">
//       {/* Base: textured background (100%) */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 h-[50vh]"
//         style={{
//           backgroundImage: `url(${Images.background})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       />

//       {/* Top: pitch background (fades in diagonally from right) */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 h-[50vh]"
//         style={{
//           backgroundImage: `url(${Images.pitchImg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",

//           // ✅ This creates the *soft diagonal fade* (not a sharp clip)
//           // Black = visible, Transparent = hidden
//           WebkitMaskImage:
//             "linear-gradient(115deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 52%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,1) 100%)",
//           maskImage:
//             "linear-gradient(115deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 52%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,1) 100%)",
//           WebkitMaskRepeat: "no-repeat",
//           maskRepeat: "no-repeat",
//         }}
//       />

//       {/* Optional: slight overlay to unify both images */}
//       {/* <div
//         aria-hidden="true"
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(115deg, rgba(16,185,129,0.10) 0%, rgba(16,185,129,0.05) 55%, rgba(0,0,0,0.05) 100%)",
//           pointerEvents: "none",
//         }}
//       /> */}

//       {/* Your content */}
//       <div className="relative z-10">{/* ... */}</div>
//     </div>
//   );
// };
