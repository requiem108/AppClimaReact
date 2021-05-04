import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { IconContext } from 'react-icons'
import IconState, {validValues}from './../iconState'

   
  

const ForestcastItem = ({weekDay, hour, state, temperature}) => {
    return (
      <Grid container
        direction="column"
        justify="center"
        alignItems="center">
            <Grid item>
                <Typography variant="h6">{weekDay}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6">{hour}</Typography>
            </Grid>
            <Grid item>
                <IconContext.Provider value={{size:'5em'}}>
                  <IconState state={state}/>
                </IconContext.Provider>
            </Grid>
            <Grid item>
                <Typography variant="h6">{temperature} grados</Typography>
            </Grid>

      </Grid>
    )
}

ForestcastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
    temperature: PropTypes.number.isRequired,
}

export default ForestcastItem
