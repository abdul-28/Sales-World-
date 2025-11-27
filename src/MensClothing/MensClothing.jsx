import React, { useEffect, useState } from 'react'
import MensClothingCard from './MensClothingCard'
import './MensClothing.css'

function MensClothing() {

  let [mensCloth, setMensCloth] = useState([]);

  useEffect(() => {

    fetch("/products.json")
      .then(response => response.json())
      .then(data => setMensCloth(data.mensClothings))
  }, [])
  return (
    <div>
      <h1>Pick your favourites</h1>
      <div id='mensClothing-group'>

        {mensCloth.map((clothes) => {

          return <MensClothingCard
            key={clothes.id}
            id={clothes.id}
            image={clothes.image}
            model={clothes.model}
            price={clothes.price}
            category="mensClothings" />
        })}
      </div>
    </div>
  )
}

export default MensClothing
