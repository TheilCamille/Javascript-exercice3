var image = document.getElementsByTagName('img')[0];

image.onmouseover=function()
{
    image.style.border = "3px solid red"
};

image.onmouseout=function()
{
    image.style.border = "none"
};

var afficher = document.getElementsByTagName('a')[0],
    cacher = document.getElementsByTagName('a')[1],
    texte = document.getElementById('texte');

afficher.onclick=function()
{
    texte.style.display= "block"
};

cacher.onclick=function()
{
    texte.style.display= "none"
};

var texte1 = document.getElementById('texte1'),
    green = document.getElementsByClassName('color green'),
    red = document.getElementsByClassName('color red'),
    blue = document.getElementsByClassName('color blue');

function Bgreen()
{
    texte1.style.color = "green"
}

function Bred()
{
    texte1.style.color = "red"
}

function Bblue()
{
    texte1.style.color = "blue"
}

var mdp = document.getElementById('motdepasse'),
    confirmation = document.getElementById('confirmation'),
    validation = document.getElementsByTagName('button')[0];

validation.onclick=function(){

if(mdp.value == confirmation.value){
    mdp.style.border = '1px green solid';
    confirmation.style.border = '1px green solid'
}
else{
    mdp.style.border = '1px red solid';
    confirmation.style.border = '1px red solid'
}
};
