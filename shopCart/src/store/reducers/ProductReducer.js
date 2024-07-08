
/*
import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';

const initState = {
    isLoading: true,
    errorMessage: '',
    products: []
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetch(`http://localhost:3000/products`);
        const products = await response.json()
        return products
    }
)

export const createProducts = createAsyncThunk(

    "product/createProduct",
    async (product) => {
        const response = await fetch(`http://localhost:3000/products`, {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-type": "application/json"
            }
        })
        const result = await response.json()
        console.log("result jsonserver", result);
        return result
    }


)

export const removeProduct = createAsyncThunk(

    "product/removeProduct",
    async (prodId) => {
        const response = await fetch(`http://localhost:3000/products/${prodId}`, {
            method: "DELETE"
        })
        const data = await response.json()
        console.log(data);
        return prodId
    }
)




const ProductReducer = createSlice({
    name: "ProductReducer",
    initialState: initState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true
            })

            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errorMessage = '';
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.errorMessage = action.error.message;
                state.products = []
            })
            .addCase(createProducts.fulfilled, (state, action) => {
                state.products.push(action.payload)
            })
            .addCase(removeProduct.fulfilled, (state, action) => {
                state.products = state.products.filter(item => item.id !== action.payload)
            })
    }
})

export default ProductReducer.reducer
*/