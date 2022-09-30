let user = {
    name: "jon",
    surname:"vik",
    age:20,
    isMarried:false,

}

let passport ={
    serries: "AC",
    number: 2311412,
    date:27,
    location:{
        countion:"UZB",
        city:"Samarkand",
    }
}



let types = {
    number: [],
    string: [],
    boolean: [],
    object: []
}

let object_nan = Object.assign(user,passport)
let object_nan_1 = Object.values(object_nan)
let object_arr = Object.keys(object_nan)
let masiv = object_nan_1.concat(object_arr)

masiv.filter(item =>{
    if(typeof(item) === `string`){
        types.string.push(item)
    }else if(typeof(item) === `number`){
        types.number.push(item)
    }else if(typeof(item) === `boolean`){
        types.boolean.push(item)
    }else if(typeof(item) === `object`){
        types.object.push(item)
    }
})
console.log(types)



// ТЗ
// Соеденить два объекта в один 
// вытащить от туда все ключи в массив и сохранть в отдельной переменной  
// вытащить от туда все значения в массив и сохранть в отдельной переменной  
// Соеденить два массива в один целый 
// и отфильтровать их по типам данных элементов