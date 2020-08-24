var nameVar = 'Sharath'
var nameVar='Mike'

console.log('nameVar', nameVar)

let nameLet = 'Ajay'
nameLet='Vijay'
console.log('nameLet', nameLet)

const nameConst = 'Kaushik'
console.log('nameConst',nameConst)

//Block scoping

var name="Sharath Pulipati"
let firstname

if(name)
{
     firstname= name.split(' ')[0]
    console.log(firstname)
}

console.log(firstname)