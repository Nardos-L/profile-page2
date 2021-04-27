
function changeName() {
    var h1 = document.querySelector(".user-name");
    h1.innerHTML = "John Doe";

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