import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import PageCreate from '../createdshop/page-create';
import PageName from '../createdshop/page-nameshop';
import PageDetail from '../createdshop/page-detail';
import PageMapShop from '../createdshop/page-map';
import PageAdressShop from '../createdshop/page-address';

const useStyles = makeStyles(theme => ({
}));

//สำหรับใส่ชื่อ Step

export default function Createdshop() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const theme = useTheme();

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

 

    //สำหรับ get Step ตาม index
    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <PageCreate />;
            case 1:
                return <PageName />;
            case 2:
                return <PageDetail />;
            case 3:
                return <PageMapShop />;
            case 4:
                return <PageAdressShop />;
            default:
                return <PageCreate />;
        }
    }
    console.log(getStepContent)
    return (
        <div style={{ maxWidth: '760px', margin: 'auto', backgroundColor: 'white', height: '100vh' }}>
            <div>
                <div style={{ maxWidth: '760px', margin: 'auto', backgroundColor: 'white', height: '100%' }}>
                    <div>{getStepContent(activeStep)}</div>
                </div>
            </div>

            <MobileStepper
                variant="dots"
                steps={5}
                position="static"
                activeStep={activeStep}
                className={classes.root}
                style={{ backgroundColor: '#ffffff' }}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === 4}>
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
