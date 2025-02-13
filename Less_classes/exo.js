function collatzSequence(n) {
    let sequence = [];
    while (n !== 1) {
        sequence.push(n);
        if (n % 2 === 0) {
            n /= 2;
        } else {
            n = 3 * n + 1;
        }
    }
    sequence.push(1); // Ajouter le dernier élément 1
    console.log(sequence.join(" "));
}

