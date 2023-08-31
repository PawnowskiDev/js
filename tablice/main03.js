// Napisz funkcję multiply(array). Funkcja ma przyjmować tylko jeden argument - tablicę. Następnie funkcja multiply ma pomnożyć wszystkie liczby znajdujące się w tablicy przy pomocy odpowiedniej metody tablicowej i zwrócić wynik.

function multiply(array) {

if (!Array.isArray(array)) {
    throw new Error("Podany argument nie jest tablicą.")
}

// wykorzystanie metody reduce do przemnożenia wszystkich elementów tablicy

var result = array.reduce(function (accumulator, currentValue) {
    return accumulator * currentValue;
}, 1)

return result;
}

// uzycie
var array1 = [2,3,4,5,6,7,8];
var multiplyResult = multiply(array1);
console.log("Wynik mnożenia: " + multiplyResult);