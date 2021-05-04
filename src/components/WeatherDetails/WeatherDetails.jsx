import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

function WeatherDetails({humidity, wind}) {
    return (
        <>
            <Typography>Humedad: {humidity}%</Typography>
            <Typography>Viento: {wind}km/hr</Typography>            
        </>
    )
}

WeatherDetails.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind:PropTypes.number.isRequired
}

export default WeatherDetails

