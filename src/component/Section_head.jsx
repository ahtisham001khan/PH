import React from 'react';
import TestmonialBanner from "../assets/video/Background.mp4";
import Breadcrumb from './Routes';

export const Section_head = ({Section_head="About US"}) => {
  return (
    <div>

      {/* Hero Section */}
      <section className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center text-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={TestmonialBanner}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 px-4">
          {/* Heading */}
          <h2 className="text-white text-[36px] sm:text-[46px] md:text-[56px] lg:text-[64px] font-bold leading-snug drop-shadow-lg">
        {Section_head}
          </h2>
      {/* Breadcrumb */}
      <Breadcrumb />
        </div>
      </section>
    </div>
  );
}
