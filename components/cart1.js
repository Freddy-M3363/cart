import React from "react";
import "./cart1.css";
import cart from "./images/cart.png";
import phone from "./images/phone.gif";




function Interfaces() {
    return (
        <div className="cart-body" >
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
          <form action="">
            <input type="text" placeholder="Search products brand and category" className="searchbar" />
            <button type="submit" className="gx lx tw yr yz zc abw cay cbe cbm cco">search<i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
          <details>
            <summary>accounts</summary>
            <button >signin</button>
            <hr/>
            <p><a href="#myaccount"><i className="fa-thin fa-face-smile"></i>&nbsp;my account</a></p>
            <p><a href="#saved" target="_blank" rel="noopener noreferrer">saved items</a></p>
            <p><a href="#order"> orders</a></p>
          </details>

          <p><a href="#help">Help</a></p>
          <p className="cart"><img src={cart} alt="null"/> cart</p>
  
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
                    <li><a href="#products">supermarket</a></li>
                    <li><a href="#contact">baby products</a></li>
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
                <p className="text-4xl" >Help center</p>
                <p>Guide to customer</p>
              </div>
              <div>
              <p className="text-4xl" >easy return </p>
              <p>Quick Refund</p>
              </div>
              <div>
              <p className="text-4xl" >sell on freddycom</p>
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

          <section className="products" >

          </section>
          
        </div>
    )
}
export default Interfaces;