// let mahasiswa = {

//     nama : "wisnu",
//     umur : 21,
//     hobi : "Makan, Gaming"
// }
// console.log(JSON.stringify(mahasiswa));

let tes =  new XMLHttpRequest();

tes.onreadystatechange = function(){
    if(tes.readyState == 4 && tes.status == 200){
        let mahasiswa = this.responseText;
        console.log(mahasiswa);
    }
}
tes.open('GET', 'coba.json', true);