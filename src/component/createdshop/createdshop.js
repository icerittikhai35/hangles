import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Pages from '../notifications/notifications'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles(theme => ({
}));

//สำหรับใส่ชื่อ Step
function getSteps() {
    return ['Information', 'Account'];
}

export default function Createdshop() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const theme = useTheme();

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    //สำหรับ get Step ตาม index
    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <Pages />;
            case 1:
                return 'Account Component';
            default:
                return 'Unknown stepIndex';
        }
    }

    return (
        <div style={{ maxWidth: '760px', margin: 'auto', backgroundColor: 'white', paddingTop: 70, height: '100%' }}>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div style={{ maxWidth: '760px', margin: 'auto', backgroundColor: 'white', height: '100%' }}>
                        <div>{getStepContent(activeStep)}</div>
                    </div>
                )}
            </div>

            <MobileStepper
                variant="dots"
                steps={3}
                position="static"
                activeStep={activeStep}
                className={classes.root}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === 2}>
                        ถัดไป
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        กลับ
                    </Button>
                }
            />

        </div>
    );
}
