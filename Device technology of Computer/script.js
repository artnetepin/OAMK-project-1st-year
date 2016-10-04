function boom()
		{
			document.getElementsByClassName("boxcontent")[0].style.transform="translateY(0px)";
			document.getElementsByClassName("boxcontent")[0].style.opacity="1";
			document.getElementsByClassName("bigimage")[0].style.transform="translateY(0px)";
			var boxes = document.getElementsByClassName("box");
		}
		
		
		function toggleMenu(chengingelement, from, to){
			var elment = document.querySelector(chengingelement);
			if(elment.className== from)
			{
				elment.className=to;
			}
			else 
			{
				elment.className=from;
			}
		}
		
	window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("123").className = "upButton showUp";
    } else {
        document.getElementById("123").className = "upButton hideUp";
    }
}

var timeOut;
function scrollToTop() {
	if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
		window.scrollBy(0,-50);
		timeOut=setTimeout('scrollToTop()',10);
	}
	else clearTimeout(timeOut);
}

function animatedLoad(){
	document.getElementsByClassName("mainfx")[0].style.opacity="1";
}