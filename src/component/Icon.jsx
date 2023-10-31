import React, { useEffect, useState, useRef } from 'react';
import '../css/Icon.css';
//import Terminal from './applications/Terminal';
import Window from './Window';

function Icon({ imgLink, dispName, compoName }) {
  const [showModal, setShowModal] = useState(false);


  const openModal = () => {

    setShowModal(true);
    
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <div className='icon-global'>
      <img src={imgLink} alt="test" className='icon-image' onClick={openModal} style={{width:"75px"}} />
      <p className='text'>{dispName}</p>
      {showModal && (<Window closeModal = {closeModal} compoName={compoName} />)}
    </div>
  );
}

export default Icon;
