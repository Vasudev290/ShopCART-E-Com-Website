import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();


  const handleCartClick = () => {
    setShowCart(!showCart);
    navigate('/cart-page'); // Navigate to CartPage
  };
  return (
    <header style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
      <h1>My Shop</h1>
      
      {/* Cart Icon with navigation */}
      <div style={{ marginLeft: 'auto', cursor: 'pointer' }} onClick={handleCartClick}>
        <FaCartArrowDown />
      </div>
    </header>
  )
}

export default Cart