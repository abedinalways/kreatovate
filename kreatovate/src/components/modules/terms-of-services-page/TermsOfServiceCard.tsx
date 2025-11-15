import TermsOfServicesContentCard from "./TermsOfServicesContentCard";

const TermsOfServiceCard = () => {
  const termsOdServicesData = [
    {
      title: "1. Eligibility",
      sections: [
        {
          subtitle: null,
          bullets: [
            "You must be at least 18 years old or the age of majority in your jurisdiction to use our services.",
            "By using our website, you represent and warrant that you meet these requirements.",
          ],
        },
      ],
    },
    {
      title: "2. Services Provided",
      sections: [
        {
          subtitle: null,
          bullets: [
            "Kreatovate provides digital marketing, SaaS setup and deployment, consulting, and related services.",
            "We may modify, suspend, or discontinue services at any time without liability.",
          ],
        },
      ],
    },
    {
      title: "3. User Responsibilities",
      sections: [
        {
          subtitle: null,
          bullets: [
            "Use our website and services only for lawful purposes.",
            "Provide accurate and up-to-date information when engaging with us.",
            "Not attempt to access, interfere with, or disrupt our systems or networks.",
          ],
        },
      ],
    },
    {
      title: "4. Intellectual Property",
      sections: [
        {
          subtitle: null,
          bullets: [
            "All content, trademarks, graphics, logos, and materials on this website are owned by or licensed to Kreatovate.",
            "You may not copy, reproduce, distribute, or create derivative works without our prior written consent.",
          ],
        },
      ],
    },
    {
      title: "5. Payment Terms",
      sections: [
        {
          subtitle: null,
          bullets: [
            "For consulting and marketing services, payment terms will be outlined in your service agreement or invoice.",
            "Late payments may be subject to penalties, suspension of services, or collection actions.",
          ],
        },
      ],
    },
    {
      title: "6. No Guarantee of Results",
      sections: [
        {
          subtitle: null,
          bullets: [
            "While we strive to deliver impactful solutions, we do not guarantee specific business outcomes, financial results, or performance metrics.",
            "Client results may vary.",
          ],
        },
      ],
    },
    {
      title: "7. Limitation of Liability",
      sections: [
        {
          subtitle: null,
          bullets: [
            "To the maximum extent permitted by law:",
            "Kreatovate shall not be liable for indirect, incidental, special, or consequential damages.",
            "Our total liability for any claim arising from your use of our services shall not exceed the amount paid by you to us in the twelve (12) months preceding the claim.",
          ],
        },
      ],
    },
    {
      title: "8. Indemnification",
      sections: [
        {
          subtitle: null,
          bullets: [
            "You agree to indemnify, defend, and hold harmless Kreatovate, its affiliates, employees, and partners from any claims, damages, liabilities, and expenses arising from your use of our services or violation of these Terms.",
          ],
        },
      ],
    },
    {
      title: "9. Third-Party Services",
      sections: [
        {
          subtitle: null,
          bullets: [
            "Our website may contain links to third-party sites. We are not responsible for the content, policies, or practices of such sites.",
            "Accessing third-party services is at your own risk.",
          ],
        },
      ],
    },
    {
      title: "10. Termination",
      sections: [
        {
          subtitle: null,
          bullets: [
            "We reserve the right to suspend or terminate your access to our website or services at our sole discretion, without notice, if you violate these Terms or applicable laws.",
          ],
        },
      ],
    },
    {
      title: "11. Governing Law",
      sections: [
        {
          subtitle: null,
          bullets: [
            "These Terms are governed by and construed in accordance with the laws of the State of Texas, without regard to conflict of law principles.",
            "Disputes shall be resolved in the state or federal courts located in Houston, Texas.",
          ],
        },
      ],
    },
    {
      title: "12. Changes to These Terms",
      sections: [
        {
          subtitle: null,
          bullets: [
            "We may update these Terms from time to time. Changes will be posted on this page with the updated effective date.",
            "Continued use of our services after changes constitutes acceptance of the new Terms.",
          ],
        },
      ],
    },
    {
      title: "13. Contact Us",
      sections: [
        {
          subtitle: null,
          bullets: [
            "If you have questions about these Terms, please contact us:",
            "Email: support@kreatovate.com",
            "Phone: 1-866-879-2929",
            "Postal Address: 801 Travis St, STE 2101 Houston, TX 77002",
          ],
        },
      ],
    },
  ];

  return (
    <div className="custom-container py-24 space-y-8 px-4 lg:px-0">
      <div className="flex flex-col gap-4">
        <h1 className="uppercase font-jakarta text-3xl font-bold leading-10">
          Terms of Service
        </h1>
        <p className="font-jakarta text-2xl font-medium leading-9">
          Last Updated: 8/26/2025
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-4xl">
          KREATOVATE MARKETING & CONSULTING Terms of Service
        </h1>
        <p className="text-lg text-ring">
          Welcome to Kreatovate.com ("Kreatovate", "we", "our" or "us"). By
          accessing or using our website, services, or consulting solutions, you
          agree to comply with and be bound by the following Terms of Service
          ("Terms"). Please read these Terms carefully. If you do not agree, you
          may not use our services.
        </p>
      </div>

      <div>
        <TermsOfServicesContentCard data={termsOdServicesData} />
      </div>
    </div>
  );
};

export default TermsOfServiceCard;
