//1
function myfun(userinputobj)
{
    let defaultobj = 
    {
        "courseName" : "ES6",
        "courseDuration" : "3days",
        "courseOwner" : "Javascript"
    }
    let returnedobj = Object.assign({} , defaultobj , userinputobj);
    let inputkeys = Object.keys(userinputobj);
    let defaultkeys = Object.keys(defaultobj);
    if (!(inputkeys.every(element => defaultkeys.includes(element)))) {
        throw new Error("wrong input.............");
    }
    return returnedobj;
}
console.log(myfun({"courseName" : "C#" , "courseDuration" : "6Days" }));
//console.log(myfun({"courseName" : "C#" , "courseDuration" : "6Days"  , "stdname" : "esraa"}));

//4
//without the generator..
let myobj = {
    "name" : "esraa",
    "age" : "23",
    "email" : "es@email.com",
    [Symbol.iterator] : function(){
        let keys = Object.keys(this);
        let index = 0;
        return{
            next :() => {
                if(index < keys.length){
                    return {value : [keys[index] , this[keys[index++]]] , done : false };
                }
                else 
                {
                    return {value : undefined , done : true };
                }
            }
        }        
    }
}

for(let i of myobj)
{
    console.log(i)
}
//with the generator...
let myobjGen = {
    "name" : "esraa",
    "age" : "23",
    "email" : "es@email.com",
    [Symbol.iterator] : function * (){
        let keys = Object.keys(this);     
            for( key of  keys)
            {
                yield this[key];
            } 
    }
}

for(let i of myobjGen)
{
    console.log(i)
}

//3
let obj3 = {
    [Symbol.replace] : function(str){
        if(str.length < 15)
            return str;
        else 
            return str.substring(0 , 15) + "...";
    }
}
let str = "hello my name is esraa and i am a free soul";

//2.1
function * mygenerator(num)
{
    let current  = 0 ;
    let next = 1; 
    yield current ;
    yield next ; 
    while((num - 2) )   //-2 because of the 2 yields before the loop
    {
        yield sum = current + next;
        current = next ;
        next = sum
        num--;
    }
}
let fibi = mygenerator(4);
// 2.2
function * mygenerator2(num)
{
    let current  = 0 ;
    let next = 1; 
    yield current ;
    yield next ; 
    let sum = 0;
    while(sum <= num)
    {
        yield sum = current + next;
        current = next ;
        next = sum
        num--;
    }
}

let maxfib  = mygenerator2(10);
