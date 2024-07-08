import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'



export const rootApi = createApi({
    reducerPath: 'rootApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:3000/`
    }),

    tagTypes: ["products"], // refetch korar jonno eta use korte hbe jate product add korlei sathe asthe add hoy

    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `products`,
            providesTags: ["products"]
        }),
        createProduct: builder.mutation({
            query: (product) => ({
                url: 'products',
                method: "POST",
                body: product
            }),

            invalidatesTags: ['products'] // product kon koon quary te ache se seta dekhbe like getAllproduct erpor se oikhaner prev data falai dia notun data refetch korbe
        }),
        removeProduct:builder.mutation({
            query:(prodId)=>({
                url: `products/${prodId}`,
                method: "DELETE",
                
            }),
            invalidatesTags: ['products']
        })


    })
})

export const {
    useGetAllProductsQuery,
    useCreateProductMutation,
    useRemoveProductMutation,
} = rootApi