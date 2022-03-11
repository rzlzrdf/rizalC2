function getSplitName(personName){
    /*tulis kode disini

    dekalrasikan array baru dengan isi parameter function dengan method .split() ber itarotr ' '(spasi)
    buat 4 pengondisian apbila panjang array tiga maka isi fn, mn, ln tanpa null
    sedangkan apabila panjang array 2 maka isi fn dan ln
    dan apabila satu isi fn saja
    apabila tidak ada yg sesuai maka return erorr 
    */
    const arrNama = personName.split(' ');
    if (arrNama.length == 3) {
        const person = { firstName : arrNama[0], middleName : arrNama[1], lastName : arrNama[2] }
        return person; 
    } 
    else if(arrNama.length == 2) {
        const person = { firstName : arrNama[0], middleName : null, lastName : arrNama[1] }
        return person;
    }
    else if(arrNama.length == 1) {
        const person = { firstName : arrNama[0], middleName : null, lastName : null }
        return person;
    }
    else{
        return 'Error : this function is only for 3 character name only';
    }


    
}

//EXPECTED RESULT
//KETIKa function tersebtu dipanggil

console.log(getSplitName("Aldi Daniela Pranat")); //First Name : Aldi, Mid Name: Daniela. Lastname ; Pranata
console.log(getSplitName("Dwi Kuncoro"));//First Name : Aldi, Mid Name: Daniela.
console.log(getSplitName("Aurora")); //First Name : Aurora, Mid Name: null. Lastname ; null
console.log(getSplitName("Aurora Aureliya Sukma Darma")); //First Name : Aldi, Mid Name: Daniela. Lastname ; Pranata
//console.log(getSplitName(0)); //eror