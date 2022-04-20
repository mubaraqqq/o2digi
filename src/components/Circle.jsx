import React from 'react';
import { Grid } from '@mui/material'

const Circle = ({ color, space }) => {
  return (
    <Grid item xs={space}>
        <div style={{ backgroundColor: color, width: '11px', height: '11px', borderRadius: '50%'}}></div>
    </Grid>
  )
}

export default Circle