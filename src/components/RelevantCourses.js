import React from 'react';
import './RelevantCourses.css';
import linuxLogo from '../logos/linuxLogo.png';
import cLogo from '../logos/cLogo.png';
import gitLogo from '../logos/gitLogo.png';
import githubLogo from '../logos/githubLogo.png';
import pythonLogo from '../logos/pythonLogo.png';
import htmlLogo from '../logos/htmlLogo.png';
import cssLogo from '../logos/cssLogo.png';
import javascriptLogo from '../logos/javascriptLogo.png';
import sqlLogo from '../logos/sqlLogo.png';
import postgreSQLLogo from '../logos/postgreSQLLogo.png';
import bootstrapLogo from '../logos/bootstrapLogo.png';
import djangoLogo from '../logos/djangoLogo.png';
import flaskLogo from '../logos/flaskLogo.png';
import nodeLogo from '../logos/nodeLogo.png';
import reactLogo from '../logos/reactLogo.png';
import solidityLogo from '../logos/solidityLogo.png';
import javaLogo from '../logos/javaLogo.png';
import netbeansLogo from '../logos/netbeansLogo.png';
import vscodeLogo from '../logos/vscodeLogo.png';
import rLogo from '../logos/rLogo.png';
import matlabLogo from '../logos/MATLABLogo.png';
import gdbLogo from '../logos/gdbLogo.png';
import Footer from './Footer.js';


