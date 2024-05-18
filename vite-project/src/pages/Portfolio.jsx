import '../styles/pages.css';
import Project from '../components/project';
import ttrpgimage from '../assets/ttrpg-port-img.png'
import pwaimage from '../assets/PWA-text-editor.png'
const githubUrlRPG = 'https://github.com/ConnorRuth/ttrpg-tracker'
const gitUrlPWA = 'https://github.com/ConnorRuth/PWA-Text-Editor'
const titleRPG = "TTRPGTracker"
const titlePWA = "PWA Editor"
export default function Portfolio() {
    return (
      <>
      <Project img={ttrpgimage} title={titleRPG} url={githubUrlRPG}></Project>
      <Project img={pwaimage} title={titlePWA} url={gitUrlPWA}></Project>
      </>
    );
  }
  