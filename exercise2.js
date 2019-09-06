function balikKata(str){
    var reversStr = '';
    for(var i = str.length -1; i >= 0; i--){
    reversStr += str[i]
    }
    return reversStr;
}
console.log(balikKata('Hello world!'))