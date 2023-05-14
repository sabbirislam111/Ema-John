import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css'
import '../Cart/Cart'
import Cart from '../Cart/Cart';
import { addToDb, getStrodCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';




/*
count: 
per pages:
pages:

*/

const Shop = () => {

    // const {products, count} =  useLoaderData();
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                setCount(data.count)
            })
    }, [page, size])



    const pages = Math.ceil(count / size);

    // useEffect(() => {
    //     fetch('http://localhost:5000/products')
    //     .then(res => res.json())
    //     .then(data => setProducts(data.result))
    // }, [])

    useEffect(() => {
        const storedCart = getStrodCart();
        const addeadCart = [];
        const ids = Object.keys(storedCart);
        console.log(ids);
        fetch('http://localhost:5000/productsById',  {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(data => {
                for(const id in storedCart){
                    const addedProduct = data.find(product => product._id === id);
                    if(addedProduct){
                        const quantity = storedCart[id];
                        addedProduct.quantity = quantity;
                        addeadCart.push(addedProduct);
                    }

                }
                console.log("addeded cart",addeadCart)
                setCart(addeadCart);
            })




    }, [products])



    const handelAddTocart = (selectedProduct) => {
        //console.log(product);
        let newCart = [];
        const exist = cart.find(product => product._id === selectedProduct._id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }


        setCart(newCart);
        addToDb(selectedProduct._id)
    }



    return (

        <div className='shop_container'>
            <div className="product_container">
                {
                    products.map(products => <Product
                        key={products._id}
                        products={products}
                        handelAddTocart={handelAddTocart}
                    ></Product>)
                }

            </div>
            <div className="order_container">
                <Cart
                    key={cart._id}
                    carts={cart}
                ></Cart>
            </div>


            <div className='pagination'>
                <p>currently selected pages: {page}</p>
                {
                    [...Array(pages).keys()].map(number => <button
                        onClick={() => setPage(number)}
                        className={page === number && "selected"}
                    >{number + 1}</button>)

                }
                <select onChange={event => setSize(event.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>


        </div>
    );
};

export default Shop;