export const RelevantCourses = () => {
  return (
        <>
            <div class="container animate__animated animate__fadeIn">
                <h1>Relevant Courses</h1>
                <p>
                    Below is a list of relevant computer science, computer engineering, 
                    and mathematics courses I have taken or am currently taking at Penn State. 
                </p>
                {/* Computer Science Courses */}
                <div class="courseContainer">
                    <h2>Computer Science Courses</h2>
                    <ul>
                        <div class="courseDescription">
                            <li><span style={{textDecoration: 'underline'}}>CMPSC 473: Operating Systems Design & Construction</span></li>
                            <p>
                                Design and implementation of computer operating systems. Management 
                                of various system resources: processes, memory, processors, files, 
                                input/output devices
                            </p>
                            <img src={cLogo} class="c" alt=""/>
                            <img src={linuxLogo} class="logo" alt=""/>
                            <img src={gdbLogo} class="logo" alt=""/>
                        </div>
                        <div class="courseDescription">
                            <li><span style={{textDecoration: 'underline'}}>CMPSC 465: Data Structures and Algorithms</span></li>
                            <p>
                                Fundamental concepts of computer science: data structures, 
                                analysis of algorithms, recursion, trees, sets, graphs, and 
                                sorting
                            </p>
                        </div>
                        <div class="courseDescription">
                            <li><span style={{textDecoration: 'underline'}}>CMPSC 461: Programming Language Concepts</span></li>
                            <p>
                                Basic principles of programming language design, specifications, 
                                and implementation; programming language paradigms and features; 
                                program verification
                            </p>
                        </div>
                        <div class="courseDescription">
                            <li><span style={{textDecoration: 'underline'}}>CMPSC 311: Introduction to Systems Programming</span></li>
                            <p>
                                Development of software components and methods: system programming 
                                in C, organization of programs and data, program analysis and support 
                                tools, software standards, and common system functions
                            </p>
                            <img src={cLogo} class="c" alt=""/>
                            <img src={linuxLogo} class="logo" alt=""/>
                            <img src={gitLogo} class="logo" alt=""/>
                            <img src={githubLogo} class="github" alt=""/>

                        </div>
                        <div class="courseDescription">
                            <li><span style={{textDecoration: 'underline'}}>CMPSC 297: Hands-on Web Development</span></li>
                            <p>
                                Design and implementation of web applications. Topics include database 
                                design, scalability, security, UI/UX, and APIs
                            </p>
                            <img src={pythonLogo} class="logo" alt=""/>
                            <img src={htmlLogo} class="logo" alt=""/>
                            <img src={cssLogo} class="logo" alt=""/>
                            <img src={javascriptLogo} class="javascript" alt=""/>
                            <img src={sqlLogo} class="sql" alt=""/>
                            <img src={postgreSQLLogo} class="logo" alt=""/>
                            <img src={bootstrapLogo} class="bootstrap" alt=""/>
                            <img src={djangoLogo} class="django" alt=""/>
                            <img src={flaskLogo} class="flask" alt=""/>
                        </div>
                        <div class="courseDescription">
                            <li><span style={{textDecoration: 'underline'}}>CMPSC 297: Blockchain - Deep Dive</span></li>
                            <p>
                                Blockchain technology and Web3 development. Covers the basics of coding blockchains 
                                and using smart contracts to create decentralized web applications (dApps)
                            </p>
                            <img src={htmlLogo} class="logo" alt=""/>
                            <img src={cssLogo} class="logo" alt=""/>
                            <img src={javascriptLogo} class="javascript" alt=""/>
                            <img src={nodeLogo} class="logo" alt=""/>
                            <img src={reactLogo} class="logo" alt=""/>
                            <img src={solidityLogo} class="solidity" alt=""/>
                        </div>
                        <div class="courseDescription">
                            <li><span style={{textDecoration: 'underline'}}>CMPSC 221: Object Oriented Programming with Web-Based Applications</span></li>
                            <p>
                                Object-oriented principles and their application to web-based net-centric computing. 
                                Topics include virtual machines, intermediate code generation, GUI design, event handling, 
                                and server-side programming with database queries
                            </p>
                            <img src={javaLogo} class="java" alt=""/>
                            <img src={sqlLogo} class="sql" alt=""/>
                            <img src={netbeansLogo} class="logo" alt=""/>
                        </div>
                        <div class="courseDescription">
                            <li><span style={{textDecoration: 'underline'}}>CMPSC 132: Programming and Computation II: Data Structures</span></li>
                            <p>
                                Foundations of programming and computation with data structures (linked lists, stacks, 
                                queues, trees, graphs), object-oriented programming, the analysis of algorithms, and 
                                programming techniques like higher-order functions
                            </p>
                            <img src={pythonLogo} class="logo" alt=""/>
                            <img src={vscodeLogo} class="vscode" alt=""/>
                        </div>
                    </ul>
                </div>
                {/* Computer Engineering Courses */}
                <div class="courseContainer">
                    <h2>Computer Engineering Courses</h2>
                    <ul>
                        <div class="courseDescription">
                            <li><span style={{textDecoration: 'underline'}}>CMPEN 454: Fundamentals of Computer Vision</span></li>
                            <p>
                                Image formation, segmentation, feature extraction, matching, shape recovery, object 
                                recognition, and dynamic scene analysis
                            </p>
                            <img src={matlabLogo} class="matlab" alt=""/>
                        </div>
                        <div class="courseDescription">
                            <li><span style={{textDecoration: 'underline'}}>CMPEN 331: Computer Organization And Design</span></li>
                            <p>
                                Introduces the major components of a computer system (the data path, the control path, 
                                the memory system, the I/O system), how they function together in executing a program, 
                                and how they are designed. Students learn Assembly and Verilog
                            </p>
                        </div>
                        <div class="courseDescription">
                            <li><span style={{textDecoration: 'underline'}}>CMPEN 270: Digital Design: Theory and Practice</span></li>
                            <p>
                                Introduction to digital systems. Presents theoretical foundation for digital systems, 
                                combinational devices, sequential devices, logic gates, latches, and flip flops
                            </p>
                        </div>
                    </ul>
                </div>
                {/* Mathematics Courses */}
                <div class="courseContainer" style={{marginBottom: 50}}>
                    <h2>Mathematics Courses</h2>
                    <ul>
                        <div class="courseDescription">
                            <li><span style={{textDecoration: 'underline'}}>STAT 415: Introduction to Mathematical Statistics</span></li>
                            <p>
                                A theoretical treatment of statistical inference, including sufficiency, estimation, testing, 
                                regression, analysis of variance, and chi-square tests
                            </p>
                            <img src={rLogo} class="r" alt=""/>
                        </div>
                        <div class="courseDescription">
                            <li><span style={{textDecoration: 'underline'}}>STAT 414: Introduction to Probability Theory</span></li>
                            <p>
                                Probability spaces, discrete and continuous random variables, transformations, 
                                expectations, generating functions, conditional distributions, the law of large numbers, 
                                and central limit theorems
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
            <Footer/>
        </>
    )
}