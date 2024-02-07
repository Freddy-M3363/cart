import React from "react";
import "./styles/cart1.css";
import cart11 from "./images/cart11.png";
import phone from "./images/phone.gif";
import Data from "../Data";
import badge from "./products";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";

const Interfaces = ({product,AddToCart})=> {

    return (
        <div className="cart-body" id="signin" >
        <div >
        <div className="header">
          <a href="http://cfreddy.com"><i class="fa-solid fa-dove"></i> sell to freddy</a>
          <a href="http://cfreddy.com"> freddy<i class="fa-solid fa-person-praying"></i></a>
          <a href="http://cfreddy.com">💱 Epay</a>
        </div>

        <div className="firstpage">
        <section className="search">
          <p class="name">freddy <i class="fa-solid fa-dove"></i>
          </p>
          <form action="" className="search-box">
            <input type="text" placeholder="Search products category" className="searchbar" />&nbsp; &nbsp;
            <Button type="submit" className="such">search</Button>
          </form>
          <details>
            <summary>accounts</summary>

            <div>
             <Link to="/signin">signIn</Link>
                    
              <hr/>
              <p><a href="#myaccount"><i className="fa-thin fa-face-smile"></i>account</a></p>
              <p><a href="#saved" target="_blank" rel="noopener noreferrer">saved</a></p>
              <p><a href="#order"> orders</a></p>
           </div>  
          </details>

          <p><a href="#help">Help</a></p>
          <div className="cart">
            <a href="#Add"><img src={cart11} onClick={()=>AddToCart(product)} alt="null"/> <span id="badge" className="badge">{badge}</span></a>
          </div>
        </section>
        
        <div className="landing-container">
           <section className="nav">
                <ul className="menu">
                    <li><a href="#home">official store</a></li>
                    <li><a href="#about">phones and tablets</a></li>
                    <li><a href="#products">TVs and audio</a></li>
                    <li><a href="#contact">Appliances</a></li>
                    <li><a href="#products">heath and beauty</a></li>
                    <li><a href="#contact">home and office</a></li>
                    <li><a href="#home">fashion</a></li>
                    <li><a href="#about">computing</a></li>
                </ul>
           </section>
           <section className="product-interface">
                <div className="displ"> 
                    <img className="img" src={phone} alt=" "/>
                </div>
           </section>
           <section >
               
              <div className="end">
                <div>
                  <p className="text-3xl" >Help center</p>
                  <p><a href="#guide" >Guide to customer</a></p>
                </div>
                <div>
                  <p className="text-3xl" >easy return </p>
                  <p><a href="#refund">Quick Refund</a></p>
                </div>
                <div>
                  <p className="text-3xl" >sell to freddycom</p>
                  <p>million of visitors</p>
                </div>
              </div>
              <div class className="call" >
                 <p> call or whatsapp</p>
                 <p>098765432</p>
                 <p>to order</p>
              </div>
           </section>

           
            </div>
          </div>
          
          </div>
          <Data/>

          
        </div>
    )
}
export default Interfaces;