import React from 'react'
import { useState } from 'react'
import AccessoriesCard from './AccessoriesCard'
import './Accessories.css'

function Accessories() {

  let [accessories, setAccessories] = useState([])

  fetch("/products.json")
    .then(response => response.json())
    .then(data => setAccessories(data.accessories))

  
  return (
    <div>
      
      <h1>Pick your favourites</h1>

      <div id='acc-group'>

        {accessories.map((acc) => {

          return <AccessoriesCard 
                          key={acc.id}
                          id={acc.id}
                          image={acc.image}
                          model={acc.model}
                          price={acc.price}
                          category="accessories"
                          />
        })}
      </div>
    </div>
  )
}

export default Accessories
