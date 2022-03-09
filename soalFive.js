function getSplitName(personName){
    //tulis kode disini
}

//EXPECTED RESULT
//KETIKa function tersebtu dipanggil

console.log(getSplitName("Aldi Daniela Pranata")); //First Name : Aldi, Mid Name: Daniela. Lastname ; Pranata
console.log(getSplitName("Dwi Kuncoro"));//First Name : Aldi, Mid Name: Daniela.
console.log(getSplitName("Dwi Kuncoro"));//First Name : Aldi
console.log(getSplitName("Aurora")); //First Name : Aurora, Mid Name: null. Lastname ; null
console.log(getSplitName("Aurora Aureliya Sukma Darma")); //First Name : Aldi, Mid Name: Daniela. Lastname ; Pranata
console.log(getSplitName(0)); //eror