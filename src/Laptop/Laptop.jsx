import { useState } from "react"
import LaptopCard from "./LaptopCard"
import './Laptop.css'

function Laptop() {


  let [laptop, setLaptop] = useState([])

  fetch("/products.json")
    .then(response => response.json())
    .then(data => setLaptop(data.laptops))

  return (
    <>
      <h1>Pick your favourites</h1>

      <div id="laptop-group">
      {laptop.map((laptop) => {
        return <LaptopCard
                key={laptop.id}
                id={laptop.id}
                image={laptop.image}
                model={laptop.model}
                price={laptop.price}
                category="laptops"
                />
      })}
      </div>
    </>
  )
}

export default Laptop
