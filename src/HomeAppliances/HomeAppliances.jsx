import React, { useEffect, useState } from 'react'
import HomeAppliancesCard from './HomeAppliancesCard'
import './HomeAppliances.css'

function HomeAppliances() {

  let [appliances, setAppliances] = useState([])

  useEffect(() => {
    fetch("/products.json")
      .then(response => response.json())
      .then(data => setAppliances(data.homeAppliances))

  }, [])
  return (
    <div>
      <h1>Pick your favourites</h1>
      <div id='appliances-group'>

        {appliances.map((appliance) =>{

          return <HomeAppliancesCard
                              key={appliance.id}
                              id={appliance.id}
                              image={appliance.image}
                              model={appliance.model}
                              price={appliance.price}
                              category="homeAppliances"
                              />
        })}
      </div>
    </div>
  )
}

export default HomeAppliances
