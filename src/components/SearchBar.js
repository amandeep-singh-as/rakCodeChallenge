import { Autocomplete, FormControl, FormControlLabel, FormLabel, IconButton, InputAdornment, RadioGroup, TextField, Radio} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

    const [searchType, setSearchType] = useState();
    
    const changeSearchType = (event) => {
        setSearchType(event.target.value);
    }


    return(
       <>
         {/* <TextField placeholder="Search" margin="normal" variant="outlined" fullWidth size="small"
            InputProps={{
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton>
                            <SearchIcon></SearchIcon>
                        </IconButton>
                    </InputAdornment>
                )
            }}
        ></TextField> */}

        <FormControl>
            <FormLabel aria-label="search-type">Search By:</FormLabel>
            <RadioGroup  aria-aria-labelledby="search-type" name="search-by" row value={searchType} onChange={changeSearchType}>
                <FormControlLabel  value="fermentation" control={<Radio></Radio>} label="Fermentation Type"></FormControlLabel>
                <FormControlLabel value="bitterness" control={<Radio></Radio>} label="Bitteness"></FormControlLabel>
                <FormControlLabel value="food-pairing" control={<Radio></Radio>} label="Food Pairing"></FormControlLabel>
            </RadioGroup>
        </FormControl>
       </>
    );
}

export default SearchBar;