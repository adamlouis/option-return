function f() {
    return 1;
}

function g() {
    option_return 1;
}

function h() {
    option_return Math.random() > 0.5;
}

function i() {
    option_return f();
    option_return g();
    option_return h();
}

function k(v) {
    option_return v > 5 ? 'apple' : 'pear';
}

console.log(f())
console.log(g())
console.log(h())
console.log(i())
console.log(k(4))
console.log(k(11))