import { Autocomplete, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return(
        <TextField placeholder="Search" margin="normal" variant="outlined" fullWidth size="small"
            InputProps={{
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton>
                            <SearchIcon></SearchIcon>
                        </IconButton>
                    </InputAdornment>
                )
            }}
        ></TextField>
    );
}

export default SearchBar;