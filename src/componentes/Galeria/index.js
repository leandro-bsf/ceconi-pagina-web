
import './estilo.css';
import React, { useState } from 'react';
import imagem1 from  '../../imagens/servicos_realizados/2.jpeg'
import imagem2 from  '../../imagens/servicos_realizados/3.jpeg'
import imagem3 from  '../../imagens/servicos_realizados/4.jpeg'
import imagem4 from  '../../imagens/servicos_realizados/5.jpeg'
import imagem5 from  '../../imagens/servicos_realizados/6.jpeg'
import  imagem6 from  '../../imagens/servicos_realizados/7.jpeg'
import  imagem7 from  '../../imagens/servicos_realizados/8.jpeg'
import  imagem8 from  '../../imagens/servicos_realizados/9.jpeg'
import  imagem9 from  '../../imagens/servicos_realizados/10.jpeg'
import  imagem10 from  '../../imagens/servicos_realizados/1.jpeg'

function App() {

   const  images = [
    imagem1,
    imagem2,
    imagem3,
    imagem4,
    imagem5,
    imagem6,
    imagem7,
    imagem8,
    imagem9,
    imagem10
   ];
   const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };
  return (
    <container className="Galeria">
      <div className='Titulo_galeria'>Galeria</div>
      <div className="image-gallery">
        
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt='imagens'
          
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="modal" onClick={handleCloseModal}>
          <span className="arrow left" onClick={(e) => {e.stopPropagation(); handlePrevImage()}}>&#9664;</span>
          <img src={images[selectedImageIndex]}  alt='imagens' />
          <span className="arrow right" onClick={(e) => {e.stopPropagation(); handleNextImage()}}>&#9654;</span>
        </div>
      )}
   
    </container>
    
  );
}

export default App;