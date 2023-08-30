import React from 'react'

export const Title = ({ title }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-md">
                <a className="navbar-brand" href="#">{title}</a>
            </div>
        </nav>
    )
}
