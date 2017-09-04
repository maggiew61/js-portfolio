var slideIndex = 1; //default: 1st picture
showDivs(slideIndex);

function plusDivs(n) {  //question what happens when user clicks on right 2nd time
  showDivs(slideIndex += n);
}


function showDivs(n) {  //n=slideIndex
  var i;  //correct
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
	  slideIndex = 1
  }
  if (n < 1) {
	  slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

//default 1= only satisfies #81 condition;
//when press again, slideIndex +=2, n=2, satisfieds 81, shows page 2
//when press again, slideIndex +=3, n=3, satisfieds 81, shows page 2;
//press again(left 1st time), n=0; satisfies #75slideIndex=x.length=4
/* and go to #81 x[4-1]....-->displays page 4*/
