import { IntlProvider } from 'react-intl'

import en from '../src/lang/en.json'
import GlobalStyles from '../src/styles/global'

export const decorators = [
    (Story) => (
        <>
            <GlobalStyles />
            <IntlProvider locale="en" messages={en}>
            <Story />
            </IntlProvider>
        </>
    )
]