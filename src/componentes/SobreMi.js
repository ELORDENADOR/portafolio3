import React from "react";
import styled from "styled-components";
import imagen1 from "../img/imgGusto1.jpg";
import imagen2 from "../img/imgGusto2.jpg";
import imagen3 from "../img/imgGusto3.jpg";
import imagen4 from "../img/imgGusto4.jpg";
import imagen5 from "../img/imgGusto5.jpg";
import imagen6 from "../img/imgGusto6.jpg";

export const SobreMi = (props) => {
  return (
    <ContenedorSobreMi>
      <div id="contenedorTituloSobreMi">
        {props.idioma === "ingles" ? (
          <div>
            <p>About me</p>
          </div>
        ) : props.idioma === "frances" ? (
          <div>
            <p>à propos de moi</p>
          </div>
        ) : (
          <div>
            <p>Sobre Mi</p>
          </div>
        )}
      </div>

      <div id="contenedorImagenesYTextos">
        <div id="img1" className="contenedorImagenesYTextosIndividual">
          <img className="configuracionImg" src={imagen1} />

          {props.idioma === "ingles" ? (
            <div>
              <p className="configuracionText">
                I enjoy walking with my wife in beautiful Cartagena de Indias
              </p>
            </div>
          ) : props.idioma === "frances" ? (
            <div>
              <p className="configuracionText">
                J’aime marcher avec ma femme dans la belle Carthagène des Indes
              </p>
            </div>
          ) : (
            <div>
              <p className="configuracionText">
                Disfruto pasear con mi esposa en la hermosa Cartagena de Indias
              </p>
            </div>
          )}
        </div>

        <div id="img2" className="contenedorImagenesYTextosIndividual">
          <img className="configuracionImg" src={imagen2} />

          {props.idioma === "ingles" ? (
            <div>
              <p className="configuracionText">
                I love walking with my son the plallas of Cartagena
              </p>
            </div>
          ) : props.idioma === "frances" ? (
            <div>
              <p className="configuracionText">
                J’adore marcher avec mon fils les plallas de Carthagène
              </p>
            </div>
          ) : (
            <div>
              <p className="configuracionText">
                Me encanta caminar con mi hijo las playas de Cartagena
              </p>
            </div>
          )}
        </div>

        <div id="img3" className="contenedorImagenesYTextosIndividual">
          <img className="configuracionImg" src={imagen3} />

          {props.idioma === "ingles" ? (
            <div>
              <p className="configuracionText">
                I think a romantic dinner with my wife is fantastic
              </p>
            </div>
          ) : props.idioma === "frances" ? (
            <div>
              <p className="configuracionText">
                Je pense qu’un dîner romantique avec ma femme est fantastique
              </p>
            </div>
          ) : (
            <div>
              <p className="configuracionText">
                Me parece fantastico una cena romantica con mi esposa
              </p>
            </div>
          )}
        </div>

        <div id="img4" className="contenedorImagenesYTextosIndividual">
          <img className="configuracionImg" src={imagen4} />

          {props.idioma === "ingles" ? (
            <div>
              <p className="configuracionText">I love family gatherings</p>
            </div>
          ) : props.idioma === "frances" ? (
            <div>
              <p className="configuracionText">
                J’adore les réunions de famille
              </p>
            </div>
          ) : (
            <div>
              <p className="configuracionText">
                Me fascinan las reuniones familiares
              </p>
            </div>
          )}
        </div>

        <div id="img5" className="contenedorImagenesYTextosIndividual">
          <img className="configuracionImg" src={imagen5} />

          {props.idioma === "ingles" ? (
            <div>
              <p className="configuracionText">
                It is a pleasure to enjoy a good walk
              </p>
            </div>
          ) : props.idioma === "frances" ? (
            <div>
              <p className="configuracionText">
                C’est un plaisir de profiter d’une bonne promenade
              </p>
            </div>
          ) : (
            <div>
              <p className="configuracionText">
                Es un placer disfrutar de un buen paseo
              </p>
            </div>
          )}
        </div>

        <div id="img6" className="contenedorImagenesYTextosIndividual">
          <img className="configuracionImg" src={imagen6} />

          {props.idioma === "ingles" ? (
            <div>
              <p className="configuracionText">
                One of my passions is to study and learn every day
              </p>
            </div>
          ) : props.idioma === "frances" ? (
            <div>
              <p className="configuracionText">
                Une de mes passions est d’étudier et d’apprendre tous les jourse
              </p>
            </div>
          ) : (
            <div>
              <p className="configuracionText">
                Una de mis pasiones es estudiar y aprender cada dia mas
              </p>
            </div>
          )}
        </div>
      </div>
    </ContenedorSobreMi>
  );
};
const ContenedorSobreMi = styled.div`
  text-align: center;

  #contenedorImagenesYTextos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    padding-left: 40px;
    padding-right: 10px;
  }

  .contenedorImagenesYTextosIndividual {
    width: 200px;
    height: 300px;
    animation-name: mover1;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    transform: rotate(330deg);
    z-index: 3;
    margin-left: 20px;
    margin-right: 20px;
  }

  .configuracionImg {
    width: 150px;
    height: 150px;
    border-radius: 10%;
    z-index: 3;
    opacity: 0.1;
  }

  .configuracionText {
    display: none;
    color: white;
  }

  @keyframes mover1 {
    0% {
      transform: translate(50px, 0);
    }
  }

  #contenedorTituloSobreMi {
    font-family: "Rubik Glitch", cursive;
    font-size: 40px;
  }

  .configuracionImg:hover {
    opacity: 1;
  }

  .contenedorImagenesYTextosIndividual:active {
    animation-play-state: paused;
    transform: none;
    padding: 0px;

    .configuracionText {
      display: block;
    }

    .configuracionImg {
      opacity: 1;
      width: 200px;
      height: 200px;
    }
  }

  @media (max-width: 394px) {
    .configuracionImg {      
      width: 230px;
      height: 280px;
      
      margin-left: -70px;
      
    }

    .configuracionImg:hover {      
      opacity: 1;
      /* transform: none; */
    }
    

  


  .contenedorImagenesYTextosIndividual{
    padding-bottom: 70px;
  }


  .contenedorImagenesYTextosIndividual:active{

    @media (max-width: 394px) {


    .configuracionImg {      
      width: 230px;
      height: 280px;      
      margin-left: -70px;
      animation-play-state: paused;
      transform: none;
  }


  .configuracionText {  
      position: absolute;
    color: white;
    display: block;
    top: 265px;
    left: -70px;
  }



    }


    }
















    .contenedorImagenesYTextosIndividual:hover{

      animation-play-state: paused;
  transform: none;

@media (max-width: 394px) {


.configuracionImg {      
  width: 230px;
  height: 280px;      
  margin-left: -70px;
  animation-play-state: paused;
  transform: none;
}


.configuracionText {  
  position: absolute;
color: white;
display: block;
top: 265px;
left: -70px;
}



}


}








  }

`
