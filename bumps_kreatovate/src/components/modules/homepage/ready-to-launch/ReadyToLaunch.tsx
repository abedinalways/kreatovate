import ButtonAll from "@/components/shared/buttons/ButtonAll";
import ArrowIcon from "@/components/shared/icons/ArrowIcon";

const ReadyToLaunch = () => {
  return (
    <div className="bg-[#0F1016] py-10 px-4 font-jakarta">
      <div className="custom-container bg-[url('/images/explore.png')] bg-cover bg-center bg-no-repeat relative z-10 sm:px-6 md:px-5 py-20 rounded-[20px] h-[350px]">
        <div className="flex flex-col justify-center items-center gap-4 text-center rounded-[20px]">
          <h2 className="text-2xl md:text-5xl font-bold">
            Ready to <span className="launch-text-gradient">Launch?</span>
          </h2>

          <p className="text-gray-300 max-w-md md:text-[16px] text-sm leading-[120%] font-[roboto] px-2 md:px-0">
            Join the future of fundraising. Turn your ideas into execution with
            the Kreatovate Launchpad.
          </p>

          <button className="flex items-center gap-1  justify-center rounded-[12px] cursor-pointer gradient-btns w-52 h-13">
            <span className="leading-[120%] text-[18px]">Get Started Now </span>
            <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadyToLaunch;
