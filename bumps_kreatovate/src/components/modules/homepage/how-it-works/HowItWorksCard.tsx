import Image from "next/image";

interface cardData {
  title: string;
  photo: string;
  points: string[];
  hasDescription: boolean;
  description?: string;
  reversed: boolean;
}

interface cardDataProps {
  cardData: cardData[];
}

const HowItWorksCard = ({ cardData }: cardDataProps) => {
  return (
    <div className="space-y-16">
      {cardData?.map((data, i) => (
        <div
          key={i}
          className={`flex ${
            data.reversed
              ? "flex-col-reverse md:flex-row-reverse"
              : "flex-col-reverse md:flex-row"
          } items-center justify-between gap-14 md:gap-28`}
        >
          <div className="w-full md:w-1/2">
            <h1 className="font-semibold text-xl md:text-3xl leading-[130%] mb-6">
              {data.title}
            </h1>

            <ul className="space-y-4">
              {data.points?.map((point, j) => (
                <li key={j} className="flex gap-2">
                  <span className="shrink-0 mt-4">
                    <Image
                      src="/images/hr-line.png"
                      alt="ul dots"
                      width={38}
                      height={7}
                      className="block object-cover"
                    />
                  </span>

                  <p className="font-normal text-lg leading-[180%] text-ring">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
            {data.hasDescription && (
              <p className="font-normal text-lg leading-[180%] text-ring mt-4">
                {data.description}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={data.photo}
              alt={data.title}
              width={600}
              height={361}
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HowItWorksCard;
