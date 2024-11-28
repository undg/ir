import App from './app'
import { renderWithProviders } from './test-utils'

describe('<App />', () => {
	beforeEach(() => {
		renderWithProviders(<App />, false)
	})
})
