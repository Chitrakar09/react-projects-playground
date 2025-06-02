import Button from "./Components/buttons"
import React, { useState } from 'react';

function App() {
const [color,setColor]=useState('#228B22');

  return (
    <>
     <div className="container min-h-full min-w-full flex justify-center items-end" style={{backgroundColor:color}}>
      <div className="holder bg-amber-100 relative bottom-10 min-w-3/5 p-3 rounded-2xl flex justify-evenly items-center">
        <Button color="Forest Green" code="#228B22" setColor={setColor}></Button>
        <Button color="Dark Olive Green" code="#556B2F" setColor={setColor}></Button>
        <Button color="Saddle Brown" code="#8B4513" setColor={setColor}></Button>
        <Button color="Sea Green" code="#2E8B57" setColor={setColor}></Button>
        <Button color="Dark Slate Gray" code="#2F4F4F" setColor={setColor}></Button>
        <Button color="Olive Drab" code="#6B8E23" setColor={setColor}></Button>
        <Button color="Midnight Green" code="#004953" setColor={setColor}></Button>
      </div>
     </div>
    </>
  )
}

export default App
