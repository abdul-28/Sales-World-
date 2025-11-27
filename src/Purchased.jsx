import React, { useEffect } from 'react'
import './Purchased.css'
import { useNavigate } from 'react-router-dom'

function Purchased() {

  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {

      navigate("/")
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div id='last'>
      <h3>🎉Items successfully purchased🎉✅</h3>
      <h4>Thank you for purchasing the item🙌</h4>
      <h5>Redirecting you to the home page...🏠</h5>
    </div>
  )
}

export default Purchased
