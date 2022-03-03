import React, {Component} from 'react';
import {ProductConsumer} from './Context'
import {Link} from 'react-router-dom'

import Navbar from './components/Navbar';
import { TimelineLite } from 'gsap/all';
class Details extends Component{
constructor(props){
  super(props)
  this.state={
    slug:this.props.match.params.slug
  }
  this.myTl = new TimelineLite({paused:false})
  this.box1=null
}

componentDidMount(){
  this.myTl.from(this.box1, .7, {y:1000, autoAlpha:0})
 
}
  render(){
    return(
      <div>
        <Navbar/>
        <div className='details' ref={div=>this.box1=div}>
      <ProductConsumer>
        {value=>{
          const {handleDetail} = value
          const product = handleDetail(this.state.slug)
          if(!product){
            return<h1>Product Not Found</h1>
          }


          const {id,info,price,title,inCart, images}=product;
          return( <>
            <div className='img-cont'>
               
               {images.map((img, index)=><img key={index} src={img} alt=''/>)}
            </div>


            <div className='details-cont'>
               <h2>{title}</h2>
              

              <h4 className='text-blue'>
                <strong><span>$</span>{price}
                 </strong>
              </h4>
             <p className='text-muted lead'>{info}</p>
              <Link to='/products'>
                <button>
                Back to Products
                </button>
              </Link>
              <button disabled={inCart?true:false}
              onClick={()=>{
                value.addToCart(id)
              }}>
                {inCart ? 'In Cart' : 'Add to cart'}
              </button>
            </div>
            </>
          
          )
        }
        }
      </ProductConsumer>
      </div>
      </div>
    )
  }
}





export default Details;
