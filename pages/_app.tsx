import 'bootstrap/dist/css/bootstrap.min.css'
import 'styles/index.scss'
import type { AppContext, AppProps } from 'next/app'
import { NextPage } from 'next'
import App from 'next/app'
import Layout from '../components/Layout'
// import { withLayout } from 'components/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
    // ...
    return (
        <Layout isHomePage={Component.name === 'Home'}>
            <Component {...pageProps} />
        </Layout>
    )
}

// MyApp.getInitialProps = async (ctx: AppContext) => {
//     const initialProps = App.getInitialProps && (await App.getInitialProps(ctx))
//     initialProps.pageProps
//     return { ...initialProps, pageProps: { ban: 1, ...initialProps.pageProps } }
// }

export default MyApp
// export default withLayout<AppProps>(MyApp)
