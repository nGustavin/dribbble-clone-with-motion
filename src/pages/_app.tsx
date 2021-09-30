import '../styles/Globals.scss'
import {AppProps} from 'next/app'
import {Header} from '../components/Header'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return(
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
