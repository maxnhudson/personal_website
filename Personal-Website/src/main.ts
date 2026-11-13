import.meta.glob("./styles/*.css", { eager: true });
import img from "./assets/Profile Picture 1-7-26 smaller.png";
import { loadFile, skillMap, projectMap, initDrawer } from "./scripts/index.ts";

const about = await loadFile("./about.txt");

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<header class="navbar">
  <a href=# class="logo">mh</a>

  <button class="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="nav-drawer">
    ☰
  </button>

  <div class="backdrop"></div>

  <nav id="nav-drawer" class="nav-drawer">
    <button class="close-btn" aria-label="Close menu">✕</button>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSelMB5bzjRODvkb3fe4yHUrk0QbJugZZeqfWtB4-GVSlcGSsA/viewform?usp=dialog">Contact</a>
    <a href="../public/MHudson_Resume_091526.pdf">Resume</a>
  </nav>
  <script type="module" src="/src/main.ts"></script>
</header>

<section id="aboutme">
  <div>
    <img src="${img}" class=pro-pic />
  </div>
  <div>
    <p1 class = pro-txt> ${about} </p1>
  </div>
</section>

<section id="projects">
  <div>
    <h1>Projects</h1>
    <div id = projectSlot class = "card-grid"/>
  </div>
</section>

<section id ="skills"> 
  <div>
    <h1>Skills</h1>
    <div id = skillSlot class = "card-grid"/>
  </div>
</section>
`;

initDrawer();

const listContainer = document.getElementById("projectSlot") as HTMLUListElement;
projectMap(listContainer);

const listContainer2 = document.getElementById("skillSlot") as HTMLUListElement;
skillMap(listContainer2);
