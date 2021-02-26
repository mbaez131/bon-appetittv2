import React from 'react'
import products from './merch.json';


export default class Shop extends React.Component {
render() {
  return (
    <div className="container">
      <h1 className="picks"> Shop At Bon-Appetitt</h1>



       <ul className="product-list">
        {
        products.map((product, index) => {
          return <li key={index} className="product">
              <div className="display"><img src={product.img} className="picdim"/></div>
            <strong className="pursename">{product.name}</strong><br />
            <span className="product-price">{product.price}</span><br />
            <div className="pdesc">{product.description}</div>
            {/* <a href="{product.link}">Buy Now</a> */}
          </li>
        })}
      </ul>



 



    </div>
  );
                }




                
}




