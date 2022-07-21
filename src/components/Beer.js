import { Container, Divider, Grid, Paper, Skeleton, Stack, Typography, Box, List, ListItem, ListItemButton, ListItemText, IconButton } from "@mui/material";
import React, { useContext, useState } from "react";
import { useLocation } from "react-router";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AppContext } from "../context";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

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

const Beer = () => {

    let location = useLocation();
    let beer = location.state;

    const { favBeers, dispatchFavBeerEvent } = useContext(AppContext);

    const [isFav, setIsFav] = useState(favBeers.filter((b) => b.id == beer.id)[0]);

    return(
        <Container style={{
            marginTop: '2%'
        }}>
            <Paper elevation={1} style={{
                minHeight: '80vh'
            }}>
                <Stack direction="column" justifyContent="center" alignItems="center" spacing={2} divider={
                    <Divider flexItem></Divider>
                }>
                    <Grid container spacing={2} direction="row">
                        <Grid item xs={3} md={3} mt={4} ml={5} mb={1}>
                                <img src={beer.image_url} style={{
                                    height: 'auto',
                                    width: '35%'
                                }}></img>
                        </Grid>
                        <Grid item xs={8} md={8} mt={4} mb={1}>
                            <Grid container spacing={1} direction="column">
                                <Grid>
                                        <Typography variant="h4">{beer.name}</Typography>
                                        <Typography variant="subtitle2">{beer.tagline}</Typography>
                                
                                </Grid>
                                <Grid sx={{
                                    marginTop: 1
                                }}>
                                    <Typography variant="body1">{beer.description}</Typography>
                                </Grid>
                                <Grid sx={{
                                    marginTop:1
                                }}>
                                    <Paper elevation={2} sx={{
                                       padding: 3
                                    }}>
                                        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}
                                            divider={
                                                <Divider orientation="vertical" flexitems></Divider>
                                            }>
                                                {/* <> */}
                                                    <Typography variant="subtitle1">
                                                        IBU : {beer.ibu}
                                                    </Typography>
                                                {/* </> */}
                                                {/* <> */}
                                                    <Typography variant="subtitle1">
                                                        ABV : {beer.abv}
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        Fermentation Temp : {beer.method.fermentation.temp.value}°C
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        First Brewed : {beer.first_brewed}
                                                    </Typography>
                                                {/* </> */}
                                        </Stack>
                                    </Paper>
                                </Grid>

                                <Grid sx={{
                                    marginTop: 2
                                }}>
                                    <Paper elevation={2} sx={{
                                        padding: 3
                                    }}>
                                        <Typography variant="h6">Food Pairning</Typography>
                                        <List>
                                            {
                                                beer.food_pairing.map((food) => 
                                                    <ListItem disablePadding>
                                                        <ListItemButton>
                                                            <ListItemText primary={food}></ListItemText>
                                                        </ListItemButton>
                                                    </ListItem>
                                                )
                                            }
                                        </List>
                                    </Paper>
                                </Grid>
                                {
                                    isFav ?
                                    <Grid sx={{
                                        marginTop: 2
                                    }}>
                                        <Paper elevation={2} sx={{
                                            padding: 3
                                        }}>
                                            <Typography variant="h6">User Details</Typography>
                                            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                                                <Typography variant="subtitle1">
                                                    Drunk Before : {isFav['user-raiting']['drink-before']}
                                                </Typography>
                                                <Typography variant="subtitle1">
                                                    Drunk Date : {isFav['user-raiting']['drink-date']}
                                                </Typography>
                                                <Typography variant="subtitle1">
                                                    Where Drunk : {isFav['user-raiting']['where-drunk']}
                                                </Typography>
                                                <Typography variant="subtitle1">
                                                    Raiting : {
                                                        customIcons[isFav['user-raiting']['rating']].icon
                                                    }
                                                </Typography>
                                            </Stack>
                                        </Paper>
                                    </Grid> : <></>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Stack>    
            </Paper>
        </Container>
    );
};

export default Beer;