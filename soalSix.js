function getAngkaTerbesarKedua(num) {
    //tulis disini 
    /*
    buat var untuk menyimpan parameter num yang diberikan method sort untuk mengurutkan isi array dari besar ke kecil
    gunakan perulangan untuk mengeceka apakah ada angka yg sama besar dengan angka terbesar di index selanjutnya
    jika arr[0] idak sama dengan arr[i] maka return arr[i]
    */
    const arrNum = num.sort((a, b)=>{return b-a});
        for (let i = 0; i < arrNum.length; i++) {
          if (arrNum[0]!=arrNum[i]) {
              return arrNum[i];
            } 
        }
    
}

//EXPECTED RESULT
// Ketika function tsb dipanggil

const dataAngka = [9,4,7,7,4,3,2,2,8];


console.log(getAngkaTerbesarKedua(dataAngka));//8
//console.log(getAngkaTerbesarKedua(0));//Eror Jelasin
//console.log(getAngkaTerbesarKedua());//Eror Jelasin