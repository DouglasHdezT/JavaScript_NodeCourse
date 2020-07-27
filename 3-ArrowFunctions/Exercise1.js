const persona = {
    name: "Nathaly",
    lastname:"Alvarenga",
    age: 23,
    gender: "Female" 
}

const fun = (person) =>{
    console.log(person.name);
    person.name = "Douglas"
    console.log(person.name);
    console.log(person.lastname);
    console.log(person.age);
    console.log(person.gender);
}

fun(persona);
console.log(persona);