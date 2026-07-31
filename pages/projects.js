let button1 = document.getElementById('project_1_button');
let button2 = document.getElementById('project_2_button');
let button3 = document.getElementById('project_3_button');

let project1 = document.getElementById('project_1');
let project2 = document.getElementById('project_2');
let project3 = document.getElementById('project_3');

project1.addEventListener('mouseover', function() {
    button1.style.visibility = 'visible';
    button1.onclick = function() {
        alert("This project is a work in progress. Please check back later for updates!");
    }
});

project1.addEventListener('mouseout', function() {
    button1.style.visibility = 'hidden';
});

project2.addEventListener('mouseover', function() {
    button2.style.visibility = 'visible';
    button2.onclick = function() {
        window.open('https://github.com/mols-art/Jame-Game-1', '_blank');
    }
});

project2.addEventListener('mouseout', function() {
    button2.style.visibility = 'hidden';
});

project3.addEventListener('mouseover', function() {
    button3.style.visibility = 'visible';
    button3.onclick = function() {
        window.open('https://github.com/mols-art/personal-website-project', '_blank');
    }
});

project3.addEventListener('mouseout', function() {
    button3.style.visibility = 'hidden';
});