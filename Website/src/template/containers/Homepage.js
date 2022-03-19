import Tabs from "./Tabs";
import ScrollToTopOnMount from "../ScrollToTopOnMount.js";
import "./Homepage.css";
import Banner from "./BannerShop";
import React from 'react';
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';

export default function Homepage() {
    return (
    <div className="container mt-5 py-4 px-xl-5">
        <ScrollToTopOnMount />
        <Banner/>
        <div>
        <Tabs>
            <div label="About">
            See ya later, <em>Alligator</em>!
            </div>
            <div label="Videos">
            After 'while, <em>Crocodile</em>!
            </div>
            <div label="Live Stream">
            <TwitchEmbed
                channel="Whippy"
                id="Whippy"
                theme="dark"
                width="100%"
                onVideoPause={() => console.log(':(')}
            />
            </div>
            <div label="Product">
            Nothing to see here, this tab is <em>extinct</em>!
            </div>
        </Tabs>
        </div>
    </div>
    );
}