import ForestcastItem from './ForestcastItem'
import { render } from '@testing-library/react'


test(" ForecastItem render", async () => {
  const day = "Lunes";
  const hour = 10;
  const state = "sunny";
  const temperature = '23 grados';

  const { findAllByRole } = render(<ForestcastItem weekDay = {"Lunes"} hour={10} state={"sunny"} temperature ={23}/>)

  const data = await findAllByRole("heading");



  expect(data[0]).toHaveTextContent(day)
  expect(data[1]).toHaveTextContent(hour)
  //expect(data[2]).toHaveTextContent(state)
  //expect(data[3]).toHaveTextContent(temperature)




})