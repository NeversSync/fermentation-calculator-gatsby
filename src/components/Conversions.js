import React, {useState} from 'react'


export default function Conversion(props) {
    console.log('props', props)
    let saltAmount = props.selectedFerment*props.amount

    console.log('selectedFerment conversion', props.selectedFerment)


    return (
        <div className="ferment">
        <div className="first-select">
           <input className="ferment-input" type="number" value={props.amount} onChange={props.handleChange}/>

           {/* {props.ferments.label === 'Bell Peppers' ? (<input className="ferment-input" type="number" value={props.amount} onChange={props.handleChange}/>) : null} */}

            <p> kg of </p>
            <select
                value={props.selectedFerment}
                onChange={props.onChangeFerment}>
            {props.ferments.map((option, index) => (
                <option key={index} value={props.selectedFerment.label === option.label ? (props.selectedFerment.value * 1000).toFixed(1) : (option.value * 1000).toFixed(1)}>
                    {props.selectedFerment.label === option.label ? props.selectedFerment.label : option.label}</option>
                ))}
            </select>
           </div>
           <p className="equals">is</p>
           <p> <span>{saltAmount} </span>grams of salt</p>

        </div>
    )
}

{/* <select value={console.log(`selected ${props.selectedFerment}`)} onChange={props.onChangeFerment}></select> */}
