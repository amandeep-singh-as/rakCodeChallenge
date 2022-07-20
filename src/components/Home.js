import { Container, Divider, Grid, Paper, Stack, Pagination, Typography } from '@mui/material';
import React, { useContext } from 'react';
import ItemsLoading from './ItemsLoading';
import SearchBar from './SearchBar';
import Items from './Items';
import { AppContext } from '../context';


const Home = () => {

    const { allBeers, loading,  dispatchPageEvent, searchParam } = useContext(AppContext);

    const pageChange = (event, value) => {
        dispatchPageEvent('SET_PAGE', value);
    }
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
                                searchParam.searchType == 'all' && loading ? [1,2,3].map((item) => 
                                    <Grid item>
                                        <ItemsLoading/>
                                    </Grid>
                                ) : allBeers.length > 0 ? 
                                        allBeers.map((beer) => 
                                        <Grid item>
                                            <Items beer={beer}></Items>
                                        </Grid>
                                    ) : 
                                    <Typography variant='body'>No results</Typography>
                            }
                        </Grid>  
                    </Grid>

                    <Grid item style={{
                        marginBottom: "2%"
                    }}>
                        {
                            typeof searchParam != 'undefined' && (searchParam.searchType === 'all' 
                            || searchParam.searchType === 'fermentation')?
                            <Pagination count={10} color="secondary" onChange={pageChange}></Pagination> :
                            <></>
                        }
                        
                    </Grid>
                </Stack>    
            </Paper>
        </Container>
    );
}

export default Home;