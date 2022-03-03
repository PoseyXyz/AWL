import React from 'react'
import { Component } from 'react';
import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { ProductConsumer } from '../Context';
import { categories } from '../data';

export default class Navbar extends Component{
    state={
        showLeftSidebar:false,
        showRightSidebar:false
    }
    openLeftSidebar=()=>{
        this.setState({
            showLeftSidebar:!this.state.showLeftSidebar
        })
    }
    openRightSidebar=()=>{
        this.setState({
            showRightSidebar:!this.state.showRightSidebar
        })
    }

    autoCloseRight=()=>{
        if(this.state.showRightSidebar===true){
            this.setState({
                showRightSidebar:false
            })
        }
    }
    autoCloseLeft=()=>{
        if(this.state.showLeftSidebar===true){
            this.setState({
                showLeftSidebar:false
            })
        }
    }
    render(){
        return(
            <div className='navbar'>
           

                <div className='overlay-content-left' style={{width:this.state.showLeftSidebar ? '220px' : '0'}}>
                   
                   
                    {/* <li>PROJECTS</li>
                    <li>NEWS</li> */}
                    <Link to='/cart'><li>CART</li></Link>
                    {/* <li>PRESS</li>
                    <li>CONTACT</li>
                    <li>IMPLEMENTS</li>
                    <li>FACEBOOK</li>
                    <li>INSTAGRAM</li>
                    <li>TWITTER</li> */}
                
                </div>

                
                <div className='overlay-content-right' style={{width:this.state.showRightSidebar ? '220px' : '0'}}>
                   
              <ProductConsumer>
                  {value=>{
                      
                      return <>
                    <Link to='/products'>
                    <li>ALL</li>
                    </Link>
                      {
                          categories.map((category, index)=><Link key={index} to={`/cat/${category.ref}/reload`}> <li>{category.name}</li></Link>)
                      }
                      </>
                  }}
              </ProductConsumer>
                
                </div>


                <div className='navbar-content'>
                <button className='openbtn' onClick={()=>{this.openLeftSidebar(); this.autoCloseRight()}}>
                        ☰
                    </button>

                    <h3>SEMP.AI</h3>

                    <p onClick={()=>{this.openRightSidebar(); this.autoCloseLeft()}}><i><FaSearch/></i>ALL</p>
                    
                </div>
            </div>
        )
    }
}