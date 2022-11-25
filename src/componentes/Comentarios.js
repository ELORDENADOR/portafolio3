import axios from "axios";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import App from "../App";

export const Comentarios = (props) => {
  const [comentarios, setComentarios] = useState("");
  const [validandoMensaje, setValidandoMensaje] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();

    const validadoMensaje = (tipo) => {
      setValidandoMensaje(`${tipo}`);
    };

    if (!comentarios.trim()) {
      // {setValidandoMensaje("Por favor digite mensaje")}

      {
        props.idioma === "ingles" ? (
          <div>{setValidandoMensaje("Please type message")}</div>
        ) : props.idioma === "frances" ? (
          <div>{setValidandoMensaje("Veuillez taper le message")}</div>
        ) : (
          <div>{setValidandoMensaje("Por favor digite mensaje")}</div>
        );
      }
    } else {
      let data = new FormData(e.target);
      axios
        .post(
          "https://formspree.io/f/mbjwnkna",
          {
            comentarios: comentarios,
          },
          {
            headers: { Accept: "application/json" },
          }
        )
        .then((response) => {
          console.log("response", response.data);
          if (response.data.ok) {
            // validadoMensaje("Mensaje enviado con Exito");

            {
              props.idioma === "ingles" ? (
                <div>{setValidandoMensaje("Message sent succesfully")}</div>
              ) : props.idioma === "frances" ? (
                <div>{setValidandoMensaje("Message envoyé avec succès")}</div>
              ) : (
                <div>{setValidandoMensaje("Mensaje enviado con Exito")}</div>
              );
            }
          } else {
            validadoMensaje("Error al enviar mensaje");
          }
        });

      // .catch((error) => {
      //   alert("2 Invalido");
      // });
    }
    setComentarios("");
  };

  return (
    <ContenedorComentarios>
      {props.idioma === "ingles" ? (
        <div id="contenedorTituloComentarios">
          <p>Comments</p>
        </div>
      ) : props.idioma === "frances" ? (
        <div id="contenedorTituloComentarios">
          <p>Commentaires</p>
        </div>
      ) : (
        <div>
          <p id="contenedorTituloComentarios">Comentarios</p>
        </div>
      )}

      <div className="explicacionComentarios">
        {props.idioma === "ingles" ? (
          <div>
            <p>
              {" "}
              Please write your commentary, which project you want you to do or
              what improvement I can make to the page
            </p>
          </div>
        ) : props.idioma === "frances" ? (
          <div>
            <p>
              S’il vous plaît écrivez votre commentaire, quel projet vous voulez
              que vous fassiez ou quoi amélioration que je peux apporter à la
              page
            </p>
          </div>
        ) : (
          <div>
            <p>
              {" "}
              Porfavor Escriba su cometario, que proyecto quiere que realice o
              que mejora puedo hacerle a la pagina
            </p>
          </div>
        )}
      </div>

      <form onSubmit={enviarFormulario}>
        <textarea
          className="comentarios"
          cols="50"
          rows="4"
          maxLength="100"
          onChange={(e) => setComentarios(e.target.value)}
          name="comentarios"
          value={comentarios}
        />
        <br />

        <div className="explicacionComentarios">
          {props.idioma === "ingles" ? (
            <div>
              <p>Maximum 100 lettering</p>
            </div>
          ) : props.idioma === "frances" ? (
            <div>
              <p>Maximum 100 lettres</p>
            </div>
          ) : (
            <div>
              <p>Maximo 100 letras</p>
            </div>
          )}
        </div>

        <button id="btnEnviarComentario">
          {props.idioma === "ingles" ? (
            <div>
              <p>Send</p>
            </div>
          ) : props.idioma === "frances" ? (
            <div>
              <p>Envoyer</p>
            </div>
          ) : (
            <div>
              <p>Enviar</p>
            </div>
          )}
        </button>
      </form>

      <p className="mensaje">{validandoMensaje}</p>
    </ContenedorComentarios>
  );
};

const ContenedorComentarios = styled.div`
  text-align: center;
  padding: 15px;

  .comentarios {
    font-size: 30px;
    background: #c0c0c0;
  }

  @media (max-width: 1215px) {
    .comentarios {
      font-size: 25px;
    }
  }

  @media (max-width: 1055px) {
    .comentarios {
      font-size: 20px;
    }
  }

  @media (max-width: 930px) {
    .comentarios {
      font-size: 15px;
    }
  }

  @media (max-width: 785px) {
    .comentarios {
      font-size: 10px;
    }
  }

  @media (max-width: 655px) {
    .comentarios {
      font-size: 8px;
    }
  }

  #contenedorTituloComentarios {
    font-family: "Rubik Glitch", cursive;
    font-size: 40px;
  }

  .explicacionComentarios {
    font-family: "Pathway Gothic One", sans-serif;
    font-size: 20px;
  }

  #btnEnviarComentario {
    font-family: "Pathway Gothic One", sans-serif;
    font-size: 20px;
    width: 100px;
    height: 60px;
    border-radius: 20px;
    background-color: #008080;
    cursor: pointer;
    font-weight: bold;
  }

  #btnEnviarComentario:active {
    width: 110px;
    height: 70px;
    background-color: #00ffff;
  }

  #validador {
    font-size: 20px;
    font-family: "Anton", sans-serif;
    /* color: red; */
  }

  .mensaje {
    color: white;
    font-family: "Pathway Gothic One", sans-serif;
    font-size: 30px;
  }
`
