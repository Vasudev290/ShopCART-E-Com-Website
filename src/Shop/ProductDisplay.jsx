import { setItem } from 'localforage';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ProductDisplay = ({item}) => {
    //console.log(item);
    const {id, name, seller, price, img, quantity, ratingsCount} = item;
    const [prequantity, setPreQuantity] = useState(quantity);
    const [coupon, setCoupan]= useState("")
    const [size, setSize]= useState("Select Size")
    const [color, setColor]= useState("Select Color")

    const handleSizeChange= (e) => {
        setSize(e.target.value)
    }
    const handleColorChange= (e) => {
        setColor(e.target.value)
    }
    const handleDec= () => {
       if(prequantity > 1){
        setPreQuantity(prequantity -1)
       }
    }
    const handleIncr= () => {
        setPreQuantity(prequantity + 1)
    }
    const handleSubmit= (e) => {
        e.preventDefault()
        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: prequantity,
            size: size,
            color: color,
            coupon: coupon
        }
        //console.log(product);
        
        const existingCart= JSON.parse(localStorage.getItem("cart"))  || [];

        const existingProductIndex = existingCart.findIndex((item) => item.id === id)
        
        if(existingProductIndex !== -1){
            existingCart[existingProductIndex].quantity += prequantity;
        }else{
            existingCart.push(product)
        }

        /* Update Local Storage */
        localStorage.setItem("cart", JSON.stringify(existingCart));

        //Reset Form fileds
        setPreQuantity(1);
        setSize("Select Size")
        setColor("Select Color")
        setCoupan("")
    }
  return (
    <div>
        <div>
            <h4>{name}</h4>
            <p className='rating'>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <span>{ratingsCount} Review</span>
            </p>
            <h4>{price}</h4>
            <h6>{seller}</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus consequatur modi animi adipisci ipsam voluptatum ea, est fugit aliquid ut?</p>
        </div>

        {/* cart Components */}
        <div>
            <form onSubmit={handleSubmit}>
                {/* Size */}
                <div className="select-product size">
                    <select value={size} onChange={handleSizeChange}>
                        <option>Select Size</option>
                        <option value="SM">SM</option>
                        <option value="MD">MD</option>
                        <option value="LG">LG</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                        <option value="XXXL">XXXL</option>
                    </select>
                    <i className='icofont-rounded-down'></i>
                </div>
                {/* Color */}
                <div className="select-product color">
                    <select value={color} onChange={handleColorChange}>
                        <option>Select Color</option>
                        <option>Pink</option>
                        <option>Ash</option>
                        <option>Orange</option>
                        <option>Red</option>
                        <option>White</option>
                        <option>Blue</option>
                    </select>
                    <i className='icofont-rounded-down'></i>
                </div>
                 {/*Cart Plus or Mines */}
                  <div className="cart-plus-minus">
                    <div className='dec qtybutton' onClick={handleDec}>-</div>
                    <input className='cart-plus-minus-box' type="text" name='qtybutton' id='qtybutton' 
                    value={prequantity} onChange={(e) => setPreQuantity(parseInt(e.target.value, 10))} />
                    <div className='inc qtybutton' onClick={handleIncr}>+</div>
                  </div>

                  {/* Coupon */}
                  <div className="discount-code mb-2">
                      <input type="text" placeholder='Cast Your Coupon code' onChange={(e) => setCoupan(e.target.value)} />
                  </div>

                  {/* Botton */}
                  <button type='submit' className='lab-btn'><span>Add to Cart</span></button>
                  <Link to="/cart-page" className='lab-btn bg-primary'><span>Checkout</span></Link>
            </form>
        </div>
    </div>
  )
}

export default ProductDisplay