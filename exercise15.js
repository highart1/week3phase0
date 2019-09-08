function groupAnimals(animals) {
    // you can only write your code here!
    animals.sort();
    var tampungBesar = [];
    var tampungKecil = [];
    for (var i = 0; i < animals.length; i++) {
        if (tampungKecil.length == 0) {
            tampungKecil.push(animals[i]);
        } else if (animals[i][0] == animals[i - 1][0]) {
            tampungKecil.push(animals[i]);
        } else if (animals[i][0] != animals[i - 1][0]) {
            tampungBesar.push(tampungKecil);
            tampungKecil = [];
            tampungKecil.push(animals[i]);
        }
    }
    tampungBesar.push(tampungKecil);
    return tampungBesar;
}




// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]