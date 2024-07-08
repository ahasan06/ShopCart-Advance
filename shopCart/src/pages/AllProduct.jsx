
// import { useSelector ,useDispatch} from 'react-redux';
// import { fetchProducts } from "../store/reducers/ProductReducer";
// import { useEffect } from 'react';
import ProductList from '../components/ProductList';
import { useGetAllProductsQuery } from '../store/features/apiSlice';

const AllProduct = () => {
    // const {isLoading,errorMessage, products } = useSelector(storeState => storeState.products)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchProducts())
    //  }, [dispatch])

    const {isLoading,isError,data:products,error} = useGetAllProductsQuery()


 
    if (isLoading) return  <p className="loader"><div className="loader2"></div></p>;
    if (isError) return <p>Error: {error.message} </p>

    return (
        <div>
            <div className='productContainer'>
                {
                    products?.map(item => (
                        <ProductList prod={item} key={item.id} />
                    ))
                }
            </div>
        </div>
    );
};

export default AllProduct;