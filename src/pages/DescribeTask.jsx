import { Box, Typography, InputBase, Button } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";
import { useContext } from "react";
import {TaskContext} from "../context/TaskContext";

const DescribeTask = (props) => {
    const [showLocation, setShowLocation] = useState(true);
    const [showTaskOptions, setShowTaskOptions] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    const [suggestions, setSuggestions] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("");

    const fetchLocationSuggestions = async (inputValue) => {
        try {
            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
                inputValue
              )}&countrycode=IN&limit=5&key=YOUR_API_KEY`
            );
            const data = await response.json();
            return data.results.map((result) => result.formatted);
          } catch (error) {
            console.error("Error fetching location suggestions:", error);
            return [];
          }
      };

    const handleInputChange = async (event) => {
        const inputValue = event.target.value;
        setSelectedLocation(inputValue);

        const suggestions = await fetchLocationSuggestions(inputValue);
        setSuggestions(suggestions);
    };

    const nextStepAndPage = () => {
        props.nextStep(1);
        props.nextPage(1);
    }

    const { task, setTask } = useContext(TaskContext); 

    const taskDetails = {
        'location': {
            'streeAddress': '',
            'unitApt': '',
        },

        'size': '',
        'description': ''
    }

    const onSubmit = () => {

    }

    const onContinue = () => {
        
    }

    return (
        <Box sx={{display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column"}}>
            <Box>
                <Typography variant="h5">General Mounting</Typography>
            </Box>

            <Box sx={{border: "1px solid grey", borderRadius: "10px", background: "white", mt: "15px", p: "15px"}}>
                <Box sx={{p: "10px", display: "flex", flexDirection: "column", gap: "10px"}}>
                    <Typography variant="h6">Your Task Location</Typography>
                    {showLocation && <Box>
                        <Box sx={{border: "1px solid", borderRadius: "5px", mt: "15px"}}>
                            <Box sx={{p: "10px"}}>
                                <InputBase required placeholder='Enter street address' sx={{width: "100%"}} onChange={handleInputChange} value={selectedLocation}/>
                                <ul>
                                    {suggestions.map((suggestion) => (
                                    <li key={suggestion}>{suggestion}</li>
                                    ))}
                                </ul>
                            </Box>
                        </Box>
                        <Box sx={{border: "1px solid", borderRadius: "5px", mt: "15px"}}>
                            <Box sx={{p: "10px"}}>
                                <InputBase required placeholder='Unit or Apt #'  sx={{width: "100%"}}/>
                            </Box>
                        </Box>
                        <Box sx={{display: "flex", justifyContent: "center", m: "15px"}}>
                            <Button variant="contained" color="success" onClick={() => {setShowLocation(false);setShowTaskOptions(true)}}>Continue</Button>
                        </Box>
                    </Box>}
                </Box>
            </Box>

            <Box sx={{border: "1px solid grey", borderRadius: "10px", background: "white", mt: "15px", p: "15px"}}>
                <Box sx={{p: "10px", display: "flex", flexDirection: "column", gap: "10px"}}>
                    <Typography variant="h6">Task Options</Typography>
                    {showTaskOptions && <Box>
                        <Box>
                            <FormControl>
                                <FormLabel id="task-size-buttons-group-label" sx={{fontSize: "20px"}}>How big your task is: </FormLabel>
                                <RadioGroup
                                    aria-labelledby="task-size-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="small" control={<Radio sx={{
                                        '& .MuiSvgIcon-root': {
                                        fontSize: 28,
                                        },
                                    }}/>} label="Small - Est. 1 hr" />
                                    <FormControlLabel value="medium" control={<Radio 
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                            fontSize: 28,
                                            },
                                    }}/>} label="Medium - Est. 2-3 hrs" />
                                    <FormControlLabel value="large" control={<Radio 
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                            fontSize: 28,
                                            },
                                    }}/>} label="Large - Est. 4+ hrs" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <Box sx={{display: "flex", justifyContent: "center", mb: "15px"}}>
                            <Button variant="contained" color="success" onClick={() => {setShowTaskOptions(false);setShowDescription(true)}}>Continue</Button>
                        </Box>
                    </Box>}
                </Box>
            </Box>

            <Box sx={{border: "1px solid grey", borderRadius: "10px", background: "white", mt: "15px", p: "15px"}}>
                <Box sx={{p: "10px", display: "flex", flexDirection: "column", gap: "10px"}}>
                    <Typography variant="h6">Tell us the details of your task</Typography>
                    {showDescription && <Box>
                        <Typography variant="body1">Start the conversation and tell your Tasker what you need done. This helps us show you only qualified and available Taskers for the job. Don't worry, you can edit this later.</Typography>
                        <Box sx={{border: "1px solid", borderRadius: "5px", mt: "15px"}}>
                            <Box sx={{p: "10px"}}>
                                <InputBase 
                                    required
                                    multiline
                                    rows='3' 
                                    placeholder='Provide a summary of what you need done for your Tasker. Be sure to include details like the size of your space, any equipment/tools needed, and how to get in.'  
                                    sx={{width: "100%"}}/>
                            </Box>
                        </Box>
                        <Typography variant="body1">If you need two or more Taskers, please post additional tasks for each Tasker needed.</Typography>
                        <Box sx={{display: "flex", justifyContent: "center", m: "15px"}}>
                            <Button variant="contained" color="success" onClick={nextStepAndPage}>See Tasker & Prices</Button>
                        </Box>
                    </Box>}
                </Box>
            </Box>
        </Box>
    );
}

export default DescribeTask;