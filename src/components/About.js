import React from 'react';
import './About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer.js';
import headshot from '../images/headshot.jpg';
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

export const About = () => {

    return (
        <>
            <div class="container">
                <h1>About Me</h1>
                <div class="aboutMeBody">
                    <Container>
                        <Row>
                            <Col xs lg="2">
                            </Col>
                            <Col xs={12} md={8}>
                                <div class="photo" style={{backgroundColor: 'white'}}>
                                    <img src={headshot} alt="" class="headshot"/>
                                </div>
                            </Col>
                            <Col xs lg="2">
                            </Col>
                        </Row>
                        <Row>
                            <Col xs lg="2">
                            </Col>
                            <Col xs={12} md={8}>
                                <div class="box" style={{backgroundColor: 'rgb(214, 228, 236)'}}>
                                    <h2>Introduction</h2>
                                    <p>
                                        My name is Sherry, and I am a second-year student at Penn State University studying 
                                        Computer Science and minoring in Mathematics. Some interests that I am exploring 
                                        include full-stack development and artificial intelligence, specifically machine 
                                        learning. Tools I have under my belt include Python, C, Java, JavaScript, HTML, CSS, 
                                        Bootstrap, Flask, React, and Node. 
                                    </p>
                                    <p>
                                        During my free time, I enjoy exploring new parts of the city, hiking, 
                                        and dining downtown with friends. I also enjoy watching Star Wars and 
                                        Rick and Morty. Back in high school, I used to play the violin too. I have over 11 
                                        years of experience with the instrument and had the opportunity to perform with San Jose
                                        Youth Symphony's Philharmonic Orchestra in Argentina's Teatro Colón my sophomore year of 
                                        high school.
                                    </p>
                                </div>
                            </Col>
                            <Col xs lg="2">
                            </Col>
                        </Row>
                        <Row>
                            <Col xs lg="2">
                            </Col>
                            <Col xs={12} md={8}>
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
                                        <h6 class="label">Frameworks/Libraries</h6>
                                        <img src={bootstrapLogo} alt="" class="logo"/>
                                        <img src={nodeLogo} alt="" class="logo"/>
                                        <img src={reactLogo} alt="" class="logo"/>
                                        <img src={flaskLogo} alt="" class="flask"/>
                                    </div>
                                    <div class="skills">
                                        <h6 class="label">Tools</h6>
                                        <img src={vscodeLogo} alt="" class="logo"/>
                                        <img src={gitLogo} alt="" class="logo"/>
                                        <img src={githubLogo} alt="" class="github"/>
                                    </div>
                                </div>
                            </Col>
                            <Col xs lg="2">
                            </Col>
                        </Row>
                        {/* <Row>
                            <Col xs lg="2">
                            </Col>
                            <Col xs={12} md={8}>
                                <div class="box" style={{backgroundColor: 'rgb(214, 228, 236)'}}>
                                    <h2>Involvement</h2>
                                    
                                </div>
                            </Col>
                            <Col xs lg="2">
                            </Col>
                        </Row> */}
                    </Container>
                </div>
                <Footer/>
            </div>
        </>
    )
}