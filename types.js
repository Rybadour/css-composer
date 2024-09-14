"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStyleBlock = void 0;
function isStyleBlock(style) {
    return style.hasOwnProperty('openingLine');
}
exports.isStyleBlock = isStyleBlock;
