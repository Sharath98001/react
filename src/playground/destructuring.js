// const person ={
//    // name:'Sharath',
//     age: 22,
//     location:{
//         city: 'Amangal',
//         temp: 92
//     }
// }

// const {name: firstname = 'Anonymous',age}= person
// console.log(`${firstname} is ${age}`)

// const {city,temp: temperature} = person.location

// if(city && temperature)
// console.log(`It's ${temperature} in ${city}`)

// const book = {
//     title: 'Ego is my enemy',
//     author: 'Ryan Holiday',
//     publisher:{
//       //  name:'Penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;

//     console.log(publisherName)

// const address = ['Venkateshwara Colony','Amangal','Telangana','509321']

// const [,city,state,] = address

// console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)','$2.00','$2.50','$2.75']

const [coffee,,medium] = item

console.log(`A Medium ${coffee} is ${medium}.`)

