import React from "react";

type Section = {
  id: string;
  title: string;
  content: React.ReactNode;
};

function Toc({ sections }: { sections: Section[] }) {
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

// export const TermsAndConditions = () => {
//   return (
//     <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
//       <p className="text-sm font-semibold text-zinc-900">On this page</p>
//       <ul className="mt-3 space-y-2">
//         {sections.map((s) => (
//           <li key={s.id}>
//             <a
//               href={`#${s.id}`}
//               className="text-sm text-emerald-700 hover:text-emerald-800 hover:underline"
//             >
//               {s.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export const TermsAndConditions = () => {
  const lastUpdated = "January 2026"; // change as needed

  return (
    <main className="min-h-screen bg-white">
      {/* Header band (optional) */}
      <div className="border-b border-zinc-200 bg-emerald-50/60">
        <div className="mx-auto  px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Terms & Conditions
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

                {TERMS_SECTIONS.map((s) => (
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
              <Toc sections={TERMS_SECTIONS} />

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

const TERMS_SECTIONS: Section[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <div className="space-y-4">
        <p className="text-sm leading-6 text-gray-700">
          Pitchbook NG (“Pitchbook NG”, “we”, “us”, or “our”) operates a digital
          platform (mobile application and website, collectively the “Platform”)
          that enables users to discover, book, and pay for football pitches
          located in Abuja, Nigeria.
        </p>

        <p className="text-sm leading-6 text-gray-700">
          These Terms and Conditions (“Terms”) govern your access to and use of
          the Platform, including all content, functionality, and services
          offered through it.
        </p>

        <Note title="Agreement">
          By accessing or using the Platform, you confirm that you have read,
          understood, and agree to be bound by these Terms, our Privacy Policy,
          and our Refund and Cancellation Policy (together, the “Agreement”). If
          you do not agree, do not access or use the Platform.
        </Note>

        <p className="text-sm leading-6 text-gray-700">
          We may update these Terms from time to time. We will post the updated
          version on the Platform and revise the “Last Updated” date. Continued
          use of the Platform after changes take effect constitutes acceptance
          of the revised Terms.
        </p>
      </div>
    ),
  },

  {
    id: "eligibility-and-capacity",
    title: "2. Eligibility and Capacity",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          To use the Platform, you must:
        </p>
        <BulletList
          items={[
            <>
              Be at least{" "}
              <span className="font-medium text-gray-900">18 years old</span>,
              or have valid consent from a parent/legal guardian who agrees to
              these Terms on your behalf;
            </>,
            "Have the legal capacity to enter into a binding agreement under the laws of the Federal Republic of Nigeria; and",
            "Comply with all applicable laws, regulations, and these Terms.",
          ]}
        />
        <p className="text-sm leading-6 text-gray-700">
          If you use the Platform on behalf of an entity (e.g., a team or
          organisation), you represent that you are authorised to bind that
          entity to these Terms.
        </p>
      </div>
    ),
  },

  {
    id: "user-accounts",
    title: "3. User Accounts",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          To access certain features, you may need to create an account. You
          agree to:
        </p>
        <BulletList
          items={[
            "Provide accurate, complete, and up-to-date information and keep it current;",
            "Keep your login credentials secure and confidential;",
            "Not share your account credentials with any third party; and",
            "Notify us promptly of any unauthorised access or use of your account.",
          ]}
        />
        <p className="text-sm leading-6 text-gray-700">
          You are responsible for all activity under your account, including
          bookings, payments, and communications. We are not liable for losses
          caused by your failure to safeguard your credentials or by
          unauthorised access resulting from your negligence.
        </p>
        <p className="text-sm leading-6 text-gray-700">
          We may refuse registration, suspend, or terminate your account where
          we reasonably believe there is a breach of these Terms, suspected
          fraud, or where required by law.
        </p>
      </div>
    ),
  },

  {
    id: "bookings-and-confirmation",
    title: "4. Bookings and Confirmation",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          Bookings must be made through the Platform. A booking is confirmed
          only when:
        </p>
        <BulletList
          items={[
            "You complete the booking process; and",
            "We receive full payment.",
          ]}
        />

        <Note title="Pitch Providers">
          Pitch availability, pricing, operating hours, and on-site conditions
          are set by independent pitch owners/operators (“Pitch Providers”).
          Pitchbook NG does not own or operate pitches and does not guarantee:
          <BulletList
            items={[
              "The accuracy of pitch descriptions, images, rules, or availability;",
              "The condition, safety, suitability, or maintenance of any pitch; or",
              "The quality of facilities, equipment, amenities, or services at the pitch.",
            ]}
          />
        </Note>

        <p className="text-sm leading-6 text-gray-700">
          You are responsible for reviewing all pitch details, rules, and
          restrictions before booking. Confirmed bookings may also be subject to
          the Pitch Provider’s terms, which may be communicated separately.
        </p>
      </div>
    ),
  },

  {
    id: "payments-charges-and-taxes",
    title: "5. Payments, Charges, and Taxes",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          All prices are displayed in Nigerian Naira (₦). The total amount may
          include:
        </p>

        <BulletList
          items={[
            "Pitch rental fees;",
            "Platform/service fees;",
            "Payment processing fees; and",
            "Applicable taxes (including VAT) as required under Nigerian tax laws.",
          ]}
        />

        <p className="text-sm leading-6 text-gray-700">
          VAT may be included in the displayed price or shown as a separate line
          item, depending on the applicable rules. By completing a transaction,
          you authorise Pitchbook NG (or its payment processor) to charge your
          selected payment method for the total amount, including fees and
          taxes.
        </p>

        <p className="text-sm leading-6 text-gray-700">
          We accept payment methods displayed on the Platform. Payments are
          processed securely. We do not store full card details (see our Privacy
          Policy). You confirm that you are authorised to use the payment method
          provided.
        </p>

        <p className="text-sm leading-6 text-gray-700">
          If a payment is disputed or reversed, you agree to cooperate with us
          and the payment provider to resolve the issue promptly. We may suspend
          access to the Platform where there is an unresolved dispute or
          chargeback.
        </p>
      </div>
    ),
  },

  {
    id: "refunds-and-cancellations",
    title: "6. Refunds and Cancellations",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          Refunds and cancellations are governed by our Refund and Cancellation
          Policy, which forms part of this Agreement. Please review it before
          booking—it explains eligibility, cancellation windows, and any fees.
        </p>
        <p className="text-sm leading-6 text-gray-700">
          We process refunds in accordance with that Policy. Refund timelines
          may vary due to banks or payment processors, and we are not
          responsible for delays outside our control.
        </p>
      </div>
    ),
  },

  {
    id: "platform-role-and-limitations",
    title: "7. Platform Role and Limitations",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          Pitchbook NG acts as an intermediary to facilitate bookings and
          payments between users and Pitch Providers. We do not own, operate,
          manage, control, or endorse any pitch listed on the Platform.
        </p>

        <p className="text-sm leading-6 text-gray-700">
          To the extent permitted by law, Pitchbook NG is not responsible for:
        </p>

        <BulletList
          items={[
            "The condition, safety, maintenance, or suitability of any pitch;",
            "The conduct or actions of Pitch Providers, their staff, or other users;",
            "The quality or availability of equipment, amenities, or services at the pitch;",
            "Disruptions, cancellations, injuries, damages, or losses occurring during pitch use; or",
            "Disputes between users and Pitch Providers.",
          ]}
        />

        <p className="text-sm leading-6 text-gray-700">
          Pitch Providers are independent third parties. Any agreements or
          interactions with Pitch Providers are at your own risk.
        </p>
      </div>
    ),
  },

  {
    id: "assumption-of-risk-and-release",
    title: "8. Assumption of Risk and Release",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          Football and related activities carry inherent risks, including the
          risk of physical injury, illness, property damage, and other hazards.
          By booking a pitch and participating in activities, you voluntarily
          assume these risks.
        </p>
        <p className="text-sm leading-6 text-gray-700">
          To the fullest extent permitted by Nigerian law, you release Pitchbook
          NG, its affiliates, officers, directors, employees, and agents from
          claims, liabilities, or damages arising from your use of the Platform
          or participation in activities at booked pitches, except where such
          liability cannot be excluded by law.
        </p>
      </div>
    ),
  },

  {
    id: "prohibited-conduct",
    title: "9. Prohibited Conduct",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">You agree not to:</p>
        <BulletList
          items={[
            "Use the Platform for any unlawful, fraudulent, or unauthorised purpose;",
            "Interfere with or disrupt the Platform (including hacking, malware, or denial-of-service attacks);",
            "Impersonate others or misrepresent your identity, affiliation, or intent;",
            "Harass, threaten, or violate the rights of users, Pitch Providers, or third parties;",
            "Post or transmit content that is harmful, offensive, or unlawful;",
            "Reverse engineer, decompile, or attempt to extract source code from the Platform; or",
            "Violate any applicable laws, regulations, or these Terms.",
          ]}
        />
        <p className="text-sm leading-6 text-gray-700">
          We may monitor usage, investigate suspected violations, suspend or
          terminate access, and report unlawful activity to relevant authorities
          where required or appropriate.
        </p>
      </div>
    ),
  },

  {
    id: "intellectual-property",
    title: "10. Intellectual Property",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          The Platform and its content (including text, graphics, logos,
          trademarks, software, and user interfaces) are owned by or licensed to
          Pitchbook NG and are protected by Nigerian and applicable
          international intellectual property laws.
        </p>
        <p className="text-sm leading-6 text-gray-700">
          We grant you a limited, non-exclusive, non-transferable licence to
          access and use the Platform for personal, non-commercial purposes. You
          must not copy, modify, distribute, sell, or exploit any Platform
          content without our prior written consent.
        </p>
        <p className="text-sm leading-6 text-gray-700">
          If you submit user-generated content (e.g., reviews), you grant us a
          worldwide, royalty-free licence to host, use, display, reproduce, and
          modify it for Platform purposes (including moderation and formatting).
        </p>
      </div>
    ),
  },

  {
    id: "disclaimer-of-warranties",
    title: "11. Disclaimer of Warranties",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          The Platform is provided “as is” and “as available” without warranties
          of any kind, express or implied, including implied warranties of
          merchantability, fitness for a particular purpose, accuracy, and
          non-infringement.
        </p>
        <p className="text-sm leading-6 text-gray-700">
          We do not warrant that the Platform will be uninterrupted, error-free,
          secure, or free from viruses or other harmful components.
        </p>
      </div>
    ),
  },

  {
    id: "limitation-of-liability",
    title: "12. Limitation of Liability",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          To the fullest extent permitted by Nigerian law, Pitchbook NG and its
          affiliates, officers, directors, employees, and agents are not liable
          for indirect, incidental, special, consequential, or punitive damages
          (including loss of profits, data, or goodwill) arising from or related
          to your use of the Platform, even if we have been advised of the
          possibility of such damages.
        </p>
        <p className="text-sm leading-6 text-gray-700">
          To the extent permitted by law, our total liability for any claim
          related to a booking will not exceed the amount you paid us for the
          specific booking giving rise to the claim.
        </p>
      </div>
    ),
  },

  {
    id: "indemnification",
    title: "13. Indemnification",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          You agree to indemnify and hold harmless Pitchbook NG, its affiliates,
          officers, directors, employees, and agents from claims, liabilities,
          damages, losses, and expenses (including reasonable legal fees)
          arising out of your use of the Platform, your violation of these
          Terms, or your infringement of any third-party rights.
        </p>
      </div>
    ),
  },

  {
    id: "termination",
    title: "14. Termination",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          We may suspend or terminate your access to the Platform at any time,
          with or without notice, if you breach these Terms, we suspect fraud,
          or where required by law.
        </p>
        <p className="text-sm leading-6 text-gray-700">
          Upon termination, your right to use the Platform ends immediately. We
          may delete or anonymise account data in accordance with our Privacy
          Policy and applicable law.
        </p>
      </div>
    ),
  },

  {
    id: "force-majeure",
    title: "15. Force Majeure",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          Pitchbook NG is not liable for any failure or delay in performing its
          obligations due to events beyond our reasonable control, including
          acts of God, natural disasters, war, terrorism, pandemics, strikes,
          outages, or governmental actions.
        </p>
      </div>
    ),
  },

  {
    id: "governing-law-and-dispute-resolution",
    title: "16. Governing Law and Dispute Resolution",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          These Terms are governed by the laws of the Federal Republic of
          Nigeria, without regard to conflict of law principles.
        </p>

        <Note title="Dispute Resolution">
          <p>
            Disputes will first be addressed through good-faith negotiations. If
            unresolved, disputes will be submitted to binding arbitration in
            Abuja, Nigeria under the rules of the Chartered Institute of
            Arbitrators (Nigeria Branch), to the extent permitted by law.
          </p>
          <p className="mt-2">
            Where permitted, you waive any right to participate in a class
            action or representative proceeding.
          </p>
        </Note>
      </div>
    ),
  },

  {
    id: "amendments-and-severability",
    title: "17. Amendments and Severability",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          We may amend these Terms at any time by posting an updated version on
          the Platform. If any provision is held to be invalid or unenforceable,
          the remaining provisions will remain in full force and effect.
        </p>
      </div>
    ),
  },

  {
    id: "entire-agreement",
    title: "18. Entire Agreement",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          These Terms, together with our Privacy Policy and Refund and
          Cancellation Policy, form the entire agreement between you and
          Pitchbook NG and supersede any prior agreements or understandings
          relating to the Platform.
        </p>
      </div>
    ),
  },

  {
    id: "contact-information",
    title: "19. Contact Information",
    content: (
      <div className="space-y-3">
        <p className="text-sm leading-6 text-gray-700">
          For questions or concerns about these Terms, contact us at:
        </p>

        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">Email:</span>{" "}
            <EmailLink email="pitchbookng@gmail.com" />
          </p>
        </div>

        <p className="text-sm leading-6 text-gray-700">
          If you believe your intellectual property rights have been infringed,
          please email details (including proof of ownership and the location of
          the allegedly infringing content) to the address above for review.
        </p>
      </div>
    ),
  },
];
