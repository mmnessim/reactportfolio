import React from "react";
import { Title } from "../title/title";
import { NavigationMenu } from "../nav/navigation";
import './header.css'

export function Header(props) {
    
    return (
        <div className="container-fluid">
            <div className="banner">
            <Title 
            title="Mounir Nessim, Viola" 
            subtitle="A React-Powered Website" />
            </div>
            <NavigationMenu 
            value="Home" 
            />
        </div>
    )
} 