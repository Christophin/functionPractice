// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------

function largest(array)   {
    var bigNum = 0;
    for (var i = 0; i < array.length; i++)    {
        if (array[i] > bigNum) {
            bigNum = array[i];
        }
    }
    return bigNum;
}



// ---------------------------
// 2. Find longest string
// ---------------------------

function longest(array) {
    var bigString = "";
    for (var i = 0; i < array.length; i++)  {
        if (array[i].length > bigString.length) {
            bigString = array[i];
        }
    }
    return bigString;
}


// ---------------------------
// 3. Find even numbers
// ---------------------------

function even(array)    {
    var evenNums = "";
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNums += " " + array[i] + ",";
        }
    }
    return evenNums;
}


// ---------------------------
// 4. Find odd numbers
// ---------------------------

function odd(array) {
    var oddNums = "";
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            oddNums += " " + array[i] + ",";
        }
    }
    return oddNums;
}
// ---------------------------
// 5. Find words that contain `is`
// ---------------------------

function isFinder(array)  {
    var words = "";
    for (var i = 0; i < array.length; i++)  {
        var current = array[i];
        for (var j = 0; j < current.length; j++) {
            if (current[j] === "i" && current[j+1] === "s") {
                words += array[i] + ",";
            }
        }
    }
    return words;
}

// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

function joiner(a, b)   {
    return a.concat(b);
}


// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------

function javascriptTeachers(array)    {
    var list = [];
    for (var i = 0; i < array.length; i++)  {
        var current = array[i];
        if (current.teaches === "JavaScript") {
            list.push(current.firstname)
        }

    }
    return list.sort();
}