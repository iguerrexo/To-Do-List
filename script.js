var menu= document.getElementsByClassName('Menu');

console.log(menu);

for(var i=0; i<menu.length;i++){
    menu[i].setAtrribute("target",'_blank');
    menu[i].setAtrribute(href,"http://google.com");

}

document.createElement("h2");
document.createTextNode("Morning Routine")

console.log(title2);
console.log(text);

title2.appendChild(text);
console.log(title2);

var main = document.getElementsByTagName("main");
main[0].appendChild(title2);

var p1=document.getElementsById("p1").style.display="none";

main[0].removeChild(title2);
main[0].removeChild(p1);

var title1 =document.createElement("h1");
var text1=document.createTextNode("The new to do List");
title.appendChild(text1);

var header = document.getElementsByTagName("header");

var oldTitle = document.getElementsByTagName("h1");

console.log(oldTitle);

header[0].replaceChild(title,oldTitle[0]);
