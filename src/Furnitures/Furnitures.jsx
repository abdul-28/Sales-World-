import React, { useEffect, useState } from 'react'
import './Furnitures.css'
import FurnituresCard from './FurnituresCard'

export default function Furnitures() {

  let [furnitures, setFurnitures] = useState([])

  useEffect(() =>{

    fetch("/products.json")
      .then(response => response.json())
      .then(data => setFurnitures(data.furnitures))
  },[])

  return (
    <div>
      <h1>Pick your favourites</h1>

      <div id='furnitures-group'>
      {furnitures.map((furniture) => {
        
        return <FurnituresCard
                          key={furniture.id}
                          id={furniture.id}
                          image={furniture.image}
                          model={furniture.model}
                          price={furniture.price}
                          category="furnitures"/>
      })}  
      </div>  
    </div>
  )
}
