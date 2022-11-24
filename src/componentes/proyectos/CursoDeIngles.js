import React, { useState, useEffect } from "react";
import styled from "styled-components";

import profe0 from "../../img/profe0.png";
import profe1 from "../../img/profe1.png";
import profe2 from "../../img/profe2.png";
import profe3 from "../../img/profe3.png";
import profe4 from "../../img/profe4.png";
import profe5 from "../../img/profe5.png";
import profe6 from "../../img/profe6.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// IMPORTAMDO SONIDOS
import gato from "../../img/gato.png";
import perro from "../../img/perro.png";
import vaca from "../../img/vaca.png";
import gallo from "../../img/gallo.png";

import { Howl, Howler } from "howler";
import sGato from "../../sonidos/gato.mp3";
import sPerro from "../../sonidos/perro.mp3";
import sVaca from "../../sonidos/vaca.mp3";
import sGallo from "../../sonidos/gallo.mp3";

import sCat from "../../sonidos/cat.mp3";
import sDog from "../../sonidos/dog.mp3";
import sCow from "../../sonidos/cow.mp3";
import sRooster from "../../sonidos/rooster.mp3";

export const CursoDeIngles = (props) => {
  const [nivel, setNivel] = useState(0);

  const navegarNivel = (x) => {
    setNivel(x);
  };

  const [animalGato, setAnimalGato] = useState("");
  const [animalPerro, setAnimalPerro] = useState("");
  const [animalVaca, setAnimalVaca] = useState("");
  const [animalGallo, setAnimalGallo] = useState("");

  ///////////////// FUNCIONES DE SONIDO NIVEL  ///////////////
  const sonidosCursoDeInglesGato = new Howl({
    src: [sGato],
  });
  const sonidosCursoDeInglesPerro = new Howl({
    src: [sPerro],
  });
  const sonidosCursoDeInglesVaca = new Howl({
    src: [sVaca],
  });
  const sonidosCursoDeInglesGallo = new Howl({
    src: [sGallo],
  });

  const sonidosCursoDeInglesCat = new Howl({
    src: [sCat],
  });
  const sonidosCursoDeInglesDog = new Howl({
    src: [sDog],
  });
  const sonidosCursoDeInglesCow = new Howl({
    src: [sCow],
  });
  const sonidosCursoDeInglesRooster = new Howl({
    src: [sRooster],
  });

  const sonidoGato = (animalito) => {
    sonidosCursoDeInglesGato.play();
    setAnimalGato(animalito);
    setAnimalPerro("");
    setAnimalVaca("");
    setAnimalGallo("");
  };
  const sonidoPerro = (animalito) => {
    sonidosCursoDeInglesPerro.play();
    setAnimalPerro(animalito);
    setAnimalGato("");
    setAnimalVaca("");
    setAnimalGallo("");
  };
  const sonidoVaca = (animalito) => {
    sonidosCursoDeInglesVaca.play();
    setAnimalVaca(animalito);
    setAnimalGato("");
    setAnimalPerro("");
    setAnimalGallo("");
  };
  const sonidoGallo = (animalito) => {
    sonidosCursoDeInglesGallo.play();
    setAnimalGallo(animalito);
    setAnimalGato("");
    setAnimalPerro("");
    setAnimalVaca("");
  };

  ///// LECCION NIVEL 2 ///

  const [nameAnimalGato, setNameAnimalGato] = useState("");
  const [nameAnimalPerro, setNameAnimalPerro] = useState("");
  const [nameAnimalVaca, setNameAnimalVaca] = useState("");
  const [nameAnimalGallo, setNameAnimalGallo] = useState("");

  const sonidoCat = (animalito) => {
    sonidosCursoDeInglesCat.play();
    setNameAnimalGato(animalito);
    setNameAnimalPerro("");
    setNameAnimalVaca("");
    setNameAnimalGallo("");
  };
  const sonidoDog = (animalito) => {
    sonidosCursoDeInglesDog.play();
    setNameAnimalPerro(animalito);
    setNameAnimalGato("");
    setNameAnimalVaca("");
    setNameAnimalGallo("");
  };
  const sonidoCow = (animalito) => {
    sonidosCursoDeInglesCow.play();
    setNameAnimalVaca(animalito);
    setNameAnimalPerro("");
    setNameAnimalGato("");
    setNameAnimalGallo("");
  };
  const sonidoRooster = (animalito) => {
    sonidosCursoDeInglesRooster.play();
    setNameAnimalGallo(animalito);
    setNameAnimalPerro("");
    setNameAnimalVaca("");
    setNameAnimalGato("");
  };

  ///// LECCION NIVEL GATO 3 ///
  const [nombreCat, setNombreCat] = useState("");
  const [estadoGato, setEstadoGato] = useState(false);

  const nombreGato = (e) => {
    e.preventDefault();
    setNombreCat(nombreCat);
  };

  const tiempoComparacionGato = () => {
    setTimeout(() => {
      setEstadoGato(false);
    }, 1000);
  };

  const ComparacionGato = () => {
    if (nombreCat !== "Cat") {
      tiempoComparacionGato();
    }
    setEstadoGato(true);
  };

  ///// LECCION NIVEL PERRO 3 ///

  const [nombreDog, setNombreDog] = useState("");
  const [estadoPerro, setEstadoPerro] = useState(false);

  const nombrePerro = (e) => {
    e.preventDefault();
    setNombreDog(nombreDog);
  };

  const tiempoComparacionPerro = () => {
    setTimeout(() => {
      setEstadoPerro(false);
    }, 1000);
  };

  const ComparacionPerro = () => {
    if (nombreDog !== "Dog") {
      tiempoComparacionPerro();
    }
    setEstadoPerro(true);
  };

  ///// LECCION NIVEL VACA 3 ///

  const [nombreCow, setNombreCow] = useState("");
  const [estadoVaca, setEstadoVaca] = useState(false);

  const nombreVaca = (e) => {
    e.preventDefault();
    setNombreCow(nombreCow);
  };

  const tiempoComparacionVaca = () => {
    setTimeout(() => {
      setEstadoVaca(false);
    }, 1000);
  };

  const ComparacionVaca = () => {
    if (nombreCow !== "Cow") {
      tiempoComparacionVaca();
    }
    setEstadoVaca(true);
  };

  ///// LECCION NIVEL GALLO 3 ///

  const [nombreRooster, setNombreRooster] = useState("");
  const [estadoGallo, setEstadoGallo] = useState(false);

  const nombreGallo = (e) => {
    e.preventDefault();
    setNombreRooster(nombreRooster);
  };

  const tiempoComparacionGallo = () => {
    setTimeout(() => {
      setEstadoGallo(false);
    }, 1000);
  };

  const ComparacionGallo = () => {
    if (nombreRooster !== "Rooster") {
      tiempoComparacionGallo();
    }
    setEstadoGallo(true);
  };

  ///// LECCION NIVEL GALLO 4 ///

  const [seleccionAnimal, setSeleccionAnimal] = useState(0);
  const [nombreAnimalSecreto, setNombreAnimalSecreto] = useState("?");
  const [correctoCat, setCorrectoCat] = useState(false);
  const [correctoDog, setCorrectoDog] = useState(false);
  const [correctoCow, setCorrectoCow] = useState(false);
  const [correctoRooster, setCorrectoRooster] = useState(false);

  const animalSecreto = (y) => {
    setSeleccionAnimal(y);

    if (y === 4) {
      sonidoRooster();
    } else if (y === 3) {
      sonidoCow();
    } else if (y === 2) {
      sonidoDog();
    } else if (y === 1) {
      sonidoCat();
    }
  };

  const escuchaGato = (x) => {
    if (seleccionAnimal === x) {
      setNombreAnimalSecreto("Real");
      setCorrectoCat(true);
    } else if (seleccionAnimal === 0) {
      setNombreAnimalSecreto("again");
    } else {
      setNombreAnimalSecreto("Fake");
    }
  };

  const escuchaPerro = (x) => {
    if (seleccionAnimal === x) {
      setNombreAnimalSecreto("Real");
      setCorrectoDog(true);
    } else if (seleccionAnimal === 0) {
      setNombreAnimalSecreto("again");
    } else {
      setNombreAnimalSecreto("Fake");
    }
  };

  const escuchaVaca = (x) => {
    if (seleccionAnimal === x) {
      setNombreAnimalSecreto("Real");
      setCorrectoCow(true);
    } else if (seleccionAnimal === 0) {
      setNombreAnimalSecreto("again");
    } else {
      setNombreAnimalSecreto("Fake");
    }
  };

  const escuchaGallo = (x) => {
    if (seleccionAnimal === x) {
      setNombreAnimalSecreto("Real");
      setCorrectoRooster(true);
    } else if (seleccionAnimal === 0) {
      setNombreAnimalSecreto("again");
    } else {
      setNombreAnimalSecreto("Fake");
    }
  };

  ///// LECCION NIVEL 5 EXAMEN ///

  const [preguntaFinal1, setPreguntaFinal1] = useState("?");
  const [preguntaFinal2, setPreguntaFinal2] = useState(0);
  const [preguntaFinal3, setPreguntaFinal3] = useState(0);
  const [preguntaFinal4, setPreguntaFinal4] = useState(0);

  const [pregunta1Correcta, setPregunta1Correcta] = useState(0);
  const [pregunta2Correcta, setPregunta2Correcta] = useState(0);
  const [pregunta3Correcta, setPregunta3Correcta] = useState(0);
  const [pregunta4Correcta, setPregunta4Correcta] = useState(0);

  const calificarExamen = (e) => {
    e.preventDefault();

    if (preguntaFinal1 === "Rooster") {
      console.log("Respuesta 1 Correcta");
      setPregunta1Correcta(1);
    } else {
      console.log("Respuesta 1 Incorrecta");
      setPregunta1Correcta(0);
    }

    if (preguntaFinal2 === 2) {
      console.log("Respuesta 2 Correcta");
      setPregunta2Correcta(1);
    } else {
      console.log("Respuesta 2 Incorrecta");
      setPregunta2Correcta(0);
    }

    if (preguntaFinal3 === 2) {
      console.log("Respuesta 3 Correcta");
    } else {
      console.log("Respuesta 3 Incorrecta");
    }

    if (preguntaFinal4 === 2) {
      console.log("Respuesta 4 Correcta");
    } else {
      console.log("Respuesta 4 Incorrecta");
    }
  };

  const respuestaPreguntaFinal2 = (x) => {
    if (x === 2) {
      setPreguntaFinal2(2);
    } else {
      setPreguntaFinal2(1);
    }
  };

  const respuestaPreguntaFinal3 = (x) => {
    if (x === 2) {
      sonidoDog();
      setPreguntaFinal3(2);
      setPregunta3Correcta(1);
    } else {
      setPreguntaFinal3(1);
      sonidoCat();
      setPregunta3Correcta(0);
    }
  };

  const respuestaPreguntaFinal4 = (x) => {
    if (x === 2) {
      sonidoCat();
      setPreguntaFinal4(2);
      setPregunta4Correcta(1);
    } else {
      setPreguntaFinal4(1);
      sonidoDog();
      setPregunta4Correcta(0);
    }
  };

  const iniciarTodo = () => {
    navegarNivel(0);

    setPreguntaFinal1("?");
    setPreguntaFinal2(0);
    setPreguntaFinal3(0);
    setPreguntaFinal4(0);
    setPregunta1Correcta(0);
    setPregunta2Correcta(0);
    setPregunta3Correcta(0);
    setPregunta4Correcta(0);
    setSeleccionAnimal(0);
    setNombreAnimalSecreto("?");
    setCorrectoCat(false);
    setCorrectoDog(false);
    setCorrectoCow(false);
    setCorrectoRooster(false);
    setNombreCow("");
    setEstadoVaca(false);
    setNombreDog("");
    setEstadoPerro(false);
    setNombreCat("");
    setEstadoGato(false);
    setNameAnimalGato("");
    setNameAnimalPerro("");
    setNameAnimalVaca("");
    setNameAnimalGallo("");
    setAnimalGato("");
    setAnimalPerro("");
    setAnimalVaca("");
    setAnimalGallo("");
  };

  return (
    <ContenedorCursoDeIdiomas>
      <div id="textoIndisponibilidadCursoDeIdiomas">
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

      {/* <div id="contenedorPrincipal"> */}

      <div id="contenedorTotalDelCurso">
        <p id="tituloCursoDeIngles">Curso de Ingles</p>

        <div id="contenedorPrincipalCursoDeIdiomas">
          <div>
            {
              /////////////////////////////    NIVEL 0 //////////////////////////

              nivel === 0 ? (
                <div id="contenedorNivel0">
                  <div id="seccionImgNivel">
                    <img id="imgProfe" src={profe0}></img>
                  </div>

                  <div id="seccionTextoNivel0">
                    <p id="textoBienvenidaSeccion10">
                      Bienvenido al Curso de ingles mas utilizado y apetecido en
                      el mundo, Mi nombre es Chemo, soy un Robot Instructor y te
                      guiare durante este curso. nosotros brindamos una
                      estructura unica y funcional, en la cual te permitira
                      adquirir un nivel de Ingles Nativo sin importar tu lengua
                      Materna, pero antes de empezar si te preguntas por que
                      tengo dientes si soy un Robot no te preocupes, es para que
                      te fijes en eso y no los errores que mi creador no a
                      corregido. ahora si , empecemos. para avanzar y retroceder
                      en el curso solo dale click en los botones que se
                      encuentran abajo a la izquierda.
                    </p>
                  </div>

                  <div id="seccionBotonesNivel0">
                    <button id="botonSiguiente" onClick={() => navegarNivel(1)}>
                      Siguinte
                    </button>
                  </div>

                  <div id="seccionApoyo0"></div>
                </div>
              ) : /////////////////////////////    NIVEL 1 //////////////////////////

              nivel === 1 ? (
                <div id="contenedorNivel">
                  <div id="seccionImgNivel">
                    <img id="imgProfe" src={profe1}></img>
                  </div>

                  <div id="seccionTextoNivel">
                    <p id="textoSeccionTextoNivel1">
                      Ahora podemos iniciar, Porfavor dale click en las imagenes
                      de los animales que se encuentran abajo. Esto nos servira
                      para entrar en contexto con las lecciones. cuando termines
                      de escuchar todas, sigue adelante en el curso.
                    </p>
                  </div>

                  <div id="seccionLeccionNivel">
                    <div id="ContenedorLeccionesNivel">
                      <button
                        className="confDivBotonesImagenesNivel"
                        onClick={() => sonidoGato("Cat")}
                      >
                        Gato<br></br>
                        <img
                          className="confBotonesImagenesNivel"
                          src={gato}
                        ></img>
                      </button>
                      <button
                        className="confDivBotonesImagenesNivel"
                        onClick={() => sonidoPerro("Dog")}
                      >
                        Perro<br></br>
                        <img
                          className="confBotonesImagenesNivel"
                          src={perro}
                        ></img>
                      </button>
                      <button
                        className="confDivBotonesImagenesNivel"
                        onClick={() => sonidoVaca("Cow")}
                      >
                        Vaca<br></br>
                        <img
                          className="confBotonesImagenesNivel"
                          src={vaca}
                        ></img>
                      </button>
                      <button
                        className="confDivBotonesImagenesNivel"
                        onClick={() => sonidoGallo("Rooster")}
                      >
                        Gallo<br></br>
                        <img
                          className="confBotonesImagenesNivel"
                          src={gallo}
                        ></img>
                      </button>
                    </div>
                  </div>

                  <div id="seccionBotonesNivel">
                    <button id="botonSiguiente" onClick={() => navegarNivel(0)}>
                      Atras
                    </button>
                    <button id="botonSiguiente" onClick={() => navegarNivel(2)}>
                      Siguinte
                    </button>
                  </div>

                  <div id="seccionRespuesta">
                    <p id="seleecionGato">{animalGato}</p>
                    <p id="seleecionPerro">{animalPerro}</p>
                    <p id="seleecionVaca">{animalVaca}</p>
                    <p id="seleecionGallo">{animalGallo}</p>
                  </div>
                </div>
              ) : /////////////////////////////    NIVEL 2 //////////////////////////

              nivel === 2 ? (
                <div id="contenedorNivel">
                  <div id="seccionImgNivel">
                    <img id="imgProfe" src={profe2}></img>
                  </div>

                  <div id="seccionTextoNivel">
                    <p id="textoSeccionTextoNivel2">
                      Muy bien, ahora que ya tenemos idea de lo que trabajamos,
                      iniciaremos con la correcta pronunciacion de los nombres
                      de los animales anteriores en ingles. da click en cada uno
                      de ellos y cuando termines de escuchar todos, sigue
                      adelante en el curso.
                    </p>
                  </div>

                  <div id="seccionLeccionNivel">
                    <div id="ContenedorLeccionesNivel">
                      <button
                        className="confDivBotonesImagenesNivel"
                        onClick={() => sonidoCat("Cat")}
                      >
                        Cat<br></br>
                        <img
                          className="confBotonesImagenesNivel"
                          src={gato}
                        ></img>
                      </button>
                      <button
                        className="confDivBotonesImagenesNivel"
                        onClick={() => sonidoDog("Dog")}
                      >
                        Dog<br></br>
                        <img
                          className="confBotonesImagenesNivel"
                          src={perro}
                        ></img>
                      </button>
                      <button
                        className="confDivBotonesImagenesNivel"
                        onClick={() => sonidoCow("Cow")}
                      >
                        Cow<br></br>
                        <img
                          className="confBotonesImagenesNivel"
                          src={vaca}
                        ></img>
                      </button>
                      <button
                        className="confDivBotonesImagenesNivel"
                        onClick={() => sonidoRooster("Rooster")}
                      >
                        Rooster<br></br>
                        <img
                          className="confBotonesImagenesNivel"
                          src={gallo}
                        ></img>
                      </button>
                    </div>
                  </div>

                  <div id="seccionBotonesNivel">
                    <button id="botonSiguiente" onClick={() => navegarNivel(1)}>
                      Atras
                    </button>
                    <button id="botonSiguiente" onClick={() => navegarNivel(3)}>
                      Siguinte
                    </button>
                  </div>

                  <div id="seccionRespuesta">
                    <p id="confnameAnimalGato">{nameAnimalGato}</p>
                    <p id="confnameAnimalPerro">{nameAnimalPerro}</p>
                    <p id="confnameAnimalVaca">{nameAnimalVaca}</p>
                    <p id="confnameAnimalGallo">{nameAnimalGallo}</p>
                  </div>
                </div>
              ) : /////////////////////////////  NIVEL 3 //////////////////////////

              nivel === 3 ? (
                <div id="contenedorNivel">
                  <div id="seccionImgNivel">
                    <img id="imgProfe" src={profe3}></img>
                  </div>

                  <div id="seccionTextoNivel">
                    <p id="textoSeccionTextoNivel3">
                      Perfecto, ahora vamos a iniciar las lecciones escritas,
                      deberas escrivir el nombre correcto del animal y dar click
                      en la imagen correspondiente, si es correcto aparecera el
                      nombre del animal junto con un OK, esto te indicara que
                      esta bien escrita. cuando termines de escribir todas,
                      sigue adelante en el curso.
                    </p>
                  </div>

                  <div id="seccionLeccionNivel">
                    <div id="ContenedorLeccionesNivel">
                      <form onSubmit={nombreGato}>
                        <input
                          id="label"
                          size="7"
                          type="text"
                          placeholder="Name"
                          value={nombreCat}
                          onChange={(e) => setNombreCat(e.target.value)}
                        />
                        <br></br>
                        <button
                          id="botonQuienEsElAnimal"
                          onClick={() => ComparacionGato()}
                        >
                          <img className="confImgQueAnimalEs" src={gato}></img>
                          <br></br>
                          Revisar
                        </button>
                      </form>
                      <form onSubmit={nombrePerro}>
                        <input
                          id="label"
                          size="7"
                          type="text"
                          placeholder="Name"
                          value={nombreDog}
                          onChange={(e) => setNombreDog(e.target.value)}
                        />
                        <br></br>
                        <button
                          id="botonQuienEsElAnimal"
                          onClick={() => ComparacionPerro()}
                        >
                          <img className="confImgQueAnimalEs" src={perro}></img>
                          <br></br>
                          Revisar
                        </button>
                      </form>

                      <form onSubmit={nombreVaca}>
                        <input
                          id="label"
                          size="7"
                          type="text"
                          placeholder="Name"
                          value={nombreCow}
                          onChange={(e) => setNombreCow(e.target.value)}
                        />
                        <br></br>
                        <button
                          id="botonQuienEsElAnimal"
                          onClick={() => ComparacionVaca()}
                        >
                          <img className="confImgQueAnimalEs" src={vaca}></img>
                          <br></br>
                          Revisar
                        </button>
                      </form>

                      <form onSubmit={nombreGallo}>
                        <input
                          id="label"
                          size="7"
                          type="text"
                          placeholder="Name"
                          value={nombreRooster}
                          onChange={(e) => setNombreRooster(e.target.value)}
                        />
                        <br></br>
                        <button
                          id="botonQuienEsElAnimal"
                          onClick={() => ComparacionGallo()}
                        >
                          <img className="confImgQueAnimalEs" src={gallo}></img>
                          <br></br>
                          Revisar
                        </button>
                      </form>
                    </div>
                  </div>

                  <div id="seccionBotonesNivel">
                    <button id="botonSiguiente" onClick={() => navegarNivel(2)}>
                      Atras
                    </button>
                    <button id="botonSiguiente" onClick={() => navegarNivel(4)}>
                      Siguinte
                    </button>
                  </div>

                  <div id="seccionRespuesta">
                    {estadoGato === true ? (
                      <div id="contenedorRespuestaQueAnimalEs">
                        <p id="isCat">
                          {nombreCat === "Cat" ? "Cat OK" : "Cat Fake"}
                        </p>
                      </div>
                    ) : (
                      <p></p>
                    )}

                    {estadoPerro === true ? (
                      <div id="contenedorRespuestaQueAnimalEs">
                        <p id="isDog">
                          {nombreDog === "Dog" ? "Dog OK" : "Dog Fake"}
                        </p>
                      </div>
                    ) : (
                      <p></p>
                    )}

                    {estadoVaca === true ? (
                      <div id="contenedorRespuestaQueAnimalEs">
                        <p id="isCow">
                          {nombreCow === "Cow" ? "Cow OK" : "Cow Fake"}
                        </p>
                      </div>
                    ) : (
                      <p></p>
                    )}

                    {estadoGallo === true ? (
                      <div id="contenedorRespuestaQueAnimalEs">
                        <p id="isRooster">
                          {nombreRooster === "Rooster"
                            ? "Rooster OK"
                            : "Rooster Fake"}
                        </p>
                      </div>
                    ) : (
                      <p></p>
                    )}
                  </div>
                </div>
              ) : ///////////////////////// NIVEL 4 //////////////////////////

              nivel === 4 ? (
                <div id="contenedorNivel">
                  <div id="seccionImgNivel">
                    <img id="imgProfe" src={profe4}></img>
                  </div>

                  <div id="seccionTextoNivel">
                    <p id="textoSeccionTextoNivel4">
                      Muy bien, ahora presiona el sonido secreto y ubica la
                      imagen que le corresponde.si es correcto automaticamente
                      de dira ok, cuando termines la actividad, sigue adelante
                      en el curso.
                    </p>
                  </div>

                  <div id="seccionLeccionNivel">
                    <div id="ContenedorLeccionesNivel">
                      <button
                        className="confDivBotonesImagenesNivel"
                        onClick={() => escuchaPerro(2)}
                      >
                        Dog<br></br>
                        <img
                          className="confBotonesImagenesNivel"
                          src={perro}
                        ></img>
                      </button>

                      <button
                        className="confDivBotonesImagenesNivel"
                        onClick={() => escuchaGato(1)}
                      >
                        Cat<br></br>
                        <img
                          className="confBotonesImagenesNivel"
                          src={gato}
                        ></img>
                      </button>
                      <button
                        className="confDivBotonesImagenesNivel"
                        onClick={() => escuchaGallo(4)}
                      >
                        Rooster<br></br>
                        <img
                          className="confBotonesImagenesNivel"
                          src={gallo}
                        ></img>
                      </button>
                      <button
                        className="confDivBotonesImagenesNivel"
                        onClick={() => escuchaVaca(3)}
                      >
                        Cow<br></br>
                        <img
                          className="confBotonesImagenesNivel"
                          src={vaca}
                        ></img>
                      </button>
                    </div>

                    <p id="resultadoAnimalSecreto"> {nombreAnimalSecreto}</p>
                  </div>

                  <div id="seccionBotonesNivel">
                    <button id="botonSiguiente" onClick={() => navegarNivel(3)}>
                      Atras
                    </button>
                    <button id="botonSiguiente" onClick={() => navegarNivel(5)}>
                      Siguinte
                    </button>
                  </div>

                  <div id="seccionRespuesta">
                    {correctoCat ? (
                      <p className="okCat">OK</p>
                    ) : (
                      <button
                        className="confAnimalScreto"
                        onClick={() => animalSecreto(1)}
                      >
                        ?
                      </button>
                    )}

                    {correctoDog ? (
                      <p className="okDog">OK</p>
                    ) : (
                      <button
                        className="confAnimalScreto"
                        onClick={() => animalSecreto(2)}
                      >
                        ?
                      </button>
                    )}
                    {correctoCow ? (
                      <p className="okCow">OK</p>
                    ) : (
                      <button
                        className="confAnimalScreto"
                        onClick={() => animalSecreto(3)}
                      >
                        ?
                      </button>
                    )}
                    {correctoRooster ? (
                      <p className="okRooster">OK</p>
                    ) : (
                      <button
                        className="confAnimalScreto"
                        onClick={() => animalSecreto(4)}
                      >
                        ?
                      </button>
                    )}
                  </div>
                </div>
              ) : ///////////////////////// NIVEL 5 //////////////////////////

              nivel === 5 ? (
                <div id="contenedorExamen">
                  <div id="seccionImgExamen5">
                    <img id="imgProfe" src={profe5}></img>
                  </div>

                  <div id="seccionTextoExamen">
                    <p id="textoSeccionTextoNivel5">
                      Hagamos la ultima leccion,Aplicaremos todo lo aprendido:En
                      la primera frase deberas escribir el nombre del animal que
                      corresponda. luego daras ok si crees que es el nombre
                      correcto. En la segunda Frase deberas seleccionar el
                      animal que coresponda segun el texto. En la tercera frase
                      deberas escuchar los dos audios que se encuentran en
                      incognita y seleccionar el que corresponda. En la cuarta
                      frase deberas seleccionar el nombre del animal. cada
                      respuesta correcta se te dara una estrella como premio.
                    </p>
                  </div>

                  <div id="ContenedorLeccionesExamen">
                    <form onSubmit={calificarExamen}>
                      the{" "}
                      <input
                        id="labelNivel5"
                        size="3"
                        type="text"
                        placeholder={preguntaFinal1}
                        value={preguntaFinal1}
                        onChange={(e) => setPreguntaFinal1(e.target.value)}
                      />
                      <button id="botonRespuesta1">ok</button>
                      woke up the family at four in the morning. That's why the
                      mother went to get the milk from the.
                      <button
                        id="botonQuienEsElAnimal"
                        onClick={() => respuestaPreguntaFinal2(1)}
                      >
                        <img className="confImgQueAnimalEs" src={gallo}></img>
                      </button>
                      <button
                        id="botonQuienEsElAnimal"
                        onClick={() => respuestaPreguntaFinal2(2)}
                      >
                        <img className="confImgQueAnimalEs" src={vaca}></img>
                      </button>
                      <br></br>
                      <br></br>
                      early. at that moment the boy hears the
                      <button
                        className="confAnimalScreto"
                        onClick={() => respuestaPreguntaFinal3(3)}
                      >
                        ?
                      </button>
                      <button
                        className="confAnimalScreto"
                        onClick={() => respuestaPreguntaFinal3(2)}
                      >
                        ?
                      </button>
                      <br></br>
                      <br></br>barking because the
                      <button
                        className="confBotonPregunta4"
                        onClick={() => respuestaPreguntaFinal4(1)}
                      >
                        Dog
                      </button>
                      <button
                        className="confBotonPregunta4"
                        onClick={() => respuestaPreguntaFinal4(2)}
                      >
                        Cat
                      </button>
                      did not want to bathe.
                      <br></br>
                      <br></br>
                    </form>
                  </div>

                  <div id="seccionBotonesExamen">
                    <button id="botonSiguiente" onClick={() => navegarNivel(4)}>
                      Atras
                    </button>
                    <button id="botonSiguiente" onClick={() => navegarNivel(6)}>
                      Siguinte
                    </button>
                  </div>

                  <div id="seccionApoyoExamen">
                    <div>
                      {pregunta1Correcta ? (
                        <FontAwesomeIcon
                          className="confPuntoCorrecto"
                          icon={faStar}
                        />
                      ) : (
                        <p></p>
                      )}
                    </div>

                    <div>
                      {pregunta2Correcta ? (
                        <FontAwesomeIcon
                          className="confPuntoCorrecto"
                          icon={faStar}
                        />
                      ) : (
                        <p></p>
                      )}
                    </div>

                    <div>
                      {pregunta3Correcta ? (
                        <FontAwesomeIcon
                          className="confPuntoCorrecto"
                          icon={faStar}
                        />
                      ) : (
                        <p></p>
                      )}
                    </div>

                    <div>
                      {pregunta4Correcta ? (
                        <FontAwesomeIcon
                          className="confPuntoCorrecto"
                          icon={faStar}
                        />
                      ) : (
                        <p></p>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                ///////////////////////// NIVEL FINAL //////////////////////////
                <div id="contenedorFinal">
                  <div id="seccionImgFinal">
                    <img id="imgProfe" src={profe6}></img>
                  </div>

                  <div id="seccionTextoFinal">
                    <p id="textoSeccionTextoNivel6">
                      Bueno eso es todo, espero que te hayas divertido con este
                      increible curso. Ya de seguro lograstes alcanzar un nivel
                      nativo del idioma Ingles, asi que comparte este curso con
                      tus amigos y familiares para que tambien aprendan.
                    </p>
                  </div>

                  <div id="seccionBotonesFinal">
                    <button id="botonSiguiente" onClick={() => navegarNivel(5)}>
                      Atras
                    </button>
                    <button id="botonSiguiente" onClick={() => iniciarTodo()}>
                      Iniciar
                    </button>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
      {/* </div> */}
    </ContenedorCursoDeIdiomas>
  );
};

const ContenedorCursoDeIdiomas = styled.nav`
  /////////////////// GRID 0 ////////////////

  #contenedorTotalDelCurso {
    background: gray;
    border: solid 5px;
    margin: 15px;
    padding: 20px;
  }

  #contenedorNivel0 {
    display: grid;
    grid-template-areas:
      "seccionImgNivel     seccionTextoNivel"
      "seccionImgNivel     seccionTextoNivel"
      "seccionImgNivel        seccionTextoNivel"
      "seccionBotonesNivel seccionTextoNivel";

    grid-template-rows: 160px 160px 130px 30px;
    grid-auto-columns: 1fr 1fr;
  }

  #seccionImgNivel0 {
    background-color: red;
    grid-area: seccionImgNivel;
    text-align: center;
    border-radius: 10% 25%;
    padding-top: 50px;
  }
  #seccionTextoNivel0 {
    background-color: blue;
    grid-area: seccionTextoNivel;
  }

  #seccionBotonesNivel0 {
    background-color: pink;
    grid-area: seccionBotonesNivel;
    border-radius: 50% 50%;
    text-align: center;
    border: solid black 5px;
    height: 30px;
    margin-top: 5px;
  }

  #seccionTextoNivel0 {
    font-family: cursive;
    word-spacing: 0.2em;
    font-size: 18px;
    text-align: justify;
    color: white;
    padding-top: 100px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 25% 10%;
    margin-left: 5px;
    border: solid black 5px;
  }

  /////////////////// GRID GENERAL ////////////////

  #contenedorNivel {
    display: grid;
    grid-template-areas:
      "seccionImgNivel     seccionTextoNivel"
      "seccionImgNivel     seccionTextoNivel"
      "seccionImgNivel     seccionLeccionNivel"
      "seccionBotonesNivel seccionRespuesta";

    grid-template-rows: 160px 160px 130px 30px;
    grid-auto-columns: 1fr 1fr;
    grid-gap: 10px;
    height: 550px;
    margin: 10px;
  }

  #seccionImgNivel {
    background-color: red;
    grid-area: seccionImgNivel;
    text-align: center;
    border-radius: 10% / 50%;
    padding-top: 80px;
    border: solid 5px;
  }
  #seccionTextoNivel {
    background-color: blue;
    grid-area: seccionTextoNivel;

    font-family: "Abril Fatface", cursive;
    word-spacing: 0.5em;
    font-size: 20px;
    text-align: justify;
    color: white;
    padding: 50px;
    border-radius: 20% 10%;
    border: solid black 5px;
  }

  #seccionLeccionNivel {
    background-color: white;
    grid-area: seccionLeccionNivel;
    border-radius: 10% 15%;
    width: 420px;
    height: 115px;
    border: solid 5px;
  }

  #seccionBotonesNivel {
    background-color: pink;
    grid-area: seccionBotonesNivel;
    border-radius: 20% 40%;
    text-align: center;
    padding-top: 10px;
    border: solid 5px;
    height: 30px;
  }

  #seccionRespuesta {
    background-color: green;
    grid-area: seccionRespuesta;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 20% 10%;
    height: 60px;
    border: solid 5px;
    margin-top: 20px;
  }

  /////////////////// GRID EXAMEN ////////////////

  #contenedorExamen {
    display: grid;
    grid-template-areas:
      "seccionImgExamen     seccionTextoExamen"
      "seccionImgExamen     seccionTextoExamen"
      "seccionApoyoExamen     ContenedorLeccionesExamen"
      "seccionBotonesExamen ContenedorLeccionesExamen";

    grid-template-rows: 160px 160px 130px 30px;
    grid-auto-columns: 1fr 1fr;
    grid-gap: 10px;
    height: 550px;
    margin: 10px;
  }

  #ContenedorLeccionesExamen {
    background-color: white;
    grid-area: ContenedorLeccionesExamen;
    word-spacing: 0.2em;
    text-transform: uppercase;
    font-size: 12px;
    padding: 5px;
    border-radius: 5%;
    border: solid 5px;
    height: 210px;
    width: 400px;
  }

  #seccionImgExamen5 {
    background-color: green;
    grid-area: seccionImgExamen;
    text-align: center;
    border-radius: 10% 25%;
    padding-top: 20px;
    border: solid 5px;
    height: 400px;
  }

  #seccionTextoExamen {
    background-color: orange;
    grid-area: seccionTextoExamen;

    font-family: cursive;
    word-spacing: 0.2em;
    font-size: 15px;
    text-align: justify;
    color: white;
    padding-top: 50px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 25% 10%;
    border: solid black 5px;
  }

  #seccionApoyoExamen {
    background-color: blue;
    border-radius: 20% 10%;
    display: flex;
    justify-content: center;
    border: solid 5px;
  }

  #seccionBotonesExamen {
    background-color: pink;
    grid-area: seccionBotonesExamen;
    border-radius: 50% 50%;
    text-align: center;
    border: solid 5px;
    height: 30px;
  }

  /////////////////// GRID FINAL ////////////////

  #contenedorFinal {
    display: grid;
    grid-template-areas:
      "seccionImgFinal     seccionTextoFinal"
      "seccionImgFinal     seccionTextoFinal"
      "seccionImgFinal   seccionTextoFinal"
      "seccionBotonesFinal seccionTextoFinal";

    grid-template-rows: 160px 160px 130px 30px;
    grid-auto-columns: 1fr 1fr;
    grid-gap: 10px;
    /* height: 100vh; */
    margin: 10px;
  }

  #seccionImgFinal {
    background-color: red;
    grid-area: seccionImgFinal;
    text-align: center;
    border-radius: 10% / 50%;
    padding-top: 50px;
    border: solid black 5px;
  }
  #seccionTextoFinal {
    background-color: blue;
    grid-area: seccionTextoFinal;

    font-family: cursive;
    word-spacing: 0.2em;
    font-size: 20px;
    text-align: justify;
    color: white;
    padding-top: 180px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 25% 10%;
    border: solid black 5px;
  }

  #seccionLeccionFinal {
    background-color: white;
    grid-area: seccionLeccionFinal;
  }

  #seccionBotonesFinal {
    background-color: pink;
    grid-area: seccionBotonesFinal;
    border-radius: 30% 80%;
    text-align: center;
    border: solid black 5px;
    height: 30px;
  }

  ///////////////////////////////  CONFIGURACIONES //////////////////

  .confDivBotonesImagenesNivel {
    margin-left: 10px;
  }

  #ContenedorLeccionesNivel {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
  }

  #imgProfe {
    width: 300px;
    height: 300px;
    border: solid black 5px;
  }

  .confBotonesImagenesNivel {
    width: 50px;
    height: 50px;
  }

  #tituloCursoDeIngles {
    padding-top: 0px;
    padding-bottom: 0px;
    text-align: center;
    color: rgb(214, 234, 234);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .confImgQueAnimalEs {
    width: 50px;
    height: 50px;
  }

  #contenedorRespuestaQueAnimalEs {
    margin-left: 10px;
  }

  #botonRespuesta1 {
    margin-left: 4px;
    margin-right: 4px;
    padding-bottom: 3px;
  }

  #label {
    margin-left: 0px;
    text-align: center;
    font-size: 15px;
  }

  #labelNivel5 {
    text-align: center;
    padding-bottom: 4px;
  }

  .confAnimalScreto {
    margin-left: 10px;
    width: 30px;
    height: 30px;
  }

  .confBotonPregunta4 {
    margin-left: 10px;
    margin-right: 4px;
  }

  #resultadoAnimalSecreto {
    font-size: 20px;
    text-align: center;
    /* margin-buttom: 20px; */
  }

  .okCat {
    margin-left: 10px;
    color: red;
    font-size: 20px;
    font-family: "Abril Fatface", cursive;
  }

  .okDog {
    margin-left: 10px;
    color: yellow;
    font-size: 20px;
    font-family: "Abril Fatface", cursive;
  }

  .okCow {
    margin-left: 10px;
    color: white;
    font-size: 20px;
    font-family: "Abril Fatface", cursive;
  }

  .okRooster {
    margin-left: 10px;
    color: pink;
    font-size: 20px;
    font-family: "Abril Fatface", cursive;
  }

  .confPuntoCorrecto {
    font-size: 80px;
    padding: 10px;
    color: yellow;
  }

  #botonQuienEsElAnimal {
    margin-left: 10px;
  }

  #seleecionGato {
    color: red;
    font-size: 20px;
    font-family: "Abril Fatface", cursive;
  }
  #seleecionPerro {
    color: yellow;
    font-size: 20px;
    font-family: "Abril Fatface", cursive;
  }
  #seleecionVaca {
    color: white;
    font-size: 20px;
    font-family: "Abril Fatface", cursive;
  }
  #seleecionGallo {
    color: pink;
    font-size: 20px;
    font-family: "Abril Fatface", cursive;
  }

  #confnameAnimalGato {
    color: red;
    font-size: 20px;
    font-family: "Abril Fatface", cursive;
  }
  #confnameAnimalPerro {
    color: yellow;
    font-size: 20px;
    font-family: "Abril Fatface", cursive;
  }
  #confnameAnimalVaca {
    color: white;
    font-size: 20px;
    font-family: "Abril Fatface", cursive;
  }
  #confnameAnimalGallo {
    color: pink;
    font-size: 20px;
    font-family: "Abril Fatface", cursive;
  }

  #isCat {
    color: pink;
    font-size: 20px;
    font-family: "Abril Fatface", cursive;
  }

  #isDog {
    color: Yellow;
    font-size: 20px;
    font-family: "Abril Fatface", cursive;
  }

  #isCow {
    color: white;
    font-size: 20px;
    font-family: "Abril Fatface", cursive;
  }

  #isRooster {
    color: red;
    font-size: 20px;
    font-family: "Abril Fatface", cursive;
  }

  #textoIndisponibilidadCursoDeIdiomas {
    display: none;
  }

  #textoBienvenidaSeccion10 {
    margin-top: -50px;
    padding: 10px;
    font-size: 16px;
  }

  #textoSeccionTextoNivel1 {
    margin-top: -45px;
    padding: 10px;
    /* letter-spacing: 0.25em; */
    word-spacing: 0.2em;
  }

  #textoSeccionTextoNivel2 {
    margin-top: -15px;
    word-spacing: 0.2em;
  }

  #textoSeccionTextoNivel3 {
    word-spacing: 0.2em;
    margin-top: -40px;
    font-size: 19px;
  }

  #textoSeccionTextoNivel4 {
    word-spacing: 0.2em;
    margin-top: -10px;
  }

  #textoSeccionTextoNivel5 {
    word-spacing: 0.2em;
    margin-top: -10px;
  }

  #textoSeccionTextoNivel6 {
    word-spacing: 0.2em;
    margin-top: -10px;
  }

  @media (max-width: 946px) {
    #contenedorTotalDelCurso {
      display: none;
    }

    #textoIndisponibilidadCursoDeIdiomas {
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
`;
