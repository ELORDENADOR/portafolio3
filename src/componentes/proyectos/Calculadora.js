import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroom, faEraser } from "@fortawesome/free-solid-svg-icons";

function Calculadora(props) {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [operacion, setOperacion] = useState("");
  const [resultado, setResultado] = useState("");
  const [dirigir, setDirigir] = useState(false);

  function seleccion(val) {
    if (dirigir === false) {
      if (operacion === "") {
        setNumero1(numero1 + val);
      } else {
        setNumero2(numero2 + val);
      }
    } else {
      alert("Borre o Limpie Pantalla");
    }
  }

  function operador(val) {
    setResultado("");
    if (numero1 === "") {
      alert("Debe Ingresar primero un numero");
    } else {
      setOperacion(val);
    }
  }

  function result() {
    if (numero1 !== "" && numero2 !== "") {
      setDirigir(true);
      switch (operacion) {
        case "+":
          setResultado(Number(numero1) + Number(numero2));
          break;
        case "-":
          setResultado(Number(numero1) - Number(numero2));
          break;
        case "*":
          setResultado(Number(numero1) * Number(numero2));
          break;
        case "/":
          setResultado(Number(numero1) / Number(numero2));
          break;
      }
    } else {
      alert("Debe ingresar los dos valores");
    }
  }

  function limpiar() {
    setNumero1("");
    setNumero2("");
    setOperacion("");
    setResultado("");
    setDirigir(false);
  }

  function borrar() {
    if (numero2 === "") {
      setNumero1("");
      setOperacion("");
      setDirigir(false);
    } else if (numero1 !== "") {
      setNumero2("");
      setResultado("");
      setDirigir(false);
    }
  }

  return (
    <ContenedorCalculadora>
      <div id="tituloCalculadora">
        {props.idiomaProyecto === "ingles" ? (
          <div>
            <p>calculator</p>
          </div>
        ) : props.idiomaProyecto === "frances" ? (
          <div>
            <p>calculatrice</p>
          </div>
        ) : (
          <div>
            <p>calculadora</p>
          </div>
        )}
      </div>

      <div id="contenedotCalculadoraPrincipal">
        <div className="contenedor" id="contenedorCalculadoraSecundario">
          <div className="pantalla">
            <div>{numero1 + operacion + numero2}</div>
            <div className="sigresul">{resultado !== "" ? resultado : ""}</div>
          </div>

          <button className="cero" onClick={() => seleccion(0)}>
            0
          </button>
          <button className="uno" onClick={() => seleccion(1)}>
            1
          </button>
          <button className="dos" onClick={() => seleccion(2)}>
            2
          </button>
          <button className="tres" onClick={() => seleccion(3)}>
            3
          </button>
          <button className="cuatro" onClick={() => seleccion(4)}>
            4
          </button>
          <button className="cinco" onClick={() => seleccion(5)}>
            5
          </button>
          <button className="seis" onClick={() => seleccion(6)}>
            6
          </button>
          <button className="siete" onClick={() => seleccion(7)}>
            7
          </button>
          <button className="ocho" onClick={() => seleccion(8)}>
            8
          </button>
          <button className="nueve" onClick={() => seleccion(9)}>
            9
          </button>

          <button className="sumar" onClick={() => operador("+")}>
            +
          </button>
          <button className="restar" onClick={() => operador("-")}>
            -
          </button>
          <button className="dividir" onClick={() => operador("/")}>
            /
          </button>
          <button className="multiplicar" onClick={() => operador("*")}>
            *
          </button>
          <button className="resultado" onClick={result}>
            =
          </button>

          <button className="limpiar" onClick={limpiar}>
            <FontAwesomeIcon className="confIamgenes" icon={faBroom} />
          </button>
          <button className="borrar" onClick={borrar}>
            <FontAwesomeIcon className="confIamgenes" icon={faEraser} />
          </button>
        </div>
      </div>
    </ContenedorCalculadora>
  );
}

