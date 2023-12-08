import React from 'react';
import './App.css';
import QRCode from 'react-qr-code';
import { useState } from 'react';

function App(){ 
  const [value,setValue]=useState('');
  const [color,setColor]=useState('black');
  const [size,setSize]=useState(100);
  const [submit,setSubmit]=useState(0);  

  function Reset(){
    setValue('');
    setColor('');
    setSize(0);
    setSubmit(0);
  }
  function Submit(){
    setSubmit(1);
  }
  function Qrvalue(value){
    setValue(value);
    setSubmit(0);
  }
  function Color(color){
    setColor(color);
    setSubmit(0);

  }
  function Size(size){
    setSize(size);
    setSubmit(0);

  }
  return(
    <div className='main'>
      <h1 className='title'>QR-CODE-GENERATOR</h1>
      <div className='inputs' >
        <input type='text' value={value} onChange={(e)=>Qrvalue(e.target.value) } placeholder='Enter a Value For QR'/>
        <input type='text' value={color} onChange={(e)=>Color(e.target.value)} placeholder='Enter The Color Of QR'/>
        <input type='number' value={size} onChange={(e)=>Size(e.target.value)}  placeholder='Enter Size Of QR'/>
        <div>
          <input type='submit' className='submit' onClick={Submit}/>
          <input type='reset' className='reset' onClick={Reset}/>
        </div>
        {submit===1 &&
          (<QRCode className='qrcode' title='QR CODE' value={value} bgColor='white' fgColor={color} size={size} />)
        }
        
          
          
        
      </div>
    </div>
  )

}
export default App;
