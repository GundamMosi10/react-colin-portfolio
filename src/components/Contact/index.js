import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters'; 
import { useEffect, useState } from 'react';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover') 
    //     }, 3000)
    // }, [])

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                            idx={15}
                        /> 
                    </h1>
                    <p>
                        I am interested in becoming part of a great team of creatives and innovaters to build projects for the future. 
                        I wish to continue to learn and grow from the people around me to elevate each other. Howerver, if you have other 
                        requests or questions, don't hesitate to contact me using the form below. 
                    </p>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact;