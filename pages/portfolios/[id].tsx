import { withLayout } from 'components/Layout'
import React from 'react'
import { useRouter } from 'next/router'
import { NextComponentType } from 'next'
import Container from 'components/Container'

const PortfolioDetail: NextComponentType = () => {
    const router = useRouter()
    return (
        <Container>
            <div>Portfolio</div>
        </Container>
    )
}

// вместо хука useRouter
// PortfolioDetail.getInitialProps = ({ query }) => {
//     return { query }
// }

export default withLayout(PortfolioDetail)
