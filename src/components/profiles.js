import React from "react";
import PixelTransition from "./PixelTransition";
import "./profiles.css";

const profilesData = [
  {
    name: "Omar Ramiro Cadena Chacha",
    role: "Lic en Ingeniería de Sistemas computacionales",
    description: "Especialista en desarrollo web y seguridad informática.",
    img: "https://unisur.edu.mx/igsiapi/utilsapi/imageview/0/201181",
  },
  {
    name: "Bruno Alejandro Camino Sardaneta",
    role: "Lic en Ingeniería de Sistemas computacionales",
    description: "Experto en desarrollo de aplicaciones móviles.",
    img: "https://unisur.edu.mx/igsiapi/utilsapi/imageview/0/200977",
  },
  {
    name: "Cristian Alexander Batun Mex",
    role: "Lic en Ingeniería de Sistemas computacionales",
    description: "Desarrolladora de modelos de Machine Learning.",
    img: "https://unisur.edu.mx/igsiapi/utilsapi/imageview/0/200976",
  },
  {
    name: "Josue David Herrera Diaz",
    role: "Lic en Ingeniería de Sistemas computacionales",
    description: "Administración y configuración de redes.",
    img: "https://unisur.edu.mx/igsiapi/utilsapi/imageview/0/199699",
  },
];

const Profiles = () => {
return (
    <div className="profiles-container">
    {profilesData.map((profile, index) => (
        <div key={index} className="profile-card">
        <PixelTransition
            firstContent={
            <img
                src={profile.img}
                alt={profile.name}
                className="profile-img"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            }
            secondContent={
            <div
                style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111",
                }}
            >
                <div style={{ textAlign: "center", color: "#fff" }}>
                <h3>{profile.name}</h3>
                <p className="role">{profile.role}</p>
                <p className="description">{profile.description}</p>
                </div>
            </div>
            }
            gridSize={15}  // Ajusta el tamaño de la cuadrícula de píxeles
            pixelColor="#ffffff"  // Color del píxel
            animationStepDuration={0.4}  // Duración de la animación (ajusta la velocidad)
            className="custom-pixel-card"
        />
        </div>
    ))}
    </div>
);
};

export default Profiles;
