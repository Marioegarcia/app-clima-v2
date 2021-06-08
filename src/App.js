import { Container,Grid } from '@material-ui/core';
import { Buscador } from './components/Buscador/Buscador';
import { Header } from './components/Header/Header';
import {ThemeProvider} from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles';


import theme from './temaConfig'
import { Appbar } from './components/Appbar/Appbar';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    background: '#262935',
    position:'absolute',
  },
  content:{
    textAlign:'center'
  }
 
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme} >
     
      <Grid container  
      className={classes.root}
      
      >
    
        <Container 
        
        >
          <Grid item xs={12}>
            <Header/>
          </Grid>
          <Grid item xs={12} >
          <Buscador/>
          </Grid>
        </Container>
      </Grid>
      <Appbar/>
    </ThemeProvider>
  );
}

export default App;
