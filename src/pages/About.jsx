import '../styles/pages.css';
import selfie from '../assets/circ-selfie.png';


export default function About() {
    return (
      <div className='about-section'>
        <h1>About Me</h1>
        <img src={selfie} alt="Photo of Connor Ruthven" style={{ width: '150px', height: '150px',}}></img>
        <p>
         Hello there! I'm Connor, I have spent many of my past years personally 
         developing skills of wide array areas having spent several years developing
        graphic design skills, previous and current spent learning various programming languages.
        Currently I'm proficent in Javasript with some past experience with C and Python(planning on returning to both after having, 
        now developed a better grasp on programming as a whole). I love games and the design that 
        goes into making people have enjoyable experiences with a service or activity.
        </p>
      </div>
    );
  }
  