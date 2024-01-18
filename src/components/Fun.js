import React from 'react';
import './Fun.css';
import Footer from './Footer.js';
import broomball from '../images/broomball.jpg'
import mtnittany from '../images/mtnittany.jpg';


export const Fun = () => {
    return (
        <>
            <div class="container largerBox animate__animated animate__fadeIn">
                <h1>Fun Stuff</h1>
                <p>This section is dedicated to random fun photos from my camera roll.</p>
                <img src={mtnittany} class="img" alt=""/>
                <center>
                    <div class="img_box">
                        <p>
                            October 2023 - Hiking Mount Nittany with other Team G mentors. The background 
                            features a view of Penn State's campus
                        </p>
                    </div>
                </center>
                <img src={broomball} class="img" alt=""/>
                <center>
                    <div class="img_box">
                        <p>
                            August 2023 - Me and Team G mentees after playing broomball to wrap 
                            up the 2023 Women in Engineering Program Orientation
                        </p>
                    </div>
                </center>
            </div>
            <Footer/>
        </>
    )
}