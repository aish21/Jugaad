import React from 'react';
import Tabs from "./Tabs";
import ScrollToTopOnMount from "../ScrollToTopOnMount.js";
import "./Homepage.css";

export default function Homepage() {


    return (
    <div className="container mt-5 py-4 px-xl-5">
        <ScrollToTopOnMount />
        <div>
        <h1>Tabs Demo</h1>
        <Tabs>
            <div label="About">
            See ya later, <em>Alligator</em>!
            </div>
            <div label="Videos">
            After 'while, <em>Crocodile</em>!
            </div>
            <div label="Live Stream">
            Nothing to see here, this tab is <em>extinct</em>!
            </div>
            <div label="Product">
            Nothing to see here, this tab is <em>extinct</em>!
            </div>
        </Tabs>
        </div>
    </div>
    );
}