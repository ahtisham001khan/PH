import { useEffect, useState } from "react";
import Button from "./Button";

const slides = [
  {
    image: "src/assets/images/IPH-Web-Banner-1.webp",
    tagline: "Become an",
    title: (
      <>
        <span className="text-blue-500">Amazon</span> Expert
      </>
    ),
    subtitle:
      "IPH detailed course covers everything from listing optimization to advanced selling methods. Learn from industry experts to grow your Amazon business. Enroll now and begin your journey with Pixxelhouse!",
  },
  {
    image: "src/assets/images/IPH-Web-Banner-2.webp",
    tagline: "Develop Creativity with",
    title: (
      <>
        <span className="text-blue-500">3D </span> Animation
      </>
    ),
    subtitle:
      "IPH practical course covers every area of 3D modeling, rigging, and animation. Develop your creative ideas and gain knowledge from qualified professionals. Enroll today and start your animation journey with Pixxelhouse!",
  },
  {
    image: "src/assets/images/IPH-Web-Banner-3.webp",
    tagline: "Build Your Future in",
    title: (
      <>
        <span className="text-blue-500">Website</span> Development
      </>
    ),
    subtitle:
      "IPH detailed course covers everything from basic HTML,CSS to advanced web development techniques. Learn from industry experts and build professional websites. Enroll now and start your web development career!",
  },
  {
    image: "src/assets/images/IPH-Web-Banner-4.webp",
    tagline: "Learn Advanced",
    title: (
      <>
        <span className="text-blue-500">SEO </span> Practices
      </>
    ),
    subtitle:
      "Learn advanced SEO techniques with IPH course that covers keyword research, on-page optimization, and link building strategies. Become proficient in SEO analytics. Enroll today and start your marketing career with Pixxelhouse!",
  },
  {
    image: "src/assets/images/IPH-Web-Banner-5.webp",
    tagline: "Learn Effective",
    title: (
      <>
        <span className="text-blue-500">Digital </span> Marketing Strategies
      </>
    ),
    subtitle:
      "Become a marketing expert with an IPH-detailed course that covers SEO, SEM, social media marketing, and analytics. Learn from industry leaders and gain practical skills .Enroll today and start your career in digital marketing!",
  },
  {
    image: "src/assets/images/IPH-Web-Banner-6.webp",
    tagline: "Explore Creativity with",
    title: (
      <>
        <span className="text-blue-500">Graphic </span> Designing
      </>
    ),
    subtitle:
      "Learn with the IPH course that covers all aspects of graphic design, like typography, layout design, Adobe Creative Suite and much more. Enroll now and start your graphic design career!",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000;
    const interval = 50;
    let elapsed = 0;

    const progressTimer = setInterval(() => {
      elapsed += interval;
      setProgress((elapsed / duration) * 100);
      if (elapsed >= duration) {
        setCurrent((prev) => (prev + 1) % slides.length);
        elapsed = 0;
      }
    }, interval);

    return () => clearInterval(progressTimer);
  }, [current]);

  return (
    <section className="relative w-full h-[350px] sm:h-[400px] md:h-[400px] lg:h-[480px] xl:h-[450px] 2xl:h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 w-full transition-opacity duration-1000 ease-in-out ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div  className="h-full flex flex-col justify-center text-black px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28">
            <div
              className={`lg:w-[45%] transition-all duration-700  ${i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                } text-center md:text-left mx-auto md:mx-0`}
            >
              <p className="text-sm sm:text-base md:text-lg font-semibold tracking-wider mb-2 uppercase text-black">
                {slide.tagline}
              </p>
              <h1 className="text-[22px] sm:text-[27px] md:text-[35px] lg:text-[45px] xl:text-[50px] uppercase font-extrabold leading-tight mb-3 sm:mb-4">
                {slide.title}
              </h1>
              <p className="text-[13px] sm:text-[15px] md:text-[16px] lg:text-[17px] opacity-90 mb-5 sm:mb-6">
                {slide.subtitle}
              </p>

              <Button text="Details" />
            </div>
          </div>
        </div>
      ))}

      {/* Single Centered Progress Bar */}
      <div className="absolute bottom-5 z-20 left-1/2 -translate-x-1/2 w-[70%] sm:w-[50%] md:w-[40%] lg:w-[10%] h-[4px] bg-white rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

    </section>
  );
}
