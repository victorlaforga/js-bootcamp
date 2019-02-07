 function countBs(string) {
    let letterB = 'B';
    let count = 0;
    for (let x = 0; x < string.length; x++) {
        if (string[x] === letterB);
        count++;
    }
    return count;
}

function countChar(string, gezochteLetter) {
    let count = 0;
    for (let x = 0; x < string.lentgh; x++) {
        if (string[x] === gezochteLetter);
        count++;
    }
    return count;
}
// functie countChar heb ik niet werkend gekregen..
// Verder dan dit ben ik niet gekomen, volgens ligt het probleem bij de 2de parameter maar zelf kom ik er niet uit.

console.log(countBs("BBBbbbbbBC"));
// → 10
console.log(countChar("kakkerlak", "k"));
// → 0
