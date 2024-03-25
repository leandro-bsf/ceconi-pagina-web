
import Servicos from '../src/componentes/Servicos'
import Contato from  '../src/componentes/Contato'
import React, { useState } from 'react';
import Galeria from './componentes/Galeria'
import Sobre_nos from '../src/componentes/Sobre_nos'
import Roda_pe from '../src/componentes/Roda_pe'
import Capa from '../src/componentes/Capa'
import { IoLogoWhatsapp } from "react-icons/io";
import './App.css'
import logo from   '../src/imagens/logo.png'
function App() {

  const [classOn, setClassOn] = useState(false);

  return (
    <div className="App">
              <div className='div_superior'>
          <header>
    <div className="container">
      <img className="logo-cyan" src={logo} alt="logo Ceconi"/>

      <div className = { classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
           <div className="menu-toggle">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
           </div>

           <nav>
            <ul>
              <li>
                <a href="#servicos"  >SERVIÇOS</a>
              </li>
              <li>
                <a href="#Sobre_nos"  >SOBRE</a>
              </li>
              <li>
                <a href="#galeria" >GALERIA</a>
              </li>
          
              <li>
                <a href="#Contato" >CONTATO</a>  
              </li>
             
            </ul>
            
          </nav>

          </div>
        </div>

      </header>

        <Capa/> 
        </div>


        <div className='Div_servicos' id='servicos'  >
        <div className='Titulo'> <h2>Serviços</h2></div>
        <Servicos/> 
        </div>
        
        <div className='Div_sobre_nos' id='Sobre_nos'>
        <Sobre_nos/>
        </div>

        <div className='Div_galeria' id='galeria'>
        <Galeria/>
        </div>


        <div className='Contato_Div' id='Contato'>   <Contato/> </div>
        <div className='Roda_pe_div'> <Roda_pe/></div>
       
 <IoLogoWhatsapp  className='botao_whtas'/>  
    </div>
  );
}

export default App;