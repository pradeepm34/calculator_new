import React from 'react';

const Buttons = (props)=>{
    return(
    <div className = "button">
         <button value="(" onClick = {props.click}>(</button>

         <button value=")" onClick = {props.click}>)</button>
         <button value="CE" onClick = {props.click}>CE</button >
         <button value="%" onClick = {props.click} >%</button >
     
         <button value="7" onClick = {props.click}>7</button >
         <button value="8" onClick = {props.click}>8</button >
         <button value="9" onClick = {props.click} >9</button >
         <button value="+" onClick = {props.click}>+</button >
        
         
         <button value="4" onClick = {props.click}>4</button >
         <button value="5" onClick = {props.click}>5</button >
         <button value="6"  onClick = {props.click}>6</button >
         <button value="*" onClick = {props.click}>*</button >
     
         <button value="1" onClick = {props.click}>1</button >
         <button value="2" onClick = {props.click}>2</button >
         <button value="3" onClick = {props.click}>3</button >
         <button value="-" onClick = {props.click}>-</button >
       
         <button value="0" onClick = {props.click}>0</button >
         <button value="."  onClick = {props.click}>.</button >
         <button value="="  onClick = {props.click}>=</button >
         <button value="Clear" onClick = {props.click} >Clear</button >
        
    </div>
      )
};


export default Buttons;