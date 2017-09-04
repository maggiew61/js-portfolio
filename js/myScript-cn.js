
//DEFAULT: DISPLAY PRODUCTS=======================
let product=[
	{
		imgsrc:"img/accessory1.jpg",
		name:"Maggie Wang",
		price:5500,
		catalog:1,
		viewcount:25000
	},
	{
		imgsrc:"img/accessory2.jpg",
		name:"Elisa Wang",
		price:3500,
		catalog:1,
		viewcount:15000
	},
	{
		imgsrc:"img/dress1.jpg",
		name:"River Island",
		price:1500,
		catalog:2,
		viewcount:45000
	},
	{
		imgsrc:"img/dress2.jpg",
		name:"Fall Wonder",
		price:2000,
		catalog:2,
		viewcount:45000
	},
];
let result = product
let accessory = ''

let str = ''
let str2= ''
for(i=0; i<product.length;i++) {
	if (i === 4) {break;}
	str += "<td><div><img src='"+ product[i].imgsrc+"'/>"+ "<p>"+product[i].name+"</p>"+
	"<p>"+"瀏覽人數"+product[i].viewcount+"</p>"+"<p>"+"NT$" + product[i].price+"</p>"+ "</div>"+"</td>";
	document.getElementById('sortTable1').innerHTML=str;
}

function setDefault(){
	document.getElementById('numbers').textContent="總共: ( "+result.length+" ) 件商品";
}
setDefault()

function hideDiv(){
	document.getElementById('discount').style.display="none"
}
// function listPic1(){
// let img = new Image();  //因為image是一個物件 所以要寫new Image
// img.src = product[0].imgsrc;
// document.getElementById("sortTable1").prepend(img);
// }
// listPic1();

//SORT CATEGORY(ACCESSORY/DRESS)===========================================================
function sortDress(){
	result = product  //每次sort之前資料還原: product的資料重新蓋在result上面; 這樣result就有最原始的product的資料
	let x = document.querySelector('input[value="Dress"]').checked;  //added later
	let y=document.querySelector('input[value="Accessory"]').checked;  //added
	if(x ===true){
		x = 2
	} else {
		x = 0
	}

	if(y ===true){
		y=1
	} else {
		y = 0
	}
	result = product.filter(function (data, key) {  //date是我自己命名的, 用在底下; 過濾的方法就是這樣, data就是拿product的資料, 讓他在這function裡面做處理
		console.log(data.catalog +":"+ x + "--" + y)
		if (x !== 0 && y !== 0) {
			console.log('both clicked')
			return data.catalog === x && data.catalog === y
		} else if (x === 0 && y === 0) {
				console.log('both unclicked')
				return data.catalog === x && data.catalog === y
		}else {
			console.log('else')
			return data.catalog === x || data.catalog === y  //如果data.catalog===1 就return回去-->回傳給result的意思
		}
	})

	console.log("data.catalog" + result.length)
	let str = ''
	if(result.length===0) {
		document.getElementById('sortTable1').innerHTML='';
	} 	if(result.length===0 && x===0 && y ===0) {
		result=product
		for(i=0; i<result.length;i++) {
			str += "<td><div><img src='"+ result[i].imgsrc+"'/>"+ "<p>"+result[i].name+"</p>"+
			"<p>"+"瀏覽人數"+result[i].viewcount+"</p>"+"<p>"+"NT$" + result[i].price+"</p>"+ "</div>"+"</td>";
			document.getElementById('sortTable1').innerHTML=str;
		}

	}
	else {
		for(i=0; i<result.length;i++) {
			str += "<td><div><img src='"+ result[i].imgsrc+"'/>"+ "<p>"+result[i].name+"</p>"+
			"<p>"+"瀏覽人數"+result[i].viewcount+"</p>"+"<p>"+"NT$" + result[i].price+"</p>"+ "</div>"+"</td>";
			document.getElementById('sortTable1').innerHTML=str;
		}
	}
	document.getElementById('numbers').textContent="總共: ( "+result.length+" ) 件商品";
}


// SORT BY ORDER(HIGH TO LOW/LOW TO HIGH PRICE)=========================================
function sortFunctH(){
	result.sort(function(a,b){return b.price - a.price});  //question  result? result being called global?
	let str = ''
	for(i=0; i<result.length;i++) {
		str += "<td><div><img src='"+ result[i].imgsrc+"'/>"+ "<p>"+result[i].name+"</p>"+
		"<p>"+"瀏覽人數"+result[i].viewcount+"</p>"+"<p>"+"NT$" + result[i].price+"</p>"+ "</div>"+"</td>";
		document.getElementById('sortTable1').innerHTML=str;
	}
	let x=document.querySelector('input[value="Dress"]').checked;
	let y=document.querySelector('input[value="Accessory"]').checked;
	if(x===true || y===true){  //question I don't even understand why this worked @@
		let str = ''
		for(i=0; i<result.length;i++) {
			str += "<td><div><img src='"+ result[i].imgsrc+"'/>"+ "<p>"+result[i].name+"</p>"+
			"<p>"+"瀏覽人數"+result[i].viewcount+"</p>"+"<p>"+"NT$" + result[i].price+"</p>"+ "</div>"+"</td>";
		document.getElementById('sortTable1').innerHTML=str;
		}
	}
}



function sortFunctL(){
// sortAccessory()
result.sort(function(a,b){return a.price - b.price});
let str = ''
for(i=0; i<result.length;i++) {
	str += "<td><div><img src='"+ result[i].imgsrc+"'/>"+ "<p>"+result[i].name+"</p>"+
	"<p>"+"瀏覽人數"+result[i].viewcount+"</p>"+"<p>"+"NT$" + result[i].price+"</p>"+ "</div>"+"</td>";
	document.getElementById('sortTable1').innerHTML=str;
}
let x=document.querySelector('input[value="Dress"]').checked;  //added later
let y=document.querySelector('input[value="Accessory"]').checked;  //added later
if(x===true || y===true){
let str = ''
for(i=0; i<result.length;i++) {
	str += "<td><div><img src='"+ result[i].imgsrc+"'/>"+ "<p>"+result[i].name+"</p>"+
	"<p>"+"瀏覽人數"+result[i].viewcount+"</p>"+"<p>"+"NT$" + result[i].price+"</p>"+ "</div>"+"</td>";
document.getElementById('sortTable1').innerHTML=str;
}}
}
