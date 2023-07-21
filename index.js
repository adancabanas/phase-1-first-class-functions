function Spy() {}

function receivesAFunction(Spy) {
    return Spy();
}

function returnsANamedFunction() {
    return function named() {};
}

function returnsAnAnonymousFunction() {
    return (() => 0);
}