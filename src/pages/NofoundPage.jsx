import React from 'react'
import Grid from '@material-ui/core/Grid'
import { IconContext }  from 'react-icons'
import { WiRain } from 'react-icons/wi'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import {Link as RouterLink} from 'react-router-dom'

const NofoundPage = () => {
  return (
    <Grid container
    direction='column'
    justify ="center"        
    className="full"            
    >
      <div className="higthlight">
      <Grid item container xs={12}
          justify="center"
          alignItems ="center"
        >
          
          <Grid item>
            <IconContext.Provider value={{size:"6em"}}>
                <WiRain/>
            </IconContext.Provider>
          </Grid>
          <Grid item container direction='column'
            justify="center" alignItems='center'>
              <Typography variant="h4" color="inherit">
                  404 | La pagina no existe
              </Typography>
              <Link color="inherit"
                aria-label="menu"
                component ={RouterLink}
                to="/main">
                VOLVER AL INICIO
              </Link>
          </Grid>
        </Grid>

      </div>

  </Grid>  
  )
}

export default NofoundPage

