/* Jan 13, 2020 23:43 pm */
/* Eloquent JS */
/*Code for Excerises of Chapter 5*/

/* Flattening */
let flatten = (x) =>{
    return x.reduce((ans,elem)=>{return ans.concat(elem);},[]);
};
console.log(flatten([[1,2,3],[4,5,6],[7,8,9]]));

/*Your Own Loop */
let myfor = (val,test,update,body) => {
    for (let c=val;test(c);c=update(c))
	body(c);
};
myfor(0,x => {return x<=5;},x => {return x+1;},x => {console.log(x);});


/*Everything*/
let every = (arr,pred) =>{
    return arr.reduce((acc,elem)=>{return acc&&pred(elem);},true);
};
console.log(every([1,2,3],(x)=>{return x%2;}));
console.log(every([1,5,7],(x)=>{return x%2;}));

/*Dominant Writing Direction */
// Not included as dependent on the code of the book
