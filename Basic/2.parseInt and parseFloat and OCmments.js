

var n = "12.3";
var n2 = 5;

var add = n+n2;    //12.35 as string ,just pusk back n2  in n
console.log(add)   


var converted_n = parseFloat(n);
var add = converted_n + n2;       //17.3
console.log(add);


console.log(parseInt(n));