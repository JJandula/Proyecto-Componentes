import "./Experience.css";
import data from '../../data/Data.js'; 

const body = document.querySelector("body")

const generalDiv = document.querySelector(".generalDiv")

const Experience = generalDiv.innerHTML += `

<h2 class="experienceTitle">EXPERIENCE</h2>

<div class="experienceDiv" id="experience">

    <div class="yearsDiv">
        <p class="yearsExp">${data.workExperience[0].startDate} - ${data.workExperience[0].endDate}</p>
    </div>
    <div>
        <a href="https://kultureshop.com/" target="_blank" class="expTitle"><h3 class="expTitle">${data.workExperience[0].position} - ${data.workExperience[0].company}</h3></a>
        <p class="ExpDescription">${data.workExperience[0].description}</p>
        <ul class="expAtributes">
            <li>${data.skills[0]}</li>
            <li>${data.skills[1]}</li>
            <li>${data.skills[2]}</li>
            <li>${data.skills[3]}</li>
            <li>${data.skills[5]}</li>
        </ul>
    </div>
    

</div>

<div class="experienceDiv">

    <div class="yearsDiv">
        <p class="yearsExp">${data.workExperience[1].startDate} - ${data.workExperience[1].endDate}</p>
    </div>
    <div>
        <a><h3 class="expTitle">${data.workExperience[1].position} - ${data.workExperience[1].company}</h3></a>
        <p class="ExpDescription">${data.workExperience[1].description}</p>
        <ul class="expAtributes">
            <li>${data.skills[0]}</li>
            <li>${data.skills[1]}</li>
            <li>${data.skills[2]}</li>
            <li>${data.skills[3]}</li>
            <li>${data.skills[5]}</li>
        </ul>
    </div>
    

</div>
`;

export default Experience