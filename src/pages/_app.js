import React, { useMemo } from 'react'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'

import { useRouter } from 'next/router'

import en from '../lang/en.json'
import brazilian from '../lang/pt-br.json'
import store from '../store'
import GlobalStyles from '../styles/global'

const dict = {
  en,
  'pt-br': brazilian
}

const MyApp = ({ Component, pageProps }) => {
  const { locale } = useRouter()

  const messages = useMemo(() => dict[locale], [locale])

  return (
    <>
      <GlobalStyles />
      <IntlProvider locale={locale} messages={messages}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </IntlProvider>
    </>
  )
}

export default MyApp
