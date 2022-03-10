function changeWord(selectedText, changedText, text) {
    /*tulis kode logic kamu didalam blok ini ya
    Kembalikan nilai parameter text dengan method replace yang berparameter selectedText dan changgedText
    */
   return text.replace(selectedText, changedText);
        
}

const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';

//EXPECTED RESULT
// Ketika funtion tersebut dipanggil dengan variabel kalimat 1
console.log(changeWord('mencintai', 'membenci', kalimat1));
//Maka output yang harus keluar adalah
// 'Andini sangat membenci kamu selamanya'

console.log(changeWord('bromo', 'semeru', kalimat2));
//Maka output yang harus keluar adalah
// 'Gunung semeru tak akan mampu menggambarkan besarnya cintaku padamu'
