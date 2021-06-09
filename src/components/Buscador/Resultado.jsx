import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'; import Grid from '@material-ui/core/Grid';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import nuboso from '../../assets/img/svg/nuboso.svg'
import lluvioso from '../../assets/img/svg/lluvia.svg'
import diaLluvioso from '../../assets/img/svg/dialluvioso.svg'
import neblina from '../../assets/img/svg/neblina.svg'
import nevada from '../../assets/img/svg/nevada.svg'
import soleado from '../../assets/img/png/sun.png'
import tormenta from '../../assets/img/svg/tormenta.svg'



const useStyles = makeStyles((theme) => ({
  root: {
    background: '#323543',
    border: '1px solid #01afec',
    borderRadius: '13px',
    width: '100%',
    color: '#ffffff',
    marginBottom: theme.spacing(10),
    paddingTop:5

  },
  contenido: {
    color: 'ffffff',
    paddingTop:5
  },
  img: {
    maxWidth: 200,
    height: 'auto',
    marginTop:10
  }
}));


export const Resultado = ({ temperatura }) => {
  const imagen = {
    Clouds: nuboso,
    Rain: lluvioso,
    Drizzle: diaLluvioso,
    Mist: neblina,
    Snow: nevada,
    Clear: soleado,
    Thunderstorm: tormenta,

  }

  const classes = useStyles();
  const { main, name, sys } = temperatura && temperatura;
  const amanecer = new Date(sys?.sunrise * 1000);
  const noche = new Date(sys?.sunset * 1000);
  const horaAmanecer = amanecer.toLocaleTimeString();
  const horaNoche = noche.toLocaleTimeString();
  const l = temperatura?.weather.map(element => element.main);
  const wheather = l && l[0];




  return (


    <Card className={classes.root}>

      
        <Grid
          container
          // direction="row"
          spacing={3}
          alignItems="center"
          className={classes.contenido}
        >
          <Grid item xs={12} sm={12} md={4} >
            <LocationOnIcon fontSize='large' style={{ marginRight: 10, color: '#386293', marginLeft: 3 }} />
            <Typography variant="h5" component="span">
              {name}
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={12} md={4}>
            <img src={imagen[wheather]} alt='img alt' className={classes.img} />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h5" component="span">
              {main?.temp.toFixed(1)} º
            </Typography>
          </Grid>
         

        </Grid>

     



      <CardActions
      >

        <Grid
          container
          spacing={2}
                    
        >

          <Grid item xs={12} sm={6} md={6}>

            <ExpandMoreIcon style={{ fontSize: 18}} />
            <Typography style={{  marginRight: 5}} variant="body1" component="span">
              {main?.temp_min.toFixed(1)} º
          </Typography>
            <ExpandLessIcon  style={{ fontSize: 18}}/>
            <Typography style={{  marginRight: 0 }} variant="body1" component="span">
              {main?.temp_max.toFixed(1)} º
          </Typography>

          </Grid>

          <Grid item xs={12} sm={6} md={6}>

            <Brightness5OutlinedIcon
            
            
              style={{ fontSize: 18, marginRight: 5, color: '#ddd98d' }}
            />
            <Typography variant="body1" component="span">
              {horaAmanecer}
            </Typography>
            <NightsStayOutlinedIcon   style={{ fontSize: 18, color: '#386293', marginLeft: 10 }} />
            <Typography variant="body1" component="span">
              {horaNoche}
            </Typography>

          </Grid>



        </Grid>





      </CardActions>

    </Card>


  )
}
