import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faReact,
  faPhp,
  faJs,
  faBootstrap,
  faSass,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export const Habilidades = (props) => {
  const [habilidad, setHabilidad] = useState("si");

  const mostrarNombre = () => {
    alert("si");
  };

  return (
    <ContenedorHabilidades>
      <div id="contenedorTituloHabilidades">
        {props.idioma === "ingles" ? (
          <div>
            <p>Skills</p>
          </div>
        ) : props.idioma === "frances" ? (
          <div>
            <p>Compétences</p>
          </div>
        ) : (
          <div>
            <p>Habilidades</p>
          </div>
        )}
      </div>

      <div id="contenedorIconosYTextosHabilidades">
        <div className="contenedorIconoYTextoIndidual">
          <div className="iconoHabilidad">
            <FontAwesomeIcon icon={faCss3} />
          </div>

          <div>
            <p className="nombreHabilidadTecnica">CSS</p>
          </div>
        </div>

        <div className="contenedorIconoYTextoIndidual">
          <div className="iconoHabilidad">
            <FontAwesomeIcon icon={faHtml5} />
          </div>

          <div>
            <p className="nombreHabilidadTecnica">HTML</p>
          </div>
        </div>
        <div className="contenedorIconoYTextoIndidual">
          <div className="iconoHabilidad">
            <FontAwesomeIcon icon={faReact} />
          </div>

          <div>
            <p className="nombreHabilidadTecnica">REACT</p>
          </div>
        </div>
        <div className="contenedorIconoYTextoIndidual">
          <div className="iconoHabilidad">
            <FontAwesomeIcon icon={faPhp} />
          </div>

          <div>
            <p className="nombreHabilidadTecnica">PHP</p>
          </div>
        </div>
        <div className="contenedorIconoYTextoIndidual">
          <div className="iconoHabilidad">
            <FontAwesomeIcon icon={faJs} />
          </div>

          <div>
            <p className="nombreHabilidadTecnica">JAVASCRIPT</p>
          </div>
        </div>
        <div className="contenedorIconoYTextoIndidual">
          <div className="iconoHabilidad">
            <FontAwesomeIcon icon={faBootstrap} />
          </div>

          <div>
            <p className="nombreHabilidadTecnica">BOOTSTRAP</p>
          </div>
        </div>
        <div className="contenedorIconoYTextoIndidual">
          <div className="iconoHabilidad">
            <FontAwesomeIcon icon={faSass} />
          </div>

          <div>
            <p className="nombreHabilidadTecnica">SASS</p>
          </div>
        </div>
        <div className="contenedorIconoYTextoIndidual">
          <div className="iconoHabilidad">
            <FontAwesomeIcon icon={faGithub} />
          </div>

          <div>
            <p className="nombreHabilidadTecnica">GITHUB</p>
          </div>
        </div>
      </div>
    </ContenedorHabilidades>
  );
};
const ContenedorHabilidades = styled.div`
  text-align: center;

  #contenedorTituloHabilidades {
    font-family: "Rubik Glitch", cursive;
    font-size: 40px;
  }

  #contenedorIconosYTextosHabilidades {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    padding-left: 180px;
    background: #2f4f4f;
    padding-bottom: 20px;
  }

  .contenedorIconoYTextoIndidual {
    background: #2f4f4f;
    width: 140px;
    height: 170px;
    border: solid 2px;
  }

  .iconoHabilidad {
    font-size: 100px;
  }

  .nombreHabilidadTecnica {
    display: none;
    color: white;
    margin-top: -5px;
  }

  .contenedorIconoYTextoIndidual:hover {
    .nombreHabilidadTecnica {
      display: block;
    }
  }

  .nombreHabilidadTecnica {
    font-family: "Anton", sans-serif;
  }
`
