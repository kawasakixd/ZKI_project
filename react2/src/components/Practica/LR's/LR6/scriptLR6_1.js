/* global BigInt */
export const EX6_1_shif = () => {
    let p = document.getElementById("field_ex6_1_p").value
    let q = document.getElementById("field_ex6_1_q").value
    let e = document.getElementById("field_ex6_1_e").value
    let sob1 = document.getElementById("message_ex6_1").value
    let n = q * p
    let m = (p - 1) * (q - 1)
    console.log(n)
    console.log(m)
    console.log(p)
    console.log(q)
    if (isPrime(p) && isPrime(q) && isPrime(e) && m % e != 0 && sob1.length != 0 && !/[A-Za-zа-яА-Я]/.test(sob1) && p * q >= sob1) {
        let d = Serch_d(e, m)
        console.log("d =", d)
        console.log("e =", e)

        let sob2 = powMod(sob1, e, n)
        document.getElementById("shifr_message_ex6_1").value = sob2
    } else {
        let err = ""
        if (!isPrime(p)) {
            err += "p не простое число\n"
        }
        if (!isPrime(q)) {
            err += "q не простое число\n"
        }
        if (!isPrime(e)) {
            err += "e не простое число\n"
        } else {
            if (m % e == 0) {
                err += "e целочисленно делится на m\n"
            }
        }
        if (sob1.length == 0) {
            err += "вы ничего не написали в сообщении или сообщение содержит не правильные значения\n"
        }
        alert(err)
        console.log("ТЫ БЕЗДАРЬ")
    }
}


export const EX6_1_raz = () => {
    let p = document.getElementById("field_ex6_1_p").value
    let q = document.getElementById("field_ex6_1_q").value
    let e = document.getElementById("field_ex6_1_e").value
    let sob1 = document.getElementById("message_ex6_1").value
    let n = q * p
    let m = (p - 1) * (q - 1)
    if (isPrime(p) && isPrime(q) && isPrime(e) && m % e != 0 && sob1.length != 0 && !/[A-Za-zа-яА-Я]/.test(sob1)) {
        let d = Serch_d(e, m)
        console.log("d =", d)
        console.log("e =", e)

        let sob2 = powMod(sob1, d, n)
        document.getElementById("shifr_message_ex6_1").value = sob2
        console.log("шифр ", Number(sob2))
        sob1 = powMod(sob2,d,n)
        console.log("разшифр ",Number(sob1))
    } else {
        let err = ""
        if (!isPrime(p)) {
            err += "p не простое число\n"
        }
        if (!isPrime(q)) {
            err += "q не простое число\n"
        }
        if (!isPrime(e)) {
            err += "e не простое число\n"
        } else {
            if (m % e == 0) {
                err += "e целочисленно делится на m\n"
            }
        }
        if (sob1.length == 0) {
            err += "вы ничего не написали в сообщении или сообщение содержит не правильные значения\n"
        }
        alert(err)
        console.log("ТЫ БЕЗДАРЬ")
    }
}


function powMod(n, p, m) {
    if (n < 1) { return 0; }
    if (m < 0) { m = 0; }
    p = Math.round(p);
    n = n % m;
    var r = 1;
    while (p >= 1) {
        if (p % 2) {
            r = (r * n) % m;
        }
        n = (n * n) % m;
        p = Math.floor(p / 2);
    }
    return r;
}
function Serch_d(a, m) {
    var oldR = BigInt(a);
    var r = BigInt(m);
    var oldS = BigInt(1);
    var s = BigInt(0);

    while (r > BigInt(0)) {

        var quot = oldR / r;

        var tempR = r;
        r = oldR - quot * r;
        oldR = tempR;

        var tempS = s;
        s = oldS - quot * s;
        oldS = tempS;
    }

    if (oldS < 0)
        oldS += BigInt(m);
    return Number(oldS);
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
        i += 1;
    }

    return true;
}