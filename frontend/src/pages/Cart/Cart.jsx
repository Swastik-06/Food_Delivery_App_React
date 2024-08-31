import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/ShopContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, food_list, getTotalCartAmount, removeFromCart } = useContext(StoreContext);

  const navigate=useNavigate()
  // console.log(food_list);
  // console.log(cartItems);



  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (

                <div>
                  <div key={item._id} className='cart-items-title cart-items-item'>
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>$ {item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>$ {item.price * cartItems[item._id]}</p>
                    <p className='cross' onClick={() => { removeFromCart(item._id) }}>X</p>
                  </div>
                  <hr />
                </div>
              )
            }
          })
        }
      </div>

      <div className='cart-bottom'>
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>$ {getTotalCartAmount()=== 0 ? 0 :2}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>$ {getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate("/order")}>Proceed To Checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter It here</p>
            <div className='cart-promocode-input'>
              <input type="text" name="" id="" placeholder='promocode' />
              <button>Submit</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
