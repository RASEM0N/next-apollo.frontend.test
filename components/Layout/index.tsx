import React from 'react'
import Navbar from './Navbar'
import Container from 'components/Container'
import Hero from 'components/Hero'
import Footer from './Footer'

interface LayoutProps {
    children: React.ReactNode | React.ReactNodeArray
    isHomePage: boolean
}

const Layout = ({ children, isHomePage }: LayoutProps): JSX.Element => {
    return (
        <div className="portfolio-app">
            <Navbar />
            {isHomePage && <Hero />}
            <Container>{children}</Container>
            {isHomePage && <Footer />}
        </div>
    )
}

export default Layout
