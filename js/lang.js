let x=document.querySelector('html').lang; //use queryselector(css selector) and assign lang value to x

var opt;
if(x==="zn"){
	opt=document.querySelector('option[value="index-cn.html"]'); //assign opt w/ the option[value="index2.html"] element
} else if(x==="en"){
	opt=document.querySelector('option[value="index.html"]');//assign opt w/ the option[value="en.html""] element
}
opt.selected=true; //再所選定的<option>中add "selected"property; selected is a boolean value;
//"true"will make it checked

function changeLang(){
	location.href=document.getElementById('formid').select.value
}
