import { getStrodCart } from "../utilities/fakedb";

export const productAndCartLoder = async() =>{
    // get product
    const productData = await fetch('products.json');
    const product = await productData.json();
    // get product
    const savedCart = getStrodCart();
    const initialCart = [];
    for(const id in savedCart){
        const addedProduct = product.find(products => products.id === id);
        if(addedProduct){
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }

    return {product: product, initialCart: initialCart};

}