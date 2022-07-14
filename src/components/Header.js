import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import FavouriteBeerDrawer from "./FavouriteBeerDrawer";
import { Link } from 'react-router-dom';

const Header = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = (event) => {
        if(openDrawer === false){
            setOpenDrawer(true);
        } else {
            setOpenDrawer(false);
        }
    }

    return(
       <Box sx={{
        display: 'flex'
       }}>
         <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit" component="div" sx={{
                    flexGrow: 1
                }}>
                    Beer
                </Typography>

    
                <Button component={Link} color="inherit" to={'/home'}>Home</Button>
                <Button color="inherit" onClick={toggleDrawer}>Favourite</Button>
            </Toolbar>
            <FavouriteBeerDrawer open={openDrawer} onClose={toggleDrawer}></FavouriteBeerDrawer>
        </AppBar>
       </Box>
    );
};

export default Header;