import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom"

interface ProductSchema {
    description:string;
    name:string;
    seller:string;
    stars:number;
    id:number
}




interface Prop {
    product:ProductSchema;
    deleteFunc:(id:number)=>void
}


const ProductCard:React.FC<Prop> = (prop:Prop) => {


    const handleDelete = () => {

        console.log(prop.product.id)

        prop.deleteFunc(prop.product.id)

    }

    return (
        <Card >
            <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
            <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                {prop.product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {prop.product.description}
                </Typography>
            </CardContent>
            <CardActions sx={{display:"flex",mx:2, justifyContent:"space-between"}}>
                <div ><Link to="/productEdit/1" >Edit</Link></div>
                <Button onClick={handleDelete} variant="contained" color = "secondary" size="small">Delete</Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard