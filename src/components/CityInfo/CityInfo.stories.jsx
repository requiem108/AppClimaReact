import React, { PureComponent } from 'react'
import CityInfo from './CityInfo'

export default {
    title: "CityInfo",
    component: CityInfo
}

export const CityExample = () => <CityInfo city={"Celaya Guanajuato"} country={"Mexico"} ></CityInfo>