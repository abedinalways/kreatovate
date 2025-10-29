"use client";

import React, { useEffect } from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../buttons/EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import "./EmblaCarousel.css";
import Image from "next/image";

type EmblaCarouselProps = {
  slides: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 20,
    align: "center",
    ...(options ?? {}),
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (!emblaApi) return;

    const updateSlideClasses = (api: EmblaCarouselType) => {
      const slideNodes = api.slideNodes();
      slideNodes.forEach((slide, index) => {
        slide.classList.toggle(
          "is-selected",
          index === api.selectedScrollSnap()
        );
      });
    };

    emblaApi.on("select", updateSlideClasses);
    emblaApi.on("reInit", updateSlideClasses);
    updateSlideClasses(emblaApi);
  }, [emblaApi]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((_, index) => (
            <div className="embla__slide" key={index}>
              <Image
                className="embla__slide__img"
                src={`https://picsum.photos/800/400?random=${index}`}
                alt={`Slide ${index + 1}`}
                width={800}
                height={400}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
