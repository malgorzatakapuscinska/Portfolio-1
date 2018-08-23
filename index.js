var firstRight = document.getElementById('first-right');
var firstLeft = document.getElementById('first-left');
var aboutRight = document.getElementById('about-right');
var aboutLeft = document.getElementById('about-left');
var projectsRight = document.getElementById('projects-right');
var projectsLeft = document.getElementById('projects-left');
var technologyRight = document.getElementById('technology-right');
var technologyLeft = document.getElementById('technology-left');
var constactRight = document.getElementById('contact-right');
var contactLeft = document.getElementById('contact-left');

//var boxes = document.querySelectorAll('.box1');

/*for(let i=0; i<boxes.length; i++) {
    box[i].document.getElementById('click', event =>{
        event.preventDefault;
        changePosition('.box[i]');
});
}*/

var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var box6 = document.getElementById('box6');
var box7 = document.getElementById('box7');
var box8 = document.getElementById('box8');


var changePosition = box => {
    document.querySelector(box).classList.toggle('center');
}

var addDisplay = (hide, show) => {
    document.querySelector(hide).classList.add('hide')
    document.querySelector(show).classList.remove('hide');
}

  
box1.addEventListener('click', event => {
    event.preventDefault;
    changePosition('#box1');
})

box2.addEventListener('click', event => {
    event.preventDefault;
    changePosition('#box2');
})

box3.addEventListener('click', event => {
    event.preventDefault;
    changePosition('#box3');
})

box4.addEventListener('click', event => {
    event.preventDefault;
    changePosition('#box4');
})
box5.addEventListener('click', event => {
    event.preventDefault;
    changePosition('#box5');
})

box6.addEventListener('click', event => {
    event.preventDefault;
    changePosition('#box6');
})
box7.addEventListener('click', event => {
    event.preventDefault;
    changePosition('#box7');
})

box8.addEventListener('click', event => {
    event.preventDefault;
    changePosition('#box8');
})


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
    addDisplay('.second', '.about');
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

constactRight.addEventListener('click', event => {
    event.preventDefault;
    addDisplay('.second', '.contact');
})

contactLeft.addEventListener('click', event => {
    event.preventDefault;
    addDisplay('.contact', '.second');
})