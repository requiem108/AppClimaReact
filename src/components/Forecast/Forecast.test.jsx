import Forecast from './Forecast'
import { render } from '@testing-library/react'


test(" Forecast render", async () => {

    const forecastItemList = [
        { hour:18, state:"sunny", temperature:17, weekDay:"Jueves"},
        { hour:6, state:"cloud", temperature:12, weekDay:"Viernes"},
        { hour:12, state:"fog", temperature:6, weekDay:"Viernes"}
    ];

    const { findAllByTestId } = render (<Forecast forecastItemList={forecastItemList} />) 

    const forecastItem = await findAllByTestId('forecast-item-container')
    expect(forecastItem).toHaveLength(3)

})