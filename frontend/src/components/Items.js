import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import React, { useContext } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AppContext } from "../context";

const Items = (props) => {

    const { dispatchBeerEvent } = useContext(AppContext);

    const handleClick = () => {
        dispatchBeerEvent('ADD_BEER', props.beer)
    }

    return(
        <Card sx={{ maxWidth: 200, m:2 }}>
            <CardHeader title={props.beer.name} subheader={props.beer.tagline}></CardHeader>
            <CardMedia component="img" height="194" image={props.beer.image_url} alt={props.beer.name}></CardMedia>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.beer.description}
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