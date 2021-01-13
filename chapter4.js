/* Jan 13, 2020 12:30 pm */
/* Eloquent JS */
/*Code for Excerises of Chapter 4*/

/* Sum of Range */
let range = function (i,j,s=1)
{
    let retVal=[];
    for (;(s>0&&i<=j)||(s<=0&&i>=j);i+=s)
	retVal.push(i);
    return retVal;
};
let sum = function (arr)
{
    let s=0;
    for (let c=0;c<arr.length;c++)
	s+=arr[c];
    return s;
};
console.log(sum(range(1,10)));
console.log(sum(range(1,10,2)));
console.log(sum(range(5,2,-1)));

/*Reversing The Array */
let reverseArray = function (arr)
{
    let retVal=[];
    for (let c=arr.length-1;c>=0;c--)
	retVal.push(arr[c]);
    return retVal;
};
function reverseArrayInPlace(arr) 
{
    for (let i=0,j=arr.length-1;i<j;i++,j--)
	[arr[i],arr[j]]=[arr[j],arr[i]];
}
let arr=[1,2,3];
console.log(reverseArray(arr));
console.log(reverseArrayInPlace(arr));
console.log(arr);

/*List*/
function arrayToList(arr)
{
    if (arr.length==0)
	return null;
    return {value:arr[0],rest:arrayToList(arr.slice(1))};
}
function listToArray(lst)
{
    let retArr=[];
    let next=lst;
    while(next!=null)
    {
	retArr.push(next.value);
	next=next.rest;
    }
    return retArr;
    
}
function prepend(elem,lst)
{
    return {value:elem,rest:lst};
}
function nth(lst,indi)
{
    if (lst==null)
	return null;
    if (indi==0)
	return lst.value;
    return nth(lst.rest,indi-1);
}

arr=[1,2,3,3,4];
console.log(arrayToList(arr));
console.log(listToArray(arrayToList(arr)));
console.log(listToArray(prepend(100,arrayToList(arr))));
console.log(nth(arrayToList(arr),3));
console.log(nth(arrayToList(arr),4));
console.log(nth(arrayToList(arr),100));

/*Deep Comparison */
function deepEqual(a,b)
{
    if (a===b)
	return true;
    ans=(typeof a !== "object" ? a === b : true);
    for (elem of Object.keys(a))
    {
	if (!(elem in b))
	    return false;
     else ans=ans&&deepEqual(a[elem],b[elem]);
    }
    return ans;
}

obj1={array:[1,2,3],add12:3,add23:5};
obj2={array:[1,2,3],add12:3,add23:5};
obj3={array:[1,2,3],add12:3,add23:7};
console.log(deepEqual(obj1,obj2));
console.log(deepEqual(obj1,obj3));
console.log(deepEqual(obj2,obj3));
console.log(deepEqual(1,1));
