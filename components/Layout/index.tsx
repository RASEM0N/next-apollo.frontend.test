import React, { FunctionComponent } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
    children: React.ReactNode | React.ReactNodeArray
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className="portfolio-app">
            <Navbar />
            {children}
            {/*<Footer />*/}
        </div>
    )
}

export default Layout

export const withLayout =
    <T extends Record<string, unknown>>(Component: FunctionComponent<T>) =>
    (props: T): JSX.Element =>
        (
            <Layout>
                <Component {...props} />
            </Layout>
        )
