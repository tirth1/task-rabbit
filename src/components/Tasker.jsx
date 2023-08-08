import { Box, Typography, Button, Dialog, DialogTitle } from "@mui/material";
import { useContext, useState } from "react";
import {TaskContext} from "../context/TaskContext";
import TaskerProfile from "../pages/TaskerProfile";

const Tasker = (props) => {
    const { task, setTask } = useContext(TaskContext); 

    const selectTaskerAndContinue = (event) => {
        console.log(task);

        setTask(prev => ({
            ...prev,
            tasker: 'Ethan'
        }));

        props.goToNextStep();
    }

    const [showProfile, setShowProfile] = useState(false);

    const toggleShowProfile = () => {
        setShowProfile(prev => !prev)
    }

    return (
        <Box sx={{background: "white", border: "1px solid gray", borderRadius: "10px", mb: "30px"}}>
            <Box sx={{display: "flex", p: "25px", justifyContent: "space-between", gap: "25px", flexDirection: {xs: "column", sm: "row", md: "row", lg: "row"}}}>
                <Box sx={{flex: "30%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px"}}>
                    <Box>
                        <img 
                            src='https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_408,w_408/v1680131974/emmnofwe1sfunifaszri.jpg'
                            style={{'border-radius': "50%"}}
                            height= "200px"
                            width="200px"
                            alt={props.name} 
                        />
                    </Box>
                    <Button variant="text" color="success" onClick={toggleShowProfile}>View Profile & Reviews</Button>
                    <Button variant="contained" color="success" onClick={selectTaskerAndContinue}>Select & Continue</Button>
                    
                    <Typography variant="caption" textAlign={"center"}>You can chat with your Tasker, adjust task details, or change task time after booking</Typography>
                </Box>

                <Box sx={{flex: "70%"}}>
                    <Box sx={{display: "flex", flexDirection: "column", gap: "15px"}}>
                        <Box sx={{display: "flex", justifyContent: "space-between"}}>
                            <Typography variant="h5">Ethan P.</Typography>
                            <Typography variant="h5">$79.49/hr</Typography>
                        </Box>
                        <Box>
                            <Typography>4.9 (75 reviews)</Typography>
                            <Typography>159 General Mounting tasks</Typography>
                            <Typography>199 Mounting tasks overall</Typography>  
                        </Box>
                        <Box sx={{background: "#f6f5f1"}}>
                            <Box sx={{p: "15px"}}>
                                <Typography variant="h6">How I can help:</Typography>
                                <Typography>Im fully vaccinated. Completed 1100 mounting jobs and years of experiences for mounting. I mount any sizes of TVs mirror artwork, photo,shelves,curtains. On Various wall such as drywall, concrete, brick, plaster.. etc. You Name It, I Mount It. “precision, perfection are my work motto”. I have all k…</Typography>
                                <Typography variant="body1" color="green">Read More</Typography>
                            </Box>             
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Dialog onClose={toggleShowProfile} open={showProfile}>
                <Box sx={{pt: "20px", pb: "20px", pl: {xs: "10px", sm: "10px", md: "20px", lg: "20px"}, pr: {xs: "10px", sm: "10px", md: "20px", lg: "20px"}}}>
                    <TaskerProfile />
                </Box>
            </Dialog>
        </Box>
    );
};

export default Tasker;