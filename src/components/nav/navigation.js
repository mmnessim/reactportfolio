import React, { useState } from "react";
import './navigation.css'
import { AboutMe } from "../pages/aboutme";
import { Media } from "../pages/media";
import { Landing } from "../pages/landing";
import { Arrangements } from "../pages/arrangements";
//import { Interactive } from "../pages/interactive";

export function NavigationMenu(props) {
    const [name, setName] = useState('Landing');
    let pageContent = '';
    
    if (name === 'About Me') {
        pageContent = <AboutMe />
    } else if (name === 'Media') {
        pageContent = <Media />
    } else if (name === 'Arrangements') {
        pageContent = <Arrangements />
    } else if (name === 'Landing') {
        pageContent = <Landing />
    } else /*if (name === 'Interactive') {
        pageContent = <Interactive />
    }*/

    return (
        <div>
        <div className='nav'>
            <span onClick={() => setName('Landing')}>Home</span>
            <span onClick={() => setName('About Me')}>About Me</span>
            <span onClick={() => setName('Media')}>Media</span>
            <span onClick={() => setName('Arrangements')}>Arrangements</span>
            {/*<span onClick={() => setName('Interactive')}>Interactive</span>*/}
        </div>
        {pageContent}
        </div>
    )
}