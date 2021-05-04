import React from 'react'
import ForecastChart from './ForecastChart'

export default {
    title:"ForecastChart",
    component: ForecastChart,
}

const data = [
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

export const ForecastChartExample = () => (<ForecastChart data={data}/>)