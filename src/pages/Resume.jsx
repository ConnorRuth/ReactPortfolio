import '../styles/pages.css';
import { Link } from 'react-router-dom';
import resumePDF from '../assets/Connor_Resume.pdf'

export default function Resume() {
  
    return (
      <div>
        <h1>Resume Page</h1>
        <Link className='download'
         to={resumePDF} download="MyResume" target='_blank'
        >My Resume
        </Link>
        <h3>Notable Skills:</h3>
        <ul>
            <li>nodeJS</li>
            <li>adobe photoshop/illustrator</li>
            <li>Excel</li>
            <li>MySQL/mongoDb</li>
            <li>Git</li>
        </ul>
      </div>
    );
  }
  