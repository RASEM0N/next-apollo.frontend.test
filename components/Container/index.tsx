import React, { FunctionComponent } from 'react'

interface ContainerProps {
    children: React.ReactNode | React.ReactNodeArray
}

const Container: FunctionComponent<ContainerProps> = ({ children }) => {
    return <div className="container">{children}</div>
}

export default Container