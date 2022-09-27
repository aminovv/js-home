
let carPrices = [120000, 16000, 30000, 8000, 6000, 9000, 45000, 35000, 70000]
  

let cheap = []

carPrices.filter(item => {
    if(item <= 35000){
        cheap.push(item)
    }
})
console.log(cheap)

let arr = ['Aleksey', 'Kartoshka', 'Margarita' , 'Morgenshtern', 'Monica']

let name = prompt(`какой имя удалить`)

let idx = arr.indexOf(name)




// if(idx !== -1){
//     arr.splice(idx, 1)
// }else{
//     alert(`error`)
// }
// console.log(arr)






arr.splice(name, 1)

if(name <= 4){
    console.log(arr)
}else if(name >= 5){

}




