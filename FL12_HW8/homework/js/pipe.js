function pipe() {
    let result = arguments[0];

    for (let i = 0; i < arguments.length; i++) {
        result = arguments[i];
    }
    return result;
}

function addOne(a) {
    return a + 1;
}

pipe(1, addOne);
pipe(1, addOne, addOne);
