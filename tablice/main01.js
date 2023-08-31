// Stwórz tablicę z listą swoich ulubionych owoców. Następnie:
// Wypisz pierwszy owoc w konsoli.
// Wypisz ostatni owoc w konsoli (skorzystaj z atrybutu length).
// W pętli wypisz wszystkie owoce (skorzystaj z atrybutu length).



// Tworzenie tablicy z ulubionymi owocami
var ulubioneOwoce = ["jabłko", "banan", "truskawka", "kiwi", "gruszka"];

// Wypisanie pierwszego owocu
console.log("Pierwszy owoc: " + ulubioneOwoce[0]);

// Wypisanie ostatniego owocu za pomocą atrybutu length
console.log("Ostatni owoc: " + ulubioneOwoce[ulubioneOwoce.length - 1]);

// Wypisanie wszystkich owoców za pomocą pętli
console.log("Wszystkie owoce:");
for (var i = 0; i < ulubioneOwoce.length; i++) {
    console.log(ulubioneOwoce[i]);
}
