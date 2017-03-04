(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.virtualDOM = require('./index.js');
},{"./index.js":2}],2:[function(require,module,exports){
exports.createVtElement = require('./lib/element-format');

},{"./lib/element-format":3}],3:[function(require,module,exports){
function Element (tagName, props, children) {
    this.tagName = tagName;
    this.props = props;
    this.children = children;
}

Element.prototype.render = function() {
    var el = document.createElement(this.tagName);
    var props = this.props;

    for(var propName in props) {
        var propValue = props[propName];
        el.setAttribute(propName, propValue);
    }

    var children = this.children || [];
    children.forEach( function(child, index) {
        var childEl = (child instanceof Element)
                        ? child.render()
                        : document.createTextNode(child);
        el.appendChild(childEl); 
    });

    return el;
}

module.exports = function(tagName, props, children) {
    return new Element(tagName, props, children);
}
},{}]},{},[1]);
