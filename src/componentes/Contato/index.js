
import logo from  '../../imagens/logo.png'
import './estilo.css'
export  default function  Contato (){
    return(
        <div className='Contato'>
        <div className='div_informacao'>
          <img src={logo} alt='logo' className='logo_contato' />
           <h3>Informações</h3>
           <div className='Dados_contato'>
           <h4>WhatsApp:</h4>   <span> 4699170-4814</span>
           </div>
             <div className='Dados_contato' >
             <h4>Endereço:</h4>   <span>  Dois Vizinhos - PR</span>
             </div>
           
            <div className='Dados_contato' >
            <h4>E-mail:</h4>  <span> email@gmail.com    </span>
            </div>
         
         
         </div> 
         <div className='div_form'>
            <h2 className='titulo_form'>  Envie uma Mensagem</h2>
             <input placeholder='Nome' type='text'></input>
             <input placeholder='E-mail' type='email'></input>
             <input placeholder='Telefone' type='cel'></input>
             <input placeholder='Mensagem' type='text'></input>
             <button>Enviar</button>
         </div>
     </div>
    )
}
