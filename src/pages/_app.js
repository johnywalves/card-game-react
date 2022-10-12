import React, { useMemo } from 'react'
import { IntlProvider } from 'react-intl'

import { useRouter } from 'next/router'

import en from '../lang/en.json'
import brazilian from '../lang/pt-br.json'
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
        <Component {...pageProps} />
      </IntlProvider>
    </>
  )
}

export default MyApp
