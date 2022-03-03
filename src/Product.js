import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Product extends Component{
  state={
    comment:'',
    showComment:[]
  }

  handleChange=(e)=>{
    this.setState({
      comment:e.target.value
    })
  }

  addComment=(e)=>{
    e.preventDefault();
    const newItem = this.state.comment
    if(newItem.text !== ''){
      const newItems = [...this.state.showComment, newItem]
      this.setState({
        showComment:newItems,
        comment:''
      })
    }

  }
  render(){

   const {title, images, slug} = this.props.product;


    return(
      <>
      <Link to={`/details/${slug}`}>
        <div className='card'>
          <div className='overlay'>
            {title}
          </div>

          <img src={images[0]} alt=''/>

       </div>
       </Link>

  </>

    )
  }
}



export default Product
