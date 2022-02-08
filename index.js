


var randomnumber1 =  Math.floor(Math.random()*6) +1;
var randomdice1 = "dice"+randomnumber1+".png";
var randomImageSrc = "images/"+randomdice1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImageSrc);


var randomnumber2 = Math.floor(Math.random()*6) +1;
var randomImageSrc2 = "images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML= ("🚩Player 1 WINSS!!!");
}
else if (randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML= ("Player 2 WinSSS🚩");
}
else{
    document.querySelector("h1").innerHTML= ("Koi nahi jeeta bhai");
}