import React, { useState } from "react";
import imagen1 from "../../img/jugador1.png";
import imagen2 from "../../img/jugador2.png";
import imagen3 from "../../img/jugador3.png";
import imagen4 from "../../img/jugador4.png";
import imagen5 from "../../img/jugador5.png";
import imagen6 from "../../img/jugador6.png";
import opcionJ16 from "../../img/opcionJ16.png";
import opcionJ17 from "../../img/opcionJ17.png";
import opcionJ18 from "../../img/opcionJ18.png";
import opcionJ19 from "../../img/opcionJ19.png";
import opcionJ20 from "../../img/opcionJ20.png";
import opcionJ21 from "../../img/opcionJ21.png";
import opcionJ1 from "../../img/opcionJ1.png";
import opcionJ2 from "../../img/opcionJ2.png";
import opcionJ3 from "../../img/opcionJ3.png";
import ganadorJ from "../../img/ganadorJ.png";
import ganadorC from "../../img/ganadorC.png";
import incognitaComputadora from "../../img/incognitaComputadora.png";
import incognitaJugador from "../../img/incognitaJugador.png";
import jugadorIncognita from "../../img/jugadorIncognita.png";
import { Howl, Howler } from "howler";
import sPerder from "../../sonidos/sPerder.mp3";
import sYeah from "../../sonidos/sYeah.mp3";
import sPpt from "../../sonidos/sPpt.mp3";
import sJugar from "../../sonidos/sJugar.mp3";
import sBorrar from "../../sonidos/sBorrar.mp3";
import sOk from "../../sonidos/sOk.mp3";
import sShit from "../../sonidos/sShit.mp3";
import sEmpate from "../../sonidos/sEmpate.mp3";
import sVictoria from "../../sonidos/sVictoria.mp3";
import sRegresar from "../../sonidos/sRegresar.mp3";
import sAplausos from "../../sonidos/sAplausos.mp3";
import sMusicaDeJuegos from "../../sonidos/sMusicaDeJuego.mp3";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBroom,
  faPlay,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

