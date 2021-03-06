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
//7
//Given a non-negative integer n, write a function toBinary/ToBinary which returns that number in a binary format.
//NOT CORRECT
function toBinary(n){
    let start = n;
    let bin=[]
    while(start>0){
        if(start%2===0){
            bin.push(0)
            start=Math.floor(start/2)
        } else{
            bin.push(1)
            start=Math.floor(start/2)
        }  
    }
    return bin.join('')
}

//8
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
function idea(x){
    let good =0
   
    for(let i=0;i<x.length;i++){
        if(x[i]==='good'){
            good+=1;
        }
        
    }
    let publish= good===0 ?'fail':good>2?'I smell a series!':'Publish';
    return publish
}

//9
// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.
function summer(arr1,arr2){
    let sum = arr1.reduce((acc,cur)=>acc+cur)+arr2.reduce((acc,cur)=>acc+cur);
    return sum
}

//10
// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
//
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].
function famAge(arr){
    let oldest=0;
    let youngest=arr[0];
    let retArr=[]
    let diff;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>oldest){
            oldest=arr[i];
        }else if(arr[i]<youngest){
            youngest=arr[i]
        }
    }
    diff=oldest-youngest;
    retArr.push(youngest,oldest,diff)
    return retArr;
}

//11
// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.

// Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.
function doomsDayClock(arr){
    let agesMul =arr.map(age=>{
        return age*age;
    }).reduce((acc,cur)=>acc+cur);
    agesMul= Math.floor(Math.sqrt(agesMul)/2);
    return agesMul
}
//12
// Time to test your basic knowledge in functions! Return the odds from a list:
//
// odds([1,2,3,4,5]) #=> [1,3,5]
function oddGetter(arr){
    return arr.filter(x=>{return x%2!==0})
}
//13
// You are given an initial 2-value array (x). You will use this to calculate a score.
//
// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.
//
// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.
//
// For example:
//
// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
function score(arr){
    let score
    if(typeof arr[0] === typeof arr[1] && typeof arr[0]=='number'){
        score = arr[0]+arr[1];
    } else if(typeof arr[0]===typeof arr[1]){
        score = 'void'
    } else if(typeof arr[0]=='number'){
        score=arr[0]
    }else{
        score=arr[1]
    }
    return score;
}

//14
// My friend wants a new band name for her band. She like bands that use the formula: 'The' + a noun with first letter capitalized.
//
// dolphin -> The Dolphin
//
// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word like so (WITHOUT a 'The' in front):
//
// alaska -> Alaskalaska
//
// europe -> Europeurope
//
// Can you write a function that takes in a noun as a string, and returns her preferred band name written as a string?
function bandName(str){
    let bandName 
    let bandstart =str[0].toUpperCase()+str.slice(1);
    if(str[0]===str[str.length-1]){
        bandName= bandstart+str;
    } else{
        bandName = `The ${bandstart}`;
    }
    return bandName;
}


//15
// In this programming exercise, you're going to learn about functions, boolean (true/false) values, strings, and the if-statement.
//
// A function is a block of code that takes an input and produces an output. In this example, boolean_to_string is a function whose input is either true or false, and whose output is the string representation of the input, either "true" or "false".
//
// A common idea we often want to represent in code is the concept of true and false. A variable that can either be true or false is called a boolean variable. In this example, the input to boolean_to_string (represented by the variable b) is a boolean.
//
// Lastly, when we want to take one action if a boolean is true, and another if it is false, we use an if-statement.
//
// For this kata, don't worry about edge cases like where unexpected input is passed to the function. You'll get to worry about these enough in later exercises.
function boolToString(b){
    return b ? 'true':'false';

}


///////////////////////////////////////////////////////
//16
// Write function avg which calculates average of numbers in given list.
function avg(arr){
    return arr.reduce((acc,cur)=>acc+cur);
}
//18
// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).
//
// if bmi <= 18.5 return "Underweight"
//
// if bmi <= 25.0 return "Normal"
//
// if bmi <= 30.0 return "Overweight"
//
// if bmi > 30 return "Obese"
function bmi(weight,height){
    let bmi =weight/(height^2);
    let outtie 
    if(bmi <=18.5){
        return 'Underweight';
    }else if(bmi<=25){
        return 'Normal';

    } else if(bmi<=30){
            return 'Overweight';
    }else if( bmi>30){
            return 'Obese';
    } else{
        return 'Wrong inputs';
    }            
}

//19
// Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.

// A few cases:


// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true
function is_divide_by(nu1,nu2,nu3){
    if(nu1%nu2==0&&nu1%nu3==0){
        return true;
    } else{
        return false;
    }
}

//20
// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears or human_years years ago.

// Return their respective ages now as [humanYears,catYears,dogYears] or [human_years,cat_years,dog_years]

// NOTES:

// humanYears >= 1
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
function dogCat(hyears){
    let catYears=0;
    let dogYears=0;
    for(let i=0;i<hyears;i++){
        if(i==1){
            catYears+=15
            dogYears+=15
        }else if(i==2){
            catYears+=9;
            dogYears+=9
        } else{
            catYears+=4;
            dogYears+=5;
        }
    }
    return [hyears,catYears,dogYears]
}




//26
// An AI has infected a text with a character!!
//
// This text is now fully mutated to this character.
//
// If the text or the character are empty, return an empty string.
// There never will be a case when both are empty as nothing is going on!!
//
// The character is a string. It will always be of length 1 if it's not empty.
//
// Example:
//
// before = "abc"
// character = "z"
// after = "zzz"

function infect(x,y){
    let ret=[];
    if(!x||!y){
        return ''
    }else{
        for(let i =0; i<y.length;i++){
            ret.push(x)
        }
    }
    return ret.join('')
}