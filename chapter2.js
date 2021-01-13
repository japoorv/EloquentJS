/* Jan 13, 2020 8:45 am */
/* Eloquent JS */
/*Code for Excerises of Chapter 2*/

/* Triangle Looping */
let toPrint = "#";
for (let c=0;c<7;c+=1)
{
    console.log(toPrint);
    toPrint+="#";
}

/*FizzBuzz*/
for (let c=1;c<=100;c+=1)
{
    if (c%3==0&&c%5==0)
	console.log("FizzBuzz");
    else if (c%3==0)
	console.log("Fizz");
    else if (c%5==0)
	console.log("Buzz");
    else console.log(c);
    
}

/* Chessboard */
let size=8;
for (let c=0;c<size;c++)
{
    for (let c1=0;c1<size;c1++)
    {
	if ((c+c1)%2==0)
	    process.stdout.write(" ");
	else process.stdout.write("#");
    }
    process.stdout.write('\n');
}
