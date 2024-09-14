"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.children = exports.breakAt = exports.flex = exports.compose = void 0;
var defaults_1 = require("./defaults");
var types_1 = require("./types");
function compose() {
    var styles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styles[_i] = arguments[_i];
    }
    return innerCompose(0, styles.flat());
}
exports.compose = compose;
function innerCompose(indent, styles) {
    var tabs = '\t'.repeat(indent);
    var cssCode = '';
    for (var _i = 0, styles_1 = styles; _i < styles_1.length; _i++) {
        var s = styles_1[_i];
        if (types_1.isStyleBlock(s)) {
            cssCode += tabs + s.openingLine + '\n';
            cssCode += innerCompose(indent + 1, s.styles);
            cssCode += tabs + '}\n';
        }
        else {
            cssCode += tabs + s + ';\n';
        }
    }
    return cssCode;
}
function flex(direction) {
    return ['display: flex', "flex-direction: " + direction];
}
exports.flex = flex;
function breakAt(size) {
    var styles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        styles[_i - 1] = arguments[_i];
    }
    return {
        openingLine: "@media screen only and (max-width: " + defaults_1.BREAKPOINT_MAP[size] + ") {",
        styles: styles.flat(),
    };
}
exports.breakAt = breakAt;
// Creates a CSS block matching child nodes
function children(directness) {
    var styles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        styles[_i - 1] = arguments[_i];
    }
    return {
        openingLine: ".foo " + (directness === 'direct' ? '>' : '') + " {",
        styles: styles.flat(),
    };
}
exports.children = children;
// This should be doable?
function rdsTyp(typography, size) {
    return [
        "font-size: 12px",
        "font-weight: 500",
    ];
}
//tw(breakAt("sm", rdsTyp("body", 12)))
// Consider doing it Runtime like StyledComponents
// Maybe some convenient way to do compile time manually?
