// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a, b){
    if (a > b)  {
        return a;
    } else {
        return b;
    }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
    if (a > b && a > c); {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else  {
        return c;
    }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")   {
        return true;
    } else {
        return false;
    }
}

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    var y = "";
    for (var i = 0; i < phrase.length; i++) {
        if (phrase[i] === "a" || phrase[i] === "e" || phrase[i] === "i" || phrase[i] === "o" || phrase[i] === "u" || phrase[i] === " ")  {
        y += phrase[i];
        } else  {
            y += phrase[i] + "o" + phrase[i];
        }
    }
    return y;
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    var y = "";
    for (var i = string.length - 1; i >= 0; i--) {
        y += string[i];
    }
    return y;
}
