import Image from "next/image";

const Strategy = () => {
  return (
    <div className="custom-container pt-24 h-[75vh] relative w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <Image
          src="/images/strategy-ellipse1.png"
          alt="ellipse 1"
          width={604}
          height={584}
          className="absolute -top-20 left-[55%] -translate-x-1/2"
        />
        <Image
          src="/images/robot-hand.png"
          alt="robot hand"
          width={286}
          height={554}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-30 blur-xs"
        />
        <Image
          src="/images/strategy-ellipse1.png"
          alt="ellipse 2"
          width={604}
          height={584}
          className="absolute -bottom-48 left-1/2 -translate-x-1/2"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-20 py-24 flex flex-col justify-between">
        <div className="flex flex-col items-start gap-2 self-start">
          <p className="uppercase text-color-gradient font-roboto font-normal text-sm">
            [ The Kreatovate commitment to excellence ]
          </p>
          <h1 className="font-jakarta text-2xl lg:text-5xl font-bold">
            AI-Powered Strategy <br /> That Scales Growth
          </h1>
        </div>

        <div className="flex flex-col items-start gap-8 self-end">
          <p className="text-jakarta font-light text-base lg:text-lg">
            Turn ideas into measurable results with data-led marketing - AI-{" "}
            <br />
            powered to test and scale what works.
          </p>

          <div className="flex flex-col items-start gap-6">
            <h4 className="text-2xl font-medium font-jakarta">
              Why choose [ KREATOVATE ]
            </h4>

            <div>
              <ul className="flex flex-col items-start gap-3">
                <li>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/hrline1.png"
                      alt="dot line"
                      width={58.01}
                      height={7}
                    />
                    <p>AI insights that drive action.</p>
                  </div>
                </li>

                <li>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/hrline1.png"
                      alt="dot line"
                      width={58.01}
                      height={7}
                    />
                    <p>Test fast, scale what works.</p>
                  </div>
                </li>

                <li>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/hrline1.png"
                      alt="dot line"
                      width={58.01}
                      height={7}
                    />
                    <p>Hands-on strategy and execution.</p>
                  </div>
                </li>

                <li>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/hrline1.png"
                      alt="dot line"
                      width={58.01}
                      height={7}
                    />
                    <p>Personalized campaigns at scale.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
