import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebook,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

// import cvIngles from  "../archivos/CV-RicardoGonzalezRamirez-Frontend.pdf";
// import cvFrances from "../archivos/CV-RicardoGonzalezRamirez-Frontend.pdf";
// import cvEspañol from "../archivos/CV-RicardoGonzalezRamirez-Frontend.pdf";
import Resume_RicardoGonzalezRamirez from "../archivos/Resume_RicardoGonzalezRamirez.pdf";
import Reprendre_RicardoGonzalezRamirez from "../archivos/Reprendre_RicardoGonzalezRamirez.pdf";
import Hoja_de_vida_RicardoGonzalezRamirez from "../archivos/Hoja_de_vida_RicardoGonzalezRamirez.pdf";

import styled from "styled-components";

export const Contratame = (props) => {
  const [estadoRedSocial, setEstadoRedSocial] = useState("");

  const linkedin = () => {
    setEstadoRedSocial(
      <a
        className="confiLogo espacioSeleccionRedSocial"
        href="https://www.linkedin.com/in/ricardo-gonzalez-ramirez-desarrollador-front-end/"
      >
        https://www.linkedin.com/in/ricardo-gonzalez-ramirez-desarrollador-front-end/
      </a>,
      ``
    );
  };

  const facebook = () => {
    setEstadoRedSocial(
      <a
        className="espacioSeleccionRedSocial"
        href="https://www.facebook.com/ricardo.gonzalezramirez.562/"
      >
        https://www.facebook.com/ricardo.gonzalezramirez.562/
      </a>,
      ``
    );
  };

  const whatsap = () => {
    setEstadoRedSocial(
      <a
        className="espacioSeleccionRedSocial"
        href="https://api.whatsapp.com/send?phone=573016051977/"
      >
        3016051977
      </a>
    );
  };

  const correo = () => {
    setEstadoRedSocial(
      <a className="espacioSeleccionRedSocial">
        ricardogonzalezramirez@hotmail.com
      </a>
    );
  };

  const githyb = () => {
    setEstadoRedSocial(
      <p className="espacioSeleccionRedSocial">
        ELORDENADOR (Ricardo Gonzalez Ramirez) (github.com)
      </p>
    );
  };

  return (
    <ContenedorContratame>
      {props.idioma === "ingles" ? (
        <div>
          <p id="contenedorTituloContratame">Hire Me</p>
        </div>
      ) : props.idioma === "frances" ? (
        <div>
          <p id="contenedorTituloContratame">Engagez moi</p>
        </div>
      ) : (
        <div>
          <p id="contenedorTituloContratame">Contratame</p>
        </div>
      )}

      <div id="contenedorLogosContratame">
        <div className="divLogo">
          <FontAwesomeIcon
            id="linkedin"
            onClick={() => linkedin()}
            icon={faLinkedin}
          />{" "}
          <br></br>
        </div>
        <div className="divLogo">
          <FontAwesomeIcon
            id="facebook"
            onClick={() => facebook()}
            icon={faFacebook}
          />
        </div>
        <div className="divLogo">
          <FontAwesomeIcon
            id="whatsap"
            onClick={() => whatsap()}
            icon={faWhatsapp}
          />
        </div>
        <div className="divLogo">
          <FontAwesomeIcon
            id="correo"
            onClick={() => correo()}
            icon={faEnvelope}
          />
        </div>
      </div>
      <div className="divLogo">
        <FontAwesomeIcon id="githyb" onClick={() => githyb()} icon={faGithub} />
      </div>

      <div id="contenedorCV">
        {props.idioma === "ingles" ? (
          <div>
            <a
              className="confTextoContratame"
              id="descargaCV"
              href={Resume_RicardoGonzalezRamirez}
              download="Resume_RicardoGonzalezRamirez"
            >
              Download Resume
            </a>
          </div>
        ) : props.idioma === "frances" ? (
          <div>
            <a
              className="confTextoContratame"
              id="descargaCV"
              href={Reprendre_RicardoGonzalezRamirez}
              download="Reprendre_RicardoGonzalezRamirez"
            >
              Télécharger le CV
            </a>
          </div>
        ) : (
          <div>
            <a
              className="confTextoContratame"
              id="descargaCV"
              href={Hoja_de_vida_RicardoGonzalezRamirez}
              download="hoja_de_vida_RicardoGonzalezRamirez"
            >
              Descarga Hoja de Vida
            </a>
          </div>
        )}
      </div>

      <div id="contenendorContacto">
        <p className="confTextoContratame"> {estadoRedSocial}</p>
      </div>

      <div>
        <div>
          {props.idioma === "ingles" ? (
            <div>
              <p className="confTextoContratame">
                ©Copyright 2022. All rights reserved, Terms and Conditions |
                Privacy Policies, developed by www.ricardogonzalezramirez.com
              </p>
            </div>
          ) : props.idioma === "frances" ? (
            <div>
              <p className="confTextoContratame">
                ©Copyright 2022. Tous droits réservés, Termes et Conditions |
                Politiques de confidentialité, développées par
                www.ricardogonzalezramirez.com
              </p>
            </div>
          ) : (
            <div>
              <p className="confTextoContratame">
                ©Copyright 2022. Todos los derechos reservados, Términos y
                Condiciones | Políticas de Privacidad, desarrollado por
                www.ricardogonzalezramirez.com
              </p>
            </div>
          )}
        </div>
      </div>
    </ContenedorContratame>
  );
};
const ContenedorContratame = styled.div`
  text-align: center;

  #contenedorLogosContratame {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .divLogo {
    font-size: 150px;
    margin-left: 10px;
  }

  .espacioSeleccionRedSocial {
    padding-left: -25px;
    padding-right: -25px;
    color: white;
  }

  #contenedorTituloContratame {
    font-family: "Rubik Glitch", cursive;
    font-size: 40px;
  }

  .confTextoContratame {
    font-family: "Pathway Gothic One", sans-serif;
    font-size: 20px;
    text-decoration: none;
    color: black;
  }

  #descargaCV {
    color: #ffff1a;
    font-size: 30px;
  }
`
