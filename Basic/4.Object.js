
// obj -> person
// properties -->hand,eye,hair

var person=
{
    hand:2,
    eye:2,
    hair:"don't know",
}

var person1=
{
    hand:2,
    eye:2,
    hair:"don't know",
    friends:6,

    father:
    {
        name:"abc",
        age:40
    },
}

console.log(person.hand);
console.log(person1.father);
console.log(person1.father.name);

// object key value