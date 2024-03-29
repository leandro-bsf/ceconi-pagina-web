
import teste  from  '../../imagens/caminhao_banner.png'
import whtas from '../../imagens/whatsapp.png'
import './estilo.css'
export default function Capa(){
    return(
        <div className='div_capa'>
        <div className='div_text'>
            <h4 className='text_Titulo'>CECONI INSTALAÇÕES</h4>
            <h4 className='text_div'>Atendimento de Excelência</h4>
              <div className='div_solicitar_atend' >
                  <img src={whtas} className='logo_whts' alt='logo'/>
                 <a href='https://wa.me/5546999704814?text=Ol%C3%A1+gostaria+de+um+or%C3%A7amento%2C+Vim+atrav%C3%A9s+do+site.'> <span>Solicite seu orçamento</span> </a>
              </div>
         </div>
             <img src={teste}alt="Imagem" className="imagem-div" />


        </div>
    )
}
