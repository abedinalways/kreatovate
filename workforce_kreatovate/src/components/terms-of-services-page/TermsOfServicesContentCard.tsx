import { FC } from "react";

interface Section {
  subtitle: string | null;
  bullets: string[];
}

interface TermsOfServiceItem {
  title: string;
  sections: Section[];
}

interface TermsOfServicesContentCardProps {
  data: TermsOfServiceItem[];
}

const TermsOfServicesContentCard: FC<TermsOfServicesContentCardProps> = ({
  data,
}) => {
  return (
    <div className="space-y-10">
      {data.map((item, index) => (
        <div key={index} className="space-y-4">
          <h1 className="font-jakarta text-3xl font-medium leading-10">
            {item.title}
          </h1>

          {item.sections.map((section, idx) => (
            <div key={idx} className="space-y-2">
              {section.subtitle && (
                <h5 className="text-lg font-bold leading-8 text-ring">
                  {section.subtitle}
                </h5>
              )}

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

export default TermsOfServicesContentCard;
