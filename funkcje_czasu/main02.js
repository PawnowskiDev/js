// Napisz funkcję countHello(), która jako parametr przyjmie liczbę całkowitą od 1 do 10. W funkcji uruchom funkcję setInterval.
// Jego zadaniem będzie wypisywanie na konsoli tekstu "Hello" oraz licznika, zliczającego, który raz już został uruchomiony setInterval.
// Jeśli licznik osiągnie wartość podaną do funkcji jako parametr, powinien zostać usunięty setInterval.

function countHello(targetCount) {
    let counter = 0;  // Inicjalizacja licznika

    const intervalId = setInterval(() => {
        counter++;  // Zwiększ licznik przy każdym wywołaniu
        console.log(`Hello ${counter}`);

        if (counter === targetCount) {
            clearInterval(intervalId);  // Zatrzymaj setInterval, gdy licznik osiągnie wartość docelową
        }
    }, 1000 * 5);  // Wywołuj co 1000 ms (1 sekunda)
}

const targetCount = 5;  // Wartość docelowa licznika
countHello(targetCount);  // Wywołaj funkcję z podaną wartością docelową
