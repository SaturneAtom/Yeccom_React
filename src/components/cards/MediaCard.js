import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';


export default function MediaCard() {

 const products = useSelector((state) => state.posts.posts);
    console.log(products);  

    const product = products.map((item) => (
        <div key={item._id} style={{ marginBottom: "30px" }}>
            {item.name}
        </div>
    ));

    return (
        <div style={{
            display: "flex", flexDirection: "row",
            padding: "10px"
        }}>

            <Card sx={{ maxWidth: "150px", height: "150px", visibility: "visible", margin: "10px", }}>
                <CardMedia
                    component="img"
                    width="200px"
                    image="https://larepublica.pe/resizer/Kr3zhhu5e0lXlwx0w9UFd8-tHrA=/480x282/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/YUR6TURFBVAJPLJDSI7EDYJHCM.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {product}
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: "150px", height: "150px", visibility: "visible", margin: "10px", }}>
                <CardMedia
                    component="img"
                    width="100%"
                    image="https://nouvellesgastronomiques.com/wp-content/uploads/2022/01/lait6.png"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        Lait
                    </Typography>
                </CardContent>
            </Card>

</div>
    );
}
