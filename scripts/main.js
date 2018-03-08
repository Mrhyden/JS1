/*
myVariable = 'Bob';
var myVariable = 'Bob';
myVariable;

var myVariable = 'Bob';
myVariable = 'Steve';
var myVariable = 10;
var myVariable = ture;
var myVariable = [1,'Bob','Steve',10]
myVariable[0],myVariable[1],myVariable=['Bob']
var myVariable = document.querySelector('h1');
*/
// This is a comment

/* 运算符
Operator 
加/连接  用来相加的两个数字，或者连接两个字符串  +  6+9
减、乘、除   - * /
赋值运算  =
相等 ===   var myVariable = 3 ;myVariable === 4; 
非，不等  ！，！==  var myVariable = 3; !myVariable === 3; 
*/

var myImage = document.querySelector('img');
myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src','images/firefox2.jpg');
    }else{
        myImage.setAttribute('src','images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
 function setUserName(){
     var myName = prompt('你是夏启鹏的什么人？');
     localStorage.setItem('name',myName);
     myHeading.innerHTML = '节日快乐！' + myName;
 }


 if (!localStorage.getItem('name')){
     setUserName();
 }else {
     var storedName = localStorage.getItem('name');
     myHeading.innerHTML = '节日快乐 ,' + storedName;
 }
 myButton.onclick = function(){
     setUserName();
 }