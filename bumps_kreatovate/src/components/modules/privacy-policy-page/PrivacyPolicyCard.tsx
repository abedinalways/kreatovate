import PrivacyPolicyContentCard from "./PrivacyPolicyContentCard";

const PrivacyPolicyCard = () => {
  const privacyPolicyData = [
    {
      title: "1. Who We Are",
      sections: [
        {
          subtitle: "Entity:",
          bullets: ["Kreatovate.com (“we”, “us”, “our”)"],
        },
        {
          subtitle: "Purpose:",
          bullets: [
            "As a digital transformation consultancy, we help businesses implement blockchain, AI, and tokenization solutions, collecting personal data to serve clients and website visitors.",
          ],
        },
      ],
    },

    {
      title: "2. What We Collect & How We Use It",
      sections: [
        {
          subtitle: "Data We Collect:",
          bullets: [
            "Contact details (email, name) when users sign up or reach out.",
            "Usage data via cookies and analytics tools (e.g., IP address, pages visited).",
            "Optional data (job title, company) provided voluntarily in forms.",
          ],
        },

        {
          subtitle: "How We Use It:",
          bullets: [
            "To respond to inquiries and deliver services.",
            "For website analytics and improving user experience.",
            "For marketing (with explicit consent).",
          ],
        },

        {
          subtitle: "AI & Algorithm Use:",
          bullets: [
            "We may process anonymized or consented data using AI models for personalization and internal insights. Users can opt out at any time.",
          ],
        },
      ],
    },

    {
      title: "3. Cookies & Tracking Technologies",
      sections: [
        {
          subtitle: "Consent Management:",
          bullets: [
            "Upon visiting, users see a cookie banner allowing them to accept or reject categories: necessary, analytics, marketing, AI. Preferences can be updated anytime.",
          ],
        },
        {
          subtitle: "Policy Availability:",
          bullets: [
            "Full details about cookies, providers, and categories are in our Cookie Policy.",
          ],
        },
      ],
    },

    {
      title: "4. Sharing with Third Parties",
      sections: [
        {
          subtitle: "We may share data with:",
          bullets: [
            "Service providers (hosting, analytics, CRM)",
            "Legal authorities if required by law.",
          ],
        },
        {
          subtitle: "Cross-border Transfers:",
          bullets: [
            "Transfers outside the U.S. are safeguarded by appropriate mechanisms (e.g., EU Standard Contractual Clauses).",
          ],
        },
      ],
    },

    {
      title: "5. Data Security & Retention",
      sections: [
        {
          subtitle: "Security Measures:",
          bullets: [
            "We use HTTPS, encryption, access controls, and regular security reviews.",
          ],
        },
        {
          subtitle: "Retention:",
          bullets: [
            "We retain personal data for as long as necessary—typically up to 24 months—or as required by law, whichever is longer.",
          ],
        },
      ],
    },

    {
      title: "6. Your Privacy Rights",
      sections: [
        {
          subtitle:
            "Depending on your jurisdiction, you may have the right to:",
          bullets: [
            "Access, correct, or delete your personal data.",
            "Opt out of data sales/sharing (“Do Not Sell My Personal Data”).",
            "Withdraw consent or object to processing.",
            "Data portability (where applicable).",
            "Non-discrimination for exercising your rights.",
          ],
        },
        {
          subtitle: "To exercise these rights, contact us:",
          bullets: [
            "Toll-free phone: 1-866-879-2929",
            "Email: privacy@kreatovate.com",
            "Postal address: 801 Travis St, STE 2101 Houston, TX, 77002",
          ],
        },
      ],
    },

    {
      title: "7. Children's Privacy",
      sections: [
        {
          bullets: [
            "We do not knowingly collect data from children under 13. If you believe we have unintentionally done so, please contact us, and we will promptly delete the data.",
          ],
        },
      ],
    },

    {
      title: "8. Updates to This Policy",
      sections: [
        {
          bullets: [
            "We may update this policy to reflect changes in the law or our practices. Changes will be noted by date, and significant changes may trigger notifications to users or prompts for consent.",
          ],
        },
      ],
    },

    {
      title: "9. Commitment to Privacy by Design",
      sections: [
        {
          bullets: [
            "We integrate privacy principles into our operations from the start—proactive, transparent, secure, and user-centric—throughout data’s lifecycle.",
          ],
        },
      ],
    },

    {
      title: "10. Contact Us",
      sections: [
        {
          subtitle: "Questions or feedback? Reach out anytime:",
          bullets: [
            "Email: privacy@kreatovate.com",
            "Phone: 1-866-879-2929",
            "Postal address: 801 Travis St, STE 2101 Houston, TX, 77002",
          ],
        },
      ],
    },
  ];

  return (
    <div className="custom-container py-24 space-y-8 px-4 lg:px-0">
      <div className="flex flex-col gap-4">
        <h1 className="uppercase font-jakarta text-3xl font-bold leading-10">
          PRIVACY POLICY
        </h1>
        <p className="font-jakarta text-2xl font-medium leading-9">
          Last Updated: 8/26/2025
        </p>
      </div>

      <div>
        <PrivacyPolicyContentCard data={privacyPolicyData} />
      </div>
    </div>
  );
};

export default PrivacyPolicyCard;
