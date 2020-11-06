import React, {useEffect, useState} from 'react'
import Miso from '../components/Miso'

function miso(props) {
    const misos = [
        {id: 1, label: "Sweetest Miso", salt: .045, legume: 1, koji: 3, time: '2-3 weeks months'},
        {id: 2,label: "Sweet Miso", salt: .06, legume: 1, koji: 3, time: '2-3 months'},
        {id: 3, label: "Mellow Miso", salt: .1, legume: 1, koji: 2, time: '6 months'},
        {id: 4, label: "Medium Miso", salt: .12, legume: 1, koji: 1, time: '12 months'},
        {id: 5, label: "Salty Miso", salt: .16, legume: 1, koji: .5, time: '24 months'}
    ]
    
    
    return (
        <>
        <Miso/>

        </>
    )
}

export default miso

