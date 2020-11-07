import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../components/App.css';
import Conversions from '../components/Conversions';
import Salinity from '../components/Salinity';
import React, { useEffect, useState } from 'react'
import Searchbar from "../components/SearchBar";
import Miso from '../components/Miso'



export default function App() {


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
  ]
  // const [fermentationOptions, setFermentationOptions] = useState([])
  // const [ferment, setFerment] = useState(ferments[0].value * 1000)

  const [selectedFerment, setSelectedFerment] = useState(ferments[0])
  console.log('selectedFerment index', selectedFerment)

  const [amount, setAmount] = useState(1)

  const [salinity, setSalinity] = useState(ferments[0].value * 1000)

    function handleSaltChange(e) {
        setAmount(e.target.value)
        //doesn't change
        setSalinity(ferment * amount)
      }

      function handleFermentChange(e) {
        console.log('selectedFerm before', selectedFerment)

        setSelectedFerment(e.target.value)

        console.log('selectedFerm after', selectedFerment)
      }

console.log(salinity)
  return (
    <>
    <title>Fermentation Calculator</title>
    {/* <Searchbar /> */}
   <Conversions

        ferments={ferments}
        selectedFerment={selectedFerment}
        onChangeFerment={handleFermentChange} //e.target.value = whatever the value of our select option
        //doesn't work
        onChangeSalinity={e => setSalinity(e.target.value * amount)}
        handleChange={handleSaltChange}
        amount={amount}
        salinity={salinity}
        />

   </>
  );
}



// useEffect(() => {
//       // setFermentationOptions([data, ...salinity])
//       const firstFerment =ferments[0]
//       setFerment(ferments)
//       setSelectedFerment(firstFerment)
//       setSalinity(firstFerment.value)
//     }, [])
    //does this need to change everytime a new ferment is selected?

    // const onFermentSelect = ferment => {
    //   setSelectedFerment(ferment)
    // }
