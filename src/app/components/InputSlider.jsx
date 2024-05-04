import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import {blue} from '@mui/material/colors';
import { fetchCurrentValueFromAdafruit, addNewValueToAdafruit } from '../utils/device';

const InputSlider = () => {
  const [value, setValue] = useState(0);
  const feedKey = 'fan-control';  // Replace this with your actual feed key

  useEffect(() => {
    // Function to fetch and set the initial slider value from Adafruit
    const fetchAndSetInitialValue = async () => {
      try {
        const { lastValue } = await fetchCurrentValueFromAdafruit(feedKey);
        setValue(lastValue);
      } catch (error) {
        console.error('Failed to fetch initial value:', error);
      }
    };

    // Fetch the initial value once on component mount
    fetchAndSetInitialValue();

    // Set up an interval to fetch the value every second (1000 milliseconds)
    const intervalId = setInterval(() => {
      fetchAndSetInitialValue();
    }, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
}, []);  // Empty dependency array ensures this effect runs only once on mount


  const handleSlide = (event, newValue) => {
    setValue(newValue);
  };

  const handleSlideCommitted = async (event, newvalue) => {
    console.log('Setting new value:', newvalue);
    try {
      let updateValue = ''
      if(newvalue==0){updateValue='6'}
      else if(newvalue<=30){updateValue='3'}
      else if(newvalue<=70){updateValue='4'}
      else if(newvalue<=100){updateValue='5'}
      await addNewValueToAdafruit(feedKey, updateValue);
    } catch (error) {
      console.error('Failed to set new value:', error);
    }
  };

  return (
    <Box sx={{ width: 390, marginTop: '15px' }}>
      <Typography sx={{ fontSize: '1.6rem', fontFamily: 'sans-serif', padding: 0, boxSizing: 'border-box' }} align="center" id="non-linear-slider" gutterBottom>
        Fan
      </Typography>
      <Slider
        aria-label="Temperature"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
        value={value}
        onChange={handleSlide}
        onChangeCommitted={handleSlideCommitted}
        color="primary"
        sx={{color:blue[600]}} // Use this to set the color dynamically
      />
    </Box>
  );
}

export default InputSlider