export default Calculadora;
const ContenedorCalculadora = styled.div`
  /* display: flex;
justify-content: center; */

  #contenedorCalculadoraSecundario {
    background: grey;
    width: 300px;
    height: 450px;
    margin-bottom: 50px;
    margin-top: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
    border-radius: 10px;
    border: solid 4px;
  }

  .titulo-calculadora {
    padding-top: 40px;
    padding-bottom: 20px;
    text-align: center;
    /* background-color: rgba(128, 128, 128, 0.123);   */
    color: rgb(214, 234, 234);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .html,
  body {
    background-color: black;
  }

  .contenedor {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
  }

  .calcular {
    width: 330px;
    height: 450px;
    background-color: blue;
    border-radius: 20px;
    border: 5px solid white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .botones {
    margin-left: 10px;
    width: 50px;
  }

  .mensaje {
    color: red;
  }

  .contenedor {
    display: grid;
    grid-template-areas:
      "pantalla  pantalla         pantalla"
      "siete      ocho            nueve"
      "cuatro     cinco           seis"
      "uno        dos             tres"
      "sumar      cero            restar"
      "dividir   multiplicar      resultado"
      "limpiar   borrar           borrar";

    grid-template-rows: minmax(auto 100px 100px 100px 100px 100px 100px);
    grid-auto-columns: 80px 80px 80px;

    grid-gap: 5px;
  }
  /* PANTALLA */
  .pantalla {
    grid-area: pantalla;

    background-color: rgb(9, 63, 33);
    min-height: 50px;
    text-align: center;
    border-radius: 1rem;
    padding: 2rem;
    word-wrap: break-word;
    margin-bottom: 10px;
    color: aqua;
    border: 3px solid rgb(235, 240, 241);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.2rem;
  }

  /*                                   NUMEROS                            */

  .cero {
    grid-area: cero;
    border-radius: 5px solid rgb(3, 253, 3);
    height: 50px;
    border-radius: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    color: aqua;
    background-color: rgb(9, 63, 33);
  }
  .cero:hover {
    background-color: rgb(69, 176, 208);
  }

  .uno {
    grid-area: uno;
    border-radius: 5px solid rgb(3, 253, 3);
    height: 50px;
    border-radius: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    color: aqua;
    background-color: rgb(9, 63, 33);
  }
  .uno:hover {
    background-color: rgb(69, 176, 208);
  }

  .dos {
    grid-area: dos;
    border-radius: 5px solid rgb(3, 253, 3);
    height: 50px;
    border-radius: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    color: aqua;
    background-color: rgb(9, 63, 33);
  }
  .dos:hover {
    background-color: rgb(69, 176, 208);
  }

  .tres {
    grid-area: tres;
    border-radius: 5px solid rgb(3, 253, 3);
    height: 50px;
    border-radius: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    color: aqua;
    background-color: rgb(9, 63, 33);
  }
  .tres:hover {
    background-color: rgb(69, 176, 208);
  }

  .cuatro {
    grid-area: cuatro;
    border-radius: 5px solid rgb(3, 253, 3);
    height: 50px;
    border-radius: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    color: aqua;
    background-color: rgb(9, 63, 33);
  }
  .cuatro:hover {
    background-color: rgb(69, 176, 208);
  }

  .cinco {
    grid-area: cinco;
    border-radius: 5px solid rgb(3, 253, 3);
    height: 50px;
    border-radius: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    color: aqua;
    background-color: rgb(9, 63, 33);
  }
  .cinco:hover {
    background-color: rgb(69, 176, 208);
  }

  .seis {
    grid-area: seis;
    border-radius: 5px solid rgb(3, 253, 3);
    height: 50px;
    border-radius: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    color: aqua;
    background-color: rgb(9, 63, 33);
  }
  .seis:hover {
    background-color: rgb(69, 176, 208);
  }

  .siete {
    grid-area: siete;
    border-radius: 5px solid rgb(3, 253, 3);
    height: 50px;
    border-radius: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    color: aqua;
    background-color: rgb(9, 63, 33);
  }
  .siete:hover {
    background-color: rgb(69, 176, 208);
  }

  .ocho {
    grid-area: ocho;
    border-radius: 5px solid rgb(3, 253, 3);
    height: 50px;
    border-radius: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    color: aqua;
    background-color: rgb(9, 63, 33);
  }
  .ocho:hover {
    background-color: rgb(69, 176, 208);
  }

  .nueve {
    grid-area: nueve;
    border-radius: 5px solid rgb(3, 253, 3);
    height: 50px;
    border-radius: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    color: aqua;
    background-color: rgb(9, 63, 33);
  }
  .nueve:hover {
    background-color: rgb(69, 176, 208);
  }

  /*                                             OPERACIONES          */

  .limpiar {
    background-color: rgb(214, 231, 63);
    grid-area: limpiar;
    border-radius: 5px solid rgb(3, 253, 3);
    height: 50px;
    border-radius: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 10px;
    font-weight: bold;
  }
  .limpiar:hover {
    background-color: rgb(69, 176, 208);
  }

  .sumar {
    background-color: rgb(63, 119, 231);
    grid-area: sumar;
    border-radius: 5px solid rgb(3, 253, 3);
    height: 50px;
    border-radius: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
  }
  .sumar:hover {
    background-color: rgb(69, 176, 208);
  }

  .restar {
    background-color: rgb(63, 119, 231);
    grid-area: restar;
    border-radius: 5px solid rgb(3, 253, 3);
    height: 50px;
    border-radius: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
  }
  .restar:hover {
    background-color: rgb(69, 176, 208);
  }

  .dividir {
    background-color: rgb(63, 119, 231);
    grid-area: dividir;
    border-radius: 5px solid rgb(3, 253, 3);
    height: 50px;
    border-radius: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
  }
  .dividir:hover {
    background-color: rgb(69, 176, 208);
  }

  .multiplicar {
    background-color: rgb(63, 119, 231);
    grid-area: multiplicar;
    border-radius: 5px solid rgb(3, 253, 3);
    height: 50px;
    border-radius: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
  }
  .multiplicar:hover {
    background-color: rgb(69, 176, 208);
  }

  .resultado {
    background-color: rgb(231, 63, 209);
    grid-area: resultado;
    border-radius: 5px solid rgb(3, 253, 3);
    height: 50px;
    border-radius: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
  }
  .resultado:hover {
    background-color: rgb(69, 176, 208);
  }

  .borrar {
    background-color: rgb(227, 149, 216);
    grid-area: borrar;
    border-radius: 5px solid rgb(3, 253, 3);
    height: 50px;
    border-radius: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
  }
  .borrar:hover {
    background-color: rgb(69, 176, 208);
  }

  .sigresul {
    color: red;
  }

  .resul {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    color: rgb(229, 241, 6);
  }

  @media (max-width: 300px) {
    .contenedor {
      display: none;
    }
  }

  .confIamgenes {
    width: 40px;
    height: 40px;
  }

  #contenedotCalculadoraPrincipal {
    display: flex;
    justify-content: center;
  }

  #tituloCalculadora {
    font-family: "Pathway Gothic One", sans-serif;
    font-size: 20px;
  }
`