// Copyright (C) 1998-2000 Greg J. Badros
// Use of this source code is governed by http://www.apache.org/licenses/LICENSE-2.0
//
// Parts Copyright (C) 2011, Alex Russell (slightlyoff@chromium.org)

(function(c) {
"use strict";

c.Point = c.inherit({
  initialize: function(x, y, suffix) {
    if (x instanceof c.Variable) {
      this.x = x;
    } else {
      var xArgs = { value: x };
      if (suffix) {
        xArgs.name = "x" + suffix;
      }
      this.x = new c.Variable(xArgs);
    }
    if (y instanceof c.Variable) {
      this.y = y;
    } else {
      var yArgs = { value: y };
      if (suffix) {
        yArgs.name = "y" + suffix;
      }
      this.y = new c.Variable(yArgs);
    }
  },

  setX: function(x) {
    if (x instanceof c.Variable) {
      this.x = x;
    } else {
      this.x.value = x;
    }
  },

  setY: function(y) {
    if (y instanceof c.Variable) {
      this.y = y;
    } else {
      this.y.value = y;
    }
  },

  toString: function() {
    return "(" + this.x + ", " + this.y + ")";
  },
});

})(this["c"]||module.parent.exports||{});
