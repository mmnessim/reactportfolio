import React from "react";
import { Link } from "react-router-dom";
import './navigation.css';


export function NavigationMenu(props) {
    return (
        <div>
            <div className='nav'>
                <Link to={'/'} className='btn col-sm navlink'>Home</Link>
                <Link to={'/about'} className='btn col-sm navlink'>About Me</Link>
                <Link to={'/media'} className='btn col-sm navlink'>Media</Link>
                <Link to={'/interactive'} className='btn col-sm navlink'>Interactive</Link>
                <Link to={'/data'} className='btn col-sm navlink'>Data</Link>
            </div>
        </div>
    )
}