export const JuegoPPT = (props) => {
  // SONIDOS

  const sonidosMusicaDeJuegos = new Howl({
    src: [sMusicaDeJuegos],
  });

  const sonidoYeah = new Howl({
    src: [sYeah],
  });

  const sonidoPpt = new Howl({
    src: [sPpt],
  });

  const sonidoJugar = new Howl({
    src: [sJugar],
  });

  const sonidoBorrar = new Howl({
    src: [sBorrar],
  });

  const sonidoOk = new Howl({
    src: [sOk],
  });

  const sonidoShit = new Howl({
    src: [sShit],
  });

  const sonidoEmpate = new Howl({
    src: [sEmpate],
  });

  const sonidoVictoria = new Howl({
    src: [sVictoria],
  });

  const sonidoRegresar = new Howl({
    src: [sRegresar],
  });

  const sonidoPerder = new Howl({
    src: [sPerder],
  });

  const sonidoAplausos = new Howl({
    src: [sAplausos],
  });

  // USESTATE VALORES DE LA TABLA
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // USESTATE PERSONAJE COMPUTADORA

  const [imgComputadora, setImgComputadora] = useState(
    <img
      className=" configuracionImagenRing"
      src={incognitaComputadora}
      // alt="jugador6.png"
    />
  );

  //MENSAJE JUEGOS
  const [mensajes, setMensajes] = useState("");

  // USESTATE JUGAR

  const [inicioJuego, setInicioJuego] = useState(false);

  // USESTATE IMAGENES JUGADORES CAMBIO

  const [cambioImg1, setCambioImg1] = useState(
    <img
      className=" configuracionImagenRing"
      src={jugadorIncognita}
      alt="jugador5.png"
    />
  );

  // USESTATE IMAGENES BLOQUEADAS

  const [imgBloqueada1, setImgBloqueada1] = useState(false);
  const [imgBloqueada2, setImgBloqueada2] = useState(false);
  const [imgBloqueada3, setImgBloqueada3] = useState(false);
  const [imgBloqueada4, setImgBloqueada4] = useState(false);
  const [imgBloqueada5, setImgBloqueada5] = useState(false);

  // USESTATE IMAGENES RING INICIO

  const [ganador, setGanador] = useState(false);
  const [imgGanador, setImgGanador] = useState(
    <img
      className="ganadorJ configuracionImagenRingGanador "
      src={ganadorJ}
      alt="ganadorJ.png"
    />
  );

  const [imgRingComputadoraInicio, setImgRingComputadoraInicio] = useState(
    <img
      className=" formaOpcion"
      src={incognitaComputadora}
      // alt="incognitaComputadora.png"
    />
  );

  // SELECCION PERSONAJE JUGADOR

  const [imgRingJugadorInicio, setImgRingJugadorInicio] = useState(
    <img
      className="formaOpcion"
      src={incognitaJugador}
      alt="incognitaJugador.png"
    />
  );

  // USESTATE CONTADORES PUNTOS RING

  const [contadorJugador, setContadorJugador] = useState(0);
  const [contadorComputadora, setcontadorComputadora] = useState(0);

  //  FUNCIONES SELECCIONAR OPCIONES COMPUTADORA

  const imagenPapelComputadora = () => {
    return <img className=" formaOpcion" src={opcionJ16} alt="opcionJ19.png" />;
  };

  const imagenPiedraComputadora = () => {
    return <img className=" formaOpcion" src={opcionJ18} alt="opcionJ21.png" />;
  };

  const imagenTijeraComputadora = () => {
    return <img className=" formaOpcion" src={opcionJ17} alt="opcionJ20.png" />;
  };

  const funcionAleatorio = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (1 + max - min) + min);
  };

  const opcionComputadora = (y) => {
    const x = funcionAleatorio(1, 3);
    if (x === 1) {
      setImgRingComputadoraInicio(imagenPapelComputadora());
    } else if (x === 2) {
      setImgRingComputadoraInicio(imagenPiedraComputadora());
    } else if (x === 3) {
      setImgRingComputadoraInicio(imagenTijeraComputadora());
    }

    if (x === 1 && y === 1) {
      // console.log(`Empate de Papel ${x}-${y}`);
      sonidoEmpate.play();
      setX(x);
      setY(y);
    } else if (x === 1 && y === 2) {
      // console.log(`Gana Computadora ${x}-${y}`);
      setcontadorComputadora(contadorComputadora + 1);
      sonidoShit.play();
      setX(x);
      setY(y);
    } else if (x === 1 && y === 3) {
      // console.log(`Gana Jugador ${x}-${y}`);
      setContadorJugador(contadorJugador + 1);
      sonidoOk.play();
      setX(x);
      setY(y);
    } else if (x === 2 && y === 1) {
      // console.log(`Gana Jugador ${x}-${y}`);
      setContadorJugador(contadorJugador + 1);
      sonidoOk.play();
      setX(x);
      setY(y);
    } else if (x === 2 && y === 2) {
      // console.log(`Empate de Piedras ${x}-${y}`);
      sonidoEmpate.play();
      setX(x);
      setY(y);
    } else if (x === 2 && y === 3) {
      // console.log(`Gana Computadora ${x}-${y}`);
      setcontadorComputadora(contadorComputadora + 1);
      sonidoShit.play();
      setX(x);
      setY(y);
    } else if (x === 3 && y === 1) {
      // console.log(`Gana Computadora ${x}-${y}`);
      setcontadorComputadora(contadorComputadora + 1);
      sonidoShit.play();
      setX(x);
      setY(y);
    } else if (x === 3 && y === 2) {
      // console.log(`Gana Jugador ${x}-${y}`);
      setContadorJugador(contadorJugador + 1);
      sonidoOk.play();
      setX(x);
      setY(y);
    } else if (x === 3 && y === 3) {
      // console.log(`Empate de Tijeras ${x}-${y}`);
      sonidoEmpate.play();
      setX(x);
      setY(y);
    }

    if (contadorJugador >= 10) {
      sonidoVictoria.play();
      sonidoAplausos.play();
      limpiar();
      setGanador(true);
      setImgGanador(
        <img
          className="ganadorC configuracionImagenRingGanador"
          src={ganadorJ}
          alt="ganadorJ.png"
        />
      );
    } else if (contadorComputadora >= 10) {
      sonidoPerder.play();
      limpiar();
      setGanador(true);
      setImgGanador(
        <img
          className="ganadorC configuracionImagenRingGanador"
          src={ganadorC}
          alt="ganadorC.png"
        />
      );
    } else if (contadorJugador === 2) {
      setImgBloqueada1(true);

      setMensajes(<p className="tipoTexto">Personaje 1 Activado</p>);
    } else if (contadorJugador === 4) {
      setImgBloqueada2(true);
      setMensajes(<p className="tipoTexto">Personajes 1 y 2 Activados</p>);
    } else if (contadorJugador === 5) {
      setImgBloqueada3(true);
      setMensajes(<p className="tipoTexto">Personajes 1,2 y 3 Activados</p>);
    } else if (contadorJugador === 7) {
      setImgBloqueada4(true);
      setMensajes(<p className="tipoTexto">Personajes 1,2,3 y 4 Activados</p>);
    } else if (contadorJugador === 8) {
      setImgBloqueada5(true);
      setMensajes(
        <p className="tipoTexto">Todos los personajes estana Activados</p>
      );
    } else if (contadorJugador >= 8) {
      setTimeout(() => {
        setMensajes();
      }, 4000);
    }
  };

  const imagenPapelJugador = () => {
    return <img className=" formaOpcion" src={opcionJ1} alt="opcionJ19.png" />;
  };

  const imagenPiedraJugador = () => {
    return <img className=" formaOpcion" src={opcionJ3} alt="opcionJ21.png" />;
  };

  const imagenTijeraJugador = () => {
    return <img className=" formaOpcion" src={opcionJ2} alt="opcionJ20.png" />;
  };

  const papel = () => {
    setImgRingJugadorInicio(imagenPapelJugador());
    opcionComputadora(1);
    sonidoPpt.play();
  };

  const piedra = () => {
    setImgRingJugadorInicio(imagenPiedraJugador());
    opcionComputadora(2);
    sonidoPpt.play();
  };

  const tijera = () => {
    setImgRingJugadorInicio(imagenTijeraJugador());
    opcionComputadora(3);
    sonidoPpt.play();
  };

  //LIMPIAR JUEGO

  const cargarImgInicioRingComputadora = () => {
    return (
      <img
        className=" formaOpcion"
        src={incognitaComputadora}
        alt="incognitaComputadora.png"
      />
    );
  };

  const cargarImgInicioRingJugador = () => {
    return (
      <img
        className=" formaOpcion"
        src={incognitaJugador}
        alt="incognitaJugador.png"
      />
    );
  };

  const limpiar = () => {
    // sonidosMusicaDeJuegos.pause()

    sonidoBorrar.play();
    setContadorJugador(0);
    setcontadorComputadora(0);
    setImgRingComputadoraInicio(cargarImgInicioRingComputadora());
    setImgRingJugadorInicio(cargarImgInicioRingJugador());
    setImgBloqueada1(false);
    setImgBloqueada2(false);
    setImgBloqueada3(false);
    setImgBloqueada4(false);
    setImgBloqueada5(false);
    setInicioJuego(false);
    setImgComputadora(
      <img
        className=" configuracionImagenRing"
        src={incognitaComputadora}
        // alt="jugador6.png"
      />
    );
    setMensajes();
    setX("");
    setY("");
  };

  const regresar = () => {
    sonidoRegresar.play();
    setGanador(false);
  };

  const cambio1 = () => {
    sonidoYeah.play();
    setCambioImg1(
      <img
        className="configuracionImagenRing"
        src={imagen1}
        alt="jugador1.png"
      />
    );
  };

  const cambio2 = () => {
    sonidoYeah.play();
    setCambioImg1(
      <img
        className="configuracionImagenRing"
        src={imagen2}
        alt="jugador2.png"
      />
    );
  };

  const cambio3 = () => {
    sonidoYeah.play();
    setCambioImg1(
      <img
        className="configuracionImagenRing"
        src={imagen3}
        alt="jugador3.png"
      />
    );
  };

  const cambio4 = () => {
    sonidoYeah.play();
    setCambioImg1(
      <img
        className="configuracionImagenRing"
        src={imagen4}
        alt="jugador4.png"
      />
    );
  };

  const cambio5 = () => {
    sonidoYeah.play();
    setCambioImg1(
      <img
        className="configuracionImagenRing"
        src={imagen5}
        alt="jugador5.png"
      />
    );
  };

  const cambio6 = () => {
    sonidoYeah.play();
    setCambioImg1(
      <img
        className="configuracionImagenRing"
        src={imagen6}
        alt="jugador6.png"
      />
    );
  };

  //                                  JUGAR

  const jugar = () => {
    //  sonidosMusicaDeJuegos.play()

    sonidoJugar.play();

    setInicioJuego(true);
    setCambioImg1(
      <img
        className="configuracionImagenRing"
        src={imagen6}
        alt="jugador6.png"
      />
    );
    selcceionPersonajeComputadora();
  };

  // SELECCIONAR PERSONAJE COMPUTADORA

  const selcceionPersonajeComputadora = () => {
    const x = funcionAleatorio(1, 6);
    if (x === 1) {
      setImgComputadora(
        <img
          className="configuracionImagenRing"
          src={imagen1}
          // alt="jugador6.png"
        />
      );
    } else if (x === 2) {
      setImgComputadora(
        <img
          className="configuracionImagenRing"
          src={imagen2}
          // alt="jugador5.png"
        />
      );
    } else if (x === 3) {
      setImgComputadora(
        <img
          className="configuracionImagenRing"
          src={imagen3}
          // alt="jugador4.png"
        />
      );
    } else if (x === 4) {
      setImgComputadora(
        <img
          className="configuracionImagenRing"
          src={imagen4}
          // alt="jugador4.png"
        />
      );
    } else if (x === 5) {
      setImgComputadora(
        <img
          className="configuracionImagenRing"
          src={imagen5}
          // alt="jugador4.png"
        />
      );
    } else if (x === 6) {
      setImgComputadora(
        <img
          className="configuracionImagenRing"
          src={imagen6}
          // alt="jugador4.png"
        />
      );
    }
  };

  return (
    <ContenedorJuegoPPT>
      <div id="contenedorIndisponibilidad">
        <div id="textoIndisponibilidadPPT">
          {props.idiomaProyecto === "ingles" ? (
            <div>
              It is not possible to show the project because the device does not
              comply with the appropriate size
            </div>
          ) : props.idiomaProyecto === "frances" ? (
            <div>
              Il n'est pas possible de montrer le projet car l'appareil n'est
              pas conforme la taille appropriée
            </div>
          ) : (
            <div>
              No es posible Mostrar el proyecto por que el dispostivo no cumple
              con el tamaño apropiado
            </div>
          )}
        </div>

        <div id="contenedorTotalJuego">
          <div>
            {ganador ? (
              // JUEGO PIEDRA PAPEL Y TIJERA 2
              <div id="contenedorGanador">
                <div>
                  <h1 className="tituloJuego">Ganador</h1>
                </div>

                <div id="ganador">
                  <section id="sec1dos">
                    {imgGanador}

                    <div>
                      <button onClick={() => regresar()}>Regresar</button>
                    </div>
                  </section>

                  {/* <section id="sec3dos">
          3
          </section> */}
                </div>
              </div>
            ) : (
              // JUEGO PIEDRA PAPEL Y TIJERA 1
              <div id="contenedorPrincipalJuegoPPT">
                <div>
                  {props.idiomaProyecto === "ingles" ? (
                    <div>
                      <h1 className="titulo">Rock Paper Scissors</h1>
                    </div>
                  ) : props.idiomaProyecto === "frances" ? (
                    <div>
                      <h1 className="titulo">papier de pierre et ciseaux</h1>
                    </div>
                  ) : (
                    <h1 className="titulo">Papel Piedra Y Tijera</h1>
                  )}
                </div>

                <div id="contenedorJuego">
                  <section id="sec1">
                    {props.idiomaProyecto === "ingles" ? (
                      <div>
                        <p className="vistaPuntaje">Machine Points</p>
                      </div>
                    ) : props.idiomaProyecto === "frances" ? (
                      <div>
                        <p className="vistaPuntaje">Point Maquina</p>
                      </div>
                    ) : (
                      <p className="vistaPuntaje">Puntos Maquina</p>
                    )}

                    <h2 className="puntaje">{contadorComputadora}</h2>
                  </section>

                  <section id="sec2">
                    <div id="contenedorImagenes">
                      <div>
                        {imgBloqueada1 ? (
                          <img
                            className=" imagen1 imagen"
                            src={imagen1}
                            alt="jugador1.png"
                            onClick={() => cambio1()}
                          />
                        ) : (
                          <img
                            className="imagen1 imagen bloqueada"
                            src={imagen1}
                            alt="jugador1.png"
                            // onClick={() => cambio1()}
                          />
                        )}
                      </div>
                      <div>
                        {imgBloqueada2 ? (
                          <img
                            className=" imagen2 imagen"
                            src={imagen2}
                            alt="jugador2.png"
                            onClick={() => cambio2()}
                          />
                        ) : (
                          <img
                            className="imagen2 imagen bloqueada"
                            src={imagen2}
                            alt="jugador2.png"
                            // onClick={() => cambio1()}
                          />
                        )}
                      </div>
                      <div>
                        {imgBloqueada3 ? (
                          <img
                            className=" imagen2 imagen"
                            src={imagen3}
                            alt="jugador3.png"
                            onClick={() => cambio3()}
                          />
                        ) : (
                          <img
                            className="imagen2 imagen bloqueada"
                            src={imagen3}
                            alt="jugador3.png"
                            // onClick={() => cambio1()}
                          />
                        )}
                      </div>
                      <div>
                        {imgBloqueada4 ? (
                          <img
                            className=" imagen2 imagen"
                            src={imagen4}
                            alt="jugador4.png"
                            onClick={() => cambio4()}
                          />
                        ) : (
                          <img
                            className="imagen2 imagen bloqueada"
                            src={imagen4}
                            alt="jugador4.png"
                            // onClick={() => cambio1()}
                          />
                        )}
                      </div>
                      <div>
                        {imgBloqueada5 ? (
                          <img
                            className=" imagen2 imagen"
                            src={imagen5}
                            alt="jugador5.png"
                            onClick={() => cambio5()}
                          />
                        ) : (
                          <img
                            className="imagen2 imagen bloqueada"
                            src={imagen5}
                            alt="jugador5.png"
                            // onClick={() => cambio1()}
                          />
                        )}
                      </div>
                      <div>
                        <img
                          className="imagen6 imagen"
                          src={imagen6}
                          alt="jugador6.png"
                          onClick={() => cambio6()}
                        />
                      </div>
                    </div>
                  </section>

                  <section id="sec3">
                    {props.idiomaProyecto === "ingles" ? (
                      <div>
                        <p className="vistaPuntaje">joueur Points</p>
                      </div>
                    ) : props.idiomaProyecto === "frances" ? (
                      <div>
                        <p className="vistaPuntaje">player Points</p>
                      </div>
                    ) : (
                      <p className="vistaPuntaje">Puntos Juagdor</p>
                    )}

                    <h2 className="puntaje">{contadorJugador}</h2>
                  </section>

                  <section id="sec4">
                    {inicioJuego ? (
                      <div>
                        <button
                          id="botonLimpiarActivo"
                          onClick={() => limpiar()}
                        >
                          <FontAwesomeIcon
                            className="confIamgenes"
                            icon={faBroom}
                          />
                        </button>
                        <button id="botonJugar" className="botonJugar">
                          <FontAwesomeIcon
                            className="confIamgenes"
                            icon={faPlay}
                          />
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button id="botonLimpiar" className="botonLimpiar">
                          <FontAwesomeIcon
                            className="confIamgenes"
                            icon={faBroom}
                          />
                        </button>
                        <button id="botonJugarActivo" onClick={() => jugar()}>
                          <FontAwesomeIcon
                            className="confIamgenes"
                            icon={faPlay}
                          />
                        </button>
                      </div>
                    )}
                  </section>
                  {/* IMAGENE COMPUTADORA */}

                  <section id="sec5">
                    <div className="posicionImgenRing">{imgComputadora}</div>
                  </section>

                  {/* IMAGENES RING */}
                  <section id="sec6">
                    <div className="configuracionImgRing">
                      <div>{imgRingComputadoraInicio}</div>
                    </div>
                  </section>

                  {/* IMAGENE JUGADOR */}
                  <section id="sec7">
                    {inicioJuego ? (
                      <div className="posicionImgenRing">{cambioImg1}</div>
                    ) : (
                      <div>
                        <img
                          className="configuracionImagenRing posicionImgenRing"
                          src={jugadorIncognita}
                          alt="jugadorIncognita.png"
                        />
                      </div>
                    )}
                  </section>

                  {/* IMAGEN CONTROL JUGADOR */}

                  <section id="sec8">
                    <div>
                      {inicioJuego ? (
                        <div>
                          <button
                            className="botonControlJugador"
                            onClick={() => papel()}
                          >
                            <img
                              id="opPapel"
                              className="imagen3  configurarImgControlJugador"
                              src={opcionJ1}
                              alt="opcionJ1.png"
                            />
                          </button>
                          <button
                            className="botonControlJugador"
                            onClick={() => piedra()}
                          >
                            <img
                              id="opPiedra"
                              className="imagen3 configurarImgControlJugador"
                              src={opcionJ3}
                              alt="opcionJ3.png"
                            />
                          </button>
                          <button
                            id="opTijera"
                            className="botonControlJugador"
                            onClick={() => tijera()}
                          >
                            <img
                              className="imagen3 configurarImgControlJugador"
                              src={opcionJ2}
                              alt="opcionJ3.png"
                            />
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button className="botonControlJugador">
                            <img
                              id="opPapel"
                              className="imagen3 configurarImgControlJugador"
                              src={opcionJ19}
                              alt="opcionJ19.png"
                            />
                          </button>
                          <button className="botonControlJugador">
                            <img
                              id="opPiedra"
                              className="imagen3 configurarImgControlJugador"
                              src={opcionJ21}
                              alt="opcionJ21.png"
                            />
                          </button>
                          <button id="opTijera" className="botonControlJugador">
                            <img
                              className="imagen3 configurarImgControlJugador"
                              src={opcionJ20}
                              alt="opcionJ20.png"
                            />
                          </button>
                        </div>
                      )}
                    </div>
                  </section>

                  <section id="sec9">
                    <div id="contenedorMensajes">
                      <div>
                        {/* MENSAJE DE OPCIONES JUGADOR Y COMPUTADORA */}
                        {x === 1 && y === 1 ? (
                          <h3 className="tipoTexto">Empate de Papel</h3>
                        ) : x === 1 && y === 2 ? (
                          <h3 className="tipoTexto">Gana Computadora</h3>
                        ) : x === 1 && y === 3 ? (
                          <h3 className="tipoTexto">Gana Jugador</h3>
                        ) : x === 2 && y === 1 ? (
                          <h3 className="tipoTexto">Gana Jugador</h3>
                        ) : x === 2 && y === 2 ? (
                          <h3 className="tipoTexto">Empate de Piedra</h3>
                        ) : x === 2 && y === 3 ? (
                          <h3 className="tipoTexto">Gana Computadora</h3>
                        ) : x === 3 && y === 1 ? (
                          <h3 className="tipoTexto">Gana Computadora</h3>
                        ) : x === 3 && y === 2 ? (
                          <h3 className="tipoTexto">Gana Jugador</h3>
                        ) : x === 3 && y === 3 ? (
                          <h3 className="tipoTexto">Empate de Tijeras</h3>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="coloresMensaje">{mensajes}</div>
                    </div>
                  </section>

                  <section id="sec10">
                    <div className="configuracionImgRing">
                      {imgRingJugadorInicio}
                    </div>
                  </section>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ContenedorJuegoPPT>
  );
};

export default JuegoPPT;
const ContenedorJuegoPPT = styled.div`
  #contenedorPrincipalJuegoPPT {
    text-align: center;
    background-color: red;
    margin-left: 0px;
    margin-right: 0px;

    /* margin-bottom: -400px; */
    height: 600px;
  }

  #contenedorJuego {
    margin-left: 0px;
    margin-right: 0px;
    background-color: blue;
  }

  #contenedorJuego {
    display: grid;
    grid-template-areas:
      "sec1   sec5  sec5   sec5"
      "sec2   sec6  sec9   sec10"
      "sec3   sec7  sec7   sec7"
      "sec4   sec8  sec8   sec8";

    grid-template-rows: 105px 150px 105px 100px;
    grid-auto-columns: 20% 1fr 1fr 1fr;
    grid-gap: 5px;
  }

  #sec1 {
    grid-area: sec1;
    background: rgb(47, 93, 103);

    /* background-image: url("../img/puntajeCompu.png");
  height: 100%;
  background-size: cover; */
  }

  #sec2 {
    grid-area: sec2;
    background: rgb(47, 93, 103);

    /* background-image: url("../img/lugarPersonajes.png");
  height: 100%;
  background-size: cover; */
  }

  #sec3 {
    background: rgb(47, 93, 103);
    grid-area: sec3;

    /* background-image: url("../img/puntajeJugador.png");
  height: 100%;
  background-size: cover; */
  }

  #sec4 {
    background: rgb(47, 93, 103);
    grid-area: sec4;

    /* background-image: url("../img/lugarBotonesJugarLimpiar.png");
  height: 100%;
  background-size: cover; */
  }

  #sec5 {
    background: rgb(47, 93, 103);
    grid-area: sec5;
    /* background-image: url("../img/lugarCompu.png");
  height: 100%;
  background-size: cover; */
  }

  #sec6 {
    background: rgb(47, 93, 103);
    grid-area: sec6;
    /* background-image: url("../img/ring1.png");
  height: 100%;
  background-size: cover; */
  }

  #sec7 {
    background: rgb(47, 93, 103);
    grid-area: sec7;
    /* background-image: url("../img/lugarJugador.png");
  height: 100%;
  background-size: cover; */
  }

  #sec8 {
    background: rgb(47, 93, 103);
    grid-area: sec8;
    /* background-image: url("../img/tableroPrincipal.png");
  height: 100%;
  background-size: cover; */
  }

  #sec9 {
    background: rgb(47, 93, 103);
    grid-area: sec9;
    /* background-image: url("../img/ring2.png");
  height: 100%;
  background-size: cover; */
  }
  #sec10 {
    background: rgb(47, 93, 103);
    grid-area: sec10;

    /* background-image: url("../img/ring3.png");
  height: 100%;
  background-size: cover; */
  }

  /* COMFIGURAR TAMAÑO IMAGENES DE LOS JUGADORES */

  .imagen {
    width: 60px;
    border: 2px solid black;
  }

  .configuracionImagenRing {
    width: 100px;
    height: 80px;
    border-radius: 50%;
  }

  .formaOpcion {
    border-radius: 20%;
    width: 100px;
    height: 80px;
    /* margin-top: 8px; */
  }

  .configurarImgControlJugador {
    width: 50px;
  }

  .botonControlJugador {
    margin: 5px;
  }

  .configuracionImgRing {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
  }

  #contenedorImagenes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  /* IMAGENES DE LOS JUGADORES */

  .bloqueada {
    filter: grayscale(100%);
  }

  .imagen1 {
    margin: 5px;
  }

  .imagen2 {
    margin: 5px;
  }

  .imagen3 {
    margin: 5px;
  }

  .imagen4 {
    margin: 5px;
  }

  .imagen5 {
    margin: 5px;
  }

  .imagen6 {
    margin: 5px;
  }

  /*                                       GANADOR */

  #contenedorGanador {
    text-align: center;
  }

  #ganador {
    display: grid;
    grid-template-areas:
      "sec1dos"
      "sec1dos"
      "sec1dos";

    grid-template-rows: 105px 150px 100px;
    grid-auto-columns: 1fr;
    grid-gap: 5px;
    padding-bottom: 100px;
    margin: 10px;
  }

  #sec1dos {
    grid-area: sec1dos;
  }

  /*                           IMG        GANADOR */

  .configuracionImagenRingGanador {
    width: 400px;
    height: 400px;
  }

  /*                           BOTON LIMPIAR */

  .botonLimpiar {
    background-color: rgb(155, 151, 151);
    font-family: "Press Start 2P", cursive;
    margin: 15px;
    padding: 5px;
    font-size: 8px;

    height: 40px;
    width: 50px;
  }

  #botonLimpiarActivo {
    background-color: rgb(93, 93, 240);
    font-family: "Press Start 2P", cursive;
    margin: 15px;
    padding: 5px;

    font-size: 8px;
    text-shadow: 0 0 5px rgb(217, 0, 255), 0 0 15px rgb(251, 0, 255),
      0 0 30px rgb(205, 50, 179), 0 0 50px rgb(255, 0, 255);
    /* font-family: 'Dancing Script', cursive;  */
    color: white;

    height: 40px;
    width: 50px;
  }

  /*                           BOTON JUGAR */

  .botonJugar {
    background-color: gray;
    font-family: "Press Start 2P", cursive;
    padding: 5px;
    font-size: 8px;
    height: 40px;
    width: 50px;

    /* height: 40px;
  width: 60px; */
  }

  #botonJugarActivo {
    background-color: rgb(93, 93, 240);
    font-family: "Press Start 2P", cursive;
    padding: 5px;

    margin: 0;
    font-size: 8px;
    text-shadow: 0 0 5px rgb(217, 0, 255), 0 0 15px rgb(251, 0, 255),
      0 0 30px rgb(205, 50, 179), 0 0 50px rgb(255, 0, 255);
    color: white;

    height: 40px;
    width: 50px;
  }

  /* 
VISTA PUNTAJE */
  .vistaPuntaje {
    font-family: "Press Start 2P", cursive;
    font-size: 12px;
    line-height: 20px;
    color: #171715;
  }

  .puntaje {
    color: black;
  }

  /* TITULO JUEGO */

  .tituloJuego {
    font-family: "Press Start 2P", cursive;
    padding-top: 15px;
    color: #e3e313;
  }
  .tipoTexto {
    font-family: "Press Start 2P", cursive;
    font-size: 12px;
    padding: 3px;
    text-align: center;
    line-height: 20px;
  }

  /* POSICION IMG COMPUTADORA */

  .posicionImgenRing {
    padding-top: 12px;
  }

  /* COLORES MENSAJE  */

  .coloresMensaje {
    color: #1cc20a;
  }

  .titulo {
    font-family: "Press Start 2P", cursive;
    padding-top: 15px;
    color: #e3e313;
  }

  #textoIndisponibilidadPPT {
    display: none;
  }

  @media (max-width: 1100px) {
    #textoIndisponibilidadPPT {
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

    #contenedorTotalJuego {
      display: none;
    }
  }

  .confIamgenes {
    width: 30px;
    height: 30px;
    color: green;
  }
`;
