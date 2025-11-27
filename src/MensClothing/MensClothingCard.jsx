import React from 'react'
import { Link } from 'react-router-dom'

function MensClothingCard(props) {

  function addToCart() {
    let cart = localStorage.getItem("cart");
    if (!cart) {
      cart = JSON.stringify([]);
      localStorage.setItem("cart", cart);
    }
    let cartList = JSON.parse(cart);

    const isPresent = cartList.some((item) => item.id === props.id && item.category === props.category);

    if (isPresent) {
      alert("Item is already in the carts list");
    } else {
      cartList.push(props);
      localStorage.setItem("cart", JSON.stringify(cartList));
      alert("Item added to cart!!");
    }
  }

  return (
    <div id='clothesCard'>
      <Link to={`${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <h2>{props.model}</h2>
      <p>{props.price}</p>
      <div className='btn'>
        <Link to={`${props.id}`}>
          <button className='vd'>view details</button>
        </Link>
        <button className='atc' onClick={() => addToCart()}>Add To Cart</button>
      </div>
    </div>
  )
}

export default MensClothingCard
