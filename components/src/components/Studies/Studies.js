import "./Studies.css";
import data from '../../data/Data.js'; 

const body = document.querySelector("body")

const generalDiv = document.querySelector(".generalDiv")

const Studies = generalDiv.innerHTML += `

<section id="studies"> 

<h2 class="studiesTitle">STUDIES</h2>

<div class="experienceDiv">

    <div class="yearsDiv">
        <p class="yearsExp">${data.education[0].startYear} - 2026</p>
    </div>
    <div>
        <a href="https://thepower.education/" target="_blank" class="expTitle"><h3 class="expTitle">${data.education[0].degree}</h3></a>
        <p class="ExpUniversity">${data.education[0].university}</p>
        <p class="ExpDescription">${data.education[0].description}</p>
        <ul class="expAtributes">
            <li>${data.skills[1]}</li>
            <li>${data.skills[2]}</li>
            <li>${data.skills[3]}</li>
            <li>${data.skills[4]}</li>
            <li>${data.skills[6]}</li>
            <li>${data.skills[19]}</li>
            <li>${data.skills[8]}</li>
            <li>${data.skills[10]}</li>
            <li>${data.skills[13]}</li>
            <li>${data.skills[14]}</li>
            <li>${data.skills[15]}</li>
        </ul>
    </div>

</div>

<div class="experienceDiv">

    <div class="yearsDiv">
        <p class="yearsExp">${data.education[1].startYear} - 2026</p>
    </div>
    <div>
        <a href="https://www.prometeo-fp.com/" target="_blank" class="expTitle"><h3 class="expTitle">${data.education[1].degree}</h3></a>
        <p class="ExpUniversity">${data.education[1].university}</p>
        <p class="ExpDescription">${data.education[1].description}</p>
        <ul class="expAtributes">
            <li>${data.skills[1]}</li>
            <li>${data.skills[2]}</li>
            <li>${data.skills[3]}</li>
            <li>${data.skills[7]}</li>
            <li>${data.skills[9]}</li>
            <li>${data.skills[10]}</li>
            <li>${data.skills[18]}</li>
            <li>${data.skills[17]}</li>
            <li>${data.skills[12]}</li>
        </ul>
    </div>

</div>

<div class="experienceDiv">

    <div class="yearsDiv">
        <p class="yearsExp">${data.education[2].startYear} - 2016</p>
    </div>
    <div>
        <a href="https://www.copernic.cat/ca" target="_blank" class="expTitle"><h3 class="expTitle">${data.education[2].degree}</h3></a>
        <p class="ExpUniversity">${data.education[2].university}</p>
        <p class="ExpDescription">${data.education[2].description}</p>
        <ul class="expAtributes">
            <li>${data.skills[1]}</li>
            <li>${data.skills[2]}</li>
            <li>${data.skills[7]}</li>
            <li>${data.skills[11]}</li>
            <li>${data.skills[12]}</li>
            <li>${data.skills[16]}</li>
            <li>${data.skills[21]}</li>
        </ul>
    </div>

</div>

</section>
`;

export default Studies