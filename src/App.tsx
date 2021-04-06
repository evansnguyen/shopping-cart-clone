import React from 'react';
import {useQuery} from "react-query";

//components from material ui
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";

//style
import {Wrapper} from "./App.style";
import Item from "./components/Item";

//types
export type CartItemStructure = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
};

//fetch all products from fake store
//return type CartItemStructure[]
const getProducts = async (): Promise<CartItemStructure[]> => {
    return (
        (await fetch('https://fakestoreapi.com/products')).json()
    )
}


const App = () => {
    //data: [{products},...], isLoading, error: boolean |unknown
    const {data, isLoading, error} = useQuery<CartItemStructure[]>(
        'products',
        getProducts
    );

    //function handle add Item to cart when click
    const handleAddToCart = (selectedItem: CartItemStructure) => {
        console.log('nothing added ' + selectedItem.title);
       return null;
    }; //dummy place holderfunction for now

    //function handle remove Item from cart when click
    const handleRemoveFromCart = () => null;


    //while fetching products
    if (isLoading) return <LinearProgress/>;
    if(error) return <div>Error occurred...!!</div>

    // map products to Item object {data:CartItemstructure, handleAddToCart:function (need define)}
    return (
        <Wrapper>
            {/*3 items per row*/}
            <Grid container spacing={3}>
                {data?.map(item =>{
                    return (
                    <Grid item  xs={12} sm={4} key={item.id}>
                        <Item item={item} handleAddToCart={handleAddToCart}/>
                    </Grid>
                )})}
            </Grid>
        </Wrapper>

    )
        ;
}

export default App;
