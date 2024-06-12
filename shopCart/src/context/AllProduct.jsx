// AllProductProvider.js
import { createContext, useEffect, useState } from 'react';

export const AllProduct = createContext();

const AllProductProvider = ({ children }) => {
    const [products, setAllProduct] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(data => setAllProduct(data))
            .catch(err => console.error("Error fetching products:", err));
    }, []);

    console.log("Products in context:", products); // Log products here

    return (
        <AllProduct.Provider value={{ products }}>
            {children}
        </AllProduct.Provider>
    );
};

export default AllProductProvider;
