/* Jan 13, 2020 9:38 am */
/* Eloquent JS */
/*Code for Excerises of Chapter 3*/

/* Minimum */
const calcMin = function (x,y)
{
    return (x<y?x:y);
};
console.log(calcMin(4,5));

/* Recursive Odd/Even */
const isEven = (x) => {
    if (Math.abs(x)==0)
	return true;
    else if (Math.abs(x)==1)
	return false;
    else return isEven(Math.abs(x)-2);
    
};
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-2));
console.log(isEven(-55));
/*Bean Counting */
const countChar = function (x,alpha='B')
{
    let retVal = 0;
    for (let c=0;c<x.length;c++)
    {
	if (x[c]===alpha)
	    retVal++;
    }
    return retVal;
};
console.log(countChar("BBJS"));
console.log(countChar("BBBJS","J"));
