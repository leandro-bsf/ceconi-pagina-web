
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo_barra from  './imagens/logo.png'
import { IoCall } from "react-icons/io5";
import teste  from  '../src/imagens/caminhao_banner.png'
import whtas from '../src/imagens/whatsapp.png'
import Servicos from '../src/componentes/Servicos'
function App() {
  return (
    <div className="App">
 
        <div className='div_superior'>
             <Navbar expand="lg" className="Barra_menu">
                 <Container >
              <img src={logo_barra} className='logo_menu' alt='logo'/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Servicos</Nav.Link>
            <Nav.Link href="#link">Sobre</Nav.Link>
            <Nav.Link href="#link">Galeria</Nav.Link>
            <Nav.Link href="#link">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href="#link" className='fone_menu'> <IoCall /> 4691417577</Nav.Link>
            </Container>
        </Navbar>
        
        <div className='div_capa'>
        <div className='div_text'>
            <h2 className='text_div'>CECONI INSTALAÇÕES</h2>
            <h4 className='text_div'>Atendimento de Excelência</h4>
              <div className='div_solicitar_atend' >
                  <img src={whtas} className='logo_whts' alt='logo'/>
                  <span>Solicite um Orçamento</span>
              </div>
         </div>
             <img src={teste}alt="Imagem" className="imagem-div" />


        </div>
           
        </div>

        <div className='Div_servicos'>
        <Servicos/>
        </div>
   
    </div>
  );
}

export default App;
