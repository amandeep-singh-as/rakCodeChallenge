import { Container, Divider, Grid, Pagination, Paper, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ItemsLoading from './ItemsLoading';
import SearchBar from './SearchBar';
import axios from 'axios';
import Items from './Items';

const Home = () => {

    const [beers, setBeers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://api.punkapi.com/v2/beers').then((response) => {
            setBeers(response.data);
            setLoading(false);
        })
    }, [])

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
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item mt={2} xs={8} md={6}>
                            <SearchBar/>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent='center' alignItems='center' spacing={2}>
                            {
                                loading ? [1,2,3].map((item) => 
                                    <Grid item>
                                        <ItemsLoading/>
                                    </Grid>
                                ) : beers.map((beer) => 
                                    <Grid item>
                                        <Items beer={beer}></Items>
                                    </Grid>
                                )
                            }
                        </Grid>  
                    </Grid>

                    <Grid item style={{
                        marginBottom: "2%"
                    }}>
                        {/* <Pagination count={10} color="secondary"></Pagination> */}
                    </Grid>
                </Stack>    
            </Paper>
        </Container>
    );
}

export default Home;