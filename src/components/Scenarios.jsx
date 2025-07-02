import React, { useState } from "react";
import "../css/Scenarios.css";

const scenarioData = [
  { id: 1, image: "scenarios/1.png", description: "" },
  { id: 2, image: "scenarios/2.png", description: "" },
  { id: 3, image: "scenarios/3.png", description: "" },
  { id: 4, image: "scenarios/4.png", description: "" },
  {
    id: 5,
    image: "scenarios/5.png",
    description:
      "I so wanna go stargazing with you omg, I don't think I've ever seen a shooting star lmao.",
  },
  {
    id: 6,
    image: "scenarios/6.png",
    description: "Kissing in the rain just for the plot?",
  },
  {
    id: 7,
    image: "scenarios/7.png",
    description: "Omg we need a cat i swear, gonna be mothers hehe.",
  },
  {
    id: 8,
    image: "scenarios/8.png",
    description:
      "Doing each other's makeup sounds so fun. Ngl i know nothing about it, but that's why it's gonna be absolutely hilarious.",
  },
  {
    id: 9,
    image: "scenarios/9.png",
    description: "Just imagine dancing in the kitchen while sth cooks aaa.",
  },
  {
    id: 10,
    image: "scenarios/10.png",
    description:
      "I so wanna travel together, I can organise everything dw lmao, you'll just be my travel princess.",
  },
  { id: 11, image: "scenarios/11.png", description: "Well..." },
];

function Scenarios() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="board-container">
      {scenarioData.map((card) => (
        <div
          key={card.id}
          className={`flip-card ${flippedCards[card.id] ? "flipped" : ""}`}
          onClick={() => toggleFlip(card.id)}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={card.image} alt={`Scenario ${card.id}`} />
            </div>
            <div className="flip-card-back">
              <p>{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Scenarios;
