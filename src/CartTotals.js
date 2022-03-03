import React, {Component}  from 'react'
import {Link} from 'react-router-dom'


export default class CartTotals extends Component{
    render(){
      const {cartSubtotal, cartTax, cartTotal, clearCart} = this.props.value;
      return(
        <React.Fragment>
          <div className='cart-totals'>
            
            <div>
                
                  <h3>
                    <span >Subtotal:</span><strong>$ {cartSubtotal}</strong>
                  </h3>
                  <h3>
                    <span >Tax:</span><strong>$ {cartTax}</strong>
                  </h3>
                  <h3>
                    <span>Total:</span><strong>$ {cartTotal}</strong>
                  </h3>
                  <Link to='/'>
                  <button type='button' onClick={()=>clearCart()}>
                    Clear Cart
                  </button>
                  </Link>
              </div>
              </div>
          
         
        </React.Fragment>
      )
    }
}
