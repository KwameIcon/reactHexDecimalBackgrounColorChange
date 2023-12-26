import React, { useState, useEffect } from "react";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  useEffect(() => {
    function generateRandomHexadecimalColorCode() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    function changeBackgroundColor() {
      const randomColor = generateRandomHexadecimalColorCode();
      document.body.style.backgroundColor = randomColor;
      setBackgroundColor(randomColor);
    }


    // Attach event listener to button
    const button = document.querySelector(".changeBackground");
    button.addEventListener("click", changeBackgroundColor);

    // Cleanup function
    return () => {
      button.removeEventListener("click", changeBackgroundColor);
    };
  }, []);

  return (
    <main className="container">
      <h1 className="header">Click to change the background Color</h1>
      <div className="hexOutputField">{backgroundColor}</div>
      <section className="action">
        <div className="btn changeBackground">Change background</div>
      </section>
    </main>
  );
}

export default App;
