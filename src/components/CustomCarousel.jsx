import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import PortfolioButton from "./PortfolioButon";

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
    <div className="max-w-xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((img, index) => (
            <div className="min-w-full relative" key={index}>
              <div className="absolute text-white font-spartan  px-[2rem]">
                {headings[index] && (
                  <h1 className="text-[3rem] font-bold leading-[3rem] tracking-[-0.075rem] w-full max-w-[19.4375rem] not-italic mt-[7.25rem] mb-[0.69rem]">
                    {headings[index]}
                  </h1>
                )}
                {description[index] && (
                  <p className="w-full max-w-[19.4375rem]">
                    {description[index]}
                  </p>
                )}
                <PortfolioButton />
              </div>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-[35rem] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Buttons 1–4 */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`hidden md:block w-full max-w-8 md:h-8 md:rounded-full md:text-sm md:font-medium border 
              ${
                selectedIndex === index
                  ? "bg-black text-white"
                  : "bg-white text-black border-black"
              }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
