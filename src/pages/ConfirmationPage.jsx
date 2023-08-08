import { Box, Typography, Button, InputBase } from "@mui/material";

const ConfirmationPage = (props) => {

    const editTask = () => {
        props.nextStep(0);
        props.nextPage(0);
    }

    return (
        <Box sx={{display: "flex", justifyContent: "space-around", gap: "30px", flexDirection: {xs: 'column', sm: 'column', md: 'row', lg: 'row'}}}>
            <Box sx={{display: "flex", flexDirection: "column", gap: "30px", flex: "20%"}}>
                <Box  sx={{border: "1px solid gray", display: "flex", flexDirection: "column", borderRadius: "20px", background: "white"}}>
                    <Box sx={{border: "1px solid white", borderRadius: "20px", background: "#f6f5f1"}}>
                        <Box sx={{p: "20px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", gap: "10px"}}>
                            <Typography variant="h6">General Mounting</Typography>
                            <img
                                src="https://rohitrathodd.me/assets/img/home/rohitrathod.jpg"
                                height="100px"
                                width="100px"
                                style={{'border-radius': "50%"}}
                                alt={props.name}
                            />
                            <Typography>Rohit Rathod</Typography>
                        </Box>
                        
                    </Box>
                
                    <Box sx={{p: "20px", display: "flex", flexDirection: "column", gap: "20px"}}>
                        <Typography>Tue, May 23 at 10:30am</Typography>
                        <Typography>Tue, May 23 at 10:30am</Typography>
                        <Typography>Small - Est. 1hr</Typography>
                        
                        <Button variant="outlined" color="success" sx={{width: "110px"}} onClick={editTask}>Edit Task</Button>
                    </Box>
                </Box>

                <Box  sx={{border: "1px solid gray", background: "white", borderRadius: "20px"}}>
                    <Box sx={{p: "20px", display: "flex", flexDirection: "column", gap: "20px"}}>
                        <Typography variant="h6">Price Details</Typography>
                        <Box sx={{display: "flex", justifyContent: "space-between"}}>
                            <Typography>Hourly Rate:</Typography>
                            <Typography>$88</Typography>
                        </Box>

                        <Box sx={{display: "flex", justifyContent: "space-between"}}>
                            <Typography>Trust & Support Fee:</Typography>
                            <Typography>$20</Typography>
                        </Box>

                        <Box sx={{display: "flex", justifyContent: "space-between"}}>
                            <Typography>Total Rate:</Typography>
                            <Typography>$120</Typography>
                        </Box>

                        <Typography>You may see a temporary hold on your payment method in the amount of your Tasker's hourly rate of $87.75. You can cancel at any time. Tasks cancelled less than 24 hours before the start time may be billed a cancellation fee of one hour. Tasks have a one-hour minimum.</Typography>
                        <Typography>Please follow all public health regulations in your area. Learn more.</Typography>
                    </Box>
                </Box>
            </Box>
            
            <Box sx={{flex: "40%", display: "flex", flexDirection: "column", gap: "30px"}}>
                <Box sx={{border: "1px solid gray", background: "white", borderRadius: "20px", display: "flex", flexDirection: "column", gap: "30px"}}>
                    <Box sx={{p: "20px", display: "flex", flexDirection: "column", gap: "30px"}}>
                        <Typography variant="h6">Review your task description</Typography>
                        <Box sx={{border: "1px solid", borderRadius: "10px"}}>
                                <Box sx={{p: "10px"}}>
                                    <InputBase 
                                        required
                                        multiline
                                        rows='6'     
                                        value="asdfffff"                                
                                        sx={{width: "100%"}}/>
                                </Box>
                        </Box>
                        <Box sx={{display: "flex", flexDirection: "column", gap: "10px"}}>
                            <Typography variant="h6">Payment method</Typography>
                            <Typography variant="body2">You may see a temporary hold on your payment method in the amount of your Tasker's hourly rate. Don't worry - you're only billed when your task is complete!</Typography>
                            <Box sx={{border: "1px solid", borderRadius: "10px", width: "100%", display: "flex", gap: "10px"}}>
                                <Box sx={{p: "10px", flex: "95%"}}>
                                    <InputBase required placeholder="Card number"/>
                                </Box>
                                <Box sx={{p: "10px", flex: "10%"}}>
                                    <InputBase required placeholder="MM/YY"/>
                                </Box>
                                <Box sx={{p: "10px", flex: "10%"}}>
                                    <InputBase required placeholder="CVC"/>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{display: "flex", gap: "10px", flexDirection: "column"}}>
                            <Typography variant="h6">Promo Code</Typography>
                            <Box sx={{display: "flex", gap: "30px"}}>
                                <Box sx={{border: "1px solid", borderRadius: "10px", width: "85%"}}>
                                    <Box sx={{p: "10px"}}>
                                        <InputBase required/>
                                    </Box>
                                </Box>
                                <Button variant="text">Apply</Button>
                            </Box>
                        </Box>
                    </Box>
                    
                </Box>
                <Typography variant="body2">Don’t worry, you won’t be billed until your task is complete. Once confirmed, you can chat with your Tasker to update the details.</Typography>
                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <Button variant="contained" color="success">Confirm</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default ConfirmationPage;