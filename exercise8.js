function pasanganTerbesar(num) {
    // you can only write your code here!
    var strNum = String(num);
    var arrNum = [];
    for(var i = 0; i < strNum.length; i++){
        if(i == strNum.length - 1){
            break;
        } else{
            arrNum.push(strNum[i] + strNum[i + 1]);
        }
    }

    // console.log(arrNum)
    for( var i=0; i<arrNum.length; i++){
        for( var j=0; j<arrNum.length; j++){
            if(arrNum[i] > arrNum[j]){
                var temp = arrNum[i];
                arrNum[i] = arrNum[j];
                arrNum[j] = temp
            }
        }
    }return arrNum[0]
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99