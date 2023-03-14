import React, { useState } from "react";
import './navigation.css'
import { AboutMe } from "../pages/aboutme";
import { Media } from "../pages/media";
import { Landing } from "../pages/landing/landing";
import { Container } from "../pages/interactive/container";
import { Data } from "../pages/data/data";
import { Footer } from "../footer/footer";



export function NavigationMenu(props) {
    const [name, setName] = useState('Data');
    let pageContent = '';
    
    if (name === 'About Me') {
        pageContent = <AboutMe />
    } else if (name === 'Media') {
        pageContent = <Media />
    } else if (name === 'Landing') {
        pageContent = <Landing />
    } else if (name === 'Interactive') {
        pageContent = <Container />
    } else if (name === 'Data') {
        pageContent = <Data />
    } 

    return (
        <div>
        <div className='nav'>
            <span onClick={() => setName('Landing')} className='btn  col-sm navlink'>Home</span>
            <span onClick={() => setName('About Me')} className='btn  col-sm navlink'>About Me</span>
            <span onClick={() => setName('Media')} className='btn  col-sm navlink'>Media</span>
            <span onClick={() => setName('Interactive')} className='btn  col-sm navlink'>Interactive</span>
            <span onClick={() => setName('Data')} className='btn  col-sm navlink'>Data</span>
        </div>
        {pageContent}
        <Footer />
        </div>
    )
}