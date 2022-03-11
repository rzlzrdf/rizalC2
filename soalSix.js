function getAngkaTerbesarKedua(num) {
    //tulis disini
    const arrNum = num.sort(function(a, b){
        return b-a;
    });
    return arrNum[1];
}

//EXPECTED RESULT
// Ketika function tsb dipanggil

const dataAngka = [9,4,7,7,4,3,2,2,8];


console.log(getAngkaTerbesarKedua(dataAngka));//8
//console.log(getAngkaTerbesarKedua(0));//Eror Jelasin
//console.log(getAngkaTerbesarKedua());//Eror Jelasin