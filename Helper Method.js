// ---------- forEach ----------
// forEach : method calls a function once for each element in an array
// syntax  : array.forEach(function(item,index,arr){},thisvalue)
// Exmaples :
var numbers = [1,2,3,4,5,6];
var numbersM2 = numbers.forEach(function(item){console.log(item*2)}); // resulat => 2,4,6,8,10,12 

// ---------- map ----------
// map  : method creates  a new array with the results of calling a function for every array element
// note : this method does not change the original array  
// syntax : arry.map(function(item,index,arr){},thisValue)
// Exmaples :
var numbers2 = [7,8,9];
console.log(numbers2.map(el=>el*2)); // resulat => [14,16,18]
console.log(numbers2); // resulat => [7,8,9]

// ---------- filter ----------
// filter : method creates an array filled with all array elements that pass a test 
// note : filter does not change the original array 
// syntax : array.filter(function(item,index,array){},thisvalue)
// Exmaples :
var numbers3 = [1,2,3]
evens = numbers3.filter(function(nbr){return nbr%2===0})
console.log(evens); // resulat => [2]
// Exmaples2 :
const words = ["spray","limit","elite","exuberant","destruction","present"]
const result = words.filter(word=>word.length>5)
console.log(result); // resulat => ["exuberant","destruction","present"]
// Exmaples2 :
const fruits = ["appel","banana","grapes","mango","orange"]

function FilterItems(arr,query){
   return  arr.filter(function(it){
    return it.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
}
console.log(FilterItems(fruits,"an")) // resulat =>["banana","mango","orange"]
console.log(FilterItems(fruits,"ap")) // resulat =>["appel","grapes"]
