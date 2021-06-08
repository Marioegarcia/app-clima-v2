import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import MoreIcon from '@material-ui/icons/MoreVert';
import { DrawerRight } from '../DrawerRight/DrawerRight';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
        color:'#ffffff'
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        color:'#ffffff',
        backgroundColor: '#323543',
        
    },
    grow: {
        flexGrow: 1,
    },
   
}));
export const Appbar = () => {
    const classes = useStyles();
    const [state, setState] = React.useState(false);

    const preventDefault = (event) => {
        event.preventDefault();
        window.open('https://marioegarcia-portafolio.netlify.app/', '_blank');
    }
    const toggleDrawer = (isOpen) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
       setState(isOpen)
    };

    return (
        <>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    
                    <Typography className={classes.root}>
                    <Link href="https://marioegarcia-portafolio.netlify.app/" onClick={preventDefault} color="inherit">
                    <strong>developed by Mario</strong>
                    </Link>
                    </Typography>
                    <div className={classes.grow} />
                   
                    <IconButton onClick={toggleDrawer(true)} edge="end" color="inherit">
                        <MoreIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>


            <SwipeableDrawer
            anchor='right'
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <DrawerRight/>
          </SwipeableDrawer>
        </>
    )
}
