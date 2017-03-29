var canvas1 =  document.getElementById('button1');
var canvas2 =  document.getElementById('button2');
var canvas3 =  document.getElementById('button3');
var canvas4 =  document.getElementById('button4');
var canvas5 =  document.getElementById('button5');
var w1 = canvas1.width;
var h1 = canvas1.height;
var w2 = canvas2.width;
var h2 = canvas2.height;
var w3 = canvas3.width;
var h3 = canvas3.height;
var w4 = canvas4.width;
var h4 = canvas4.height;
var w5 = canvas5.width;
var h5 = canvas5.height;
var pen1 = canvas1.getContext('2d');
var pen2 = canvas2.getContext('2d');
var pen3 = canvas3.getContext('2d');
var pen4 = canvas4.getContext('2d');
var pen5 = canvas5.getContext('2d');

//播放
pen3.beginPath();
pen3.lineWidth = 1;
pen3.fillStyle = 'white'
pen3.strokeStyle = 'white';
pen3.moveTo(0,50);
pen3.lineTo(45,25);
pen3.lineTo(0,0);
// pen3.lineTo(0,50);
pen3.closePath();
pen3.fill();
pen3.stroke();

//上一首
//竖线
pen1.beginPath();
pen1.lineWidth = 5;
pen1.fillStyle = 'white'
pen1.strokeStyle = 'white';
pen1.moveTo(0,0);
pen1.lineTo(0,26);
pen1.closePath();
pen1.fill();
pen1.stroke();

//左三角
pen1.beginPath();
pen1.lineWidth = 1;
pen1.fillStyle = 'white'
pen1.strokeStyle = 'white';
pen1.moveTo(0,13);
pen1.lineTo(26,26);
pen1.lineTo(26,0);
pen1.lineTo(0,13);
pen1.closePath();
pen1.fill();
pen1.stroke();

//下一首
//竖线
pen5.beginPath();
pen5.lineWidth = 5;
pen5.fillStyle = 'white'
pen5.strokeStyle = 'white';
pen5.moveTo(26,0);
pen5.lineTo(26,26);
pen5.closePath();
pen5.fill();
pen5.stroke();

//右三角
pen5.beginPath();
pen5.lineWidth = 1;
pen5.fillStyle = 'white'
pen5.strokeStyle = 'white';
pen5.moveTo(26,13);
pen5.lineTo(0,26);
pen5.lineTo(0,0);
pen5.lineTo(26,13);
pen5.closePath();
pen5.fill();
pen5.stroke();

//增音量
lineJoin = 'round';
pen2.lineWidth = 5;
pen2.fillStyle = 'white'
pen2.strokeStyle = 'white';
pen2.beginPath();
pen2.moveTo(0,13);
pen2.lineTo(26,13);
pen2.closePath();
pen2.fill();
pen2.stroke();

pen2.beginPath();
pen2.moveTo(13,0);
pen2.lineTo(13,26);
pen2.closePath();
pen2.fill();
pen2.stroke();


//减音量
pen4.beginPath();
pen4.lineWidth = 5;
pen4.fillStyle = 'white'
pen4.strokeStyle = 'white';
pen4.moveTo(0,13);
pen4.lineTo(26,13);
pen4.closePath();
pen4.fill();
pen4.stroke();


