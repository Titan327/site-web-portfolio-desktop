import React, { useEffect, useState } from 'react';
import '../css/Icon.css';
import Terminal from './applications/Terminal';

function Icon({ imgLink, dispName, compoName }) {
  const [showModal, setShowModal] = useState('');
  const [DynamicComponent, setDynamicComponent] = useState(null);
  const [componentName, setComponentName] = useState(compoName);

  useEffect(() => {
    // Dynamically import the component based on the value of componentName.
    import(`./applications/${componentName}`).then((module) => {
      const ImportedComponent = module.default;
      setDynamicComponent(() => ImportedComponent);
    });
  }, [componentName]);

  const openModal = () => {
    if (DynamicComponent) {
      setShowModal(

        
          <div className='fenetre-content'>
            
            <div className='fenetre-header'>
              
              <div className='fenetre-header-bouton btn-autre'>
                <img src="icons/fullscreen.svg" alt="reduit" />
              </div>

              <div className='fenetre-header-bouton' id='close'>
                <img src="icons/close.svg" alt="croix" onClick={closeModal}/>
              </div>
              
            </div>


            <DynamicComponent />
          </div>
        

      );
    }
  };

  const closeModal = () => {
    setShowModal('');
  };

  return (
    <div className='icon-global'>
      <img src={imgLink} alt="test" className='icon-image' onClick={openModal} />
      <p className='text'>{dispName}</p>
      {showModal}
    </div>
  );
}

export default Icon;
