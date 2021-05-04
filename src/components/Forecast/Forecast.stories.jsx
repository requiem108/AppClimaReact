import React from 'react'
import Forecast from './Forecast'

export default {
    title:"Forecast",
    component: Forecast,
}

const forecastItemList = [
    { hour:18, state:"sunny", temperature:17, weekDay:"Jueves"},
    { hour:6, state:"cloud", temperature:12, weekDay:"Viernes"},
    { hour:12, state:"fog", temperature:6, weekDay:"Viernes"}
];

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList}/>)
    
