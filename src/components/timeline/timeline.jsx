import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

export default function OutlinedTimeline({ timeline }) {

  const steps = Object.entries(timeline);

  steps.map((label) => {
    console.log(label);
  });

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={steps.length} alternativeLabel>
        {steps.map(step => (
          <Step key={step[1].label}>
            <StepLabel style={{ display: 'flex', flexDirection: 'column'}}>
              <div>{step[1].label}</div>
              <div>{step[1].value}</div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
