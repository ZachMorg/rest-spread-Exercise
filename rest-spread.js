const filterOutOdds = (...arguments) => arguments.filter(val => val%2 === 0);

function findMin(...numbers){
    return Math.min(...numbers);
}

function mergeObjects(object1,object2){
    return ({...object1},{...object2});
}

function doubleAndReturnArgs(arr,...nums){
    return arr.push(...nums*2);
}

const removeRandom = (items) => {
    let index = Math.floor(Math.random()*items.length);
    return [...items.slice(0,index),...items.slice(index++)];
}

const extend = (array1,array2) => [...array1,...array2];

const addKeyVal = (object,key,value) => {
    return {...object, [key]: value};
}

const removeKey = (object,key) => {
    return {[key]: undefined, ...object};
}

const combine = (object1,object2) => {
    return {...object1,...object2};
}

const update = (object,key,value) => {
    return {...object, [key]: value};
}