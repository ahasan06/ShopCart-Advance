import { useEffect, useState } from "react";
import SingleCart from "../components/SingleCart";

const Home = () => {

    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data)
            })
    }, [])

    const [products, setProducts] = useState([])

    return (
        <div>
            <div className='productContainer'>
                {
                    products.map(item => (
                        <SingleCart prod ={item} key={item.id} />
                    ))
                }

            </div>
        </div>
    );
};

export default Home;