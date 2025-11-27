import React, { useState } from 'react'
import ShoesCard from './ShoesCard'
import './Shoes.css'

function Shoes() {

  let [shoes, setShoes] = useState([])

  fetch("/products.json")
    .then(response => response.json())
    .then(data => setShoes(data.shoes))


  return (
    <div>
      <h1>Pick your favourites</h1>
      <div id='shoes-group'>

        {shoes.map((shoe) =>{
          return <ShoesCard 
                      key={shoe.id}
                      id={shoe.id}
                      image={shoe.image}
                      model={shoe.model}
                      price={shoe.price}
                      category="shoes"
                      />
        })}
      </div>  
    </div>
  )
}

export default Shoes
