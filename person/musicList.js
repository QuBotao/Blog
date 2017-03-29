var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');
var button5 = document.getElementById('button5');
var e = new Audio('./laojie.mp3');
var curMusicIndex = 0;
var playList = ['./laojie.mp3','./lizhi.mp3','./2.mp3'];

button1.addEventListener('click',function(){
	e.src = playList[--curMusicIndex];
    e.play();
},false);

button2.addEventListener('click',function () {
	e.volume += 0.1;
},false);

button3.addEventListener('click',function(){
	e.play();
},false);

button4.addEventListener('click',function(){
	e.volume -= 0.1;
},false);

button5.addEventListener('click' , function () {    
    e.src = playList[++curMusicIndex];
    e.play();
},false);

