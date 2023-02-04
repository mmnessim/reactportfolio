import React from "react";
import { Archive } from "./archive";

export function Landing() {
    return(
        <div>
            <div className="content">
                <h2>Under Construction!!!</h2>
                <h4>February 4, 2023</h4> 
                <p>
                    Welcome to the page! If you've been here before, you may have noticed a few style changes, as well as a new "Interactive" tab in the navigation menu. The great thing about React is interactivity, so I've been implementing a few simple things over there to practice things I've been learning. So far there are a couple tools to change the colors of the site, as well as a timer that keeps track of how long you are on that particular tab, and a tool that suggests 10 words that sound like your entry. Now, none of these are particularly useful, but they have been fun little coding tasks for me. 
                </p>
                <p>
                    What I would like to work on sometime soon is maybe a very primitive game to add to the interactive tab. I think I have the capabilities to implement a couple different things, but time is always precious, so I don't know if or when that will happen. I've moved on to learning more about Backend development techniques, which do not yet have many obvious implementations on this page, so things might not change much in the next few weeks. 
                </p>
            </div>
            <Archive />
        </div>
    )
}