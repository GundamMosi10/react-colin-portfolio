import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'; 

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover') 
    //     }, 3000)
    // }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>Front-end web developer leveraging a sales background to build a more intuitive and friendly user experience on the web. Recently earned a certificate in full stack development from Columbia University Engineering School, with newly developed skills in JavaScript, CSS, Node.js, MongoDB, React.js, and responsive web design. </p>
                <p>Passionate about approaching programming challenges from different angles and collaborating with others to create meaningful web applications. I like to hyper focus on problems before moving onto the next, breaking down a problem piece-by-piece to find a solution.</p>
                <p>I’m excited to become a part of a quality-driven team to develop and create impactful user experiences by continuing to learn throughout each project we tackle as a team.</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faReact} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faAngular} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
