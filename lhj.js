window.onload=function(){
  function runSlots(){
   var x,y,z;
   x=Math.floor(Math.random()*(3))+1;
   y=Math.floor(Math.random()*(3))+1;
   z=Math.floor(Math.random()*(3))+1;

   var images=["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg"]

  a=document.getElementsByClassName("lucky");
  a[0].innerHTML='<img src="' +images[x-1]+ '"></img>';
  a[1].innerHTML='<img src="' +images[y-1]+ '"></img>';
  a[2].innerHTML='<img src="' +images[z-1]+ '"></img>';

   if(x==y&&y==z){
     document.getElementById("mp").innerHTML="友谊地久天长！";
   }
   else{
     document.getElementById("mp").innerHTML="三个数字是:"+'\n'+[x,y,z]+"    "+"好运马上就来咯，请再试一次吧！";
   }
  }

  var x=document.getElementById("mybutton");
  x.onclick=function(){runSlots()};
  }