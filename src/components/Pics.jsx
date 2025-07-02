import React, { useState } from "react";
import "../css/Pics.css";

const cardData = [
  {
    id: 1,
    frontImage: "pics/1.jpeg",
    backText:
      "U look so adorable while playing with ur cats. SEND ME MORE PLS aaa.",
  },
  {
    id: 2,
    frontImage: "pics/2.jpeg",
    backText:
      "Love it when you're playing around hehe, any pic of u smiling makes me smile too.",
  },
  {
    id: 3,
    frontImage: "pics/3.jpeg",
    backText:
      "I really wish I could give you tons and tons of flowers. They just suit you.",
  },
  {
    id: 4,
    frontImage: "pics/4.jpeg",
    backText: "Still gay panic every time I look at it, literally goddess.",
  },
  {
    id: 5,
    frontImage: "pics/5.jpeg",
    backText:
      "Playing around agaaain, love it so much. Makes me wanna потискать u, you're so cute.",
  },
  {
    id: 6,
    frontImage: "pics/6.jpeg",
    backText:
      "Idk why this pic is so stuck in my head. The outfit is fire ngl and the pose???",
  },
  {
    id: 7,
    frontImage: "pics/7.jpeg",
    backText:
      "The hottest. Ngl the first two seconds of me looking at it my first thought was that u asked someone to do this so i got jealous before common sense kicked in.",
  },
  {
    id: 8,
    frontImage: "pics/8.jpeg",
    backText:
      "My super strong muscle mommy. The muscles sure do grow, but yk lemme come there and touch them myself to make sure.",
  },
  {
    id: 9,
    frontImage: "pics/9.jpeg",
    backText:
      "Still think it was super cute lmao. Once again, love it when you're playing around.",
  },
  {
    id: 10,
    frontImage: "pics/10.jpeg",
    backText:
      "This has to be one of my fav pics of you. U literally look like a goddess omg take me I'll worship u.",
  },
  {
    id: 11,
    frontImage: "pics/11.jpeg",
    backText: "The look? Watch me fall on my knees for you.",
  },
];

function Pics() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    setFlipped(false);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
    setFlipped(false);
  };

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const currentCard = cardData[currentIndex];

  return (
    <div className="carousel-container">
      <div
        className={`flip-card ${flipped ? "flipped" : ""}`}
        onClick={handleFlip}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={currentCard.frontImage} alt="Front" />
          </div>
          <div className="flip-card-back">
            <p>{currentCard.backText}</p>
          </div>
        </div>
      </div>

      <div className="carousel-buttons">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Pics;
