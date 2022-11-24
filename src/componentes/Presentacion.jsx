import React from "react";
import presentacionImg from "../img/presentacionImg3.png";
import styled from 'styled-components';

import imgInicialPresentacion from "../img/presentacionImgInicial.png";
import imgFinalPresentacion from "../img/imgFinalPresentacion.png";


import imgp1 from "../img/imgp1.png";
import imgp2 from "../img/imgp2.png";
import imgp3 from "../img/imgp3.png";
import imgp4 from "../img/imgp4.png";

import { useState,useEffect } from 'react';

export const Presentacion = (props) => {

const [estadoInicialImgPrsentacion,setEstadoInicialImgPrsentacion] = useState(true)


const [confirmacionImg1,setconfirmacionImg1] = useState(false)
const [confirmacionImg2,setconfirmacionImg2] = useState(false)
const [confirmacionImg3,setconfirmacionImg3] = useState(false)
const [confirmacionImg4,setconfirmacionImg4] = useState(false)

const [imagenFinalPresentacion,setImagenFinalPresentacion] = useState(false)



const [iniciarIamgen,setIniciarImagen] = useState(true)

const [aleatorio1,setAleatorio1] = useState(1)
const [aleatorio2,setAleatorio2] = useState(1)
const [aleatorio3,setAleatorio3] = useState(1)
const [aleatorio4,setAleatorio4] = useState(1)

const [estadoImg1,setEstadoImg1] = useState(false)
const [estadoImg2,setEstadoImg2] = useState(false)
const [estadoImg3,setEstadoImg3] = useState(false)
const [estadoImg4,setEstadoImg4] = useState(false)


const funcionAleatorio = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (1 + max - min) + min);
};

let resultadoAleatorio1 = funcionAleatorio(1,4);
let resultadoAleatorio2 = funcionAleatorio(1,4);
let resultadoAleatorio3 = funcionAleatorio(1,4);
let resultadoAleatorio4 = funcionAleatorio(1,4);



