import React from "react";
import { Title } from "../title/title";
import { Subtitle } from "../title/subtitle";
import { NavigationMenu } from "../nav/navigation";

export function Header(props) {
    
    return (
        <div>
            <Title 
            title="Mounir Nessim, Viola" />
            <Subtitle title="A React-Powered Website" />
            <NavigationMenu 
            value="Home" 
            />
        </div>
    )
} 