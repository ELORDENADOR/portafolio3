import React from "react";
import { useState } from "react";
import AdministradorDeTareas from "./proyectos/AdministradorDeTareas";
import Calculadora from "./proyectos/Calculadora";
import { CursoDeIngles } from "./proyectos/CursoDeIngles";
import JuegoPPT from "./proyectos/JuejoPPT";
import { VistaInicialDeProyectos } from "./proyectos/VistaInicialDeProyectos";
import styled from "styled-components";

export const Proyectos = (props) => {
  const [proyecto, setProyecto] = useState("");

  const idiomaProyecto = props.idioma;

  const proyectoSeleccionado = (e) => {
    setProyecto(e);
  };

  return (
    <ContenedorProyectos>
      <div id="ContenedorNombresProyectos">
        {props.idioma === "ingles" ? (
          <div>
            <p id="contenedorTituloProyectos">Projects</p>
          </div>
        ) : props.idioma === "frances" ? (
          <div>
            <p id="contenedorTituloProyectos">Projets</p>
          </div>
        ) : (
          <div>
            <p id="contenedorTituloProyectos">Proyectos</p>
          </div>
        )}

        <div id="contenedorOpcionesDeproyectos">
          <div onClick={() => proyectoSeleccionado("calculadora")}>
            <div id="contenedorTituloCalculadora">
              {props.idioma === "ingles" ? (
                <div>
                  <p className="configuracionTituloproyectos">Calculator</p>
                </div>
              ) : props.idioma === "frances" ? (
                <div>
                  <p className="configuracionTituloproyectos">Calculatrice</p>
                </div>
              ) : (
                <div>
                  <p className="configuracionTituloproyectos"> Calculadora</p>
                </div>
              )}
            </div>
          </div>

          <div onClick={() => proyectoSeleccionado("tareas")}>
            <div id="contenedorTituloTareas">
              {props.idioma === "ingles" ? (
                <div>
                  <p className="configuracionTituloproyectos">Task Manager</p>
                </div>
              ) : props.idioma === "frances" ? (
                <div>
                  <p className="configuracionTituloproyectos">
                    Le Gestionnaire des tâches
                  </p>
                </div>
              ) : (
                <div>
                  <p className="configuracionTituloproyectos">
                    {" "}
                    Administrador de Tareas
                  </p>
                </div>
              )}
            </div>
          </div>

          <div onClick={() => proyectoSeleccionado("juegoPPT")}>
            <div id="idcontenedorTituloJuegoPpt">
              {props.idioma === "ingles" ? (
                <div>
                  <p className="configuracionTituloproyectos">
                    Rock Paper Scissors Game
                  </p>
                </div>
              ) : props.idioma === "frances" ? (
                <div>
                  <p className="configuracionTituloproyectos">
                    Jeu Pierre Papier Ciseaux
                  </p>
                </div>
              ) : (
                <div>
                  <p className="configuracionTituloproyectos">
                    Juego Piedra Papel y Tijera
                  </p>
                </div>
              )}
            </div>
          </div>

          <div onClick={() => proyectoSeleccionado("CursoDeIngles")}>
            <div id="idcontenedorTituloCursoDeIngles">
              {props.idioma === "ingles" ? (
                <div>
                  <p className="configuracionTituloproyectos">English course</p>
                </div>
              ) : props.idioma === "frances" ? (
                <div>
                  <p className="configuracionTituloproyectos">
                    Cours d'anglais
                  </p>
                </div>
              ) : (
                <div>
                  <p className="configuracionTituloproyectos">
                    Curso de Ingles
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {proyecto === "calculadora" ? (
          <Calculadora idiomaProyecto={idiomaProyecto} />
        ) : proyecto === "tareas" ? (
          <AdministradorDeTareas idiomaProyecto={idiomaProyecto} />
        ) : proyecto === "juegoPPT" ? (
          <JuegoPPT idiomaProyecto={idiomaProyecto} />
        ) : proyecto === "CursoDeIngles" ? (
          <CursoDeIngles idiomaProyecto={idiomaProyecto} />
        ) : (
          <VistaInicialDeProyectos idiomaProyecto={idiomaProyecto} />
        )}
      </div>
    </ContenedorProyectos>
  );
};
const ContenedorProyectos = styled.div`
  text-align: center;

  #contenedorOpcionesDeproyectos {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
  }

  #contenedorTituloCalculadora {
    background: green;
    margin: 5px;
    padding-left: 15px;
    padding-right: 15px;
    cursor: pointer;
    border-radius: 10px;
  }

  #contenedorTituloTareas {
    background: red;
    margin: 5px;
    padding-left: 15px;
    padding-right: 15px;
    cursor: pointer;
    border-radius: 10px;
  }

  #idcontenedorTituloJuegoPpt {
    background: yellow;
    margin: 5px;
    padding-left: 15px;
    padding-right: 15px;
    cursor: pointer;
    border-radius: 10px;
  }

  #idcontenedorTituloCursoDeIngles {
    background: blue;
    margin: 5px;
    padding-left: 15px;
    padding-right: 15px;
    cursor: pointer;
    border-radius: 10px;
  }

  #contenedorTituloProyectos {
    font-family: "Rubik Glitch", cursive;
    font-size: 40px;
  }

  .configuracionTituloproyectos {
    font-family: "Pathway Gothic One", sans-serif;
    font-size: 25px;
    padding: 5px;
    border: 5px solid;
    border-color: #009900;
    background: orange;
    z-index: 3;
  }

  .configuracionTituloproyectos:hover {
    opacity: 0.8;
  }
`;
