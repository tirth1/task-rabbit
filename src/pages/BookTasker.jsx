import { Box, Divider } from "@mui/material";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import DescribeTask from "./DescribeTask";
import TaskersAndPrices from "./TaskersAndPrices";
import ConfirmationPage from "./ConfirmationPage";
import { TaskContextProvider } from "../context/TaskContext";

import { useState } from "react";

const BookTasker = () => {
    const steps = [
        'Describe your task',
        'Browse taskers and prices',
        'Choose date and time',
        'Confirm details'
    ];

    const [step, setStep] = useState(0);
    const [page, setPage] = useState(0);

    const nextStep = (stepNumber) => {
        setStep(stepNumber);
    }

    const nextPage = (pageNumber) => {
        setPage(pageNumber);
    }

    return (
        <Box sx={{background: "#f6f5f1", pl: "7%", pr: "7%",  pb: "30px"}}>
            <Box sx={{pt: "20px", pb: "20px"}}>
                <Stepper activeStep={step} alternativeLabel>
                    {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
            </Box>
            <Divider/>
            <TaskContextProvider>
                <Box sx={{mt: "30px"}}>
                    {
                        {
                            0: <DescribeTask nextStep={nextStep} nextPage={nextPage}/>,
                            1: <TaskersAndPrices nextStep={nextStep} nextPage={nextPage}/>,
                            3: <ConfirmationPage nextStep={nextStep} nextPage={nextPage}/>
                        }[page]
                    }
                </Box>
            </TaskContextProvider>
        </Box>
    );
}

export default BookTasker;