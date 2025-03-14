"use strict";
function delayedCall(anotherFn) {
    setTimeout(anotherFn, 1000);
}
function log() {
    console.log("Hey There");
}
delayedCall(log);
