import { Box, IconButton, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const list = (<List>
    {['Locations', 'Services', 'Sign Up / Log In', 'Become a Tasker'].map((text, index) => (
      <ListItem key={text} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {
                {
                    0: <LocationOnIcon fontSize="large"/>,
                    1: <DesignServicesIcon  fontSize="large"/>,
                    2: <LoginIcon  fontSize="large"/>,
                    3: <AssignmentIndIcon fontSize="large"/>,
                }[index]
            }
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>);

    const [open, setOpen] = useState(false);

    return (
        <Box sx={{background: "white", pl: "7%", pr: "7%"}}>
            <Box sx={{display: "flex", justifyContent: 'space-between', mt: {xs: '10px', sm: '15px', md: '15px', lg: '15px'}, mb: {xs: '10px', sm: '15px', md: '15px', lg: '15px'}, w: "100%", alignItems: "center", gap: "20px"}}>
                <Box sx={{visibility: {xs: 'visible', sm: 'visible', md: 'hidden', lg: 'hidden'}, display: {md: 'none', lg: 'none'}}}>
                    <IconButton onClick={() => setOpen(true)}><MenuIcon fontSize="large"/></IconButton>
                    <SwipeableDrawer
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    >
                        {list}
                    </SwipeableDrawer>
                </Box>

                <Box>
                    <Link to="/">
                        <img 
                            src="https://assets.taskrabbit.com/v3/assets/web/logos/tr_full_new-7fddf69e54778fd5794796b6ade7e92f7c36071dfdc812d7ff05e02a01775919.svg"
                            height="30px"
                            width="176px"
                        />
                    </Link>
                </Box>

                <Box sx={{display: {xs: 'none', sm: "none", md: "flex", lg: "flex"}, justifyContent: "space-evenly", gap: "20px", color:"grey", alignItems: "center"}} clone>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}><Typography>Locations</Typography></Link>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}><Typography>Services</Typography></Link>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}><Typography>Sign Up / Log In</Typography></Link>
                    <Box sx={{display: "flex", border: "1px solid #0d7a5f", color: "#0d7a5f", borderRadius: "5px", pt: "5px", pb: "5px", pl: "10px", pr: "10px"}}>
                        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <Typography>Become a Tasker</Typography>
                        </Link>
                    </Box>
                </Box>
            </Box>
            
        </Box>
    );
}

export default NavBar;