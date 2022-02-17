import * as React from 'react';

import '../Data Processing/Select.css'

export default function SelectModel({options,sendModelValue}) {
  

    const handleChange=(event)=>{
        sendModelValue(event.target.value)
    }
  return (
   
    <select onChange={(event)=>handleChange(event)} defaultValue={options[0]} className='select' id="country" name="country">
      {options.map((value,index)=>(
         <option key={index} value={value}>{value}</option>
      ))}
      
    </select> 
    
  );
}
