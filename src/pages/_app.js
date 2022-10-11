import { IntlProvider } from 'react-intl'

import { useRouter } from 'next/router'

import en from '../lang/en.json'
import ptBr from '../lang/pt-br.json'
import GlobalStyles from '../styles/global'

const messages = {
  en,
  'pt-br': ptBr
}

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter()

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <GlobalStyles />
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default MyApp
