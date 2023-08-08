import { Box, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';



const FeaturedTasker = (props) => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", mt: "20px", mb: "20px", border: "1px solid white", boxShadow: "0px 2px 8px rgb(0 0 0 / 17%)", width: "400px"}}>
            <Box sx={{p: "20px"}}>
                <Box sx={{flex: "30%"}}>
                    <Box sx={{display: "flex", pb: "20px", borderRadius: "10px"}}>
                        <Box>
                            <img
                                src={props.image}
                                alt={props.name}
                                height="100px"
                                width="100px"
                                border-radius="50px"/>
                        </Box>

                        <Box sx={{display: "flex", flexDirection: "column", ml: "10px", mr: "10px"}}>
                            <Typography variant="h6">{props.name}</Typography>
                            <Typography variant="body1">{props.review}% positive review</Typography>
                            <Typography variant="body1">{props.tasks} completed tasks</Typography>
                        </Box>
                    </Box>
                </Box>
                <Divider />
                <Box sx={{flex: "30%"}}>
                    <Box sx={{display: "flex", flexDirection: "column", gap: "10px", mt: "10px", mb: "15px"}}>
                        <Typography>Featured Skills</Typography>
                        <Box sx={{display: "flex", justifyContent: "space-between"}}>
                            <Typography>Help moving</Typography>
                            <Typography>$52.92/hr</Typography>
                        </Box>
                        <Box sx={{display: "flex", justifyContent: "space-between"}}>
                            <Typography>Furniture assembly</Typography>
                            <Typography>$152.50/hr</Typography>
                        </Box>
                        <Box sx={{display: "flex", justifyContent: "space-between"}}>
                            <Typography>Home repairs</Typography>
                            <Typography>$88.12/hr</Typography>
                        </Box>
                    </Box>
                </Box>
                <Divider />
                <Box sx={{flex: "30%"}}>
                    <Box sx={{mt: "10px", mb: "15px"}}>
                        <Typography variant="h6">I'm the right person for the job: </Typography>
                        <Typography variant="subtitle2">I have supplies and resources available for helping you with your move ins, move outs and move aroun...</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default FeaturedTasker;
