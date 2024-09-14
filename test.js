"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var composers_1 = require("./composers");
console.log(composers_1.compose(composers_1.flex('column'), composers_1.breakAt('sm', composers_1.flex('row'))));
