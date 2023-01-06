import React from "react";
import styled from "styled-components";

export const Experiencia = (props) => {
  return (
    <ContenedorExperiencia>
      <div id="contenedorContenedoresExperiencias">
        {props.idioma === "ingles" ? (
          <div>
            <p id="contenedorTituloExperiencia">Experience</p>
            <div className="ContenedorExperiencias">
              <div className="configuracionContenedorExperiencia">
                <p className="empresa">FONRECAR</p>
                <div id="subCaja2">
                  <p className="textoExperiencia">
                    <strong>December 01 2011-March 15 2015</strong>
                    <br></br>
                    In the 4 years that I work in this company, provide Support
                    and develop solutions with technologies such as drupal,php
                    and mysql server.
                  </p>
                </div>
                <div id="subCaja3">
                  <a className="paginaWeb" href="https://www.fonrecar.com/">
                    www.fonrecar.com
                  </a>
                </div>
              </div>

              <div className="configuracionContenedorExperiencia">
                <p className="empresa">COMFENALCO</p>
                <div id="subCaja2">
                  <p className="textoExperiencia">
                    <strong>April 23 2015 - June 16 2021</strong>
                    <br></br>6 Years training in this company, providing
                    support, developing I have implemented projects with
                    technologies such as java, php, React, mysql server and
                    oracle.
                  </p>
                </div>
                <div id="subCaja3">
                  <a className="paginaWeb" href="https://www.comfenalco.com/">
                    www.comfenalco.com
                  </a>
                </div>
              </div>

              <div className="configuracionContenedorExperiencia">
                <p className="empresa">STEFANINI</p>
                <div id="subCaja2">
                  <p className="textoExperiencia">
                    <strong>June 17 2021- Current </strong>
                    <br></br>
                    Multinational that has allowed me work in large companies,
                    such as Alfa insurance and currently Bancodeoccidente,
                    providing support I have implemented solutions
                    technological, with technologies such as java and oracle.
                  </p>
                </div>
                <div id="subCaja3">
                  <a className="paginaWeb" href="https://stefanini.com/en">
                    www.stefanini.com
                  </a>
                </div>
              </div>

              <div className="configuracionContenedorExperiencia">
                <p className="empresa">FREELANCE</p>
                <div id="subCaja2">
                  <p className="textoExperiencia">
                    <strong>2018 - Current</strong> <br></br>
                    More than 3 years developing web solutions to different
                    companies and customers, with technologies such as React,
                    javascript, php, css, html, sqlserver.
                  </p>
                </div>
                <div id="subCaja3">
                  <a
                    className="paginaWeb"
                    href="https://decoramoscartagena.com/" 
                  >
                    www.decoramoscartagena.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : props.idioma === "frances" ? (
          <div>
            <p id="contenedorTituloExperiencia">Expérience</p>
            <div className="ContenedorExperiencias">
              <div className="configuracionContenedorExperiencia">
                <p className="empresa">FONRECAR</p>
                <div id="subCaja2">
                  <p className="textoExperiencia">
                    <strong>01 décembre 2011-15 mars 2015</strong>
                    <br></br>
                    Au cours des 4 années que je travaille dans cette
                    entreprise, fournir un support et développer des solutions
                    avec des technologies telles que drupal,php et serveur
                    mysql.
                  </p>
                </div>
                <div id="subCaja3">
                  <a className="paginaWeb" href="https://www.fonrecar.com/">
                    www.fonrecar.com
                  </a>
                </div>
              </div>

              <div className="configuracionContenedorExperiencia">
                <p className="empresa">COMFENALCO</p>
                <div id="subCaja2">
                  <p className="textoExperiencia">
                    <strong>23 avril 2015 - 16 juin 2021</strong>
                    <br></br>6 ans de formation dans cette entreprise, de
                    support, de développement J’ai mis en œuvre des projets avec
                    des technologies telles que java, php, React, mysql server
                    et oracle.
                  </p>
                </div>
                <div id="subCaja3">
                  <a className="paginaWeb" href="https://www.comfenalco.com/">
                    www.comfenalco.com
                  </a>
                </div>
              </div>

              <div className="configuracionContenedorExperiencia">
                <p className="empresa">STEFANINI</p>
                <div id="subCaja2">
                  <p className="textoExperiencia">
                    <strong>17 juin 2021 - actuellement</strong>
                    <br></br>
                    Multinationale actuelle qui m’a permis travailler dans de
                    grandes entreprises, telles que l’assurance Alfa et
                    actuellement Banco de Occidente, fournir un support J’ai mis
                    en œuvre des solutions technologique, avec des technologies
                    telles que java et oracle.
                  </p>
                </div>
                <div id="subCaja3">
                  <a className="paginaWeb" href="https://stefanini.com/en">
                    www.stefanini.com
                  </a>
                </div>
              </div>

              <div className="configuracionContenedorExperiencia">
                <p className="empresa">FREELANCE</p>
                <div id="subCaja2">
                  <p className="textoExperiencia">
                    <strong>2018 - Actuellement</strong>
                    <br></br>
                    plus de 3 ans de développement de solutions web pour
                    différentes entreprises et clients, avec des technologies
                    telles que React, javascript, php, css, html, sqlserver.
                  </p>
                </div>
                <div id="subCaja3">
                  <a
                    className="paginaWeb"
                    href="https://decoramoscartagena.com/" 
                  >
                    www.decoramoscartagena.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p id="contenedorTituloExperiencia">Experiencia</p>
            <div className="ContenedorExperiencias">
              <div
                id="contenedorExperienciaFonrecar"
                className="configuracionContenedorExperiencia"
              >
                <div id="subCaja1">
                  <p className="empresa">FONRECAR</p>
                </div>
                <div id="subCaja2">
                  <p className="textoExperiencia">
                    <strong>Diciembre 1 del 2011 - Marzo 15 del 2015</strong>
                    <br></br>
                    En los 4 años que labore en esta empresa, brinde Soporte y
                    desarrolle soluciones con tecnologias como drupal, php y
                    mysql server.
                  </p>
                </div>
                <div id="subCaja3">
                  <a className="paginaWeb" href="https://www.fonrecar.com/">
                    www.fonrecar.com
                  </a>
                </div>
              </div>

              <div
                id="contenedorExperienciaComfenalco"
                className="configuracionContenedorExperiencia"
              >
                <div>
                  <p className="empresa">COMFENALCO</p>
                </div>
                <div id="subCaja2">
                  <p className="textoExperiencia">
                    <strong>Abril 23 del 2015 - Junio 16 del 2021</strong>
                    <br></br>6 Años formandome en esta empresa, brindando
                    soporte,desarrollando he implemetando proyectos con
                    tecnologias como java, php, React, mysql server y oracle.
                  </p>
                </div>
                <div id="subCaja3">
                  <a className="paginaWeb" href="https://www.comfenalco.com/">
                    www.comfenalco.com
                  </a>
                </div>
              </div>

              <div
                id="contenedorExperienciaStefanini"
                className="configuracionContenedorExperiencia"
              >
                <p className="empresa">STEFANINI</p>
                <div id="subCaja2">
                  <p className="textoExperiencia">
                    <strong>Junio 17 del 2021 - Actualemnte</strong>
                    <br></br>
                    Multinacional que me ha permitido trabajar en grandes
                    empresas, como seguros Alfa y actualmente Bancodeoccidente,
                    brindando soporte he implementando soluciones tecnologicas,
                    con tecnologias como java y oracle.
                  </p>
                </div>
                <div id="subCaja3">
                  <a className="paginaWeb" href="https://stefanini.com/en">
                    www.stefanini.com
                  </a>
                </div>
              </div>

              <div
                id="contenedorExperienciaFreelance"
                className="configuracionContenedorExperiencia"
              >
                <p className="empresa">FREELANCE</p>
                <div id="subCaja2">
                  <p className="textoExperiencia">
                    <strong>2018 - Actualemnte</strong>
                    <br></br>
                    Mas de 3 años desarrollando soluciones web a diferentes
                    empresas y clientes, con tecnologias como React, javascript,
                    php, css, html, sqlserver.
                  </p>
                </div>
                <div id="subCaja3">
                  <a
                    className="paginaWeb"
                    href="https://decoramoscartagena.com/"                    
                  >
                    www.decoramoscartagena.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </ContenedorExperiencia>
  );
};
const ContenedorExperiencia = styled.div`
  text-align: center;
  padding: 10px;

  .ContenedorExperiencias {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .configuracionContenedorExperiencia {
    margin: 5px;
    background: lightgray;
    height: 300px;
    width: 290px;
  }

  .empresa {
    background: gray;
    margin-top: 0px;
    padding: 5px;
    font-size: 25px;
    letter-spacing: 5pt;
  }

  .textoExperiencia {
    padding-left: 10px;
    padding-right: 10px;
    text-align: inherit;
  }

  #subCaja2 {
    margin-top: 40px;
    width: 290px;
    height: 230px;
  }

  #subCaja3 {
    margin-top: -20px;
    width: 290px;
    height: 25px;
    background: #c0c0c0;
  }
  ////////////////// RESPONSIVE

  @media (max-width: 644px) {
    .configuracionContenedorExperiencia {
      width: 270px;
      height: 300px;
    }

    #subCaja2 {
      margin-top: 19px;
      width: 270px;
      height: 230px;
    }

    #subCaja3 {
      margin-top: -15px;
      width: 270px;
      height: 32px;
      background: #c0c0c0;
    }
  }

  #contenedorTituloExperiencia {
    font-family: "Rubik Glitch", cursive;
    font-size: 40px;
  }

  .empresa {
    font-family: "Anton", sans-serif;
  }

  .textoExperiencia {
    font-family: "Pathway Gothic One", sans-serif;
    font-size: 20px;
    margin-top: -20px;
  }

  .paginaWeb {
    font-family: "Pathway Gothic One", sans-serif;
    font-size: 20px;
    text-decoration: none;
    opacity: 0.3;
    color: black;
  }

  .paginaWeb:hover {
    opacity: 1;
  }

  strong {
    line-height: 30pt;
  }
`
