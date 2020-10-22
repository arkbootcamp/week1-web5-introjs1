// if else
const nilai = 70
if(nilai< 50){
    console.log("Grade D")
}else if(nilai < 65){
    console.log("Grade C")
}else if(nilai < 80){
    console.log("Grade B")
}else{
    console.log("Grade A")
}

// switch case
const day = 10

switch (day) {
    case 'senin' :
        console.log('hari ini senin')
        break;
     case 'selasa':
        console.log('hari ini selasa')
        break;
    case 'rabu':
        console.log('hari ini rabu')
        break;
    case 'kamis':
        console.log('hari ini kamis')
        break;
    case 'jumat':
        console.log('hari ini jumat')
        break;
    case 'sabtu':
        console.log('hari ini sabtu')
        break;
    case 'minggu':
        console.log('hari ini minggu')
        break;
    default:
        console.log("anda salah memasukan hari")
        break;
}

// ternary operator
const nilai2 = 50

// nilai2 > 70  ? console.log("anda lulus"): console.log("ando tidak lulus")
let lulus = nilai2 > 70 ? "lulus": "tidak lulus"

console.log('ini hasilnya '+ lulus)


const value = "10000"

if(value === 10000){
    console.log("penulisan benar");
}else{
    console.log("penulisan salah");
}