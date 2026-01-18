import Image from "next/image";
interface Props {
  reversed?: boolean;
  data: {
    title: string;
    desc: string;
    image: string;
  };
}
const SplitShowcase = ({ reversed, data }: Props) => {
  return (
    <div className="px-6 py-12 bg-[#0F1016]">
      <div className="custom-container">
        <div
          className={`flex ${
            reversed
              ? "flex-col-reverse md:flex-row-reverse"
              : "flex-col md:flex-row"
          } items-center justify-between gap-12`}
        >
          <div className="space-y-4 w-full md:w-1/2 h-full text-center md:text-left">
            <h1 className="font-jakarta font-bold text-2xl md:text-5xl leading-[120%]">
              {data.title}
            </h1>
            <p className="font-roboto text-base leading-[180%] texty-[#E9E9EA]">
              {data.desc}
            </p>
          </div>
          <div className=" w-full md:w-1/2 h-full">
            <Image
              src={data.image}
              alt="bg image"
              width={627}
              height={507}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitShowcase;
