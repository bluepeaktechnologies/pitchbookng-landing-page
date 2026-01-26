import React from "react";

type Section = {
  id: string;
  title: string;
  content: React.ReactNode;
};

function CT({ sections }: { sections: Section[] }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
      <p className="text-sm font-semibold text-zinc-900">On this page</p>
      <ul className="mt-3 space-y-2">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="text-sm text-emerald-700 hover:text-emerald-800 hover:underline"
            >
              {s.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const CancellationTerms = () => {
  const lastUpdated = "January 2026"; // change as needed

  return (
    <main className="min-h-screen bg-white">
      {/* Header band (optional) */}
      <div className="border-b border-zinc-200 bg-emerald-50/60">
        <div className="mx-auto  px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Cancellation Terms
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-700 sm:text-base">
            Please read these Terms carefully before using PitchBookng.
          </p>
          <p className="mt-2 text-xs text-zinc-600">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      <div className="mx-auto  px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Content */}
          <article className="lg:col-span-8">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
              {/* Typography */}
              <div className="prose prose-zinc max-w-none prose-headings:scroll-mt-24 prose-a:text-emerald-700 prose-a:no-underline hover:prose-a:underline prose-li:my-1">
                <p>
                  This page explains the rules, responsibilities, and
                  limitations that apply when you use PitchBookng. If you do not
                  agree, please do not use the platform.
                </p>

                {REFUND_POLICY_SECTIONS.map((s) => (
                  <section key={s.id} id={s.id} className="mt-5">
                    <h2>{s.title}</h2>
                    {s.content}
                  </section>
                ))}

                <section id="contact">
                  <h2>Contact</h2>
                  <p>
                    For questions about these Terms, contact{" "}
                    <a href="mailto:support@pitchbookng.com">
                      support@pitchbookng.com
                    </a>
                    .
                  </p>
                </section>
              </div>
            </div>
          </article>

          {/* Sticky TOC on desktop */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-4">
              <CT sections={REFUND_POLICY_SECTIONS} />

              <div className="rounded-2xl bg-zinc-900 p-5 text-white shadow-sm">
                <p className="text-sm font-semibold">Need help?</p>
                <p className="mt-2 text-sm text-white/80">
                  Reach our support team for any questions.
                </p>
                <a
                  href="mailto:support@pitchbookng.com"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-900"
                >
                  Email support
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

const EmailLink = ({ email }: { email: string }) => (
  <a
    href={`mailto:${email}`}
    className="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-700"
  >
    {email}
  </a>
);

const BulletList = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="mt-3 space-y-2 list-disc pl-5 text-sm leading-6 text-gray-700">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

const Note = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
    <p className="text-sm font-semibold text-gray-900">{title}</p>
    <div className="mt-2 text-sm leading-6 text-gray-700">{children}</div>
  </div>
);

const Formula = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-4">
    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
      Refund calculation
    </p>
    <p className="mt-2 text-sm leading-6 text-gray-800">{children}</p>
  </div>
);

const REFUND_POLICY_SECTIONS: Section[] = [
  {
    id: "refund-intro",
    title: "Refund and Cancellation Policy",
    content: (
      <div className="space-y-4">
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">Last Updated:</span>{" "}
            January 2026
          </p>
        </div>

        <p className="text-sm leading-6 text-gray-700">
          This Refund and Cancellation Policy (“Policy”) forms part of the
          Pitchbook NG Terms and Conditions and applies to all bookings made
          through the Pitchbook NG platform (the “Platform”). By making a
          booking, you agree to be bound by this Policy.
        </p>

        <p className="text-sm leading-6 text-gray-700">
          Pitchbook NG acts as a facilitator between users and independent pitch
          owners/operators (“Pitch Providers”). Refunds and cancellations are
          subject to this Policy, any Pitch Provider terms disclosed at booking
          (where applicable), and applicable Nigerian laws.
        </p>

        <Note title="When this policy becomes binding">
          This policy applies to all bookings made via the Platform and becomes
          binding once payment is successfully completed and the booking is
          confirmed.
        </Note>
      </div>
    ),
  },

  {
    id: "scope",
    title: "1. Scope and Application",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          This Policy applies to all confirmed bookings of football pitches made
          through the Platform. Bookings are considered final upon successful
          payment and confirmation.
        </p>
      </div>
    ),
  },

  {
    id: "cancellation-windows",
    title: "2. Cancellation Windows and Refund Eligibility",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          Refund eligibility depends on when you cancel relative to the
          scheduled start time:
        </p>

        <BulletList
          items={[
            <>
              <span className="font-medium text-gray-900">
                More than 24 hours before start time
              </span>{" "}
              — Eligible for a refund, subject to the non-refundable amounts in
              Section 3.
            </>,
            <>
              <span className="font-medium text-gray-900">
                Within 24 hours before start time
              </span>{" "}
              — Generally non-refundable. In exceptional circumstances (e.g.,
              documented medical emergencies or force majeure), Pitchbook NG may
              consider a refund or credit at its discretion.
            </>,
            <>
              <span className="font-medium text-gray-900">
                Within 1 hour of start time
              </span>{" "}
              — <span className="font-semibold">Strictly non-refundable</span>{" "}
              under any circumstances.
            </>,
            <>
              <span className="font-medium text-gray-900">No-show</span> — If
              you fail to attend without cancelling, no refund will be issued. A
              Pitch Provider may also apply additional charges where applicable.
            </>,
          ]}
        />

        <Note title="Tip">
          We strongly encourage early cancellations to maximise refund
          eligibility and allow other users to book the pitch.
        </Note>
      </div>
    ),
  },

  {
    id: "non-refundable-charges",
    title: "3. Non-Refundable Charges",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          Where a refund is approved, the following amounts are non-refundable:
        </p>

        <BulletList
          items={[
            <>
              <span className="font-medium text-gray-900">
                Platform Service Fee
              </span>{" "}
              — A fixed <span className="font-semibold">5% service charge</span>{" "}
              (or the amount displayed at checkout) covering administrative,
              operational, platform maintenance, and payment gateway costs.
            </>,
            <>
              <span className="font-medium text-gray-900">
                Payment Processing Fees
              </span>{" "}
              — Any third-party payment gateway fees incurred for the
              transaction.
            </>,
            <>
              <span className="font-medium text-gray-900">Taxes</span> — VAT and
              other statutory taxes may be non-refundable once payment
              processing has occurred, in line with applicable Nigerian tax
              rules.
            </>,
          ]}
        />

        <p className="text-sm leading-6 text-gray-700">
          These deductions help cover costs already incurred and support
          compliance with applicable legal and tax obligations.
        </p>
      </div>
    ),
  },

  {
    id: "refund-calculation",
    title: "4. Refund Calculation",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          Where a booking is eligible and a refund is approved:
        </p>

        <Formula>
          <span className="font-medium">
            Refund Amount = Total Booking Amount − (Non-Refundable Service Fee +
            Payment Processing Fees + Applicable Taxes)
          </span>
        </Formula>

        <p className="text-sm leading-6 text-gray-700">
          Refunds are calculated based on the original payment amount and are
          processed in Nigerian Naira (₦).
        </p>

        <Note title="Pitch Provider fees">
          Pitch Providers may apply additional cancellation conditions or fees
          (where permitted and disclosed). Pitchbook NG does not control Pitch
          Provider-specific policies beyond facilitating the booking and
          payment.
        </Note>
      </div>
    ),
  },

  {
    id: "refund-processing",
    title: "5. Refund Processing and How to Request",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          Approved refunds are processed to the original payment method. Timing
          depends on your bank or payment provider and may take{" "}
          <span className="font-medium text-gray-900">7–14 business days</span>.
          We are not responsible for delays caused by third-party financial
          institutions.
        </p>

        <p className="text-sm leading-6 text-gray-700">
          In some cases, we may offer a partial refund or platform credit (for
          future bookings) at our discretion.
        </p>

        <Note title="How to request a cancellation/refund">
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm leading-6 text-gray-700">
            <li>Log into your Pitchbook NG account.</li>
            <li>
              Go to <span className="font-medium">“My Bookings”</span> and
              select the relevant booking.
            </li>
            <li>
              Follow the cancellation prompts and provide any required
              documentation (for example, where exceptional circumstances are
              claimed).
            </li>
          </ol>
        </Note>
      </div>
    ),
  },

  {
    id: "exceptional-circumstances",
    title: "6. Exceptional Circumstances and Force Majeure",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          In rare situations outside your reasonable control—such as pitch
          closure due to unforeseen weather, maintenance issues, or government
          restrictions—Pitchbook NG may offer a full or partial refund or
          credit, in coordination with the Pitch Provider.
        </p>
        <p className="text-sm leading-6 text-gray-700">
          Decisions in exceptional cases are made on a case-by-case basis and
          may require supporting evidence.
        </p>
      </div>
    ),
  },

  {
    id: "policy-updates",
    title: "7. Policy Updates",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          We may modify this Policy at any time to reflect operational changes
          or legal requirements. Updates will be posted on the Platform with an
          updated “Last Updated” date. Continued use of the Platform after
          changes take effect constitutes acceptance of the revised Policy.
        </p>

        <Note title="Consumer protection note">
          This Policy is intended to align with applicable Nigerian consumer
          protection principles, including allowing reasonable cancellation
          rules and charges for advance bookings where appropriate.
        </Note>
      </div>
    ),
  },

  {
    id: "refund-contact",
    title: "8. Contact Us",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          For questions, refund requests, or support:
        </p>

        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">Email:</span>{" "}
            <EmailLink email="pitchbookng@gmail.com" />
          </p>
        </div>

        <p className="text-sm leading-6 text-gray-700">
          We are committed to fair, transparent, and efficient handling of all
          cancellations and refunds. Thank you for choosing Pitchbook NG.
        </p>
      </div>
    ),
  },
];
