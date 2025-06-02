import React from 'react';

function Button({color,code,setColor}) {
    return (
        <>
        <button className='p-1.5 rounded-xl text-amber-50' style={{backgroundColor: code}} onClick={()=>setColor(code)}>{color}</button>
        </>
      );
}

export default Button;