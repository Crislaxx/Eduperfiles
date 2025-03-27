// src/App.js
import React from "react";
import TextPressure from "./components/TextPressure";
import Aurora from "./components/Aurora";

function App() {
  return (
    <div className="App" style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Fondo Aurora */}
      <Aurora
        colorStops={["#99FFFF", "#66FFCC", "#00CCFF"]}
        blend={0.3}
        amplitude={1.2}
        speed={0.5}
      />
      
      {/* Texto con animación */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", paddingTop: "100px" }}>
        <TextPressure
          text="EDUWORK"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#00ffff"
          strokeColor="#ff0000"
          minFontSize={240}
        />
      </div>
    </div>
  );
}

export default App;
