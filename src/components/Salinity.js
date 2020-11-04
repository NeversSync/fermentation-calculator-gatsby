import React from 'react'

export default function Salinity(props) {
    // const {
    //     currencyOptions
    // } = props
    console.log(props.selectedFerment)
    return (
        <>
        <input className="salinity-input" type="number" value={props.selectedFerment} onChange={props.onChangeSalinity}/> <p>grams of salt</p>
        </>
    )
}