function tentukanDeretGeometri(arr) {
    var selisihDeret = arr[1] / arr [0];
        booleanDeretGeometri = true;
    for( var i = 0; i < arr.length - 1; i++){
        var deretSementara = arr[i + 1] / arr[i];
        if(deretSementara != selisihDeret){
            booleanDeretGeometri = false
        }
    }
    return booleanDeretGeometri
  }
  
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false