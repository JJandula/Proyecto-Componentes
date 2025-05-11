import "./About.css";
import data from '../../data/Data.js'; 

const body = document.querySelector("body")

const generalDiv = document.createElement("div");

generalDiv.classList.add("generalDiv");

const About = generalDiv.innerHTML = `

<div class="aboutDiv" id="about">
    <h2 class="aboutTitle">ABOUT</h2>
    <p>${data.aboutMe1}</p>

    <p>${data.aboutMe2}</p>

    <p id="lastText">${data.aboutMe3}</p>
</div>
`;

body.appendChild(generalDiv)

export default About