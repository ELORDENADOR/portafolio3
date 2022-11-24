import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Menu = (props) => {
  const [beginning, setBeginning] = useState("Beginning");
  const [debut, setDebut] = useState("Debut");
  const [inicio, setInicio] = useState("Inicio");

  const [presentation, setPresentation] = useState("Presentation");
  const [présentation, setPrésentation] = useState("Présentation");
  const [presentacion, setPresentacion] = useState("Presentacion");

  const [habilidadesIngles, setHabilidadesIngles] = useState("skills");
  const [habilidadesFrances, setHabilidadesFrances] = useState("compétences");
  const [habilidades, setHabilidades] = useState("Habilidades");

  const [experienciaIngles, setExperienciaIngles] = useState("Experience");
  const [experienciaFrances, setExperienciaFrances] = useState("Vivre");
  const [experiencia, setExperiencia] = useState("Experiencia");

  const [sobreMiIngles, setSobreMiIngles] = useState("About_me");
  const [sobreMiFraces, setSobreMiFrances] = useState("à_propos_de_moi");
  const [sobreMi, setSobreMi] = useState("Sobre_Mi");

  const [proyectosIngles, setProyectosIngles] = useState("projects");
  const [proyectosFrances, setProyectosFranceds] = useState("Projets");
  const [proyectos, setProyectos] = useState("Proyectos");

  const [comentariosIngles, setComentariosIngles] = useState("comments");
  const [comentariosnFrances, setComentariosFrances] = useState("commentaires");
  const [comentarios, setComentarios] = useState("comentarios");

  const [contratameIngles, setContratameEspañol] = useState("Hire Me");
  const [contratameFrances, setContratameFrances] = useState("engagez moi");
  const [contratame, setContratame] = useState("Contratame");

  const [estado, setEstado] = useState(true);

  const click = () => {
    if (estado === true) {
      setEstado(false);
    } else {
      setEstado(true);
    }
  };

  return (
    <ContenedorMenu>
      <div id="menu">
        {props.idioma === "ingles" ? (
          <div>
            <FontAwesomeIcon
              onClick={() => click()}
              className="confiBoton"
              icon={faBars}
            />

            {estado ? (
              <div className="contenedorTraducciones">
                <a className="confBotonMenu" href="#vistaInicial">
                  {beginning}
                </a>
                <a className="confBotonMenu" href="#presentacion">
                  {presentation}
                </a>
                <a className="confBotonMenu" href="#habilidades">
                  {habilidadesIngles}
                </a>
                <a className="confBotonMenu" href="#experiencia">
                  {experienciaIngles}
                </a>
                <a className="confBotonMenu" href="#sobremi">
                  {sobreMiIngles}
                </a>
                <a className="confBotonMenu" href="#proyectos">
                  {proyectosIngles}
                </a>

                <a className="confBotonMenu" href="#comentarios">
                  {comentariosIngles}
                </a>

                <a className="confBotonMenu" href="#contratame">
                  {contratameIngles}
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : props.idioma === "frances" ? (
          <div>
            <FontAwesomeIcon
              onClick={() => click()}
              className="confiBoton"
              icon={faBars}
            />

            {estado ? (
              <div className="contenedorTraducciones">
                <a className="confBotonMenu" href="#vistaInicial">
                  {debut}
                </a>
                <a className="confBotonMenu" href="#presentacion">
                  {présentation}
                </a>
                <a className="confBotonMenu" href="#habilidades">
                  {habilidadesFrances}
                </a>
                <a className="confBotonMenu" href="#experiencia">
                  {experienciaFrances}
                </a>
                <a className="confBotonMenu" href="#sobremi">
                  {sobreMiFraces}
                </a>
                <a className="confBotonMenu" href="#proyectos">
                  {proyectosFrances}
                </a>

                <a className="confBotonMenu" href="#comentarios">
                  {comentariosnFrances}
                </a>

                <a className="confBotonMenu" href="#contratame">
                  {contratameFrances}
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div>
            <FontAwesomeIcon
              onClick={() => click()}
              className="confiBoton"
              icon={faBars}
            />
            {estado ? (
              <div className="contenedorTraducciones">
                <a className="confBotonMenu" href="#vistaInicial">
                  {inicio}
                </a>
                <a className="confBotonMenu" href="#presentacion">
                  {presentacion}
                </a>
                <a className="confBotonMenu" href="#habilidades">
                  {habilidades}
                </a>
                <a className="confBotonMenu" href="#experiencia">
                  {experiencia}
                </a>
                <a className="confBotonMenu" href="#sobremi">
                  {sobreMi}
                </a>
                <a className="confBotonMenu" href="#proyectos">
                  {proyectos}
                </a>

                <a className="confBotonMenu" href="#comentarios">
                  {comentarios}
                </a>

                <a className="confBotonMenu" href="#contratame">
                  {contratame}
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </ContenedorMenu>
  );
};

export default Menu;

const ContenedorMenu = styled.div`
  z-index: 4;

  .confiBoton {
    display: none;
    color: black;
    z-index: 4;
  }

  #menu {
    position: fixed;
    opacity: 0.3;
    padding-top: 15px;
  }

  #menu:hover {
    opacity: 1;
    transition: 2s;
  }

  .confBotonMenu {
    margin: 5px;
    text-decoration: none;
    color: white;
    z-index: 4;
    font-family: "Anton", sans-serif;
    letter-spacing: 1pt;
    font-size: 14px;
  }

  .confBotonMenu:hover {
    color: white;
    z-index: 6;
    font-size: 22px;
  }

  @media (max-width: 1115px) {
    #menu {
      opacity: 6;
    }

    .confiBoton {
      display: block;
      font-size: 40px;
    }

    .contenedorTraducciones {
      display: flex;
      flex-direction: column;
      background: #2f4f4f;
      z-index: 4;
    }

    .confBotonMenu {
      margin: 10px;
      font-size: 20px;
    }
  }
`;
