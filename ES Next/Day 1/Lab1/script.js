let x = 1 , y = 2;
let [num1 , num2] = [x,y];
[x , y] = [num2 , num1]

///////////////////////////////////////////////////////////
let minValue , maxValue;
function myfun(...arr)
{
    minValue = Math.min(...arr);
    maxValue = Math.max(...arr);
}

myfun(10,20,30,40,50,60);

//////////////////////////////////////////////////////////
var fruits = ["apple", "strawberry", "banana", "orange", 
"mango"];

var isString = fruits.every(function(value){
    return typeof value == 'string';
});

var startsWithA = fruits.some(function(value){
    return value.startsWith('a');
});

var newArr = fruits.filter(function(element){
    return (element.startsWith('s') || element.startsWith('b'));
})
var newArr2 = fruits.map(function(element , index){
    return `I like ${element} !`;
})

newArr2.forEach(function(item){
    console.log(item);
})
