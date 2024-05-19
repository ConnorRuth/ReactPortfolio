import { AiFillGithub } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link} from 'react-router-dom';
import '../styles/footer.css';

function Footer() {
    const githubUrl = "https://github.com/ConnorRuth";
return(
    <footer className="footer">
        <div>
        <IconContext.Provider value={{size: "50px", className: 'react-icons' }}>
            <Link to={githubUrl} target="_blank">
            <AiFillGithub />
            </Link>
        </IconContext.Provider>
        </div>
    </footer>
);
}
export default Footer