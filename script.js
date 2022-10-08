let laptops = [
    {
        id: 1,
        brand: 'Samsung',
        proc: 'Core-i5',
        asccesM: 8,
        color: 'Gray',
        screen: 'FullHD',
        price: 1000
    },
    {
        id: 2,
        brand: 'Acer',
        proc: 'Core-i9',
        asccesM: 16,
        color: 'Black',
        screen: 'HD',
        price: 500
    },
    {
        id: 3,
        brand: 'Apple',
        proc: 'M1 Ultra',
        asccesM: 16,
        color: 'Gray',
        screen: 'Retina',
        price: 1000
    },
    {
        id: 4,
        brand: 'asus',
        proc: 'Core-i7',
        asccesM: 16,
        color: 'Blue',
        screen: 'FullHD',
        price: 1000
    },
    {
        id: 5,
        brand: 'Lenovo',
        proc: 'AMD Ryzen-5',
        asccesM: 32,
        color: 'black',
        screen: '2K',
        price: 1000
    },
    {
        id: 6,
        brand: 'Samsung',
        proc: 'Core-i5',
        asccesM: 16,
        color: 'Gray',
        screen: 'HD',
        price: 1000
    },
    {
        id: 7,
        brand: 'Acer',
        proc: 'Core-i9',
        asccesM: 24,
        color: 'Black',
        screen: 'HD',
        price: 500
    },
    {
        id: 8,
        brand: 'Apple',
        proc: 'M1 MAX',
        asccesM: 16,
        color: 'Midnight Blue',
        screen: 'Retina 4K',
        price: 1000
    },
    {
        id: 9,
        brand: 'Asus',
        proc: 'Core-i7',
        asccesM: 16,
        color: 'Pink',
        screen: 'fhd',
        price: 1000
    },
    {
        id: 10,
        brand: 'Lenovo',
        proc: 'Core-i7',
        asccesM: 32,
        color: 'Red',
        screen: 'FullHD',
        price: 1000
    }
]

let procent = 12 
for(let item of laptops){
   let maxxx = item.price - (procent * item.price / 100)
   


   console.log(maxxx);    
}


