"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ words }: { words: string[] }) {
  const [text, setText] = useState("");
  const key = words.join("|");

  useEffect(() => {
    const list = key.split("|");
    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const loop = () => {
      const current = list[wordIdx];
      charIdx += isDeleting ? -1 : 1;
      setText(current.substring(0, charIdx));

      let speed = isDeleting ? 45 : 90;
      if (!isDeleting && charIdx === current.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % list.length;
        speed = 500;
      }
      timer = setTimeout(loop, speed);
    };

    loop();
    return () => clearTimeout(timer);
  }, [key]);

  return (
    <span
      className="font-headline-lg text-[26px] sm:text-[32px] md:text-[36px] font-bold text-[#111827] inline-block min-w-[2px]"
      id="typewriter-text"
    >
      {text}
    </span>
  );
}
