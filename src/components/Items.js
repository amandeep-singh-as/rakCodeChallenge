import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import React, { useContext } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AppContext } from "../context";

const Items = (props) => {

    const { dispatchFavBeerEvent } = useContext(AppContext);

    const handleClick = () => {
        dispatchFavBeerEvent('ADD_BEER', props.beer)
    }

    return(
        <Card sx={{ maxWidth: 300, m:2, height: 400 }}>
            <CardHeader title={props.beer.name} subheader={props.beer.tagline}></CardHeader>
            <CardMedia component="img" style={{
                height:'auto', width:'20%', marginLeft: '38%'
            }} image={props.beer.image_url} alt={props.beer.name}></CardMedia>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {/* {props.beer.tagline} */}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favourites" onClick={handleClick}>
                    <FavoriteIcon></FavoriteIcon>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Items;