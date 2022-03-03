import React, {Component} from 'react';
import {Switch,Route, Redirect} from 'react-router-dom'

import Details from './Details'
import Cart from './Cart'

import ProductList from './ProductList';

import Home from './pages/Home'
import CategoryList from './pages/CategoryList'




import './App.scss';

class App extends Component {
  render(){
  return (
    <React.Fragment>
      
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/products' component={ProductList}/>
      <Route path='/details/:slug' component={Details}/>
      <Route path='/cart' component={Cart}/>
      <Route exact path='/cat/:ref' component={CategoryList}/>
      <Redirect exact from='/cat/:ref/reload' to='/cat/:ref'/>
     
      </Switch>
      
    </React.Fragment>
  );
}
}

export default App;










//Styled Component
//router//ProductContext
//Consumer to ProductList
//Provider to indexJs
//import data from data js
//destructure context to state only then map to productlist with return product tag
//deconstruct id e,tc to this.props.product and the pass values and require img


//ternary operator for inCart with disabled func
//style-incart and add card-footer
//destructure nested array then mount setProducts
//product details file deconstruct to value product then add ternaryopeartor for button enclose all in product consumer
//reroute to each details page from products page usind product consumer and handleDetail and get item methods
//addtoCart 1.getindex, 2.assign product const then add values inCart and count and assign price const and product.total=price then setstate, destruvture cart into products
//open and closeModal, first of all applySTATE
//create the modal, import value and details then run conditional and pass the closeModal function


//Run if else to check if value.cart is occupied or empy, if occupied? Pass in Title CartColums and CartList    pass in cartitem into cartlist
//import cartlist into carrt.js then you either use function based parameter to pass in value prop and then get {cart} = value or use clkass based componentand this.prop
//map cart then pass in cartitem for each map so as to display each item you cart.... give cartitem tag a key, then pass in item(this.props.value.cart) and then  pass in value prop
//then go to cart item and for each one get the {id, title,img,price,total and count} throuth cart(map---item) and then grab the functions(increment,decrementand removeItem) from Context value
//input various values into the mycart section then style add the decrement btn and the method then pass in id parameter
//add increment button and pass id parameter then put count in middle
//add trash
//create carttotals then pass in respective parameters to this.props.value then add the carttotals tag to cart.js
//pass in values of alll totals and subtotals
//calculste add total functions thend add as callback function to add to cart function



//cleartCart funtion, just set the cart state back to an enpty array and then callback function add total and setproducts
//when you want to remove item from cart with function>  fisrt filter through carts, then deconstruct alone and get indexx of products then get the products index and then set inCart count and total values to false;
//set state of cart to full array of temp cart and products to full array of temp products and callback add totals function to set bakc its valu8es
//incrementand decrement, deconsturcure cart to single and thn find method each id then assigh indexes then calculate count and total values  then set cart back to tepm cart and add adtotals callback
