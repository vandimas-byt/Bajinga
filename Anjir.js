let nama = prompt("nama lau siape mpruy??")
let umur = prompt("umur lau berapa??")

switch(nama){
  case null:
    nama = "not defined!! refresh!!"
  default:
    nama = `${nama}`
}

switch(umur){
  case null:
    umur = "not defined!! refresh!!"
  default:
    umur = `${umur}`
}

document.getElementById("halah").textContent
= `namamu: ${nama}`;

document.getElementById("cielah").textContent
= `umur kamu: ${umur}`