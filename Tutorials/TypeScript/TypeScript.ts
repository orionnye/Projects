class Person {
    names : string[]
    constructor(public name: string){
        name = name.trim()
        if (name.length == 0)
           throw Error("No name given, not a valid person")
        this.names = name.split(" ")
    }
    get firstName(){
        return this.names[0]
    }
    get lastName(){
        return this.names[this.names.length - 1]
    }
    get middleNames(){
        let middleNames = "";
        if (this.names.length < 2)
            middleNames = null;
        else
            for (let i = 1; i < this.names.length - 1; i++){
                middleNames += this.names[i] + " ";
            }
        return middleNames.trim()     

    }
    get fullName(){
        return this.names.join(' ')
    }
    toString(){
        return this.fullName
    }
}
function greeter(dude : Person){
    return(`Hello ${dude.firstName} of the ${dude.lastName} clan.`)
}

// perform some tests here.
let didEmptyPersonThrowError
try {
    let person = new Person("")
    didEmptyPersonThrowError = false
} catch (error) {
    didEmptyPersonThrowError = true
}
if (!didEmptyPersonThrowError)
    throw new Error("Empty Person name should have thrown an error")


if (new Person("Madonna").firstName !== "Madonna")
    throw new Error("Madonna's firstname should be Madonna")
if (new Person("Kris Nye").firstName !== "Kris")
    throw new Error("Kris Nye's firstname should be Kris")
if (new Person("Orion Darwin Nye").lastName !== "Nye")
    throw new Error("Orion Nye's lastName should be Nye")


console.log(greeter(new Person("Madonna")))
console.log(JSON.stringify(new Person("Sadera Alexis Michelle Nye").middleNames))