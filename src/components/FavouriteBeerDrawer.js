import { Divider, Drawer, IconButton, Stack } from "@mui/material";
import React, { useContext } from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/material/styles';
import { AppContext } from "../context";
import ItemsLoading from "./ItemsLoading";


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));

const FavouriteBeerDrawer = (props) => {

    const { favBeers } = useContext(AppContext);

    return(
        <Drawer variant="persistent" anchor="right" 
            open={props.open} sx={{
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
            <Stack direction="column" justifyContent='center' alignItems='center' spacing={2} divider={
                <Divider flexItem></Divider>
            }>
                {
                    favBeers.map(favBeer => {
                        return(
                            <ItemsLoading></ItemsLoading>
                        );
                    })
                }

            </Stack>
        </Drawer> 
    );
};

export default FavouriteBeerDrawer;