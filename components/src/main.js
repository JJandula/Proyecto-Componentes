import "./style.css";
import HeaderComponent from "./components/Header/Header";
import HeaderMobile from "./components/HeaderMobile/HeaderMobile";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Studies from "./components/Studies/Studies";
import Projects from "./components/Projects/Projects";



/* MENU INTERACTIVO */

const options = {
  root: null, 
  rootMargin: '0px 0px -50% 0px',
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    const link = document.querySelector(`.menu-link[href="#${id}"]`);

    if (entry.isIntersecting) {
      document.querySelectorAll(".menu-link").forEach((el) => el.classList.remove("active"));
      if (link) link.classList.add("active");
    }
  });
}, options);

document.querySelectorAll("div[id]").forEach((section) => {
  observer.observe(section);
});



/* MOUSE EFECTO LINTERNA */


const cursorRing = document.getElementById("cursor-ring");
document.addEventListener("mousemove", (ev) => {
  requestAnimationFrame(() => {
    cursorRing.style.left = `${ev.clientX}px`;
    cursorRing.style.top = `${ev.clientY}px`;
  });
});
const toggleCursor = () => {
  cursorRing.classList.toggle("active");
};
document.addEventListener("mousedown", toggleCursor);
document.addEventListener("mouseup", toggleCursor);