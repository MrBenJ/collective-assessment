export function flipArray(array) {
    // Write a function that reverses the order of all the
    // elements in an array

    return array.reverse();
}

export function getLargest(array) {
    // Write a function that returns the largest element
    // in an array. Assume smallest possible number is 0

    let largest = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}

export function getSmallest(array) {
    // Write a function that returns the smallest element
    // in an array. Assume largest possible number is 1000000
    let smallest = 1000000;
    for(let i = 0; i < array.length; i++) {
        if(array[i] < smallest) {
            smallest = array[i];
        }
    }
    return smallest;
}

export function findIndex(array, value) {
    // Write a function takes in an array and a value.
    // It should return the index of the value
    // If the value is not found, return -1

    return array.indexOf(value);
}

export function removeDuplicates(array) {
    // Write a function that removes all duplicate values in
    // an array

    let existing = [];
    for(let i = 0; i < array.length; i++) {
        if(!existing.includes(array[i])) {
            existing.push(array[i]);
        }
    }
    return existing;
}

export function callOnArray(array, callback) {
    // Write a function that runs `callback` on every member
    // on `array` and returns an `array` of the returned values

    return array.map(callback);
}

export function sumOfObjectValues(obj) {
    // Write a function that returns all the values of an object
    // added together. Assume all values are numbers and all numbers
    // are greater than or equal to 0.

    let sum = 0;
    for(let item in obj) {
        sum += obj[item];
    }
    return sum;
}

export function capitalize(string) {
    // Write a function that returns a string with the first letter
    // of the string capitalized.
    // If a value that isn't a string is passed in, return null

    if(typeof string[0] !== 'string') {
        return null;
    }

    let split = string.split('');
    split[0] = split[0].toUpperCase();
    return split.join('');
}
