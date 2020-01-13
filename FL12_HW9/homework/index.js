function convert (...args) {

    const newArray = [];

    for (let i = 0; i < args.length; i++) {

        if (typeof args[i] === 'string') {
            newArray[i] = +args[i];
        } else if (typeof args[i] === 'number') {
            newArray[i] = args[i].toString();
        }
    }
    return newArray;
}

function executeforEach (array, callback) {
 
    for (let i = 0; i < array.length; i++) {

        callback(array[i]);
    }

}

function mapArray (array, callback) {
    
    const newArray = [];

    executeforEach(array, function(el){

    newArray[newArray.length] = callback(parseInt(el))
    });

    return newArray;
}

function filterArray (array, callback) {

    const newArray = [];

    executeforEach(array, function(el){

        if (callback(el)) { 

            newArray[newArray.length] = el;
        
        }
    });
    
    return newArray;
}

function flipOver(string) {

    let newArray = '';
    
    for (let i = string.length -1; i >= 0; i--) {
        newArray += string[i];
    }

    return newArray;
}

function makeListFromRange (args) {

    const newArray = [];

    for (let i = args[0]; i <= args[1]; i++) {
        newArray.push(i);
    }

    return newArray
}

function getArrayOfKeys (array, key) {

    const newArray = [];

    executeforEach(array, function(el) {
        newArray.push(el[key])
    });

    return newArray;
}

function substitute(array) {

    return mapArray(array, function(el) {
        if (el < 30) {
            return '*';
        } else {
            return el;
        }
    })

}

function getPastDay(date, value) {
    
    let valueMill = value * 24 * 60 * 60 * 1000;

    return new Date(date.getTime()- valueMill).getDate();

}

function formatDate (date) {

    return '' +
    date.getFullYear() + '/' +
    (date.getMonth() + 1) + '/' +
    date.getDate() + ' ' + 
    (date.getHours() < 10 ? '0' + date.getHours() : date.getHours() ) +':' + 
    date.getMinutes(); 
}

