import React, {Component} from 'react';
import {FaTrash, FaMinus, FaPlus} from 'react-icons/fa'

export default class CartItem extends Component{
  render(){
      const {id,title,img,price,total,count} = this.props.item
      const {increment,decrement,removeItem}=this.props.value
    return(
      <div className='items'>
      <div>
        <img src={img} className='img-fluid' alt=''/>
      </div>
      <div className='details'>
      <p>
       
        {title}
      </p>
      <p>
      
      ${price}
      </p>
      <div>
       
        <div>
          <span className='dec' onClick={()=> decrement(id)}><FaMinus/></span>
            <span className='count' onClick={()=> decrement(id)}>{count}</span>
              <span className='inc' onClick={()=> increment(id)}><FaPlus/></span>
        
        </div>
      </div>


      {/* */}
      
      <button onClick={()=>removeItem(id)}>
        <i className='fas fa-trash'><FaTrash/></i>
      </button>

     
      <p>
      <strong>${total}</strong>

      </p>
      </div>
      </div>
    )
  }

}
