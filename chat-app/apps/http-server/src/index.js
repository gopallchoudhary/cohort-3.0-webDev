"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.get("/chat", function (req, res) {
    res.send("This is chat room");
});
app.listen(3001, function () {
    console.log("app is running on port 3001");
});
