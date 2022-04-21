import React from 'react';
import { Paper, Box, Typography } from '@mui/material';

const BikeCard = ({ src, bounds, text, width, colour, shadow }) => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Paper sx={{width: '227px', height: '117px', border: bounds, display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: shadow}}>
            <img src={src} alt="" width={width}/>
        </Paper>
        <Typography sx={{color: colour}} className='bikecard-name' variant='body1'>{text}</Typography>
    </Box>
  )
}

export default BikeCard