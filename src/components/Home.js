import React from 'react';
import './Home.css';
import headshot from '../images/headshot.png';
import pythonLogo from '../logos/pythonLogo.png';
import htmlLogo from '../logos/htmlLogo.png';
import cssLogo from '../logos/cssLogo.png';
import javascriptLogo from '../logos/javascriptLogo.png';
import cLogo from '../logos/cLogo.png';
import javaLogo from '../logos/javaLogo.png';
import bootstrapLogo from '../logos/bootstrapLogo.png';
import reactLogo from '../logos/reactLogo.png';
import nodeLogo from '../logos/nodeLogo.png';
import flaskLogo from '../logos/flaskLogo.png';
import vscodeLogo from '../logos/vscodeLogo.png';
import gitLogo from '../logos/gitLogo.png';
import githubLogo from '../logos/githubLogo.png';
import pycharmLogo from '../logos/pycharmLogo.png';
import Footer from './Footer.js';

export const Home = () => {
    return (
        <>
            <div class="container largerBox animate__animated animate__fadeIn">
                <h1 class="specialEffect">Sherry Zhang</h1>
                <img src={headshot} class="picture" alt=""/>
                <center>
                    <div class="box">
                        <h2>About</h2>
                        <p>
                            Welcome to my personal website! My name is Sherry, and I am a 
                            third-year student from the San Francisco Bay Area studying 
                            Computer Science and minoring in Mathematics at the Pennsylvania 
                            State University. My interest in software engineering developed 
                            after I built and deployed my first-ever website using React and 
                            GitHub Pages. (The website you're viewing right now!) Topics that 
                            I am interested in include full-stack development, cloud computing, 
                            and big data. Regarding my technical skillset, I am knowledgeable 
                            in Python, C, C++, JavaScript, HTML, CSS, Bootstrap, Flask, React, 
                            and Node. 
                        </p>
                    
                        <p style={{marginTop: 20}}>
                            During my free time, I like exploring new parts of the city, hiking, 
                            and dining downtown with friends. I also enjoy watching Star Wars, 
                            Pirates of the Caribbean, and Rick and Morty. Back in high school, 
                            I used to play the violin too. I have over 11 years of experience 
                            with the instrument and had the opportunity to perform with the San 
                            Jose Youth Symphony Philharmonic Orchestra in Argentina's Teatro 
                            Colón my sophomore year of high school.
                        </p>
                    </div>
                </center>
                <center>    
                    <div class="box">
                        <h2>Skills</h2>
                        <div class="skills">
                            <h6 class="label">Languages</h6>
                            <img src={pythonLogo} alt="" class="logo"/>
                            <img src={cLogo} alt="" class="logo"/>
                            <img src={javaLogo} alt="" class="java"/>
                            <img src={htmlLogo} alt="" class="logo"/>
                            <img src={cssLogo} alt="" class="logo"/>
                            <img src={javascriptLogo} alt="" class="javascript"/>
                        </div>
                        <div class="skills">
                            <h6 class="label">Frameworks & Libraries</h6>
                            <img src={bootstrapLogo} alt="" class="logo"/>
                            <img src={reactLogo} alt="" class="logo"/>
                            <img src={flaskLogo} alt="" class="flask"/>
                            <img src={nodeLogo} alt="" class="logo"/>
                        </div>
                        <div class="skills">
                            <h6 class="label">Tools</h6>
                            <img src={vscodeLogo} alt="" class="logo"/>
                            <img src={pycharmLogo} alt="" class="logo"/>
                            <img src={gitLogo} alt="" class="logo"/>
                            <img src={githubLogo} alt="" class="github"/>
                        </div>
                    </div>
                </center>
            </div>
            <Footer/>
        </>
    )
}