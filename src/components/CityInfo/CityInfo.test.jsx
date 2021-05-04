import { render } from '@testing-library/react'
import CityInfo from './CityInfo'

test("CityInfo reder", async() => {

	const city = "Buenos Aires";
	const country = "Argentina";
	
	const { findAllByRole } = render( <CityInfo city= {city} country= {country} />)
	const cityComponent = await findAllByRole( "heading" )//Se obtiene las cabeceras en un array

	//Se comprueba que los valores del arreglo sean los especificados en content
	expect(cityComponent[0]).toHaveTextContent(city)
	expect(cityComponent[1]).toHaveTextContent(country)

	//Si se cumplen las condiciones esta ok

})
