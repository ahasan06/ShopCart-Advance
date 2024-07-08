import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { createProducts } from "../store/reducers/ProductReducer";
import { useCreateProductMutation } from "../store/features/apiSlice";

const ProductForm = () => {
    // const dispatch = useDispatch();

    const initialFormData = {
        name: "",
        price: "",
        image: "",
        description: "",
        longDesc: "",
        available: "true",
    };

    const [formData, setFormData] = useState(initialFormData);

    const [addProduct] = useCreateProductMutation()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(formData)
        // dispatch(createProducts(formData));
        setFormData(initialFormData); // Clear the form data
    };

    return (
        <div className="product-container">
            <form className="product-form" onSubmit={handleSubmit}>
                <label>
                    Product Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Product Price:
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Image URL:
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Product Description:
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Product Long Description:
                    <textarea
                        name="longDesc"
                        value={formData.longDesc}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Product Available:
                    <select
                        name="available"
                        value={formData.available}
                        onChange={handleChange}
                    >
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ProductForm;
