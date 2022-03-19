import Tabs from "./Tabs";
import ScrollToTopOnMount from "../ScrollToTopOnMount.js";
import "./Homepage.css";
import Banner from "./BannerShop";
import React from 'react';
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default function Homepage() {
    // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyCE60wJlGYdIfAUM9wg2SLEKGcXVcbP6JU",
    authDomain: "jugaad-dc4e0.firebaseapp.com",
    projectId: "jugaad-dc4e0",
    storageBucket: "jugaad-dc4e0.appspot.com",
    messagingSenderId: "944531526558",
    appId: "1:944531526558:web:d62865229402e50e8d3c8f",
    measurementId: "G-2FEN0WZXKX"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

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