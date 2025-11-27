import React, { useEffect, useState } from 'react'
import SmartGadgetsCard from './SmartGadgetsCard'
import './SmartGadgets.css'

function SmartGadgets() {

  let [gadgets, setGadgets] = useState([])

  useEffect(() => {
    fetch("/products.json")
      .then(response => response.json())
      .then(data => setGadgets(data.smartGadgets))
  },[])

  return (
    <div>
      <h1>Pick your favourites</h1>
      <div id='smartGadgets-group'>

        {gadgets.map((gadget) =>{
          return <SmartGadgetsCard
                      key={gadget.id}
                      id={gadget.id}
                      image={gadget.image}
                      model={gadget.model}
                      price={gadget.price}
                      category="smartGadgets" />
        })}
      </div>
    </div>
  )
}

export default SmartGadgets
