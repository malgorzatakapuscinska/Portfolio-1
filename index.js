var firstRight = document.getElementById('first-right');
var firstLeft = document.getElementById('first-left');
var aboutRight = document.getElementById('about-right');
var aboutLeft = document.getElementById('about-left');
var projectsRight = document.getElementById('projects-right');
var projectsLeft = document.getElementById('projects-left');
var technologyRight = document.getElementById('technology-right');
var technologyLeft = document.getElementById('technology-left')


var addDisplay = (hide, show) => {
    document.querySelector(hide).classList.add('hide')
    document.querySelector(show).classList.remove('hide');
}



firstRight.addEventListener('click', event => {
    event.preventDefault();
    addDisplay('.first', '.second');
})

firstLeft.addEventListener('click', event => {
    event.preventDefault;
    addDisplay('.second', '.first');
})

aboutRight.addEventListener('click', event => {
    event.preventDefault;
    addDisplay('.second','.about');
})

aboutLeft.addEventListener('click', event => {
    event.preventDefault;
    addDisplay('.about','.second');
})

projectsRight.addEventListener('click', event => {
    event.preventDefault;
    addDisplay('.second','.projects');
})

projectsLeft.addEventListener('click', event => {
    event.preventDefault;
    addDisplay('.projects', '.second');
})

technologyRight.addEventListener('click', event => {
    event.preventDefault;
    addDisplay('.second', '.technology');
})

technologyLeft.addEventListener('click', event => {
    event.preventDefault;
    addDisplay('.technology', '.second');
})