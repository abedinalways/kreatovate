import ButtonTwo from "@/components/shared/buttons/ButtonTwo";

const BookAppointment = () => {
  return (
    <div className="bg-[#0F1016] pb-24">
      <div className="mx-4">
        <div
          className="custom-container bg-[url('/images/explore.png')] 
            bg-cover bg-center bg-no-repeat 
            relative z-10 px-4 md:px-8 py-20 rounded-[20px] h-[350px]"
        >
          <div
            className="
                flex flex-col justify-center items-center gap-4 text-center
                rounded-[20px]"
          >
            <h2 className="text-2xl sm:text-5xl md:text-5xl font-semibold max-w-2xl">
              Book Appointment NOW!
            </h2>

            <p className="text-gray-300 max-w-xl text-sm md:text-base">
              Experience how we’re transforming the workforce with AI-powered
              innovation. Dive deeper into our ecosystem.
            </p>

            <ButtonTwo btnText="Book Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
