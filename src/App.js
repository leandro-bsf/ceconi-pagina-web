
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo_barra from  './imagens/logo.png'
import { IoCall } from "react-icons/io5";
import teste  from  '../src/imagens/caminhao_banner.png'
import whtas from '../src/imagens/whatsapp.png'
import Servicos from '../src/componentes/Servicos'
import Contato from  '../src/componentes/Contato'
import Menu_Superior from './componentes/Menu_superior';
import Galeria from './componentes/Galeria'
import Sobre_nos from '../src/componentes/Sobre_nos'
import Roda_pe from '../src/componentes/Roda_pe'
import Capa from '../src/componentes/Capa'
import { IoLogoWhatsapp } from "react-icons/io";
function App() {
  return (
    <div className="App">
 
        <div className='div_superior'>
        <Menu_Superior/>
        <Capa/>
        </div>


        <div className='Div_servicos'>
        <Servicos/>
        </div>
        <div className='Div_Contato'>
             <Contato/>
        </div>

        <div className='Div_sobre_nos'>
            <Sobre_nos/>
        </div>
        <div className='Galeria'>
           <Galeria/>
        </div>
        <div className='Div_roda_pe'>
         <Roda_pe/>
        </div>
        <IoLogoWhatsapp  className='botao_whtas'/>
    </div>
  );
}

export default App;