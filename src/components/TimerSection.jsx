import { useEffect, useState } from "react";
import { content } from "../data/content";
import "../animation.css";

export default function TimerSection({ lang }) {
  const data = content[lang] || content.english;
  const timer = data.timer;

  const [timeLeft, setTimeLeft] = useState("loading");

  useEffect(() => {
    const eventDate = new Date(timer.eventDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = eventDate - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft(
          `${days} ${timer.labels.days} : 
           ${hours} ${timer.labels.hours} : 
           ${minutes} ${timer.labels.minutes} : 
           ${seconds} ${timer.labels.seconds}`
        );
      } else {
        setTimeLeft(timer.labels.started);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer.eventDate, timer.labels]);

  return (
    <div className="w-full flex flex-col items-center mt-0 px-2 py-6 ">

      <div className="text-center timer-box-animated">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#8b4513]">
          {timer.heading}
        </h2>

        {/* Animated Timer Text */}
        <p className="
            mt-6
            text-lg sm:text-xl md:text-2xl
            font-semibold
            text-gray-800
            tracking-wide
          ">
          {timeLeft}
        </p>

      </div>

      
      

    </div>
  );
}
