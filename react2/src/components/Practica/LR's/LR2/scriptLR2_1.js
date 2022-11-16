export const f1 = () => {
    let shifruemoe = '';
    let zashifrValue = '';
    let arrN = [];

    getSize();

    function getSize() {
        let size = document.getElementById('basicValue').value.length
        if(size === 0){
            alert('ты даун')
        }
        else{
            let i = 0;
        for (i; i < 100; i++) {
            if (size <= i * i) {
                break;
            }
        }
        shifruemoe = document.getElementById('basicValue').value
        zashifrovanoe(shifruemoe, i);
        }
    }

    function zashifrovanoe(shifruemoe, n){
        let arr = [];
        let arrj = [];
        let k = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                arrj.push(shifruemoe[k])
                k++;
            }
            arr.push(arrj);
            arrj = [];
        }
        arrN = [];
        arrN.push(arr);
        const transpose = matrix => matrix[0].map((_, i) => matrix.map(row => row[i]));
        arr = transpose(arr);
        zashifrValue = arr.join('').replace(/,/gi, '');
        console.log('1.' + zashifrValue)
        let zashifrovan = document.getElementById('zashifrovan')
        zashifrovan.value = zashifrValue
    }
}
