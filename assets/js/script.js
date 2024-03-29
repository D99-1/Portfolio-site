
AOS.init();

window.addEventListener('scroll', e => {
	if (document.documentElement.scrollTop > 20) {
		const nav = document.getElementById('nav')
		nav.style.backgroundColor = 'rgba(0,0,0,0.5)'
		nav.style.backdropFilter = 'blur(5px)'
	} else {
		document.getElementById("nav-wrapper").className = "nav-wrapper-custom";
		nav.style.boxShadow = 'inset 0 -1px 0 0 hsla(0,0%,100%,0.1)'
		nav.style.backgroundColor = 'transparent'
	}
})

const tips = [
	{
		query: '#stackOverflow',
		content: 'Stack Overflow',
	},
	{
		query: '#github',
		content: 'Github',
	},
];

for (const { query, content } of tips) {
	tippy(query, { content })
}


const sr = ScrollReveal({
	origin: 'bottom',
	distance: '60px',
	duration: 1000,
	delay: 400
})

const ops = { interval: 100 }

sr.reveal('.head, .paragraph, .hero-button', ops);
sr.reveal('.icon', ops);
sr.reveal(".about-title, .about-img, .about-text, .about-description.grey", ops);
sr.reveal('.stats-item', ops);
sr.reveal('.project-content, .m-project-content, .card', ops);

// Projects

const container = document.querySelector('.project-content');
const mContainer = document.querySelector('.m-project-content');

projects.forEach((project) => {
	container.innerHTML +=
		`<div class="card" onClick="">
			<div class="card-content">
			<h3 class="card-heading">${project.name}</h3>
			<p class="card-description">${project.description}</p>
			<div class="buttons">
			  <button onclick="window.open('${project.url}', '_blank')" class="card-button">Visit&nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i></button>
			</div>
			</div>
  		</div>`
})
projects.forEach((project) => {
	mContainer.innerHTML +=
`

<div class="card" id="${project.name}" onClick="clicked(this)">
<div class="row-div">
  <label for="collapsible" class="lbl-toggle">${project.name}</label>
  </div>
  </div>

`
})
function clicked(elem){
	let id = elem.id
	let item = document.getElementById(id)
	let rawData = projects.find(({ name }) => name === id);
	let extended = `
	<div class="card-content" id="${rawData.name}-unCollapsed">
	<div style="display="flex"; flex-direction="row"">
	<h3 class="card-heading">${rawData.name} <i class="fa-solid fa-caret-down"></i></h3>
	</div>
	<p class="card-description">${rawData.description}</p>
	<div class="buttons">
	  <button onclick="window.open('${rawData.url}', '_blank')" class="card-button">Visit&nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i></button>
	</div>
	</div>
  `
  let short = `
	<label for="collapsible" class="lbl-toggle">${rawData.name} <i class="fa-solid fa-caret-right"></i></label>
  `
  const uncollap = document.getElementById(`${rawData.name}-unCollapsed`)
	if (uncollap){
	item.innerHTML = short
	} else{
		item.innerHTML = extended
	}


}




// Blob
/*const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(452, 250);
const scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(27, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
const sphere_geometry = new THREE.SphereGeometry(1, 128, 128);
const material = new THREE.MeshNormalMaterial();
let sphere = new THREE.Mesh(sphere_geometry, material);
scene.add(sphere);
const update = function () {
	const time = performance.now() * 0.003;
	const k = 3;
	for (let i = 0; i < sphere.geometry.vertices.length; i++) {
		let p = sphere.geometry.vertices[i];
		p.normalize().multiplyScalar(1 + 0.3 * noise.perlin3(p.x * k + time, p.y * k, p.z * k));
	}
	sphere.geometry.computeVertexNormals();
	sphere.geometry.normalsNeedUpdate = true;
	sphere.geometry.verticesNeedUpdate = true;
}
function animate() {
	update();
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
*/
// Nav

const links = document.querySelectorAll(".nav-link");
Array.from(links).forEach(link => {
	if (link.getAttribute('data-scroll')) {
		link.onclick = () => window.scrollTo({ top: document.querySelector(link.getAttribute("data-scroll")).offsetTop, behavior: 'smooth' })
	}
})
window.addEventListener('resize', add)
function add() {
	if (window.innerWidth < 900) {
		document.body.classList.add('mobile')
	} else {
		document.body.classList.remove('mobile')
	}
}
window.onload = add;
let hamburger = document.querySelector('.hamburger')
let mobileNav = document.querySelector('.nav-list')
let bars = document.querySelectorAll('.hamburger span')
let isActive = false
hamburger.addEventListener('click', function () {
	mobileNav.classList.toggle('open')
	if (!isActive) {
		bars[0].style.transform = 'rotate(45deg)'
		bars[1].style.opacity = '0'
		bars[2].style.transform = 'rotate(-45deg)'
		isActive = true
	} else {
		bars[0].style.transform = 'rotate(0deg)'
		bars[1].style.opacity = '1'
		bars[2].style.transform = 'rotate(0deg)'
		isActive = false
	}
})


// Typing animation
var typing=new Typed(".typing-text", {
  strings: [ "JavaScript", "NodeJS","React Native","HTML", "CSS","Python"],
  typeSpeed: 80,
  backSpeed: 75,
  loop: true,
  backDelay: 500,

});


// Active Menu Highlight
const highlightMenu = () => {
  const activeElement = document.querySelector(".highlight-nav");
  const homeMenu = document.querySelector("#home-nav");
  const aboutMenu = document.querySelector("#about-nav");
  const projectsMenu = document.querySelector("#projects-nav");

  let scrollPos = window.scrollY;
  if (window.innerWidth > 960 && scrollPos < 654.39) {
	homeMenu.classList.remove("unhighlight-nav")
    homeMenu.classList.add("highlight-nav");
    aboutMenu.classList.add("unhighlight-nav");
	setTimeout(() =>{homeMenu.classList.add("unhighlight-nav");},5000)
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1370) {
	aboutMenu.classList.remove("unhighlight-nav")
    aboutMenu.classList.add("highlight-nav");
    homeMenu.classList.add("unhighlight-nav");
    projectsMenu.classList.add("unhighlight-nav");
	setTimeout(() =>{aboutMenu.classList.add("unhighlight-nav");},5000)

    return;
  } else if (window.innerWidth > 960 && scrollPos < 20000) {
	projectsMenu.classList.remove("unhighlight-nav")
    projectsMenu.classList.add("highlight-nav");
    aboutMenu.classList.add("unhighlight-nav");
	setTimeout(() =>{projectsMenu.classList.add("unhighlight-nav");},5000)
    return;
  } 

  if (
    (activeElement && window.innerWidth < 960 && scrollPos < 600) ||
    activeElement
  ) {
    activeElement.classList.add("unhighlight-nav");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);
