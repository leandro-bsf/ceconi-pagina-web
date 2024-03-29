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
              <span>Localização</span>
                <iframe  className='localizao'src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d460262.7785684491!2d-53.48884286776522!3d-25.677825751865374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f0538fb7cdaf89%3A0x42e03098043b400c!2sDois%20Vizinhos%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1711029373688!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="box"> 
            
                    <h3>Sobre</h3>
                    <span>
                    Ceconi Serviços Elétricos e Serviços de Munck. <br/>
                    CNPJ: 38.162.664/0001-20

                    </span>
                  
              
        </div>
        <div class="box">
             <ul>
                    <h3>Contato</h3>
                    <div className="Contato_item">
                    <FaMapMarkerAlt style={{ color: 'rgb(209, 140, 12)'}} size={15}/> <span style={{ color: 'rgb(209, 140, 12)'}}>Dois Vizinhos  </span> <br/>
                    <FaPhoneAlt style={{color: 'rgb(209, 140, 12)'}}  size={15}  /> <span style={{ color: 'rgb(209, 140, 12)'}}>+554699170-4814</span>
                    </div>
                  
            </ul>
        </div>
    </div>
    
        </Container>
    )
}