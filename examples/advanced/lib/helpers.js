'use strict';
var Handlebars = require('handlebars');

exports.yell = function (msg) {
    return msg.toUpperCase();
};

Handlebars.loadPartial = function (name) {
  var partial = Handlebars.partials[name];
  if (typeof partial === "string") {
    partial = Handlebars.compile(partial);
    Handlebars.partials[name] = partial;
  }
  return partial;
};

exports.block = function (name, options) {
    /* Look for partial by name. */
    var partial
      = Handlebars.loadPartial(name) || options.fn;
    return partial(this, { data : options.hash });
 };

exports.partial = function (name, options) {
    Handlebars.registerPartial(name, options.fn);
 };
