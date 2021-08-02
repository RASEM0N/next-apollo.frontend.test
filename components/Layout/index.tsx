import React, { FunctionComponent } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Container from 'components/Container'

interface LayoutProps {
    children: React.ReactNode | React.ReactNodeArray
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className="portfolio-app">
            <Navbar />
            {children}
        </div>
    )
}

export default Layout

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return (props: T): JSX.Element => (
        <Layout>
            {Component.name === 'Home' ? (
                <>
                    <Component {...props} />
                    <Footer />
                </>
            ) : (
                <Container>
                    <Component {...props} />
                </Container>
            )}
        </Layout>
    )
}
