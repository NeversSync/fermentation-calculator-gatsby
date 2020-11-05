import React, { useEffect, useState } from 'react'

export default function Miso(props) {
      const [ratio, updateRatio] = React.useState({ k: 300, l: 100, s: 18 })
    
      const updateLegume= ev => updateRatio({
        l: ev.target.value,
        k: (+ev.target.value * 3).toFixed(1),
        s: (((+ratio.l)+(+ratio.k)) * .045).toFixed(1)
    
      })
      
      const updateKoji = ev => updateRatio({
        l: (+ev.target.value/3).toFixed(1),
        k: ev.target.value,
        s: (((+ratio.l)+(+ratio.k)) * .045).toFixed(1)
    
      })
      const updateSalt = ev => updateRatio({
        s: (ratio.l + ratio.k) * .045
      })
    
      console.log(ratio.l)
      console.log(ratio.k)
    
      return(
        <div id="container">
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





