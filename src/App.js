import './App.css';
import { Stack, Grid } from '@mui/material'
import Navigation from './components/Navigation';
import Circle from './components/Circle';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3'
import vect1 from './images/Vector1.png';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Stack sx={{width: '80px', position: 'absolute', marginLeft: '15px', marginTop: '43px'}}>
        <Grid container rowSpacing={'29px'} columnSpacing={'21px'}>
          <Circle color={'#FFE8B9'} space={4}/>
          <Circle color={'#FFE8B9'} space={4}/>
          <Circle color={'#FFE8B9'} space={4}/>
          <Circle color={'#FFE8B9'} space={4}/>
          <Circle color={'#FFE8B9'} space={4}/>
          <Circle color={'#FFE8B9'} space={4}/>
          <Circle color={'#FFE8B9'} space={4}/>
          <Circle color={'#FFE8B9'} space={4}/>
          <Circle color={'#FFE8B9'} space={4}/>
          <Circle color={'#FFE8B9'} space={4}/>
          <Circle color={'#FFE8B9'} space={4}/>
          <Circle color={'#FFE8B9'} space={4}/>
        </Grid>
      </Stack>
      <Section1 />
      <div className='vector1'><img src={vect1} alt="Vector1" /></div>
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
