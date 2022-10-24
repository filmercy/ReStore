import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Fragment } from "react";
import { Product } from "../../product";
import ProductList from "./ProductList";

interface Props{
    products: Product[];
}

export default function Catalog({products}: Props){
    return (
      <>
        <ProductList products={products}/>
      </>
    )
}