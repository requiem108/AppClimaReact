import Weather from './Weather'
import { render } from '@testing-library/react'
import moduleName from 'module'

test(" Weather render", async () => {
  const { findByRole } = render(<Weather temperature={10} state="sunny"/>)

  const temp = await findByRole("heading");

  expect(temp).toHaveTextContent("10");

})

