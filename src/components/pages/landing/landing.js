import React from "react";
import { Archive } from "./archive";

export function Landing() {
    return(
        <div>
            <div className="content">
                <h2>Under Construction!!!</h2>
                <h4>March 5, 2023</h4>
                    <p>
                        It has been a while since I've updated the site, but I am back! February was a crazy month. I had numerous work obligations, then I got covid, which set me back a spell. I've also been taking a break from web development and learning more about data science and Python, which is not always as easy to apply on a portfolio site like this. While work is as busy and chaotic as ever, I have a few goals for the site in the near-mid future:
                    </p>
                    <ul className="list">
                        <li>Use React Router to ease navigation</li>
                        <li>Divide site into music portfolio and programming portfolio</li>
                        <li>Update styling</li>
                        <li>Provide more detail about specifics of coding skills and implementation</li>
                        <li>Clean up code in general</li>
                    </ul>
                    <p>
                        Some of these things might be indefinitely put on the backburner, depending on how crazy work it. The Spring semester is truly a hectic time for teachers. Nevertheless, I'll keep chipping away on weekends and when I have some free time. As for right now, check out the new "Data" tab for a touch of data analysis. 
                    </p>
            </div>
            <Archive />
        </div>
    )
}