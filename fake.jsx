import React, { useState, useEffect } from 'react';

const ReviewForm = () => {
    const [formObj, setFormObj] = useState({
        customerName: '',
        productName: '',
        description: '',
        rating: ''
    });
    const [submitReview, setSubmitReview] = useState(false);

    const handleChange = (e) => {
        setFormObj({
            ...formObj,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormComplete = Object.values(formObj).every(value => value.trim() !== '');
        if (isFormComplete) {
            setSubmitReview(true);  // Set the flag to trigger useEffect
        } else {
            alert("Form cannot be empty");
        }
    };

    useEffect(() => {
        if (submitReview) {
            fetch('http://localhost:3000/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formObj)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setFormObj({ customerName: '', productName: '', description: '', rating: '' }); // Reset form fields
                setSubmitReview(false); // Reset the trigger
            })
            .catch((error) => {
                console.error('Error:', error);
                alert("Failed to submit review, try again!");
                setSubmitReview(false); // Reset the trigger in case of failure
            });
        }
    }, [submitReview, formObj]); // Depend on `submitReview` to trigger the effect

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Form inputs go here */}
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
};

export default ReviewForm;
