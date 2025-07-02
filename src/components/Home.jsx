import React, { useState, useRef, useEffect } from "react";
import "../css/Home.css"; // Make sure to add the styles below or inline
import { IoMdClose } from "react-icons/io";

function Home() {
  const [showPopup, setShowPopup] = useState(true);
  const popupRef = useRef(null);

  // Close the popup when clicking outside
  useEffect(() => {
    function handleOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, []);

  return (
    <div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content" ref={popupRef}>
            <button
              className="close-button"
              onClick={() => setShowPopup(false)}
            >
              <IoMdClose />
            </button>
            <p>
              🎉 Hello my <em>favourite</em> birthday girl.
              <br />
              I thought it's time I made u another website like I did before:)
              It has 3 sections.
              <br />
              <ul className="popup-sections">
                <li>
                  <strong>Notes</strong> - A collection of love notes.
                </li>
                <li>
                  <strong>Pictures</strong> - A carousel of pictures and my
                  random thoughts on them.
                </li>
                <li>
                  <strong>Scenarios</strong> - Real-life scenarios I want us to
                  experience plus my thoughts.
                </li>
              </ul>
              I hope you like it. I <em>love</em> you so much and I hope you
              have the best day ever. And I know you were the one to bring up
              writing notes, just know that I'm doing it not just because of
              that. I really like seeing my baby smile. <br /> <br />
              Sorry for not being the one who suggested it first, but I really
              really appreciate you bringing it up.
            </p>
          </div>
        </div>
      )}

      <div className="home-container">
        <h1>
          Happy birthday, <em>my love</em>
        </h1>
        <ul className="home-links">
          <a href="/Birthday-18/notes">
            <li>View Notes</li>
          </a>
          <a href="/Birthday-18/pics">
            <li>View Pictures</li>
          </a>
          <a href="/Birthday-18/scenarios">
            <li>View Scenarios</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Home;
