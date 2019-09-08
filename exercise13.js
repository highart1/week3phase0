function targetTerdekat(arr) {
    // you can only write your code here
    var counter = 0;
    var isFind = false;
    var posO = '';
    var posX = [];
    var output = '';
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'o') {
            posO = i;
        }
    }
    // console.log(posO)

    for (var i = posO; i >= 0; i--) {
        if (arr[i - 1] == 'x') {
            counter++;
            isFind = true;
            posX.push(['posXLeft', counter]);
            break;
        } else {
            counter++;
        }
    }
    // console.log('LEFT : ', posX)

    counter = 0;
    for (var i = posO; i < arr.length; i++) {
        if (arr[i + 1] == 'x') {
            counter++;
            isFind = true;
            posX.push(['posXRight', counter]);
            break;
        } else {
            counter++;
        }
    }
    // console.log('RIGHT : ', posX)


    if (isFind == false) {
        return 0
    }

    if (posX.length == 1) {
        output = posX[0][1]
    } else if (posX[0][1] < posX[1][1]) {
        output = posX[0][1]
    } else if (posX[0][1] == posX[1][1]) {
        output = posX[0][1]
    } else {
        output = posX[1][1]
    }
    // console.log(posX)

    return output
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2