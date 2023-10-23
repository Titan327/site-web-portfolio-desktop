import React, { useEffect, useState } from 'react';
import Icon from './Icon';
import Terminal from './applications/Terminal';


function Window({ closeModal,compoName }) {
  const [showInside, setShowInside] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isClicked, setIsClicked] = useState(false);
  const [initialMousePosition, setInitialMousePosition] = useState({ x: 0, y: 0 });


  const [dynamicComponent, setDynamicComponent] = useState(null);

  useEffect(() => {

    import(`./applications/${compoName}`).then(module => {

      setDynamicComponent(React.createElement(module.default));
    });
  }, []);



  useEffect(() => {
    const handleMouseMove = (e) => {
    
      if (isClicked) {
        setPosition({
          x: position.x + (e.clientX - initialMousePosition.x),
          y: position.y + (e.clientY - initialMousePosition.y),
        });;
      }
    };

    const handleMouseUp = () => {
      setIsClicked(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    if (isClicked) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  }, [isClicked]);

  const handleMouseDown = (e) => {

    setInitialMousePosition({x:e.clientX,y:e.clientY});
    setIsClicked(true);
    
  };

  const fullSize = () => {

  }

  return (
    <div
      className='fenetre'
      style={{
        top: position.y + 'px',
        left: position.x + 'px',
        zIndex: '100',
        width: '600px',
        height: '400px',
    }}>

      <div
        className='fenetre-header'
        onMouseDown={handleMouseDown}
      >
        <div className='fenetre-header-bouton btn-autre'>
          <img src="icons/fullscreen.svg" alt="reduit" onClick={fullSize} />
        </div>
        <div className='fenetre-header-bouton' id='close'>
          <img src="icons/close.svg" alt="croix" onClick={closeModal} />
        </div>

      </div>
      
      {dynamicComponent}
      
    </div>
  );
}

export default Window;
