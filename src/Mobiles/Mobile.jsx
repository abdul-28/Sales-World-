import { useEffect, useState } from 'react'
import './Mobile.css'
import MobileCard from './MobileCard';


function Mobile() {

  let [mobiles, setMobiles] = useState([]);

  
  fetch("./products.json")
    .then(response => response.json())
    .then(data => setMobiles(data.mobiles))

  
  return (
    <div>
      <h1>Pick your favourites</h1>
      <div id='mobile-group'>

        {mobiles.map((mobile) => 
        
        <MobileCard 
                    key={mobile.id}
                    id={mobile.id}
                    image={mobile.image}
                    model={mobile.model}
                    price={mobile.price}
                    category="mobiles"
                     />
        )}
      </div>       
    </div>
  )
}

export default Mobile