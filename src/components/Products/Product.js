import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = ({products, handelAddTocart}) => {
    const {_id, name, price, seller, img, ratings} = products

 
    return (
        <div className='product_card'>
          
             <img src={img} alt="" />
           
           <h1 className='product_name'>{name}</h1>
           <h3 className='product_price'>Price: ${price}</h3>
           <h3 className='seller'>Seller: {seller}</h3>
           <h3 className='rating'>Rating: {ratings}</h3>
           <div>
                <button onClick={() => handelAddTocart(products)} className='btn_add_to_cart'>
                    <p className='btn_text'>Add to cart </p>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
           </div>
           
        </div>
    );
};

export default Product;