import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

import imagenFondoVieja from "../img/imagenFondoVieja.png";

import "./VistaInicial.css";

export const VistaInicial = (props) => {
  const d = "D";
  const e = "e";
  const s = "s";
  const a = "a";
  const r = "r";
  const o = "o";
  const l = "l";
  const f = "f";
  const n = "n";
  const t = "t";
  const dd = "d";

  const ee = "é";
  const v = "v";
  const p = "p";
  const u = "u";

  return (
    <div id="contenedorPrincipalVistaInicial">
      <ContenedorVistaInicial>
        <div id="contenedorTitulo">
          {props.idioma === "ingles" ? (
            <div>
              <h2 id="nombre" className="texto">
                Ricardo
              </h2>
              <h2 id="apellido" className="texto">
                Gonzalez Ramirez
              </h2>

              <span id="textoSeparado"> {f}</span>
              <span id="textoSeparado"> {r}</span>
              <span id="textoSeparado"> {o}</span>
              <span id="textoSeparado"> {n}</span>
              <span id="textoSeparado"> {t}</span>
              <span id="textoSeparado"> {e}</span>
              <span id="textoSeparado"> {n}</span>
              <span className="encender2 dañado">{dd}</span>

              <br></br>
              <span id="textoSeparado"> {d}</span>
              <span id="textoSeparado"> {e}</span>
              <span id="textoSeparado"> {v}</span>
              <span className="casiDañada">{e}</span>
              <span id="textoSeparado"> {l}</span>
              <span id="textoSeparado"> {o}</span>
              <span id="textoSeparado"> {p}</span>
              <span id="textoSeparado"> {e}</span>
              <span id="textoSeparado"> {r}</span>
              <br></br>
            </div>
          ) : props.idioma === "frances" ? (
            <div>
              <h2 id="nombre" className="texto">
                Ricardo
              </h2>
              <h2 id="apellido" className="texto">
                Gonzalez Ramirez
              </h2>

              <br></br>
              <span id="textoSeparado"> {d}</span>
              <span id="textoSeparado"> {ee}</span>
              <span id="textoSeparado"> {v}</span>
              <span className="casiDañada">{e}</span>
              <span id="textoSeparado"> {l}</span>
              <span id="textoSeparado"> {o}</span>
              <span id="textoSeparado"> {p}</span>
              <span id="textoSeparado"> {p}</span>
              <span id="textoSeparado"> {e}</span>
              <span id="textoSeparado"> {u}</span>
              <span id="textoSeparado"> {r}</span>

              <br></br>
              <span id="textoSeparado"> {f}</span>
              <span id="textoSeparado"> {r}</span>
              <span id="textoSeparado"> {o}</span>
              <span id="textoSeparado"> {n}</span>
              <span id="textoSeparado"> {t}</span>
              <span id="textoSeparado"> {e}</span>
              <span id="textoSeparado"> {n}</span>
              <span className="encender2 dañado">{dd}</span>
            </div>
          ) : (
            <div>
              <h2 id="nombre" className="texto">
                Ricardo
              </h2>
              <h2 id="apellido" className="texto">
                Gonzalez Ramirez
              </h2>

              <br></br>
              <span id="textoSeparado"> {d}</span>
              <span id="textoSeparado"> {e}</span>
              <span id="textoSeparado"> {s}</span>
              <span className="casiDañada">{a}</span>
              <span id="textoSeparado"> {r}</span>
              <span id="textoSeparado"> {r}</span>
              <span id="textoSeparado"> {o}</span>
              <span id="textoSeparado"> {l}</span>
              <span id="textoSeparado"> {l}</span>
              <span id="textoSeparado"> {a}</span>
              <span id="textoSeparado"> {dd}</span>
              <span id="textoSeparado"> {o}</span>
              <span id="textoSeparado"> {r}</span>
              <br></br>
              <span id="textoSeparado"> {f}</span>
              <span id="textoSeparado"> {r}</span>
              <span id="textoSeparado"> {o}</span>
              <span id="textoSeparado"> {n}</span>
              <span id="textoSeparado"> {t}</span>
              <span id="textoSeparado"> {e}</span>
              <span id="textoSeparado"> {n}</span>
              <span className="encender2 dañado">{dd}</span>
            </div>
          )}
        </div>
      </ContenedorVistaInicial>
    </div>
  );
};
const ContenedorVistaInicial = styled.div`
  display: flex;
  text-align: center;
  padding-top: 100px;

  justify-content: center;

  #contenedorHeader {
    display: flex;
    justify-content: center;
    padding: 30px;
  }

  #contenedorTitulo {
    border: 5px solid white;
    box-shadow: inset 0 0 15px rgb(255, 0, 230), 0 0 15px rgb(255, 0, 230);
    border-radius: 60px;
    height: 360px;
    width: 460px;
  }

  .texto {
    margin: 0;
    font-size: 65px;
    text-shadow: 0 0 15px red, 0 0 15px red, 0 0 15px red, 0 0 15px red;
    font-family: "Dancing Script", cursive;
    color: white;
  }

  #nombre {
    margin-top: 20px;
  }

  #textoSeparado {
    text-shadow: 0 0 15px rgb(38, 0, 255), 0 0 15px rgb(8, 0, 255),
      0 0 15px rgb(4, 0, 255), 0 0 15px rgb(34, 0, 255);
    font-family: "Dancing Script", cursive;
    color: white;
    font-weight: bold;
    font-size: 50px;
    word-spacing: -0.2em;
  }

  .casiDañada {
    color: white;
    animation: parpadear 2s infinite backwards;
    font-size: 50px;
    text-shadow: 0 0 15px rgb(38, 0, 255), 0 0 15px rgb(8, 0, 255),
      0 0 15px rgb(4, 0, 255), 0 0 15px rgb(34, 0, 255);
    font-family: "Dancing Script", cursive;
    font-weight: bold;
  }

  .dañado {
    font-family: "Dancing Script", cursive;
    font-size: 50px;
    font-weight: bold;
  }

  .encender2:hover {
    color: white;
    text-shadow: 0 0 15px rgb(13, 0, 255), 0 0 15px rgb(21, 0, 255),
      0 0 15px rgb(38, 0, 255), 0 0 15px rgb(38, 0, 255);
  }

  ////////////////////////// EFECTOS

  @keyframes parpadear {
    to {
      color: black;
      text-shadow: none;
    }
  }

  ////////////////// REPONSIVE
  @media (max-width: 490px) {
    /* #contenedorTitulo {  
  height: 260px;
  width: 360px;
  margin-top: -60px;
  
}  */

    /* #textoSeparado {  
  font-size: 30px;  
} */

    /* #nombre {
  font-size: 40px; 
} */

    /* .texto { 
  font-size: 40px;
} */

    #contenedorTitulo {
      height: 360px;
      width: 420px;
    }
  }

  @media (max-width: 440px) {
    #contenedorTitulo {
      height: 360px;
      width: 390px;
      margin-top: 70px;
    }

    #apellido {
      font-size: 60px;
    }
  }

  @media (max-width: 410px) {
    #contenedorTitulo {
      height: 340px;
      width: 320px;
    }

    #nombre {
      font-size: 50px;
    }

    #apellido {
      font-size: 50px;
    }
    #textoSeparado {
      font-size: 50px;
    }
  }

  @media (max-width: 340px) {
    #contenedorTitulo {
      height: 300px;
      width: 275px;
    }

    #nombre {
      font-size: 35px;
    }

    #apellido {
      font-size: 35px;
    }
    #textoSeparado {
      font-size: 35px;
    }
  }
`;
