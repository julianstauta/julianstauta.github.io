var Wireframes = document.getElementById('Wireframes');
Wireframes.addEventListener('click', overWireframes);
Wireframes.addEventListener('mouseout', outWireframes);

var Platforms = document.getElementById('Platforms');
Platforms.addEventListener('click', overPlatforms);
Platforms.addEventListener('mouseout', outPlatforms);

var Vector = document.getElementById('Vector');
Vector.addEventListener('click', overVector);
Vector.addEventListener('mouseout', outVector);

var Frameworks = document.getElementById('Frameworks');
Frameworks.addEventListener('click', overFrameworks);
Frameworks.addEventListener('mouseout', outFrameworks);

var Back = document.getElementById('Back');
Back.addEventListener('click', overBack);
Back.addEventListener('mouseout', outBack);

var Front = document.getElementById('Front');
Front.addEventListener('click', overFront);
Front.addEventListener('mouseout', outFront);

var Others = document.getElementById('Others');
Others.addEventListener('click', overOthers);
Others.addEventListener('mouseout', outOthers);

function overWireframes(e) {
    Wireframes.innerHTML = 
    '<p><b>Skill Level</b><br>8/10</p>';
    Wireframes.style.backgroundColor = "#00887A";
    Wireframes.style.color = "white";
}
function outWireframes(e) {
    Wireframes.innerHTML = 
    '<p> <b>Wireframes and Prototypes</b><br> Invision, MarvelApp, Blasamic </p>';
    Wireframes.style.backgroundColor = "#FFFF";
    Wireframes.style.color = "black";
}

function overPlatforms(e) {
    Platforms.innerHTML = 
    '<p><b>Skill Level</b><br>9/10</p>';
    Platforms.style.backgroundColor = "#00887A";
    Platforms.style.color = "white";
}
function outPlatforms(e) {
    Platforms.innerHTML = 
    '<p> <b>Platforms</b><br> Windows XP, Windows 7, Windows 8 and Windows 10 (user), MacOS, Android (user & developer), Ubuntu, Elementary OS, Centos. </p>';
    Platforms.style.backgroundColor = "#FFFF";
    Platforms.style.color = "black";
}

function overVector(e) {
    Vector.innerHTML = 
    '<p><b>Skill Level</b><br>6/10</p>';
    Vector.style.backgroundColor = "#00887A";
    Vector.style.color = "white";
}
function outVector(e) {
    Vector.innerHTML = 
    '<p><b>Vector (Icons)</b><br>Illustrator</p>';
    Vector.style.backgroundColor = "#FFFF";
    Vector.style.color = "black";
}

function overBack(e) {
    Back.innerHTML = 
    '<p><b>Skill Level</b><br>9/10</p>';
    Back.style.backgroundColor = "#00887A";
    Back.style.color = "white";
}
function outBack(e) {
    Back.innerHTML = 
    '<p> <b>Back-end</b><br> Java, C#, Python, Android(Java) </p>';
    Back.style.backgroundColor = "#FFFF";
    Back.style.color = "black";
}

function overFront(e) {
    Front.innerHTML = 
    '<p><b>Skill Level</b><br>5/10</p>';
    Front.style.backgroundColor = "#00887A";
    Front.style.color = "white";
}
function outFront(e) {
    Front.innerHTML = 
    '<p> <b>Front-end</b><br> HTML, CSS, JSF </p>';
    Front.style.backgroundColor = "#FFFF";
    Front.style.color = "black";
}

function overFrameworks(e) {
    Frameworks.innerHTML = 
    '<p><b>Skill Level</b><br>6/10</p>';
    Frameworks.style.backgroundColor = "#00887A";
    Frameworks.style.color = "white";
}
function outFrameworks(e) {
    Frameworks.innerHTML = 
    '<p> <b>Frameworks</b><br> Scrum, Bootstrap, Material design </p>';
    Frameworks.style.backgroundColor = "#FFFF";
    Frameworks.style.color = "black";
}

function overOthers(e) {
    Others.innerHTML = 
    '<p><b>Skill Level</b><br>9/10</p>';
    Others.style.backgroundColor = "#00887A";
    Others.style.color = "white";
}
function outOthers(e) {
    Others.innerHTML = 
    '<p> <b>Others</b><br> SQL(Oracle, MySQL, Postgress), Google Firebase </p>';
    Others.style.backgroundColor = "#FFFF";
    Others.style.color = "black";
}