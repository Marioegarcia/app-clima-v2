import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';import Grid from '@material-ui/core/Grid';
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



const useStyles = makeStyles(() => ({
  root: {
    background:'#323543',
    border:'2px solid #386391',
    borderRadius:'13px',
    width:'100%',
    color: '#ffffff'
  },
  contenido:{
    color:'ffffff',
    
  },
  img:{
    height:80
  }
}));


export const Resultado = ({temperatura}) => {
    const imagen = {
      Clouds:nuboso,
      Rain:lluvioso,
      Drizzle:diaLluvioso,
      Mist:neblina,
      Snow:nevada,
      Clear:soleado,
      Thunderstorm:tormenta,
     
    }
    
    const classes = useStyles();
    const {main,name,sys} = temperatura && temperatura;
    const amanecer = new Date(sys?.sunrise * 1000);
    const noche = new Date(sys?.sunset * 1000);
    const horaAmanecer = amanecer.toLocaleTimeString();
    const horaNoche = noche.toLocaleTimeString();
    const l = temperatura?.weather.map(element => element.main);
    const wheather = l && l[0];

   
  
    
    return (
        <Card className={classes.root}>
     

      <CardContent>
        <Grid  
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        className={classes.contenido}
        >
        <Grid >
            <LocationOnIcon fontSize='large' style={{marginRight:10,color:'#386293',marginLeft:3 }}/>
            <Typography  variant="h3"  component="span">
                {name}
            </Typography>
        </Grid>
        <Grid >
            <img src={imagen[wheather]} alt='img alt' className={classes.img} />
        </Grid>
        <Grid >
        <Typography variant="h3"  component="span">
            {main?.temp.toFixed(1)} º
        </Typography>
        </Grid>
       
      </Grid>
      
       
       
      </CardContent>

      

      <CardActions 
        >
          
          <Grid  
            container
            direction="row"
            justify="space-around"
            alignItems="baseline"
            >

              <Grid>
                
                <ExpandMoreIcon/>
                <Typography style={{ margin: 0,marginRight:10,marginLeft:3 }} variant="h6"  component="span">
                    {main?.temp_min.toFixed(1)} º
                </Typography>
                <ExpandLessIcon/>
                <Typography style={{ margin: 0,marginRight:30,marginLeft:3 }} variant="h6"  component="span">
                    {main?.temp_max.toFixed(1)} º
                </Typography>
                
              </Grid>

              <Grid>
                
                <Brightness5OutlinedIcon
                style={{ margin: 0,marginRight:10,color:'#ddd98d' }}
                />
                <Typography  variant="h5"  component="span">
                    {horaAmanecer} 
                </Typography>
                <NightsStayOutlinedIcon style={{ margin: 0,marginRight:3,color:'#386293',marginLeft:10 }}/>
                <Typography variant="h5"  component="span">
                    {horaNoche}
                </Typography>

              </Grid>
             
             
             
          </Grid>
         
             
             
           
       
      </CardActions>
     
    </Card>
    )
}
