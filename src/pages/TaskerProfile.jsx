import { Button, Icon, IconButton, Pagination, TablePagination, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Box, Stack } from "@mui/system";
import TaskerReview from "../components/TaskerReview";
import { useState } from "react";


const TaskerProfile = () => {
    const [page, setPage] = useState(2);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };    return (
        <Box>
            <Box sx={{display: "flex", flexDirection: "column", gap: "10px"}}>
                <Box sx={{display: "flex", justifyContent: "flex-end"}}>
                    <IconButton><CloseIcon /></IconButton>
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", pt: "10px", pb: "10px"}}>
                        <Box>
                            <img 
                                src='https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_408,w_408/v1680131974/emmnofwe1sfunifaszri.jpg'
                                style={{'border-radius': "50%"}}
                                height= "90px"
                                width="90px"
                            />
                        </Box>

                        <Box>
                            <Box>
                                <Typography variant='h5'>Brandon P.</Typography>
                            </Box>

                            <Box>
                                <Typography variant='body2'>5.0 (1107 reviews)</Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        <Box sx={{textAlign: "end"}}>
                            <Typography variant='h5'>$87.75/hr</Typography>
                        </Box>

                        <Box>
                            <Button variant="contained" color="success" sx={{borderRadius: "20px"}}>Select & Continue</Button>
                        </Box>
                    </Box>
                </Box>

                <Box>
                    <Typography>About me</Typography>
                    <Typography sx={{pt: "10px", pb: "10px"}}>I’m vaccinated. I also love helping!</Typography>
                </Box>

                <Box>
                    <Typography>Skills & Experience</Typography>
                    <Typography sx={{pt: "10px", pb: "10px"}}>AC units! I love hanging art! Previously I worked for a professional sign company. I have a ton of experience in mounting whiteboards, TVs, shelves and pictures in homes and offices. I can also help install your window AC.</Typography>
                </Box>

                <Box>
                    <Typography>Work Photos</Typography>
                </Box>

                <Box>
                    <Typography>Reviews</Typography>
                    <Box sx={{display: "flex", gap: "20px", pt: "10px", flexDirection: "column"}}>
                        <TaskerReview />
                            <TaskerReview />
                            <TaskerReview />
                            <TaskerReview />
                            <TaskerReview />
                        <TablePagination
                            component="div"
                            count={100}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Box>
                    
                </Box>
            </Box>
        </Box>
    );
}

export default TaskerProfile;