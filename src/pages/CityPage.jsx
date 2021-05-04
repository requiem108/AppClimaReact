import React from 'react'
import PropTypes from 'prop-types'
//import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import Forecast from './../components/Forecast'
import ForecastChart from './../components/ForecastChart'
import ForestcastItem from '../components/ForescastItem'
import AppFrame from './../components/AppFrame'

const dataexample = [
    {
        "dayHour":"Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour":"Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour":"Vie 12",
        "min": 19,
        "max": 27,
    },

]

const forecastItemListExample = [
    { hour:18, state:"sunny", temperature:17, weekDay:"Jueves"},
    { hour:6, state:"rain", temperature:12, weekDay:"Viernes"},
    { hour:12, state:"fog", temperature:6, weekDay:"Viernes"}
];

const CityPage = props => {

    const city = 'Buenos Aires'
    const country = 'Argentina'
    const state = 'cloudy'
    const temperature = 20
    const humidity = 80
    const wind = 5
    const data = dataexample
    const forecastItemList = forecastItemListExample

    return (
        <AppFrame>
            <Grid container
                justify="center"
                direction="column"
                spacing={2}
            >
            

            <Grid item container 
            xs={12}
            justify="center"
            alignItems="flex-end">
                <CityInfo city={city} country = {country}/>
            </Grid>
                <Grid container item justify="center" xs={12}>
                    <Weather state = {state} temperature={temperature}/> 
                    <WeatherDetails humidity={humidity} wind = {wind}/>             
                </Grid> 
                <Grid item >
                    <ForecastChart data={data}/>
                </Grid>  
                <Grid item >
                <Forecast forecastItemList={forecastItemList}/>
                </Grid>       
            </Grid>
        </AppFrame>
        
    )
}

export default CityPage
