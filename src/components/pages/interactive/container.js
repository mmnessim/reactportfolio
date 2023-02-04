import React from "react";
import { Interactive } from "./interactive";
import { Updater } from "./updater";
import { NumberGuesser } from "./games/numberguesser";

export function Container() {
    return (
    <div>
        <Interactive />
        <Updater />
        <NumberGuesser />
    </div>)
    
}