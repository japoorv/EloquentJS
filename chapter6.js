class Vector
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
    }
    plus(V1)
    {
        return new Vector(this.x+V1.x,this.y+V1.y);
    }    
    minus(V1)
    {
        return new Vector(this.x-V1.x,this.y-V1.y);
    }
    get length()
    {
        return Math.sqrt(this.x*this.x+this.y*this.y);
    }
};

class Group
{
    constructor()
    {
        this.container={};
    }
    add(val)
    {
        this.container[val]='1';
    }
    delete(val)
    {
        delete this.container[val];
    }
    has(val)
    {
        return this.container[val]==='1'
    }
    static from(arg)
    {
        let reval=new Group();
        let cur=arg.next();
        while(cur.done!=true)
            {
                reval.add(cur.value);
                cur=arg.next();
            }
            return reval;
        }
};
class GroupIterator
{
    constructor(g1)
    {
        this.i=0;
        this.group=g1;
    }
    next()
    {
       if (this.i==Object.keys(this.group.container).length)
            return {done:true};
        this.i=this.i+1;
        return {value:Object.keys(this.group.container)[this.i-1],done:false};
    }
};
Group.prototype[Symbol.iterator]=function(){return new GroupIterator(this);};

let g1=new Group();
g1.add(1);
g1.add(2);