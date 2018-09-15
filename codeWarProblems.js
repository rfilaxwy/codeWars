```// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot seperating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// Patrick Feeney => P.F```

//1
function initials(name){
    const nameSplit =name.split(' ');
    let initials = names.map(name=>{
        return name[0]})
    return initials.join('.');
}

// 2
// Write function makeUpperCase.
function makeUpperCase(thing){
    let word = thing.split('');
    let toUpper = word.map(letter=> {return letter.toUpperCase()})
   return toUpper.join('');
}

//3
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// addLength('apple ban') => ["apple 5", "ban 3"]
// addLength('you will win') => ["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

function addLength(string){
    let init = string.split(' ');
    let numbers = init.map(number=>{return number.length})
    let ret=[];
   for(let i=0;i<init.length;i++){
        ret.push(init[i]+' '+numbers[i])
   } 
   return ret.join(' ')
}

//4
// Who likes keywords? Nobody likes keywords, so why use them?
//
// You know what keyword I use too much? if! We should make a function called _if, with its arguments as a logical test and two functions/lambdas where the first function is executed if the boolean is true, and the second if it's false, like an if/else statement, so that we don't have to mess around with those nasty keywords! Even so, It should support truthy/falsy types just like the keyword.

function _if(boo, cb1,cb2){
    if(boo){
       return cb1
    } else if(!boo){
        return cb2
    }
}
//5
// Prolog:
//
// This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!
//
// Task:
//
// Write function typeValidation that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.
function typeValidation(variable, type){
    let boo =typeof variable;
   let ret = boo===type ? true:false
   return ret;
}
//6
// #Triple Trouble
//
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!
//
// Ex) Input: "aa", "bb" , "cc" => Output: "abcabc"
//
// Note: You can expect all of the inputs to be the same length.
function tripCombine(str1,str2,str3){
    let combined=[];
    for(let i=0;i<str1.length;i++){
        combined.push(str1[i]+str2[i]+str3[i])
    }
    return combined.join('')
}