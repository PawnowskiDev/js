// Napisz funkcję getEvenAverage, która ma przyjmować tylko jeden argument - tablicę. Funkcja ta ma zwracać średnią wartość parzystych liczb z tej tablicy, zaokrągloną do trzech miejsc po przecinku.
// Dla uproszczenia można założyć, że tablica ma w sobie tylko liczby.
// Jeśli w tablicy nie ma parzystych liczb niech zwraca null.


function getEvenAverage(array) {
    if (!Array.isArray(array)) {
        throw new Error("Podany argument nie jest tablicą.");
    }

    var evenNumbers = array.filter(function (number) {
        return number % 2 === 0;
    });

    if (evenNumbers.length === 0) {
        return null;
    }

    var sum = evenNumbers.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    var average = sum / evenNumbers.length;
    return parseFloat(average.toFixed(3));
}

// Przykład użycia
var liczby = [1, 2, 3, 4, 5, 6];
var srednia = getEvenAverage(liczby);
if (srednia === null) {
    console.log("Brak parzystych liczb.");
} else {
    console.log("Średnia parzystych liczb: " + srednia);
}
