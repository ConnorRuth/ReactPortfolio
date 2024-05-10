import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../styles/project.css'
import ttrpgimage from '../assets/ttrpg-port-img.png'
function Project() {
    const githubUrlRPG = 'https://github.com/ConnorRuth/ttrpg-tracker'
    const HoverData = <Link to={githubUrlRPG} className='deLink'target="_blank">
    TTRPGTracker
    </Link>;
    const [hover, setHover] = useState(false);
    const onHover = (event) => {
        event.preventDefault();
        setHover(true); 
      };
      const onHoverOver = (event) => {
        event.preventDefault(); 
        setHover(false);
      };
return(
<div className="image-container">
      {/* if hover is true then only show the text */}
      <img
        onMouseOver={(event) => onHover(event)}
        onMouseLeave={(event) => onHoverOver(event)}
        alt="image rpgwebsite"
        src={ttrpgimage}
        className="img-responsive"
      />
      {hover && <div onMouseOver={(event) => onHover(event)} className="overlay-link">{HoverData}</div>}
    </div>
)
}
export default Project;