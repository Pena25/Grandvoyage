var endTime;
setDateString();
function setDateString(){
 var now = new Date();

 var year=now.getFullYear();
 var month=now.getMonth() + 1;
 var day=now.getDate();
 var hour=now.getHours();

 if ((hour % 6) === 0){
  hour += 6;
 } else {
   if ( hour < 5){
    hour =6;
   } else if(hour > 6 && hour < 12){
    hour =12;
   } else if(hour > 12 && hour < 18){
    hour =18;
   }else if(hour > 18 && hour < 24){
    hour =24;
   }
 }
 endTime = year + "/" + month + "/" + day + " " + hour + ":00:00";
}
console.log(endTime);

function CountdownTimer(elm,tl,mes){
 this.initialize.apply(this,arguments);
}
(function setHours(){

})
CountdownTimer.prototype={
 initialize:function(elm,tl,mes) {
  this.elem = document.getElementById(elm);
  this.tl = tl;
  this.mes = mes;
 },countDown:function(){
  var timer='';
  var today=new Date();
  //var day=Math.floor((this.tl-today)/(24*60*60*1000));
  var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
  var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
  var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
  var me=this;

  if( ( this.tl - today ) > 0 ){
   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">ЧАСОВ</div><span class="number hour">'+hour+'</span></span>';
   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">МИНУТ</div><span class="number min">'+this.addZero(min)+'</span></span><span class="number-wrapper"><div class="line"></div><div class="caption">СЕКУНД</div><span class="number sec">'+this.addZero(sec)+'</span></span>';
   this.elem.innerHTML = timer;
   tid = setTimeout( function(){me.countDown();},10 );
  }else{
   this.elem.innerHTML = this.mes;
   return;
  }
 },addZero:function(num){ return ('0'+num).slice(-2); }
}
function CDT(){

 // Set countdown limit
 var tl = new Date(endTime);

 // You can add time's up message here
 var timer = new CountdownTimer('CDT',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>');
 timer.countDown();
}
window.onload=function(){
 CDT();
}
