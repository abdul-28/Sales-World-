import React from 'react'
import { Link } from 'react-router-dom'
import './SearchProductCard.css'

function SearchProductCard(props) {

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
        <div className='search-card'>
            <img src={props.image} alt='image not found' />
            <h2>{props.model}</h2>
            <div className='search-card-actions'>
                <Link to={`/${props.category}/${props.id}`}>
                    <button className='view-details-btn'>View Details</button>
                </Link>
                <button className='add-to-cart-btn' onClick={() => addToCart()}>Add To Cart</button>
            </div>
        </div>
    )
}

export default SearchProductCard
