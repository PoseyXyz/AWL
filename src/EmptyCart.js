
import React, {Component} from 'react';

import { FaCartPlus } from 'react-icons/fa';

class EmptyCart extends Component{
  render(){
    return(
      <div className='empty-cart'>
      <i><FaCartPlus/></i>
      </div>
    )
  }
}

export default EmptyCart;
