import React from 'react'
import { useRouter } from 'next/router'
import { NextPage } from 'next'

const PortfolioDetail: NextPage = () => {
    const router = useRouter()
    return (
        <>
            <div>Portfolio</div>
        </>
    )
}

// вместо хука useRouter
// PortfolioDetail.getInitialProps = ({ query }) => {
//     return { query }
// }

export default PortfolioDetail
