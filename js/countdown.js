function calcTime(n){
	let now=new Date()
	let diff=n.getTime()-now.getTime()
	let sec=Math.floor(diff/1000%60)
	let min=Math.floor(diff/1000/60)%60
	let hr=Math.floor(diff/1000/60/60)%24

	let remain=[hr,min,sec]
	return remain
}

let future=new Date()
future.setHours(23)
future.setMinutes(59)
future.setSeconds(59)
console.log(future.setHours(23))
console.log(future.setMinutes(59))
console.log(future)

function reCala(){
let counter = calcTime(future) //in order to send the argument, you call the function; var count[days, hours, min, sec]
document.getElementById('countdown').textContent=counter[0]+" hours "+counter[1]+" mins "+counter[2]+" secs "
refresh()
}

function refresh(){
setTimeout(reCala,1000)
}
reCala();
