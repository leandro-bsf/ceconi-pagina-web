
import { useState } from 'react'
import logo from  '../../imagens/logo.png'
import './estilo.css'
import emailjs from '@emailjs/browser'
export  default function  Contato (){
    const [nome ,SetNome] = useState('');
    const [email, setEmail] = useState('');
    const[telefone , setTelefone] = useState('');
    const[mensagem , setMensagem] = useState('');

    function sendEamil(e){
        e.preventDefault();
        if(nome==='' || email === '' || telefone ==='' || mensagem === ''){
            alert("Preencha todos os campos");
            return;
        }
        const templateParams ={
            from_name: nome,
            message: mensagem,
            telefone: telefone,
            email, email

        }
        emailjs.send("service_yc3dju9","template_24ucnaw",templateParams, "y0FOa0jKjtBHfKjsK" )
        .then((response) => {
            console.log("EMAIL ENVIADO", response.status, response.text)
            SetNome('')
            setEmail('')
            setMensagem('')
            setTelefone('')
      
          }, (err) => {
            console.log("ERRO: ", err)
          })
      
        }
    return(
        <div className='Contato'>
        <div className='div_informacao'>
          <img src={logo} alt='logo' className='logo_contato' />
          <h3>Informações</h3>
           <div className='Dados_contato'>
           
            <span>  WhatsApp: +554699170-4814</span> <br/>
            <span>  Endereço: Dois Vizinhos - PR</span> <br/>
            <span>E-mail: cristianoceconi123@gmail.com    </span>
           </div>
           
         
         
         </div> 
         <form className='div_form' onSubmit={sendEamil}>
         <h2 className='titulo_form'>  Envie uma Mensagem</h2>
             <input placeholder='Nome' type='text' className='botao_contato'    onChange={(e)=> SetNome(e.target.value)}
             value={nome}></input>
             <input placeholder='E-mail' className='botao_contato'  type='email' 
			   onChange={(e)=> setEmail(e.target.value)}
                value={email}></input>

             <input placeholder='Telefone' className='botao_contato'  type='cel'
             
				     onChange={(e)=> setTelefone(e.target.value)}
                     value={telefone}></input>
             <input placeholder='Mensagem' className='botao_contato' type='text'		 
			    onChange={(e)=> setMensagem(e.target.value)}
                value={mensagem}></input>
             <input className="enviar" type="submit" value="Enviar" />
            
         </form>
     </div>
    )
}