import React from "react";

type Section = {
  id: string;
  title: string;
  content: React.ReactNode;
};

function PP({ sections }: { sections: Section[] }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
      <p className="text-sm font-semibold text-zinc-900">On this page</p>
      <ul className="mt-3 space-y-2 mx-auto max-w-3xl px-4 py-10">
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

export const PrivacyPolicy = () => {
  const lastUpdated = "January 2026"; // change as needed

  return (
    <main className="min-h-screen bg-white">
      {/* Header band (optional) */}
      <div className="border-b border-zinc-200 bg-emerald-50/60">
        <div className="mx-auto  px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-700 sm:text-base">
            Please read these Privacy Policy carefully before using PitchBookng.
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

                {POLICIES_SECTIONS.map((s) => (
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
            <div className="lg:sticky lg:top-24 space-y-4 ">
              <PP sections={POLICIES_SECTIONS} />

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

const KeyValue = ({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1 rounded-xl border border-gray-200 bg-white p-4">
    <div className="text-sm font-semibold text-gray-900">{label}</div>
    <div className="text-sm leading-6 text-gray-700">{children}</div>
  </div>
);

const POLICIES_SECTIONS: Section[] = [
  {
    id: "intro",
    title: "Privacy Policy",
    content: (
      <div className="space-y-4">
        <p className="text-sm text-gray-700">
          This page explains the rules, responsibilities, and limitations that
          apply when you use PitchBooking / Pitchbook NG. If you do not agree,
          please do not use the platform.
        </p>

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">Last Updated:</span>{" "}
            January 2026
          </p>
        </div>

        <p className="text-sm leading-6 text-gray-700">
          Pitchbook NG (“we”, “us”, or “our”) is committed to protecting your
          privacy and handling your personal data responsibly, in compliance
          with the{" "}
          <span className="font-medium">
            Nigeria Data Protection Act 2023 (NDPA)
          </span>
          , its subsidiary regulations, and other applicable Nigerian laws.
        </p>
      </div>
    ),
  },

  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: (
      <div className="space-y-4">
        <p className="text-sm leading-6 text-gray-700">
          We collect only the information needed to operate the platform,
          process bookings, provide support, and improve the service.
        </p>

        <div className="grid gap-3 md:grid-cols-2">
          <KeyValue label="Personal Information">
            Name, phone number, email address.
          </KeyValue>

          <KeyValue label="Booking & Transaction Data">
            Pitch selected, date/time, booking reference, payment amount, and
            booking status.
          </KeyValue>

          <KeyValue label="Payment Information">
            Payments are processed securely by licensed third-party payment
            processors.{" "}
            <span className="font-medium">
              We do not store full card details
            </span>
            .
          </KeyValue>

          <KeyValue label="Technical & Usage Data">
            Device type, IP address, browser information, operating system,
            pages viewed, and booking patterns.
          </KeyValue>

          <KeyValue label="Communications">
            Messages you send through the platform or to customer support.
          </KeyValue>
        </div>
      </div>
    ),
  },

  {
    id: "lawful-basis",
    title: "2. Lawful Basis for Processing",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          We process personal data only where there is a lawful basis under the
          NDPA, including one or more of the following:
        </p>

        <BulletList
          items={[
            <>
              <span className="font-medium text-gray-900">Consent</span> — where
              you have given permission (you may withdraw consent at any time).
            </>,
            <>
              <span className="font-medium text-gray-900">Contract</span> —
              where processing is necessary to fulfil your booking and provide
              services.
            </>,
            <>
              <span className="font-medium text-gray-900">
                Legal obligation
              </span>{" "}
              — where we must comply with applicable laws and regulations.
            </>,
            <>
              <span className="font-medium text-gray-900">
                Legitimate interests
              </span>{" "}
              — such as fraud prevention, security, and service improvement,
              provided your rights do not override these interests.
            </>,
          ]}
        />
      </div>
    ),
  },

  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          We use your information to operate the platform and deliver the
          services you request, including:
        </p>

        <BulletList
          items={[
            "Process, confirm, reschedule, or cancel bookings.",
            "Facilitate secure payments and maintain transaction records.",
            "Provide customer support and handle complaints or disputes.",
            "Send essential service communications (e.g., confirmations, reminders, changes).",
            "Prevent fraud, abuse, and unauthorized access; maintain platform security.",
            "Comply with legal, tax, and regulatory requirements.",
            "Improve platform functionality and user experience using aggregated/anonymised analytics.",
          ]}
        />

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm leading-6 text-amber-900">
            <span className="font-semibold">Marketing:</span> We do not send
            marketing messages unless you have expressly opted in. You can opt
            out at any time.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: "sharing",
    title: "4. Who We Share Your Data With",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          We share personal data only when necessary to provide the service, and
          only with appropriate safeguards in place:
        </p>

        <BulletList
          items={[
            <>
              <span className="font-medium text-gray-900">
                Payment processors
              </span>{" "}
              — to process transactions securely.
            </>,
            <>
              <span className="font-medium text-gray-900">Pitch Providers</span>{" "}
              — limited booking details needed to fulfil your reservation (e.g.,
              name, phone number, booking time).
            </>,
            <>
              <span className="font-medium text-gray-900">
                Service providers
              </span>{" "}
              — such as hosting, analytics, and customer support tools, under
              strict data processing agreements.
            </>,
            <>
              <span className="font-medium text-gray-900">
                Regulators / authorities
              </span>{" "}
              — when required by law or to protect our rights and users.
            </>,
          ]}
        />

        <p className="text-sm leading-6 text-gray-700">
          <span className="font-medium text-gray-900">
            We do not sell, rent, or trade
          </span>{" "}
          your personal data for third-party marketing.
        </p>
      </div>
    ),
  },

  {
    id: "security",
    title: "5. Data Security",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          We use appropriate technical and organisational measures to protect
          personal data, including encryption, access controls, and periodic
          security reviews.
        </p>
        <p className="text-sm leading-6 text-gray-700">
          However, no method of transmission over the internet is completely
          secure. We encourage you to use strong passwords and keep your account
          details confidential.
        </p>
      </div>
    ),
  },

  {
    id: "retention",
    title: "6. Data Retention",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          We retain personal data only for as long as needed to provide the
          service and meet legal, tax, or regulatory requirements. When
          retention is no longer necessary, we securely delete or anonymise the
          data.
        </p>
      </div>
    ),
  },

  {
    id: "rights",
    title: "7. Your Data Protection Rights (NDPA)",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          Subject to applicable law, you may have the right to:
        </p>

        <BulletList
          items={[
            "Access your personal data.",
            "Request correction of inaccurate or incomplete data.",
            "Request deletion of your data where lawful (“right to be forgotten”).",
            "Restrict or object to certain processing (including processing based on legitimate interests).",
            "Request data portability where applicable.",
            "Withdraw consent at any time (where processing is based on consent).",
          ]}
        />

        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm leading-6 text-gray-700">
            To exercise these rights, contact us at{" "}
            <EmailLink email="pitchbookng@gmail.com" />. We will respond within
            the statutory timeframe.
          </p>
          <p className="mt-2 text-sm leading-6 text-gray-700">
            You also have the right to lodge a complaint with the Nigeria Data
            Protection Commission (NDPC).
          </p>
        </div>
      </div>
    ),
  },

  {
    id: "cookies",
    title: "8. Cookies & Similar Technologies",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          We use cookies and similar technologies to operate the platform,
          enhance user experience, and understand usage patterns. You can manage
          cookie preferences through your browser settings.
        </p>
        <p className="text-sm leading-6 text-gray-700">
          For more details, please see our Cookie Notice (available on the
          platform).
        </p>
      </div>
    ),
  },

  {
    id: "international-transfers",
    title: "9. International Transfers",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          We currently process data within Nigeria. If we ever transfer personal
          data outside Nigeria, we will do so only with appropriate safeguards
          as required by the NDPA.
        </p>
      </div>
    ),
  },

  {
    id: "changes",
    title: "10. Changes to This Privacy Policy",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          We may update this Privacy Policy to reflect changes in our practices
          or legal requirements. We will post the updated version here and
          revise the “Last Updated” date.
        </p>
        <p className="text-sm leading-6 text-gray-700">
          Continued use of the platform after changes take effect means you
          accept the updated policy.
        </p>
      </div>
    ),
  },

  {
    id: "contact",
    title: "11. Contact Us",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          If you have questions, concerns, or want to exercise your data rights,
          contact us:
        </p>

        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">Email:</span>{" "}
            <EmailLink email="pitchbookng@gmail.com" />
          </p>
        </div>

        <p className="text-sm leading-6 text-gray-700">
          We are committed to transparency, accountability, and respect for your
          privacy.
        </p>
      </div>
    ),
  },
];
