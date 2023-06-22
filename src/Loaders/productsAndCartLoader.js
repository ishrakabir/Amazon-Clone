import { getShoppingCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    //get products
    const productsData = await fetch('fakeData/products.json');
    const products = await productsData.json();
    //get Cart
    const savedCart = getShoppingCart();
    const initialCart = [];
    for (const saved in savedCart)
    {
        const addedProduct = products.find(product => product.id === saved)
        if (addedProduct) {
            const quantity = savedCart[saved];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
       }
    }
    return { products, initialCart }

}