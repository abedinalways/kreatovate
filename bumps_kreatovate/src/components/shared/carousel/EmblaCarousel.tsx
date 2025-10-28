import React, { useEffect } from 'react';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from '../buttons/EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import './EmblaCarousel.css';
import Image from 'next/image';

type EmblaCarouselProps = {
  slides: string[];
  options?: string[];
};

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 20, // controls scroll smoothness
    align: 'center',
    ...options,
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (!emblaApi) return;

    const updateSlideClasses = () => {
      const slides = emblaApi.slideNodes();
      slides.forEach((slide, index) => {
        slide.classList.toggle(
          'is-selected',
          index === emblaApi.selectedScrollSnap()
        );
      });
    };

    emblaApi.on('select', updateSlideClasses);
    updateSlideClasses();
  }, [emblaApi]);

  return (
    <section className="embla">
      {/* Viewport */}
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((_, index) => (
            <div className="embla__slide" key={index}>
              <Image
                className="embla__slide__img"
                src={`https://picsum.photos/800/400?random=${index}`}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
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
