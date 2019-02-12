let arrays = [[1, 2, 3], [4, 5], [6]];
var nieuweArray = arrays.reduce(function (a, b) {
    return a.concat(b);
});


console.log(nieuweArray);
// → [1, 2, 3, 4, 5, 6]
