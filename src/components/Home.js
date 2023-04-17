import React from 'react';
import './Home.css';
import headshot2 from '../images/headshot2.jpg';
import Footer from './Footer.js';

export const Home = () => {
    return (
        <>
            <div class="container">
                <h1>Sherry Zhang</h1>
                <h2>Aspiring Software Engineer</h2>
                <p>
                    Welcome to my website! This platform reflects my interests, passions, 
                    and experiences, and I am excited to share them with you. Whether you 
                    are here to learn more about me or my work, I hope you find something 
                    that resonates with you. Feel free to look around, and do not hesitate 
                    to reach out if you have any questions or want to connect.
                </p>
                <img src={headshot2} class="picture" alt=""/>
            </div>
            <Footer/>
        </>
    )
}