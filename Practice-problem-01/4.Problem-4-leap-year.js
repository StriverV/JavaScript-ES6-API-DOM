
function LeapYear_check(y)
{
    if(y % 400 == 0 || (y % 100 != 0  && y % 4 == 0))
        return "Leap Year";
    else
        return "Not Leap Year";
}

console.log(LeapYear_check(2025));
console.log(LeapYear_check(2027));
console.log(LeapYear_check(2028));