(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _Counter = require("./modules/Counter");

var counter = new _Counter.Counter();
counter.subscribe(function (counter) {
  console.log('firstListener', counter);
});
counter.subscribe(function (counter) {
  console.log('second', counter);
});
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.decrement();
counter.decrement();

},{"./modules/Counter":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Counter = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Counter =
/*#__PURE__*/
function () {
  function Counter() {
    _classCallCheck(this, Counter);

    this.value = 0;
    this.listeners = [];
  }

  _createClass(Counter, [{
    key: "increment",
    value: function increment() {
      this.value = this.value + 1;
      this.trigger();
    }
  }, {
    key: "decrement",
    value: function decrement() {
      this.value = this.value - 1;
      this.trigger();
    }
  }, {
    key: "getCurrentCounter",
    value: function getCurrentCounter() {
      console.log(this.value);
      return this.value;
    }
  }, {
    key: "subscribe",
    value: function subscribe(listener) {
      this.listeners.push(listener);
    }
  }, {
    key: "trigger",
    value: function trigger() {
      var _this = this;

      this.listeners.forEach(function (listener) {
        listener(_this.value);
      });
    }
  }]);

  return Counter;
}();

exports.Counter = Counter;

},{}]},{},[1]);
