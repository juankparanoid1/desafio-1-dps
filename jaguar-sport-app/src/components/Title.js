import React from 'react'

export const Title = ({ title }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-md">
                <h1 className="navbar-brand" href="#">{title}</h1>
                <a className="btn btn-outline-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" href="#offcanvasExample" role="button" aria-controls="offcanvasRight">
                    <i data-feather="shopping-cart"></i>
                </a>
            </div>
        </nav>
    )
}
