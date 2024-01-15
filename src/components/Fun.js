import React from 'react';
import './Fun.css';
import Footer from './Footer.js';
import fungi from '../images/fungi.jpg';
import bleedingheart from '../images/bleedingheart.jpg';
import hanalei from '../images/hanalei.jpg';
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
                <img src={hanalei} class="img" alt=""/>
                <center>
                    <div class="img_box">
                        <p>
                            June 2023 - Photo I took of Hanalei Bay while on a helicopter in Kauai, Hawaii
                        </p>
                    </div>
                </center>
                <img src={bleedingheart} class="img" alt=""/>
                <center>
                    <div class="img_box">
                        <p>
                            May 2022 - One of my favorite flowers. The bleeding heart plant is native to eastern 
                            Asia, but Penn State has some outside its alumni center
                        </p>
                    </div>
                </center>
                <img src={fungi} class="img" alt=""/>
                <center>
                    <div class="img_box">
                        <p>
                            September 2021 - The giant conk fungus I discovered for my fungi class scavenger hunt. 
                            Because of the rain, Pennsylvania has so many cool mushrooms and fungi in the wild
                        </p>
                    </div>
                </center>
            </div>
            <Footer/>
        </>
    )
}