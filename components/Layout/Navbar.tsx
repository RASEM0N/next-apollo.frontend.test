import React, { FC } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'

const AppNavbar: FC = () => {
    return (
        <div className="navbar-wrapper">
            <Navbar expand="lg" className="navbar-dark fj-mw9">
                <Link href="/" passHref>
                    <Navbar.Brand className="mr-3 font-weight-bold" href="#">
                        FilipJerga
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Link href="/portfolios" passHref>
                            <Nav.Link className="mr-3">Portfolios</Nav.Link>
                        </Link>
                        <Link href="/forum/categories" passHref>
                            <Nav.Link className="mr-3">Forum</Nav.Link>
                        </Link>
                        <Link href="/cv" passHref>
                            <Nav.Link className="mr-3">Cv</Nav.Link>
                        </Link>
                    </Nav>
                    <Nav>
                        <Link href="/register" passHref>
                            <Nav.Link className="mr-3">Sign Up</Nav.Link>
                        </Link>
                        <Link href="/login" passHref>
                            <Nav.Link className="mr-3 btn btn-success bg-green-2 bright">
                                Sign In
                            </Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default AppNavbar
