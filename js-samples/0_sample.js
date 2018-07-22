const assert = require('assert');

function f(x) {
    return x;
}

function g(x) {
    returnif x;
}

var EMPTY_OBJ = {};

assert.strictEqual(f(undefined), undefined)
assert.strictEqual(f(null), null)
assert.strictEqual(f(0), 0)
assert.strictEqual(f(2), 2)
assert.strictEqual(f(EMPTY_OBJ), EMPTY_OBJ)

assert.strictEqual(g(undefined), undefined)
assert.strictEqual(g(null), undefined)
assert.strictEqual(g(0), undefined)
assert.strictEqual(g(2), 2)
assert.strictEqual(g(EMPTY_OBJ), EMPTY_OBJ)

function validate(params) {
    // TODO -> returnif !params : { err: 'params is undefined' };
    if (!params) {
        return { err: 'params is undefined'}
    }
    
    // TODO -> returnif !params.firstName : { err: 'firstName is undefined' };
    if (!params.firstName) {
        return { err: 'firstName is undefined'}
    }

    // TODO -> returnif !params.lastName : { err: 'lastName is undefined' };
    if (!params.lastName) {
        return { err: 'lastName is undefined'}
    }

    return undefined;
}

function process(params) {
    returnif validate(params);
    return {
        fullName: params.firstName + ' ' + params.lastName
    };
}

var TEST_CASES = [
    {
        params: { firstName: 'alice', lastName: 'smith' },
        expectedResult: 'alice smith',
    },
    {
        params: { firstName: 'bob', lastName: 'johnson' },
        expectedResult: 'bob johnson',
    },
    {
        params: { firstName: undefined, lastName: 'johnson' },
        expectedResult: undefined,
    },
    {
        params: { firstName: 'bob', lastName: undefined },
        expectedResult: undefined,
    },
]
for (var testCase of TEST_CASES) {
    var result = process(testCase.params);
    console.log(result)
    assert.strictEqual(result.fullName, testCase.expectedResult);
}

var FRUITS = {
    apple: {
        color: 'red',
        price: 0.5,
    },
    watermelon: {
        color: 'green',
        price: 4,
    },
}

function buyFruit(name, account) {
    // TODO -> returnif !FRUITS[name] : undefined;
    returnif !FRUITS[name]

    account.balance -= FRUITS[name].price;
    console.log(`purchased ${FRUITS[name].color} ${name} for $${FRUITS[name].price}`)
}

var account = {
    balance: 10,
}
buyFruit('apple', account);
assert.strictEqual(account.balance, 9.50);
buyFruit('watermelon', account);
assert.strictEqual(account.balance, 5.50);
buyFruit('pear', account);
assert.strictEqual(account.balance, 5.50);

function fibonacci(num, results = {}) {
    returnif results[num];

    // TODO -> returnif (num <= 1) : 1;
    if (num <= 1) {
        return 1
    }

    return results[num] = (
        fibonacci(num - 1, results) +
        fibonacci(num - 2, results)
    );
}

assert.strictEqual(fibonacci(0), 1)
assert.strictEqual(fibonacci(1), 1)
assert.strictEqual(fibonacci(2), 2)
assert.strictEqual(fibonacci(3), 3)
assert.strictEqual(fibonacci(4), 5)
assert.strictEqual(fibonacci(5), 8)
assert.strictEqual(fibonacci(6), 13)
