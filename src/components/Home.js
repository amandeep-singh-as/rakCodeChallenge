import { Container, Divider, Grid, Paper, Stack } from '@mui/material';
import React, { useContext } from 'react';
import ItemsLoading from './ItemsLoading';
import SearchBar from './SearchBar';
import Items from './Items';
import { AppContext } from '../context';
// import FilterListIcon from '@mui/icons-material/FilterList';

const Home = () => {

    const { allBeers, loading } = useContext(AppContext)

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
                        <Grid item mt={2} xs={6} md={6}>
                            <SearchBar/>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent='center' alignItems='center' spacing={2}>
                            <Grid item xs={12} mt={1} md={12}>
                            </Grid>
                            {
                                loading ? [1,2,3].map((item) => 
                                    <Grid item>
                                        <ItemsLoading/>
                                    </Grid>
                                ) : allBeers.map((beer) => 
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