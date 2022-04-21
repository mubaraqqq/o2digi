import React from 'react';
import { Box, Stack, Paper, Typography } from '@mui/material';
import BikeCard from './BikeCard';

const Section3 = () => {
  return (
    <Box sx={{margin: '131px 0 0 230px'}}>
        <Typography className='section3-heading'>Other Type of Bikes</Typography>
        <Stack direction='row' spacing={3}>
            <BikeCard 
                src='https://res.cloudinary.com/dlfbw1snm/image/upload/v1650569680/eZesty_LTD_Ultimate_D041_1___1_1_jn5j17.png'
                bounds='2px solid #FCB72B'
                text='Hybrid Bikes'
                width='166px'
                colour='#FCB72B'
            />
            <BikeCard 
                src='https://res.cloudinary.com/dlfbw1snm/image/upload/v1650569677/eZesty_LTD_Ultimate_D041_1___1_2_gez1nj.png'
                text='Fixie Bikes'
                width='143px'
                colour='#233348'
                shadow='10px 24px 54px rgba(0, 0, 0, 0.06)'
            />
            <BikeCard 
                src='https://res.cloudinary.com/dlfbw1snm/image/upload/v1650569677/eZesty_LTD_Ultimate_D041_1___1_2_gez1nj.png'
                text='Folding Bikes'
                width='143px'
                colour='#233348'
                shadow='10px 24px 54px rgba(0, 0, 0, 0.06)'
            />
            <BikeCard 
                src='https://res.cloudinary.com/dlfbw1snm/image/upload/v1650569677/eZesty_LTD_Ultimate_D041_1___1_2_gez1nj.png'
                text='Mount Bikes'
                width='143px'
                colour='#233348'
                shadow='10px 24px 54px rgba(0, 0, 0, 0.06)'
            />
            <BikeCard 
                src='https://res.cloudinary.com/dlfbw1snm/image/upload/v1650569677/eZesty_LTD_Ultimate_D041_1___1_2_gez1nj.png'
                text='City Bikes'
                width='143px'
                colour='#233348'
                shadow='10px 24px 54px rgba(0, 0, 0, 0.06)'
            />
        </Stack>
    </Box>
  )
}

export default Section3