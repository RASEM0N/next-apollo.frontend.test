import React, { FunctionComponent } from 'react'
import Layout from 'components/Layout'

const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return (props: T): JSX.Element => (
        <Layout isHomePage={Component.name === 'Home'}>
            <Component {...props} />
        </Layout>
    )
}

export default withLayout
