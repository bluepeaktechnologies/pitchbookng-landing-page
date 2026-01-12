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
                  <section key={s.id} id={s.id}>
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

const TERMS_SECTIONS: Section[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <>
        <p>
          Pitchbook NG (“Pitchbook NG”, “we”, “us”, or “our”) operates a digital
          platform, including a mobile application and website (collectively,
          the “Platform”), that enables users to discover, book, and make
          payments for football pitches located in Abuja, Nigeria. These Terms
          and Conditions (“Terms”) govern your access to and use of the
          Platform, including any content, functionality, and services offered
          on or through it.
        </p>
        <p>
          By accessing or using the Platform, you acknowledge that you have
          read, understood, and agree to be bound by these Terms, our Privacy
          Policy, and our Refund and Cancellation Policy (collectively, the
          “Agreement”). If you do not agree to these Terms, you must not access
          or use the Platform.
        </p>
        <p>
          We reserve the right to update these Terms at any time. We will notify
          you of material changes by posting the updated Terms on the Platform
          and updating the “Last Updated” date. Your continued use of the
          Platform after such changes constitutes your acceptance of the revised
          Terms.
        </p>
      </>
    ),
  },
  {
    id: "eligibility-and-capacity",
    title: "2. Eligibility and Capacity",
    content: (
      <>
        <p>To use the Platform, you must:</p>
        <ul>
          <li>
            Be at least 18 years old or have the valid consent of a parent or
            legal guardian who agrees to these Terms on your behalf;
          </li>
          <li>
            Have the legal capacity to enter into binding agreements under the
            laws of the Federal Republic of Nigeria; and
          </li>
          <li>
            Comply with all applicable laws, regulations, and these Terms.
          </li>
        </ul>
        <p>
          If you are using the Platform on behalf of an entity (e.g., a team or
          organization), you represent and warrant that you are authorized to
          bind that entity to these Terms.
        </p>
      </>
    ),
  },
  {
    id: "user-accounts",
    title: "3. User Accounts",
    content: (
      <>
        <p>
          To access certain features of the Platform, you may be required to
          create an account. You agree to:
        </p>
        <ul>
          <li>
            Provide accurate, complete, current, and truthful information during
            registration and keep it updated;
          </li>
          <li>
            Maintain the security and confidentiality of your login credentials
            (e.g., username and password);
          </li>
          <li>Not share your account credentials with any third party; and</li>
          <li>
            Immediately notify us of any unauthorized access or use of your
            account.
          </li>
        </ul>
        <p>
          You are solely responsible for all activities that occur under your
          account, including any bookings, payments, or communications.
          Pitchbook NG shall not be liable for any losses or damages arising
          from your failure to maintain the security of your account or from
          unauthorized access due to your negligence.
        </p>
        <p>
          We reserve the right to refuse registration, suspend, or terminate
          your account at any time for any reason, including but not limited to
          violations of these Terms.
        </p>
      </>
    ),
  },
  {
    id: "bookings-and-confirmation",
    title: "4. Bookings and Confirmation",
    content: (
      <>
        <p>
          All bookings for football pitches must be made exclusively through the
          Platform. A booking is only confirmed upon:
        </p>
        <ul>
          <li>Successful completion of the booking process; and</li>
          <li>Receipt of full payment.</li>
        </ul>
        <p>
          Pitch availability, pricing, operating hours, and conditions are set
          by independent pitch owners or operators (“Pitch Providers”).
          Pitchbook NG does not own, control, or guarantee:
        </p>
        <ul>
          <li>The accuracy of pitch descriptions, images, or availability;</li>
          <li>
            The condition, safety, suitability, or maintenance of any pitch; or
          </li>
          <li>
            The quality of equipment, facilities, or services provided at the
            pitch.
          </li>
        </ul>
        <p>
          You are responsible for reviewing all pitch details, rules, and
          restrictions before booking. Confirmed bookings are subject to the
          Pitch Provider’s terms, which may be provided separately.
        </p>
      </>
    ),
  },
  {
    id: "payments-charges-and-taxes",
    title: "5. Payments, Charges, and Taxes",
    content: (
      <>
        <p>
          All prices on the Platform are displayed in Nigerian Naira (₦) and may
          include:
        </p>
        <ul>
          <li>Pitch rental fees;</li>
          <li>Platform service fees;</li>
          <li>Payment processing fees; and</li>
          <li>
            Applicable taxes, including Value Added Tax (VAT) as required under
            Nigerian tax laws.
          </li>
        </ul>
        <p>
          VAT may be included in the displayed price or charged separately. By
          completing a transaction, you authorize Pitchbook NG (or its
          designated payment processor) to charge your selected payment method
          for the total amount, including all applicable fees and taxes.
        </p>
        <p>
          We accept payments via approved methods displayed on the Platform. All
          payments are processed securely, but we do not store your full payment
          information (see our Privacy Policy for details). You represent and
          warrant that you are authorized to use the payment method provided.
        </p>
        <p>
          In the event of payment disputes, you agree to cooperate with us and
          your payment provider to resolve them promptly.
        </p>
      </>
    ),
  },
  {
    id: "refunds-and-cancellations",
    title: "6. Refunds and Cancellations",
    content: (
      <>
        <p>
          Refunds and cancellations are governed exclusively by our Refund and
          Cancellation Policy, which is incorporated into these Terms by
          reference. Please review it carefully before making a booking, as it
          outlines conditions for refunds, cancellation windows, and any
          associated fees.
        </p>
        <p>
          Pitchbook NG processes refunds in accordance with the Policy, but
          ultimate approval may depend on the Pitch Provider. We are not
          responsible for delays in refunds due to banking or payment processor
          issues.
        </p>
      </>
    ),
  },
  {
    id: "platform-role-and-limitations",
    title: "7. Platform Role and Limitations",
    content: (
      <>
        <p>
          Pitchbook NG acts solely as an intermediary and facilitator for
          bookings and payments between users and Pitch Providers. We do not
          own, operate, manage, control, or endorse any pitches listed on the
          Platform.
        </p>
        <p>Pitchbook NG shall not be responsible or liable for:</p>
        <ul>
          <li>
            The condition, safety, maintenance, or suitability of any pitch;
          </li>
          <li>
            The conduct, negligence, or actions of Pitch Providers, their staff,
            or other users;
          </li>
          <li>
            The quality or availability of equipment, amenities, or services at
            the pitch;
          </li>
          <li>
            Any disruptions, cancellations, injuries, damages, or losses
            occurring during pitch usage; or
          </li>
          <li>Any disputes between users and Pitch Providers.</li>
        </ul>
        <p>
          You acknowledge that Pitch Providers are independent third parties,
          and any agreements or interactions with them are at your own risk.
        </p>
      </>
    ),
  },
  {
    id: "assumption-of-risk-and-release",
    title: "8. Assumption of Risk and Release",
    content: (
      <>
        <p>
          Football and related activities involve inherent risks, including but
          not limited to physical injury, property damage, or other hazards. By
          using the Platform and booking a pitch, you voluntarily assume all
          such risks and agree to release Pitchbook NG, its affiliates,
          officers, directors, employees, and agents from any claims,
          liabilities, or damages arising from your use of the Platform or
          participation in activities at booked pitches.
        </p>
      </>
    ),
  },
  {
    id: "prohibited-conduct",
    title: "9. Prohibited Conduct",
    content: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>
            Use the Platform for any unlawful, fraudulent, or unauthorized
            purpose;
          </li>
          <li>
            Interfere with, disrupt, or damage the Platform, including through
            hacking, viruses, or denial-of-service attacks;
          </li>
          <li>Misrepresent your identity, affiliations, or intentions;</li>
          <li>
            Harass, threaten, or infringe on the rights of other users, Pitch
            Providers, or third parties;
          </li>
          <li>
            Post, upload, or transmit any harmful, offensive, or inappropriate
            content;
          </li>
          <li>
            Reverse engineer, decompile, or attempt to extract source code from
            the Platform; or
          </li>
          <li>Violate any applicable laws, regulations, or these Terms.</li>
        </ul>
        <p>
          We may monitor Platform usage and reserve the right to investigate
          violations, suspend or terminate access, and report illegal activities
          to authorities.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "10. Intellectual Property",
    content: (
      <>
        <p>
          All content on the Platform, including text, graphics, logos,
          trademarks, software, and user interfaces, is owned by or licensed to
          Pitchbook NG and protected by Nigerian and international intellectual
          property laws. You are granted a limited, non-exclusive,
          non-transferable license to access and use the Platform for personal,
          non-commercial purposes.
        </p>
        <p>
          You agree not to copy, modify, distribute, sell, or exploit any
          Platform content without our prior written consent. User-generated
          content (e.g., reviews) grants us a perpetual, royalty-free license to
          use, display, and modify it for Platform purposes.
        </p>
      </>
    ),
  },
  {
    id: "disclaimer-of-warranties",
    title: "11. Disclaimer of Warranties",
    content: (
      <>
        <p>
          The Platform is provided “as is” and “as available” without warranties
          of any kind, express or implied, including but not limited to
          warranties of merchantability, fitness for a particular purpose,
          accuracy, or non-infringement. We do not warrant that the Platform
          will be uninterrupted, error-free, secure, or free from viruses.
        </p>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "12. Limitation of Liability",
    content: (
      <>
        <p>
          To the fullest extent permitted by Nigerian law, Pitchbook NG, its
          affiliates, officers, directors, employees, and agents shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages, including loss of profits, data, or goodwill,
          arising from or related to your use of the Platform, even if advised
          of the possibility of such damages.
        </p>
        <p>
          Our total liability for any claim shall not exceed the amount you paid
          us for the specific booking giving rise to the claim.
        </p>
      </>
    ),
  },
  {
    id: "indemnification",
    title: "13. Indemnification",
    content: (
      <>
        <p>
          You agree to indemnify, defend, and hold harmless Pitchbook NG, its
          affiliates, officers, directors, employees, and agents from any
          claims, liabilities, damages, losses, or expenses (including
          reasonable legal fees) arising from your use of the Platform,
          violation of these Terms, or infringement of third-party rights.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "14. Termination",
    content: (
      <>
        <p>
          We may suspend or terminate your access to the Platform at any time,
          with or without notice, for any reason, including breach of these
          Terms, suspected fraud, or legal requirements. Upon termination, your
          right to use the Platform ceases immediately, and we may delete your
          account and data.
        </p>
      </>
    ),
  },
  {
    id: "force-majeure",
    title: "15. Force Majeure",
    content: (
      <>
        <p>
          Pitchbook NG shall not be liable for any failure or delay in
          performing its obligations due to events beyond our reasonable
          control, including but not limited to acts of God, natural disasters,
          war, terrorism, pandemics, strikes, or governmental actions.
        </p>
      </>
    ),
  },
  {
    id: "governing-law-and-dispute-resolution",
    title: "16. Governing Law and Dispute Resolution",
    content: (
      <>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of the Federal Republic of Nigeria, without regard to conflict of
          law principles.
        </p>
        <p>
          Any disputes arising from or related to these Terms or the Platform
          shall be resolved through good-faith negotiations. If unresolved,
          disputes shall be submitted to binding arbitration in Abuja, Nigeria,
          under the rules of the Chartered Institute of Arbitrators (Nigeria
          Branch). You waive any right to participate in class actions.
        </p>
      </>
    ),
  },
  {
    id: "amendments-and-severability",
    title: "17. Amendments and Severability",
    content: (
      <>
        <p>
          We may amend these Terms at any time. If any provision is held invalid
          or unenforceable, the remaining provisions shall remain in full
          effect.
        </p>
      </>
    ),
  },
  {
    id: "entire-agreement",
    title: "18. Entire Agreement",
    content: (
      <>
        <p>
          These Terms, together with our Privacy Policy and Refund and
          Cancellation Policy, constitute the entire agreement between you and
          Pitchbook NG, superseding any prior agreements.
        </p>
      </>
    ),
  },
  {
    id: "contact-information",
    title: "19. Contact Information",
    content: (
      <>
        <p>For questions or concerns, contact us at:</p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:pitchbookng@gmail.com">pitchbookng@gmail.com</a>
          </li>
        </ul>
        <p>
          If you believe your intellectual property rights have been infringed,
          please provide details to the above email for review.
        </p>
      </>
    ),
  },
];
