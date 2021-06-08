import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';


import { getCiudadApi, getClimaApi } from '../../api/clima';
import { Resultado } from './Resultado';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Alert, AlertTitle } from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({
    root: {
       
        "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
             transform: "translate(34px, 20px) scale(1);"
          }
  
    },
    inputRoot: {
       
        flex: 1,
        textAlign:'center',
        color:'#ffffff',
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#386391"
        },
        marginBottom: 50,
    },

  
  
}));



export const Buscador = () => {
    const classes = useStyles();
    const [ciudad, setCiudad] = useState([]);
    const [coord, setCoord] = useState([])
    const [temperatura, setTemperatura] = useState()
    const [open, setOpen] = React.useState(false);
    const loading = open && coord.length === 0;
    const [isMounted, setIsMounted] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    useEffect(() => {
        
        if (coord.length >= 1) {
             getCiudadApi(coord).then(function (response) {
                setCiudad(response.message);  
            })
            .catch(function (error) {
                    return { ok: false, message: error.message };
            });
        }
    

    }, [coord])
   

   
    const handleChange = ({target}) => {
        setCoord(target.value);
    }
    const temp = async(e,center) => {   
       e.preventDefault();
       
        if (center) {
            const result = await getClimaApi(center); 
           
           
            setTemperatura(result); 
            setIsMounted(true);
            setIsCorrect(false);
        }else{
            setIsCorrect(true);
        }
        
       
        
  
        
      
        
    }

 


   
    return (
        <>  
            <Autocomplete
            id="combo-box-demo"
           
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            onChange={(e,value)=> { 
                if (value) {
                    temp(e,value?.center)
                }      
            }}
            
            freeSolo
            loading={loading}
            options={ciudad}
            getOptionLabel={(option) => option.place_name_es ? option.place_name_es : "" }
            classes={classes}
            renderInput={(params) => <>
                
                <TextField 
                onChange={handleChange} {...params} 
                className={classes.input}
                label="Search City"
                variant="outlined"
                /> 

                </>
            }
            />
            
            {isCorrect &&  (<Alert className={classes.alerta} severity="error">
            <AlertTitle>Oops!</AlertTitle>
            No hemos podido encontrar tu ciudad o los servidores estan fallando pues usamos 
            servidores gratuitos — <strong>intenta de nuevo o prueba con otra ciudad!</strong>
            </Alert>)
            }
           {isMounted &&  <Resultado temperatura={temperatura.message} /> }
            

           
            
        
        </>
    )
}

