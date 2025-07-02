import React, { useState, useEffect } from "react";
import "../css/Notes.css";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

function Notes() {
  const loveNotes = [
    "Just your smile can brighten my whole day, so keep sending me those кружочки hehe.",
    "I know society is a bitch, but you never have to change your looks for me to like you. I think you're gorgeous any time of the day.",
    "Yk I still imagine hugging you if I can't fall asleep.",
    "I love it when you just randomly drop a fact about sth, it's cute.",
    "Your voice is aaaaaaa, I'll cherish your songs forever.",
    "I truly appreciate you communicating what's on your mind. Never be afraid to speak up no matter what my reaction might be.",
    "You taught me so much about love and communication. I love growing together.",
    "I still yap about how much I love you in my notes...",
    "You have no idea what you smiling at me does to me. The most adorable thing ever.",
    "I promise you to do everything I can to 'bring the spark back', because I want it to be you.",
    "You must be my Pepper Potts, because I feel like a genius, billionaire, playgirl philanthropist when I'm with you.",
    "I'm falling for you more and more every day, and I love it.",
    "I still think you're the bravest for fighting those mosquitoes I swear. My wife is a warrior.",
    "Really appreciate you not freaking out when I mess up the games MULTIPLE times lmao.",
    "I love learning new things about you, whether it's your old crazy ships or random facts. I love them all.",
    "You are the highlight of my day, every day.",
    "I can't wait for ld to be over to finally be able to cuddle every night.",
    "Gay panicking every day ngl, some things never change.",
  ];

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);

  const handleChange = (direction) => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => {
        const lastIndex = loveNotes.length - 1;
        if (direction === "next") {
          return (prev + 1) % loveNotes.length;
        } else {
          return (prev - 1 + loveNotes.length) % loveNotes.length;
        }
      });
      setFade(false);
    }, 300);
  };

  return (
    <div className="notes-container">
      <h1>❤️ Love Notes ❤️ </h1>

      <div className={`carousel-note ${fade ? "fade-out" : "fade-in"}`}>
        <p>{loveNotes[current]}</p>
      </div>

      <div className="carousel-controls">
        <button onClick={() => handleChange("prev")}>
          <GrFormPrevious />
        </button>
        <button onClick={() => handleChange("next")}>
          <GrFormNext />
        </button>
      </div>
    </div>
  );
}

export default Notes;
