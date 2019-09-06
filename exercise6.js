function palindrome(kata){
    var container = '';
    for(var i = kata.length-1; i>=0; i--){
        container+=kata[i];
    }

    if(container == kata){
        return true;
    }else{
        return false;
    }
}
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
