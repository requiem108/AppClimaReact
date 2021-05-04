import { Component } from 'react'
import React from 'react'
import ForestcastItem from './ForestcastItem'

export default{

    title:"ForestcastItem",
    component: ForestcastItem
}

export const ForestcastItemExample = () =>{
    return <ForestcastItem weekDay = {"Lunes"} hour={10} state={"sunny"} temperature ={23}/>
}