import React, { FC } from 'react'
import Link from 'next/link'

const Navbar: FC = () => {
    return (
        <div className="navbar-wrapper">
            <nav className="navbar navbar-expand-lg navbar-dark fj-mw9">
                <Link href="/">
                    <a className="navbar-brand mr-3 font-weight-bold">FilipJerga</a>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item mr-3">
                            <Link href="/portfolios">
                                <a className="nav-link">Portfolio</a>
                            </Link>
                        </li>
                        <li className="nav-item mr-3">
                            <a className="nav-link" href="#">
                                Courses
                            </a>
                        </li>
                        <li className="nav-item mr-3">
                            <a className="nav-link" href="#">
                                Cv
                            </a>
                        </li>
                        <li className="nav-item mr-3">
                            <a className="nav-link" href="#">
                                Ask me
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-3">
                            <a className="nav-link" href="#">
                                Sign Up
                            </a>
                        </li>
                        <li className="nav-item mr-3">
                            <a className="nav-link btn btn-success bg-green-2 bright" href="#">
                                Sign In
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
