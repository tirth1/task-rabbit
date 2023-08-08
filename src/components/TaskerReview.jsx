import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const TaskerReview = () => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", gap: "10px"}}>
            <Box sx={{display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "20px"}}>
                <Box>
                    <img 
                        src='https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_408,w_408/v1680131974/emmnofwe1sfunifaszri.jpg'
                        style={{'border-radius': "50%"}}
                        height= "30px"
                        width="30px"
                    />
                </Box>

                <Box>
                    <Typography variant="h6">Tirth B.</Typography>
                    <Typography>5.0</Typography>
                </Box>
            </Box>

            <Box sx={{display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
                <Box>
                    <Box sx={{borderRadius: "5px", background: "#2e7d32", p: "5px", color: "white"}}>
                        <Typography variant="body2">Genral Mounting</Typography>
                    </Box>
                </Box>

                <Box>
                    
                </Box>
            </Box>

            <Box>
                <Typography variant="body2">Nicholas was very communicative both before and during the task. He worked efficiently and did a great job installing my AC window unit. I would highly recommend working with Nicholas and would definitely hire him again.</Typography>
            </Box>
        </Box>
    );
}

export default TaskerReview;