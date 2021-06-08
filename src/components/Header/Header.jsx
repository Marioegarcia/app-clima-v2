import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      color:'#f1fffe'
     
    },
    
   
  }));
export const Header = () => {
    const classes = useStyles();

    return (
        <>
        <Typography className={classes.root} variant='h2'  align='center' >
            Clima
        </Typography>
            
        </>
    )
}
