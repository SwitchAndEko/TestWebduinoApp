var rgbled;


boardReady({device: '3JmP'}, function (board) {
  board.systemReset();
  board.samplingInterval = 250;
  rgbled = getRGBLed(board, 6, 8, 7);
  document.getElementById("btn1").addEventListener("click",function(){
    rgbled.setColor('#ff0000');
  });
  document.getElementById("btn2").addEventListener("click",function(){
    rgbled.setColor('#00ff00');
  });
  document.getElementById("btn3").addEventListener("click",function(){
    rgbled.setColor('#0000ff');
  });
  document.getElementById("btn4").addEventListener("click",function(){
    rgbled.setColor('#ffff00');
  });
  document.getElementById("btn5").addEventListener("click",function(){
    rgbled.setColor('#00ffff');
  });
  document.getElementById("btn6").addEventListener("click",function(){
    rgbled.setColor('#ff00ff');
  });
  document.getElementById("btn7").addEventListener("click",function(){
    rgbled.setColor('#000000');
  });
  document.getElementById("btn8").addEventListener("click",function(){
    rgbled.setColor('#ffffff');
  });
});
