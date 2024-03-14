import { Container } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import  './estilo.css'
import logo from  '../../imagens/logo.png'
export default function Roda_pe(){
    return(
        <Container className="roda_pe">

<div class="container">
        <div class="box"> <img src={logo} className="logo" alt="logo"/></div>
        <div class="box">
                <h3>Sobre </h3>
                <span>A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real</span>
        </div>
        <div class="box"> 
                <ul className="Menu_ul">
                    <h3>Menu</h3>
                    <li ><a href="">Servicos </a> </li>
                    <li> <a href="">Sobre </a></li>
                    <li> <a href="">Galeria </a> </li>
                    <li> <a href="">Contato </a></li>
                </ul> 
        </div>
        <div class="box">
             <ul>
                    <h3>Contato</h3>
                    <div className="Contato_item">
                    <FaMapMarkerAlt style={{color: 'orange'}} /> <span style={{color: 'orange'}}>Dois Vizinhos  </span> <br/>
                    <FaPhoneAlt style={{color: 'orange'}}   /> <span style={{color: 'orange'}}>46919191919 </span>
                    </div>
                  
            </ul>
        </div>
    </div>
        </Container>
    )
}