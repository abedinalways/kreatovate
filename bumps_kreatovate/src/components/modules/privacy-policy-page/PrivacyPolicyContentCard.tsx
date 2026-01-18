interface PrivacyPolicySection {
  title: string;
  sections: {
    subtitle?: string;
    bullets: string[];
  }[];
}

const PrivacyPolicyContentCard = ({
  data,
}: {
  data: PrivacyPolicySection[];
}) => {
  return (
    <div className="space-y-10">
      {data.map((item, index) => (
        <div key={index} className="space-y-4">
          {/* Main Title */}
          <h1 className="font-jakarta text-3xl font-medium leading-10">
            {item.title}
          </h1>

          {/* Sub-sections */}
          {item.sections.map((section, idx) => (
            <div key={idx} className="space-y-2">
              {/* Subtitle */}
              {section.subtitle && (
                <h5 className="text-lg font-bold leading-8 text-ring">
                  {section.subtitle}
                </h5>
              )}

              {/* Bullet List */}
              <ul className="list-disc pl-5 space-y-2">
                {section.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicyContentCard;
