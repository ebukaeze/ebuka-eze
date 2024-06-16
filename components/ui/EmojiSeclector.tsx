"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { emojis } from "@/data/emoji";

const EmojiSeclector = () => {
  const [displayEmoji, setDisplayEmoji] = useState<string>(emojis[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="w-full md:text-xl text-sm lg:text-2xl font-medium text-center  text-white-100">
      Hi {displayEmoji}{" "}
      <span
        className="w-full text-center text-sm md:tracking-wider mb-4 md:text-lg
            lg:text-2xl"
      >
        I&apos;m Ebuka, a NextJS developer
      </span>
    </p>
  );
};

export default EmojiSeclector;