useEffect(() => {
  if(iniciarIamgen === true){
    setTimeout(() => {
      setIniciarImagen(false);

      
if(estadoImg1 === false){
  if(resultadoAleatorio1 === 1){
    let aleatorio1 = imgp1
    setAleatorio1(aleatorio1)
    setEstadoImg1(true)
    setEstadoInicialImgPrsentacion(false)
    setconfirmacionImg1(true)
  }
  if(resultadoAleatorio1 === 2){
    let aleatorio1 = imgp2
    setAleatorio1(aleatorio1)
    setEstadoInicialImgPrsentacion(false)

  }
  if(resultadoAleatorio1 === 3){
    let aleatorio1 = imgp3
    setAleatorio1(aleatorio1)
    setEstadoInicialImgPrsentacion(false)

  }
  if(resultadoAleatorio1 === 4){
    let aleatorio1 = imgp4
    setAleatorio1(aleatorio1)
    setEstadoInicialImgPrsentacion(false)
   
  }
}
  

if(estadoImg2 === false){
  if(resultadoAleatorio2 === 1){
    let aleatorio2 = imgp1
    setAleatorio2(aleatorio2)
   
  }
  if(resultadoAleatorio2 === 2){
    let aleatorio2 = imgp2
    setAleatorio2(aleatorio2)
    setEstadoImg2(true)
    setconfirmacionImg2(true)
  
  }
  if(resultadoAleatorio2 === 3){
    let aleatorio2 = imgp3
    setAleatorio2(aleatorio2)
 
  }
  if(resultadoAleatorio2 === 4){
    let aleatorio2 = imgp4
    setAleatorio2(aleatorio2)
   
  }
  
}



if(estadoImg3 === false){
  if(resultadoAleatorio3 === 1){
    let aleatorio3 = imgp1
    setAleatorio3(aleatorio3)
   
  }
  if(resultadoAleatorio3 === 2){
    let aleatorio3 = imgp2
    setAleatorio3(aleatorio3)
  }
  if(resultadoAleatorio3 === 3){
    let aleatorio3 = imgp3
    setAleatorio3(aleatorio3)
    setEstadoImg3(true)
    setconfirmacionImg3(true)
  }
  if(resultadoAleatorio3 === 4){
    let aleatorio3 = imgp4
    setAleatorio3(aleatorio3)
  }
  
}

if(estadoImg4 === false){
  
if(resultadoAleatorio4 === 1){
  let aleatorio4 = imgp1
  setAleatorio4(aleatorio4)

}
if(resultadoAleatorio4 === 2){
  let aleatorio4 = imgp2
  setAleatorio4(aleatorio4)
}
if(resultadoAleatorio4 === 3){
  let aleatorio4 = imgp3
  setAleatorio4(aleatorio4)
}
if(resultadoAleatorio4 === 4){
  let aleatorio4 = imgp4
  setAleatorio4(aleatorio4)
  setEstadoImg4(true)
  setconfirmacionImg4(true)
}
}


if(
  confirmacionImg1 === true &&
  confirmacionImg2 === true &&
  confirmacionImg3 === true &&
  confirmacionImg4 === true 
  ){
    setImagenFinalPresentacion(true)
}





    },"2000")
  }else{
    setIniciarImagen(true)
  }
}, [iniciarIamgen]);  



 




  return (
    <ContenedorPresentacion>



{
                 props.idioma === "ingles" ?
                 (
                     <div>
                       <p id="tituloPresentacion">Presentation</p>   
                     
                     </div>
                 )
                 :
                 props.idioma === "frances" ?
                 (
                   <div>
                   <p id="tituloPresentacion">Présentation</p>   
                  
                 </div>
                 )
                 :                       
                 (
                   <div>
                   <p id="tituloPresentacion">Presentacion</p>   
                 
                 </div>

                   
                 )                      

         }     




       <div id='contenedorSecundarioPresentacion'>


        <div id='contenedorImgPresentacion' >
                   
       {
         imagenFinalPresentacion ? 
         (
          <img   
          id="imgInicialPresentacion"                 
          src={imgFinalPresentacion}                                                  
        />  
         ) 
         : 
         (
              <div>
                  {
           estadoInicialImgPrsentacion ? 
           (
            <img   
            id="imgInicialPresentacion"                 
            src={imgInicialPresentacion}                                                  
          />  
           ) 
           : 
           (
              <div>
                      <div id='secImgp1'> 

{
estadoImg1 ? 
(
  <img   
  className='confImgp'                 
  src={imgp1}                                                 
/>  
)
:                    
(
  <img   
  className='confImgp'                 
  src={aleatorio1}  
                                
/>  

)
}
      
     
      {
estadoImg2 ? 
(
  <img   
  className='confImgp'                 
  src={imgp2}                                                  
/>  
)
:                    
(
  <img   
  className='confImgp'                 
  src={aleatorio2}                                                      
/>  

)
}

</div>
    
      
<div id='secImgp2'> 
      
{
estadoImg3 ? 
(
  <img   
  className='confImgp'                 
  src={imgp3}                                                  
/>  
)
:                    
(
  <img   
  className='confImgp'                 
  src={aleatorio3}                                                      
/>  

)
}               
                 
   


                 {
estadoImg4 ? 
(
  <img   
  className='confImgp'                 
  src={imgp4}                                                  
/>  
)
:                    
(
  <img   
  className='confImgp'                 
  src={aleatorio4}                                                      
/>  

)
}               






</div>

              </div>
           )
         }
              </div>
         )
       }




            
       </div>

                
                
             <div id='contenedorTexto' >                                                        

         {
                 props.idioma === "ingles" ?
                 (
                    
                          
                      <div>
                      <p >
                      Hello, I am Ricardo Gonzalez Ramirez, Systems Engineer, with more than 10 years of experience in IT projects, developing,
implementing and providing support, specialist in Analysis and integral design of software, I am passionate about Frontend Development in such a way 
I help you build a website that interacts with your users in a positive way, with a friendly and easy-to-use interface,
I can transform your designs into functional and balanced elements.
                      </p>
                      </div>
                     
                 )
                 :
                 props.idioma === "frances" ?
                 (
                   <div>
                   
                   <p >
                   Bonjour, Je suis Ricardo Gonzalez Ramirez, ingénieur système, avec plus de 10 ans d’expérience dans les projets informatiques, le développement,
mettant en œuvre et apportant un support, spécialiste en Analyse et conception intégrale de logiciels, je suis passionné par le Développement Frontend de telle manière 
Je vous aide à construire un site web qui interagit avec vos utilisateurs de manière positive, avec une interface conviviale et facile à utiliser,
Je peux transformer vos designs en éléments fonctionnels et équilibrés.
                      </p>
                 </div>
                 )
                 :                       
                 (
                   <div>
                   
                   <p>
                   Hola, soy Ricardo Gonzalez Ramirez, Ingeniero de sistemas, con mas de 10 años de experiencia en proyectos de TI, desarrollando,
implementando y brindando soporte, especialista en Analisis y diseño integral de software, me apasiona el Desarrollo Frontend de tal manera 
que te ayudo a construir un sitio web que interactúe con tus usuarios de forma positiva, con una interfaz  amigable y fácil de utilizar,
puedo transformar tus diseños en elementos funcionales y equilibrados.
                  </p>
                 </div>

                   
                 )                      

         }     


               </div>
             </div>
                          
                   
   
    </ContenedorPresentacion>
  )
}
const ContenedorPresentacion = styled.div`


#imgInicialPresentacion{
  max-width: 400px;
  height: 490px;
  border: solid 1px;
}



#tituloPresentacion{
  font-family: 'Rubik Glitch', cursive;
  font-size: 40px;
  
}


.confImgp{
  width: 200px;
  height: 245px;
  border: solid 1px;
  margin: 0px;
}

#secImgp1{
  margin-bottom: -5px;
  padding: 0px;
}



text-align: center;


#contenedorSecundarioPresentacion{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;  
}




#contenedorTexto{
  width: 400px;
  height: 490px;
  background: #2F4F4F;
  padding-left:20px;
  padding-right: 20px; 
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 25px;
  /* background-color: red; */
  text-align: justify;
  font-weight: 900;
  text-shadow: 7px 4px 20px black;
  /* letter-spacing: 1pt; */
  /* border: solid 1px; */
  color: white;
  
}



//////////////////// RESPONSIVE 

@media (max-width: 833px) {    
  
  #contenedorTexto{
    width: 400px;
    height: 320px; 
    padding-left: 15px;  
    padding-right: 15px; 
    padding-bottom: 40px;
  
  }
      
    }
  

  
    @media (max-width: 435px) {    
    
.confImgp{
  width: 150px;
  height: 150px;
  border: solid 1px;
}

#imgInicialPresentacion{
  width: 300px;
  height:300px;
  border: solid 1px;
}




  #contenedorTexto{
      width: 300px;
      height: 490px; 
    }
      }
       



`