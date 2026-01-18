import ButtonAll from "@/components/shared/buttons/ButtonAll";

const ReadyToLaunch = () => {
  return (
    <div className="bg-[#0F1016] py-10 px-4">
      <div className="custom-container bg-[url('/images/explore.png')] bg-cover bg-center bg-no-repeat relative z-10 sm:px-6 md:px-5 py-20 rounded-[20px] h-[350px]">
        <div className="flex flex-col justify-center items-center gap-4 text-center rounded-[20px]">
          <h2 className="text-2xl sm:text-5xl md:text-5xl font-semibold max-w-2xl">
            Ready to <span className="text-gradient">Launch?</span>
          </h2>

          <p className="text-gray-300 max-w-md text-sm md:text-base">
            Join the future of fundraising. Turn your ideas into execution with
            the Kreatovate Launchpad.
          </p>

          <ButtonAll btnText="get started now" />
        </div>
      </div>
    </div>
  );
};

export default ReadyToLaunch;
