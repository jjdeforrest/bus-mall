'use strict';

var imageSectionElem = document.getElementById('three-container');
var image1 = document.getElementById('pic1');
var image2 = document.getElementById('pic2');
var image3 = document.getElementById('pic3');
var image1name = document.getElementById('pic1-name');
var image2name = document.getElementById('pic2-name');
var image3name = document.getElementById('pic3-name');
var sixPics = []; // stores 3 random pics from function "chooseThree"

// Global Random Function
// Will give me num from 0 to num-1
function randomNumber(num) {
  var randNum = Math.floor(Math.random() * (num)); // Math.random() * (20 - 0 + 1)
  return Math.floor(randNum);
}

// Create CONSTRUCTOR
var Pictures = function (name, urlSource) {
  this.name = name;
  this.url = urlSource;
  this.clicks = 0;
  Pictures.allPictures.push(this);
  this.timeShown = 0;
};

Pictures.allPictures = []; //save all img into a list


function chooseThree(numLength) {
  while (sixPics.length < 6) {
    var randomIndex = randomNumber(numLength);
    // console.log(randomIndex);
    // var randomItem = Pictures.allPictures[randomIndex];
    if (sixPics.includes(randomIndex) === false) {
      sixPics.push(randomIndex);
      // console.log(randomItem);
    }
  }
  // console.log(sixPics);
  return sixPics;
}

var renderingPictures = function () {
  // console.log('renderingpictures');
  // console.log('sixPics[0][url]:', sixPics[0][url])
  image1.src = Pictures.allPictures[sixPics[0]].url;
  image2.src = Pictures.allPictures[sixPics[1]].url;
  image3.src = Pictures.allPictures[sixPics[2]].url;
  image1name.textContent = Pictures.allPictures[sixPics[0]].name;
  image2name.textContent = Pictures.allPictures[sixPics[1]].name;
  image3name.textContent = Pictures.allPictures[sixPics[2]].name;
  Pictures.allPictures[sixPics[0]].timeShown++;
  Pictures.allPictures[sixPics[1]].timeShown++;
  Pictures.allPictures[sixPics[2]].timeShown++;
  // console.table(Pictures.allPictures);
  // image1.alt = sixPics[0].name;
  // image2.alt = sixPics[1].name;
  // image3.alt = sixPics[2].name;
};

new Pictures('bag', '../img/assets/bag.jpg');
new Pictures('banana', '../img/assets/banana.jpg');
new Pictures('bathroom', '../img/assets/bathroom.jpg');
new Pictures('boots', '../img/assets/boots.jpg');
new Pictures('breakfast', '../img/assets/breakfast.jpg');
new Pictures('bugglegum', '../img/assets/bubblegum.jpg');
new Pictures('chair', '../img/assets/chair.jpg');
new Pictures('cthulhu', '../img/assets/cthulhu.jpg');
new Pictures('dog-duck', '../img/assets/dog-duck.jpg');
new Pictures('dragon', '../img/assets/dragon.jpg');
new Pictures('pen', '../img/assets/pen.jpg');
new Pictures('pet-sweep', '../img/assets/pet-sweep.jpg');
new Pictures('scissors.jpg', '../img/assets/scissors.jpg');
new Pictures('shark', '../img/assets/shark.jpg');
new Pictures('sweep', '../img/assets/sweep.png');
new Pictures('tauntaun', '../img/assets/tauntaun.jpg');
new Pictures('unicorn.jpg', '../img/assets/unicorn.jpg');
new Pictures('usb', '../img/assets/usb.gif');
new Pictures('water-can', '../img/assets/water-can.jpg');
new Pictures('wine-glass', '../img/assets/wine-glass.jpg');
// console.log(Pictures.allPictures);
function changePictures() {
  for (var i = 0; i < 3; i++) {
    sixPics.shift();
  }
  // console.log(sixPics);
  chooseThree(Pictures.allPictures.length);
  renderingPictures();
  // console.log(sixPics);
}


chooseThree(Pictures.allPictures.length);
// console.log('Pictures(): ', Pictures());
// console.log('Pictures.allPictures: ', Pictures.allPictures);
// console.log('chooseThree(Pictures.allPictures.length): ', chooseThree(Pictures.allPictures.length));
renderingPictures();

// ********Event Handler***********


var count = 0;

function clickedItem(event) {


  if (event.target.id === 'pic1') {
    Pictures.allPictures[sixPics[0]].clicks++;
    count++;
  }
  else if (event.target.id === 'pic2') {
    Pictures.allPictures[sixPics[1]].clicks++;
    count++;
  }
  else if (event.target.id === 'pic3') {
    Pictures.allPictures[sixPics[2]].clicks++;
    count++;
  }
  changePictures();

  // count--;
  console.log(count);
  if (count === 25) {
    console.log("stop");
    imageSectionElem.removeEventListener('click', clickedItem);
    makeChart();
  }
}
// console.log('this.timeShown', this.timeShown);



imageSectionElem.addEventListener('click', clickedItem);


function makeChart(){

  var namesArray = [];
  var likesArray =[];
  var timesShown = [];
  for(var i = 0; i < Pictures.allPictures.length; i++){
    var singlepictureName = Pictures.allPictures[i].name;
    namesArray.push(singlepictureName);
  }

  for(var i = 0; i < Pictures.allPictures.length; i++){
    var likes = Pictures.allPictures[i].clicks;
    likesArray.push(likes);
  }

  for(var i = 0; i < Pictures.allPictures.length; i++){
    var views = Pictures.allPictures[i].timeShown;
    timesShown.push(views);
  }

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
  // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: namesArray,
      datasets: [{
        label: 'likes',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: likesArray
      },
      {
        label: 'timesShown',
        backgroundColor: 'rgb(0, 0, 255)',
        borderColor: 'rgb(0, 0, 255)',
        data: timesShown
      }]
    },

    // Configuration options go here
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

