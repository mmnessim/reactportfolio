import React from "react";
import { Title } from "../title/title";
import { NavigationMenu } from "../nav/navigation";
import './header.css';
import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer";

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
            <Outlet />
            <Footer />
        </div>
    )
} 