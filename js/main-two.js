var pics=document.getElementById("pics");
var n=1
setInterval(function(){
	if(n>11) n=1
	pics.innerHTML="<img src='img/two("+n+").jpg' />";
	n++;
},3000);