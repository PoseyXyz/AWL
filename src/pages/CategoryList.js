import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Product from '../Product'
import {ProductConsumer} from '../Context'
import Footer from '../components/Footer'

export default class CategpryList extends Component{
    constructor(props){
        super(props)
        this.state={
            ref:this.props.match.params.ref
        }
    }
    render(){

        return(
            <>
                  <Navbar/>
                  
          <ProductConsumer>
            {value=>{
               const {products} = value
               const categoryProduct=products.filter(product=>product.ref===this.state.ref)

              const grid1 = categoryProduct.filter(product=>product.grid===1)
              const grid2 = categoryProduct.filter(product=>product.grid===2)
              const grid3 = categoryProduct.filter(product=>product.grid===3)
              const grid4 = categoryProduct.filter(product=>product.grid===4)
              const grid5 = categoryProduct.filter(product=>product.grid===5)
              
             return <div className='productlist'>
              <div>
                {grid1.map(product=><Product value={value} product={product}/>)}
              </div>
              <div>
                {grid2.map(product=><Product value={value} product={product}/>)}
              </div>
              <div>
                {grid3.map(product=><Product value={value} product={product}/>)}
              </div>
              <div>
                {grid4.map(product=><Product value={value} product={product}/>)}
              </div>
              <div>
                {grid5.map(product=><Product value={value} product={product}/>)}
              </div>

              </div>
            

            }}
          </ProductConsumer>
          <Footer/>

                 
            </>
        )
    }
}