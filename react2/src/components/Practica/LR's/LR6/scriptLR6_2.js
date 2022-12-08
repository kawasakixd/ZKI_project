

export const EX6_2_shif = () => {
let p2 = document.getElementById("field_ex6_2_p").value
let g = document.getElementById("field_ex6_2_g").value
let x = document.getElementById("field_ex6_2_x").value
let k = document.getElementById("field_ex6_2_k").value
let shifr = document.getElementById("message_ex6_2").value


if(isPrime(p2) && x < p2-1 && 1<x && k < p2-1 && 1 < k && shifr != 0 && !/[A-Za-zа-яА-Я]/.test(shifr)){
	while(g**(p2-1)%p2!=1){
		g++
	}
	let y = (g**x)%p2
	let a = (g**k)%p2
	let b = (y**k)*shifr%p2
	document.getElementById("shifr_message_ex6_2").value = `${a}, ${b}`

}else{
	let err2 = ""
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

export const EX6_2_raz = () =>{
	let p2 = document.getElementById("field_ex6_2_p").value
	let x = document.getElementById("field_ex6_2_x").value
	let	shifr = document.getElementById("shifr_message_ex6_2").value
	if(isPrime(p2) && x < p2-1 && 1<x && shifr != 0 && !/[A-Za-zа-яА-Я]/.test(shifr)){
		let arr = shifr.split(", ")
		let a = arr[0]
		let b = arr[1]
		let razshifr = (b*((a**(p2-1-x))))%p2
		console.log(`b = ${b}, a = ${a}, p2 = ${p2}, x = ${x}, shifr = ${shifr}`)
		document.getElementById("shifr_message_ex6_2").value = razshifr
	}else{
	let err2 = ""
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
