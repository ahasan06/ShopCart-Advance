// import {  useState ,useEffect, useContext } from "react";
// import { ReviewContext } from "../context/ReviewContext";
import {  useState  } from "react";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
const ReviewForm = () => {

    // const {dispatch} = useContext(ReviewContext)
    const dispatch = useDispatch()

    const [formObj, setFormObj] = useState({
        customerName: '',
        productName: '',
        description: '',
        rating: ''
    });

    const handleChange = (e) => {
        setFormObj({
            ...formObj,
            [e.target.name]: e.target.value
        });
    };

    const [submitReview, setSubmitReview] = useState(false);

    const handleSubmit =(e)=>{
        e.preventDefault();
        const isFormComplete = Object.values(formObj).every(value=>value.trim()!=='');
        if (isFormComplete) {
            setSubmitReview(true)
        }
        else{
            alert("Form Field Cant be Empty");
        }

    }

    useEffect(()=>{
       if (submitReview) {
        fetch('http://localhost:3000/reviews',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(formObj)
        })
        .then(response=>response.json())
        .then(data=>{
            
            dispatch({type:'ADD_REVIEW',payload:data})
            setFormObj({ customerName: '', productName: '', description: '', rating: '' }); // Reset form fields
            setSubmitReview(false); 
        })
        .catch(error => console.error('Failed to add review:', error));
       }
    },[submitReview, formObj])



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Product Review Form</h2>
                <label htmlFor="customerName">Customer Name:</label>
                <input
                    type="text"
                    className="customerName"
                    name="customerName"
                    value={formObj.customerName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="productName">Product Name:</label>
                <input
                    type="text"
                    className="productName"
                    name="productName"
                    value={formObj.productName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="description">Description:</label>
                <textarea
                    className="description"
                    name="description"
                    value={formObj.description}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="rating">Rating:</label>
                <select
                    id="rating"
                    name="rating"
                    value={formObj.rating}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a rating</option>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                </select>

                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
};

export default ReviewForm;
