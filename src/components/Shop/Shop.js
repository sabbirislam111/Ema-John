import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css'
import '../Cart/Cart'
import Cart from '../Cart/Cart';
import { addToDb, getStrodCart } from '../../utilities/fakedb';


const Shop = () => {

        const [products, setData] =  useState([]);
        const [cart, setCart] = useState([]);


        useEffect(() => {
            fetch('products.json')
            .then(res => res.json())
            .then(data => setData(data))
        }, [])

        useEffect(()=>{
            const strodCart = getStrodCart();
            const addedCart = [];
            for(const id in strodCart){
                const addedeProduct = products.find(product => product.id === id);
                
                if(addedeProduct){
                    const quantity = strodCart[id];
                    addedeProduct.quantity = quantity;
                    addedCart.push(addedeProduct);
                }
                
            }
            setCart(addedCart);
        } ,[products])

      

        const handelAddTocart = (selectedProduct) => {
            //console.log(product);
            let newCart = [];
            const exist = cart.find(product => product.id === selectedProduct.id);
            if(!exist){
                selectedProduct.quantity = 1;
                newCart = [...cart, selectedProduct];
            }
            else{
                const rest = cart.filter(product => product.id !== selectedProduct.id);
                exist.quantity = exist.quantity + 1;
                newCart = [...rest, exist];
            }

            
            setCart(newCart);
            addToDb(selectedProduct.id)
        }

        
       
    return (
        
        <div  className='shop_container'>
           <div className="product_container">
               {
                products.map(products => <Product
                    key={products.id}
                    allProduct = {products}
                    handelAddTocart = {handelAddTocart}
                ></Product>)
               }
           </div>
           <div className="order_container">
               <Cart carts = {cart}></Cart>
            </div> 
        </div>
    );
};

export default Shop;