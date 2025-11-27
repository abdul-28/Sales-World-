import React, { useEffect, useState } from 'react'
import './Furnitures.css'
import FurnituresCard from './FurnituresCard'

export default function Furnitures() {

  let [furnitures, setFurnitures] = useState([])

  useEffect(() =>{

    fetch("http://localhost:3000/furnitures")
      .then(response => response.json())
      .then(data => setFurnitures(data))
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
