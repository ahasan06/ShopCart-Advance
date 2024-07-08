// import { useSelector,useDispatch } from "react-redux";
// import { fetchProducts } from "../store/reducers/ProductReducer";
// import { useEffect } from "react";
import SingleCart from "../components/SingleCart";
import { useGetAllProductsQuery } from "../store/features/apiSlice";

const Home = () => {

    // const dispatch = useDispatch()
    // const {products} = useSelector(storeState=>storeState.products)
    // console.log("Products in component",products);

    // useEffect(() => {
    //    dispatch(fetchProducts())
    // }, [dispatch])

    const { isFetching, isError, error, data: products } = useGetAllProductsQuery()

    if (isFetching) {
        return <h1>Loading........</h1>
    }
    if (isError) {
        return <h1>Error: {error.message}</h1>
    }
    return (
        <div>
            <div className='productContainer'>
                {
                    products?.map(item => (
                        <SingleCart prod={item} key={item.id} />
                    ))
                }

            </div>
        </div>
    );
};

export default Home;