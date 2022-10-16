let f1 = () => {
    let inputValueDeCoder3_1 = document.getElementById('decoder3_1')
    let inputValueCoder3_1 = document.getElementById('coder3_1')
    let genBtn3_1 = document.getElementById('genericButton3_1') 
    let key = document.getElementById('Key')
    let mas = [], array = [], pass3

    for (let i = 1072; i <= 1103; i++) {
        mas.push(String.fromCharCode(i))
        if (i == 1077) {
            mas.push("ё")
        }
    }
    function coder3(length, key, long = 32) {
        for (let i = 0; i < length; i++) {
            if (mas.indexOf(inputValueDeCoder3_1.value[i]) == -1) {
                array.push(" ")
            } else if (mas.indexOf(inputValueDeCoder3_1.value[i]) + Number(key) > long) {
                array.push(mas[mas.indexOf(inputValueDeCoder3_1.value[i]) + Number(key) - long - 1])
            } else {
                array.push(mas[mas.indexOf(inputValueDeCoder3_1.value[i]) + Number(key)])
            }
        }
        pass3 = array.join("")
    }
    function decoder3(length, key, long = 32) {
        for (let i = 0; i < length; i++) {
            if (mas.indexOf(inputValueCoder3_1.value[i]) == -1) {
                array.push(" ")
            }
            else if (mas.indexOf(inputValueCoder3_1.value[i]) - Number(key) < 0) {
                array.push(mas[long - (Number(key) - mas.indexOf(inputValueCoder3_1.value[i])) + 1])
            }
            else {
                array.push(mas[mas.indexOf(inputValueCoder3_1.value[i]) - Number(key)])
            }
        }
        pass3 = array.join("")
    }
    function output3(massage, way) {
        way.value = massage
    }
    inputValueDeCoder3_1.onclick = function () {
        genBtn3_1.value = "Encrypt"
        inputValueDeCoder3_1.placeholder = "Input the phrase"
        inputValueCoder3_1.placeholder = ""
    }
    inputValueCoder3_1.onclick = function () {
        genBtn3_1.value = "Decrypt"
        inputValueCoder3_1.placeholder = "Input the phrase"
        inputValueDeCoder3_1.placeholder = ""
    }
    genBtn3_1.onclick = function () {
        array = []
        pass3 = ""
        if (genBtn3_1.value == "Encrypt") {
            inputValueDeCoder3_1.placeholder = "Input the phrase"
            inputValueCoder3_1.placeholder = ""
            coder3(inputValueDeCoder3_1.value.length, key.value)
            output3(pass3, inputValueCoder3_1)
            genBtn3_1.value = "Decrypt"
        } else if (genBtn3_1.value == "Decrypt") {
            inputValueCoder3_1.placeholder = "Input the phrase"
            inputValueDeCoder3_1.placeholder = ""
            decoder3(inputValueCoder3_1.value.length, key.value)
            output3(pass3, inputValueDeCoder3_1)
            genBtn3_1.value = "Encrypt"
        }
    }
}
f1();
