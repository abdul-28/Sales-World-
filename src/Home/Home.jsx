import './HomeCard.css'
import React, { useEffect, useState } from 'react'
import ProductCart from './HomeCard'
import { Link } from 'react-router-dom'
import './Carousal.css'

function Home() {

    let [products, setProducts] = useState([]);
    useEffect(() => {
    fetch("/products.json")
    .then(response => response.json())
    .then(datas => setProducts(datas.data))
},[])
    // console.log(products)

  return (
    <div>

      <div className="carousal">
       
        <div className="group">
            <div className='element'><img src="../Dummy/assets/HomePage/img1.png"  alt="" /></div>
            <div className='element'><img src="../Dummy/assets/HomePage/img2.png" alt="" /></div>
            <div className='element'><img src="../Dummy/assets/HomePage/img3.png" alt="" /></div>
            <div className='element'><img src="../Dummy/assets/HomePage/img4.png" alt="" /></div>
            <div className='element'><img src="../Dummy/assets/HomePage/img5.png" alt="" /></div>
            <div className='element'><img src="../Dummy/assets/HomePage/img6.png" alt="" /></div>
            <div className='element'><img src="../Dummy/assets/HomePage/img7.webp" alt="" /></div>
            <div className='element'><img src="../Dummy/assets/HomePage/img8.png" alt="" /></div>
        </div>
       
        <div aria-hidden className="group">
            <div className='element'><img src="../Dummy/assets/HomePage/img1.png"  alt="" /></div>
            <div className='element'><img src="../Dummy/assets/HomePage/img2.png" alt="" /></div>
            <div className='element'><img src="../Dummy/assets/HomePage/img3.png" alt="" /></div>
            <div className='element'><img src="../Dummy/assets/HomePage/img4.png" alt="" /></div>
            <div className='element'><img src="../Dummy/assets/HomePage/img5.png" alt="" /></div>
            <div className='element'><img src="../Dummy/assets/HomePage/img6.png" alt="" /></div>
            <div className='element'><img src="../Dummy/assets/HomePage/img7.webp" alt="" /></div>
            <div className='element'><img src="../Dummy/assets/HomePage/img8.png" alt="" /></div>
        </div>

      </div>

      <div id='products-group'>
        {products.map((product) => 
        
        <Link key = {product.id} to={product.category} style={{textDecoration: "none" , color: "black"}}>
             <ProductCart 
                          id={product.id}
                          category={product.category}
                          title = {product.title}
                          image = {product.image} />
        </Link>
        )}
      </div>

    </div>
  )
}

export default Home
