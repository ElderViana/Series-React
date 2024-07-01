import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ItemFilme = ({titulo, imagem, iconSolid, iconRegular}) => {
  const [fav, setFav] = useState();
  const [hover, setHover] = useState();

  const handleFavClick = () => {
    const newFav = !fav;
    setFav(newFav);
  }

  const handleHoverMouse = () => {
    const newHover = !hover;
    setHover(newHover);
  }

  return(
    
      <div className='card-emocao'>
        <div className='titulo-card'>

      
     
          {
            fav == true 
            ? <FontAwesomeIcon icon={iconSolid} size="2x" color='yellow' className='fa-star' onClick={handleFavClick}/>
            : <FontAwesomeIcon icon={iconRegular} size="2x" className='fa-star' onClick={handleFavClick}/>
          }
          <img src={imagem} alt={titulo}/>
          
        </div>

        <h3 onMouseOver={handleHoverMouse} >{titulo}  </h3>
        {/* //onMouseOver */}
        
 
      
      </div>
  )
}


export default ItemFilme;