// Przetestuj działanie setTimeout i setInterval.
// Uruchom interwał, który co 10s będzie wyświetlał napis "Wygenerowano z setInterval" w konsoli. A także timer,
// który po 4s wypisze w konsoli: "JavaScript Rules".

const interval = setInterval(function () {
    console.log('Wygenerowano z setInterval');
}, 1000 * 10);

const timeout = setTimeout(function () {
    console.log('JavaScript Rules');
}, 4000 * 4);