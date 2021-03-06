import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../components/App.css';
import Conversions from '../components/Conversions';
import Salinity from '../components/Salinity';
import React, { useEffect, useState } from 'react'



export default function App() {

  // const [fermentationOptions, setFermentationOptions] = useState([])
  const [ferment, setFerment] = useState()
  const [conversion, setConversion] = useState()
  const [amount, setAmount] = useState(1)
  const [salinity, setSalinity] = useState()


  const ferments = [
    {label: "Kimchi", value: .02},
     {label: "Sauerkraut", value: .02},
     {label: "Bell Peppers", value: .035},
     {label: "Onions", value: .035},
     {label: "Cucumbers", value: .035},
     {label: "Pepper", value: .05},
     {label: "Cauliflower", value: .02},
    {label: "Carrots", value: .02},
     {label: "Salsa", value: .02},
     {label: "Green Beans", value: .02},
     {label: "Sweetest Miso", value: .06},
     {label: "Sweet Miso", value: .045},
     {label: "Mellow Miso", value: .1},
     {label: "Medium Miso", value: .12},
     {label: "Salty Miso", value: .16}
]



useEffect(() => {
      // setFermentationOptions([data, ...salinity])
      const firstFerment =ferments[0]
      setFerment(firstFerment)
      setSalinity(firstFerment.value)      
    }, [])
    //does this need to change everytime a new ferment is selected?
    

  function handleAmountChange(e) {
    setAmount(e.target.value)
  }
console.log(amount)
  return (
    <>
    <title>Fermentation Calculator</title>
   <Conversions
        ferments={ferments}
        selectedFerment={ferment}
        onChangeFerment={e => setFerment(e.target.value)} //e.target.value = whatever the value of our select option 
        onChangeSalinity={e => setSalinity(e.target.value * amount)} 
        amount={amount}
        onChangeAmount={handleAmountChange}
        salinity={salinity}
        
   />   
   </>
  );
}

