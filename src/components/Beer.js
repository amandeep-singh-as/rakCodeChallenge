import { Container, Divider, Grid, Paper, Skeleton, Stack } from "@mui/material";
import React from "react";

const Beer = () => {
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
                    <Grid container spacing={1} direction="row">
                        <Grid item xs={3} md={3} mt={4} ml={4} mr={2} mb={1}>
                            <Skeleton animation="wave" variant="rectangle" sx={{
                                height: 350
                            }}></Skeleton>
                        </Grid>
                        <Grid item xs={8} md={8} mt={4} mr={4} mb={1}>
                            <Skeleton animation='wave' variant="text"></Skeleton>
                            <Skeleton animation='wave' variant="text"></Skeleton>
                            <Skeleton animation='wave' variant="text"></Skeleton>
                            <Skeleton animation='wave' variant="rectangle" sx={{
                                height: 295
                            }}></Skeleton>
                        </Grid>
                        <Grid item xs={12} md={12} mt={1} mr={6} ml={4}>
                            <Skeleton animation='wave' variant="rectangle" sx={{
                                height: 100
                            }}></Skeleton>
                        </Grid>
                    </Grid>
                </Stack>    
            </Paper>
        </Container>
    );
};

export default Beer;