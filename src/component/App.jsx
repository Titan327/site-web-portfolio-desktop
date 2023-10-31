import { createContext, useContext, useEffect, useState } from 'react';
import '../css/App.css';
import Icon from './Icon';

const storage = createContext('test');

function App() {

  
  
  var body = document.body;
  body.style.backgroundImage = 'url("Wallpaper.webp")';
  body.style.backgroundSize = 'cover';
  body.style.backgroundRepeat = 'no-repeat';
  body.style.backgroundAttachment = 'fixed';
  body.style.backgroundAttachment = 'center top';
  body.style.height = '100vh';
  body.style.margin = '0';

  

  return (
      <div className="container" style={{userSelect:'none'}}>

        <div className="row">

          <div className="col-sm">
            <Icon imgLink = {"icons/terminal.svg"} dispName={"Terminal"} compoName={"Terminal"}/>
          </div>

          <div className="col-sm">
            <Icon imgLink={"icons/pdf.svg"} dispName={"CV"} compoName={"CV"}/>
          </div>

          <div className="col-sm">

          <Icon imgLink={"icons/pdf.svg"} dispName={"Test"} compoName={"Notepad"}/>
            
          </div>

          <div className="col-sm">
            
          </div>

          <div className="col-sm">
            
          </div>

          <div className="col-sm">
            
          </div>

          <div className="col-sm">
            
          </div>

        </div>

      </div>
  );
}

export default App;
