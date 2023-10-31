import React, { useState,useEffect, useContext } from 'react';
import {storageContext} from "../Storage.jsx"


function Notepad() {

  const data = useContext(storageContext);

  return (
    <div className='contnent'>

      <pre>{data["content"][0]["content"]}</pre>
      

    </div>
  );
}

export default Notepad;
