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

function countNumbers(str) {
	let counts = makeNumber(str);
	let result = {};
	for (var i = 0; i < counts.length; i++) {
        if (counts[i] in result) {

            result[counts[i]] += 1;

        } else {
            
            result[counts[i]] = 1
        }
	}
	return result;
}

countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers('');