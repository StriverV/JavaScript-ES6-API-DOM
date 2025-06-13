
var me = ["Nosratee",5,"Jahan"];

var vai = "Abrar";
var sib = ["Nishatee",3,"Naba", vai];



var t = 'jn';
var frnd = ["xy", 7, "ab", t, {name:"jhon"},["ra","kr"]];

var frnd2 = 
[
    "xy", 7, "ab", t, {name:"jhon"},["ra","kr"]
];

console.log(frnd2);
console.log(frnd2.length);  // 6 size or 6 element
console.log(frnd2[0]);   //xy,  index starts from 0

// add->back
frnd2.push("Striver");
console.log(frnd2);

// remove->back
frnd2.pop();
console.log(frnd2);

// add->front
frnd2.unshift("striver");
console.log(frnd2);

// remove->front
frnd2.shift("striver");
console.log(frnd2);