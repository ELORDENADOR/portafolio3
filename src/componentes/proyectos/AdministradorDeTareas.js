import React, { useState } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const AdministradorDeTareas = (props) => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [id, setId] = useState("");
  const [cantidadDetareas, setCantidadDeTareas] = useState(0);
  const [completado, setCompletado] = useState(false);
  const [idCompletado, setIdCompletado] = useState("");

  const guardarTarea = (e) => {
    e.preventDefault();
    if (!tarea.trim()) {
      alert("Digite Tarea");
      return;
    }

    setTareas([...tareas, { id: nanoid(10), tarea: tarea }]);
    setTarea("");

    setCantidadDeTareas(cantidadDetareas + 1);
  };

  const eliminar = (id) => {
    const arregloFiltrado = tareas.filter((item) => item.id !== id);
    setTareas(arregloFiltrado);
    setCantidadDeTareas(cantidadDetareas - 1);
  };

  const editar = (item) => {
    setModoEdicion(true);
    setTarea(item.tarea);
    setId(item.id);
  };

  const editarTarea = (e) => {
    e.preventDefault();
    const arregloEditado = tareas.map((item) =>
      item.id === id ? { id: id, tarea: tarea } : item
    );
    setTareas(arregloEditado);
    setTarea("");
    setModoEdicion(false);
    setId("");
  };

  return (
    <ContenedorAdministradorDeTareas>
      <div id="textoIndisponibilidadAT">
        {props.idiomaProyecto === "ingles" ? (
          <div>
            It is not possible to show the project because the device does not
            comply with the appropriate size
          </div>
        ) : props.idiomaProyecto === "frances" ? (
          <div>
            Il n'est pas possible de montrer le projet car l'appareil n'est pas
            conforme la taille appropriée
          </div>
        ) : (
          <div>
            No es posible Mostrar el proyecto por que el dispostivo no cumple
            con el tamaño apropiado
          </div>
        )}
      </div>

      <div className="contenedorPrincipal">
        <div>
          <h2 className="titulos Tituloprincipal">
            {props.idiomaProyecto === "ingles" ? (
              <div>Task Manager</div>
            ) : props.idiomaProyecto === "frances" ? (
              <div>Le Gestionnaire des tâches</div>
            ) : (
              <div>Administrador de Tareas</div>
            )}
          </h2>

          <form onSubmit={modoEdicion ? editarTarea : guardarTarea}>
            <input
              className="digitarTarea"
              type="text"
              onChange={(e) => setTarea(e.target.value)}
              value={tarea}
            />

            {modoEdicion ? (
              <button className="guardar">
                {props.idiomaProyecto === "ingles" ? (
                  <div>Edit</div>
                ) : props.idiomaProyecto === "frances" ? (
                  <div>Éditer</div>
                ) : (
                  <div>Editar</div>
                )}
              </button>
            ) : (
              <button className="guardar">
                {props.idiomaProyecto === "ingles" ? (
                  <div>Save</div>
                ) : props.idiomaProyecto === "frances" ? (
                  <div>sauvegarder</div>
                ) : (
                  <div>Guardar</div>
                )}
              </button>
            )}
          </form>
        </div>

        {modoEdicion ? (
          <h2>Editar</h2>
        ) : (
          <h2 className="titulos">
            {" "}
            {cantidadDetareas}
            {props.idiomaProyecto === "ingles" ? (
              <div>Tasks</div>
            ) : props.idiomaProyecto === "frances" ? (
              <div>Corvées</div>
            ) : (
              <div>Tareas</div>
            )}
          </h2>
        )}

        {tareas.map((item) => (
          <div className="contenedorTareas" key={item.id}>
            <div className="numero"></div>

            <div className="contenedor1">{item.tarea}</div>

            <div className="contenedor2">
              <button className="eliminar" onClick={() => eliminar(item.id)}>
                <FontAwesomeIcon className="confIamgenes" icon={faTrash} />
              </button>
            </div>

            <div className="contenedor3">
              <button className="actualizar" onClick={() => editar(item)}>
                <FontAwesomeIcon className="confIamgenes" icon={faPen} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </ContenedorAdministradorDeTareas>
  );
};

export default AdministradorDeTareas;
const ContenedorAdministradorDeTareas = styled.div`
  .contenedorPrincipal {
    text-align: center;
    padding-bottom: 50px;
  }

  .contenedorTareas {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contenedorTareas {
    display: grid;
    grid-template-areas: "numero contenedor1    contenedor2   contenedor3";

    grid-template-rows: minmax(30px 30px 30px);
    grid-auto-columns: 100px 500px 100px 100px;
  }

  body {
    background-color: rgb(199, 218, 211);
  }

  .titulos {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .Tituloprincipal {
    padding-top: 50px;
    padding-bottom: 20px;
  }

  .digitarTarea {
    background-color: antiquewhite;
    color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;
  }

  .guardar {
    color: black;
    background-color: antiquewhite;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    padding: 10px;
    margin-left: 5px;
    border-radius: 10px;
  }

  .numero {
    grid-area: numero;
    color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    margin-right: 10px;
  }

  .contenedor1 {
    grid-area: contenedor1;
    background-color: antiquewhite;
    color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    word-wrap: break-word;
    padding: 10px;
    margin: 5px;
    opacity: 0.6;
    border-bottom: 2px solid #899d82;
  }

  .contenedor1Completado {
    text-decoration: line-through;
    background-color: rgba(64, 65, 68, 0.176);
    color: black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    word-wrap: break-word;
    padding: 20px;
    margin: 5px;
    opacity: 0.6;
  }

  .contenedor3 {
    margin-left: 10px;
  }

  .eliminar {
    background-color: brown;
    color: wheat;
    width: 60px;
    height: 50px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 15px;
    border-radius: 10%;
  }

  .actualizar {
    background-color: rgb(159, 230, 27);
    color: black;
    width: 60px;
    height: 50px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 15px;
    border-radius: 10%;
  }

  #textoIndisponibilidadAT {
    display: none;
  }

  @media (max-width: 800px) {
    .contenedorPrincipal {
      display: none;
    }

    #textoIndisponibilidadAT {
      display: block;
      color: black;
      text-align: center;
      font-family: "Abril Fatface", cursive;
      padding-top: 100px;
      padding-bottom: 100px;
      font-size: 20px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  .confIamgenes {
    width: 40px;
    height: 40px;
  }
`
