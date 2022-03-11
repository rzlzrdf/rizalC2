function checkEmail(email){
//Tulis kode logic disini
/*
buat pengondisian yang berparameter ketentuan emaul dalam bentuk regex yang bermethod .test()
jika true balikkan valid, jika false gunakan invalid
*/

//HINT => pake REGEX dan googling

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return 'valid';
    }
    else{
        return 'invalid';
    }
    
    
}

//EXCPECTED RESULT
// Ketika function tersebut dipanggil
console.log(checkEmail('apranta@binar.co.id')); // Valid
console.log(checkEmail('apranta@binar.com')); // Valid
console.log(checkEmail('apranta@binar')); // Ivnalid
console.log(checkEmail('apranta')); // Error : (Temen temen jelasin ini eror nya aopa dan kenaa)

//console.log(checkTypeNumber(checkEmail(3322))); // Error : (Temen temen jelasin ini eror nya aopa dan 
//console.log(checkEmail()); // Error : (Temen temen jelasin ini eror nya aopa dan 