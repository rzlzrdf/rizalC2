function checkTypeNumber(giveNumber){
    /*tulis kode logic disini
    1. Buat 2 var untuk menyimpan string ganjil dan genap
    2. buat pengondisian untuk mengecek apakah parameter 'giveNumber'merupakan bilangan bulat
    3. buat pengondiian bersarang di pengondisian sebelumnya untuk mengecek bilangan tsb ganjil/genap menggunakan '%' atau sisa bagi hasil
    4. apabila % 2 == 0 maka return genap, maka selain itu return ganjil.
    */
    var gan = 'Ganjil';
    var gen = 'Genap';
    if(Number.isInteger(giveNumber)) {
       if (giveNumber % 2 == 0) {
           return gen;
       } else {
           return gan;
       }
    }
    
}

//EXCPECTED RESULT
// Ketika function tersebut dipanggil

console.log(checkTypeNumber(10)); // Genap
console.log(checkTypeNumber(3)); // Ganjil
console.log(checkTypeNumber("3")); // Eror Invalid Data Type
console.log(checkTypeNumber({})); // Eror Invalid Data Type
console.log(checkTypeNumber([]));// Eror Invalid Data Type
console.log(checkTypeNumber());
