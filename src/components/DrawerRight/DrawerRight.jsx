import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


import Logo from '../../assets/img/png/logo1F.png'

const useStyles = makeStyles(() => ({
    root: {
      backgroundColor:'#223647',
        height:'100vh',
      width:'90vw',
      paddingTop:'10%',
      
    },
    logo:{
        width:'45vw'
    },
   
    links:{
        color:'#b1e0df',
        textDecoration:'none'
    }
   

  }));

export const DrawerRight = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Container>
             <img src={Logo} alt='mario-dev' className={classes.logo} />   
            <Typography 
            component="div" 
            variant="subtitle1" 
            style={{color:'#ffffff' }}
            className={classes.contenido}
             >
                Este es un proyecto personal elaborado con React js
                Material UI en el frontend y en el backend NodeJS,
                con la libreria Express, se utilizo axios en el backend 
                para las peticiones, las apis que se utilizaron fueron 
                <a 
                href='https://www.mapbox.com/' 
                target="_blank" rel="noreferrer" 
                className={classes.links}> mapbox </a>
                para donde se traen las coordenadas de la ciudad seleccionada
                y con esas cordenadas se trae la informacion del clima con 
                la api  
                 <a 
                href='https://openweathermap.org/ 
                'target="_blank" rel="noreferrer" 
                className={classes.links}
                > OpenWeather.
                </a>
            </Typography>
                
            </Container>
            
        </div>
    )
}
