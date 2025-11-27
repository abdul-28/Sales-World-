import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    
    <>
        <div id='footer'>
            <h2>Products List</h2>
            
            <div id='bottom'>

              <div id='bottom1'>
                  <Link className='link' to='mobiles'>Mobile</Link>
                  <Link className='link' to='laptops'>Laptops</Link>
                  <Link className='link' to='accessories'>Accessories</Link>
                  <Link className='link' to='shoes'>Shoes</Link>   
              </div>

              <div id='bottom2'>
                  <Link className='link' to='mensClothings'>Mens Clothing</Link>
                  <Link className='link' to='smartGadgets'>Smart Gadgets</Link>
                  <Link className='link' to='homeAppliances'>Home Appliances</Link>
                  <Link className='link' to='furnitures'>Furnitures</Link> 
              </div>

              <div id='bottom3'>
                <a href="about:blank" target='_blank' alt="">
                  <img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="not found" />
                </a>
                <a href="about:blank" target='_blank' alt="">
                  <img src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" alt="not found" />
                </a>
                <a href="about:blank" target='_blank' alt="" >
                  <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="not found" />
                </a>
                <a href="about:blank" target='_blank' alt="">
                <img src="https://cdn-icons-png.flaticon.com/128/2111/2111646.png" alt="not found" />
                </a> 
              </div>
            </div>
    
            <div id='contact'>
              <h2>Get in touch with us</h2>
              <p>salesworldyourchoice@gmail.com</p>
              <p>+91 12345 67890</p>
              <p>Chennai, TamilNadu</p>
              <p style={{textAlign:"center"}}><b>© SalesWorld@2025. All rights reserved</b></p>
            </div>
        </div>

    </>
  )
}

export default Footer
