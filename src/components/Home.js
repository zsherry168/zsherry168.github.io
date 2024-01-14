import React from 'react';
import './Home.css';
import headshot from '../images/headshot.png';
import pythonLogo from '../logos/pythonLogo.png';
import htmlLogo from '../logos/htmlLogo.png';
import cssLogo from '../logos/cssLogo.png';
import javascriptLogo from '../logos/javascriptLogo.png';
import cLogo from '../logos/cLogo.png';
import cppLogo from '../logos/cppLogo.png';
import bootstrapLogo from '../logos/bootstrapLogo.png';
import reactLogo from '../logos/reactLogo.png';
import nodeLogo from '../logos/nodeLogo.png';
import flaskLogo from '../logos/flaskLogo.png';
import vscodeLogo from '../logos/vscodeLogo.png';
import gitLogo from '../logos/gitLogo.png';
import githubLogo from '../logos/githubLogo.png';
import pycharmLogo from '../logos/pycharmLogo.png';
import xcodeLogo from '../logos/xcodeLogo.png';
import Footer from './Footer.js';

export const Home = () => {
    return (
        <>
            <div class="container largerBox animate__animated animate__fadeIn">
                <h1 class="specialEffect">Sherry Zhang</h1>
                <img src={headshot} class="picture" alt=""/>
                <center>
                    <div class="box">
                        <h2>About &#x1F469;&#x200D;&#x1F4BB;</h2>
                        <center>
                            <div class="about_description">
                                <p>
                                    My name is Sherry, and I am a junior from San Jose, CA, studying Computer Science and minoring in 
                                    Mathematics at the Pennsylvania State University. My interests lie in application development and fintech. 
                                    Alongside, I am passionate about STEM outreach and education as well as women empowerment in computer 
                                    science. I am also a teaching assistant for an introductory data structures and Python programming 
                                    course at my university.
                                </p>
                            </div>   
                            <div class="about_description">
                                <p style={{marginTop: 20}}>
                                    In my free time, I enjoy hiking, traveling, teaching, and learning about world history. I also like 
                                    Star Wars, Formula 1, and cosmetics. Furthermore, I used to play the violin and have over 12 years of 
                                    experience with the instrument. I even had the opportunity in Argentina to perform with my orchestra in 
                                    Teatro Colón, one of the most prestigious opera houses in the world. 
                                </p>
                            </div>
                        </center>
                    </div>
                </center>
                <center>
                    <div class="box">
                        <h2>Experience &#128188;</h2>
                        <h3>Incoming Software Engineering Intern | <i>Prudential Financial</i></h3>
                        <h4>Summer 2024</h4>
                        <h4>Newark, NJ</h4>
                        <center>
                            <div class="position_description">
                                <p>
                                    I will join Prudential Financial's Global Technology division, as a software 
                                    engineering intern this summer!
                                </p>
                            </div>
                        </center>
                        <p>------- &#x2022; &#x2022; &#x2022; -------</p>
                        <h3>Teaching Assistant | <i>Penn State Computer Science and Engineering</i></h3>
                        <h4>Jun 2023 - Present</h4>
                        <h4>University Park, PA</h4>
                        <center>
                            <div class="position_description">
                                <p>
                                    I am a teaching assistant for CMPSC 132, which introduces students to fundamental 
                                    data structures. As a TA, I host over six hours of office hours every week, 
                                    facilitate two recitations, and proctor and grade exams. This is my third 
                                    term as a TA.
                                </p>
                            </div>
                        </center>
                        <p>------- &#x2022; &#x2022; &#x2022; -------</p>
                        <h3>Grader | <i>Penn State Computer Science and Engineering</i></h3>
                        <h4>Jan 2023 - Aug 2023</h4>
                        <h4>University Park, PA</h4>
                        <center>
                            <div class="position_description">
                                <p>
                                    Before I became a teaching assistant for CMPSC 132, I was a grader for 
                                    the course. My responsibilities included grading students' homework and 
                                    lab assignments every week.
                                </p>
                            </div>
                        </center>
                    </div>
                </center>
                <center>
                    <div class="box">
                        <h2>Involvement &#x1f5e3;</h2>
                        <h3>Instructor | <i>Girls Who Code</i></h3>
                        <h4>Feb 2024</h4>
                        <h4>University Park, PA</h4>
                        <center>
                            <div class="position_description">
                                <p>
                                    Starting in February, I will teach middle school girls Python alongside other 
                                    ladies from Penn State's Association for Women in Computing.
                                </p>
                            </div>
                        </center>
                        <p>------- &#x2022; &#x2022; &#x2022; -------</p>
                        <h3>Mentor | <i>Penn State Women in Engineering Program</i></h3>
                        <h4>Mar 2023 - Present</h4>
                        <h4>University Park, PA</h4>
                        <center>
                            <div class="position_description">
                                <p>
                                    As a mentor for the Women in Engineering Program (WEP), I advise and support 
                                    a group of ten female-identifying engineering students in EECS, guiding them on 
                                    academic and career-related matters. My team this year is Team G.
                                </p>
                            </div>
                        </center>
                        <p>------- &#x2022; &#x2022; &#x2022; -------</p>
                        <h3>Community Outreach Coordinator | <i>IEEE Eta Kappa Nu</i></h3>
                        <h4>Apr 2023 - Present</h4>
                        <h4>University Park, PA</h4>
                        <center>
                            <div class="position_description">
                                <p>
                                    IEEE Eta Kappa Nu is the invitation-only honor society of IEEE. My responsibilities 
                                    as the Community Outreach Coordinator include working on STEM outreach within the local 
                                    community of University Park and collaborating with other EECS clubs on events.
                                </p>
                            </div>
                        </center>


                    </div>
                </center>
                <center>    
                    <div class="box">
                        <h2>Skills &#128736;</h2>
                        <div class="skills">
                            <h6 class="label">Languages</h6>
                            <img src={pythonLogo} alt="" class="logo"/>
                            <img src={cLogo} alt="" class="logo"/>
                            <img src={cppLogo} alt="" class="cpp"/>
                            <img src={htmlLogo} alt="" class="logo"/>
                            <img src={cssLogo} alt="" class="logo"/>
                            <img src={javascriptLogo} alt="" class="javascript"/>
                        </div>
                        <div class="skills">
                            <h6 class="label">Frameworks & Libraries</h6>
                            <img src={bootstrapLogo} alt="" class="logo"/>
                            <img src={flaskLogo} alt="" class="flask"/>
                            <img src={reactLogo} alt="" class="logo"/>
                            <img src={nodeLogo} alt="" class="logo"/>
                        </div>
                        <div class="skills">
                            <h6 class="label">Tools</h6>
                            <img src={gitLogo} alt="" class="logo"/>
                            <img src={githubLogo} alt="" class="github"/>
                            <img src={vscodeLogo} alt="" class="logo"/>
                            <img src={pycharmLogo} alt="" class="logo"/>
                            <img src={xcodeLogo} alt="" class="logo"/>
                        </div>
                    </div>
                </center>
            </div>
            <Footer/>
        </>
    )
}