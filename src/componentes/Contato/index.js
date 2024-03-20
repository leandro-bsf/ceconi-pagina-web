
import logo from  '../../imagens/logo.png'
import './estilo.css'
export  default function  Contato (){
    return(
        <div className='Contato'>
        <div className='div_informacao'>
          <img src={logo} alt='logo' className='logo_contato' />
          <h3>Informações</h3>
           <div className='Dados_contato'>
           
            <span>  WhatsApp: +554699170-4814</span> <br/>
            <span>  Endereço: Dois Vizinhos - PR</span> <br/>
            <span>E-mail:  email@gmail.com    </span>
           </div>
           
         
         
         </div> 
         <div className='div_form'>
         <h2 className='titulo_form'>  Envie uma Mensagem</h2>
             <input placeholder='Nome' type='text' className='botao_contato'></input>
             <input placeholder='E-mail' className='botao_contato'  type='email'></input>
             <input placeholder='Telefone' className='botao_contato'  type='cel'></input>
             <input placeholder='Mensagem' className='botao_contato' type='text'></input>
             <button className='enviar'>Enviar</button>
         </div>
     </div>
    )
}
