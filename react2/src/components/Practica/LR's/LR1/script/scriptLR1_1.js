export let Strenth = () =>{

let s;

let S = document.getElementById('S')
let V = document.getElementById('V').value;
let P = document.getElementById('P').value;

let T_for_6 = 30
let T_for_7 = 3 * 7 * 24 * 60

if(document.getElementById('select').value == 6){
    s = (V * T_for_6) / P
}

if(document.getElementById('select').value == 7){
    s = (V * T_for_7) / P
}
S.value = s;

}


