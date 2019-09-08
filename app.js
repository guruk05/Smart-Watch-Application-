$(document).ready(function(){
    $('#iconPacks').hide();
    $('#message_body').hide();
    $('#music_body').hide();
    $('#timer_body').hide();
    $('#lockScreenId').show();
  });

  var slider = document.getElementById("myRange");
  slider.oninput = function() {
    if(this.value > 70) {
      $('#lockScreenId').hide();
      $('#iconPacks').show();
    }
  }

  function messageSel() {
    $('#iconPacks').hide();
    $('#music_body').hide();
    $('#timer_body').hide();
    $('#message_body').show();
  }

  function messageSel1() {
    document.getElementById('mesFrame').src += '';
    $('#iconPacks').hide();
    $('#music_body').hide();
    $('#timer_body').hide();
    $('#message_body').show();
  }

  function homeSel() {
    $('#lockScreenId').hide();
    $('#message_body').hide();
    $('#music_body').hide();
    $('#timer_body').hide();
    $('#iconPacks').show();
  }

  function musicSel() {
    $('#iconPacks').hide();
    $('#message_body').hide();
    $('#timer_body').hide();
    $('#music_body').show();
  }
  function musicSel1() {
    $('#iconPacks').hide();
    $('#message_body').hide();
    $('#timer_body').hide();
    $('#music_body').show();
  }

  function timeSel() {
    $('#iconPacks').hide();
    $('#message_body').hide();
    $('#music_body').hide();
    $('#timer_body').show();
  }
  function timeSel1() {
    $('#iconPacks').hide();
    $('#message_body').hide();
    $('#music_body').hide();
    $('#timer_body').show();
  }
  $(document).ready(function() {
    $('#MessBody').hide();
    $('#mes1').hide();
    $('#mes2').hide();
    $('#mes3').hide();
    $('#messTable').show();
 });

 function msg(data) {
    if(data === '1') {
       $('#messTable').hide();
       $('#mes2').hide();
       $('#mes3').hide();
       $('#MessBody').show();
       $('#mes1').show();
    } else if(data === '2') {
       $('#messTable').hide();
       $('#mes1').hide();
       $('#mes3').hide();
       $('#MessBody').show();
       $('#mes2').show();
    } else if(data === '3') {
       $('#messTable').hide();
       $('#mes1').hide();
       $('#mes2').hide();
       $('#MessBody').show();
       $('#mes3').show();
    }
 }
 var  start = document.getElementById('start'),
        stop = document.getElementById('stop'),
        clear = document.getElementById('clear'),
        lap = document.getElementById('lap'),
        seconds = 0, minutes = 0, hours = 0,
        t;
   
   function add() {
     seconds++;
     if (seconds >= 60) {
         seconds = 0;
         minutes++;
         if (minutes >= 60) {
             minutes = 0;
             hours++;
         }
     }
     
     document.getElementById('inputTime').innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
   
     timer();
   }
   function timer() {
     t = setTimeout(add, 1000);
   }
   
   
   
   start.onclick = timer;
   
   
   stop.onclick = function() {
     clearTimeout(t);
   }
   
   var click = 0;
   
   lap.onclick = function() {
     x = document.getElementById('inputTime').innerHTML;
     click++;
     document.getElementById('displayLap').innerHTML = "Lap " + click + " : " + x;
     console.log(x);    
   }
   
   
   clear.onclick = function() {
     click = 0;
     document.getElementById('inputTime').innerHTML = "00:00:00";
     document.getElementById('displayLap').innerHTML = null;
     seconds = 0; minutes = 0; hours = 0;
   }
