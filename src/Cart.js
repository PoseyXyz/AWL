import React, {Component} from 'react';

import EmptyCart from './EmptyCart'
import {ProductConsumer} from './Context'
import CartList from './CartList'
import CartTotals from './CartTotals'
import Navbar from './components/Navbar'

class Cart extends Component{
  render(){
    return(
      <div className='r'>
        <Navbar/>
        <ProductConsumer>
          {value=> {
            const {cart} = value;
            if(cart.length>0){
              return (
                <div className='cart'>
                
                 
                 <CartList value={value}/>
                 <CartTotals value={value}/>
                 </div>
              )
            }else {
              return(<EmptyCart />)
            }
          }}
         </ProductConsumer>
         </div>
    )
  }
}

export default Cart;
