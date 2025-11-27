import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import './ProductDetails.css'
import './Mobiles/Mobile.css'

function ProductDetails() {

  const [details, setDetails] = useState(
    //   {
    //   "id": "0",
    //   "image": null,
    //   "model": "",
    //   "spec": "",
    //   "price": ""
    // }
    []
  )

  const { id, category } = useParams()

  useEffect(() => {
    if (!id || !category) return;
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        const categoryData = data[category]
        if (categoryData) {
          const model = categoryData.find(item => item.id == id)
          if (model) {
            setDetails(model)
          }
        }
      })
  }, [id, category])

  const navigate = useNavigate();

  function buyNow() {
    navigate("/buynow")
  }

  return (
    <div id='prouctDetails'>
      <img src={details.image} alt="not found" />
      <div id='productInfo'>
        <h1>{details.model}</h1>
        <div>
          {details?.spec?.map((lines, key) =>
            <p key={key}>{lines}</p>
          )}
        </div>
        <h1>{details.price}</h1>
        <div className='btn'>
          <button onClick={buyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
