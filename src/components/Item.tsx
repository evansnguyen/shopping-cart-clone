import {Button} from "@material-ui/core";
import * as React from 'react';

//type structure
import {CartItemStructure} from "../App";
import {Wrapper} from "./Item.style";



type Props = {
    item: CartItemStructure;
    handleAddToCart: (selectedItem: CartItemStructure) => void;
};
//take an item and function handler (click event listener)
const Item = (props: Props) => {
    return (
        <Wrapper>
            <img src={props.item.image} alt={props.item.title}/>
            <div>
                <h3>{props.item.title}</h3>
                <p>{props.item.description}</p>
                <h3>${props.item.price}</h3>
            </div>
            {/*add this itself(this item) to cart*/}
            <Button onClick={()=>{ props.handleAddToCart(props.item)}}>
                Add to Cart
            </Button>
        </Wrapper>

    );
}
export default Item;



