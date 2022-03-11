function isValidPassword (password){
    const upper = [A-Z];
    const lower = [a-z];
    
}

//EXPECTED RESULTS

//keitka function tersebit dipanggil
console.log(isValidPassword('Meong2021'));
// EXPECTED OUTPUT => true
// (Karena memnuhi requirement, Meong2021 terdiri dari 8 huruf, ada huruf besar kecil dan angka)

console.log(isValidPassword('meong2021'));
//false karena tidak ada huruf besar

console.log(isValidPassword('@eong'));
// false karena tidak ada angka dan hanya 5 baris

console.log(isValidPassword('Meong2'));
//false karena hanya 6 huruf

console.log(isValidPassword(0));
//eror : teman teman jelasin ini eror nya apa dan kenapa

console.log(isValidPassword());
//eror : teman teman jelasin ini eror nya apa dan kenapa