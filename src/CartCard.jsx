import { useState } from 'react'
import { Link } from 'react-router-dom'

function CartCard(props) {

    return (
        <>
            <div className="cart-card-div">

                <Link to={`/${props.category}/${props.id}`}>
                    <img src={props.image} alt="not found" />
                </Link>
                <h2>{props.model}</h2>
                <Link style={{ color: "black" }} to={`/${props.category}/${props.id}`}>
                    <h4>view details</h4>
                </Link>
                <p><b>Price:</b>{props.price}</p>
                <div className="btn">
                    <button onClick={props.onDelete} id='cart-btn-1'>Remove from Cart</button>
                    <Link to={`/${props.category}/${props.id}`}>
                        <button id='cart-btn-2'>View Details</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CartCard


