let p2 //вводится
let g//вводится
let x //вводится
let shifr //вводится
let k //вводится

let za2 = document.getElementById("za2")
let raz2 = document.getElementById("raz2")
let err2 = ""

za2.onclick = function() {
p2 = document.getElementById("p2").value
g = document.getElementById("g2").value
x = document.getElementById("x2").value
k = document.getElementById("k2").value
shifr = document.getElementById("sob2").value


if(isPrime(p2) && x < p2-1 && 1<x && k < p2-1 && 1 < k && shifr != 0 && !/[A-Za-zа-яА-Я]/.test(shifr)){
	while(g**(p2-1)%p2!=1){//первообразная, но на эту функицию похуй
		g++
	}
	let y = (g**x)%p2
	let a = (g**k)%p2
	let b = (y**k)*shifr%p2
	document.getElementById("zor2").value = `${a}, ${b}`
	// console.log(a, " ", b)
	// let razshifr = (b*((a**(p2-1-x))))%p2
	// console.log(razshifr)
}else{
	err2 = ""
	if(!isPrime(p2)){
		err2 += "p не простое число\n"
	}
	if(x > p2-1 || 1>x){
		err2 += "не правильно указан х\n"
	}
	if(k > p2-1 || 1>k){
		err2 += "не правильно указан k\n"
	}
	if(shifr == 0 || /[A-Za-zа-яА-Я]/.test(shifr)){
		err2 += "вы ничего не написали в сообщении или сообщение содержит не правильные значения\n"
	}
	alert(err2)
	console.log("ТЫ БЕЗДАРЬ")
}
}
raz2.onclick = function(){
	p2 = document.getElementById("p2").value
	x = document.getElementById("x2").value
	shifr = document.getElementById("sob2").value
	if(isPrime(p2) && x < p2-1 && 1<x && shifr != 0 && !/[A-Za-zа-яА-Я]/.test(shifr)){
		let arr = shifr.split(", ")
		a = arr[0]
		b = arr[1]
		let razshifr = (b*((a**(p2-1-x))))%p2
		document.getElementById("zor2").value = razshifr
	}else{
	err2 = ""
	if(!isPrime(p2)){
		err2 += "p не простое число\n"
	}
	if(x > p2-1 || 1>x){
		err2 += "не правильно указан х\n"
	}
	if(shifr == 0 || /[A-Za-zа-яА-Я]/.test(shifr)){
		err2 += "вы ничего не написали в сообщении или сообщение содержит не правильные значения\n"
	}
	alert(err2)
	console.log("ТЫ БЕЗДАРЬ")
}
}






function isPrime(n) {
	if (n < 2) {
		return false;
	} else if (n === 2) {
		return true;
	}

	let i = 2;
	const limit = Math.sqrt(n);
	while (i <= limit) {
		if (n % i === 0) {
			return false;
		}
		i +=1;
	}

	return true;
}
