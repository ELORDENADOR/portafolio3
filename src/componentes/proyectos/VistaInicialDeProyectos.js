import React from "react";
import styled from "styled-components";

export const VistaInicialDeProyectos = (props) => {
  return (
    <ContenedorVistaInicialDeProyectos>
      <div id="informacion">
        {props.idiomaProyecto === "ingles" ? (
          <div className="textoInicialVistaInicialDeProyectos">
            <p>Please select a Project</p>
          </div>
        ) : props.idiomaProyecto === "frances" ? (
          <div className="textoInicialVistaInicialDeProyectos">
            <p>Veuillez sélectionner un Projet</p>
          </div>
        ) : (
          <div className="textoInicialVistaInicialDeProyectos">
            <p> Por favor selecciona un Proyecto</p>
          </div>
        )}
      </div>
    </ContenedorVistaInicialDeProyectos>
  );
};
const ContenedorVistaInicialDeProyectos = styled.div`
  text-align: center;

  #informacion {
    height: 100vh;
    background: #2f4f4f;
  }

  .textoInicialVistaInicialDeProyectos {
    padding-top: 100px;
    font-family: "Pathway Gothic One", sans-serif;
    font-size: 50px;
    text-shadow: 7px 4px 20px black;
    color: white;
  }
`;
