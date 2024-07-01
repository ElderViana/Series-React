import './App.css';
import Nojinho from './img/nojinho.png';
import Raiva from './img/raiva.png';
import Alegria from './img/alegria.png';
import Medo from './img/medo.png';
import Tristeza from './img/tristeza.png';
import Tedio from './img/tedio.png';
import Vergonha from './img/vergonha.png';
import Inveja from './img/inveja.png';
import Ansiedade from './img/ansiedade.png';
import CatalagoItens from './CatalagoItens';

import React, {useState} from 'react';

import { faFaceSadCry as tristezaSolid } from '@fortawesome/free-solid-svg-icons';
import { faFaceSadCry as tristezaRegular } from '@fortawesome/free-regular-svg-icons';

import { faFaceLaughBeam as alefriaSolid } from '@fortawesome/free-solid-svg-icons';
import { faFaceLaughBeam as alegriaRegular } from '@fortawesome/free-regular-svg-icons';

import { faFaceGrinStars as invejaSolid } from '@fortawesome/free-solid-svg-icons';
import { faFaceGrinStars as invejaRegular } from '@fortawesome/free-regular-svg-icons';

import { faFaceFrown as medoSolid } from '@fortawesome/free-solid-svg-icons';
import { faFaceFrown as medoRegular } from '@fortawesome/free-regular-svg-icons';

import { faFaceDizzy as ansiedadeSolid } from '@fortawesome/free-solid-svg-icons';
import { faFaceDizzy as ansiedadeRegular } from '@fortawesome/free-regular-svg-icons';

import { faFaceMehBlank as vergonhaSolid } from '@fortawesome/free-solid-svg-icons';
import { faFaceMehBlank as vergonhaRegular } from '@fortawesome/free-regular-svg-icons';

import { faFaceAngry as raivaSolid } from '@fortawesome/free-solid-svg-icons';
import { faFaceAngry as raivaRegular } from '@fortawesome/free-regular-svg-icons';

import { faFaceGrin as nojinhoSolid } from '@fortawesome/free-solid-svg-icons';
import { faFaceGrin as nojinhoRegular } from '@fortawesome/free-regular-svg-icons';

import { faFaceTired as tedioSolid } from '@fortawesome/free-solid-svg-icons';
import { faFaceTired as tedioRegular } from '@fortawesome/free-regular-svg-icons';



function App() {

  const emocoes = [
    { nome: 'Nojinho', imagem: Nojinho, iconSolid: nojinhoSolid, iconRegular: nojinhoRegular},
    { nome: 'Raiva', imagem: Raiva, iconSolid: raivaSolid, iconRegular: raivaRegular },
    { nome: 'Alegria', imagem: Alegria, iconSolid: alefriaSolid, iconRegular: alegriaRegular },
    { nome: 'Medo', imagem: Medo, iconSolid: medoSolid, iconRegular: medoRegular },
    { nome: 'Tristeza', imagem: Tristeza, iconSolid: tristezaSolid, iconRegular: tristezaRegular},
    { nome: 'Tédio', imagem: Tedio, iconSolid: tedioSolid, iconRegular: tedioRegular },
    { nome: 'Vergonha', imagem: Vergonha, iconSolid: vergonhaSolid, iconRegular: vergonhaRegular },
    { nome: 'Inveja', imagem: Inveja, iconSolid: invejaSolid, iconRegular: invejaRegular },
    { nome: 'Ansiedade', imagem: Ansiedade, iconSolid: ansiedadeSolid, iconRegular: ansiedadeRegular }
  ];

  return (
    <>
    
      <CatalagoItens 
        titulo="Como você está se sentindo?"
        
        emocoes={emocoes}
      />
    </>
  )
}

export default App
