import { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../contaxt/storecontaxt'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { food_list, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext)
  const navigate = useNavigate()

  return (
    <div className="cart" id="cart">
      <div className="cart-item">
        <div className="card-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div key={index} className="cart-item-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    X
                  </p>
                </div>
                <hr />
              </>
            )
          }
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Card Total</h2>
          <div className="cart-total-detail">
            <p>Subtotal</p>
            <p> ${getTotalCartAmount()}</p>
          </div>

          <div className="cart-total-detail">
            <p>Delevery Fee</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr />

          <div className="cart-total-detail">
            <b>Total</b>
            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
          </div>
          <button onClick={() => navigate('/order')}>
            {' '}
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>

      <div className="cart-promocode">
        <div>
          <p> If you have a prom code ,Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promocode"></input>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
