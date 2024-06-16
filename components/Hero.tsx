import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import EmojiSeclector from "./ui/EmojiSeclector";
import BackgroundAnimation from "./ui/BackgroundAnimation";
import BorderMagic from "./ui/BorderMagic";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 bg-black-100 w-full overflow-hidden flex items-center justify-start">
      <Spotlight
        className="-top-40 -left-10 md:-left-40 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-32 left-80 h-[80vh] w-[50vw]" fill="blue" />
      <div
        className="h-screen w-full dark:bg-black-100 bg-white 
      dark:bg-grid-white/[0.03] bg-grid-black/[0.2] relative flex items-center justify-start flex-col"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="flex justify-start relative z-10 my-20">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex items-center justify-center flex-col">
            <h2 className="uppercase tracking-widest text-center text-blue-100 text-xs max-w-80">
              Dynamic web magic with nextjs
            </h2>
            <TextGenerateEffect
              className="text-[40px] md:text-5xl lg:text-6xl text-center"
              words="Transforming concepts into Seamless User Experience"
            />
            <EmojiSeclector />
          </div>
        </div>
        <BorderMagic
          title=" Explore my work"
          icon={<FaLocationArrow />}
          position="right"
        />
      </div>
    </div>
  );
};

export default Hero;
