import { getStrodCart } from "../utilities/fakedb";

export const productAndCartLoder = async() =>{
    // get product
    const productData = await fetch('http://localhost:5000/products');
    const {products} = await productData.json();
    // get product
    const savedCart = getStrodCart();
    const initialCart = [];
    for(const id in savedCart){
        const addedProduct = products.find(products => products._id === id);
        if(addedProduct){
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }

    return {product: products, initialCart: initialCart};

}