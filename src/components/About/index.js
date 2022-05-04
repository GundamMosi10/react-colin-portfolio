import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

const About = () => {

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>Front-end web developer leveraging a sales background to build a more intuitive and friendly user experience on the web. Recently earned a certificate in full stack development from Columbia University Engineering School, with newly developed skills in JavaScript, CSS, Node.js, MongoDB, React.js, and responsive web design. </p>
                <p>Passionate about approaching programming challenges from different angles and collaborating with others to create meaningful web applications. I like to hyper focus on problems before moving onto the next, breaking down a problem piece-by-piece to find a solution.</p>
                <p>I’m excited to become a part of a quality-driven team to develop and create impactful user experiences by continuing to learn throughout each project we tackle as a team.</p>
            </div>
        </div>
    )
}

export default About;
