import { useState } from 'react';
import styled from 'styled-components';
import { Comentarios } from './componentes/Comentarios';
import { Contratame } from './componentes/Contratame';
import { Experiencia } from './componentes/Experiencia';
import { Presentacion } from './componentes/Presentacion';
import { Proyectos } from './componentes/Proyectos';
import { SobreMi } from './componentes/SobreMi';
import { Habilidades } from './componentes/Habilidades';
import { VistaInicial } from './componentes/VistaInicial';
import Menu from './componentes/proyectos/Menu';


import "./App.css";

function App() {


  const [idioma,setIdioma] = useState("");



  const idiomaEspañol = () =>{
    setIdioma("español")



    }

  const idiomaIngles = () =>{
  setIdioma("ingles")
  }

  const idiomaFraces = () =>{
  setIdioma("frances")
  }


  return (  


<ContenedorApp>




<div id='textoIndisponibilidadApp'>




{
             idioma === "ingles" ?
             (
                  <div>
                     <p>The device is not the appropriate size</p>    
               
                  </div>
             )
             :
            idioma === "frances" ?
             (
                  <div>
                     <p>L'appareil n'est pas de la bonne taille</p>        
                 
                  </div>
             )
             :                       
             (
               <div>             
                     <p>El dispositivo no tiene el tamaño apropiado</p>         
               </div>
             )                      
           
        }   

</div>



         <div id='contenedorSecciones'>
                       



                <section id='vistaInicial'>              


                      <div id='contenedorBotonesIdiomas' >
                            <button onClick={idiomaEspañol} >
                                <p className='confBoton'  >Español</p>
                              </button>

                              <button onClick={idiomaIngles}>
                                  <p className='confBoton' >Ingles</p>
                              </button>

                              <button onClick={idiomaFraces}>
                                  <p className='confBoton'>Frances</p>
                              </button>
                      </div>

                    <Menu
                     idioma = {idioma}
                     
                    />


                    <VistaInicial
                    idioma = {idioma}
                    />                 
               
                </section>

                    <section id='presentacion'>
                    <Presentacion
                        idioma = {idioma}
                    />
                </section>

                <section id='habilidades'>
                    <Habilidades
                        idioma = {idioma}
                    />
                </section>

                <section id='experiencia'>
                    <Experiencia
                    idioma = {idioma}
                    />
                </section>

                <section id='sobremi'>
                    <SobreMi
                    idioma = {idioma}
                    />
                </section>

                <section id='proyectos'>
                   <Proyectos
                     idioma = {idioma}
                   />
        
                </section>

                <section id='comentarios'>
               
               <Comentarios
                  idioma = {idioma}
               />

                </section>


                <section id='contratame'>
                  <Contratame
                    idioma = {idioma}
                  />
                </section>
         </div>
</ContenedorApp>


  );
}

export default App;

const ContenedorApp = styled.div`

background: #1f2e2e;

#textoIndisponibilidadApp{
  position: fixed;
  padding: 5px;
  top: 30%;
  transform: translate(5%, 50%);
  background: red;
  font-size: 20px;
  padding-left: 20px;
  padding-right: 20px;
  margin-right:30px;
  text-align: center;
}




#textoIndisponibilidadApp{
display: none;
}



#contenedorSecciones {
  display: grid;
  grid-template-areas:
    "vistaInicial"
    "presentacion"
    "habilidades"
    "experiencia"
    "sobremi"
    "proyectos"
    "comentarios"
    "contratame";
  grid-template-rows: 600px auto auto auto auto auto auto auto;
  grid-auto-columns: 1fr;
  grid-gap: 0px;



  margin-left: 150px;
  margin-right: 150px; 

  
}

#vistaInicial {

  grid-area: vistaInicial; 
  border: solid 1px;

      
}

#presentacion {
  
  grid-area: presentacion;
  border: solid 1px;
  background: #2F4F4F;
  
}

#habilidades {

  grid-area: habilidades;
  border: solid 1px;
  background: 	#2F4F4F;
}

#experiencia {

  grid-area: experiencia;
  border: solid 1px;
  background: white;
  background: #2F4F4F;
}

#sobremi {

  grid-area: sobremi;
  border: solid 1px;
  background: #2F4F4F;
  
  
}

#proyectos {

  grid-area: proyectos;
  border: solid 1px;
   background: #2F4F4F;
}

#comentarios {

  grid-area: comentarios;
  border: solid 1px;
  background: #2F4F4F;
}

#contratame {

  grid-area: contratame;
  border: solid 1px;
  background: #2F4F4F;
}

#contenedorBotonesIdiomas{
position: fixed;
z-index: 4;
    top: 2%;
    left: 60%;
    transform: translate(47%, -50%);  
    opacity: 0.3;
}


#contenedorBotonesIdiomas:hover{
    opacity: 1;
}




.confBoton{
font-family: 'Anton', sans-serif;         
letter-spacing: 1pt; 
}


////////////////// REPONSIVE 



@media (max-width: 1176px) {  

#contenedorSecciones {
  margin-left: 0px;
  margin-right: 0px;   
}
#contenedorBotonesIdiomas{
    left: 58%;   
}

}





@media (max-width: 810px) {  

  #contenedorBotonesIdiomas{
    left: 40%;   
}

}



@media (max-width: 570px) {  

#contenedorBotonesIdiomas{
  left: 20%;    
}

}



@media (max-width: 440px) {  

  #contenedorSecciones {  
  grid-template-rows: 800px auto auto auto auto auto auto auto;
}
}

@media (max-width: 430px) {  

#contenedorBotonesIdiomas{
  left: 0%;    
}

}






@media (max-width: 300px) {  

#contenedorSecciones{
  display: none;
}

#textoIndisponibilidadApp{
display: block;
}

}


.confBoton{
width: 50px;
height: 10px;
padding: 3px;
}


`