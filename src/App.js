import './App.css';
import { Stack, Grid } from '@mui/material'
import Navigation from './components/Navigation';
import Circle from './components/Circle';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Stack sx={{width: '80px', position: 'absolute', marginRight: '15px'}}>
        <Grid container rowSpacing={'21px'} columnSpacing={'29px'}>
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
    </div>
  );
}

export default App;
