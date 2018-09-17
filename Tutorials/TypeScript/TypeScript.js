var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        name = name.trim();
        if (name.length == 0)
            throw Error("No name given, not a valid person");
        this.names = name.split(" ");
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this.names[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this.names[this.names.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "middleNames", {
        get: function () {
            var middleNames = "";
            if (this.names.length < 2)
                middleNames = null;
            else
                for (var i = 1; i < this.names.length - 1; i++) {
                    middleNames += this.names[i] + " ";
                }
            return middleNames.trim();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.names.join(' ');
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.toString = function () {
        return this.fullName;
    };
    return Person;
}());
function greeter(dude) {
    return ("Hello " + dude.firstName + " of the " + dude.lastName + " clan.");
}
// perform some tests here.
var didEmptyPersonThrowError;
try {
    var person = new Person("");
    didEmptyPersonThrowError = false;
}
catch (error) {
    didEmptyPersonThrowError = true;
}
if (!didEmptyPersonThrowError)
    throw new Error("Empty Person name should have thrown an error");
if (new Person("Madonna").firstName !== "Madonna")
    throw new Error("Madonna's firstname should be Madonna");
if (new Person("Kris Nye").firstName !== "Kris")
    throw new Error("Kris Nye's firstname should be Kris");
if (new Person("Orion Darwin Nye").lastName !== "Nye")
    throw new Error("Orion Nye's lastName should be Nye");
console.log(greeter(new Person("Madonna")));
console.log(JSON.stringify(new Person("Sadera Alexis Michelle Nye").middleNames));
