import React, { useRef } from 'react';
import { Grid, Box } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import Button from './Button'
import BicycleCard from './BicycleCard';


const Section2 = () => {
    const ref = useRef(null);
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

  return (
    <>
        <Grid container columnSpacing={5} ref={ref} sx={{margin: '120px 0 0 190px', overflowX: 'auto', width: '100%'}}>
            <BicycleCard 
                src="https://res.cloudinary.com/dlfbw1snm/image/upload/v1650537066/PHO_BIKE_PERS_REVO_RAY-21-CrossRay-E-FS-6-0-oblique-web__SALL__AEPI__V1_1_p43l2g.png"
                headerText='Universal eBike Kit'
                width='199px'
                height='229px'
                price={750.00}
            />
            <BicycleCard 
                src="https://res.cloudinary.com/dlfbw1snm/image/upload/v1650537066/csm_ghost-bikes-e-square-trekking-universal-u-nightblue-blue-45_503566db8a_1_xczzdg.png"
                headerText='Brampoton eBike Kit'
                width='auto'
                height='202px'
                pad='30px 0 0 0'
                price={750.00}
            />
            <BicycleCard 
                src="https://res.cloudinary.com/dlfbw1snm/image/upload/v1650537066/PHO_BIKE_PERS_REVO_RAY-21-FullRayE-seven-100-petrolmet-blackmatte-oblique-web__SALL__AEPI__V1_1_d1x5xi.png"
                headerText='Additional eBike Kit'
                width='auto'
                height='202px'
                pad='30px 0 0 0'
                price={250.00}
            />
        </Grid>
        <Box sx={{position: 'absolute', right: '200px', marginTop: '26px'}}>
            <button className='button2'> <ArrowBack /> </button> <button className='button3'> <ArrowForward /> </button>
        </Box>
    </>
  )
}

export default Section2