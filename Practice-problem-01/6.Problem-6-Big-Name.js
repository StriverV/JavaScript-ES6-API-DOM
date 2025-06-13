
const checkNames = (friends) =>
{

    let big = friends[0];
    for(let i = 1; i < friends.length; i++)
    {
        if(friends[i].length > big.length)   
            big = friends[i];
    }
    return big;
}

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"]; 

console.log(checkNames(friends));