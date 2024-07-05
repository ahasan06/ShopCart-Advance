import {  useState,useEffect} from "react";
import ProdDetailsCard from "../components/ProdDetailsCard";
import { useParams } from "react-router-dom";
// import { AllProduct } from "../context/AllProduct";


const ProdDetails = () => {
    // const {products} = useContext(AllProduct)
    const [prod, setProduct] = useState(null);
    const { prodId } = useParams(); 


    // useEffect(() => {
    //     const foundProduct = products.find(item => item.id === prodId);
    //     if (foundProduct) {
    //         setProduct(foundProduct);
    //     } else {
    //         console.error("Product not found");
    //     }
    // }, [prodId, products]);


    
    console.log("Single Product",prod);
    console.log("prodID:", prodId);
    console.log("prod:", prod);
    useEffect(() => {
        fetch(`http://localhost:3000/products/${prodId}`)
            .then(res => res.json()) 
            .then(data => setProduct(data))
            .catch(err => console.error("Error fetching data:", err));
    }, [prodId]);

    return (
        <div className="product-details-container">
            <h1 className="product-details-heading">Product Details</h1>
            {prod?<ProdDetailsCard product={prod}/>:null}
            {/* if dont use Condition in first render it send to null as a props. Render when product is valid */}
        </div>
    );
};

export default ProdDetails;
