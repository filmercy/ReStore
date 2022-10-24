import { ListItem, ListItemAvatar, Avatar, ListItemText, Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from "@mui/material";
import { Product } from "../../product";

interface Props{
    product: Product;
}

export default function ProductCard ({product}:Props){

    return(
        <Card>
            <CardHeader
                avatar={<Avatar sx={{bgcolor:'secondary.main'}}>{product.name.charAt(0).toUpperCase()}</Avatar>}
                title = {product.name}
                titleTypographyProps={{
                    sx:{fontWeight:'bold',color:'primary.main'}
                }}
            >    
            </CardHeader>
            <CardMedia
                component="img"
                image={product.pictureUrl}
                alt={product.name}
                sx={{height:140,objectFit:'contain'}}
            />
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5">
                {product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to cart</Button>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    )
}