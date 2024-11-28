import { render } from '@testing-library/react'
import { createContext, type PropsWithChildren, type ReactElement } from 'react'

const EmptyContext = createContext(null)
const initialValue = null

export const DESKTOP_RESOLUTION_WIDTH = 1280
export const DESKTOP_RESOLUTION_HEIGHT = 800

export const MOBILE_RESOLUTION_WIDTH = 414
export const MOBILE_RESOLUTION_HEIGHT = 896

export function renderWithProviders(ui: ReactElement): void {
	render(ui, {
		wrapper: ({ children }: PropsWithChildren): ReactElement => (
			<EmptyContext.Provider value={initialValue}>{children}</EmptyContext.Provider>
		),
	})
}
