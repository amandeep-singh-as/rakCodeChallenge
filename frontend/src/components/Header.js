import React from "react";
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header = () => {
    return(
       <Box sx={{
        display: 'flex'
       }}>
         <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit" component="div">
                    Beer
                </Typography>
            </Toolbar>
        </AppBar>
       </Box>
    );
};

export default Header;