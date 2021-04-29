
var input = document.querySelector("#fullname") ;
var acceptButton = document.querySelector('#acceptbutton') ;


function openInput() {    
    input.style.visibility ="visible";
    acceptButton.style.visibility ="visible";
}

function changeName() {
    var fullName = document.querySelector(".user-name");
    var newName = input.value;
    fullName.innerHTML = newName;
    input.style.visibility ="hidden";
    acceptButton.style.visibility ="hidden";   
}

function removeUser(){
    var div = document.querySelector("#top-req1");
    div.remove();
}

function removeUser2(){
    var div = document.querySelector("#top-req2");
    div.remove();
}

var count=2;
var numValue = document.querySelector(".span");
function ChangeNumber(){
    count--;    
    numValue.innerHTML=count;
}

var count1=500;
function increaseNumber() {
    count--;
    numValue.innerHTML=count;
    count1++;
    var numVal2 = document.querySelector("#span2");
    numVal2.innerHTML=count1;
}