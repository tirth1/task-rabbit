import { Box, Typography } from "@mui/material";


const PopularProjectCard = (props) => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", mt: "20px", mb: "20px", border: "1px solid white", boxShadow: "0px 2px 8px rgb(0 0 0 / 17%)"}}>
            <Box>
                <img 
                    src={props.image}
                    height="154px"
                    alt={props.task}
                />
            </Box>
            <Box sx={{display: "flex", flexDirection: "column", gap: "5px", pt: "20px", pb: "20px"}}>
                <Box sx={{textAlign: "center", fontWeight: 'bold'}}>
                    <Typography>{props.task}</Typography>
                </Box>
                <Box sx={{textAlign: "center", fontWeight: '1000'}}>
                    <Typography variant= "subtitle2">Avg. Project: ${props.min} - ${props.max}</Typography>
                </Box>
            </Box>
            
        </Box>
    );
}

export default PopularProjectCard;
