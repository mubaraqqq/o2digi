import React from 'react';
import { Paper, Grid, Typography, Divider, Stack, Box } from '@mui/material';
import Button from './Button';
// import img1 from 'https://res.cloudinary.com/dlfbw1snm/image/upload/v1650537066/PHO_BIKE_PERS_REVO_RAY-21-FullRayE-seven-100-petrolmet-blackmatte-oblique-web__SALL__AEPI__V1_1_d1x5xi.png';

const BicycleCard = ({ src, headerText, price, width, height, pad }) => {
  return (
    <Grid item>
        <Paper sx={{width: '382px', height: '386px', backgroundColor: 'white', borderRadius: '20px', boxShadow: '10px 24px 54px rgba(0, 0, 0, 0.06)'}}>
          <Typography className='card-title' variant='body2' sx={{padding: '24px 0 0 24px'}}>{headerText}</Typography>
          <Box sx={{display: 'flex', justifyContent: 'center', padding: pad}}>
            <img src={src} alt="" width={width} height={height}/>
          </Box>
          <Divider variant='middle' />
          <Stack direction='row' spacing={18} sx={{padding: '15px 30px'}}>
            <Stack spacing={2}>
              <Typography className='card-price' variant='body2'>Price</Typography>
              <Typography className='card-tag' variant='body2'>${price}</Typography>
            </Stack>
            <Stack sx={{paddingTop: '13px'}}>
              <Button text='Order' />
            </Stack>
          </Stack>
        </Paper>
    </Grid>
  )
}

export default BicycleCard