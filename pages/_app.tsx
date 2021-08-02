import 'bootstrap/dist/css/bootstrap.min.css'
import 'styles/index.scss'
import type { AppProps } from 'next/app'
// import { withLayout } from 'components/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
    // ...
    return <Component {...pageProps} />
}
export default MyApp
// export default withLayout<AppProps>(MyApp)
