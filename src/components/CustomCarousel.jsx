import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import CustomButton from "./CustomButton";
import ARROW_ICON from "../assets/icons/icon-arrow.svg";

const images = [
  "./images/paramour.svg",
  "./images/seraph.svg",
  "./images/federal.svg",
  "./images/trinity.svg",
];
const headings = [
  "Project Paramour",
  "Seraph Station",
  "Federal II Tower",
  "Trinity Bank Tower",
];
const description = [
  "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
  "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
  "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
  "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
];

export function CustomCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Scroll to a specific slide
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  // Listen for slide change
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Bind event on embla init
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full max-w-xl mx-auto relative lg:max-w-none lg:w-[69.375rem] lg:ml-[4rem]">
      <div className="overflow-hidden " ref={emblaRef}>
        <div className="flex ">
          {images.map((img, index) => (
            <div className="min-w-full relative " key={index}>
              <div className="absolute text-white font-spartan px-[2rem] lg:ml-[11.87rem]">
                {headings[index] && (
                  <h1 className="text-[3rem] font-bold leading-[3rem] tracking-[-0.075rem] w-full max-w-[19.4375rem] not-italic mt-[7.25rem] mb-[0.69rem] md:max-w-[28.5625rem] md:w-full md:text-[6rem] md:leading-[5rem] md:mt-[11.62rem] lg:max-w-[34rem] lg:w-full lg:font-bold ">
                    {headings[index]}
                  </h1>
                )}
                {description[index] && (
                  <p className="w-full max-w-[19.4375rem] md:text-[1.125rem] md:max-w-[28.5625rem] md:w-full md:font-medium lg:max-w-[27.8125rem] lg:w-full">
                    {description[index]}
                  </p>
                )}
                <CustomButton
                  to="/portfolio"
                  className="flex items-center justify-center mt-[5.19rem] py-[1.56rem] gap-[1.5rem] font-spartan max-w-[15.75rem] w-full bg-very-dark-blue text-white text-right text-[1.125rem] font-bold non-italic leading-[1.525rem]"
                >
                  See Our Portfolio{" "}
                  <span>
                    <img src={ARROW_ICON} alt="Arrow icon" />
                  </span>
                </CustomButton>
              </div>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-[35rem] object-cover md:mt-[0.8rem] md:h-[45rem]  lg:max-w-[69.375rem] lg:w-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Buttons 1–4 */}
      <div className="absolute bottom-0 flex justify-center lg:ml-[-4.2rem] ">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`lg:max-w-[5rem] lg:w-full lg:h-[5rem] lg:px-[1.94rem] lg:text-[1.125rem] lg:text-center lg:font-bold font-spartan hidden lg:block w-full max-w-8 md:h-8 md:text-sm md:font-medium border border-white
              ${
                selectedIndex === index
                  ? "bg-very-dark-blue text-white"
                  : "bg-white text-medium-gey "
              }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
