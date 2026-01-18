import ButtonAll from "../shared/ButtonAll";

const Explore = () => {
  return (
    <div className="bg-[#0F1016] py-10 px-4">
      <div
        className="custom-container bg-[url('/images/explore.png')] 
        bg-cover bg-center bg-no-repeat 
        relative z-10 sm:px-6 md:px-5 py-20 rounded-[20px] h-[350px]"
      >
        <div
          className="
            flex flex-col justify-center items-center gap-4 text-center
            rounded-[20px]"
        >
          {/* <h2 className="text-2xl md:text-5xl font-semibold max-w-2xl">
            Continue Your Journey with <br />
            <span className="text-gradient">Kreatovate</span>
          </h2> */}
          <h2 className="text-2xl md:text-5xl font-semibold max-w-3xl">
            If the workforce site references voice/SMS or calling
          </h2>

          {/* <p className="text-gray-300 text-sm md:text-md lg:text-[1rem] leading-7 font-normal">
            Experience how we’re transforming the workforce with AI-powered
            innovation. Dive deeper into our ecosystem.
          </p> */}
          <p className="text-gray-300 text-sm md:text-md lg:text-[1rem] leading-7 font-normal max-w-2xl">
            Acquire and manage local and toll-free numbers directly inside the
            platform for voice and SMS - no external provisioning workflows
            required.
          </p>

          <ButtonAll
            btnText="Explore kreatovate.com"
            href={process.env.NEXT_PUBLIC_EXPLORE_BTN_LINK}
            target="_blank"
            className="md:py-6 "
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
