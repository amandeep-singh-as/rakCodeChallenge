import { Autocomplete, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Typography, Rating } from "@mui/material";
import React, { useContext, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AppContext } from "../context";
import { PropTypes } from "prop-types";
import { styled } from "@mui/material/styles";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { Link } from 'react-router-dom';


const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.action.disabled,
},}));

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon color="error"></SentimentVeryDissatisfiedIcon>,
        label: 'Very Dissatisfied'
    }, 2: {
        icon: <SentimentDissatisfiedIcon color="error"></SentimentDissatisfiedIcon>,
        label: 'Dissatisfied'
    }, 3: {
        icon: <SentimentSatisfiedIcon color="warning"></SentimentSatisfiedIcon>,
        label: 'Neutral'
    }, 4: {
        icon: <SentimentSatisfiedAltIcon color="success"></SentimentSatisfiedAltIcon>,
        label: 'Satisfied'
    }, 5: {
        icon: <SentimentVerySatisfiedIcon color="success"></SentimentVerySatisfiedIcon>,
        label: 'Very Satisfied'
    }
}

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{
            customIcons[value].icon
        }</span>
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
}

const Items = (props) => {

    const { favBeers, dispatchFavBeerEvent } = useContext(AppContext);
    const [open, setOpen] = useState(false);
    const [drunkDate, setDrunkDate] = useState();
    const [drinkBefore, setDrinkBefore] = useState();
    const [whereDrunk, setWhereDrunk] = useState();
    const [rating, setRaiting] = useState();
    const [comments, setComments] = useState();
    const [alreadyFav, setAlreadyFav] = useState(
        favBeers.filter( (b) => b.id == props.beer.id )[0]
    )

    const onCommentChange = (event) => {
        setComments(event.target.value);
    }

    const onSelectDrinkBefore = (event, value) => { 
        setDrinkBefore(value.value);
    }

    const onWhereDrunkChange = (event) => {
        setWhereDrunk(event.target.value);
    }

    const onRaitingChange = (event) => {
        setRaiting(event.target.value);
    }

    const setDate = (event) => {
        setDrunkDate(event.target.value)
    }

    const addToFavourite = () => {
        dispatchFavBeerEvent('ADD_BEER', {
            ...props.beer,
            'user-raiting': {
                'drink-date': drunkDate,
                'drink-before': drinkBefore,
                'where-drunk': whereDrunk,
                'rating': rating,
                'comments': comments
            }
        });
        setAlreadyFav(true);
        handleClose();
    }

    const removeFromFavourite = () => {
        dispatchFavBeerEvent('REMOVE_BEER', props.beer.id);
        setAlreadyFav(false);
        handleClose();
    }

    const handleClick = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setDrunkDate("");
        setDrinkBefore("");
        setWhereDrunk("");
        setRaiting("");
        setComments("");
        setOpen(false);
    }

    return(
       <>
       <Card sx={{ maxWidth: 300, m:2, height: 400, width: 300 }}>
            <Link to="/beer" state={props.beer}>
                <Typography sx={{ fontSize: 20, paddingLeft: 2, paddingRight:2, marginTop: 3 }}
                    gutterBottom
                    color="text.primary">
                    {props.beer.name}
                </Typography>
            </Link>
            <Typography sx={{ fontSize: 14, paddingLeft: 2, paddingRight: 2 }}
                gutterBottom
                color="text.secondary">
                    {props.beer.tagline}
            </Typography>
            <CardMedia component="img" sx={{
                height: 'auto', width: '20%', paddingLeft: 2
            }} image={props.beer.image_url}></CardMedia>
            <CardActions>
                <IconButton aria-label="add to favourites" onClick={handleClick}>
                    <FavoriteIcon color={
                        alreadyFav ? 
                        'error' : ''
                    }></FavoriteIcon>
                </IconButton>
            </CardActions>
        </Card>
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
            <DialogTitle>
                {
                    !alreadyFav ?
                    "Add To Favourite" :
                    "Remove From Favourites"
                }
            </DialogTitle>
            <DialogContent>
                {
                    !alreadyFav ? 
                    <>
                        <Autocomplete options={[{label : 'Yes', value : 'Yes'}, 
                            {label: 'No', value: 'No'}]} value={drinkBefore} onChange={ onSelectDrinkBefore } renderInput={
                            (params) => <TextField {...params} variant="standard" label="Drink this before ?"></TextField>
                        }></Autocomplete>
                        <TextField variant="standard" fullWidth margin="normal" label="Where you drunk ?" value={whereDrunk} onChange={ onWhereDrunkChange }></TextField>
                        <TextField variant="standard" fullWidth type="date"  InputLabelProps={{ shrink: true }} value={drunkDate} 
                            onChange={ setDate }  margin="normal" label="When you drunk ?"></TextField>
                        <DialogContentText>Your taste note (1 to 5)?</DialogContentText>
                        <StyledRating value={rating} onChange={ onRaitingChange } sx={{
                            marginTop: 2
                            }} size="large" IconContainerComponent={IconContainer} getLabelText={
                            (value) => customIcons[value].label
                        }></StyledRating>
                        <TextField variant="standard" value={comments} onChange={onCommentChange}
                            fullWidth multiline rows={4} margin="normal" label="Comments">
                        </TextField>
                    </> :
                    <>
                        <DialogContentText>
                            Are you sure you want to remove beer ?
                        </DialogContentText>
                    </>
                }
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={
                    !alreadyFav ?
                    addToFavourite :
                    removeFromFavourite
                }>{
                    !alreadyFav ?
                    "Add to Favorite" :
                    "Remove"
                }
                </Button>
            </DialogActions>
        </Dialog>
       </>
    );
}

export default Items;