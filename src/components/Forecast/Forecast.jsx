import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ForecastItem from './../ForescastItem'
import {validValues}from './../iconState'


const renderForecastItem = (forecast)=>{
  const {weekDay,hour, state,temperature} = forecast;
  return (
    <Grid item key={`${weekDay}${hour}`} 
    data-testid = "forecast-item-container">
      <ForecastItem 
      weekDay = {weekDay}
      hour={hour} 
      state={state} 
      temperature ={temperature}/>
    </Grid>
  )
}

const Forecast = ({ forecastItemList }) => {
  return (
    <Grid container 
      justify="space-around"
      alignItems="center">

        {
          forecastItemList.map ( forecast => renderForecastItem(forecast)  )
        }
      
    </Grid>
  )
}

Forecast.propTypes = {
  forecastItemList: PropTypes.arrayOf( PropTypes.shape({
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
    temperature: PropTypes.number.isRequired,

  })).isRequired,

}

export default Forecast

