import React, {useState} from 'react'


export default function Conversion(props) { 

    
      console.log(props.selectedFerment)
      console.log(props.amount)
      console.log(props.saltAmount)
      
// let saltAmount;
//     !saltAmount && props.selectedFerment !== 0
//         ?
//     saltAmount = props.selectedFerment * 1000
//         :
//     props.selectedFerment*props.amount ;
    
let saltAmount = props.selectedFerment*props.amount 
// : saltAmount = props.ferments[0].value; 
// !== 0 ? props.selectedFerment*props.amount : 0;

// if(!saltAmount && props.selectedFerment.value) {
//     saltAmount = props.selectedFerment.value * 1000;
//}

    // const {
    //     currencyOptions
    // } = props    
    return (
        <div className="ferment">
        <div className="first-select">
           <input className="ferment-input" type="number" value={props.amount} onChange={props.handleChange}/>
            <p> kg of </p>
           <select 
      value={props.selectedFerment}
      onChange={props.onChangeFerment}>
           {props.ferments.map((option, index) => (
               <option key={option.label} value ={(option.value * 1000).toFixed(1)}>{option.label}</option>
               ))}  
           </select>
           </div>
           <p className="equals">is</p>
           <p> <span>{saltAmount || props.ferments[0].value*1000} </span>grams of salt</p>
           {/* <input className="salinity-input" type="number" value={props.selectedFerment*props.amount} onChange={props.onChangeSalinity}/>  */}
               
           
        </div>
    )
}

{/* <select value={console.log(`selected ${props.selectedFerment}`)} onChange={props.onChangeFerment}></select> */}