import React, { FC, ReactNode, ReactElement } from 'react'
import { IntlProvider } from 'react-intl'

import { render, RenderOptions } from '@testing-library/react'

import en from './lang/en.json'

const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <IntlProvider locale="en" messages={en}>
      {children}
    </IntlProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
