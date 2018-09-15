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
function addLength(string){
    let init = string.split(' ');
    let numbers = init.map(number=>{return number.length})
    let ret=[];
   for(let i=0;i<init.length;i++){
        ret.push(init[i]+' '+numbers[i])
   } 
   return ret.join(' ')
}