import { Box, Checkbox, Divider, FormControlLabel, FormGroup, Slider, Typography, FormLabel, RadioGroup, Radio, Button} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import { useEffect } from "react";



const FilterTaskers = (props) => {

    const time = [
        'I\'m flexible',
        "8:00am",
        "9:00am",
        "10:00am",
        "11:00am",
        "12:00pm",
        "01:00pm",
        "02:00pm",
        "03:00pm",
        "04:00pm",
        "05:00pm",
        "06:00pm",
        "07:00pm",
        "08:00pm",
        "09:00pm",
    ]

    const [price, setPrice] = useState([10,150]);
    const [taskerType, setTaskerType] = useState({
        "elite": false,
        "greatValue": false
    });

    const [timeRange, setTimeRange] = useState({
        "morning": false,
        "afternoon": false,
        "evening": false
    });

    const [dateType, setDateType] = useState('')


    const [specificTime, setSpecificTime] = useState(time[0])

    const marks = [
        {
            value: 10,
            label: "$10"
        },
        {
            value: 150,
            label: "$150+"
        }
    ];

    const changeTaskerType = (event) => {
        setTaskerType((prev) => ({
            ...prev,
            [event.target.name]: event.target.checked            
        }));
    }

    const changeTimeRange = (event) => {
        setTimeRange((prev) => ({
            ...prev,
            [event.target.name]: event.target.checked            
        }));
    }

    const handleChange = (event, newValue) => {
        setPrice((prev) => newValue);
    };

    const valuetext = (value) => {
        return `$${value}`;
    }

    const changeSpecificTime = (event) => {
        setSpecificTime(event.target.value);
    }

    const handleDateChange = (event) => {
        setDateType(event.target.value);
        console.log(event.target.value)
    }

    useEffect(() => {
        if(timeRange["morning"] || timeRange["afternoon"] || timeRange["evening"]) {
            setSpecificTime(time[0]);
        }
    }, [timeRange]);

    useEffect(() => {
        if(specificTime !== time[0]) {
            setTimeRange({
                "morning": false,
                "afternoon": false,
                "evening": false
            });
        }
    }, [specificTime]);

    return (
        <Box sx={{background: "white", border: "1px solid", borderRadius: "10px", padding: "15px", display: "flex" ,flexDirection: "column", justifyContent: "center", gap: "20px"}}>
            <Box>
                <Typography>Date</Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: "10px",
                    p: "15px",
                    gap: "20px"
                  }}
                >
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-labelledby="date-group"
                      name="date-group"
                      value={dateType || ''}
                      onChange={handleDateChange}
                    >
                      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", pl: "25px", gap: "10px"}}>
                        <FormControlLabel
                          value="today"
                          control={
                            <Button
                              sx={{
                                borderRadius: "50px",
                                border: dateType === "today" ? "1px solid black" : "1px solid",
                              }}
                              onClick={handleDateChange}
                              color="success"
                            >
                              Today
                            </Button>
                          }
                        />
                        
                        <FormControlLabel
                          value="3days"
                          control={
                            <Button
                            sx={{
                              borderRadius: "50px",
                              border: dateType === "3days" ? "1px solid black" : "1px solid",
                            }}
                              onClick={handleDateChange}
                              color="success"
                            >
                              Within 3 Days
                            </Button>
                          }
                        />
                        
                     
                      </Box>
                      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", pl: "25px", gap: "10px", mt: "10px"}}>
                        <FormControlLabel
                          value="week"
                          control={
                            <Button
                            sx={{
                              borderRadius: "50px",
                              border: dateType === "week" ? "1px solid black" : "1px solid",
                            }}
                              onClick={handleDateChange}
                              color="success"
                            >
                              Within a week
                            </Button>
                          }
                        />
                        <FormControlLabel
                          value="custom"
                          control={
                            <Button
                            sx={{
                              borderRadius: "50px",
                              border: dateType === "custom" ? "1px solid black" : "1px solid",
                              width: "100%"
                            }}
                              onClick={handleDateChange}
                              color="success"
                            >
                              Choose Date
                            </Button>
                          }
                        />
                      </Box>
                    </RadioGroup>
                  </FormControl>
                </Box>
            </Box>
            <Divider />
            <Box>
                <Typography>Time of day</Typography>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Morning (8am - 12pm)" name="morning" onChange={changeTimeRange} checked={timeRange["morning"]}/>
                    <FormControlLabel control={<Checkbox />} label="Afternoon (12pm - 5pm)" name="afternoon"onChange={changeTimeRange} checked={timeRange["afternoon"]}/>
                    <FormControlLabel control={<Checkbox />} label="Evening (5pm - 9:30pm)" name="evening"onChange={changeTimeRange} checked={timeRange["evening"]}/>
                </FormGroup>

                <Box sx={{justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Typography sx={{mt: "10px", mb: "10px"}}>or choose a specific time</Typography>
                    <FormControl fullWidth>
                        <InputLabel id="specific-time"></InputLabel>
                        <Select
                        labelId="specific-time"
                        id="specific-time"
                        value={specificTime}
                        defaultValue="I\'m flexible"
                        onChange={changeSpecificTime}
                        >
                        {time.map((t, i) => {
                            return (
                                <MenuItem value={t}>{t}</MenuItem>
                            );

                        })}
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <Divider />
            <Box>
                <Typography>Price</Typography>
                <Box sx={{pr: "20px", pl: "20px", justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Slider
                        getAriaLabel={() => 'Price range'}
                        value={price}
                        getAriaValueText={valuetext}
                        onChange={handleChange}
                        valueLabelFormat={valuetext}
                        min={10}
                        max={150}
                        color="success"
                        size="large"
                        marks={marks}
                        valueLabelDisplay="on"
                    />
                    <Typography>The average hourly rate is $60.59</Typography>

                </Box>
                
            </Box>
            <Divider />
            <Box>
                <Typography>Tasker Type</Typography>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Elite Tasker" name="elite" onChange={changeTaskerType}/>
                    <FormControlLabel control={<Checkbox />} label="Great Value" name="greatValue"onChange={changeTaskerType}/>
                </FormGroup>
            </Box>
        </Box>
    );
}

export default FilterTaskers;