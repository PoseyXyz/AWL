import React, {Component} from 'react';
import Product from './Product'

import {ProductConsumer} from './Context'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { TimelineLite } from 'gsap/all';

class ProductList extends Component{
  constructor(props){
    super(props)
    this.state={
      text:'',
      displayed:false
    }

    this.myTl = new TimelineLite({paused:false})
    this.box1=null
    this.box2=null
    this.box3=null
    this.box4=null
    this.box5=null
  }

  componentDidMount(){
    this.myTl.from(this.box5, .7, {y:1000, autoAlpha:0})
    .from(this.box4, 1, {y:1000, autoAlpha:0},'+0.1')
    .from(this.box3, 1.2, {y:1000, autoAlpha:0},'+0.1')
    .from(this.box2, 1.4, {y:1000, autoAlpha:0},'+0.1')
    .from(this.box1, 1.6, {y:1000, autoAlpha:0},'+0.1')

    this.myTl.to(this.hello, 1, {y:1000, autoAlpha:0})
  }


  changeText=(text)=>{
    this.setState({
      text,
      displayed:true
    })
  }
    render(){

    return(
      <>

        <Navbar/>

      {/*<img src={this.state.displayed ? this.state.text : require('./nb1.jpg')} style={{width:'20%'}}/>
        <img style={{width:'20%'}} onClick={(e)=>this.changeText(e.target.src)} src={require('./nb1.jpg')}/>
          <img style={{width:'20%'}} onClick={(e)=>this.changeText(e.target.src)} src={require('./nb2.jpg')}/>
    */}
     
      
          <ProductConsumer>
            {value=>{
              const grid1 = value.products.filter(product=>product.grid===1)
              const grid2 = value.products.filter(product=>product.grid===2)
              const grid3 = value.products.filter(product=>product.grid===3)
              const grid4 = value.products.filter(product=>product.grid===4)
              const grid5 = value.products.filter(product=>product.grid===5)
              
             return <div className='productlist'>
               
              <div ref={div=>this.box1=div}>
                {grid1.map((product,index)=><Product key={index} value={value} product={product}/>)}
              </div>
              <div ref={div=>this.box2=div}>
                {grid2.map((product, index)=><Product key={index} value={value} product={product}/>)}
              </div>
              <div ref={div=>this.box3=div}>
                {grid3.map((product, index)=><Product key={index} value={value} product={product}/>)}
              </div>
              <div ref={div=>this.box4=div}>
                {grid4.map((product, index)=><Product key={index} value={value} product={product}/>)}
              </div>
              <div ref={div=>this.box5=div}>
                {grid5.map((product, index)=><Product key={index} value={value} product={product}/>)}
              </div>

              </div>
            

            }}
          </ProductConsumer>

        

            <Footer/>


       
      

      </>
    )
  }
}

export default ProductList;
