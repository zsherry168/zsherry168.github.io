import React from 'react';
import resumepdf from '../SherryZhangResume.pdf';
import './Resume.css';
import Footer from './Footer.js';


export const Resume = () => {
    return (
        <div class="container">
            <h1>Resume</h1>
            <iframe 
                src={resumepdf} 
                class="resume" 
                style={{maxWidth:640, width:'100%', height: '875px', overflow:'visible'}}
                title="Resume"
            />
            <Footer/>
        </div>
    )
}