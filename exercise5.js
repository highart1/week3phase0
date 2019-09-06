function angkaPalindrome(num) {
    function palindrome(num){
        var num1 = String(num).split('').reverse().join('');
        return Number(num1) === num;
    } if (palindrome(num)){
        num ++;
    } while (!palindrome(num)){
        num ++;
    }
    return num;
}   



console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001