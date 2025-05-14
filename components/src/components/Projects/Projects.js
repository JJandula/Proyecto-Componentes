
import "./Projects.css";
import data from '../../data/Data.js'; 

const body = document.querySelector("body")

const generalDiv = document.querySelector(".generalDiv")


const Projects = generalDiv.innerHTML += `

<section id="projects">

<h2 class="projectsTitle">PROJECTS</h2>

<div class="experienceDiv">

    <div class="imgDiv">
        <img src="${data.projects[0].preview}" alt="${data.projects[0].title}">
    </div>
    <div>
        <a href="${data.projects[0].deploy}" target="_blank" class="expTitle"><h3 class="expTitle">${data.projects[0].title}</h3></a>
        <p class="ExpDescription">${data.projects[0].description}</p>
        <ul class="expAtributes">
            <li>${data.skills[1]}</li>
            <li>${data.skills[2]}</li>
        </ul>
    </div>

</div>

<div class="experienceDiv">

    <div class="imgDiv">
        <img src="${data.projects[1].preview}" alt="${data.projects[1].title}">
    </div>
    <div>
        <a href="${data.projects[1].deploy}" target="_blank" class="expTitle"><h3 class="expTitle">${data.projects[1].title}</h3></a>
        <p class="ExpDescription">${data.projects[1].description}</p>
        <ul class="expAtributes">
            <li>${data.skills[1]}</li>
            <li>${data.skills[2]}</li>
            <li>${data.skills[3]}</li>
        </ul>
    </div>

</div>

<div class="experienceDiv">

    <div class="imgDiv">
        <img src="${data.projects[2].preview}" alt="${data.projects[2].title}">
    </div>
    <div>
        <a href="${data.projects[2].deploy}" target="_blank" class="expTitle"><h3 class="expTitle">${data.projects[2].title}</h3></a>
        <p class="ExpDescription">${data.projects[2].description}</p>
        <ul class="expAtributes">
            <li>${data.skills[1]}</li>
            <li>${data.skills[2]}</li>
            <li>${data.skills[3]}</li>
            <li>${data.skills[4]}</li>
        </ul>
    </div>

</div>

<div class="experienceDiv">

    <div class="imgDiv">
        <img src="${data.projects[3].preview}" alt="${data.projects[3].title}">
    </div>
    <div>
        <a href="${data.projects[3].deploy}" target="_blank" class="expTitle"><h3 class="expTitle">${data.projects[3].title}</h3></a>
        <p class="ExpDescription">${data.projects[3].description}</p>
        <ul class="expAtributes">
            <li>${data.skills[1]}</li>
            <li>${data.skills[2]}</li>
            <li>${data.skills[3]}</li>
            <li>${data.skills[4]}</li>
        </ul>
    </div>

</div>

</section>

`;

export default Projects