import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { menuList } from '../data/menuList'

export default function Navber() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">React Redux</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            menuList.map((item, index) => (
                                <li className="nav-item" key={index}>
                                    <NavLink to={item.url} className="nav-link " aria-current="page">{item.title}</NavLink>
                                </li>
                            ))
                        }

                        {/* <li className="nav-item">
                            <Link to={`/`} className="nav-link active" aria-current="page" href="#">CRUD</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/posts`} className="nav-link" href="#"> Get Posts</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
