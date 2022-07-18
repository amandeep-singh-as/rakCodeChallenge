import { FormControl, FormControlLabel, FormLabel,  RadioGroup, Radio, TextField, IconButton, InputAdornment} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { AppContext } from "../context";

const SearchBar = () => {

    const {  dispatchSearchParamsEvent } = useContext(AppContext);

    const [searchType, setSearchType] = useState();
    const [fermentationType, setFermentationType] = useState("topFermentation");
    const [bitternessVal, setBitternessVal] = useState("");
    const [foodPairningValue, setFoodPairingValue] = useState("");

    const changeFoodPairingValue = (event) => {
        setFoodPairingValue(event.target.value);
    }

    const changeBitternessVal = (event) => {
        setBitternessVal(event.target.value);
    }
    
    const changeSearchType = (event) => {
        setSearchType(event.target.value);
    }

    const changeFermentationType = (event) => {
        setFermentationType(event.target.value);
    }

    useEffect(() => {
        var payload = "all";
        if(searchType === 'fermentation') {
            payload = fermentationType
        } else if (searchType === 'bitterness') {
            payload = bitternessVal
        } else if (searchType === 'food-pairing') {
            payload = foodPairningValue
        }
        console.log("Test ::: ", payload);
        dispatchSearchParamsEvent('SET_SEARCH_PARAMS', {
            'searchType': searchType,
            'payload': payload
        })
    }, [searchType, fermentationType, bitternessVal, foodPairningValue]);


    return(
       <>
        <FormControl>
            <FormLabel aria-label="search-type">Search By:</FormLabel>
            <RadioGroup defaultValue="all"  aria-labelledby="search-type" name="search-by" row value={searchType} onChange={changeSearchType}>
                <FormControlLabel value="all" control={<Radio></Radio>} label="All"></FormControlLabel>
                <FormControlLabel  value="fermentation" control={<Radio></Radio>} label="Fermentation Type"></FormControlLabel>
                <FormControlLabel value="bitterness" control={<Radio></Radio>} label="Bitteness"></FormControlLabel>
                <FormControlLabel value="food-pairing" control={<Radio></Radio>} label="Food Pairing"></FormControlLabel>
            </RadioGroup>
        </FormControl>

        {
            searchType === 'fermentation' ?
            <>
                <FormControl>
                    <RadioGroup defaultValue="topFermentation" name="fermentation-type" row value={fermentationType} onChange={changeFermentationType}>
                        <FormControlLabel value="topFermentation" control={<Radio></Radio>} label="Top Fermentation"></FormControlLabel>
                        <FormControlLabel value="bottomFermentation" control={<Radio></Radio>} label="Bottom Fermentation"></FormControlLabel>
                    </RadioGroup>
                </FormControl>
            </> : 
            searchType === 'bitterness' ? 
            <>
                <TextField placeholder="0 - 120" margin="normal" variant="outlined" 
                    fullWidth size="small"
                    InputProps={{
                        endAdornment:(
                            <InputAdornment position="end">IBU</InputAdornment>
                        ), min: 0, max: 120
                    }} type="number" value={bitternessVal} 
                    onChange={changeBitternessVal}
                ></TextField>
            </> :
            searchType === 'food-pairing' ?
            <>
                <TextField placeholder="Search" margin="normal" variant="outlined" 
                    fullWidth size="small"
            I       InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton>
                                <SearchIcon></SearchIcon>
                            </IconButton>
                        </InputAdornment>
                    )}} value={foodPairningValue}
                    onChange={changeFoodPairingValue}>
                </TextField>
            </> : <></>
        }
       </>
    );
}

export default SearchBar;