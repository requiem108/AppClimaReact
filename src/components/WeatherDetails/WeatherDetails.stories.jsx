import { Component } from 'react'
import React from 'react'
import WeatherDetails from './WeatherDetails'

export default{

    title:"WheatherDetails",
    component: WeatherDetails
}

export const WeatherDetailsExample = () =>{
    return <WeatherDetails humidity={10} wind={9}/>
}