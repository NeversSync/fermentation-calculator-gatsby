import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import miso from '../pages/miso'

export default function Miso() {
  
  const misos = [
      {id: 1, label: "Sweetest Miso", salt: .045, legume: 1, koji: 3, time: '2-3 weeks months'},
      {id: 2,label: "Sweet Miso", salt: .06, legume: 1, koji: 3, time: '2-3 months'},
      {id: 3, label: "Mellow Miso", salt: .1, legume: 1, koji: 2, time: '6 months'},
      {id: 4, label: "Medium Miso", salt: .12, legume: 1, koji: 1, time: '12 months'},
      {id: 5, label: "Salty Miso", salt: .16, legume: 1, koji: .5, time: '24 months'}
  ]

            
  const [value, setValue] = useState(0)
  const {salt, legume, koji } = misos[value]
  const [ratio, setRatio] = useState({ k: koji*100, l: legume*100, s: (koji + legume) * salt*100 })
        

  const updateLegume= ev => setRatio({
      l: ev.target.value,
      k: (+ev.target.value * koji).toFixed(1),
      s: (((+ratio.l)+(+ratio.k)) * salt).toFixed(1)
      
  })
  
  const updateKoji = ev => setRatio({
      l: (+ev.target.value/koji).toFixed(1),
      k: ev.target.value,
      s: (((+ratio.l)+(+ratio.k)) * salt).toFixed(1)
      
  })

    return(
      <div id="container">

             {/* btn container */}
      <div className='btn-container'>
        {misos.map((miso, index) => {
          return (
            <button
              key={miso.id}
              onClick={() => {setValue(index)
                setRatio({k: miso.koji*100, l: miso.legume*100, s: (miso.koji+miso.legume) * (miso.salt * 100)})}
              }
              className={`miso-btn ${index === value && 'active-btn'}`}
            // onChange={setRatio({k: miso.koji, l: miso.legume, s: miso.salt})}
            >
              {miso.label}
            </button>
          )
        })}
      </div>
            
        <div id="koji">
        <p>for</p>
          <input
              type = "number" 
              value = {ratio.k} 
              onChange = {updateKoji}>
            </input>
            <p>g of koji you need</p>
  
            </div>
        <div id="legume">
          <input
              type = "number"
              value = {ratio.l}
              onChange = {updateLegume} >
            </input>
            <p>g of legumes and</p>
        </div>
        <div id="salt">
            <p> {ratio.s} g of salt</p>
        </div>
      </div>
    )
  }
