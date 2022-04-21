import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Button from './Button';
import Lottie from 'react-lottie';
import animationData from './lotties/Header lottie';

const Section1 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

  return (
    <Grid container sx={{marginLeft: '220px', width: 'auto'}}>
        <Grid item xs={5} sx={{marginTop: '150px'}}>
            <Box sx={{width: '348px', height: '112px'}}>
                <Typography className='section1-heading' variant='h2'>Your Bike Electric Update</Typography>
            </Box>
            <Box sx={{width: '418px', height: '96px', marginTop: '24px', marginBottom: '49px'}}>
                <Typography className='section1-body' variant='body2'>
                    Dummy text progressive, and affordable healthcare,
                    accessible on mobile and online for everyone
                </Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '430px', height: '56px', border: '1px solid #C2CFE0', borderRadius: '100px', padding: '0 0.1em'}}>
                <SearchIcon sx={{width: '20px', height: '20px', color: '#C2CFE0', marginRight: '15px'}} /> 
                <input type="text" placeholder='Search Bike or anything'/>
                <Button text='Find'/>
            </Box>
        </Grid>
        <Grid item xs={5} sx={{marginTop: '70px'}}>
            <Box sx={{width: '411px', height: '411px'}}>
                <Lottie 
                    options={defaultOptions}
                    height={400}
                    width={400}
                />
            </Box>
        </Grid>
    </Grid>
  )
}

export default Section1