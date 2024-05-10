import '../styles/pages.css';
export default function Portfolio() {
    return (
      <div>
        <h1>Portfolio Page</h1>
        <div class="container">
        <div class="mini-container">
            <h3></h3>
          <a href="https://connorruth.github.io/Horiseon-HW-w1/"alt="screenshot of a previous website worked on">
          <img src="./assets/hw1-img.jpg"></img>
          <div class="centered"> Refactoring </div></a>
        </div>
        <div class="mini-container">
            <h3>ttrpg tracker</h3>
          <a href="blank">
          <img src="../assets.ttrpg-port-img.png"alt="screenshot"></img>
          </a>
        </div>
        <div class="mini-container">
            <h3></h3>
          <a href="blank">
          <img src="./assets/placeholder.jpg"alt="placeholder face image"></img>
          <div class="centered"> Personal Projects </div></a>
        </div>
        <div class="mini-container">
        <h3></h3>
          <a href="blank">
          <img src="./assets/placeholder.jpg"alt="placeholder face image"></img>
          <div class="centered"> Personal Projects </div></a>
        </div>
      </div>
      </div>
    );
  }
  