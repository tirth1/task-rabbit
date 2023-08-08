import { Fragment } from "react";
import { Box, Typography, Dialog, DialogTitle} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import Tasker from "../components/Tasker";
import SelectAvailibility from "./SelectAvailibility";
import { useEffect } from "react";
import FilterTaskers from "./FilterTaskers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const TaskersAndPrices = (props) => {
    const [sortedBy, setSortedBy] = useState('Recommended'); 

    const [showFilterDialog, setShowFilterDialog] = useState(false);

    const sortByChange = (event) => {
        console.log('changed')
        setSortedBy(event.target.value);
    };

    useEffect(() => {
        // fetch the tasker and prices through API.
    }, [sortedBy]);

    const [openAvailibilitySelection, setOpenAvailibilitySelection] = useState(false);

    const goToNextStep = () => {
        setOpenAvailibilitySelection(true);
        props.nextStep(2);
    };

    const handleAvailibilitySelection = (value) => {
        setOpenAvailibilitySelection(false);
        props.nextStep(1);
        props.nextPage(1);
    };

    const handleShowFilterDialog = () => {
        setShowFilterDialog((prev) => !prev);
    }
    
    return (
        <Fragment>
            <Box sx={{display: "flex", flexDirection: "column", width: "100%"}}>
                <Box sx={{display: "flex", justifyContent: "flex-end",  width: "100%", alignItems: "center", gap: "15px"}}>
                    <Typography>Sorted By: </Typography>
                    <Box sx={{ minWidth: 120, width: "230px", background: "white" }}>
                        <FormControl fullWidth>
                            <InputLabel id="sorted-by-label"></InputLabel>
                            <Select
                            labelId="sorted-by-label"
                            id="sorted-by"
                            value={sortedBy}
                            defaultValue={sortedBy}
                            onChange={sortByChange}
                            >
                            <MenuItem value={'Recommended'}>Recommended</MenuItem>
                            <MenuItem value={'Price (Lowest to Highest)'}>Price (Lowest to Highest)</MenuItem>
                            <MenuItem value={'Price (Highest to Lowest)'}>Price (Highest to Lowest)</MenuItem>
                            <MenuItem value={'Positive reviews'}>Positive reviews</MenuItem>
                            <MenuItem value={'# of completed tasks'}># of completed tasks</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>

                <Box sx={{display: "flex", width: "100%", mt: "30px", gap: "50px", flexDirection: {xs: "column", sm: "column",  md: "row", lg: "row"}}}>
                    {/* filters */}
                    <Box onClick={handleShowFilterDialog} sx={{display: {xs: "block", sm: "block", md: "none", lg: "none"}, border: "1px solid", borderRadius: "50px", textAlign: "center"}}>
                        <Typography sx={{pt: "10px", pb: "10px"}} variant="h5">Filters</Typography>
                    </Box>
                    <Box sx={{flex: "30%", display: {xs: "none", sm: "none", md: "block", lg: "block"}}}>
                        <FilterTaskers />
                    </Box>

                    <Box sx={{flex: "60%", display: "flex", flexDirection: "column", justifyContent: "space-around", gap: "30px"}}>
                        <Tasker goToNextStep={goToNextStep}/>
                        <Tasker goToNextStep={goToNextStep}/>
                        <Tasker goToNextStep={goToNextStep}/>
                        <Tasker goToNextStep={goToNextStep}/>
                        <Tasker goToNextStep={goToNextStep}/>
                        <Tasker goToNextStep={goToNextStep}/>
                    </Box>
                </Box>   
            </Box>
            <Dialog onClose={handleShowFilterDialog} open={showFilterDialog}>
                <DialogTitle>Filter Taskers</DialogTitle>
                <Box sx={{pt: "20px", pb: "20px", pl: {xs: "10px", sm: "10px", md: "20px", lg: "20px"}, pr: {xs: "10px", sm: "10px", md: "20px", lg: "20px"}}}>
                    <FilterTaskers />
                </Box>
            </Dialog>
            <SelectAvailibility 
                nextStep={props.nextStep}
                nextPage={props.nextPage}
                //selectedValue={selectedValue}
                open={openAvailibilitySelection}
                onClose={handleAvailibilitySelection}
            />
        </Fragment>
    );
}

export default TaskersAndPrices;

