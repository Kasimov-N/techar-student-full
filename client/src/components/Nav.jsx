import React from 'react'

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/teacher">Teachers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/add/teacher">Add teacher</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/student">Students</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/add/student">Add students</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav