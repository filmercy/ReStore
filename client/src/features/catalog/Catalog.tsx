import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { Product } from "../../product";
import ProductList from "./ProductList";


export default function Catalog(){

  const [products, setProducts]= useState<Product[]>([]);

  useEffect(()=>{agent.Catalog.list() .then(data =>setProducts(data))}, [])

    return (
      <>
        <ProductList products={products}/>
      </>
    )
}