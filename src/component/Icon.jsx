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
        <div className='test'>
          <div className='content'>
            <div className="header">
              <button type="button" className="close" onClick={closeModal}>&times;</button>
              <h4 className="modal-title">Settings</h4>
            </div>
            <DynamicComponent />
          </div>
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
