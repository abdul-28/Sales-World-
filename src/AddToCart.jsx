import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartCard from "./CartCard";
import './CardCart.css'


function AddToCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCartItems());
  }, []);

  const getCartItems = () => {
    const cartJson = localStorage.getItem('cart');
    return cartJson ? JSON.parse(cartJson) : [];
  };
  function removeItem(index) {
    if (confirm("Do you want to remove this item from your cart?")) {
      const updatedCart = cart.filter((_, i) => i !== index);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart))
    } else return;
  }
  return (
    <>
      <div className="cart-page">
        {/* <h2>Cart Page</h2> */}
        <div className="products">
          {
            cart.length === 0 ? (
              <div id="empty">
                <h2 style={{ textAlign: 'center' }}>Cart is empty ☹️</h2>
                <Link to='/' id="empty">Shop Now</Link>
              </div>
            ) : (
              cart.map((product, index) => {
                return <CartCard
                  id={product.id}
                  key={index}
                  model={product.model}
                  image={product.image}
                  price={product.price}
                  spec={product.spec}
                  category={product.category}
                  onDelete={() => { removeItem(index) }} />
              })
            )
          }
        </div>
      </div>
    </>
  )
}

export default AddToCart