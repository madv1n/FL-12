function makeNumber(str) {
    let result = [];
    let stringArray = str.split('');

    for (let i = 0; i < stringArray.length; i++) {

        if (!isNaN(+stringArray[i])) {
            result.push(stringArray[i]);
        }
     }
     return result.join('');
}

makeNumber('erer384jjjfd123');
makeNumber('123098h76gfdd');
makeNumber('ijifjgdj');