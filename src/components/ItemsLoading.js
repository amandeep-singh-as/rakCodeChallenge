import { Card, CardActions, CardContent, CardHeader, Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

const ItemsLoading = () => {
    return(
        <Link to="/beer">
             <Card sx={{
            maxWidth: 280,
            width: 280,
            m: 2
        }}>
            <CardHeader title={
                <Skeleton animation='wave' height={10} width='80%' style={{
                    marginBottom: 6
                }}></Skeleton>
            } subheader={
                <Skeleton animation='wave' height={10} width='40%'></Skeleton>
            }>
            </CardHeader>
            <Skeleton sx={{
                height: 190
            }} animation='wave' variant='rectangle'></Skeleton>
            <CardContent>
                <>
                    <Skeleton animation='wave' height={10} style={{ marginBottom: 6 }}></Skeleton>
                    <Skeleton animation='wave' height={10} width="80%"></Skeleton>
                </>
            </CardContent>
            <CardActions disableSpacing>
                <Skeleton animation="wave" variant='circle' width={40} height={40}></Skeleton>
            </CardActions>
        </Card>
        </Link>
       
    );
};

export default ItemsLoading;