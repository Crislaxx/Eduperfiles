// src/App.js
import React from "react";
import TextPressure from "./components/TextPressure";
import Aurora from "./components/Aurora";
import Profiles from "./components/profiles";
import PixelTransition from './components/PixelTransition';  // Importar PixelTransition
import "./components/profiles.css";

function App() {
  return (
    <div
      className="App"
      style={{
        position: "relative",
        minHeight: "120vh", // Cambiar height por minHeight
        overflowX: "hidden", // Evita scroll horizontal
        overflowY: "auto", // Permite scroll vertical
      }}
    >
      {/* Fondo Aurora */}
      <Aurora
        colorStops={["#99FFFF", "#66FFCC", "#00CCFF"]}
        blend={0.3}
        amplitude={1.2}
        speed={0.5}
      />

      {/* Texto Principal */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          paddingTop: "100px",
        }}
      >
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
          minFontSize={220}
        />
      </div>

      {/* Sección de Perfiles */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          marginTop: "50px",
          padding: "20px",
        }}
      >
        <Profiles />
      </div>

      {/* Componente PixelTransition */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          marginTop: "50px",
        }}
      >
      </div>
    </div>
  );
}

export default App;
