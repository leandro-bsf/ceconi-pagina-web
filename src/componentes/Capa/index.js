
import teste  from  '../../imagens/caminhao_banner.png'
import whtas from '../../imagens/whatsapp.png'
import './estilo.css'
export default function Capa(){
    return(
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
    )
}
