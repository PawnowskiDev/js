// Napisz funkcję sortArray, która ma przyjmować tylko jeden argument - tablicę zawierającą liczby całkowite. Funkcja ta ma zwracać posortowaną rosnąco tablicę. Możesz skorzystać z metod tablicowych.


function sortArray(array) {
    if (!Array.isArray(array)) {
        throw new Error("Podany argument nie jest tablicą.");
    }

    // Używamy metody sort do posortowania tablicy
    var sortedArray = array.slice().sort(function (a, b) {
        return a - b;
    });

    return sortedArray;
}

// Przykład użycia
var liczby = [4, 1, 8, 3, 10, 2];
var posortowanaTablica = sortArray(liczby);
console.log("Posortowana tablica:", posortowanaTablica);

