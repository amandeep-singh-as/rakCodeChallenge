import { Divider, Drawer, IconButton } from "@mui/material";
import React from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled, useTheme } from '@mui/material/styles';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));

const FavouriteBeerDrawer = (props) => {
    return(
        <Drawer variant="persistent" anchor="right" open={props.open} sx={{
            width: 500,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 500,
              boxSizing: 'border-box',
            },
        }}>
            <DrawerHeader>
                <IconButton onClick={props.onClose}>
                    <ChevronRightIcon></ChevronRightIcon>
                </IconButton>
            </DrawerHeader>
            <Divider></Divider>
        </Drawer> 
    );
};

export default FavouriteBeerDrawer;