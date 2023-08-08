import { Box, Typography, Dialog, DialogTitle } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';


const SelectAvailibility = (props) => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const nextStepAndPage = (value) => {
    props.nextStep(3);
    props.nextPage(3);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Choose your task date and start time:</DialogTitle>
        <Box sx={{pt: "20px", pb: "20px", pl: {xs: "10px", sm: "10px", md: "20px", lg: "20px"}, pr: {xs: "10px", sm: "10px", md: "20px", lg: "20px"},display: "flex", gap: "10px", flexDirection: "column"}}>
          <Typography>You can chat to adjust task details or change start time after confirming.</Typography>
          <Box components={'StaticDateTimePicker'}>
            <StaticDateTimePicker orientation={{xs: "portrait", sm: "portrait", md: "landscape", lg: "landscape"}} disablePast onAccept={nextStepAndPage}/>
          </Box>          
          <Typography sx={{fontSize: "20px"}}>Next, confirm your details to get connected with your Tasker.</Typography>
        </Box>
      </Dialog>
    </LocalizationProvider>

  );
}

export default SelectAvailibility;