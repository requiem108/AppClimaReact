import React from 'react'
import WheatherDetails from './WeatherDetails'
import { render } from '@testing-library/react'


test(" WheatherDetails render", async () => {
   
  const { findByText } = render(<WheatherDetails humidity={10} wind={9}/>)

  const humidity = await findByText(/10/);
  const wind = await findByText(/9/);

  expect(humidity).toHaveTextContent("Humedad: 10%");
  expect(wind).toHaveTextContent("Viento: 9km/hr");

})
