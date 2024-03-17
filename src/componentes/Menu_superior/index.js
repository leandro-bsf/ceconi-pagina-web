import React, {useState} from 'react';
import { FiLogOut } from 'react-icons/fi';
import './styles.css';
import logo from   '../../imagens/logo.png'
const Menu_Superior = () => {

const [classOn, setClassOn] = useState(false);
      
  return (
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
                <a href="/">SERVIÇOS</a>
              </li>
              <li>
                <a href="/">SOBRE</a>
              </li>
              <li>
                <a href="/">GALERIA</a>
              </li>
          
              <li>
                <a href="/">CONTATO</a>  
              </li>
             
            </ul>
            
          </nav>

          </div>
        </div>

      </header>

      )
    }
    
export default Menu_Superior;