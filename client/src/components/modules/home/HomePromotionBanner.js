import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';

function HomePromotionBanner() {
  const banners = [
    { banner_id: '1', owner: 'nike', src: '/banner/alexander-rotker-l8p1aWZqHvE-unsplash.jpg' },
    { banner_id: '2', owner: 'nike', src: '/banner/hermes-rivera-dII8zRTK6lo-unsplash.jpg' },
    { banner_id: '3', owner: 'nike', src: '/banner/malvestida-DMl5gG0yWWY-unsplash.jpg' },
    { banner_id: '4', owner: 'nike', src: '/banner/revolt-164_6wVEHfI-unsplash.jpg' },
  ];

  // const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const AutoPlaySwipeableViews = SwipeableViews;
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = banners.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: '100%', height: '50vh' }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {banners.map((step, index) => (
          <div key={step.banner_id} >
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: '50vh',
                  width: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  overflow: 'hidden',
                }}
                src={step.src}
                alt={step.owner}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default HomePromotionBanner;