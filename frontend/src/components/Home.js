import { Container, Divider, Grid, Paper, Stack } from '@mui/material';
import React from 'react';
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
                        <Grid item mt={2} xs={12} md={6}>
                            <SearchBar/>
                        </Grid>
                    </Grid>
                    <Grid item>
                        test 2
                    </Grid>
                </Stack>    
            </Paper>
        </Container>
    );
}

export default Home;