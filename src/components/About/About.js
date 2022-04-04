import React from 'react';
import './About.css';
import personal from '../../images/shape-4.png';

const About = () => {
    return (
        <div className='about-container'>
            <h2>About Me</h2>
            <div>
                <img src={personal} alt="personal-img" />
                <p> I'm <strong>Rajebul Alam Khokan</strong>. I'm a professional web developer. I'm capable to learn and I'm also hard worker. I'm confident and believe about my self.</p>
            </div>
        </div>
    );
};

export default About;