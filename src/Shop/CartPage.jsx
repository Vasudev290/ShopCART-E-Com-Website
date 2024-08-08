import React, { useEffect, useState } from 'react'
import PageHeader from '../Components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from "../assets/images/shop/del.png"
import CheckOutPage from './CheckOutPage';

const CartPage = () => {
  const [cartItems, setCartItem] = useState([])

  useEffect(() => {
    //Fetch cart item from Local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItem(storedCartItems)
  }, [])

  //calculate prices
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  }
  //handle quantity increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItem([...cartItems])

    //update loacl storage with new cart items
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }
  //handle quantity Decrese
  const handleDecrease = (item) => {
    if(item.quantity > 1) {
      item.quantity -= 1
      setCartItem([...cartItems]);

      //update loacl storage with new cart items
    localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  //handle item remove
  const handleRemove = (item) => {
    const updatedCart = cartItems.filter((cartItems) => cartItems.id  !== item.id);

    //Update new cart
    setCartItem(updatedCart)

    updateLocalStorage(updatedCart)
  }

  const updateLocalStorage = (cart) => {
   localStorage.setItem("cart", JSON.stringify(cart))
  }
  //cart subtotal

  const cartSubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0)

  //order total
  const orderTotal = cartSubtotal;

  return (
    <div>
    <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
    
    <div className="shop-cart padding-tb">
       <div className="container">
        <div className="section-wrapper">
          {/* Cart Top */}
          <div className="cart-top">
               <table>
                <thead>
                  <tr>
                    <th className='cat-product'>Product</th>
                    <th className='cat-price'>Price</th>
                    <th className='cat-quantity'>Quantity</th>
                    <th className='cat-toprice'>Total</th>
                    <th className='cat-edit'>Edit</th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                  {
                    cartItems.map((item, index) => (
                      <tr key={index}>
                         <td className='product-item cat-product'>
                           <div className='p-thumb'>
                            <Link to="/shop"><img src={item.img} alt="" /></Link>
                           </div>
                           <div className="p-content">
                            <Link to="/shop">{item.name}</Link>
                           </div>
                         </td>
                         <td className='cat-price'>{item.price}</td>
                         <td className='cat-quantity'>
                          <div className="cart-plus-minus">
                            <div className="dec qtybutton" onClick={() => handleDecrease(item)}>-</div>
                            <input type="text" className='cart-plus-minus-box' 
                            name='qtybutton' value={item.quantity} />
                            <div className="inc qtybutton" onClick={() => handleIncrease(item)}>+</div>
                          </div>
                         </td>
                         
                          <td className='cat-toprice'>{calculateTotalPrice(item)}</td>
                          <td className='cat-edit'>
                            <a href="#" onClick={() => handleRemove(item)}>
                              <img src={delImgUrl} alt=""/>
                            </a>
                          </td>
                        
                      </tr>
                    ))
                  }
                </tbody>
               </table>
          </div>
          {/* Cart Top Ends */}
          {/* Cart Bottom */}
          <div className="cart-bottom">
            {/* Checkout box */}
            <div className='cart-checkout-box'>
              <form className='coupon'> 
                   <input className='cart-page-input-text' type="text" name='coupon' id='coupon' 
                   placeholder='Coupon Code..!' />
                   <input type="submit" value="Apply Coupon" />
              </form>
              <form className='cart-checkout'>
                <input type="submit" value="Update Cart" />
                <div>
                  <CheckOutPage />
                </div>
              </form>
            </div>
            {/* CheckOut Box Ends */}

            {/* Shopping Box */}
            <div className='shiping-box'>
                 <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shipping</h3>
                      <div className="outline-select">
                       <select>
                        <option value="uk">United Kingdom (UK)</option>
                        <option value="us">United States (USA)</option>
                        <option value="bd">Bangladesh</option>
                        <option value="pak">Pakisthan</option>
                        <option value="ind">India</option>
                        <option value="np">Nepal</option>
                       </select>
                       <span className='select-icon'><i className='icofont-rounded-down'></i></span>
                      </div>
                      <div className="outline-select shipping-select">
                      <select>
                        <option value="uk">New York</option>
                        <option value="us">London</option>
                        <option value="bd">Dhaka</option>
                        <option value="pak">Korachi</option>
                        <option value="ind">New Dehli</option>
                        <option value="np">Kathmandu</option>
                       </select>
                       <span className='select-icon'>
                        <i className='icofont-rounded-down'></i>
                        </span>
                      </div>
                      <input type="text" name='postalCode' id='postalCode' 
                      className='cart-page-input-text' placeholder='Postalcode | ZIP*' />
                      <button type='submit'>Update Adderess</button>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Total</h3>
                      <ul className='lab-ul'>
                          <li>
                            <span className='pull-left'>Cart Subtotal</span>
                            <p className='pull-right'>{cartSubtotal}</p>
                          </li>
                          <li>
                            <span className='pull-left'>Shipping & Handling</span>
                            <p className='pull-right'>Free Shipping</p>
                          </li>
                          <li>
                            <span className='pull-left'>Order Total</span>
                            <p className='pull-right'>{orderTotal.toFixed(2)}</p>
                          </li>
                      </ul>
                    </div>
                  </div>
                 </div>
            </div>
          </div>
        </div>
       </div>
    </div>
    </div>
  )
}

export default CartPage