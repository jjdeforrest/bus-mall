console.log('text appislive');
var container = document.getElementById('stores');

Images.allImages = [];

var totalClicks = 0;


function Images(name, imageSrc) {
  this.name = name;
  this.url = imageSrc;
  this.clicks = 0;
  this.timesShown = 0;
  this.randomOne = 0;
  this.randomTwo = 0;
  this.randomThree = 0;
  Images.allImages.push(this);
}

function addElement(tag, dog, text) {
  var element = document.createElement(tag);
  dog.appendChild(element);
  element.textContent = text;
  return element;
}

new Images('bag', './img/cruisin-goat.jpg');
new Images('banana', './img/banana.jpg');
new Images('bathroom', './img/bathroom.jpg');
new Images('boots', '.img/boots.jpg');
new Images('breakfast', '.img/breakfast.jpg');
new Images('bugglegum', '.img/bubblegum.jpg');
new Images('chair', 'img/chair.jpg');
new Images('cthulhu', 'img/cthulhu.jpg');
new Images('dog-duck', 'img/dog-duck.jpg');
new Images('dragon', 'img/dragon.jpg');
new Images('pen', 'img/pen.jpg');
new Images('pet-sweep', 'img/pet-sweep.jpg');
new Images('scissors.jpg', 'img/scissors.jpg');
new Images('shark', 'img/shark.jpg');
new Images('sweep', 'img/sweep.png');
new Images('tauntaun', 'img/tauntaun.jpg');
new Images('unicorn.jpg', 'img/unicorn.jpg');
new Images('usb', 'img/usb.jpg');
new Images('water-can', 'img/water-can.jpg');
new Images('wine-glass', 'img/wine-glass.jpg');


var surpriseImage = Images.allImages[Math.random() * Images.allImages];


function randomPosition() {
  var position = Math.floor(Math.random() * Images.allImages.length); 
  return position;
}

function getThreeImages(){
  do{
    var first = randomPosition();
    var second = randomPosition();
    var third = randomPosition();

    
  }while(first || second || third);





  console.log(first,second,third);

}
console.log(getThreeImages());

getThreeImages();
console.log(first,second,third);
console.log(getThreeImages());


'use strict';
​
// var imagesList = [];
​
// Global Random Function
// Will give me num from 0 to num-1
function randomNumber (num) {
  var randNum = Math.floor(Math.random() * (num)); // Math.random() * (20 - 0 + 1)
  return Math.floor(randNum);
}
console.log('randomNumber: ', randomNumber(3));
​
// Create CONSTRUCTOR
var Pictures = function(name, urlSource) {
  this.name = name;
  this.url = urlSource;
  // this.clicks = clicks;
  Pictures.allPictures.push(this);
  // this.timeShown = timeShown;
}
​
Pictures.allPictures = []; //save all img into a list
var totalClicks = 0; //saves total num of clicks
// var surpriseImage = Pictures.allPictures[randomNumber()]; //set up a random item in the list of pics
​
function chooseThree (listLenght) {
  var threePics = []
  while(threePics.lenght < 3){
    if (!threePics.includes(Pictures.allPictures[randomNumber(listLenght)])) {
      threePics.push(Pictures.allPictures[randomNumber(listLenght)]);
    }
  }
}
​
​
// ----------------------------------
​
// var container = document.getElementById('stores');
​
// function addElement(tag, dog , text) {
//  var element = document.createElement(tag);
//  dog.appendChild(element);
//  element.textContent = text;
//  return element;
// }
​
new Pictures('bag', './img/cruisin-goat.jpg');
new Pictures('banana', './img/banana.jpg');
new Pictures('bathroom', './img/bathroom.jpg');
new Pictures('boots', '.img/boots.jpg');
new Pictures('breakfast', '.img/breakfast.jpg');
new Pictures('bugglegum', '.img/bubblegum.jpg');
new Pictures('chair', 'img/chair.jpg');
new Pictures('cthulhu', 'img/cthulhu.jpg');
new Pictures('dog-duck', 'img/dog-duck.jpg');
new Pictures('dragon', 'img/dragon.jpg');
new Pictures('pen', 'img/pen.jpg');
new Pictures('pet-sweep', 'img/pet-sweep.jpg');
new Pictures('scissors.jpg', 'img/scissors.jpg');
new Pictures('shark', 'img/shark.jpg');
new Pictures('sweep', 'img/sweep.png');
new Pictures('tauntaun', 'img/tauntaun.jpg');
new Pictures('unicorn.jpg', 'img/unicorn.jpg');
new Pictures('usb', 'img/usb.jpg');
new Pictures('water-can', 'img/water-can.jpg');
new Pictures('wine-glass', 'img/wine-glass.jpg');
​
​
// var Images = function (name, imageSrc){
//  this.name = name;
//  this.url = imageSrc;
//  this.clicks = 0;
//  this.timesShown = 0;
//  Images.allImages.push();
// }
// Images.allImages = [];
// var totalClicks = 0;
// var surpriseImage = Images.allImages[Math.random()*Images.allImages];
​
​
chooseThree(Pictures.allPictures.length);
console.log('Pictures(): ', Pictures());
console.log('Pictures.allPictures: ', Pictures.allPictures);
console.log('chooseThree(): ', chooseThree());