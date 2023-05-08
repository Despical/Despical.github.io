var date1 = new Date(); // current date
var date2 = new Date("05/14/2023"); // mm/dd/yyyy format

function update() {
    var timeDiff = Math.abs(date2.getTime() - date1.getTime()); // in miliseconds

   var days = Math.floor(timeDiff / (24 * 3600000));
   var seconds = Math.floor(timeDiff / 1000);
   var minutes = Math.floor(timeDiff / 60);
   var hours = Math.floor(timeDiff / 60);

   seconds = seconds % 60;
   minutes = minutes % 60;
   hours = hours % 24;

   var test = days + " Gün, " + hours + " Saat, " + minutes + " Dakika, " + seconds + " Saniye";

   document.getElementById('date-time').innerHTML=test;
}

setInterval(update, 1000);
