import { Container, Divider, Grid, Pagination, Paper, Stack } from '@mui/material';
import React from 'react';
import ItemsLoading from './ItemsLoading';
import SearchBar from './SearchBar';

const Home = () => {
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
                            <Grid item>
                                <ItemsLoading></ItemsLoading>
                            </Grid>
                            <Grid item>
                                <ItemsLoading></ItemsLoading>
                            </Grid>
                            <Grid item>
                                <ItemsLoading></ItemsLoading>
                            </Grid>
                            <Grid item>
                                <ItemsLoading></ItemsLoading>
                            </Grid>
                            <Grid item>
                                <ItemsLoading></ItemsLoading>
                            </Grid>
                            <Grid item>
                                <ItemsLoading></ItemsLoading>
                            </Grid>
                        </Grid>  
                    </Grid>

                    <Grid item style={{
                        marginBottom: "2%"
                    }}>
                        <Pagination count={10} color="secondary"></Pagination>
                    </Grid>
                </Stack>    
            </Paper>
        </Container>
    );
}

export default Home;