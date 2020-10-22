const biodata ={
                name: {
                    firstName: function(){
                        console.log("hello")
                    },
                    lastName: "risano",
                    emai: "muahmmadrisano@gmail.com"
                }
            } 
// const firstName = biodata.name.firstName
// const lastName = biodata.name.lastName

const {firstName:firstName2, lastName} = biodata.name
// console.log(firstName)
// console.log(lastName);

const UN = [100, 80, 60, 70]

// const mtk = UN[0]
// const bi = UN[1]
// const ipa = UN[2]
// const kej = UN[3]

const [mtk, ipa, bi] = UN

console.log('mtk adalah '+mtk);
console.log('bi adalah '+bi);
console.log('ipa adalah '+ipa);
// console.log('kej adalah '+kej);
// firstName2()

console.log(lastname);