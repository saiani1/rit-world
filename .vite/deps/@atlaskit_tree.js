import {
  require_react_dom
} from "./chunk-K3ZIZ2FY.js";
import {
  require_react
} from "./chunk-PP4JT27X.js";
import {
  __commonJS,
  __toESM
} from "./chunk-BQWMX7FD.js";

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_global.js
var require_global = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_global.js"(exports, module) {
    var global = module.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
    if (typeof __g == "number")
      __g = global;
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_core.js
var require_core = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_core.js"(exports, module) {
    var core = module.exports = { version: "2.6.12" };
    if (typeof __e == "number")
      __e = core;
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_a-function.js
var require_a_function = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_a-function.js"(exports, module) {
    module.exports = function(it) {
      if (typeof it != "function")
        throw TypeError(it + " is not a function!");
      return it;
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_ctx.js
var require_ctx = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_ctx.js"(exports, module) {
    var aFunction = require_a_function();
    module.exports = function(fn, that, length) {
      aFunction(fn);
      if (that === void 0)
        return fn;
      switch (length) {
        case 1:
          return function(a) {
            return fn.call(that, a);
          };
        case 2:
          return function(a, b) {
            return fn.call(that, a, b);
          };
        case 3:
          return function(a, b, c) {
            return fn.call(that, a, b, c);
          };
      }
      return function() {
        return fn.apply(that, arguments);
      };
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_is-object.js
var require_is_object = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_is-object.js"(exports, module) {
    module.exports = function(it) {
      return typeof it === "object" ? it !== null : typeof it === "function";
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_an-object.js
var require_an_object = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_an-object.js"(exports, module) {
    var isObject = require_is_object();
    module.exports = function(it) {
      if (!isObject(it))
        throw TypeError(it + " is not an object!");
      return it;
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_fails.js
var require_fails = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_fails.js"(exports, module) {
    module.exports = function(exec) {
      try {
        return !!exec();
      } catch (e) {
        return true;
      }
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_descriptors.js
var require_descriptors = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_descriptors.js"(exports, module) {
    module.exports = !require_fails()(function() {
      return Object.defineProperty({}, "a", { get: function() {
        return 7;
      } }).a != 7;
    });
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_dom-create.js
var require_dom_create = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_dom-create.js"(exports, module) {
    var isObject = require_is_object();
    var document2 = require_global().document;
    var is2 = isObject(document2) && isObject(document2.createElement);
    module.exports = function(it) {
      return is2 ? document2.createElement(it) : {};
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_ie8-dom-define.js"(exports, module) {
    module.exports = !require_descriptors() && !require_fails()(function() {
      return Object.defineProperty(require_dom_create()("div"), "a", { get: function() {
        return 7;
      } }).a != 7;
    });
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_to-primitive.js
var require_to_primitive = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_to-primitive.js"(exports, module) {
    var isObject = require_is_object();
    module.exports = function(it, S) {
      if (!isObject(it))
        return it;
      var fn, val;
      if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it)))
        return val;
      if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it)))
        return val;
      if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it)))
        return val;
      throw TypeError("Can't convert object to primitive value");
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_object-dp.js
var require_object_dp = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_object-dp.js"(exports) {
    var anObject = require_an_object();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var toPrimitive = require_to_primitive();
    var dP = Object.defineProperty;
    exports.f = require_descriptors() ? Object.defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (IE8_DOM_DEFINE)
        try {
          return dP(O, P, Attributes);
        } catch (e) {
        }
      if ("get" in Attributes || "set" in Attributes)
        throw TypeError("Accessors not supported!");
      if ("value" in Attributes)
        O[P] = Attributes.value;
      return O;
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_property-desc.js
var require_property_desc = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_property-desc.js"(exports, module) {
    module.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_hide.js
var require_hide = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_hide.js"(exports, module) {
    var dP = require_object_dp();
    var createDesc = require_property_desc();
    module.exports = require_descriptors() ? function(object, key, value) {
      return dP.f(object, key, createDesc(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_has.js
var require_has = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_has.js"(exports, module) {
    var hasOwnProperty = {}.hasOwnProperty;
    module.exports = function(it, key) {
      return hasOwnProperty.call(it, key);
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_export.js
var require_export = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_export.js"(exports, module) {
    var global = require_global();
    var core = require_core();
    var ctx = require_ctx();
    var hide = require_hide();
    var has = require_has();
    var PROTOTYPE = "prototype";
    var $export = function(type, name, source) {
      var IS_FORCED = type & $export.F;
      var IS_GLOBAL = type & $export.G;
      var IS_STATIC = type & $export.S;
      var IS_PROTO = type & $export.P;
      var IS_BIND = type & $export.B;
      var IS_WRAP = type & $export.W;
      var exports2 = IS_GLOBAL ? core : core[name] || (core[name] = {});
      var expProto = exports2[PROTOTYPE];
      var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
      var key, own, out;
      if (IS_GLOBAL)
        source = name;
      for (key in source) {
        own = !IS_FORCED && target && target[key] !== void 0;
        if (own && has(exports2, key))
          continue;
        out = own ? target[key] : source[key];
        exports2[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function(C) {
          var F = function(a, b, c) {
            if (this instanceof C) {
              switch (arguments.length) {
                case 0:
                  return new C();
                case 1:
                  return new C(a);
                case 2:
                  return new C(a, b);
              }
              return new C(a, b, c);
            }
            return C.apply(this, arguments);
          };
          F[PROTOTYPE] = C[PROTOTYPE];
          return F;
        }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
        if (IS_PROTO) {
          (exports2.virtual || (exports2.virtual = {}))[key] = out;
          if (type & $export.R && expProto && !expProto[key])
            hide(expProto, key, out);
        }
      }
    };
    $export.F = 1;
    $export.G = 2;
    $export.S = 4;
    $export.P = 8;
    $export.B = 16;
    $export.W = 32;
    $export.U = 64;
    $export.R = 128;
    module.exports = $export;
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_cof.js
var require_cof = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_cof.js"(exports, module) {
    var toString = {}.toString;
    module.exports = function(it) {
      return toString.call(it).slice(8, -1);
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_iobject.js
var require_iobject = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_iobject.js"(exports, module) {
    var cof = require_cof();
    module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
      return cof(it) == "String" ? it.split("") : Object(it);
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_defined.js
var require_defined = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_defined.js"(exports, module) {
    module.exports = function(it) {
      if (it == void 0)
        throw TypeError("Can't call method on  " + it);
      return it;
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_to-iobject.js
var require_to_iobject = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_to-iobject.js"(exports, module) {
    var IObject = require_iobject();
    var defined = require_defined();
    module.exports = function(it) {
      return IObject(defined(it));
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_to-integer.js
var require_to_integer = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_to-integer.js"(exports, module) {
    var ceil = Math.ceil;
    var floor = Math.floor;
    module.exports = function(it) {
      return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_to-length.js
var require_to_length = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_to-length.js"(exports, module) {
    var toInteger = require_to_integer();
    var min = Math.min;
    module.exports = function(it) {
      return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_to-absolute-index.js
var require_to_absolute_index = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_to-absolute-index.js"(exports, module) {
    var toInteger = require_to_integer();
    var max = Math.max;
    var min = Math.min;
    module.exports = function(index, length) {
      index = toInteger(index);
      return index < 0 ? max(index + length, 0) : min(index, length);
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_array-includes.js
var require_array_includes = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_array-includes.js"(exports, module) {
    var toIObject = require_to_iobject();
    var toLength = require_to_length();
    var toAbsoluteIndex = require_to_absolute_index();
    module.exports = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el != el)
          while (length > index) {
            value = O[index++];
            if (value != value)
              return true;
          }
        else
          for (; length > index; index++)
            if (IS_INCLUDES || index in O) {
              if (O[index] === el)
                return IS_INCLUDES || index || 0;
            }
        return !IS_INCLUDES && -1;
      };
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_library.js
var require_library = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_library.js"(exports, module) {
    module.exports = true;
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_shared.js
var require_shared = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_shared.js"(exports, module) {
    var core = require_core();
    var global = require_global();
    var SHARED = "__core-js_shared__";
    var store = global[SHARED] || (global[SHARED] = {});
    (module.exports = function(key, value) {
      return store[key] || (store[key] = value !== void 0 ? value : {});
    })("versions", []).push({
      version: core.version,
      mode: require_library() ? "pure" : "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    });
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_uid.js
var require_uid = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_uid.js"(exports, module) {
    var id = 0;
    var px = Math.random();
    module.exports = function(key) {
      return "Symbol(".concat(key === void 0 ? "" : key, ")_", (++id + px).toString(36));
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_shared-key.js
var require_shared_key = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_shared-key.js"(exports, module) {
    var shared = require_shared()("keys");
    var uid = require_uid();
    module.exports = function(key) {
      return shared[key] || (shared[key] = uid(key));
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_object-keys-internal.js
var require_object_keys_internal = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_object-keys-internal.js"(exports, module) {
    var has = require_has();
    var toIObject = require_to_iobject();
    var arrayIndexOf = require_array_includes()(false);
    var IE_PROTO = require_shared_key()("IE_PROTO");
    module.exports = function(object, names) {
      var O = toIObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O)
        if (key != IE_PROTO)
          has(O, key) && result.push(key);
      while (names.length > i)
        if (has(O, key = names[i++])) {
          ~arrayIndexOf(result, key) || result.push(key);
        }
      return result;
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_enum-bug-keys.js"(exports, module) {
    module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_object-keys.js
var require_object_keys = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_object-keys.js"(exports, module) {
    var $keys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module.exports = Object.keys || function keys(O) {
      return $keys(O, enumBugKeys);
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_object-gops.js
var require_object_gops = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_object-gops.js"(exports) {
    exports.f = Object.getOwnPropertySymbols;
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_object-pie.js
var require_object_pie = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_object-pie.js"(exports) {
    exports.f = {}.propertyIsEnumerable;
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_to-object.js
var require_to_object = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_to-object.js"(exports, module) {
    var defined = require_defined();
    module.exports = function(it) {
      return Object(defined(it));
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_object-assign.js
var require_object_assign = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_object-assign.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var getKeys = require_object_keys();
    var gOPS = require_object_gops();
    var pIE = require_object_pie();
    var toObject = require_to_object();
    var IObject = require_iobject();
    var $assign = Object.assign;
    module.exports = !$assign || require_fails()(function() {
      var A = {};
      var B = {};
      var S = Symbol();
      var K = "abcdefghijklmnopqrst";
      A[S] = 7;
      K.split("").forEach(function(k) {
        B[k] = k;
      });
      return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join("") != K;
    }) ? function assign(target, source) {
      var T = toObject(target);
      var aLen = arguments.length;
      var index = 1;
      var getSymbols = gOPS.f;
      var isEnum = pIE.f;
      while (aLen > index) {
        var S = IObject(arguments[index++]);
        var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
        var length = keys.length;
        var j = 0;
        var key;
        while (length > j) {
          key = keys[j++];
          if (!DESCRIPTORS || isEnum.call(S, key))
            T[key] = S[key];
        }
      }
      return T;
    } : $assign;
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/es6.object.assign.js
var require_es6_object_assign = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/es6.object.assign.js"() {
    var $export = require_export();
    $export($export.S + $export.F, "Object", { assign: require_object_assign() });
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/fn/object/assign.js
var require_assign = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/fn/object/assign.js"(exports, module) {
    require_es6_object_assign();
    module.exports = require_core().Object.assign;
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_object-dps.js
var require_object_dps = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_object-dps.js"(exports, module) {
    var dP = require_object_dp();
    var anObject = require_an_object();
    var getKeys = require_object_keys();
    module.exports = require_descriptors() ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var keys = getKeys(Properties);
      var length = keys.length;
      var i = 0;
      var P;
      while (length > i)
        dP.f(O, P = keys[i++], Properties[P]);
      return O;
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_html.js
var require_html = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_html.js"(exports, module) {
    var document2 = require_global().document;
    module.exports = document2 && document2.documentElement;
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_object-create.js
var require_object_create = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_object-create.js"(exports, module) {
    var anObject = require_an_object();
    var dPs = require_object_dps();
    var enumBugKeys = require_enum_bug_keys();
    var IE_PROTO = require_shared_key()("IE_PROTO");
    var Empty = function() {
    };
    var PROTOTYPE = "prototype";
    var createDict = function() {
      var iframe = require_dom_create()("iframe");
      var i = enumBugKeys.length;
      var lt = "<";
      var gt = ">";
      var iframeDocument;
      iframe.style.display = "none";
      require_html().appendChild(iframe);
      iframe.src = "javascript:";
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
      iframeDocument.close();
      createDict = iframeDocument.F;
      while (i--)
        delete createDict[PROTOTYPE][enumBugKeys[i]];
      return createDict();
    };
    module.exports = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        Empty[PROTOTYPE] = anObject(O);
        result = new Empty();
        Empty[PROTOTYPE] = null;
        result[IE_PROTO] = O;
      } else
        result = createDict();
      return Properties === void 0 ? result : dPs(result, Properties);
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/es6.object.create.js
var require_es6_object_create = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/es6.object.create.js"() {
    var $export = require_export();
    $export($export.S, "Object", { create: require_object_create() });
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/fn/object/create.js
var require_create = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/fn/object/create.js"(exports, module) {
    require_es6_object_create();
    var $Object = require_core().Object;
    module.exports = function create(P, D) {
      return $Object.create(P, D);
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_object-gopd.js
var require_object_gopd = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_object-gopd.js"(exports) {
    var pIE = require_object_pie();
    var createDesc = require_property_desc();
    var toIObject = require_to_iobject();
    var toPrimitive = require_to_primitive();
    var has = require_has();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var gOPD = Object.getOwnPropertyDescriptor;
    exports.f = require_descriptors() ? gOPD : function getOwnPropertyDescriptor(O, P) {
      O = toIObject(O);
      P = toPrimitive(P, true);
      if (IE8_DOM_DEFINE)
        try {
          return gOPD(O, P);
        } catch (e) {
        }
      if (has(O, P))
        return createDesc(!pIE.f.call(O, P), O[P]);
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_set-proto.js
var require_set_proto = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_set-proto.js"(exports, module) {
    var isObject = require_is_object();
    var anObject = require_an_object();
    var check = function(O, proto) {
      anObject(O);
      if (!isObject(proto) && proto !== null)
        throw TypeError(proto + ": can't set as prototype!");
    };
    module.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? (
        // eslint-disable-line
        function(test, buggy, set) {
          try {
            set = require_ctx()(Function.call, require_object_gopd().f(Object.prototype, "__proto__").set, 2);
            set(test, []);
            buggy = !(test instanceof Array);
          } catch (e) {
            buggy = true;
          }
          return function setPrototypeOf(O, proto) {
            check(O, proto);
            if (buggy)
              O.__proto__ = proto;
            else
              set(O, proto);
            return O;
          };
        }({}, false)
      ) : void 0),
      check
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/es6.object.set-prototype-of.js
var require_es6_object_set_prototype_of = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/es6.object.set-prototype-of.js"() {
    var $export = require_export();
    $export($export.S, "Object", { setPrototypeOf: require_set_proto().set });
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/fn/object/set-prototype-of.js
var require_set_prototype_of = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/fn/object/set-prototype-of.js"(exports, module) {
    require_es6_object_set_prototype_of();
    module.exports = require_core().Object.setPrototypeOf;
  }
});

// .yarn/cache/react-is-npm-16.13.1-a9b9382b4f-5aa564a1cd.zip/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  ".yarn/cache/react-is-npm-16.13.1-a9b9382b4f-5aa564a1cd.zip/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType2(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer2(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement2(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer2;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement2;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType2;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// .yarn/cache/react-is-npm-16.13.1-a9b9382b4f-5aa564a1cd.zip/node_modules/react-is/index.js
var require_react_is = __commonJS({
  ".yarn/cache/react-is-npm-16.13.1-a9b9382b4f-5aa564a1cd.zip/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// .yarn/cache/object-assign-npm-4.1.1-1004ad6dec-fcc6e4ea8c.zip/node_modules/object-assign/index.js
var require_object_assign2 = __commonJS({
  ".yarn/cache/object-assign-npm-4.1.1-1004ad6dec-fcc6e4ea8c.zip/node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// .yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-7d959caec0.zip/node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  ".yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-7d959caec0.zip/node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// .yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-7d959caec0.zip/node_modules/prop-types/lib/has.js
var require_has2 = __commonJS({
  ".yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-7d959caec0.zip/node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// .yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-7d959caec0.zip/node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  ".yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-7d959caec0.zip/node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has2();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values2, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values2, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// .yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-7d959caec0.zip/node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  ".yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-7d959caec0.zip/node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign2();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has2();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is2(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is2(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// .yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-7d959caec0.zip/node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  ".yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-7d959caec0.zip/node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// .yarn/cache/hoist-non-react-statics-npm-3.3.2-e7b709e6c1-1acbe85f33.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  ".yarn/cache/hoist-non-react-statics-npm-3.3.2-e7b709e6c1-1acbe85f33.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
    "use strict";
    var reactIs = require_react_is();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics;
  }
});

// .yarn/cache/react-is-npm-17.0.2-091bbb8db6-73b36281e5.zip/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development2 = __commonJS({
  ".yarn/cache/react-is-npm-17.0.2-091bbb8db6-73b36281e5.zip/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        var REACT_FRAGMENT_TYPE = 60107;
        var REACT_STRICT_MODE_TYPE = 60108;
        var REACT_PROFILER_TYPE = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        var REACT_SUSPENSE_TYPE = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
          REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
          REACT_PROFILER_TYPE = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var enableScopeAPI = false;
        function isValidElementType2(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer2(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement2(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer2;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement2;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType2;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// .yarn/cache/react-is-npm-17.0.2-091bbb8db6-73b36281e5.zip/node_modules/react-is/index.js
var require_react_is2 = __commonJS({
  ".yarn/cache/react-is-npm-17.0.2-091bbb8db6-73b36281e5.zip/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development2();
    }
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_object-to-array.js
var require_object_to_array = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_object-to-array.js"(exports, module) {
    var DESCRIPTORS = require_descriptors();
    var getKeys = require_object_keys();
    var toIObject = require_to_iobject();
    var isEnum = require_object_pie().f;
    module.exports = function(isEntries) {
      return function(it) {
        var O = toIObject(it);
        var keys = getKeys(O);
        var length = keys.length;
        var i = 0;
        var result = [];
        var key;
        while (length > i) {
          key = keys[i++];
          if (!DESCRIPTORS || isEnum.call(O, key)) {
            result.push(isEntries ? [key, O[key]] : O[key]);
          }
        }
        return result;
      };
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/es7.object.values.js
var require_es7_object_values = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/es7.object.values.js"() {
    var $export = require_export();
    var $values = require_object_to_array()(false);
    $export($export.S, "Object", {
      values: function values2(it) {
        return $values(it);
      }
    });
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/fn/object/values.js
var require_values = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/fn/object/values.js"(exports, module) {
    require_es7_object_values();
    module.exports = require_core().Object.values;
  }
});

// .yarn/cache/@babel-runtime-corejs2-npm-7.23.5-0365133cb7-6d9d38e670.zip/node_modules/@babel/runtime-corejs2/core-js/object/values.js
var require_values2 = __commonJS({
  ".yarn/cache/@babel-runtime-corejs2-npm-7.23.5-0365133cb7-6d9d38e670.zip/node_modules/@babel/runtime-corejs2/core-js/object/values.js"(exports, module) {
    module.exports = require_values();
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_object-sap.js
var require_object_sap = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_object-sap.js"(exports, module) {
    var $export = require_export();
    var core = require_core();
    var fails = require_fails();
    module.exports = function(KEY, exec) {
      var fn = (core.Object || {})[KEY] || Object[KEY];
      var exp = {};
      exp[KEY] = exec(fn);
      $export($export.S + $export.F * fails(function() {
        fn(1);
      }), "Object", exp);
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/es6.object.keys.js
var require_es6_object_keys = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/es6.object.keys.js"() {
    var toObject = require_to_object();
    var $keys = require_object_keys();
    require_object_sap()("keys", function() {
      return function keys(it) {
        return $keys(toObject(it));
      };
    });
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/fn/object/keys.js
var require_keys = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/fn/object/keys.js"(exports, module) {
    require_es6_object_keys();
    module.exports = require_core().Object.keys;
  }
});

// .yarn/cache/@babel-runtime-corejs2-npm-7.23.5-0365133cb7-6d9d38e670.zip/node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var require_keys2 = __commonJS({
  ".yarn/cache/@babel-runtime-corejs2-npm-7.23.5-0365133cb7-6d9d38e670.zip/node_modules/@babel/runtime-corejs2/core-js/object/keys.js"(exports, module) {
    module.exports = require_keys();
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/es6.date.now.js
var require_es6_date_now = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/es6.date.now.js"() {
    var $export = require_export();
    $export($export.S, "Date", { now: function() {
      return (/* @__PURE__ */ new Date()).getTime();
    } });
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/fn/date/now.js
var require_now = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/fn/date/now.js"(exports, module) {
    require_es6_date_now();
    module.exports = require_core().Date.now;
  }
});

// .yarn/cache/@babel-runtime-corejs2-npm-7.23.5-0365133cb7-6d9d38e670.zip/node_modules/@babel/runtime-corejs2/core-js/date/now.js
var require_now2 = __commonJS({
  ".yarn/cache/@babel-runtime-corejs2-npm-7.23.5-0365133cb7-6d9d38e670.zip/node_modules/@babel/runtime-corejs2/core-js/date/now.js"(exports, module) {
    module.exports = require_now();
  }
});

// .yarn/cache/@babel-runtime-corejs2-npm-7.23.5-0365133cb7-6d9d38e670.zip/node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var require_assign2 = __commonJS({
  ".yarn/cache/@babel-runtime-corejs2-npm-7.23.5-0365133cb7-6d9d38e670.zip/node_modules/@babel/runtime-corejs2/core-js/object/assign.js"(exports, module) {
    module.exports = require_assign();
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_is-integer.js
var require_is_integer = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/_is-integer.js"(exports, module) {
    var isObject = require_is_object();
    var floor = Math.floor;
    module.exports = function isInteger(it) {
      return !isObject(it) && isFinite(it) && floor(it) === it;
    };
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/es6.number.is-integer.js
var require_es6_number_is_integer = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/modules/es6.number.is-integer.js"() {
    var $export = require_export();
    $export($export.S, "Number", { isInteger: require_is_integer() });
  }
});

// .yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/fn/number/is-integer.js
var require_is_integer2 = __commonJS({
  ".yarn/unplugged/core-js-npm-2.6.12-0b93d77d31/node_modules/core-js/library/fn/number/is-integer.js"(exports, module) {
    require_es6_number_is_integer();
    module.exports = require_core().Number.isInteger;
  }
});

// .yarn/cache/@babel-runtime-corejs2-npm-7.23.5-0365133cb7-6d9d38e670.zip/node_modules/@babel/runtime-corejs2/core-js/number/is-integer.js
var require_is_integer3 = __commonJS({
  ".yarn/cache/@babel-runtime-corejs2-npm-7.23.5-0365133cb7-6d9d38e670.zip/node_modules/@babel/runtime-corejs2/core-js/number/is-integer.js"(exports, module) {
    module.exports = require_is_integer2();
  }
});

// .yarn/cache/@babel-runtime-npm-7.23.5-6e68b78aa3-0f1669f639.zip/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// .yarn/cache/@babel-runtime-npm-7.23.5-6e68b78aa3-0f1669f639.zip/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// .yarn/cache/@babel-runtime-npm-7.23.5-6e68b78aa3-0f1669f639.zip/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// .yarn/cache/@babel-runtime-npm-7.23.5-6e68b78aa3-0f1669f639.zip/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

// .yarn/cache/@babel-runtime-npm-7.23.5-6e68b78aa3-0f1669f639.zip/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

// .yarn/cache/@babel-runtime-npm-7.23.5-6e68b78aa3-0f1669f639.zip/node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

// .yarn/cache/@babel-runtime-npm-7.23.5-6e68b78aa3-0f1669f639.zip/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}

// .yarn/cache/@babel-runtime-npm-7.23.5-6e68b78aa3-0f1669f639.zip/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf3(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// .yarn/cache/@babel-runtime-npm-7.23.5-6e68b78aa3-0f1669f639.zip/node_modules/@babel/runtime/helpers/esm/inherits.js
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}

// .yarn/cache/@babel-runtime-npm-7.23.5-6e68b78aa3-0f1669f639.zip/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(self2, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}

// .yarn/cache/@babel-runtime-npm-7.23.5-6e68b78aa3-0f1669f639.zip/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}

// .yarn/cache/@babel-runtime-npm-7.23.5-6e68b78aa3-0f1669f639.zip/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// .yarn/__virtual__/@atlaskit-tree-virtual-fc12252a2f/0/cache/@atlaskit-tree-npm-8.8.7-4e826b86c3-9da4774d00.zip/node_modules/@atlaskit/tree/dist/esm/components/Tree/Tree.js
var import_react12 = __toESM(require_react());

// .yarn/cache/@babel-runtime-corejs2-npm-7.23.5-0365133cb7-6d9d38e670.zip/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var import_assign = __toESM(require_assign());
function _extends2() {
  _extends2 = import_assign.default ? import_assign.default.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}

// .yarn/__virtual__/react-beautiful-dnd-next-virtual-2d8a4aa250/0/cache/react-beautiful-dnd-next-npm-11.0.5-88ffe7c4b8-b5a33f297f.zip/node_modules/react-beautiful-dnd-next/dist/react-beautiful-dnd.esm.js
var import_react9 = __toESM(require_react());

// .yarn/__virtual__/use-memo-one-virtual-9df050dc0b/0/cache/use-memo-one-npm-1.1.3-b9dc77468a-8f08eba26d.zip/node_modules/use-memo-one/dist/use-memo-one.esm.js
var import_react = __toESM(require_react());
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }
  return true;
}
function useMemoOne(getResult, inputs) {
  var initial = (0, import_react.useState)(function() {
    return {
      inputs,
      result: getResult()
    };
  })[0];
  var isFirstRun = (0, import_react.useRef)(true);
  var committed = (0, import_react.useRef)(initial);
  var useCache = isFirstRun.current || Boolean(inputs && committed.current.inputs && areInputsEqual(inputs, committed.current.inputs));
  var cache = useCache ? committed.current : {
    inputs,
    result: getResult()
  };
  (0, import_react.useEffect)(function() {
    isFirstRun.current = false;
    committed.current = cache;
  }, [cache]);
  return cache.result;
}
function useCallbackOne(callback, inputs) {
  return useMemoOne(function() {
    return callback;
  }, inputs);
}
var useMemo = useMemoOne;
var useCallback = useCallbackOne;

// .yarn/cache/@babel-runtime-corejs2-npm-7.23.5-0365133cb7-6d9d38e670.zip/node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js
var import_create = __toESM(require_create());

// .yarn/cache/@babel-runtime-corejs2-npm-7.23.5-0365133cb7-6d9d38e670.zip/node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js
var import_set_prototype_of = __toESM(require_set_prototype_of(), 1);
function _setPrototypeOf2(o, p) {
  _setPrototypeOf2 = import_set_prototype_of.default ? import_set_prototype_of.default.bind() : function _setPrototypeOf3(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf2(o, p);
}

// .yarn/cache/@babel-runtime-corejs2-npm-7.23.5-0365133cb7-6d9d38e670.zip/node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = (0, import_create.default)(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf2(subClass, superClass);
}

// .yarn/cache/tiny-invariant-npm-1.3.1-a8ca214e49-872dbd1ff2.zip/node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var isProduction = false;
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}

// .yarn/cache/@babel-runtime-npm-7.23.5-6e68b78aa3-0f1669f639.zip/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}

// .yarn/cache/redux-npm-4.2.1-e7e2cf2e37-371e4833b6.zip/node_modules/redux/es/redux.js
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function miniKindOf(val) {
  if (val === void 0)
    return "undefined";
  if (val === null)
    return "null";
  var type = typeof val;
  switch (type) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function": {
      return type;
    }
  }
  if (Array.isArray(val))
    return "array";
  if (isDate(val))
    return "date";
  if (isError(val))
    return "error";
  var constructorName = ctorName(val);
  switch (constructorName) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return constructorName;
  }
  return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ctorName(val) {
  return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isError(val) {
  return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
  if (val instanceof Date)
    return true;
  return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function kindOf(val) {
  var typeOfVal = typeof val;
  if (true) {
    typeOfVal = miniKindOf(val);
  }
  return typeOfVal;
}
function createStore(reducer2, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(false ? formatProdErrorMessage(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(false ? formatProdErrorMessage(1) : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }
    return enhancer(createStore)(reducer2, preloadedState);
  }
  if (typeof reducer2 !== "function") {
    throw new Error(false ? formatProdErrorMessage(2) : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer2) + "'");
  }
  var currentReducer = reducer2;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(false ? formatProdErrorMessage(4) : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(false ? formatProdErrorMessage(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error(false ? formatProdErrorMessage(7) : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }
    if (typeof action.type === "undefined") {
      throw new Error(false ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }
    if (isDispatching) {
      throw new Error(false ? formatProdErrorMessage(9) : "Reducers may not dispatch actions.");
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(false ? formatProdErrorMessage(10) : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(false ? formatProdErrorMessage(11) : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
function bindActionCreator(actionCreator, dispatch) {
  return function() {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch);
  }
  if (typeof actionCreators !== "object" || actionCreators === null) {
    throw new Error(false ? formatProdErrorMessage(16) : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + `'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
  }
  var boundActionCreators = {};
  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function(arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function(a, b) {
    return function() {
      return a(b.apply(void 0, arguments));
    };
  });
}
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }
  return function(createStore3) {
    return function() {
      var store = createStore3.apply(void 0, arguments);
      var _dispatch = function dispatch() {
        throw new Error(false ? formatProdErrorMessage(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      };
      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function(middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2(_objectSpread2({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/components/Provider.js
var import_react4 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/components/Context.js
var import_react2 = __toESM(require_react());
var ReactReduxContext = import_react2.default.createContext(null);
if (true) {
  ReactReduxContext.displayName = "ReactRedux";
}

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/utils/batch.js
function defaultNoopBatch(callback) {
  callback();
}
var batch = defaultNoopBatch;
var setBatch = function setBatch2(newBatch) {
  return batch = newBatch;
};
var getBatch = function getBatch2() {
  return batch;
};

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/utils/Subscription.js
function createListenerCollection() {
  var batch2 = getBatch();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify2() {
      batch2(function() {
        var listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get2() {
      var listeners = [];
      var listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null)
          return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
var nullListeners = {
  notify: function notify() {
  },
  get: function get() {
    return [];
  }
};
function createSubscription(store, parentSub) {
  var unsubscribe;
  var listeners = nullListeners;
  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return Boolean(unsubscribe);
  }
  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  var subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: function getListeners() {
      return listeners;
    }
  };
  return subscription;
}

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js
var import_react3 = __toESM(require_react());
var useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? import_react3.useLayoutEffect : import_react3.useEffect;

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/components/Provider.js
function Provider(_ref) {
  var store = _ref.store, context = _ref.context, children = _ref.children;
  var contextValue = (0, import_react4.useMemo)(function() {
    var subscription = createSubscription(store);
    return {
      store,
      subscription
    };
  }, [store]);
  var previousState = (0, import_react4.useMemo)(function() {
    return store.getState();
  }, [store]);
  useIsomorphicLayoutEffect(function() {
    var subscription = contextValue.subscription;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }
    return function() {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || ReactReduxContext;
  return import_react4.default.createElement(Context.Provider, {
    value: contextValue
  }, children);
}
if (true) {
  Provider.propTypes = {
    store: import_prop_types.default.shape({
      subscribe: import_prop_types.default.func.isRequired,
      dispatch: import_prop_types.default.func.isRequired,
      getState: import_prop_types.default.func.isRequired
    }),
    context: import_prop_types.default.object,
    children: import_prop_types.default.any
  };
}
var Provider_default = Provider;

// .yarn/cache/@babel-runtime-npm-7.23.5-6e68b78aa3-0f1669f639.zip/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/components/connectAdvanced.js
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
var import_react5 = __toESM(require_react());
var import_react_is = __toESM(require_react_is2());
var _excluded = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"];
var _excluded2 = ["reactReduxForwardedRef"];
var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];
var stringifyComponent = function stringifyComponent2(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};
function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  useIsomorphicLayoutEffect(function() {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}
function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false;
  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}
function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  if (!shouldHandleStateChanges)
    return;
  var didUnsubscribe = false;
  var lastThrownError = null;
  var checkForUpdates = function checkForUpdates2() {
    if (didUnsubscribe) {
      return;
    }
    var latestStoreState = store.getState();
    var newChildProps, error;
    try {
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }
    if (!error) {
      lastThrownError = null;
    }
    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true;
      forceComponentUpdateDispatch({
        type: "STORE_UPDATED",
        payload: {
          error
        }
      });
    }
  };
  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe();
  checkForUpdates();
  var unsubscribeWrapper = function unsubscribeWrapper2() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;
    if (lastThrownError) {
      throw lastThrownError;
    }
  };
  return unsubscribeWrapper;
}
var initStateUpdates = function initStateUpdates2() {
  return [null, 0];
};
function connectAdvanced(selectorFactory, _ref) {
  if (_ref === void 0) {
    _ref = {};
  }
  var _ref2 = _ref, _ref2$getDisplayName = _ref2.getDisplayName, getDisplayName = _ref2$getDisplayName === void 0 ? function(name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName, _ref2$methodName = _ref2.methodName, methodName = _ref2$methodName === void 0 ? "connectAdvanced" : _ref2$methodName, _ref2$renderCountProp = _ref2.renderCountProp, renderCountProp = _ref2$renderCountProp === void 0 ? void 0 : _ref2$renderCountProp, _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges, shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta, _ref2$storeKey = _ref2.storeKey, storeKey = _ref2$storeKey === void 0 ? "store" : _ref2$storeKey, _ref2$withRef = _ref2.withRef, withRef = _ref2$withRef === void 0 ? false : _ref2$withRef, _ref2$forwardRef = _ref2.forwardRef, forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef, _ref2$context = _ref2.context, context = _ref2$context === void 0 ? ReactReduxContext : _ref2$context, connectOptions = _objectWithoutPropertiesLoose(_ref2, _excluded);
  if (true) {
    if (renderCountProp !== void 0) {
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    }
    if (withRef) {
      throw new Error("withRef is removed. To access the wrapped instance, use a ref on the connected component");
    }
    var customStoreWarningMessage = "To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect";
    if (storeKey !== "store") {
      throw new Error("storeKey has been removed and does not do anything. " + customStoreWarningMessage);
    }
  }
  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if (!(0, import_react_is.isValidElementType)(WrappedComponent)) {
      throw new Error("You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
    }
    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
    var displayName = getDisplayName(wrappedComponentName);
    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName,
      methodName,
      renderCountProp,
      shouldHandleStateChanges,
      storeKey,
      displayName,
      wrappedComponentName,
      WrappedComponent
    });
    var pure = connectOptions.pure;
    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    }
    var usePureOnlyMemo = pure ? import_react5.useMemo : function(callback) {
      return callback();
    };
    function ConnectFunction(props) {
      var _useMemo = (0, import_react5.useMemo)(function() {
        var reactReduxForwardedRef2 = props.reactReduxForwardedRef, wrapperProps2 = _objectWithoutPropertiesLoose(props, _excluded2);
        return [props.context, reactReduxForwardedRef2, wrapperProps2];
      }, [props]), propsContext = _useMemo[0], reactReduxForwardedRef = _useMemo[1], wrapperProps = _useMemo[2];
      var ContextToUse = (0, import_react5.useMemo)(function() {
        return propsContext && propsContext.Consumer && (0, import_react_is.isContextConsumer)(import_react5.default.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]);
      var contextValue = (0, import_react5.useContext)(ContextToUse);
      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
      if (!didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error('Could not find "store" in the context of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
      }
      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = (0, import_react5.useMemo)(function() {
        return createChildSelector(store);
      }, [store]);
      var _useMemo2 = (0, import_react5.useMemo)(function() {
        if (!shouldHandleStateChanges)
          return NO_SUBSCRIPTION_ARRAY;
        var subscription2 = createSubscription(store, didStoreComeFromProps ? null : contextValue.subscription);
        var notifyNestedSubs2 = subscription2.notifyNestedSubs.bind(subscription2);
        return [subscription2, notifyNestedSubs2];
      }, [store, didStoreComeFromProps, contextValue]), subscription = _useMemo2[0], notifyNestedSubs = _useMemo2[1];
      var overriddenContextValue = (0, import_react5.useMemo)(function() {
        if (didStoreComeFromProps) {
          return contextValue;
        }
        return _extends({}, contextValue, {
          subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]);
      var _useReducer = (0, import_react5.useReducer)(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates), _useReducer$ = _useReducer[0], previousStateUpdateResult = _useReducer$[0], forceComponentUpdateDispatch = _useReducer[1];
      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      }
      var lastChildProps = (0, import_react5.useRef)();
      var lastWrapperProps = (0, import_react5.useRef)(wrapperProps);
      var childPropsFromStoreUpdate = (0, import_react5.useRef)();
      var renderIsScheduled = (0, import_react5.useRef)(false);
      var actualChildProps = usePureOnlyMemo(function() {
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        }
        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]);
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]);
      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]);
      var renderedWrappedComponent = (0, import_react5.useMemo)(function() {
        return import_react5.default.createElement(WrappedComponent, _extends({}, actualChildProps, {
          ref: reactReduxForwardedRef
        }));
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]);
      var renderedChild = (0, import_react5.useMemo)(function() {
        if (shouldHandleStateChanges) {
          return import_react5.default.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }
        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }
    var Connect = pure ? import_react5.default.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;
    if (forwardRef) {
      var forwarded = import_react5.default.forwardRef(function forwardConnectRef(props, ref) {
        return import_react5.default.createElement(Connect, _extends({}, props, {
          reactReduxForwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return (0, import_hoist_non_react_statics.default)(forwarded, WrappedComponent);
    }
    return (0, import_hoist_non_react_statics.default)(Connect, WrappedComponent);
  };
}

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/utils/shallowEqual.js
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function shallowEqual(objA, objB) {
  if (is(objA, objB))
    return true;
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length)
    return false;
  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/utils/bindActionCreators.js
function bindActionCreators2(actionCreators, dispatch) {
  var boundActionCreators = {};
  var _loop = function _loop2(key2) {
    var actionCreator = actionCreators[key2];
    if (typeof actionCreator === "function") {
      boundActionCreators[key2] = function() {
        return dispatch(actionCreator.apply(void 0, arguments));
      };
    }
  };
  for (var key in actionCreators) {
    _loop(key);
  }
  return boundActionCreators;
}

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/utils/isPlainObject.js
function isPlainObject2(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null)
    return true;
  var baseProto = proto;
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }
  return proto === baseProto;
}

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/utils/warning.js
function warning(message) {
  if (typeof console !== "undefined" && typeof console.error === "function") {
    console.error(message);
  }
  try {
    throw new Error(message);
  } catch (e) {
  }
}

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/utils/verifyPlainObject.js
function verifyPlainObject(value, displayName, methodName) {
  if (!isPlainObject2(value)) {
    warning(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/connect/wrapMapToProps.js
function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);
    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== void 0 ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;
    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };
    proxy.dependsOnOwnProps = true;
    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);
      if (typeof props === "function") {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }
      if (true)
        verifyPlainObject(props, displayName, methodName);
      return props;
    };
    return proxy;
  };
}

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/connect/mapDispatchToProps.js
function whenMapDispatchToPropsIsFunction(mapDispatchToProps2) {
  return typeof mapDispatchToProps2 === "function" ? wrapMapToPropsFunc(mapDispatchToProps2, "mapDispatchToProps") : void 0;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps2) {
  return !mapDispatchToProps2 ? wrapMapToPropsConstant(function(dispatch) {
    return {
      dispatch
    };
  }) : void 0;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps2) {
  return mapDispatchToProps2 && typeof mapDispatchToProps2 === "object" ? wrapMapToPropsConstant(function(dispatch) {
    return bindActionCreators2(mapDispatchToProps2, dispatch);
  }) : void 0;
}
var mapDispatchToProps_default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/connect/mapStateToProps.js
function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === "function" ? wrapMapToPropsFunc(mapStateToProps, "mapStateToProps") : void 0;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function() {
    return {};
  }) : void 0;
}
var mapStateToProps_default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/connect/mergeProps.js
function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName, pure = _ref.pure, areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps))
          mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true)
          verifyPlainObject(mergedProps, displayName, "mergeProps");
      }
      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === "function" ? wrapMergePropsFunc(mergeProps) : void 0;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function() {
    return defaultMergeProps;
  } : void 0;
}
var mergeProps_default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/connect/verifySubselectors.js
function verify(selector2, methodName, displayName) {
  if (!selector2) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === "mapStateToProps" || methodName === "mapDispatchToProps") {
    if (!Object.prototype.hasOwnProperty.call(selector2, "dependsOnOwnProps")) {
      warning("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}
function verifySubselectors(mapStateToProps, mapDispatchToProps2, mergeProps, displayName) {
  verify(mapStateToProps, "mapStateToProps", displayName);
  verify(mapDispatchToProps2, "mapDispatchToProps", displayName);
  verify(mergeProps, "mergeProps", displayName);
}

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/connect/selectorFactory.js
var _excluded3 = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps2, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps2(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps2, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual, areOwnPropsEqual = _ref.areOwnPropsEqual, areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;
  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps2(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }
  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps2.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps2(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps)
      stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps2.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps2(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged)
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state, nextOwnProps, ownProps);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged)
      return handleNewPropsAndNewState();
    if (propsChanged)
      return handleNewProps();
    if (stateChanged)
      return handleNewState();
    return mergedProps;
  }
  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}
function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps, initMapDispatchToProps = _ref2.initMapDispatchToProps, initMergeProps = _ref2.initMergeProps, options = _objectWithoutPropertiesLoose(_ref2, _excluded3);
  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps2 = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);
  if (true) {
    verifySubselectors(mapStateToProps, mapDispatchToProps2, mergeProps, options.displayName);
  }
  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps2, mergeProps, dispatch, options);
}

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/connect/connect.js
var _excluded4 = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];
function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result)
      return result;
  }
  return function(dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}
function strictEqual(a, b) {
  return a === b;
}
function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp, _ref$connectHOC = _ref.connectHOC, connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC, _ref$mapStateToPropsF = _ref.mapStateToPropsFactories, mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? mapStateToProps_default : _ref$mapStateToPropsF, _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories, mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? mapDispatchToProps_default : _ref$mapDispatchToPro, _ref$mergePropsFactor = _ref.mergePropsFactories, mergePropsFactories = _ref$mergePropsFactor === void 0 ? mergeProps_default : _ref$mergePropsFactor, _ref$selectorFactory = _ref.selectorFactory, selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;
  return function connect(mapStateToProps, mapDispatchToProps2, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }
    var _ref3 = _ref2, _ref3$pure = _ref3.pure, pure = _ref3$pure === void 0 ? true : _ref3$pure, _ref3$areStatesEqual = _ref3.areStatesEqual, areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual, _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual, areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua, _ref3$areStatePropsEq = _ref3.areStatePropsEqual, areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq, _ref3$areMergedPropsE = _ref3.areMergedPropsEqual, areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE, extraOptions = _objectWithoutPropertiesLoose(_ref3, _excluded4);
    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, "mapStateToProps");
    var initMapDispatchToProps = match(mapDispatchToProps2, mapDispatchToPropsFactories, "mapDispatchToProps");
    var initMergeProps = match(mergeProps, mergePropsFactories, "mergeProps");
    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: "connect",
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps,
      initMapDispatchToProps,
      initMergeProps,
      pure,
      areStatesEqual,
      areOwnPropsEqual,
      areStatePropsEqual,
      areMergedPropsEqual
    }, extraOptions));
  };
}
var connect_default = createConnect();

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/hooks/useStore.js
var import_react7 = __toESM(require_react());

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/hooks/useReduxContext.js
var import_react6 = __toESM(require_react());
function useReduxContext() {
  var contextValue = (0, import_react6.useContext)(ReactReduxContext);
  if (!contextValue) {
    throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
  }
  return contextValue;
}

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/hooks/useStore.js
function createStoreHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }
  var useReduxContext2 = context === ReactReduxContext ? useReduxContext : function() {
    return (0, import_react7.useContext)(context);
  };
  return function useStore2() {
    var _useReduxContext = useReduxContext2(), store = _useReduxContext.store;
    return store;
  };
}
var useStore = createStoreHook();

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/hooks/useDispatch.js
function createDispatchHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }
  var useStore2 = context === ReactReduxContext ? useStore : createStoreHook(context);
  return function useDispatch2() {
    var store = useStore2();
    return store.dispatch;
  };
}
var useDispatch = createDispatchHook();

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/hooks/useSelector.js
var import_react8 = __toESM(require_react());
var refEquality = function refEquality2(a, b) {
  return a === b;
};
function useSelectorWithStoreAndSubscription(selector2, equalityFn, store, contextSub) {
  var _useReducer = (0, import_react8.useReducer)(function(s) {
    return s + 1;
  }, 0), forceRender = _useReducer[1];
  var subscription = (0, import_react8.useMemo)(function() {
    return createSubscription(store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = (0, import_react8.useRef)();
  var latestSelector = (0, import_react8.useRef)();
  var latestStoreState = (0, import_react8.useRef)();
  var latestSelectedState = (0, import_react8.useRef)();
  var storeState = store.getState();
  var selectedState;
  try {
    if (selector2 !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {
      var newSelectedState = selector2(storeState);
      if (latestSelectedState.current === void 0 || !equalityFn(newSelectedState, latestSelectedState.current)) {
        selectedState = newSelectedState;
      } else {
        selectedState = latestSelectedState.current;
      }
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }
    throw err;
  }
  useIsomorphicLayoutEffect(function() {
    latestSelector.current = selector2;
    latestStoreState.current = storeState;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = void 0;
  });
  useIsomorphicLayoutEffect(function() {
    function checkForUpdates() {
      try {
        var newStoreState = store.getState();
        if (newStoreState === latestStoreState.current) {
          return;
        }
        var _newSelectedState = latestSelector.current(newStoreState);
        if (equalityFn(_newSelectedState, latestSelectedState.current)) {
          return;
        }
        latestSelectedState.current = _newSelectedState;
        latestStoreState.current = newStoreState;
      } catch (err) {
        latestSubscriptionCallbackError.current = err;
      }
      forceRender();
    }
    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function() {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
function createSelectorHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }
  var useReduxContext2 = context === ReactReduxContext ? useReduxContext : function() {
    return (0, import_react8.useContext)(context);
  };
  return function useSelector2(selector2, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }
    if (true) {
      if (!selector2) {
        throw new Error("You must pass a selector to useSelector");
      }
      if (typeof selector2 !== "function") {
        throw new Error("You must pass a function as a selector to useSelector");
      }
      if (typeof equalityFn !== "function") {
        throw new Error("You must pass a function as an equality function to useSelector");
      }
    }
    var _useReduxContext = useReduxContext2(), store = _useReduxContext.store, contextSub = _useReduxContext.subscription;
    var selectedState = useSelectorWithStoreAndSubscription(selector2, equalityFn, store, contextSub);
    (0, import_react8.useDebugValue)(selectedState);
    return selectedState;
  };
}
var useSelector = createSelectorHook();

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/utils/reactBatchedUpdates.js
var import_react_dom = __toESM(require_react_dom());

// .yarn/__virtual__/react-redux-virtual-bf9022079c/0/cache/react-redux-npm-7.2.9-612aa35519-1c3018bd26.zip/node_modules/react-redux/es/index.js
setBatch(import_react_dom.unstable_batchedUpdates);

// .yarn/cache/css-box-model-npm-1.2.1-d4e0001730-5477888373.zip/node_modules/css-box-model/dist/css-box-model.esm.js
var getRect = function getRect2(_ref) {
  var top = _ref.top, right = _ref.right, bottom = _ref.bottom, left = _ref.left;
  var width = right - left;
  var height = bottom - top;
  var rect = {
    top,
    right,
    bottom,
    left,
    width,
    height,
    x: left,
    y: top,
    center: {
      x: (right + left) / 2,
      y: (bottom + top) / 2
    }
  };
  return rect;
};
var expand = function expand2(target, expandBy) {
  return {
    top: target.top - expandBy.top,
    left: target.left - expandBy.left,
    bottom: target.bottom + expandBy.bottom,
    right: target.right + expandBy.right
  };
};
var shrink = function shrink2(target, shrinkBy) {
  return {
    top: target.top + shrinkBy.top,
    left: target.left + shrinkBy.left,
    bottom: target.bottom - shrinkBy.bottom,
    right: target.right - shrinkBy.right
  };
};
var shift = function shift2(target, shiftBy) {
  return {
    top: target.top + shiftBy.y,
    left: target.left + shiftBy.x,
    bottom: target.bottom + shiftBy.y,
    right: target.right + shiftBy.x
  };
};
var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var createBox = function createBox2(_ref2) {
  var borderBox = _ref2.borderBox, _ref2$margin = _ref2.margin, margin = _ref2$margin === void 0 ? noSpacing : _ref2$margin, _ref2$border = _ref2.border, border = _ref2$border === void 0 ? noSpacing : _ref2$border, _ref2$padding = _ref2.padding, padding = _ref2$padding === void 0 ? noSpacing : _ref2$padding;
  var marginBox = getRect(expand(borderBox, margin));
  var paddingBox = getRect(shrink(borderBox, border));
  var contentBox = getRect(shrink(paddingBox, padding));
  return {
    marginBox,
    borderBox: getRect(borderBox),
    paddingBox,
    contentBox,
    margin,
    border,
    padding
  };
};
var parse = function parse2(raw) {
  var value = raw.slice(0, -2);
  var suffix2 = raw.slice(-2);
  if (suffix2 !== "px") {
    return 0;
  }
  var result = Number(value);
  !!isNaN(result) ? true ? invariant(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]") : invariant(false) : void 0;
  return result;
};
var getWindowScroll = function getWindowScroll2() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};
var offset = function offset2(original, change) {
  var borderBox = original.borderBox, border = original.border, margin = original.margin, padding = original.padding;
  var shifted = shift(borderBox, change);
  return createBox({
    borderBox: shifted,
    border,
    margin,
    padding
  });
};
var withScroll = function withScroll2(original, scroll3) {
  if (scroll3 === void 0) {
    scroll3 = getWindowScroll();
  }
  return offset(original, scroll3);
};
var calculateBox = function calculateBox2(borderBox, styles) {
  var margin = {
    top: parse(styles.marginTop),
    right: parse(styles.marginRight),
    bottom: parse(styles.marginBottom),
    left: parse(styles.marginLeft)
  };
  var padding = {
    top: parse(styles.paddingTop),
    right: parse(styles.paddingRight),
    bottom: parse(styles.paddingBottom),
    left: parse(styles.paddingLeft)
  };
  var border = {
    top: parse(styles.borderTopWidth),
    right: parse(styles.borderRightWidth),
    bottom: parse(styles.borderBottomWidth),
    left: parse(styles.borderLeftWidth)
  };
  return createBox({
    borderBox,
    margin,
    padding,
    border
  });
};
var getBox = function getBox2(el) {
  var borderBox = el.getBoundingClientRect();
  var styles = window.getComputedStyle(el);
  return calculateBox(borderBox, styles);
};

// .yarn/cache/memoize-one-npm-5.2.1-ee0f8be979-b7141dc148.zip/node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual2(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual6) {
  if (isEqual6 === void 0) {
    isEqual6 = areInputsEqual2;
  }
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual6(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
var memoize_one_esm_default = memoizeOne;

// .yarn/__virtual__/react-beautiful-dnd-next-virtual-2d8a4aa250/0/cache/react-beautiful-dnd-next-npm-11.0.5-88ffe7c4b8-b5a33f297f.zip/node_modules/react-beautiful-dnd-next/dist/react-beautiful-dnd.esm.js
var import_values = __toESM(require_values2());
var import_keys = __toESM(require_keys2());
var import_now = __toESM(require_now2());

// .yarn/cache/raf-schd-npm-4.0.3-18f72af738-45514041c5.zip/node_modules/raf-schd/dist/raf-schd.esm.js
var rafSchd = function rafSchd2(fn) {
  var lastArgs = [];
  var frameId = null;
  var wrapperFn = function wrapperFn2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    lastArgs = args;
    if (frameId) {
      return;
    }
    frameId = requestAnimationFrame(function() {
      frameId = null;
      fn.apply(void 0, lastArgs);
    });
  };
  wrapperFn.cancel = function() {
    if (!frameId) {
      return;
    }
    cancelAnimationFrame(frameId);
    frameId = null;
  };
  return wrapperFn;
};
var raf_schd_esm_default = rafSchd;

// .yarn/__virtual__/react-beautiful-dnd-next-virtual-2d8a4aa250/0/cache/react-beautiful-dnd-next-npm-11.0.5-88ffe7c4b8-b5a33f297f.zip/node_modules/react-beautiful-dnd-next/dist/react-beautiful-dnd.esm.js
var import_assign2 = __toESM(require_assign2());
var import_is_integer = __toESM(require_is_integer3());
var isProduction2 = false;
var spacesAndTabs = /[ \t]{2,}/g;
var lineStartWithSpaces = /^[ \t]*/gm;
var clean = function clean2(value) {
  return value.replace(spacesAndTabs, " ").replace(lineStartWithSpaces, "").trim();
};
var getDevMessage = function getDevMessage2(message) {
  return clean("\n  %creact-beautiful-dnd\n\n  %c" + clean(message) + "\n\n  %c👷‍ This is a development only message. It will be removed in production builds.\n");
};
var getFormattedMessage = function getFormattedMessage2(message) {
  return [getDevMessage(message), "color: #00C584; font-size: 1.2em; font-weight: bold;", "line-height: 1.5", "color: #723874;"];
};
var isDisabledFlag = "__react-beautiful-dnd-disable-dev-warnings";
var warning2 = function warning3(message) {
  var _console;
  if (isProduction2) {
    return;
  }
  if (typeof window !== "undefined" && window[isDisabledFlag]) {
    return;
  }
  (_console = console).warn.apply(_console, getFormattedMessage(message));
};
function printFatalError(error) {
  var _console;
  if (false) {
    return;
  }
  (_console = console).error.apply(_console, getFormattedMessage("\n        An error has occurred while a drag is occurring.\n        Any existing drag will be cancelled.\n\n        > " + error.message + "\n        "));
  console.error("raw", error);
}
function shouldRecover(error) {
  return error.message.indexOf("Invariant failed") !== -1;
}
var ErrorBoundary = function(_React$Component) {
  _inheritsLoose(ErrorBoundary2, _React$Component);
  function ErrorBoundary2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.onError = void 0;
    _this.setOnError = function(fn) {
      _this.onError = fn;
    };
    _this.onFatalError = function(error) {
      printFatalError(error);
      if (_this.onError) {
        _this.onError();
      } else {
        true ? warning2("Could not find recovering function") : void 0;
      }
      if (shouldRecover(error)) {
        _this.setState({});
      }
    };
    return _this;
  }
  var _proto = ErrorBoundary2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener("error", this.onFatalError);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("error", this.onFatalError);
  };
  _proto.componentDidCatch = function componentDidCatch(error) {
    this.onFatalError(error);
    if (!shouldRecover(error)) {
      throw error;
    }
  };
  _proto.render = function render() {
    return this.props.children(this.setOnError);
  };
  return ErrorBoundary2;
}(import_react9.default.Component);
var origin = {
  x: 0,
  y: 0
};
var add = function add2(point1, point2) {
  return {
    x: point1.x + point2.x,
    y: point1.y + point2.y
  };
};
var subtract = function subtract2(point1, point2) {
  return {
    x: point1.x - point2.x,
    y: point1.y - point2.y
  };
};
var isEqual2 = function isEqual3(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};
var negate = function negate2(point) {
  return {
    x: point.x !== 0 ? -point.x : 0,
    y: point.y !== 0 ? -point.y : 0
  };
};
var patch = function patch2(line, value, otherValue) {
  var _ref;
  if (otherValue === void 0) {
    otherValue = 0;
  }
  return _ref = {}, _ref[line] = value, _ref[line === "x" ? "y" : "x"] = otherValue, _ref;
};
var distance = function distance2(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
};
var closest = function closest2(target, points) {
  return Math.min.apply(Math, points.map(function(point) {
    return distance(target, point);
  }));
};
var apply = function apply2(fn) {
  return function(point) {
    return {
      x: fn(point.x),
      y: fn(point.y)
    };
  };
};
var executeClip = function(frame, subject) {
  var result = getRect({
    top: Math.max(subject.top, frame.top),
    right: Math.min(subject.right, frame.right),
    bottom: Math.min(subject.bottom, frame.bottom),
    left: Math.max(subject.left, frame.left)
  });
  if (result.width <= 0 || result.height <= 0) {
    return null;
  }
  return result;
};
var isEqual$1 = function isEqual4(first, second) {
  return first.top === second.top && first.right === second.right && first.bottom === second.bottom && first.left === second.left;
};
var offsetByPosition = function offsetByPosition2(spacing, point) {
  return {
    top: spacing.top + point.y,
    left: spacing.left + point.x,
    bottom: spacing.bottom + point.y,
    right: spacing.right + point.x
  };
};
var getCorners = function getCorners2(spacing) {
  return [{
    x: spacing.left,
    y: spacing.top
  }, {
    x: spacing.right,
    y: spacing.top
  }, {
    x: spacing.left,
    y: spacing.bottom
  }, {
    x: spacing.right,
    y: spacing.bottom
  }];
};
var noSpacing2 = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var scroll = function scroll2(target, frame) {
  if (!frame) {
    return target;
  }
  return offsetByPosition(target, frame.scroll.diff.displacement);
};
var increase = function increase2(target, axis, withPlaceholder) {
  if (withPlaceholder && withPlaceholder.increasedBy) {
    var _extends22;
    return _extends2({}, target, (_extends22 = {}, _extends22[axis.end] = target[axis.end] + withPlaceholder.increasedBy[axis.line], _extends22));
  }
  return target;
};
var clip = function clip2(target, frame) {
  if (frame && frame.shouldClipSubject) {
    return executeClip(frame.pageMarginBox, target);
  }
  return getRect(target);
};
var getSubject = function(_ref) {
  var page = _ref.page, withPlaceholder = _ref.withPlaceholder, axis = _ref.axis, frame = _ref.frame;
  var scrolled = scroll(page.marginBox, frame);
  var increased = increase(scrolled, axis, withPlaceholder);
  var clipped = clip(increased, frame);
  return {
    page,
    withPlaceholder,
    active: clipped
  };
};
var scrollDroppable = function(droppable2, newScroll) {
  !droppable2.frame ? true ? invariant(false) : invariant(false) : void 0;
  var scrollable = droppable2.frame;
  var scrollDiff = subtract(newScroll, scrollable.scroll.initial);
  var scrollDisplacement = negate(scrollDiff);
  var frame = _extends2({}, scrollable, {
    scroll: {
      initial: scrollable.scroll.initial,
      current: newScroll,
      diff: {
        value: scrollDiff,
        displacement: scrollDisplacement
      },
      max: scrollable.scroll.max
    }
  });
  var subject = getSubject({
    page: droppable2.subject.page,
    withPlaceholder: droppable2.subject.withPlaceholder,
    axis: droppable2.axis,
    frame
  });
  var result = _extends2({}, droppable2, {
    frame,
    subject
  });
  return result;
};
var records = {};
var isEnabled = false;
var isTimingsEnabled = function isTimingsEnabled2() {
  return isEnabled;
};
var start = function start2(key) {
  if (true) {
    if (!isTimingsEnabled()) {
      return;
    }
    var now = performance.now();
    records[key] = now;
  }
};
var finish = function finish2(key) {
  if (true) {
    if (!isTimingsEnabled()) {
      return;
    }
    var now = performance.now();
    var previous = records[key];
    if (!previous) {
      console.warn("cannot finish timing as no previous time found", key);
      return;
    }
    var result = now - previous;
    var rounded = result.toFixed(2);
    var style2 = function() {
      if (result < 12) {
        return {
          textColor: "green",
          symbol: "✅"
        };
      }
      if (result < 40) {
        return {
          textColor: "orange",
          symbol: "⚠️"
        };
      }
      return {
        textColor: "red",
        symbol: "❌"
      };
    }();
    console.log(style2.symbol + " %cTiming %c" + rounded + " %cms %c" + key, "color: blue; font-weight: bold;", "color: " + style2.textColor + "; font-size: 1.1em;", "color: grey;", "color: purple; font-weight: bold;");
  }
};
var whatIsDraggedOver = function(impact) {
  var merge = impact.merge, destination = impact.destination;
  if (destination) {
    return destination.droppableId;
  }
  if (merge) {
    return merge.combine.droppableId;
  }
  return null;
};
function values(map) {
  return (0, import_values.default)(map);
}
function findIndex(list, predicate) {
  if (list.findIndex) {
    return list.findIndex(predicate);
  }
  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return i;
    }
  }
  return -1;
}
function find(list, predicate) {
  if (list.find) {
    return list.find(predicate);
  }
  var index = findIndex(list, predicate);
  if (index !== -1) {
    return list[index];
  }
  return void 0;
}
var toDroppableMap = memoize_one_esm_default(function(droppables) {
  return droppables.reduce(function(previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDraggableMap = memoize_one_esm_default(function(draggables) {
  return draggables.reduce(function(previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDroppableList = memoize_one_esm_default(function(droppables) {
  return values(droppables);
});
var toDraggableList = memoize_one_esm_default(function(draggables) {
  return values(draggables);
});
var isWithin = function(lowerBound, upperBound) {
  return function(value) {
    return lowerBound <= value && value <= upperBound;
  };
};
var isPositionInFrame = function(frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function(point) {
    return isWithinVertical(point.y) && isWithinVertical(point.y) && isWithinHorizontal(point.x) && isWithinHorizontal(point.x);
  };
};
var getDroppableOver = function(_ref) {
  var target = _ref.target, droppables = _ref.droppables;
  var maybe = find(toDroppableList(droppables), function(droppable2) {
    if (!droppable2.isEnabled) {
      return false;
    }
    var active = droppable2.subject.active;
    if (!active) {
      return false;
    }
    return isPositionInFrame(active)(target);
  });
  return maybe ? maybe.descriptor.id : null;
};
var getDraggablesInsideDroppable = memoize_one_esm_default(function(droppableId, draggables) {
  var result = toDraggableList(draggables).filter(function(draggable2) {
    return droppableId === draggable2.descriptor.droppableId;
  }).sort(function(a, b) {
    return a.descriptor.index - b.descriptor.index;
  });
  return result;
});
var withDroppableScroll = function(droppable2, point) {
  var frame = droppable2.frame;
  if (!frame) {
    return point;
  }
  return add(point, frame.scroll.diff.value);
};
var vertical = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
};
var horizontal = {
  direction: "horizontal",
  line: "x",
  crossAxisLine: "y",
  start: "left",
  end: "right",
  size: "width",
  crossAxisStart: "top",
  crossAxisEnd: "bottom",
  crossAxisSize: "height"
};
var isUserMovingForward = function(axis, direction) {
  return axis === vertical ? direction.vertical === "down" : direction.horizontal === "right";
};
var didStartDisplaced = function(draggableId, onLift) {
  return Boolean(onLift.wasDisplaced[draggableId]);
};
var getCombinedItemDisplacement = function(_ref) {
  var displaced = _ref.displaced, onLift = _ref.onLift, combineWith = _ref.combineWith, displacedBy = _ref.displacedBy;
  var isDisplaced = Boolean(displaced[combineWith]);
  if (didStartDisplaced(combineWith, onLift)) {
    return isDisplaced ? origin : negate(displacedBy.point);
  }
  return isDisplaced ? displacedBy.point : origin;
};
var getWhenEntered = function getWhenEntered2(id, current, oldMerge) {
  if (!oldMerge) {
    return current;
  }
  if (id !== oldMerge.combine.draggableId) {
    return current;
  }
  return oldMerge.whenEntered;
};
var isCombiningWith = function isCombiningWith2(_ref) {
  var id = _ref.id, currentCenter = _ref.currentCenter, axis = _ref.axis, borderBox = _ref.borderBox, displaceBy = _ref.displaceBy, currentUserDirection = _ref.currentUserDirection, oldMerge = _ref.oldMerge;
  var start3 = borderBox[axis.start] + displaceBy[axis.line];
  var end2 = borderBox[axis.end] + displaceBy[axis.line];
  var size = borderBox[axis.size];
  var twoThirdsOfSize = size * 0.666;
  var whenEntered = getWhenEntered(id, currentUserDirection, oldMerge);
  var isMovingForward = isUserMovingForward(axis, whenEntered);
  var targetCenter = currentCenter[axis.line];
  if (isMovingForward) {
    return isWithin(start3, start3 + twoThirdsOfSize)(targetCenter);
  }
  return isWithin(end2 - twoThirdsOfSize, end2)(targetCenter);
};
var getCombineImpact = function(_ref2) {
  var currentCenter = _ref2.pageBorderBoxCenterWithDroppableScrollChange, previousImpact = _ref2.previousImpact, destination = _ref2.destination, insideDestinationWithoutDraggable = _ref2.insideDestinationWithoutDraggable, userDirection = _ref2.userDirection, onLift = _ref2.onLift;
  if (!destination.isCombineEnabled) {
    return null;
  }
  var axis = destination.axis;
  var map = previousImpact.movement.map;
  var canBeDisplacedBy = previousImpact.movement.displacedBy;
  var oldMerge = previousImpact.merge;
  var target = find(insideDestinationWithoutDraggable, function(child) {
    var id = child.descriptor.id;
    var displaceBy = getCombinedItemDisplacement({
      displaced: map,
      onLift,
      combineWith: id,
      displacedBy: canBeDisplacedBy
    });
    return isCombiningWith({
      id,
      currentCenter,
      axis,
      borderBox: child.page.borderBox,
      displaceBy,
      currentUserDirection: userDirection,
      oldMerge
    });
  });
  if (!target) {
    return null;
  }
  var merge = {
    whenEntered: getWhenEntered(target.descriptor.id, userDirection, oldMerge),
    combine: {
      draggableId: target.descriptor.id,
      droppableId: destination.descriptor.id
    }
  };
  var withMerge = _extends2({}, previousImpact, {
    destination: null,
    merge
  });
  return withMerge;
};
var isPartiallyVisibleThroughFrame = function(frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function(subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    if (isContained) {
      return true;
    }
    var isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
    var isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);
    var isPartiallyContained = isPartiallyVisibleVertically && isPartiallyVisibleHorizontally;
    if (isPartiallyContained) {
      return true;
    }
    var isBiggerVertically = subject.top < frame.top && subject.bottom > frame.bottom;
    var isBiggerHorizontally = subject.left < frame.left && subject.right > frame.right;
    var isTargetBiggerThanFrame = isBiggerVertically && isBiggerHorizontally;
    if (isTargetBiggerThanFrame) {
      return true;
    }
    var isTargetBiggerOnOneAxis = isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;
    return isTargetBiggerOnOneAxis;
  };
};
var isTotallyVisibleThroughFrame = function(frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function(subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    return isContained;
  };
};
var isTotallyVisibleThroughFrameOnAxis = function(axis) {
  return function(frame) {
    var isWithinVertical = isWithin(frame.top, frame.bottom);
    var isWithinHorizontal = isWithin(frame.left, frame.right);
    return function(subject) {
      if (axis === vertical) {
        return isWithinVertical(subject.top) && isWithinVertical(subject.bottom);
      }
      return isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    };
  };
};
var getDroppableDisplaced = function getDroppableDisplaced2(target, destination) {
  var displacement = destination.frame ? destination.frame.scroll.diff.displacement : origin;
  return offsetByPosition(target, displacement);
};
var isVisibleInDroppable = function isVisibleInDroppable2(target, destination, isVisibleThroughFrameFn) {
  if (!destination.subject.active) {
    return false;
  }
  return isVisibleThroughFrameFn(destination.subject.active)(target);
};
var isVisibleInViewport = function isVisibleInViewport2(target, viewport, isVisibleThroughFrameFn) {
  return isVisibleThroughFrameFn(viewport)(target);
};
var isVisible = function isVisible2(_ref) {
  var toBeDisplaced = _ref.target, destination = _ref.destination, viewport = _ref.viewport, withDroppableDisplacement2 = _ref.withDroppableDisplacement, isVisibleThroughFrameFn = _ref.isVisibleThroughFrameFn;
  var displacedTarget = withDroppableDisplacement2 ? getDroppableDisplaced(toBeDisplaced, destination) : toBeDisplaced;
  return isVisibleInDroppable(displacedTarget, destination, isVisibleThroughFrameFn) && isVisibleInViewport(displacedTarget, viewport, isVisibleThroughFrameFn);
};
var isPartiallyVisible = function isPartiallyVisible2(args) {
  return isVisible(_extends2({}, args, {
    isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
  }));
};
var isTotallyVisible = function isTotallyVisible2(args) {
  return isVisible(_extends2({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
  }));
};
var isTotallyVisibleOnAxis = function isTotallyVisibleOnAxis2(args) {
  return isVisible(_extends2({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrameOnAxis(args.destination.axis)
  }));
};
var getShouldAnimate = function getShouldAnimate2(forceShouldAnimate, isVisible3, previous) {
  if (typeof forceShouldAnimate === "boolean") {
    return forceShouldAnimate;
  }
  if (!isVisible3) {
    return false;
  }
  if (!previous) {
    return true;
  }
  return previous.shouldAnimate;
};
var getTarget = function getTarget2(draggable2, onLift) {
  var marginBox = draggable2.page.marginBox;
  if (!didStartDisplaced(draggable2.descriptor.id, onLift)) {
    return marginBox;
  }
  var expandBy = {
    top: onLift.displacedBy.point.y,
    right: 0,
    bottom: 0,
    left: onLift.displacedBy.point.x
  };
  return getRect(expand(marginBox, expandBy));
};
var getDisplacement = function(_ref) {
  var draggable2 = _ref.draggable, destination = _ref.destination, previousImpact = _ref.previousImpact, viewport = _ref.viewport, onLift = _ref.onLift, forceShouldAnimate = _ref.forceShouldAnimate;
  var id = draggable2.descriptor.id;
  var map = previousImpact.movement.map;
  var target = getTarget(draggable2, onLift);
  var isVisible3 = isPartiallyVisible({
    target,
    destination,
    viewport,
    withDroppableDisplacement: true
  });
  var shouldAnimate = getShouldAnimate(forceShouldAnimate, isVisible3, map[id]);
  var displacement = {
    draggableId: id,
    isVisible: isVisible3,
    shouldAnimate
  };
  return displacement;
};
var getDisplacementMap = memoize_one_esm_default(function(displaced) {
  return displaced.reduce(function(map, displacement) {
    map[displacement.draggableId] = displacement;
    return map;
  }, {});
});
var getDisplacedBy = memoize_one_esm_default(function(axis, displaceBy) {
  var displacement = displaceBy[axis.line];
  return {
    value: displacement,
    point: patch(axis.line, displacement)
  };
});
var getReorderImpact = function(_ref) {
  var currentCenter = _ref.pageBorderBoxCenterWithDroppableScrollChange, draggable2 = _ref.draggable, destination = _ref.destination, insideDestinationWithoutDraggable = _ref.insideDestinationWithoutDraggable, previousImpact = _ref.previousImpact, viewport = _ref.viewport, userDirection = _ref.userDirection, onLift = _ref.onLift;
  var axis = destination.axis;
  var isMovingForward = isUserMovingForward(destination.axis, userDirection);
  var displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
  var targetCenter = currentCenter[axis.line];
  var displacement = displacedBy.value;
  var displaced = insideDestinationWithoutDraggable.filter(function(child) {
    var borderBox = child.page.borderBox;
    var start3 = borderBox[axis.start];
    var end2 = borderBox[axis.end];
    var didStartDisplaced$1 = didStartDisplaced(child.descriptor.id, onLift);
    if (isMovingForward) {
      if (didStartDisplaced$1) {
        return targetCenter < start3;
      }
      return targetCenter < start3 + displacement;
    }
    if (didStartDisplaced$1) {
      return targetCenter <= end2 - displacement;
    }
    return targetCenter <= end2;
  }).map(function(dimension) {
    return getDisplacement({
      draggable: dimension,
      destination,
      previousImpact,
      viewport: viewport.frame,
      onLift
    });
  });
  var newIndex = insideDestinationWithoutDraggable.length - displaced.length;
  var movement = {
    displacedBy,
    displaced,
    map: getDisplacementMap(displaced)
  };
  var impact = {
    movement,
    destination: {
      droppableId: destination.descriptor.id,
      index: newIndex
    },
    merge: null
  };
  return impact;
};
var noDisplacedBy = {
  point: origin,
  value: 0
};
var noMovement = {
  displaced: [],
  map: {},
  displacedBy: noDisplacedBy
};
var noImpact = {
  movement: noMovement,
  destination: null,
  merge: null
};
var removeDraggableFromList = memoize_one_esm_default(function(remove, list) {
  return list.filter(function(item) {
    return item.descriptor.id !== remove.descriptor.id;
  });
});
var getDragImpact = function(_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter, draggable2 = _ref.draggable, draggables = _ref.draggables, droppables = _ref.droppables, previousImpact = _ref.previousImpact, viewport = _ref.viewport, userDirection = _ref.userDirection, onLift = _ref.onLift;
  var destinationId = getDroppableOver({
    target: pageBorderBoxCenter,
    droppables
  });
  if (!destinationId) {
    return noImpact;
  }
  var destination = droppables[destinationId];
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var insideDestinationWithoutDraggable = removeDraggableFromList(draggable2, insideDestination);
  var pageBorderBoxCenterWithDroppableScrollChange = withDroppableScroll(destination, pageBorderBoxCenter);
  var withMerge = getCombineImpact({
    pageBorderBoxCenterWithDroppableScrollChange,
    previousImpact,
    destination,
    insideDestinationWithoutDraggable,
    userDirection,
    onLift
  });
  if (withMerge) {
    return withMerge;
  }
  return getReorderImpact({
    pageBorderBoxCenterWithDroppableScrollChange,
    destination,
    draggable: draggable2,
    insideDestinationWithoutDraggable,
    previousImpact,
    viewport,
    userDirection,
    onLift
  });
};
var getHomeLocation = function(descriptor) {
  return {
    index: descriptor.index,
    droppableId: descriptor.droppableId
  };
};
var getHomeOnLift = function(_ref) {
  var draggable2 = _ref.draggable, home2 = _ref.home, draggables = _ref.draggables, viewport = _ref.viewport;
  var displacedBy = getDisplacedBy(home2.axis, draggable2.displaceBy);
  var insideHome = getDraggablesInsideDroppable(home2.descriptor.id, draggables);
  var originallyDisplaced = insideHome.slice(draggable2.descriptor.index + 1);
  var wasDisplaced = originallyDisplaced.reduce(function(previous, item) {
    previous[item.descriptor.id] = true;
    return previous;
  }, {});
  var onLift = {
    displacedBy,
    wasDisplaced
  };
  var displaced = originallyDisplaced.map(function(dimension) {
    return getDisplacement({
      draggable: dimension,
      destination: home2,
      previousImpact: noImpact,
      viewport: viewport.frame,
      forceShouldAnimate: false,
      onLift
    });
  });
  var movement = {
    displaced,
    map: getDisplacementMap(displaced),
    displacedBy
  };
  var impact = {
    movement,
    destination: getHomeLocation(draggable2.descriptor),
    merge: null
  };
  return {
    impact,
    onLift
  };
};
var getDragPositions = function(_ref) {
  var oldInitial = _ref.initial, oldCurrent = _ref.current, oldClientBorderBoxCenter = _ref.oldClientBorderBoxCenter, newClientBorderBoxCenter = _ref.newClientBorderBoxCenter, viewport = _ref.viewport;
  var shift3 = subtract(newClientBorderBoxCenter, oldClientBorderBoxCenter);
  var initial = function() {
    var client = {
      selection: add(oldInitial.client.selection, shift3),
      borderBoxCenter: newClientBorderBoxCenter,
      offset: origin
    };
    var page = {
      selection: add(client.selection, viewport.scroll.initial),
      borderBoxCenter: add(client.selection, viewport.scroll.initial)
    };
    return {
      client,
      page
    };
  }();
  var current = function() {
    var reverse = negate(shift3);
    var offset3 = add(oldCurrent.client.offset, reverse);
    var client = {
      selection: add(initial.client.selection, offset3),
      borderBoxCenter: add(initial.client.borderBoxCenter, offset3),
      offset: offset3
    };
    var page = {
      selection: add(client.selection, viewport.scroll.current),
      borderBoxCenter: add(client.borderBoxCenter, viewport.scroll.current)
    };
    !isEqual2(oldCurrent.client.borderBoxCenter, client.borderBoxCenter) ? true ? invariant(false, "\n        Incorrect new client center position.\n        Expected (" + oldCurrent.client.borderBoxCenter.x + ", " + oldCurrent.client.borderBoxCenter.y + ")\n        to equal (" + client.borderBoxCenter.x + ", " + client.borderBoxCenter.y + ")\n      ") : invariant(false) : void 0;
    return {
      client,
      page
    };
  }();
  return {
    current,
    initial
  };
};
var offsetDraggable = function(_ref) {
  var draggable2 = _ref.draggable, offset$1 = _ref.offset, initialWindowScroll = _ref.initialWindowScroll;
  var client = offset(draggable2.client, offset$1);
  var page = withScroll(client, initialWindowScroll);
  var moved = _extends2({}, draggable2, {
    placeholder: _extends2({}, draggable2.placeholder, {
      client
    }),
    client,
    page
  });
  return moved;
};
var adjustExistingForAdditionsAndRemovals = function(_ref) {
  var existing = _ref.existing, droppables = _ref.droppables, addedDraggables = _ref.additions, removedDraggables = _ref.removals, viewport = _ref.viewport;
  var shifted = {};
  toDroppableList(droppables).forEach(function(droppable2) {
    var axis = droppable2.axis;
    var original = getDraggablesInsideDroppable(droppable2.descriptor.id, existing);
    var toShift = {};
    var addShift = function addShift2(id, shift3) {
      var previous = toShift[id];
      if (!previous) {
        toShift[id] = shift3;
        return;
      }
      toShift[id] = {
        indexChange: previous.indexChange + shift3.indexChange,
        offset: add(previous.offset, shift3.offset)
      };
    };
    var removals = toDraggableMap(removedDraggables.map(function(id) {
      var item = existing[id];
      !item ? true ? invariant(false, 'Could not find removed draggable "' + id + '"') : invariant(false) : void 0;
      return item;
    }).filter(function(draggable2) {
      return draggable2.descriptor.droppableId === droppable2.descriptor.id;
    }));
    var withRemovals = original.filter(function(item, index) {
      var isBeingRemoved = Boolean(removals[item.descriptor.id]);
      if (!isBeingRemoved) {
        return true;
      }
      var offset3 = negate(patch(axis.line, item.displaceBy[axis.line]));
      original.slice(index).forEach(function(sibling) {
        if (removals[sibling.descriptor.id]) {
          return;
        }
        addShift(sibling.descriptor.id, {
          indexChange: -1,
          offset: offset3
        });
      });
      return false;
    });
    var additions = addedDraggables.filter(function(draggable2) {
      return draggable2.descriptor.droppableId === droppable2.descriptor.id;
    });
    var withAdditions = withRemovals.slice(0);
    additions.forEach(function(item) {
      withAdditions.splice(item.descriptor.index, 0, item);
    });
    var additionMap = toDraggableMap(additions);
    withAdditions.forEach(function(item, index) {
      var wasAdded = Boolean(additionMap[item.descriptor.id]);
      if (!wasAdded) {
        return;
      }
      var offset3 = patch(axis.line, item.client.marginBox[axis.size]);
      withAdditions.slice(index).forEach(function(sibling) {
        if (additionMap[sibling.descriptor.id]) {
          return;
        }
        addShift(sibling.descriptor.id, {
          indexChange: 1,
          offset: offset3
        });
      });
    });
    withAdditions.forEach(function(item) {
      if (additionMap[item.descriptor.id]) {
        return;
      }
      var shift3 = toShift[item.descriptor.id];
      if (!shift3) {
        return;
      }
      var moved = offsetDraggable({
        draggable: item,
        offset: shift3.offset,
        initialWindowScroll: viewport.scroll.initial
      });
      var index = item.descriptor.index + shift3.indexChange;
      var updated = _extends2({}, moved, {
        descriptor: _extends2({}, item.descriptor, {
          index
        })
      });
      shifted[moved.descriptor.id] = updated;
    });
  });
  var map = _extends2({}, existing, shifted);
  return map;
};
var adjustAdditionsForScrollChanges = function(_ref) {
  var additions = _ref.additions, updatedDroppables = _ref.updatedDroppables, viewport = _ref.viewport;
  var windowScrollChange = viewport.scroll.diff.value;
  return additions.map(function(draggable2) {
    var droppableId = draggable2.descriptor.droppableId;
    var modified = updatedDroppables[droppableId];
    var frame = modified.frame;
    !frame ? true ? invariant(false) : invariant(false) : void 0;
    var droppableScrollChange = frame.scroll.diff.value;
    var totalChange = add(windowScrollChange, droppableScrollChange);
    var moved = offsetDraggable({
      draggable: draggable2,
      offset: totalChange,
      initialWindowScroll: viewport.scroll.initial
    });
    return moved;
  });
};
var adjustAdditionsForCollapsedHome = function(_ref) {
  var additions = _ref.additions, dragging = _ref.dragging, home2 = _ref.home, viewport = _ref.viewport;
  var displacedBy = getDisplacedBy(home2.axis, dragging.displaceBy);
  return additions.map(function(draggable2) {
    if (draggable2.descriptor.droppableId !== home2.descriptor.id) {
      return draggable2;
    }
    if (draggable2.descriptor.index < dragging.descriptor.index) {
      return draggable2;
    }
    return offsetDraggable({
      draggable: draggable2,
      offset: displacedBy.point,
      initialWindowScroll: viewport.scroll.initial
    });
  });
};
var updateDraggables = function(_ref) {
  var updatedDroppables = _ref.updatedDroppables, criticalId = _ref.criticalId, unmodifiedExisting = _ref.existing, unmodifiedAdditions = _ref.additions, removals = _ref.removals, viewport = _ref.viewport;
  var existing = adjustExistingForAdditionsAndRemovals({
    droppables: updatedDroppables,
    existing: unmodifiedExisting,
    additions: unmodifiedAdditions,
    removals,
    viewport
  });
  var dragging = existing[criticalId];
  var home2 = updatedDroppables[dragging.descriptor.droppableId];
  var scrolledAdditions = adjustAdditionsForScrollChanges({
    additions: unmodifiedAdditions,
    updatedDroppables,
    viewport
  });
  var additions = adjustAdditionsForCollapsedHome({
    additions: scrolledAdditions,
    dragging,
    home: home2,
    viewport
  });
  var map = _extends2({}, existing, toDraggableMap(additions));
  removals.forEach(function(id) {
    delete map[id];
  });
  return map;
};
var getMaxScroll = function(_ref) {
  var scrollHeight = _ref.scrollHeight, scrollWidth = _ref.scrollWidth, height = _ref.height, width = _ref.width;
  var maxScroll = subtract({
    x: scrollWidth,
    y: scrollHeight
  }, {
    x: width,
    y: height
  });
  var adjustedMaxScroll = {
    x: Math.max(0, maxScroll.x),
    y: Math.max(0, maxScroll.y)
  };
  return adjustedMaxScroll;
};
var getDroppableDimension = function(_ref) {
  var descriptor = _ref.descriptor, isEnabled2 = _ref.isEnabled, isCombineEnabled = _ref.isCombineEnabled, isFixedOnPage = _ref.isFixedOnPage, direction = _ref.direction, client = _ref.client, page = _ref.page, closest3 = _ref.closest;
  var frame = function() {
    if (!closest3) {
      return null;
    }
    var scrollSize = closest3.scrollSize, frameClient = closest3.client;
    var maxScroll = getMaxScroll({
      scrollHeight: scrollSize.scrollHeight,
      scrollWidth: scrollSize.scrollWidth,
      height: frameClient.paddingBox.height,
      width: frameClient.paddingBox.width
    });
    return {
      pageMarginBox: closest3.page.marginBox,
      frameClient,
      scrollSize,
      shouldClipSubject: closest3.shouldClipSubject,
      scroll: {
        initial: closest3.scroll,
        current: closest3.scroll,
        max: maxScroll,
        diff: {
          value: origin,
          displacement: origin
        }
      }
    };
  }();
  var axis = direction === "vertical" ? vertical : horizontal;
  var subject = getSubject({
    page,
    withPlaceholder: null,
    axis,
    frame
  });
  var dimension = {
    descriptor,
    isCombineEnabled,
    isFixedOnPage,
    axis,
    isEnabled: isEnabled2,
    client,
    page,
    frame,
    subject
  };
  return dimension;
};
var isHomeOf = function(draggable2, destination) {
  return draggable2.descriptor.droppableId === destination.descriptor.id;
};
var getRequiredGrowthForPlaceholder = function getRequiredGrowthForPlaceholder2(droppable2, placeholderSize, draggables) {
  var axis = droppable2.axis;
  var availableSpace = droppable2.subject.page.contentBox[axis.size];
  var insideDroppable = getDraggablesInsideDroppable(droppable2.descriptor.id, draggables);
  var spaceUsed = insideDroppable.reduce(function(sum, dimension) {
    return sum + dimension.client.marginBox[axis.size];
  }, 0);
  var requiredSpace = spaceUsed + placeholderSize[axis.line];
  var needsToGrowBy = requiredSpace - availableSpace;
  if (needsToGrowBy <= 0) {
    return null;
  }
  return patch(axis.line, needsToGrowBy);
};
var withMaxScroll = function withMaxScroll2(frame, max) {
  return _extends2({}, frame, {
    scroll: _extends2({}, frame.scroll, {
      max
    })
  });
};
var addPlaceholder = function addPlaceholder2(droppable2, draggable2, draggables) {
  var frame = droppable2.frame;
  !!isHomeOf(draggable2, droppable2) ? true ? invariant(false, "Should not add placeholder space to home list") : invariant(false) : void 0;
  !!droppable2.subject.withPlaceholder ? true ? invariant(false, "Cannot add placeholder size to a subject when it already has one") : invariant(false) : void 0;
  var placeholderSize = getDisplacedBy(droppable2.axis, draggable2.displaceBy).point;
  var requiredGrowth = getRequiredGrowthForPlaceholder(droppable2, placeholderSize, draggables);
  var added = {
    placeholderSize,
    increasedBy: requiredGrowth,
    oldFrameMaxScroll: droppable2.frame ? droppable2.frame.scroll.max : null
  };
  if (!frame) {
    var _subject = getSubject({
      page: droppable2.subject.page,
      withPlaceholder: added,
      axis: droppable2.axis,
      frame: droppable2.frame
    });
    return _extends2({}, droppable2, {
      subject: _subject
    });
  }
  var maxScroll = requiredGrowth ? add(frame.scroll.max, requiredGrowth) : frame.scroll.max;
  var newFrame = withMaxScroll(frame, maxScroll);
  var subject = getSubject({
    page: droppable2.subject.page,
    withPlaceholder: added,
    axis: droppable2.axis,
    frame: newFrame
  });
  return _extends2({}, droppable2, {
    subject,
    frame: newFrame
  });
};
var removePlaceholder = function removePlaceholder2(droppable2) {
  var added = droppable2.subject.withPlaceholder;
  !added ? true ? invariant(false, "Cannot remove placeholder form subject when there was none") : invariant(false) : void 0;
  var frame = droppable2.frame;
  if (!frame) {
    var _subject2 = getSubject({
      page: droppable2.subject.page,
      axis: droppable2.axis,
      frame: null,
      withPlaceholder: null
    });
    return _extends2({}, droppable2, {
      subject: _subject2
    });
  }
  var oldMaxScroll = added.oldFrameMaxScroll;
  !oldMaxScroll ? true ? invariant(false, "Expected droppable with frame to have old max frame scroll when removing placeholder") : invariant(false) : void 0;
  var newFrame = withMaxScroll(frame, oldMaxScroll);
  var subject = getSubject({
    page: droppable2.subject.page,
    axis: droppable2.axis,
    frame: newFrame,
    withPlaceholder: null
  });
  return _extends2({}, droppable2, {
    subject,
    frame: newFrame
  });
};
var getFrame = function(droppable2) {
  var frame = droppable2.frame;
  !frame ? true ? invariant(false, "Expected Droppable to have a frame") : invariant(false) : void 0;
  return frame;
};
var throwIfSpacingChange = function throwIfSpacingChange2(old, fresh) {
  if (true) {
    var getMessage = function getMessage2(spacingType) {
      return "Cannot change the " + spacingType + " of a Droppable during a drag";
    };
    !isEqual$1(old.margin, fresh.margin) ? true ? invariant(false, getMessage("margin")) : invariant(false) : void 0;
    !isEqual$1(old.border, fresh.border) ? true ? invariant(false, getMessage("border")) : invariant(false) : void 0;
    !isEqual$1(old.padding, fresh.padding) ? true ? invariant(false, getMessage("padding")) : invariant(false) : void 0;
  }
};
var adjustBorderBoxSize = function adjustBorderBoxSize2(axis, old, fresh) {
  return {
    top: old.top,
    left: old.left,
    right: old.left + fresh.width,
    bottom: old.top + fresh.height
  };
};
var updateDroppables = function(_ref) {
  var modified = _ref.modified, existing = _ref.existing, viewport = _ref.viewport;
  if (!modified.length) {
    return existing;
  }
  var adjusted = modified.map(function(provided) {
    var raw = existing[provided.descriptor.id];
    !raw ? true ? invariant(false, "Could not locate droppable in existing droppables") : invariant(false) : void 0;
    var hasPlaceholder = Boolean(raw.subject.withPlaceholder);
    var dimension = hasPlaceholder ? removePlaceholder(raw) : raw;
    var oldClient = dimension.client;
    var newClient = provided.client;
    var oldScrollable = getFrame(dimension);
    var newScrollable = getFrame(provided);
    if (true) {
      throwIfSpacingChange(dimension.client, provided.client);
      throwIfSpacingChange(oldScrollable.frameClient, newScrollable.frameClient);
      var isFrameEqual = oldScrollable.frameClient.borderBox.height === newScrollable.frameClient.borderBox.height && oldScrollable.frameClient.borderBox.width === newScrollable.frameClient.borderBox.width;
      !isFrameEqual ? true ? invariant(false, "The width and height of your Droppable scroll container cannot change when adding or removing Draggables during a drag") : invariant(false) : void 0;
    }
    var client = createBox({
      borderBox: adjustBorderBoxSize(dimension.axis, oldClient.borderBox, newClient.borderBox),
      margin: oldClient.margin,
      border: oldClient.border,
      padding: oldClient.padding
    });
    var closest3 = {
      client: oldScrollable.frameClient,
      page: withScroll(oldScrollable.frameClient, viewport.scroll.initial),
      shouldClipSubject: oldScrollable.shouldClipSubject,
      scrollSize: newScrollable.scrollSize,
      scroll: oldScrollable.scroll.initial
    };
    var withSizeChanged = getDroppableDimension({
      descriptor: provided.descriptor,
      isEnabled: provided.isEnabled,
      isCombineEnabled: provided.isCombineEnabled,
      isFixedOnPage: provided.isFixedOnPage,
      direction: provided.axis.direction,
      client,
      page: withScroll(client, viewport.scroll.initial),
      closest: closest3
    });
    var scrolled = scrollDroppable(withSizeChanged, newScrollable.scroll.current);
    return scrolled;
  });
  var result = _extends2({}, existing, toDroppableMap(adjusted));
  return result;
};
var withNoAnimatedDisplacement = function(impact) {
  var displaced = impact.movement.displaced;
  if (!displaced.length) {
    return impact;
  }
  var withoutAnimation = displaced.map(function(displacement) {
    if (!displacement.isVisible) {
      return displacement;
    }
    if (!displacement.shouldAnimate) {
      return displacement;
    }
    return _extends2({}, displacement, {
      shouldAnimate: false
    });
  });
  var result = _extends2({}, impact, {
    movement: _extends2({}, impact.movement, {
      displaced: withoutAnimation,
      map: getDisplacementMap(withoutAnimation)
    })
  });
  return result;
};
var patchDroppableMap = function(droppables, updated) {
  var _extends22;
  return _extends2({}, droppables, (_extends22 = {}, _extends22[updated.descriptor.id] = updated, _extends22));
};
var clearUnusedPlaceholder = function clearUnusedPlaceholder2(_ref) {
  var previousImpact = _ref.previousImpact, impact = _ref.impact, droppables = _ref.droppables;
  var last = whatIsDraggedOver(previousImpact);
  var now = whatIsDraggedOver(impact);
  if (!last) {
    return droppables;
  }
  if (last === now) {
    return droppables;
  }
  var lastDroppable = droppables[last];
  if (!lastDroppable.subject.withPlaceholder) {
    return droppables;
  }
  var updated = removePlaceholder(lastDroppable);
  return patchDroppableMap(droppables, updated);
};
var recomputePlaceholders = function(_ref2) {
  var draggable2 = _ref2.draggable, draggables = _ref2.draggables, droppables = _ref2.droppables, previousImpact = _ref2.previousImpact, impact = _ref2.impact;
  var cleaned = clearUnusedPlaceholder({
    previousImpact,
    impact,
    droppables
  });
  var isOver = whatIsDraggedOver(impact);
  if (!isOver) {
    return cleaned;
  }
  var droppable2 = droppables[isOver];
  if (isHomeOf(draggable2, droppable2)) {
    return cleaned;
  }
  if (droppable2.subject.withPlaceholder) {
    return cleaned;
  }
  var patched = addPlaceholder(droppable2, draggable2, draggables);
  return patchDroppableMap(cleaned, patched);
};
var timingsKey = "Processing dynamic changes";
var publishWhileDragging = function(_ref) {
  var _extends22, _extends3;
  var state = _ref.state, published = _ref.published;
  start(timingsKey);
  var updatedDroppables = updateDroppables({
    modified: published.modified,
    existing: state.dimensions.droppables,
    viewport: state.viewport
  });
  var draggables = updateDraggables({
    updatedDroppables,
    criticalId: state.critical.draggable.id,
    existing: state.dimensions.draggables,
    additions: published.additions,
    removals: published.removals,
    viewport: state.viewport
  });
  var critical = {
    draggable: draggables[state.critical.draggable.id].descriptor,
    droppable: updatedDroppables[state.critical.droppable.id].descriptor
  };
  var original = state.dimensions.draggables[critical.draggable.id];
  var updated = draggables[critical.draggable.id];
  var droppables = recomputePlaceholders({
    draggable: updated,
    draggables,
    droppables: updatedDroppables,
    previousImpact: state.impact,
    impact: state.impact
  });
  var dimensions = {
    draggables,
    droppables
  };
  var _getDragPositions = getDragPositions({
    initial: state.initial,
    current: state.current,
    oldClientBorderBoxCenter: original.client.borderBox.center,
    newClientBorderBoxCenter: updated.client.borderBox.center,
    viewport: state.viewport
  }), initial = _getDragPositions.initial, current = _getDragPositions.current;
  var _getHomeOnLift = getHomeOnLift({
    draggable: updated,
    home: dimensions.droppables[critical.droppable.id],
    draggables: dimensions.draggables,
    viewport: state.viewport
  }), homeImpact = _getHomeOnLift.impact, onLift = _getHomeOnLift.onLift;
  var impact = withNoAnimatedDisplacement(getDragImpact({
    pageBorderBoxCenter: current.page.borderBoxCenter,
    draggable: updated,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact: homeImpact,
    viewport: state.viewport,
    userDirection: state.userDirection,
    onLift
  }));
  var isOrphaned = Boolean(state.movementMode === "SNAP" && !whatIsDraggedOver(impact));
  !!isOrphaned ? true ? invariant(false, "Dragging item no longer has a valid merge/destination after a dynamic update. This is not supported") : invariant(false) : void 0;
  finish(timingsKey);
  var draggingState = _extends2({
    phase: "DRAGGING"
  }, state, (_extends22 = {}, _extends22["phase"] = "DRAGGING", _extends22.critical = critical, _extends22.current = current, _extends22.initial = initial, _extends22.impact = impact, _extends22.dimensions = dimensions, _extends22.onLift = onLift, _extends22.onLiftImpact = homeImpact, _extends22.forceShouldAnimate = false, _extends22));
  if (state.phase === "COLLECTING") {
    return draggingState;
  }
  var dropPending3 = _extends2({
    phase: "DROP_PENDING"
  }, draggingState, (_extends3 = {}, _extends3["phase"] = "DROP_PENDING", _extends3.reason = state.reason, _extends3.isWaiting = false, _extends3));
  return dropPending3;
};
var forward = {
  vertical: "down",
  horizontal: "right"
};
var backward = {
  vertical: "up",
  horizontal: "left"
};
var moveToNextCombine = function(_ref) {
  var isMovingForward = _ref.isMovingForward, isInHomeList = _ref.isInHomeList, draggable2 = _ref.draggable, destination = _ref.destination, originalInsideDestination = _ref.insideDestination, previousImpact = _ref.previousImpact;
  if (!destination.isCombineEnabled) {
    return null;
  }
  if (previousImpact.merge) {
    return null;
  }
  var location = previousImpact.destination;
  !location ? true ? invariant(false, "Need a previous location to move from into a combine") : invariant(false) : void 0;
  var currentIndex = location.index;
  var currentInsideDestination = function() {
    var shallow = originalInsideDestination.slice();
    if (isInHomeList) {
      shallow.splice(draggable2.descriptor.index, 1);
    }
    shallow.splice(location.index, 0, draggable2);
    return shallow;
  }();
  var targetIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
  if (targetIndex < 0) {
    return null;
  }
  if (targetIndex > currentInsideDestination.length - 1) {
    return null;
  }
  var target = currentInsideDestination[targetIndex];
  !(target !== draggable2) ? true ? invariant(false, "Cannot combine with self") : invariant(false) : void 0;
  var merge = {
    whenEntered: isMovingForward ? forward : backward,
    combine: {
      draggableId: target.descriptor.id,
      droppableId: destination.descriptor.id
    }
  };
  var impact = {
    movement: previousImpact.movement,
    destination: null,
    merge
  };
  return impact;
};
var addClosest = function addClosest2(add3, displaced) {
  var added = {
    draggableId: add3.descriptor.id,
    isVisible: true,
    shouldAnimate: true
  };
  return [added].concat(displaced);
};
var removeClosest = function removeClosest2(displaced) {
  return displaced.slice(1);
};
var fromReorder = function(_ref) {
  var isMovingForward = _ref.isMovingForward, isInHomeList = _ref.isInHomeList, draggable2 = _ref.draggable, initialInside = _ref.insideDestination, location = _ref.location;
  var insideDestination = initialInside.slice();
  var currentIndex = location.index;
  var isInForeignList = !isInHomeList;
  if (isInForeignList) {
    insideDestination.splice(location.index, 0, draggable2);
  }
  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
  if (proposedIndex < 0) {
    return null;
  }
  if (proposedIndex > insideDestination.length - 1) {
    return null;
  }
  return {
    proposedIndex,
    modifyDisplacement: true
  };
};
var fromCombine = function(_ref) {
  var isMovingForward = _ref.isMovingForward, destination = _ref.destination, previousImpact = _ref.previousImpact, draggables = _ref.draggables, merge = _ref.merge, onLift = _ref.onLift;
  if (!destination.isCombineEnabled) {
    return null;
  }
  var movement = previousImpact.movement;
  var combineId = merge.combine.draggableId;
  var combine2 = draggables[combineId];
  var combineIndex = combine2.descriptor.index;
  var wasDisplacedAtStart = didStartDisplaced(combineId, onLift);
  if (wasDisplacedAtStart) {
    var hasDisplacedFromStart = !movement.map[combineId];
    if (hasDisplacedFromStart) {
      if (isMovingForward) {
        return {
          proposedIndex: combineIndex,
          modifyDisplacement: false
        };
      }
      return {
        proposedIndex: combineIndex - 1,
        modifyDisplacement: true
      };
    }
    if (isMovingForward) {
      return {
        proposedIndex: combineIndex,
        modifyDisplacement: true
      };
    }
    return {
      proposedIndex: combineIndex - 1,
      modifyDisplacement: false
    };
  }
  var isDisplaced = Boolean(movement.map[combineId]);
  if (isDisplaced) {
    if (isMovingForward) {
      return {
        proposedIndex: combineIndex + 1,
        modifyDisplacement: true
      };
    }
    return {
      proposedIndex: combineIndex,
      modifyDisplacement: false
    };
  }
  if (isMovingForward) {
    return {
      proposedIndex: combineIndex + 1,
      modifyDisplacement: false
    };
  }
  return {
    proposedIndex: combineIndex,
    modifyDisplacement: true
  };
};
var moveToNextIndex = function(_ref) {
  var isMovingForward = _ref.isMovingForward, isInHomeList = _ref.isInHomeList, draggable2 = _ref.draggable, draggables = _ref.draggables, destination = _ref.destination, insideDestination = _ref.insideDestination, previousImpact = _ref.previousImpact, onLift = _ref.onLift;
  var instruction = function() {
    if (previousImpact.destination) {
      return fromReorder({
        isMovingForward,
        isInHomeList,
        draggable: draggable2,
        location: previousImpact.destination,
        insideDestination
      });
    }
    if (previousImpact.merge) {
      return fromCombine({
        isMovingForward,
        destination,
        previousImpact,
        draggables,
        merge: previousImpact.merge,
        onLift
      });
    }
    return null;
  }();
  if (instruction == null) {
    return null;
  }
  var proposedIndex = instruction.proposedIndex, modifyDisplacement = instruction.modifyDisplacement;
  var displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
  var displaced = function() {
    var lastDisplaced = previousImpact.movement.displaced;
    if (!modifyDisplacement) {
      return lastDisplaced;
    }
    if (isMovingForward) {
      return removeClosest(lastDisplaced);
    }
    var withoutDraggable = removeDraggableFromList(draggable2, insideDestination);
    var atProposedIndex = withoutDraggable[proposedIndex];
    return addClosest(atProposedIndex, lastDisplaced);
  }();
  return {
    movement: {
      displacedBy,
      displaced,
      map: getDisplacementMap(displaced)
    },
    destination: {
      droppableId: destination.descriptor.id,
      index: proposedIndex
    },
    merge: null
  };
};
var whenCombining = function(_ref) {
  var combine2 = _ref.combine, onLift = _ref.onLift, movement = _ref.movement, draggables = _ref.draggables;
  var combineWith = combine2.draggableId;
  var center = draggables[combineWith].page.borderBox.center;
  var displaceBy = getCombinedItemDisplacement({
    displaced: movement.map,
    onLift,
    combineWith,
    displacedBy: movement.displacedBy
  });
  return add(center, displaceBy);
};
var distanceFromStartToBorderBoxCenter = function distanceFromStartToBorderBoxCenter2(axis, box) {
  return box.margin[axis.start] + box.borderBox[axis.size] / 2;
};
var distanceFromEndToBorderBoxCenter = function distanceFromEndToBorderBoxCenter2(axis, box) {
  return box.margin[axis.end] + box.borderBox[axis.size] / 2;
};
var getCrossAxisBorderBoxCenter = function getCrossAxisBorderBoxCenter2(axis, target, isMoving) {
  return target[axis.crossAxisStart] + isMoving.margin[axis.crossAxisStart] + isMoving.borderBox[axis.crossAxisSize] / 2;
};
var goAfter = function goAfter2(_ref) {
  var axis = _ref.axis, moveRelativeTo = _ref.moveRelativeTo, isMoving = _ref.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.end] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goBefore = function goBefore2(_ref2) {
  var axis = _ref2.axis, moveRelativeTo = _ref2.moveRelativeTo, isMoving = _ref2.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.start] - distanceFromEndToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goIntoStart = function goIntoStart2(_ref3) {
  var axis = _ref3.axis, moveInto = _ref3.moveInto, isMoving = _ref3.isMoving;
  return patch(axis.line, moveInto.contentBox[axis.start] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveInto.contentBox, isMoving));
};
var whenReordering = function(_ref) {
  var movement = _ref.movement, draggable2 = _ref.draggable, draggables = _ref.draggables, droppable2 = _ref.droppable, onLift = _ref.onLift;
  var insideDestination = getDraggablesInsideDroppable(droppable2.descriptor.id, draggables);
  var draggablePage = draggable2.page;
  var axis = droppable2.axis;
  if (!insideDestination.length) {
    return goIntoStart({
      axis,
      moveInto: droppable2.page,
      isMoving: draggablePage
    });
  }
  var displaced = movement.displaced, displacedBy = movement.displacedBy;
  if (displaced.length) {
    var closestAfter = draggables[displaced[0].draggableId];
    if (didStartDisplaced(closestAfter.descriptor.id, onLift)) {
      return goBefore({
        axis,
        moveRelativeTo: closestAfter.page,
        isMoving: draggablePage
      });
    }
    var withDisplacement = offset(closestAfter.page, displacedBy.point);
    return goBefore({
      axis,
      moveRelativeTo: withDisplacement,
      isMoving: draggablePage
    });
  }
  var last = insideDestination[insideDestination.length - 1];
  if (last.descriptor.id === draggable2.descriptor.id) {
    return draggablePage.borderBox.center;
  }
  if (didStartDisplaced(last.descriptor.id, onLift)) {
    var page = offset(last.page, negate(onLift.displacedBy.point));
    return goAfter({
      axis,
      moveRelativeTo: page,
      isMoving: draggablePage
    });
  }
  return goAfter({
    axis,
    moveRelativeTo: last.page,
    isMoving: draggablePage
  });
};
var withDroppableDisplacement = function(droppable2, point) {
  var frame = droppable2.frame;
  if (!frame) {
    return point;
  }
  return add(point, frame.scroll.diff.displacement);
};
var getResultWithoutDroppableDisplacement = function getResultWithoutDroppableDisplacement2(_ref) {
  var impact = _ref.impact, draggable2 = _ref.draggable, droppable2 = _ref.droppable, draggables = _ref.draggables, onLift = _ref.onLift;
  var merge = impact.merge;
  var destination = impact.destination;
  var original = draggable2.page.borderBox.center;
  if (!droppable2) {
    return original;
  }
  if (destination) {
    return whenReordering({
      movement: impact.movement,
      draggable: draggable2,
      draggables,
      droppable: droppable2,
      onLift
    });
  }
  if (merge) {
    return whenCombining({
      movement: impact.movement,
      combine: merge.combine,
      draggables,
      onLift
    });
  }
  return original;
};
var getPageBorderBoxCenterFromImpact = function(args) {
  var withoutDisplacement = getResultWithoutDroppableDisplacement(args);
  var droppable2 = args.droppable;
  var withDisplacement = droppable2 ? withDroppableDisplacement(droppable2, withoutDisplacement) : withoutDisplacement;
  return withDisplacement;
};
var scrollViewport = function(viewport, newScroll) {
  var diff = subtract(newScroll, viewport.scroll.initial);
  var displacement = negate(diff);
  var frame = getRect({
    top: newScroll.y,
    bottom: newScroll.y + viewport.frame.height,
    left: newScroll.x,
    right: newScroll.x + viewport.frame.width
  });
  var updated = {
    frame,
    scroll: {
      initial: viewport.scroll.initial,
      max: viewport.scroll.max,
      current: newScroll,
      diff: {
        value: diff,
        displacement
      }
    }
  };
  return updated;
};
var withNewDisplacement = function(impact, displaced) {
  return _extends2({}, impact, {
    movement: _extends2({}, impact.movement, {
      displaced,
      map: getDisplacementMap(displaced)
    })
  });
};
var speculativelyIncrease = function(_ref) {
  var impact = _ref.impact, viewport = _ref.viewport, destination = _ref.destination, draggables = _ref.draggables, maxScrollChange = _ref.maxScrollChange, onLift = _ref.onLift;
  var displaced = impact.movement.displaced;
  var scrolledViewport = scrollViewport(viewport, add(viewport.scroll.current, maxScrollChange));
  var scrolledDroppable = destination.frame ? scrollDroppable(destination, add(destination.frame.scroll.current, maxScrollChange)) : destination;
  var updated = displaced.map(function(entry) {
    if (entry.isVisible) {
      return entry;
    }
    var draggable2 = draggables[entry.draggableId];
    var withScrolledViewport = getDisplacement({
      draggable: draggable2,
      destination,
      previousImpact: impact,
      viewport: scrolledViewport.frame,
      onLift,
      forceShouldAnimate: false
    });
    if (withScrolledViewport.isVisible) {
      return withScrolledViewport;
    }
    var withScrolledDroppable = getDisplacement({
      draggable: draggable2,
      destination: scrolledDroppable,
      previousImpact: impact,
      viewport: viewport.frame,
      onLift,
      forceShouldAnimate: false
    });
    if (withScrolledDroppable.isVisible) {
      return withScrolledDroppable;
    }
    return entry;
  });
  return withNewDisplacement(impact, updated);
};
var withViewportDisplacement = function(viewport, point) {
  return add(viewport.scroll.diff.displacement, point);
};
var getClientFromPageBorderBoxCenter = function(_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter, draggable2 = _ref.draggable, viewport = _ref.viewport;
  var withoutPageScrollChange = withViewportDisplacement(viewport, pageBorderBoxCenter);
  var offset3 = subtract(withoutPageScrollChange, draggable2.page.borderBox.center);
  return add(draggable2.client.borderBox.center, offset3);
};
var isTotallyVisibleInNewLocation = function(_ref) {
  var draggable2 = _ref.draggable, destination = _ref.destination, newPageBorderBoxCenter = _ref.newPageBorderBoxCenter, viewport = _ref.viewport, withDroppableDisplacement2 = _ref.withDroppableDisplacement, _ref$onlyOnMainAxis = _ref.onlyOnMainAxis, onlyOnMainAxis = _ref$onlyOnMainAxis === void 0 ? false : _ref$onlyOnMainAxis;
  var changeNeeded = subtract(newPageBorderBoxCenter, draggable2.page.borderBox.center);
  var shifted = offsetByPosition(draggable2.page.borderBox, changeNeeded);
  var args = {
    target: shifted,
    destination,
    withDroppableDisplacement: withDroppableDisplacement2,
    viewport
  };
  return onlyOnMainAxis ? isTotallyVisibleOnAxis(args) : isTotallyVisible(args);
};
var moveToNextPlace = function(_ref) {
  var isMovingForward = _ref.isMovingForward, draggable2 = _ref.draggable, destination = _ref.destination, draggables = _ref.draggables, previousImpact = _ref.previousImpact, viewport = _ref.viewport, previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter, previousClientSelection = _ref.previousClientSelection, onLift = _ref.onLift;
  if (!destination.isEnabled) {
    return null;
  }
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var isInHomeList = isHomeOf(draggable2, destination);
  var impact = moveToNextCombine({
    isInHomeList,
    isMovingForward,
    draggable: draggable2,
    destination,
    insideDestination,
    previousImpact
  }) || moveToNextIndex({
    isMovingForward,
    isInHomeList,
    draggable: draggable2,
    draggables,
    destination,
    insideDestination,
    previousImpact,
    onLift
  });
  if (!impact) {
    return null;
  }
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact,
    draggable: draggable2,
    droppable: destination,
    draggables,
    onLift
  });
  var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
    draggable: draggable2,
    destination,
    newPageBorderBoxCenter: pageBorderBoxCenter,
    viewport: viewport.frame,
    withDroppableDisplacement: false,
    onlyOnMainAxis: true
  });
  if (isVisibleInNewLocation) {
    var clientSelection = getClientFromPageBorderBoxCenter({
      pageBorderBoxCenter,
      draggable: draggable2,
      viewport
    });
    return {
      clientSelection,
      impact,
      scrollJumpRequest: null
    };
  }
  var distance3 = subtract(pageBorderBoxCenter, previousPageBorderBoxCenter);
  var cautious = speculativelyIncrease({
    impact,
    viewport,
    destination,
    draggables,
    maxScrollChange: distance3,
    onLift
  });
  return {
    clientSelection: previousClientSelection,
    impact: cautious,
    scrollJumpRequest: distance3
  };
};
var getKnownActive = function getKnownActive2(droppable2) {
  var rect = droppable2.subject.active;
  !rect ? true ? invariant(false, "Cannot get clipped area from droppable") : invariant(false) : void 0;
  return rect;
};
var getBestCrossAxisDroppable = function(_ref) {
  var isMovingForward = _ref.isMovingForward, pageBorderBoxCenter = _ref.pageBorderBoxCenter, source = _ref.source, droppables = _ref.droppables, viewport = _ref.viewport;
  var active = source.subject.active;
  if (!active) {
    return null;
  }
  var axis = source.axis;
  var isBetweenSourceClipped = isWithin(active[axis.start], active[axis.end]);
  var candidates = toDroppableList(droppables).filter(function(droppable2) {
    return droppable2 !== source;
  }).filter(function(droppable2) {
    return droppable2.isEnabled;
  }).filter(function(droppable2) {
    return Boolean(droppable2.subject.active);
  }).filter(function(droppable2) {
    return isPartiallyVisibleThroughFrame(viewport.frame)(getKnownActive(droppable2));
  }).filter(function(droppable2) {
    var activeOfTarget = getKnownActive(droppable2);
    if (isMovingForward) {
      return active[axis.crossAxisEnd] < activeOfTarget[axis.crossAxisEnd];
    }
    return activeOfTarget[axis.crossAxisStart] < active[axis.crossAxisStart];
  }).filter(function(droppable2) {
    var activeOfTarget = getKnownActive(droppable2);
    var isBetweenDestinationClipped = isWithin(activeOfTarget[axis.start], activeOfTarget[axis.end]);
    return isBetweenSourceClipped(activeOfTarget[axis.start]) || isBetweenSourceClipped(activeOfTarget[axis.end]) || isBetweenDestinationClipped(active[axis.start]) || isBetweenDestinationClipped(active[axis.end]);
  }).sort(function(a, b) {
    var first = getKnownActive(a)[axis.crossAxisStart];
    var second = getKnownActive(b)[axis.crossAxisStart];
    if (isMovingForward) {
      return first - second;
    }
    return second - first;
  }).filter(function(droppable2, index, array) {
    return getKnownActive(droppable2)[axis.crossAxisStart] === getKnownActive(array[0])[axis.crossAxisStart];
  });
  if (!candidates.length) {
    return null;
  }
  if (candidates.length === 1) {
    return candidates[0];
  }
  var contains = candidates.filter(function(droppable2) {
    var isWithinDroppable = isWithin(getKnownActive(droppable2)[axis.start], getKnownActive(droppable2)[axis.end]);
    return isWithinDroppable(pageBorderBoxCenter[axis.line]);
  });
  if (contains.length === 1) {
    return contains[0];
  }
  if (contains.length > 1) {
    return contains.sort(function(a, b) {
      return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
    })[0];
  }
  return candidates.sort(function(a, b) {
    var first = closest(pageBorderBoxCenter, getCorners(getKnownActive(a)));
    var second = closest(pageBorderBoxCenter, getCorners(getKnownActive(b)));
    if (first !== second) {
      return first - second;
    }
    return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
  })[0];
};
var getCurrentPageBorderBoxCenter = function getCurrentPageBorderBoxCenter2(draggable2, onLift) {
  var original = draggable2.page.borderBox.center;
  return didStartDisplaced(draggable2.descriptor.id, onLift) ? subtract(original, onLift.displacedBy.point) : original;
};
var getCurrentPageBorderBox = function getCurrentPageBorderBox2(draggable2, onLift) {
  var original = draggable2.page.borderBox;
  return didStartDisplaced(draggable2.descriptor.id, onLift) ? offsetByPosition(original, negate(onLift.displacedBy.point)) : original;
};
var getClosestDraggable = function(_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter, viewport = _ref.viewport, destination = _ref.destination, insideDestination = _ref.insideDestination, onLift = _ref.onLift;
  var sorted = insideDestination.filter(function(draggable2) {
    return isTotallyVisible({
      target: getCurrentPageBorderBox(draggable2, onLift),
      destination,
      viewport: viewport.frame,
      withDroppableDisplacement: true
    });
  }).sort(function(a, b) {
    var distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(a, onLift)));
    var distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(b, onLift)));
    if (distanceToA < distanceToB) {
      return -1;
    }
    if (distanceToB < distanceToA) {
      return 1;
    }
    return a.descriptor.index - b.descriptor.index;
  });
  return sorted[0] || null;
};
var moveToNewDroppable = function(_ref) {
  var previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter, moveRelativeTo = _ref.moveRelativeTo, insideDestination = _ref.insideDestination, draggable2 = _ref.draggable, draggables = _ref.draggables, destination = _ref.destination, previousImpact = _ref.previousImpact, viewport = _ref.viewport, onLift = _ref.onLift;
  if (!moveRelativeTo) {
    if (insideDestination.length) {
      return null;
    }
    var proposed = {
      movement: noMovement,
      destination: {
        droppableId: destination.descriptor.id,
        index: 0
      },
      merge: null
    };
    var proposedPageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
      impact: proposed,
      draggable: draggable2,
      droppable: destination,
      draggables,
      onLift
    });
    var withPlaceholder = isHomeOf(draggable2, destination) ? destination : addPlaceholder(destination, draggable2, draggables);
    var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
      draggable: draggable2,
      destination: withPlaceholder,
      newPageBorderBoxCenter: proposedPageBorderBoxCenter,
      viewport: viewport.frame,
      withDroppableDisplacement: false,
      onlyOnMainAxis: true
    });
    return isVisibleInNewLocation ? proposed : null;
  }
  var isGoingBeforeTarget = Boolean(previousPageBorderBoxCenter[destination.axis.line] < moveRelativeTo.page.borderBox.center[destination.axis.line]);
  var targetIndex = insideDestination.indexOf(moveRelativeTo);
  !(targetIndex !== -1) ? true ? invariant(false, "Cannot find target in list") : invariant(false) : void 0;
  var proposedIndex = function() {
    if (moveRelativeTo.descriptor.id === draggable2.descriptor.id) {
      return targetIndex;
    }
    if (isGoingBeforeTarget) {
      return targetIndex;
    }
    return targetIndex + 1;
  }();
  var displaced = removeDraggableFromList(draggable2, insideDestination).slice(proposedIndex).map(function(dimension) {
    return getDisplacement({
      draggable: dimension,
      destination,
      viewport: viewport.frame,
      previousImpact,
      onLift
    });
  });
  var displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
  var impact = {
    movement: {
      displacedBy,
      displaced,
      map: getDisplacementMap(displaced)
    },
    destination: {
      droppableId: destination.descriptor.id,
      index: proposedIndex
    },
    merge: null
  };
  return impact;
};
var moveCrossAxis = function(_ref) {
  var isMovingForward = _ref.isMovingForward, previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter, draggable2 = _ref.draggable, isOver = _ref.isOver, draggables = _ref.draggables, droppables = _ref.droppables, previousImpact = _ref.previousImpact, viewport = _ref.viewport, onLift = _ref.onLift;
  var destination = getBestCrossAxisDroppable({
    isMovingForward,
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    source: isOver,
    droppables,
    viewport
  });
  if (!destination) {
    return null;
  }
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var moveRelativeTo = getClosestDraggable({
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    viewport,
    destination,
    insideDestination,
    onLift
  });
  var impact = moveToNewDroppable({
    previousPageBorderBoxCenter,
    destination,
    draggable: draggable2,
    draggables,
    moveRelativeTo,
    insideDestination,
    previousImpact,
    viewport,
    onLift
  });
  if (!impact) {
    return null;
  }
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact,
    draggable: draggable2,
    droppable: destination,
    draggables,
    onLift
  });
  var clientSelection = getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter,
    draggable: draggable2,
    viewport
  });
  return {
    clientSelection,
    impact,
    scrollJumpRequest: null
  };
};
var getDroppableOver$1 = function getDroppableOver2(impact, droppables) {
  var id = whatIsDraggedOver(impact);
  return id ? droppables[id] : null;
};
var moveInDirection = function(_ref) {
  var state = _ref.state, type = _ref.type;
  var isActuallyOver = getDroppableOver$1(state.impact, state.dimensions.droppables);
  var isMainAxisMovementAllowed = Boolean(isActuallyOver);
  var home2 = state.dimensions.droppables[state.critical.droppable.id];
  var isOver = isActuallyOver || home2;
  var direction = isOver.axis.direction;
  var isMovingOnMainAxis = direction === "vertical" && (type === "MOVE_UP" || type === "MOVE_DOWN") || direction === "horizontal" && (type === "MOVE_LEFT" || type === "MOVE_RIGHT");
  if (isMovingOnMainAxis && !isMainAxisMovementAllowed) {
    return null;
  }
  var isMovingForward = type === "MOVE_DOWN" || type === "MOVE_RIGHT";
  var draggable2 = state.dimensions.draggables[state.critical.draggable.id];
  var previousPageBorderBoxCenter = state.current.page.borderBoxCenter;
  var _state$dimensions = state.dimensions, draggables = _state$dimensions.draggables, droppables = _state$dimensions.droppables;
  return isMovingOnMainAxis ? moveToNextPlace({
    isMovingForward,
    previousPageBorderBoxCenter,
    draggable: draggable2,
    destination: isOver,
    draggables,
    viewport: state.viewport,
    previousClientSelection: state.current.client.selection,
    previousImpact: state.impact,
    onLift: state.onLift
  }) : moveCrossAxis({
    isMovingForward,
    previousPageBorderBoxCenter,
    draggable: draggable2,
    isOver,
    draggables,
    droppables,
    previousImpact: state.impact,
    viewport: state.viewport,
    onLift: state.onLift
  });
};
function isMovementAllowed(state) {
  return state.phase === "DRAGGING" || state.phase === "COLLECTING";
}
var getVertical = function getVertical2(previous, diff) {
  if (diff === 0) {
    return previous;
  }
  return diff > 0 ? "down" : "up";
};
var getHorizontal = function getHorizontal2(previous, diff) {
  if (diff === 0) {
    return previous;
  }
  return diff > 0 ? "right" : "left";
};
var getUserDirection = function(previous, oldPageBorderBoxCenter, newPageBorderBoxCenter) {
  var diff = subtract(newPageBorderBoxCenter, oldPageBorderBoxCenter);
  return {
    horizontal: getHorizontal(previous.horizontal, diff.x),
    vertical: getVertical(previous.vertical, diff.y)
  };
};
var update = function(_ref) {
  var state = _ref.state, forcedClientSelection = _ref.clientSelection, forcedDimensions = _ref.dimensions, forcedViewport = _ref.viewport, forcedImpact = _ref.impact, scrollJumpRequest = _ref.scrollJumpRequest;
  var viewport = forcedViewport || state.viewport;
  var currentWindowScroll = viewport.scroll.current;
  var dimensions = forcedDimensions || state.dimensions;
  var clientSelection = forcedClientSelection || state.current.client.selection;
  var offset3 = subtract(clientSelection, state.initial.client.selection);
  var client = {
    offset: offset3,
    selection: clientSelection,
    borderBoxCenter: add(state.initial.client.borderBoxCenter, offset3)
  };
  var page = {
    selection: add(client.selection, currentWindowScroll),
    borderBoxCenter: add(client.borderBoxCenter, currentWindowScroll)
  };
  var current = {
    client,
    page
  };
  var userDirection = getUserDirection(state.userDirection, state.current.page.borderBoxCenter, current.page.borderBoxCenter);
  if (state.phase === "COLLECTING") {
    return _extends2({
      phase: "COLLECTING"
    }, state, {
      dimensions,
      viewport,
      current,
      userDirection
    });
  }
  var draggable2 = dimensions.draggables[state.critical.draggable.id];
  var newImpact = forcedImpact || getDragImpact({
    pageBorderBoxCenter: page.borderBoxCenter,
    draggable: draggable2,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact: state.impact,
    viewport,
    userDirection,
    onLift: state.onLift
  });
  var withUpdatedPlaceholders = recomputePlaceholders({
    draggable: draggable2,
    impact: newImpact,
    previousImpact: state.impact,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables
  });
  var result = _extends2({}, state, {
    current,
    userDirection,
    dimensions: {
      draggables: dimensions.draggables,
      droppables: withUpdatedPlaceholders
    },
    impact: newImpact,
    viewport,
    scrollJumpRequest: scrollJumpRequest || null,
    forceShouldAnimate: scrollJumpRequest ? false : null
  });
  return result;
};
var recompute = function(_ref) {
  var impact = _ref.impact, viewport = _ref.viewport, destination = _ref.destination, draggables = _ref.draggables, onLift = _ref.onLift, forceShouldAnimate = _ref.forceShouldAnimate;
  var updated = impact.movement.displaced.map(function(entry) {
    return getDisplacement({
      draggable: draggables[entry.draggableId],
      destination,
      previousImpact: impact,
      viewport: viewport.frame,
      onLift,
      forceShouldAnimate
    });
  });
  return withNewDisplacement(impact, updated);
};
var getClientBorderBoxCenter = function(_ref) {
  var impact = _ref.impact, draggable2 = _ref.draggable, droppable2 = _ref.droppable, draggables = _ref.draggables, viewport = _ref.viewport, onLift = _ref.onLift;
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact,
    draggable: draggable2,
    draggables,
    droppable: droppable2,
    onLift
  });
  return getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter,
    draggable: draggable2,
    viewport
  });
};
var refreshSnap = function(_ref) {
  var state = _ref.state, forcedDimensions = _ref.dimensions, forcedViewport = _ref.viewport;
  !(state.movementMode === "SNAP") ? true ? invariant(false) : invariant(false) : void 0;
  var needsVisibilityCheck = state.impact;
  var viewport = forcedViewport || state.viewport;
  var dimensions = forcedDimensions || state.dimensions;
  var draggables = dimensions.draggables, droppables = dimensions.droppables;
  var draggable2 = draggables[state.critical.draggable.id];
  var isOver = whatIsDraggedOver(needsVisibilityCheck);
  !isOver ? true ? invariant(false, "Must be over a destination in SNAP movement mode") : invariant(false) : void 0;
  var destination = droppables[isOver];
  var impact = recompute({
    impact: needsVisibilityCheck,
    viewport,
    destination,
    draggables,
    onLift: state.onLift
  });
  var clientSelection = getClientBorderBoxCenter({
    impact,
    draggable: draggable2,
    droppable: destination,
    draggables,
    viewport,
    onLift: state.onLift
  });
  return update({
    impact,
    clientSelection,
    state,
    dimensions,
    viewport
  });
};
var patchDimensionMap = function(dimensions, updated) {
  return {
    draggables: dimensions.draggables,
    droppables: patchDroppableMap(dimensions.droppables, updated)
  };
};
var isSnapping = function isSnapping2(state) {
  return state.movementMode === "SNAP";
};
var postDroppableChange = function postDroppableChange2(state, updated, isEnabledChanging) {
  var dimensions = patchDimensionMap(state.dimensions, updated);
  if (!isSnapping(state) || isEnabledChanging) {
    return update({
      state,
      dimensions
    });
  }
  return refreshSnap({
    state,
    dimensions
  });
};
var idle = {
  phase: "IDLE",
  completed: null,
  shouldFlush: false
};
var reducer = function(state, action) {
  if (state === void 0) {
    state = idle;
  }
  if (action.type === "CLEAN") {
    return _extends2({}, idle, {
      shouldFlush: action.payload.shouldFlush
    });
  }
  if (action.type === "INITIAL_PUBLISH") {
    !(state.phase === "IDLE") ? true ? invariant(false, "INITIAL_PUBLISH must come after a IDLE phase") : invariant(false) : void 0;
    var _action$payload = action.payload, critical = _action$payload.critical, clientSelection = _action$payload.clientSelection, viewport = _action$payload.viewport, dimensions = _action$payload.dimensions, movementMode = _action$payload.movementMode;
    var draggable2 = dimensions.draggables[critical.draggable.id];
    var home2 = dimensions.droppables[critical.droppable.id];
    var client = {
      selection: clientSelection,
      borderBoxCenter: draggable2.client.borderBox.center,
      offset: origin
    };
    var initial = {
      client,
      page: {
        selection: add(client.selection, viewport.scroll.initial),
        borderBoxCenter: add(client.selection, viewport.scroll.initial)
      }
    };
    var isWindowScrollAllowed = toDroppableList(dimensions.droppables).every(function(item) {
      return !item.isFixedOnPage;
    });
    var _getHomeOnLift = getHomeOnLift({
      draggable: draggable2,
      home: home2,
      draggables: dimensions.draggables,
      viewport
    }), impact = _getHomeOnLift.impact, onLift = _getHomeOnLift.onLift;
    var result = {
      phase: "DRAGGING",
      isDragging: true,
      critical,
      movementMode,
      dimensions,
      initial,
      current: initial,
      isWindowScrollAllowed,
      impact,
      onLift,
      onLiftImpact: impact,
      viewport,
      userDirection: forward,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
    return result;
  }
  if (action.type === "COLLECTION_STARTING") {
    var _extends22;
    if (state.phase === "COLLECTING" || state.phase === "DROP_PENDING") {
      return state;
    }
    !(state.phase === "DRAGGING") ? true ? invariant(false, "Collection cannot start from phase " + state.phase) : invariant(false) : void 0;
    var _result = _extends2({
      phase: "COLLECTING"
    }, state, (_extends22 = {}, _extends22["phase"] = "COLLECTING", _extends22));
    return _result;
  }
  if (action.type === "PUBLISH_WHILE_DRAGGING") {
    !(state.phase === "COLLECTING" || state.phase === "DROP_PENDING") ? true ? invariant(false, "Unexpected " + action.type + " received in phase " + state.phase) : invariant(false) : void 0;
    return publishWhileDragging({
      state,
      published: action.payload
    });
  }
  if (action.type === "MOVE") {
    if (state.phase === "DROP_PENDING") {
      return state;
    }
    !isMovementAllowed(state) ? true ? invariant(false, action.type + " not permitted in phase " + state.phase) : invariant(false) : void 0;
    var _clientSelection = action.payload.client;
    if (isEqual2(_clientSelection, state.current.client.selection)) {
      return state;
    }
    return update({
      state,
      clientSelection: _clientSelection,
      impact: isSnapping(state) ? state.impact : null
    });
  }
  if (action.type === "UPDATE_DROPPABLE_SCROLL") {
    if (state.phase === "DROP_PENDING") {
      return state;
    }
    if (state.phase === "COLLECTING") {
      return state;
    }
    !isMovementAllowed(state) ? true ? invariant(false, action.type + " not permitted in phase " + state.phase) : invariant(false) : void 0;
    var _action$payload2 = action.payload, id = _action$payload2.id, offset3 = _action$payload2.offset;
    var target = state.dimensions.droppables[id];
    if (!target) {
      return state;
    }
    var scrolled = scrollDroppable(target, offset3);
    return postDroppableChange(state, scrolled, false);
  }
  if (action.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (state.phase === "DROP_PENDING") {
      return state;
    }
    !isMovementAllowed(state) ? true ? invariant(false, "Attempting to move in an unsupported phase " + state.phase) : invariant(false) : void 0;
    var _action$payload3 = action.payload, _id = _action$payload3.id, isEnabled2 = _action$payload3.isEnabled;
    var _target = state.dimensions.droppables[_id];
    !_target ? true ? invariant(false, "Cannot find Droppable[id: " + _id + "] to toggle its enabled state") : invariant(false) : void 0;
    !(_target.isEnabled !== isEnabled2) ? true ? invariant(false, "Trying to set droppable isEnabled to " + String(isEnabled2) + "\n      but it is already " + String(_target.isEnabled)) : invariant(false) : void 0;
    var updated = _extends2({}, _target, {
      isEnabled: isEnabled2
    });
    return postDroppableChange(state, updated, true);
  }
  if (action.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (state.phase === "DROP_PENDING") {
      return state;
    }
    !isMovementAllowed(state) ? true ? invariant(false, "Attempting to move in an unsupported phase " + state.phase) : invariant(false) : void 0;
    var _action$payload4 = action.payload, _id2 = _action$payload4.id, isCombineEnabled = _action$payload4.isCombineEnabled;
    var _target2 = state.dimensions.droppables[_id2];
    !_target2 ? true ? invariant(false, "Cannot find Droppable[id: " + _id2 + "] to toggle its isCombineEnabled state") : invariant(false) : void 0;
    !(_target2.isCombineEnabled !== isCombineEnabled) ? true ? invariant(false, "Trying to set droppable isCombineEnabled to " + String(isCombineEnabled) + "\n      but it is already " + String(_target2.isCombineEnabled)) : invariant(false) : void 0;
    var _updated = _extends2({}, _target2, {
      isCombineEnabled
    });
    return postDroppableChange(state, _updated, true);
  }
  if (action.type === "MOVE_BY_WINDOW_SCROLL") {
    if (state.phase === "DROP_PENDING" || state.phase === "DROP_ANIMATING") {
      return state;
    }
    !isMovementAllowed(state) ? true ? invariant(false, "Cannot move by window in phase " + state.phase) : invariant(false) : void 0;
    !state.isWindowScrollAllowed ? true ? invariant(false, "Window scrolling is currently not supported for fixed lists. Aborting drag") : invariant(false) : void 0;
    var newScroll = action.payload.newScroll;
    if (isEqual2(state.viewport.scroll.current, newScroll)) {
      return state;
    }
    var _viewport = scrollViewport(state.viewport, newScroll);
    if (isSnapping(state)) {
      return refreshSnap({
        state,
        viewport: _viewport
      });
    }
    return update({
      state,
      viewport: _viewport
    });
  }
  if (action.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!isMovementAllowed(state)) {
      return state;
    }
    var maxScroll = action.payload.maxScroll;
    if (isEqual2(maxScroll, state.viewport.scroll.max)) {
      return state;
    }
    var withMaxScroll3 = _extends2({}, state.viewport, {
      scroll: _extends2({}, state.viewport.scroll, {
        max: maxScroll
      })
    });
    return _extends2({
      phase: "DRAGGING"
    }, state, {
      viewport: withMaxScroll3
    });
  }
  if (action.type === "MOVE_UP" || action.type === "MOVE_DOWN" || action.type === "MOVE_LEFT" || action.type === "MOVE_RIGHT") {
    if (state.phase === "COLLECTING" || state.phase === "DROP_PENDING") {
      return state;
    }
    !(state.phase === "DRAGGING") ? true ? invariant(false, action.type + " received while not in DRAGGING phase") : invariant(false) : void 0;
    var _result2 = moveInDirection({
      state,
      type: action.type
    });
    if (!_result2) {
      return state;
    }
    return update({
      state,
      impact: _result2.impact,
      clientSelection: _result2.clientSelection,
      scrollJumpRequest: _result2.scrollJumpRequest
    });
  }
  if (action.type === "DROP_PENDING") {
    var _extends3;
    var reason = action.payload.reason;
    !(state.phase === "COLLECTING") ? true ? invariant(false, "Can only move into the DROP_PENDING phase from the COLLECTING phase") : invariant(false) : void 0;
    var newState = _extends2({
      phase: "DROP_PENDING"
    }, state, (_extends3 = {}, _extends3["phase"] = "DROP_PENDING", _extends3.isWaiting = true, _extends3.reason = reason, _extends3));
    return newState;
  }
  if (action.type === "DROP_ANIMATE") {
    var _action$payload5 = action.payload, completed = _action$payload5.completed, dropDuration = _action$payload5.dropDuration, newHomeClientOffset = _action$payload5.newHomeClientOffset;
    !(state.phase === "DRAGGING" || state.phase === "DROP_PENDING") ? true ? invariant(false, "Cannot animate drop from phase " + state.phase) : invariant(false) : void 0;
    var _result3 = {
      phase: "DROP_ANIMATING",
      dimensions: state.dimensions,
      completed,
      dropDuration,
      newHomeClientOffset
    };
    return _result3;
  }
  if (action.type === "DROP_COMPLETE") {
    var _action$payload6 = action.payload, _completed = _action$payload6.completed, shouldFlush = _action$payload6.shouldFlush;
    return {
      phase: "IDLE",
      completed: _completed,
      shouldFlush
    };
  }
  return state;
};
var lift = function lift2(args) {
  return {
    type: "LIFT",
    payload: args
  };
};
var initialPublish = function initialPublish2(args) {
  return {
    type: "INITIAL_PUBLISH",
    payload: args
  };
};
var publishWhileDragging$1 = function publishWhileDragging2(args) {
  return {
    type: "PUBLISH_WHILE_DRAGGING",
    payload: args
  };
};
var collectionStarting = function collectionStarting2() {
  return {
    type: "COLLECTION_STARTING",
    payload: null
  };
};
var updateDroppableScroll = function updateDroppableScroll2(args) {
  return {
    type: "UPDATE_DROPPABLE_SCROLL",
    payload: args
  };
};
var updateDroppableIsEnabled = function updateDroppableIsEnabled2(args) {
  return {
    type: "UPDATE_DROPPABLE_IS_ENABLED",
    payload: args
  };
};
var updateDroppableIsCombineEnabled = function updateDroppableIsCombineEnabled2(args) {
  return {
    type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
    payload: args
  };
};
var move = function move2(args) {
  return {
    type: "MOVE",
    payload: args
  };
};
var moveByWindowScroll = function moveByWindowScroll2(args) {
  return {
    type: "MOVE_BY_WINDOW_SCROLL",
    payload: args
  };
};
var updateViewportMaxScroll = function updateViewportMaxScroll2(args) {
  return {
    type: "UPDATE_VIEWPORT_MAX_SCROLL",
    payload: args
  };
};
var moveUp = function moveUp2() {
  return {
    type: "MOVE_UP",
    payload: null
  };
};
var moveDown = function moveDown2() {
  return {
    type: "MOVE_DOWN",
    payload: null
  };
};
var moveRight = function moveRight2() {
  return {
    type: "MOVE_RIGHT",
    payload: null
  };
};
var moveLeft = function moveLeft2() {
  return {
    type: "MOVE_LEFT",
    payload: null
  };
};
var clean$1 = function clean3(args) {
  if (args === void 0) {
    args = {
      shouldFlush: false
    };
  }
  return {
    type: "CLEAN",
    payload: args
  };
};
var animateDrop = function animateDrop2(args) {
  return {
    type: "DROP_ANIMATE",
    payload: args
  };
};
var completeDrop = function completeDrop2(args) {
  return {
    type: "DROP_COMPLETE",
    payload: args
  };
};
var drop = function drop2(args) {
  return {
    type: "DROP",
    payload: args
  };
};
var dropPending = function dropPending2(args) {
  return {
    type: "DROP_PENDING",
    payload: args
  };
};
var dropAnimationFinished = function dropAnimationFinished2() {
  return {
    type: "DROP_ANIMATION_FINISHED",
    payload: null
  };
};
var lift$1 = function(marshal) {
  return function(_ref) {
    var getState = _ref.getState, dispatch = _ref.dispatch;
    return function(next) {
      return function(action) {
        if (action.type !== "LIFT") {
          next(action);
          return;
        }
        var _action$payload = action.payload, id = _action$payload.id, clientSelection = _action$payload.clientSelection, movementMode = _action$payload.movementMode;
        var initial = getState();
        if (initial.phase === "DROP_ANIMATING") {
          dispatch(completeDrop({
            completed: initial.completed,
            shouldFlush: true
          }));
        }
        !(getState().phase === "IDLE") ? true ? invariant(false, "Incorrect phase to start a drag") : invariant(false) : void 0;
        var scrollOptions = {
          shouldPublishImmediately: movementMode === "SNAP"
        };
        var request = {
          draggableId: id,
          scrollOptions
        };
        var _marshal$startPublish = marshal.startPublishing(request), critical = _marshal$startPublish.critical, dimensions = _marshal$startPublish.dimensions, viewport = _marshal$startPublish.viewport;
        dispatch(initialPublish({
          critical,
          dimensions,
          clientSelection,
          movementMode,
          viewport
        }));
      };
    };
  };
};
var style = function(marshal) {
  return function() {
    return function(next) {
      return function(action) {
        if (action.type === "INITIAL_PUBLISH") {
          marshal.dragging();
        }
        if (action.type === "DROP_ANIMATE") {
          marshal.dropping(action.payload.completed.result.reason);
        }
        if (action.type === "CLEAN" || action.type === "DROP_COMPLETE") {
          marshal.resting();
        }
        next(action);
      };
    };
  };
};
var curves = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
};
var combine = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
};
var timings = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
};
var outOfTheWayTiming = timings.outOfTheWay + "s " + curves.outOfTheWay;
var transitions = {
  fluid: "opacity " + outOfTheWayTiming,
  snap: "transform " + outOfTheWayTiming + ", opacity " + outOfTheWayTiming,
  drop: function drop3(duration) {
    var timing = duration + "s " + curves.drop;
    return "transform " + timing + ", opacity " + timing;
  },
  outOfTheWay: "transform " + outOfTheWayTiming,
  placeholder: "height " + outOfTheWayTiming + ", width " + outOfTheWayTiming + ", margin " + outOfTheWayTiming
};
var moveTo = function moveTo2(offset3) {
  return isEqual2(offset3, origin) ? null : "translate(" + offset3.x + "px, " + offset3.y + "px)";
};
var transforms = {
  moveTo,
  drop: function drop4(offset3, isCombining) {
    var translate = moveTo(offset3);
    if (!translate) {
      return null;
    }
    if (!isCombining) {
      return translate;
    }
    return translate + " scale(" + combine.scale.drop + ")";
  }
};
var minDropTime = timings.minDropTime;
var maxDropTime = timings.maxDropTime;
var dropTimeRange = maxDropTime - minDropTime;
var maxDropTimeAtDistance = 1500;
var cancelDropModifier = 0.6;
var getDropDuration = function(_ref) {
  var current = _ref.current, destination = _ref.destination, reason = _ref.reason;
  var distance$1 = distance(current, destination);
  if (distance$1 <= 0) {
    return minDropTime;
  }
  if (distance$1 >= maxDropTimeAtDistance) {
    return maxDropTime;
  }
  var percentage = distance$1 / maxDropTimeAtDistance;
  var duration = minDropTime + dropTimeRange * percentage;
  var withDuration = reason === "CANCEL" ? duration * cancelDropModifier : duration;
  return Number(withDuration.toFixed(2));
};
var getNewHomeClientOffset = function(_ref) {
  var impact = _ref.impact, draggable2 = _ref.draggable, dimensions = _ref.dimensions, viewport = _ref.viewport, onLift = _ref.onLift;
  var draggables = dimensions.draggables, droppables = dimensions.droppables;
  var droppableId = whatIsDraggedOver(impact);
  var destination = droppableId ? droppables[droppableId] : null;
  var home2 = droppables[draggable2.descriptor.droppableId];
  var newClientCenter = getClientBorderBoxCenter({
    impact,
    draggable: draggable2,
    draggables,
    onLift,
    droppable: destination || home2,
    viewport
  });
  var offset3 = subtract(newClientCenter, draggable2.client.borderBox.center);
  var merge = impact.merge;
  if (merge && didStartDisplaced(merge.combine.draggableId, onLift)) {
    return subtract(offset3, onLift.displacedBy.point);
  }
  return offset3;
};
var getDropImpact = function(_ref) {
  var reason = _ref.reason, lastImpact = _ref.lastImpact, home2 = _ref.home, viewport = _ref.viewport, draggables = _ref.draggables, onLiftImpact = _ref.onLiftImpact, onLift = _ref.onLift;
  var didDropInsideDroppable = reason === "DROP" && Boolean(whatIsDraggedOver(lastImpact));
  if (!didDropInsideDroppable) {
    var impact = recompute({
      impact: onLiftImpact,
      destination: home2,
      viewport,
      draggables,
      onLift,
      forceShouldAnimate: true
    });
    return {
      impact,
      didDropInsideDroppable
    };
  }
  if (lastImpact.destination) {
    return {
      impact: lastImpact,
      didDropInsideDroppable
    };
  }
  var withoutMovement = _extends2({}, lastImpact, {
    movement: noMovement
  });
  return {
    impact: withoutMovement,
    didDropInsideDroppable
  };
};
var drop$1 = function(_ref) {
  var getState = _ref.getState, dispatch = _ref.dispatch;
  return function(next) {
    return function(action) {
      if (action.type !== "DROP") {
        next(action);
        return;
      }
      var state = getState();
      var reason = action.payload.reason;
      if (state.phase === "COLLECTING") {
        dispatch(dropPending({
          reason
        }));
        return;
      }
      if (state.phase === "IDLE") {
        return;
      }
      var isWaitingForDrop = state.phase === "DROP_PENDING" && state.isWaiting;
      !!isWaitingForDrop ? true ? invariant(false, "A DROP action occurred while DROP_PENDING and still waiting") : invariant(false) : void 0;
      !(state.phase === "DRAGGING" || state.phase === "DROP_PENDING") ? true ? invariant(false, "Cannot drop in phase: " + state.phase) : invariant(false) : void 0;
      var critical = state.critical;
      var dimensions = state.dimensions;
      var _getDropImpact = getDropImpact({
        reason,
        lastImpact: state.impact,
        onLift: state.onLift,
        onLiftImpact: state.onLiftImpact,
        home: state.dimensions.droppables[state.critical.droppable.id],
        viewport: state.viewport,
        draggables: state.dimensions.draggables
      }), impact = _getDropImpact.impact, didDropInsideDroppable = _getDropImpact.didDropInsideDroppable;
      var draggable2 = dimensions.draggables[state.critical.draggable.id];
      var destination = didDropInsideDroppable ? impact.destination : null;
      var combine2 = didDropInsideDroppable && impact.merge ? impact.merge.combine : null;
      var source = {
        index: critical.draggable.index,
        droppableId: critical.droppable.id
      };
      var result = {
        draggableId: draggable2.descriptor.id,
        type: draggable2.descriptor.type,
        source,
        reason,
        mode: state.movementMode,
        destination,
        combine: combine2
      };
      var newHomeClientOffset = getNewHomeClientOffset({
        impact,
        draggable: draggable2,
        dimensions,
        viewport: state.viewport,
        onLift: state.onLift
      });
      var completed = {
        critical: state.critical,
        result,
        impact
      };
      var isAnimationRequired = !isEqual2(state.current.client.offset, newHomeClientOffset) || Boolean(result.combine);
      if (!isAnimationRequired) {
        dispatch(completeDrop({
          completed,
          shouldFlush: false
        }));
        return;
      }
      var dropDuration = getDropDuration({
        current: state.current.client.offset,
        destination: newHomeClientOffset,
        reason
      });
      var args = {
        newHomeClientOffset,
        dropDuration,
        completed
      };
      dispatch(animateDrop(args));
    };
  };
};
var position = function position2(index) {
  return index + 1;
};
var onDragStart = function onDragStart2(start3) {
  return "\n  You have lifted an item in position " + position(start3.source.index) + ".\n  Use the arrow keys to move, space bar to drop, and escape to cancel.\n";
};
var withLocation = function withLocation2(source, destination) {
  var isInHomeList = source.droppableId === destination.droppableId;
  var startPosition = position(source.index);
  var endPosition = position(destination.index);
  if (isInHomeList) {
    return "\n      You have moved the item from position " + startPosition + "\n      to position " + endPosition + "\n    ";
  }
  return "\n    You have moved the item from position " + startPosition + "\n    in list " + source.droppableId + "\n    to list " + destination.droppableId + "\n    in position " + endPosition + "\n  ";
};
var withCombine = function withCombine2(id, source, combine2) {
  var inHomeList = source.droppableId === combine2.droppableId;
  if (inHomeList) {
    return "\n      The item " + id + "\n      has been combined with " + combine2.draggableId;
  }
  return "\n      The item " + id + "\n      in list " + source.droppableId + "\n      has been combined with " + combine2.draggableId + "\n      in list " + combine2.droppableId + "\n    ";
};
var onDragUpdate = function onDragUpdate2(update2) {
  var location = update2.destination;
  if (location) {
    return withLocation(update2.source, location);
  }
  var combine2 = update2.combine;
  if (combine2) {
    return withCombine(update2.draggableId, update2.source, combine2);
  }
  return "You are over an area that cannot be dropped on";
};
var returnedToStart = function returnedToStart2(source) {
  return "\n  The item has returned to its starting position\n  of " + position(source.index) + "\n";
};
var onDragEnd = function onDragEnd2(result) {
  if (result.reason === "CANCEL") {
    return "\n      Movement cancelled.\n      " + returnedToStart(result.source) + "\n    ";
  }
  var location = result.destination;
  var combine2 = result.combine;
  if (location) {
    return "\n      You have dropped the item.\n      " + withLocation(result.source, location) + "\n    ";
  }
  if (combine2) {
    return "\n      You have dropped the item.\n      " + withCombine(result.draggableId, result.source, combine2) + "\n    ";
  }
  return "\n    The item has been dropped while not over a drop area.\n    " + returnedToStart(result.source) + "\n  ";
};
var preset = {
  onDragStart,
  onDragUpdate,
  onDragEnd
};
var getExpiringAnnounce = function(announce) {
  var wasCalled = false;
  var isExpired = false;
  var timeoutId = setTimeout(function() {
    isExpired = true;
  });
  var result = function result2(message) {
    if (wasCalled) {
      true ? warning2("Announcement already made. Not making a second announcement") : void 0;
      return;
    }
    if (isExpired) {
      true ? warning2("\n        Announcements cannot be made asynchronously.\n        Default message has already been announced.\n      ") : void 0;
      return;
    }
    wasCalled = true;
    announce(message);
    clearTimeout(timeoutId);
  };
  result.wasCalled = function() {
    return wasCalled;
  };
  return result;
};
var getAsyncMarshal = function() {
  var entries = [];
  var execute3 = function execute4(timerId) {
    var index = findIndex(entries, function(item) {
      return item.timerId === timerId;
    });
    !(index !== -1) ? true ? invariant(false, "Could not find timer") : invariant(false) : void 0;
    var _entries$splice = entries.splice(index, 1), entry = _entries$splice[0];
    entry.callback();
  };
  var add3 = function add4(fn) {
    var timerId = setTimeout(function() {
      return execute3(timerId);
    });
    var entry = {
      timerId,
      callback: fn
    };
    entries.push(entry);
  };
  var flush = function flush2() {
    if (!entries.length) {
      return;
    }
    var shallow = [].concat(entries);
    entries.length = 0;
    shallow.forEach(function(entry) {
      clearTimeout(entry.timerId);
      entry.callback();
    });
  };
  return {
    add: add3,
    flush
  };
};
var areLocationsEqual = function areLocationsEqual2(first, second) {
  if (first == null && second == null) {
    return true;
  }
  if (first == null || second == null) {
    return false;
  }
  return first.droppableId === second.droppableId && first.index === second.index;
};
var isCombineEqual = function isCombineEqual2(first, second) {
  if (first == null && second == null) {
    return true;
  }
  if (first == null || second == null) {
    return false;
  }
  return first.draggableId === second.draggableId && first.droppableId === second.droppableId;
};
var isCriticalEqual = function isCriticalEqual2(first, second) {
  if (first === second) {
    return true;
  }
  var isDraggableEqual = first.draggable.id === second.draggable.id && first.draggable.droppableId === second.draggable.droppableId && first.draggable.type === second.draggable.type && first.draggable.index === second.draggable.index;
  var isDroppableEqual = first.droppable.id === second.droppable.id && first.droppable.type === second.droppable.type;
  return isDraggableEqual && isDroppableEqual;
};
var withTimings = function withTimings2(key, fn) {
  start(key);
  fn();
  finish(key);
};
var getDragStart = function getDragStart2(critical, mode) {
  return {
    draggableId: critical.draggable.id,
    type: critical.droppable.type,
    source: {
      droppableId: critical.droppable.id,
      index: critical.draggable.index
    },
    mode
  };
};
var execute = function execute2(responder, data, announce, getDefaultMessage) {
  if (!responder) {
    announce(getDefaultMessage(data));
    return;
  }
  var willExpire = getExpiringAnnounce(announce);
  var provided = {
    announce: willExpire
  };
  responder(data, provided);
  if (!willExpire.wasCalled()) {
    announce(getDefaultMessage(data));
  }
};
var getPublisher = function(getResponders, announce) {
  var asyncMarshal = getAsyncMarshal();
  var dragging = null;
  var beforeStart = function beforeStart2(critical, mode) {
    !!dragging ? true ? invariant(false, "Cannot fire onBeforeDragStart as a drag start has already been published") : invariant(false) : void 0;
    withTimings("onBeforeDragStart", function() {
      var fn = getResponders().onBeforeDragStart;
      if (fn) {
        fn(getDragStart(critical, mode));
      }
    });
  };
  var start3 = function start4(critical, mode) {
    !!dragging ? true ? invariant(false, "Cannot fire onBeforeDragStart as a drag start has already been published") : invariant(false) : void 0;
    var data = getDragStart(critical, mode);
    dragging = {
      mode,
      lastCritical: critical,
      lastLocation: data.source,
      lastCombine: null
    };
    asyncMarshal.add(function() {
      withTimings("onDragStart", function() {
        return execute(getResponders().onDragStart, data, announce, preset.onDragStart);
      });
    });
  };
  var update2 = function update3(critical, impact) {
    var location = impact.destination;
    var combine2 = impact.merge ? impact.merge.combine : null;
    !dragging ? true ? invariant(false, "Cannot fire onDragMove when onDragStart has not been called") : invariant(false) : void 0;
    var hasCriticalChanged = !isCriticalEqual(critical, dragging.lastCritical);
    if (hasCriticalChanged) {
      dragging.lastCritical = critical;
    }
    var hasLocationChanged = !areLocationsEqual(dragging.lastLocation, location);
    if (hasLocationChanged) {
      dragging.lastLocation = location;
    }
    var hasGroupingChanged = !isCombineEqual(dragging.lastCombine, combine2);
    if (hasGroupingChanged) {
      dragging.lastCombine = combine2;
    }
    if (!hasCriticalChanged && !hasLocationChanged && !hasGroupingChanged) {
      return;
    }
    var data = _extends2({}, getDragStart(critical, dragging.mode), {
      combine: combine2,
      destination: location
    });
    asyncMarshal.add(function() {
      withTimings("onDragUpdate", function() {
        return execute(getResponders().onDragUpdate, data, announce, preset.onDragUpdate);
      });
    });
  };
  var flush = function flush2() {
    !dragging ? true ? invariant(false, "Can only flush responders while dragging") : invariant(false) : void 0;
    asyncMarshal.flush();
  };
  var drop5 = function drop6(result) {
    !dragging ? true ? invariant(false, "Cannot fire onDragEnd when there is no matching onDragStart") : invariant(false) : void 0;
    dragging = null;
    withTimings("onDragEnd", function() {
      return execute(getResponders().onDragEnd, result, announce, preset.onDragEnd);
    });
  };
  var abort = function abort2() {
    if (!dragging) {
      return;
    }
    var result = _extends2({}, getDragStart(dragging.lastCritical, dragging.mode), {
      combine: null,
      destination: null,
      reason: "CANCEL"
    });
    drop5(result);
  };
  return {
    beforeStart,
    start: start3,
    update: update2,
    flush,
    drop: drop5,
    abort
  };
};
var responders = function(getResponders, announce) {
  var publisher = getPublisher(getResponders, announce);
  return function(store) {
    return function(next) {
      return function(action) {
        if (action.type === "INITIAL_PUBLISH") {
          var critical = action.payload.critical;
          publisher.beforeStart(critical, action.payload.movementMode);
          next(action);
          publisher.start(critical, action.payload.movementMode);
          return;
        }
        if (action.type === "DROP_COMPLETE") {
          var result = action.payload.completed.result;
          publisher.flush();
          next(action);
          publisher.drop(result);
          return;
        }
        next(action);
        if (action.type === "CLEAN") {
          publisher.abort();
          return;
        }
        var state = store.getState();
        if (state.phase === "DRAGGING") {
          publisher.update(state.critical, state.impact);
        }
      };
    };
  };
};
var dropAnimationFinish = function(store) {
  return function(next) {
    return function(action) {
      if (action.type !== "DROP_ANIMATION_FINISHED") {
        next(action);
        return;
      }
      var state = store.getState();
      !(state.phase === "DROP_ANIMATING") ? true ? invariant(false, "Cannot finish a drop animating when no drop is occurring") : invariant(false) : void 0;
      store.dispatch(completeDrop({
        completed: state.completed,
        shouldFlush: false
      }));
    };
  };
};
var dimensionMarshalStopper = function(marshal) {
  return function() {
    return function(next) {
      return function(action) {
        if (action.type === "DROP_COMPLETE" || action.type === "CLEAN" || action.type === "DROP_ANIMATE") {
          marshal.stopPublishing();
        }
        next(action);
      };
    };
  };
};
var shouldEnd = function shouldEnd2(action) {
  return action.type === "DROP_COMPLETE" || action.type === "DROP_ANIMATE" || action.type === "CLEAN";
};
var shouldCancelPending = function shouldCancelPending2(action) {
  return action.type === "COLLECTION_STARTING";
};
var autoScroll = function(autoScroller) {
  return function(store) {
    return function(next) {
      return function(action) {
        if (shouldEnd(action)) {
          autoScroller.stop();
          next(action);
          return;
        }
        if (shouldCancelPending(action)) {
          autoScroller.cancelPending();
          next(action);
          return;
        }
        if (action.type === "INITIAL_PUBLISH") {
          next(action);
          var state = store.getState();
          !(state.phase === "DRAGGING") ? true ? invariant(false, "Expected phase to be DRAGGING after INITIAL_PUBLISH") : invariant(false) : void 0;
          autoScroller.start(state);
          return;
        }
        next(action);
        autoScroller.scroll(store.getState());
      };
    };
  };
};
var pendingDrop = function(store) {
  return function(next) {
    return function(action) {
      next(action);
      if (action.type !== "PUBLISH_WHILE_DRAGGING") {
        return;
      }
      var postActionState = store.getState();
      if (postActionState.phase !== "DROP_PENDING") {
        return;
      }
      if (postActionState.isWaiting) {
        return;
      }
      store.dispatch(drop({
        reason: postActionState.reason
      }));
    };
  };
};
var composeEnhancers = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
var createStore2 = function(_ref) {
  var dimensionMarshal = _ref.dimensionMarshal, styleMarshal = _ref.styleMarshal, getResponders = _ref.getResponders, announce = _ref.announce, autoScroller = _ref.autoScroller;
  return createStore(reducer, composeEnhancers(applyMiddleware(style(styleMarshal), dimensionMarshalStopper(dimensionMarshal), lift$1(dimensionMarshal), drop$1, dropAnimationFinish, pendingDrop, autoScroll(autoScroller), responders(getResponders, announce))));
};
var clean$2 = function clean4() {
  return {
    additions: {},
    removals: {},
    modified: {}
  };
};
var timingKey = "Publish collection from DOM";
var createPublisher = function(_ref) {
  var getEntries = _ref.getEntries, callbacks = _ref.callbacks;
  var advancedUsageWarning = function() {
    if (false) {
      return function() {
      };
    }
    var hasAnnounced = false;
    return function() {
      if (hasAnnounced) {
        return;
      }
      hasAnnounced = true;
      true ? warning2("\n        Advanced usage warning: you are adding or removing a dimension during a drag\n        This an advanced feature.\n\n        More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/changes-while-dragging.md\n      ") : void 0;
    };
  }();
  var staging = clean$2();
  var frameId = null;
  var collect = function collect2() {
    advancedUsageWarning();
    if (frameId) {
      return;
    }
    frameId = requestAnimationFrame(function() {
      frameId = null;
      callbacks.collectionStarting();
      var critical = callbacks.getCritical();
      start(timingKey);
      var entries = getEntries();
      var _staging = staging, additions = _staging.additions, removals = _staging.removals, modified = _staging.modified;
      var added = (0, import_keys.default)(additions).map(function(id) {
        return entries.draggables[id].getDimension(origin);
      }).sort(function(a, b) {
        return a.descriptor.index - b.descriptor.index;
      });
      var updated = (0, import_keys.default)(modified).map(function(id) {
        var entry = entries.droppables[id];
        !entry ? true ? invariant(false, "Cannot find dynamically added droppable in cache") : invariant(false) : void 0;
        var isHome = entry.descriptor.id === critical.droppable.id;
        var options = {
          withoutPlaceholder: !isHome
        };
        return entry.callbacks.recollect(options);
      });
      var result = {
        additions: added,
        removals: (0, import_keys.default)(removals),
        modified: updated
      };
      staging = clean$2();
      finish(timingKey);
      callbacks.publish(result);
    });
  };
  var add3 = function add4(descriptor) {
    staging.additions[descriptor.id] = descriptor;
    staging.modified[descriptor.droppableId] = true;
    if (staging.removals[descriptor.id]) {
      delete staging.removals[descriptor.id];
    }
    collect();
  };
  var remove = function remove2(descriptor) {
    staging.removals[descriptor.id] = descriptor;
    staging.modified[descriptor.droppableId] = true;
    if (staging.additions[descriptor.id]) {
      delete staging.additions[descriptor.id];
    }
    collect();
  };
  var stop = function stop2() {
    if (!frameId) {
      return;
    }
    cancelAnimationFrame(frameId);
    frameId = null;
    staging = clean$2();
  };
  return {
    add: add3,
    remove,
    stop
  };
};
var getWindowScroll3 = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};
var getDocumentElement = function() {
  var doc = document.documentElement;
  !doc ? true ? invariant(false, "Cannot find document.documentElement") : invariant(false) : void 0;
  return doc;
};
var getMaxWindowScroll = function() {
  var doc = getDocumentElement();
  var maxScroll = getMaxScroll({
    scrollHeight: doc.scrollHeight,
    scrollWidth: doc.scrollWidth,
    width: doc.clientWidth,
    height: doc.clientHeight
  });
  return maxScroll;
};
var getViewport = function() {
  var scroll3 = getWindowScroll3();
  var maxScroll = getMaxWindowScroll();
  var top = scroll3.y;
  var left = scroll3.x;
  var doc = getDocumentElement();
  var width = doc.clientWidth;
  var height = doc.clientHeight;
  var right = left + width;
  var bottom = top + height;
  var frame = getRect({
    top,
    left,
    right,
    bottom
  });
  var viewport = {
    frame,
    scroll: {
      initial: scroll3,
      current: scroll3,
      max: maxScroll,
      diff: {
        value: origin,
        displacement: origin
      }
    }
  };
  return viewport;
};
var getInitialPublish = function(_ref) {
  var critical = _ref.critical, scrollOptions = _ref.scrollOptions, entries = _ref.entries;
  var timingKey2 = "Initial collection from DOM";
  start(timingKey2);
  var viewport = getViewport();
  var windowScroll = viewport.scroll.current;
  var home2 = critical.droppable;
  var droppables = values(entries.droppables).filter(function(entry) {
    return entry.descriptor.type === home2.type;
  }).map(function(entry) {
    return entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions);
  });
  var draggables = values(entries.draggables).filter(function(entry) {
    return entry.descriptor.type === critical.draggable.type;
  }).map(function(entry) {
    return entry.getDimension(windowScroll);
  });
  var dimensions = {
    draggables: toDraggableMap(draggables),
    droppables: toDroppableMap(droppables)
  };
  finish(timingKey2);
  var result = {
    dimensions,
    critical,
    viewport
  };
  return result;
};
var throwIfAddOrRemoveOfWrongType = function throwIfAddOrRemoveOfWrongType2(collection, descriptor) {
  !(collection.critical.draggable.type === descriptor.type) ? true ? invariant(false, "We have detected that you have added a Draggable during a drag.\n      This is not of the same type as the dragging item\n\n      Dragging type: " + collection.critical.draggable.type + ".\n      Added type: " + descriptor.type + "\n\n      We are not allowing this as you can run into problems if your change\n      has shifted the positioning of other Droppables, or has changed the size of the page") : invariant(false) : void 0;
};
var createDimensionMarshal = function(callbacks) {
  var entries = {
    droppables: {},
    draggables: {}
  };
  var collection = null;
  var publisher = createPublisher({
    callbacks: {
      publish: callbacks.publishWhileDragging,
      collectionStarting: callbacks.collectionStarting,
      getCritical: function getCritical() {
        !collection ? true ? invariant(false, "Cannot get critical when there is no collection") : invariant(false) : void 0;
        return collection.critical;
      }
    },
    getEntries: function getEntries() {
      return entries;
    }
  });
  var registerDraggable = function registerDraggable2(descriptor, getDimension2) {
    var entry = {
      descriptor,
      getDimension: getDimension2
    };
    entries.draggables[descriptor.id] = entry;
    if (!collection) {
      return;
    }
    throwIfAddOrRemoveOfWrongType(collection, descriptor);
    publisher.add(descriptor);
  };
  var updateDraggable = function updateDraggable2(published, descriptor, getDimension2) {
    var existing = entries.draggables[published.id];
    !existing ? true ? invariant(false, "Cannot update draggable registration as no published registration was found") : invariant(false) : void 0;
    if (existing.descriptor === published) {
      delete entries.draggables[published.id];
    } else {
      true ? warning2(`
        Detected incorrect usage of 'key' on '<Draggable draggableId="` + published.id + `"$ />

        Your 'key' should be:
        - Unique for each Draggable in a list
        - Not be based on the index of the Draggable

        Usually you want your 'key' to just be the 'draggableId'

        More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/draggable.md#keys-for-a-list-of-draggable-
      `) : void 0;
    }
    var entry = {
      descriptor,
      getDimension: getDimension2
    };
    entries.draggables[descriptor.id] = entry;
  };
  var unregisterDraggable = function unregisterDraggable2(descriptor) {
    var entry = entries.draggables[descriptor.id];
    !entry ? true ? invariant(false, "Cannot unregister Draggable with id:\n      " + descriptor.id + " as it is not registered") : invariant(false) : void 0;
    if (entry.descriptor !== descriptor) {
      return;
    }
    delete entries.draggables[descriptor.id];
    if (!collection) {
      return;
    }
    !(collection.critical.draggable.id !== descriptor.id) ? true ? invariant(false, "Cannot remove the dragging item during a drag") : invariant(false) : void 0;
    throwIfAddOrRemoveOfWrongType(collection, descriptor);
    publisher.remove(descriptor);
  };
  var registerDroppable = function registerDroppable2(descriptor, droppableCallbacks) {
    var id = descriptor.id;
    entries.droppables[id] = {
      descriptor,
      callbacks: droppableCallbacks
    };
    !!collection ? true ? invariant(false, "Cannot add a Droppable during a drag") : invariant(false) : void 0;
  };
  var unregisterDroppable = function unregisterDroppable2(descriptor) {
    var entry = entries.droppables[descriptor.id];
    !entry ? true ? invariant(false, "Cannot unregister Droppable with id " + descriptor.id + " as as it is not registered") : invariant(false) : void 0;
    if (entry.descriptor !== descriptor) {
      return;
    }
    delete entries.droppables[descriptor.id];
    !!collection ? true ? invariant(false, "Cannot add a Droppable during a drag") : invariant(false) : void 0;
  };
  var updateDroppableIsEnabled3 = function updateDroppableIsEnabled4(id, isEnabled2) {
    !entries.droppables[id] ? true ? invariant(false, "Cannot update is enabled flag of Droppable " + id + " as it is not registered") : invariant(false) : void 0;
    if (!collection) {
      return;
    }
    callbacks.updateDroppableIsEnabled({
      id,
      isEnabled: isEnabled2
    });
  };
  var updateDroppableIsCombineEnabled3 = function updateDroppableIsCombineEnabled4(id, isCombineEnabled) {
    !entries.droppables[id] ? true ? invariant(false, "Cannot update isCombineEnabled flag of Droppable " + id + " as it is not registered") : invariant(false) : void 0;
    if (!collection) {
      return;
    }
    callbacks.updateDroppableIsCombineEnabled({
      id,
      isCombineEnabled
    });
  };
  var updateDroppableScroll3 = function updateDroppableScroll4(id, newScroll) {
    !entries.droppables[id] ? true ? invariant(false, "Cannot update the scroll on Droppable " + id + " as it is not registered") : invariant(false) : void 0;
    if (!collection) {
      return;
    }
    callbacks.updateDroppableScroll({
      id,
      offset: newScroll
    });
  };
  var scrollDroppable2 = function scrollDroppable3(id, change) {
    var entry = entries.droppables[id];
    !entry ? true ? invariant(false, "Cannot scroll Droppable " + id + " as it is not registered") : invariant(false) : void 0;
    if (!collection) {
      return;
    }
    entry.callbacks.scroll(change);
  };
  var stopPublishing = function stopPublishing2() {
    if (!collection) {
      return;
    }
    publisher.stop();
    var home2 = collection.critical.droppable;
    values(entries.droppables).filter(function(entry) {
      return entry.descriptor.type === home2.type;
    }).forEach(function(entry) {
      return entry.callbacks.dragStopped();
    });
    collection = null;
  };
  var startPublishing = function startPublishing2(request) {
    !!collection ? true ? invariant(false, "Cannot start capturing critical dimensions as there is already a collection") : invariant(false) : void 0;
    var entry = entries.draggables[request.draggableId];
    !entry ? true ? invariant(false, "Cannot find critical draggable entry") : invariant(false) : void 0;
    var home2 = entries.droppables[entry.descriptor.droppableId];
    !home2 ? true ? invariant(false, "Cannot find critical droppable entry") : invariant(false) : void 0;
    var critical = {
      draggable: entry.descriptor,
      droppable: home2.descriptor
    };
    collection = {
      critical
    };
    return getInitialPublish({
      critical,
      entries,
      scrollOptions: request.scrollOptions
    });
  };
  var marshal = {
    registerDraggable,
    updateDraggable,
    unregisterDraggable,
    registerDroppable,
    unregisterDroppable,
    updateDroppableIsEnabled: updateDroppableIsEnabled3,
    updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled3,
    scrollDroppable: scrollDroppable2,
    updateDroppableScroll: updateDroppableScroll3,
    startPublishing,
    stopPublishing
  };
  return marshal;
};
var canStartDrag = function(state, id) {
  if (state.phase === "IDLE") {
    return true;
  }
  if (state.phase !== "DROP_ANIMATING") {
    return false;
  }
  if (state.completed.result.draggableId === id) {
    return false;
  }
  return state.completed.result.reason === "DROP";
};
var scrollWindow = function(change) {
  window.scrollBy(change.x, change.y);
};
var getScrollableDroppables = memoize_one_esm_default(function(droppables) {
  return toDroppableList(droppables).filter(function(droppable2) {
    if (!droppable2.isEnabled) {
      return false;
    }
    if (!droppable2.frame) {
      return false;
    }
    return true;
  });
});
var getScrollableDroppableOver = function getScrollableDroppableOver2(target, droppables) {
  var maybe = find(getScrollableDroppables(droppables), function(droppable2) {
    !droppable2.frame ? true ? invariant(false, "Invalid result") : invariant(false) : void 0;
    return isPositionInFrame(droppable2.frame.pageMarginBox)(target);
  });
  return maybe;
};
var getBestScrollableDroppable = function(_ref) {
  var center = _ref.center, destination = _ref.destination, droppables = _ref.droppables;
  if (destination) {
    var _dimension = droppables[destination];
    if (!_dimension.frame) {
      return null;
    }
    return _dimension;
  }
  var dimension = getScrollableDroppableOver(center, droppables);
  return dimension;
};
var config = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: function ease(percentage) {
    return Math.pow(percentage, 2);
  },
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  }
};
var getDistanceThresholds = function(container, axis) {
  var startScrollingFrom = container[axis.size] * config.startFromPercentage;
  var maxScrollValueAt = container[axis.size] * config.maxScrollAtPercentage;
  var thresholds = {
    startScrollingFrom,
    maxScrollValueAt
  };
  return thresholds;
};
var getPercentage = function(_ref) {
  var startOfRange = _ref.startOfRange, endOfRange = _ref.endOfRange, current = _ref.current;
  var range = endOfRange - startOfRange;
  if (range === 0) {
    true ? warning2("\n      Detected distance range of 0 in the fluid auto scroller\n      This is unexpected and would cause a divide by 0 issue.\n      Not allowing an auto scroll\n    ") : void 0;
    return 0;
  }
  var currentInRange = current - startOfRange;
  var percentage = currentInRange / range;
  return percentage;
};
var minScroll = 1;
var getValueFromDistance = function(distanceToEdge, thresholds) {
  if (distanceToEdge > thresholds.startScrollingFrom) {
    return 0;
  }
  if (distanceToEdge <= thresholds.maxScrollValueAt) {
    return config.maxPixelScroll;
  }
  if (distanceToEdge === thresholds.startScrollingFrom) {
    return minScroll;
  }
  var percentageFromMaxScrollValueAt = getPercentage({
    startOfRange: thresholds.maxScrollValueAt,
    endOfRange: thresholds.startScrollingFrom,
    current: distanceToEdge
  });
  var percentageFromStartScrollingFrom = 1 - percentageFromMaxScrollValueAt;
  var scroll3 = config.maxPixelScroll * config.ease(percentageFromStartScrollingFrom);
  return Math.ceil(scroll3);
};
var accelerateAt = config.durationDampening.accelerateAt;
var stopAt = config.durationDampening.stopDampeningAt;
var dampenValueByTime = function(proposedScroll, dragStartTime) {
  var startOfRange = dragStartTime;
  var endOfRange = stopAt;
  var now = (0, import_now.default)();
  var runTime = now - startOfRange;
  if (runTime >= stopAt) {
    return proposedScroll;
  }
  if (runTime < accelerateAt) {
    return minScroll;
  }
  var betweenAccelerateAtAndStopAtPercentage = getPercentage({
    startOfRange: accelerateAt,
    endOfRange,
    current: runTime
  });
  var scroll3 = proposedScroll * config.ease(betweenAccelerateAtAndStopAtPercentage);
  return Math.ceil(scroll3);
};
var getValue = function(_ref) {
  var distanceToEdge = _ref.distanceToEdge, thresholds = _ref.thresholds, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll3 = getValueFromDistance(distanceToEdge, thresholds);
  if (scroll3 === 0) {
    return 0;
  }
  if (!shouldUseTimeDampening) {
    return scroll3;
  }
  return Math.max(dampenValueByTime(scroll3, dragStartTime), minScroll);
};
var getScrollOnAxis = function(_ref) {
  var container = _ref.container, distanceToEdges = _ref.distanceToEdges, dragStartTime = _ref.dragStartTime, axis = _ref.axis, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var thresholds = getDistanceThresholds(container, axis);
  var isCloserToEnd = distanceToEdges[axis.end] < distanceToEdges[axis.start];
  if (isCloserToEnd) {
    return getValue({
      distanceToEdge: distanceToEdges[axis.end],
      thresholds,
      dragStartTime,
      shouldUseTimeDampening
    });
  }
  return -1 * getValue({
    distanceToEdge: distanceToEdges[axis.start],
    thresholds,
    dragStartTime,
    shouldUseTimeDampening
  });
};
var adjustForSizeLimits = function(_ref) {
  var container = _ref.container, subject = _ref.subject, proposedScroll = _ref.proposedScroll;
  var isTooBigVertically = subject.height > container.height;
  var isTooBigHorizontally = subject.width > container.width;
  if (!isTooBigHorizontally && !isTooBigVertically) {
    return proposedScroll;
  }
  if (isTooBigHorizontally && isTooBigVertically) {
    return null;
  }
  return {
    x: isTooBigHorizontally ? 0 : proposedScroll.x,
    y: isTooBigVertically ? 0 : proposedScroll.y
  };
};
var clean$3 = apply(function(value) {
  return value === 0 ? 0 : value;
});
var getScroll = function(_ref) {
  var dragStartTime = _ref.dragStartTime, container = _ref.container, subject = _ref.subject, center = _ref.center, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var distanceToEdges = {
    top: center.y - container.top,
    right: container.right - center.x,
    bottom: container.bottom - center.y,
    left: center.x - container.left
  };
  var y = getScrollOnAxis({
    container,
    distanceToEdges,
    dragStartTime,
    axis: vertical,
    shouldUseTimeDampening
  });
  var x = getScrollOnAxis({
    container,
    distanceToEdges,
    dragStartTime,
    axis: horizontal,
    shouldUseTimeDampening
  });
  var required = clean$3({
    x,
    y
  });
  if (isEqual2(required, origin)) {
    return null;
  }
  var limited = adjustForSizeLimits({
    container,
    subject,
    proposedScroll: required
  });
  if (!limited) {
    return null;
  }
  return isEqual2(limited, origin) ? null : limited;
};
var smallestSigned = apply(function(value) {
  if (value === 0) {
    return 0;
  }
  return value > 0 ? 1 : -1;
});
var getOverlap = /* @__PURE__ */ function() {
  var getRemainder = function getRemainder2(target, max) {
    if (target < 0) {
      return target;
    }
    if (target > max) {
      return target - max;
    }
    return 0;
  };
  return function(_ref) {
    var current = _ref.current, max = _ref.max, change = _ref.change;
    var targetScroll = add(current, change);
    var overlap = {
      x: getRemainder(targetScroll.x, max.x),
      y: getRemainder(targetScroll.y, max.y)
    };
    if (isEqual2(overlap, origin)) {
      return null;
    }
    return overlap;
  };
}();
var canPartiallyScroll = function canPartiallyScroll2(_ref2) {
  var rawMax = _ref2.max, current = _ref2.current, change = _ref2.change;
  var max = {
    x: Math.max(current.x, rawMax.x),
    y: Math.max(current.y, rawMax.y)
  };
  var smallestChange = smallestSigned(change);
  var overlap = getOverlap({
    max,
    current,
    change: smallestChange
  });
  if (!overlap) {
    return true;
  }
  if (smallestChange.x !== 0 && overlap.x === 0) {
    return true;
  }
  if (smallestChange.y !== 0 && overlap.y === 0) {
    return true;
  }
  return false;
};
var canScrollWindow = function canScrollWindow2(viewport, change) {
  return canPartiallyScroll({
    current: viewport.scroll.current,
    max: viewport.scroll.max,
    change
  });
};
var getWindowOverlap = function getWindowOverlap2(viewport, change) {
  if (!canScrollWindow(viewport, change)) {
    return null;
  }
  var max = viewport.scroll.max;
  var current = viewport.scroll.current;
  return getOverlap({
    current,
    max,
    change
  });
};
var canScrollDroppable = function canScrollDroppable2(droppable2, change) {
  var frame = droppable2.frame;
  if (!frame) {
    return false;
  }
  return canPartiallyScroll({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change
  });
};
var getDroppableOverlap = function getDroppableOverlap2(droppable2, change) {
  var frame = droppable2.frame;
  if (!frame) {
    return null;
  }
  if (!canScrollDroppable(droppable2, change)) {
    return null;
  }
  return getOverlap({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change
  });
};
var getWindowScrollChange = function(_ref) {
  var viewport = _ref.viewport, subject = _ref.subject, center = _ref.center, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll3 = getScroll({
    dragStartTime,
    container: viewport.frame,
    subject,
    center,
    shouldUseTimeDampening
  });
  return scroll3 && canScrollWindow(viewport, scroll3) ? scroll3 : null;
};
var getDroppableScrollChange = function(_ref) {
  var droppable2 = _ref.droppable, subject = _ref.subject, center = _ref.center, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var frame = droppable2.frame;
  if (!frame) {
    return null;
  }
  var scroll3 = getScroll({
    dragStartTime,
    container: frame.pageMarginBox,
    subject,
    center,
    shouldUseTimeDampening
  });
  return scroll3 && canScrollDroppable(droppable2, scroll3) ? scroll3 : null;
};
var scroll$1 = function(_ref) {
  var state = _ref.state, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening, scrollWindow2 = _ref.scrollWindow, scrollDroppable2 = _ref.scrollDroppable;
  var center = state.current.page.borderBoxCenter;
  var draggable2 = state.dimensions.draggables[state.critical.draggable.id];
  var subject = draggable2.page.marginBox;
  if (state.isWindowScrollAllowed) {
    var viewport = state.viewport;
    var _change = getWindowScrollChange({
      dragStartTime,
      viewport,
      subject,
      center,
      shouldUseTimeDampening
    });
    if (_change) {
      scrollWindow2(_change);
      return;
    }
  }
  var droppable2 = getBestScrollableDroppable({
    center,
    destination: whatIsDraggedOver(state.impact),
    droppables: state.dimensions.droppables
  });
  if (!droppable2) {
    return;
  }
  var change = getDroppableScrollChange({
    dragStartTime,
    droppable: droppable2,
    subject,
    center,
    shouldUseTimeDampening
  });
  if (change) {
    scrollDroppable2(droppable2.descriptor.id, change);
  }
};
var createFluidScroller = function(_ref) {
  var scrollWindow2 = _ref.scrollWindow, scrollDroppable2 = _ref.scrollDroppable;
  var scheduleWindowScroll = raf_schd_esm_default(scrollWindow2);
  var scheduleDroppableScroll = raf_schd_esm_default(scrollDroppable2);
  var dragging = null;
  var tryScroll = function tryScroll2(state) {
    !dragging ? true ? invariant(false, "Cannot fluid scroll if not dragging") : invariant(false) : void 0;
    var _dragging = dragging, shouldUseTimeDampening = _dragging.shouldUseTimeDampening, dragStartTime = _dragging.dragStartTime;
    scroll$1({
      state,
      scrollWindow: scheduleWindowScroll,
      scrollDroppable: scheduleDroppableScroll,
      dragStartTime,
      shouldUseTimeDampening
    });
  };
  var cancelPending = function cancelPending2() {
    !dragging ? true ? invariant(false, "Cannot cancel pending fluid scroll when not started") : invariant(false) : void 0;
    scheduleWindowScroll.cancel();
    scheduleDroppableScroll.cancel();
  };
  var start$1 = function start$12(state) {
    start("starting fluid scroller");
    !!dragging ? true ? invariant(false, "Cannot start auto scrolling when already started") : invariant(false) : void 0;
    var dragStartTime = (0, import_now.default)();
    var wasScrollNeeded = false;
    var fakeScrollCallback = function fakeScrollCallback2() {
      wasScrollNeeded = true;
    };
    scroll$1({
      state,
      dragStartTime: 0,
      shouldUseTimeDampening: false,
      scrollWindow: fakeScrollCallback,
      scrollDroppable: fakeScrollCallback
    });
    dragging = {
      dragStartTime,
      shouldUseTimeDampening: wasScrollNeeded
    };
    finish("starting fluid scroller");
    if (wasScrollNeeded) {
      tryScroll(state);
    }
  };
  var stop = function stop2() {
    if (!dragging) {
      return;
    }
    cancelPending();
    dragging = null;
  };
  return {
    start: start$1,
    stop,
    cancelPending,
    scroll: tryScroll
  };
};
var createJumpScroller = function(_ref) {
  var move3 = _ref.move, scrollDroppable2 = _ref.scrollDroppable, scrollWindow2 = _ref.scrollWindow;
  var moveByOffset = function moveByOffset2(state, offset3) {
    var client = add(state.current.client.selection, offset3);
    move3({
      client
    });
  };
  var scrollDroppableAsMuchAsItCan = function scrollDroppableAsMuchAsItCan2(droppable2, change) {
    if (!canScrollDroppable(droppable2, change)) {
      return change;
    }
    var overlap = getDroppableOverlap(droppable2, change);
    if (!overlap) {
      scrollDroppable2(droppable2.descriptor.id, change);
      return null;
    }
    var whatTheDroppableCanScroll = subtract(change, overlap);
    scrollDroppable2(droppable2.descriptor.id, whatTheDroppableCanScroll);
    var remainder = subtract(change, whatTheDroppableCanScroll);
    return remainder;
  };
  var scrollWindowAsMuchAsItCan = function scrollWindowAsMuchAsItCan2(isWindowScrollAllowed, viewport, change) {
    if (!isWindowScrollAllowed) {
      return change;
    }
    if (!canScrollWindow(viewport, change)) {
      return change;
    }
    var overlap = getWindowOverlap(viewport, change);
    if (!overlap) {
      scrollWindow2(change);
      return null;
    }
    var whatTheWindowCanScroll = subtract(change, overlap);
    scrollWindow2(whatTheWindowCanScroll);
    var remainder = subtract(change, whatTheWindowCanScroll);
    return remainder;
  };
  var jumpScroller = function jumpScroller2(state) {
    var request = state.scrollJumpRequest;
    if (!request) {
      return;
    }
    var destination = whatIsDraggedOver(state.impact);
    !destination ? true ? invariant(false, "Cannot perform a jump scroll when there is no destination") : invariant(false) : void 0;
    var droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimensions.droppables[destination], request);
    if (!droppableRemainder) {
      return;
    }
    var viewport = state.viewport;
    var windowRemainder = scrollWindowAsMuchAsItCan(state.isWindowScrollAllowed, viewport, droppableRemainder);
    if (!windowRemainder) {
      return;
    }
    moveByOffset(state, windowRemainder);
  };
  return jumpScroller;
};
var createAutoScroller = function(_ref) {
  var scrollDroppable2 = _ref.scrollDroppable, scrollWindow2 = _ref.scrollWindow, move3 = _ref.move;
  var fluidScroller = createFluidScroller({
    scrollWindow: scrollWindow2,
    scrollDroppable: scrollDroppable2
  });
  var jumpScroll = createJumpScroller({
    move: move3,
    scrollWindow: scrollWindow2,
    scrollDroppable: scrollDroppable2
  });
  var scroll3 = function scroll4(state) {
    if (state.phase !== "DRAGGING") {
      return;
    }
    if (state.movementMode === "FLUID") {
      fluidScroller.scroll(state);
      return;
    }
    if (!state.scrollJumpRequest) {
      return;
    }
    jumpScroll(state);
  };
  var scroller = {
    scroll: scroll3,
    cancelPending: fluidScroller.cancelPending,
    start: fluidScroller.start,
    stop: fluidScroller.stop
  };
  return scroller;
};
var prefix2 = "data-react-beautiful-dnd";
var dragHandle = prefix2 + "-drag-handle";
var draggable = prefix2 + "-draggable";
var droppable = prefix2 + "-droppable";
var makeGetSelector = function makeGetSelector2(context) {
  return function(attribute) {
    return "[" + attribute + '="' + context + '"]';
  };
};
var getStyles = function getStyles2(rules, property) {
  return rules.map(function(rule) {
    var value = rule.styles[property];
    if (!value) {
      return "";
    }
    return rule.selector + " { " + value + " }";
  }).join(" ");
};
var noPointerEvents = "pointer-events: none;";
var getStyles$1 = function(uniqueContext) {
  var getSelector = makeGetSelector(uniqueContext);
  var dragHandle$1 = function() {
    var grabCursor = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ";
    return {
      selector: getSelector(dragHandle),
      styles: {
        always: "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
        resting: grabCursor,
        dragging: noPointerEvents,
        dropAnimating: grabCursor
      }
    };
  }();
  var draggable$1 = function() {
    var transition = "\n      transition: " + transitions.outOfTheWay + ";\n    ";
    return {
      selector: getSelector(draggable),
      styles: {
        dragging: transition,
        dropAnimating: transition,
        userCancel: transition
      }
    };
  }();
  var droppable$1 = {
    selector: getSelector(droppable),
    styles: {
      always: "overflow-anchor: none;"
    }
  };
  var body = {
    selector: "body",
    styles: {
      dragging: "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      "
    }
  };
  var rules = [draggable$1, dragHandle$1, droppable$1, body];
  return {
    always: getStyles(rules, "always"),
    resting: getStyles(rules, "resting"),
    dragging: getStyles(rules, "dragging"),
    dropAnimating: getStyles(rules, "dropAnimating"),
    userCancel: getStyles(rules, "userCancel")
  };
};
var useIsomorphicLayoutEffect2 = typeof window !== "undefined" ? import_react9.useLayoutEffect : import_react9.useEffect;
var getHead = function getHead2() {
  var head = document.querySelector("head");
  !head ? true ? invariant(false, "Cannot find the head to append a style to") : invariant(false) : void 0;
  return head;
};
var createStyleEl = function createStyleEl2() {
  var el = document.createElement("style");
  el.type = "text/css";
  return el;
};
function useStyleMarshal(uniqueId) {
  var uniqueContext = useMemo(function() {
    return "" + uniqueId;
  }, [uniqueId]);
  var styles = useMemo(function() {
    return getStyles$1(uniqueContext);
  }, [uniqueContext]);
  var alwaysRef = (0, import_react9.useRef)(null);
  var dynamicRef = (0, import_react9.useRef)(null);
  var setDynamicStyle = useCallback(memoize_one_esm_default(function(proposed) {
    var el = dynamicRef.current;
    !el ? true ? invariant(false, "Cannot set dynamic style element if it is not set") : invariant(false) : void 0;
    el.textContent = proposed;
  }), []);
  var setAlwaysStyle = useCallback(function(proposed) {
    var el = alwaysRef.current;
    !el ? true ? invariant(false, "Cannot set dynamic style element if it is not set") : invariant(false) : void 0;
    el.textContent = proposed;
  }, []);
  useIsomorphicLayoutEffect2(function() {
    !(!alwaysRef.current && !dynamicRef.current) ? true ? invariant(false, "style elements already mounted") : invariant(false) : void 0;
    var always = createStyleEl();
    var dynamic = createStyleEl();
    alwaysRef.current = always;
    dynamicRef.current = dynamic;
    always.setAttribute(prefix2 + "-always", uniqueContext);
    dynamic.setAttribute(prefix2 + "-dynamic", uniqueContext);
    getHead().appendChild(always);
    getHead().appendChild(dynamic);
    setAlwaysStyle(styles.always);
    setDynamicStyle(styles.resting);
    return function() {
      var remove = function remove2(ref) {
        var current = ref.current;
        !current ? true ? invariant(false, "Cannot unmount ref as it is not set") : invariant(false) : void 0;
        getHead().removeChild(current);
        ref.current = null;
      };
      remove(alwaysRef);
      remove(dynamicRef);
    };
  }, [setAlwaysStyle, setDynamicStyle, styles.always, styles.resting, uniqueContext]);
  var dragging = useCallback(function() {
    return setDynamicStyle(styles.dragging);
  }, [setDynamicStyle, styles.dragging]);
  var dropping = useCallback(function(reason) {
    if (reason === "DROP") {
      setDynamicStyle(styles.dropAnimating);
      return;
    }
    setDynamicStyle(styles.userCancel);
  }, [setDynamicStyle, styles.dropAnimating, styles.userCancel]);
  var resting = useCallback(function() {
    if (!dynamicRef.current) {
      return;
    }
    setDynamicStyle(styles.resting);
  }, [setDynamicStyle, styles.resting]);
  var marshal = useMemo(function() {
    return {
      dragging,
      dropping,
      resting,
      styleContext: uniqueContext
    };
  }, [dragging, dropping, resting, uniqueContext]);
  return marshal;
}
var StoreContext = import_react9.default.createContext(null);
var getBodyElement = function() {
  var body = document.body;
  !body ? true ? invariant(false, "Cannot find document.body") : invariant(false) : void 0;
  return body;
};
var visuallyHidden = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
};
var getId = function getId2(uniqueId) {
  return "react-beautiful-dnd-announcement-" + uniqueId;
};
function useAnnouncer(uniqueId) {
  var id = useMemo(function() {
    return getId(uniqueId);
  }, [uniqueId]);
  var ref = (0, import_react9.useRef)(null);
  (0, import_react9.useEffect)(function() {
    !!ref.current ? true ? invariant(false, "Announcement node already mounted") : invariant(false) : void 0;
    var el = document.createElement("div");
    ref.current = el;
    el.id = id;
    el.setAttribute("aria-live", "assertive");
    el.setAttribute("role", "log");
    el.setAttribute("aria-atomic", "true");
    (0, import_assign2.default)(el.style, visuallyHidden);
    getBodyElement().appendChild(el);
    return function() {
      var toBeRemoved = ref.current;
      !toBeRemoved ? true ? invariant(false, "Cannot unmount announcement node") : invariant(false) : void 0;
      getBodyElement().removeChild(toBeRemoved);
      ref.current = null;
    };
  }, [id]);
  var announce = useCallback(function(message) {
    var el = ref.current;
    if (el) {
      el.textContent = message;
      return;
    }
    true ? warning2('\n      A screen reader message was trying to be announced but it was unable to do so.\n      This can occur if you unmount your <DragDropContext /> in your onDragEnd.\n      Consider calling provided.announce() before the unmount so that the instruction will\n      not be lost for users relying on a screen reader.\n\n      Message not passed to screen reader:\n\n      "' + message + '"\n    ') : void 0;
  }, []);
  return announce;
}
var AppContext = import_react9.default.createContext(null);
var peerDependencies = {
  react: "^16.8.5"
};
var semver = /(\d+)\.(\d+)\.(\d+)/;
var getVersion = function getVersion2(value) {
  var result = semver.exec(value);
  !(result != null) ? true ? invariant(false, "Unable to parse React version " + value) : invariant(false) : void 0;
  var major = Number(result[1]);
  var minor = Number(result[2]);
  var patch3 = Number(result[3]);
  return {
    major,
    minor,
    patch: patch3,
    raw: value
  };
};
var isSatisfied = function isSatisfied2(expected, actual) {
  if (actual.major > expected.major) {
    return true;
  }
  if (actual.major < expected.major) {
    return false;
  }
  if (actual.minor > expected.minor) {
    return true;
  }
  if (actual.minor < expected.minor) {
    return false;
  }
  return actual.patch >= expected.patch;
};
var checkReactVersion = function(peerDepValue, actualValue) {
  var peerDep = getVersion(peerDepValue);
  var actual = getVersion(actualValue);
  if (isSatisfied(peerDep, actual)) {
    return;
  }
  true ? warning2("\n    React version: [" + actual.raw + "]\n    does not satisfy expected peer dependency version: [" + peerDep.raw + "]\n\n    This can result in run time bugs, and even fatal crashes\n  ") : void 0;
};
var suffix = "\n  We expect a html5 doctype: <!doctype html>\n  This is to ensure consistent browser layout and measurement\n\n  More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/doctype.md\n";
var checkDoctype = function(doc) {
  var doctype = doc.doctype;
  if (!doctype) {
    true ? warning2("\n      No <!doctype html> found.\n\n      " + suffix + "\n    ") : void 0;
    return;
  }
  if (doctype.name.toLowerCase() !== "html") {
    true ? warning2("\n      Unexpected <!doctype> found: (" + doctype.name + ")\n\n      " + suffix + "\n    ") : void 0;
  }
  if (doctype.publicId !== "") {
    true ? warning2("\n      Unexpected <!doctype> publicId found: (" + doctype.publicId + ")\n      A html5 doctype does not have a publicId\n\n      " + suffix + "\n    ") : void 0;
  }
};
function useStartupValidation() {
  (0, import_react9.useEffect)(function() {
    if (false) {
      return;
    }
    checkReactVersion(peerDependencies.react, import_react9.default.version);
    checkDoctype(document);
  }, []);
}
function usePrevious(current) {
  var ref = (0, import_react9.useRef)(current);
  (0, import_react9.useEffect)(function() {
    ref.current = current;
  });
  return ref;
}
var createResponders = function createResponders2(props) {
  return {
    onBeforeDragStart: props.onBeforeDragStart,
    onDragStart: props.onDragStart,
    onDragEnd: props.onDragEnd,
    onDragUpdate: props.onDragUpdate
  };
};
function getStore(lazyRef) {
  !lazyRef.current ? true ? invariant(false, "Could not find store from lazy ref") : invariant(false) : void 0;
  return lazyRef.current;
}
function App(props) {
  var uniqueId = props.uniqueId, setOnError = props.setOnError;
  var lazyStoreRef = (0, import_react9.useRef)(null);
  useStartupValidation();
  var lastPropsRef = usePrevious(props);
  var getResponders = useCallback(function() {
    return createResponders(lastPropsRef.current);
  }, [lastPropsRef]);
  var announce = useAnnouncer(uniqueId);
  var styleMarshal = useStyleMarshal(uniqueId);
  var lazyDispatch = useCallback(function(action) {
    getStore(lazyStoreRef).dispatch(action);
  }, []);
  var callbacks = useMemo(function() {
    return bindActionCreators({
      publishWhileDragging: publishWhileDragging$1,
      updateDroppableScroll,
      updateDroppableIsEnabled,
      updateDroppableIsCombineEnabled,
      collectionStarting
    }, lazyDispatch);
  }, [lazyDispatch]);
  var dimensionMarshal = useMemo(function() {
    return createDimensionMarshal(callbacks);
  }, [callbacks]);
  var autoScroller = useMemo(function() {
    return createAutoScroller(_extends2({
      scrollWindow,
      scrollDroppable: dimensionMarshal.scrollDroppable
    }, bindActionCreators({
      move
    }, lazyDispatch)));
  }, [dimensionMarshal.scrollDroppable, lazyDispatch]);
  var store = useMemo(function() {
    return createStore2({
      dimensionMarshal,
      styleMarshal,
      announce,
      autoScroller,
      getResponders
    });
  }, [announce, autoScroller, dimensionMarshal, getResponders, styleMarshal]);
  if (true) {
    if (lazyStoreRef.current && lazyStoreRef.current !== store) {
      true ? warning2("unexpected store change") : void 0;
    }
  }
  lazyStoreRef.current = store;
  var tryResetStore = useCallback(function() {
    var current = getStore(lazyStoreRef);
    var state = current.getState();
    if (state.phase !== "IDLE") {
      current.dispatch(clean$1({
        shouldFlush: true
      }));
    }
  }, []);
  setOnError(tryResetStore);
  var getCanLift = useCallback(function(id) {
    return canStartDrag(getStore(lazyStoreRef).getState(), id);
  }, []);
  var getIsMovementAllowed = useCallback(function() {
    return isMovementAllowed(getStore(lazyStoreRef).getState());
  }, []);
  var appContext = useMemo(function() {
    return {
      marshal: dimensionMarshal,
      style: styleMarshal.styleContext,
      canLift: getCanLift,
      isMovementAllowed: getIsMovementAllowed
    };
  }, [dimensionMarshal, getCanLift, getIsMovementAllowed, styleMarshal.styleContext]);
  (0, import_react9.useEffect)(function() {
    return tryResetStore;
  }, [tryResetStore]);
  return import_react9.default.createElement(AppContext.Provider, {
    value: appContext
  }, import_react9.default.createElement(Provider_default, {
    context: StoreContext,
    store
  }, props.children));
}
var instanceCount = 0;
function DragDropContext(props) {
  var uniqueId = useMemo(function() {
    return instanceCount++;
  }, []);
  return import_react9.default.createElement(ErrorBoundary, null, function(setOnError) {
    return import_react9.default.createElement(App, _extends2({
      setOnError,
      uniqueId
    }, props), props.children);
  });
}
var isEqual$2 = function isEqual5(base) {
  return function(value) {
    return base === value;
  };
};
var isScroll = isEqual$2("scroll");
var isAuto = isEqual$2("auto");
var isVisible$1 = isEqual$2("visible");
var isEither = function isEither2(overflow, fn) {
  return fn(overflow.overflowX) || fn(overflow.overflowY);
};
var isBoth = function isBoth2(overflow, fn) {
  return fn(overflow.overflowX) && fn(overflow.overflowY);
};
var isElementScrollable = function isElementScrollable2(el) {
  var style2 = window.getComputedStyle(el);
  var overflow = {
    overflowX: style2.overflowX,
    overflowY: style2.overflowY
  };
  return isEither(overflow, isScroll) || isEither(overflow, isAuto);
};
var isBodyScrollable = function isBodyScrollable2() {
  if (false) {
    return false;
  }
  var body = getBodyElement();
  var html = document.documentElement;
  !html ? true ? invariant(false) : invariant(false) : void 0;
  if (!isElementScrollable(body)) {
    return false;
  }
  var htmlStyle = window.getComputedStyle(html);
  var htmlOverflow = {
    overflowX: htmlStyle.overflowX,
    overflowY: htmlStyle.overflowY
  };
  if (isBoth(htmlOverflow, isVisible$1)) {
    return false;
  }
  true ? warning2("\n    We have detected that your <body> element might be a scroll container.\n    We have found no reliable way of detecting whether the <body> element is a scroll container.\n    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)\n\n    Because we cannot determine if the <body> is a scroll container, and generally it is not one,\n    we will be treating the <body> as *not* a scroll container\n\n    More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/how-we-detect-scroll-containers.md\n  ") : void 0;
  return false;
};
var getClosestScrollable = function getClosestScrollable2(el) {
  if (el == null) {
    return null;
  }
  if (el === document.body) {
    return isBodyScrollable() ? el : null;
  }
  if (el === document.documentElement) {
    return null;
  }
  if (!isElementScrollable(el)) {
    return getClosestScrollable2(el.parentElement);
  }
  return el;
};
var checkForNestedScrollContainers = function(scrollable) {
  if (!scrollable) {
    return;
  }
  var anotherScrollParent = getClosestScrollable(scrollable.parentElement);
  if (!anotherScrollParent) {
    return;
  }
  true ? warning2("\n    Droppable: unsupported nested scroll container detected.\n    A Droppable can only have one scroll parent (which can be itself)\n    Nested scroll containers are currently not supported.\n\n    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131\n  ") : void 0;
};
var getScroll$1 = function(el) {
  return {
    x: el.scrollLeft,
    y: el.scrollTop
  };
};
var getIsFixed = function getIsFixed2(el) {
  if (!el) {
    return false;
  }
  var style2 = window.getComputedStyle(el);
  if (style2.position === "fixed") {
    return true;
  }
  return getIsFixed2(el.parentElement);
};
var getEnv = function(start3) {
  var closestScrollable = getClosestScrollable(start3);
  var isFixedOnPage = getIsFixed(start3);
  return {
    closestScrollable,
    isFixedOnPage
  };
};
var getClient = function getClient2(targetRef, closestScrollable) {
  var base = getBox(targetRef);
  if (!closestScrollable) {
    return base;
  }
  if (targetRef !== closestScrollable) {
    return base;
  }
  var top = base.paddingBox.top - closestScrollable.scrollTop;
  var left = base.paddingBox.left - closestScrollable.scrollLeft;
  var bottom = top + closestScrollable.scrollHeight;
  var right = left + closestScrollable.scrollWidth;
  var paddingBox = {
    top,
    right,
    bottom,
    left
  };
  var borderBox = expand(paddingBox, base.border);
  var client = createBox({
    borderBox,
    margin: base.margin,
    border: base.border,
    padding: base.padding
  });
  return client;
};
var getDimension = function(_ref) {
  var ref = _ref.ref, descriptor = _ref.descriptor, env = _ref.env, windowScroll = _ref.windowScroll, direction = _ref.direction, isDropDisabled = _ref.isDropDisabled, isCombineEnabled = _ref.isCombineEnabled, shouldClipSubject = _ref.shouldClipSubject;
  var closestScrollable = env.closestScrollable;
  var client = getClient(ref, closestScrollable);
  var page = withScroll(client, windowScroll);
  var closest3 = function() {
    if (!closestScrollable) {
      return null;
    }
    var frameClient = getBox(closestScrollable);
    var scrollSize = {
      scrollHeight: closestScrollable.scrollHeight,
      scrollWidth: closestScrollable.scrollWidth
    };
    return {
      client: frameClient,
      page: withScroll(frameClient, windowScroll),
      scroll: getScroll$1(closestScrollable),
      scrollSize,
      shouldClipSubject
    };
  }();
  var dimension = getDroppableDimension({
    descriptor,
    isEnabled: !isDropDisabled,
    isCombineEnabled,
    isFixedOnPage: env.isFixedOnPage,
    direction,
    client,
    page,
    closest: closest3
  });
  return dimension;
};
function withoutPlaceholder(placeholder, fn) {
  if (!placeholder) {
    return fn();
  }
  var last = placeholder.style.display;
  placeholder.style.display = "none";
  var result = fn();
  placeholder.style.display = last;
  return result;
}
var immediate = {
  passive: false
};
var delayed = {
  passive: true
};
var getListenerOptions = function(options) {
  return options.shouldPublishImmediately ? immediate : delayed;
};
function useRequiredContext(Context) {
  var result = (0, import_react9.useContext)(Context);
  !result ? true ? invariant(false, "Could not find required context") : invariant(false) : void 0;
  return result;
}
var getClosestScrollableFromDrag = function getClosestScrollableFromDrag2(dragging) {
  return dragging && dragging.env.closestScrollable || null;
};
function useDroppableDimensionPublisher(args) {
  var whileDraggingRef = (0, import_react9.useRef)(null);
  var appContext = useRequiredContext(AppContext);
  var marshal = appContext.marshal;
  var previousRef = usePrevious(args);
  var descriptor = useMemo(function() {
    return {
      id: args.droppableId,
      type: args.type
    };
  }, [args.droppableId, args.type]);
  var publishedDescriptorRef = (0, import_react9.useRef)(descriptor);
  var memoizedUpdateScroll = useMemo(function() {
    return memoize_one_esm_default(function(x, y) {
      !whileDraggingRef.current ? true ? invariant(false, "Can only update scroll when dragging") : invariant(false) : void 0;
      var scroll4 = {
        x,
        y
      };
      marshal.updateDroppableScroll(descriptor.id, scroll4);
    });
  }, [descriptor.id, marshal]);
  var getClosestScroll = useCallback(function() {
    var dragging = whileDraggingRef.current;
    if (!dragging || !dragging.env.closestScrollable) {
      return origin;
    }
    return getScroll$1(dragging.env.closestScrollable);
  }, []);
  var updateScroll = useCallback(function() {
    var scroll4 = getClosestScroll();
    memoizedUpdateScroll(scroll4.x, scroll4.y);
  }, [getClosestScroll, memoizedUpdateScroll]);
  var scheduleScrollUpdate = useMemo(function() {
    return raf_schd_esm_default(updateScroll);
  }, [updateScroll]);
  var onClosestScroll = useCallback(function() {
    var dragging = whileDraggingRef.current;
    var closest3 = getClosestScrollableFromDrag(dragging);
    !(dragging && closest3) ? true ? invariant(false, "Could not find scroll options while scrolling") : invariant(false) : void 0;
    var options = dragging.scrollOptions;
    if (options.shouldPublishImmediately) {
      updateScroll();
      return;
    }
    scheduleScrollUpdate();
  }, [scheduleScrollUpdate, updateScroll]);
  var getDimensionAndWatchScroll = useCallback(function(windowScroll, options) {
    !!whileDraggingRef.current ? true ? invariant(false, "Cannot collect a droppable while a drag is occurring") : invariant(false) : void 0;
    var previous = previousRef.current;
    var ref = previous.getDroppableRef();
    !ref ? true ? invariant(false, "Cannot collect without a droppable ref") : invariant(false) : void 0;
    var env = getEnv(ref);
    var dragging = {
      ref,
      descriptor,
      env,
      scrollOptions: options
    };
    whileDraggingRef.current = dragging;
    var dimension = getDimension({
      ref,
      descriptor,
      env,
      windowScroll,
      direction: previous.direction,
      isDropDisabled: previous.isDropDisabled,
      isCombineEnabled: previous.isCombineEnabled,
      shouldClipSubject: !previous.ignoreContainerClipping
    });
    if (env.closestScrollable) {
      env.closestScrollable.addEventListener("scroll", onClosestScroll, getListenerOptions(dragging.scrollOptions));
      if (true) {
        checkForNestedScrollContainers(env.closestScrollable);
      }
    }
    return dimension;
  }, [descriptor, onClosestScroll, previousRef]);
  var recollect = useCallback(function(options) {
    var dragging = whileDraggingRef.current;
    var closest3 = getClosestScrollableFromDrag(dragging);
    !(dragging && closest3) ? true ? invariant(false, "Can only recollect Droppable client for Droppables that have a scroll container") : invariant(false) : void 0;
    var previous = previousRef.current;
    var execute3 = function execute4() {
      return getDimension({
        ref: dragging.ref,
        descriptor: dragging.descriptor,
        env: dragging.env,
        windowScroll: origin,
        direction: previous.direction,
        isDropDisabled: previous.isDropDisabled,
        isCombineEnabled: previous.isCombineEnabled,
        shouldClipSubject: !previous.ignoreContainerClipping
      });
    };
    if (!options.withoutPlaceholder) {
      return execute3();
    }
    return withoutPlaceholder(previous.getPlaceholderRef(), execute3);
  }, [previousRef]);
  var dragStopped = useCallback(function() {
    var dragging = whileDraggingRef.current;
    !dragging ? true ? invariant(false, "Cannot stop drag when no active drag") : invariant(false) : void 0;
    var closest3 = getClosestScrollableFromDrag(dragging);
    whileDraggingRef.current = null;
    if (!closest3) {
      return;
    }
    scheduleScrollUpdate.cancel();
    closest3.removeEventListener("scroll", onClosestScroll, getListenerOptions(dragging.scrollOptions));
  }, [onClosestScroll, scheduleScrollUpdate]);
  var scroll3 = useCallback(function(change) {
    var dragging = whileDraggingRef.current;
    !dragging ? true ? invariant(false, "Cannot scroll when there is no drag") : invariant(false) : void 0;
    var closest3 = getClosestScrollableFromDrag(dragging);
    !closest3 ? true ? invariant(false, "Cannot scroll a droppable with no closest scrollable") : invariant(false) : void 0;
    closest3.scrollTop += change.y;
    closest3.scrollLeft += change.x;
  }, []);
  var callbacks = useMemo(function() {
    return {
      getDimensionAndWatchScroll,
      recollect,
      dragStopped,
      scroll: scroll3
    };
  }, [dragStopped, getDimensionAndWatchScroll, recollect, scroll3]);
  useIsomorphicLayoutEffect2(function() {
    publishedDescriptorRef.current = descriptor;
    marshal.registerDroppable(descriptor, callbacks);
    return function() {
      if (whileDraggingRef.current) {
        true ? warning2("Unsupported: changing the droppableId or type of a Droppable during a drag") : void 0;
        dragStopped();
      }
      marshal.unregisterDroppable(descriptor);
    };
  }, [callbacks, descriptor, dragStopped, marshal]);
  useIsomorphicLayoutEffect2(function() {
    if (!whileDraggingRef.current) {
      return;
    }
    marshal.updateDroppableIsEnabled(publishedDescriptorRef.current.id, !args.isDropDisabled);
  }, [args.isDropDisabled, marshal]);
  useIsomorphicLayoutEffect2(function() {
    if (!whileDraggingRef.current) {
      return;
    }
    marshal.updateDroppableIsCombineEnabled(publishedDescriptorRef.current.id, args.isCombineEnabled);
  }, [args.isCombineEnabled, marshal]);
}
function noop() {
}
var empty = {
  width: 0,
  height: 0,
  margin: noSpacing2
};
var getSize = function getSize2(_ref) {
  var isAnimatingOpenOnMount = _ref.isAnimatingOpenOnMount, placeholder = _ref.placeholder, animate = _ref.animate;
  if (isAnimatingOpenOnMount) {
    return empty;
  }
  if (animate === "close") {
    return empty;
  }
  return {
    height: placeholder.client.borderBox.height,
    width: placeholder.client.borderBox.width,
    margin: placeholder.client.margin
  };
};
var getStyle = function getStyle2(_ref2) {
  var isAnimatingOpenOnMount = _ref2.isAnimatingOpenOnMount, placeholder = _ref2.placeholder, animate = _ref2.animate;
  var size = getSize({
    isAnimatingOpenOnMount,
    placeholder,
    animate
  });
  return {
    display: placeholder.display,
    boxSizing: "border-box",
    width: size.width,
    height: size.height,
    marginTop: size.margin.top,
    marginRight: size.margin.right,
    marginBottom: size.margin.bottom,
    marginLeft: size.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: transitions.placeholder
  };
};
function Placeholder(props) {
  var animateOpenTimerRef = (0, import_react9.useRef)(null);
  var tryClearAnimateOpenTimer = useCallback(function() {
    if (!animateOpenTimerRef.current) {
      return;
    }
    clearTimeout(animateOpenTimerRef.current);
    animateOpenTimerRef.current = null;
  }, []);
  var animate = props.animate, onTransitionEnd = props.onTransitionEnd, onClose = props.onClose, styleContext = props.styleContext;
  var _useState = (0, import_react9.useState)(props.animate === "open"), isAnimatingOpenOnMount = _useState[0], setIsAnimatingOpenOnMount = _useState[1];
  (0, import_react9.useEffect)(function() {
    if (!isAnimatingOpenOnMount) {
      return noop;
    }
    if (animate !== "open") {
      tryClearAnimateOpenTimer();
      setIsAnimatingOpenOnMount(false);
      return noop;
    }
    if (animateOpenTimerRef.current) {
      return noop;
    }
    animateOpenTimerRef.current = setTimeout(function() {
      animateOpenTimerRef.current = null;
      setIsAnimatingOpenOnMount(false);
    });
    return tryClearAnimateOpenTimer;
  }, [animate, isAnimatingOpenOnMount, tryClearAnimateOpenTimer]);
  var onSizeChangeEnd = useCallback(function(event) {
    if (event.propertyName !== "height") {
      return;
    }
    onTransitionEnd();
    if (animate === "close") {
      onClose();
    }
  }, [animate, onClose, onTransitionEnd]);
  var style2 = getStyle({
    isAnimatingOpenOnMount,
    animate: props.animate,
    placeholder: props.placeholder
  });
  return import_react9.default.createElement(props.placeholder.tagName, {
    style: style2,
    "data-react-beautiful-dnd-placeholder": styleContext,
    onTransitionEnd: onSizeChangeEnd,
    ref: props.innerRef
  });
}
var Placeholder$1 = import_react9.default.memo(Placeholder);
var DroppableContext = import_react9.default.createContext(null);
var getWindowFromEl = function(el) {
  return el && el.ownerDocument ? el.ownerDocument.defaultView : window;
};
function isHtmlElement(el) {
  return el instanceof getWindowFromEl(el).HTMLElement;
}
function checkIsValidInnerRef(el) {
  !(el && isHtmlElement(el)) ? true ? invariant(false, "\n    provided.innerRef has not been provided with a HTMLElement.\n\n    You can find a guide on using the innerRef callback functions at:\n    https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md\n  ") : invariant(false) : void 0;
}
function checkOwnProps(props) {
  !props.droppableId ? true ? invariant(false, "A Droppable requires a droppableId prop") : invariant(false) : void 0;
  !(typeof props.isDropDisabled === "boolean") ? true ? invariant(false, "isDropDisabled must be a boolean") : invariant(false) : void 0;
  !(typeof props.isCombineEnabled === "boolean") ? true ? invariant(false, "isCombineEnabled must be a boolean") : invariant(false) : void 0;
  !(typeof props.ignoreContainerClipping === "boolean") ? true ? invariant(false, "ignoreContainerClipping must be a boolean") : invariant(false) : void 0;
}
function checkPlaceholderRef(props, placeholderEl) {
  if (!props.placeholder) {
    return;
  }
  if (placeholderEl) {
    return;
  }
  true ? warning2('\n    Droppable setup issue [droppableId: "' + props.droppableId + '"]:\n    DroppableProvided > placeholder could not be found.\n\n    Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.\n    More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md\n  ') : void 0;
}
function useValidation(_ref) {
  var props = _ref.props, getDroppableRef = _ref.getDroppableRef, getPlaceholderRef = _ref.getPlaceholderRef;
  (0, import_react9.useEffect)(function() {
    if (true) {
      checkOwnProps(props);
      checkIsValidInnerRef(getDroppableRef());
      checkPlaceholderRef(props, getPlaceholderRef());
    }
  });
}
var AnimateInOut = function(_React$PureComponent) {
  _inheritsLoose(AnimateInOut2, _React$PureComponent);
  function AnimateInOut2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.state = {
      isVisible: Boolean(_this.props.on),
      data: _this.props.on,
      animate: _this.props.shouldAnimate && _this.props.on ? "open" : "none"
    };
    _this.onClose = function() {
      if (_this.state.animate !== "close") {
        return;
      }
      _this.setState({
        isVisible: false
      });
    };
    return _this;
  }
  AnimateInOut2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (!props.shouldAnimate) {
      return {
        isVisible: Boolean(props.on),
        data: props.on,
        animate: "none"
      };
    }
    if (props.on) {
      return {
        isVisible: true,
        data: props.on,
        animate: "open"
      };
    }
    if (state.isVisible) {
      return {
        isVisible: true,
        data: state.data,
        animate: "close"
      };
    }
    return {
      isVisible: false,
      animate: "close",
      data: null
    };
  };
  var _proto = AnimateInOut2.prototype;
  _proto.render = function render() {
    if (!this.state.isVisible) {
      return null;
    }
    var provided = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(provided);
  };
  return AnimateInOut2;
}(import_react9.default.PureComponent);
function Droppable(props) {
  var appContext = (0, import_react9.useContext)(AppContext);
  !appContext ? true ? invariant(false, "Could not find app context") : invariant(false) : void 0;
  var styleContext = appContext.style, isMovementAllowed2 = appContext.isMovementAllowed;
  var droppableRef = (0, import_react9.useRef)(null);
  var placeholderRef = (0, import_react9.useRef)(null);
  var children = props.children, droppableId = props.droppableId, type = props.type, direction = props.direction, ignoreContainerClipping = props.ignoreContainerClipping, isDropDisabled = props.isDropDisabled, isCombineEnabled = props.isCombineEnabled, snapshot = props.snapshot, updateViewportMaxScroll3 = props.updateViewportMaxScroll;
  var getDroppableRef = useCallback(function() {
    return droppableRef.current;
  }, []);
  var getPlaceholderRef = useCallback(function() {
    return placeholderRef.current;
  }, []);
  var setDroppableRef = useCallback(function(value) {
    droppableRef.current = value;
  }, []);
  var setPlaceholderRef = useCallback(function(value) {
    placeholderRef.current = value;
  }, []);
  var onPlaceholderTransitionEnd = useCallback(function() {
    if (isMovementAllowed2()) {
      updateViewportMaxScroll3({
        maxScroll: getMaxWindowScroll()
      });
    }
  }, [isMovementAllowed2, updateViewportMaxScroll3]);
  useDroppableDimensionPublisher({
    droppableId,
    type,
    direction,
    isDropDisabled,
    isCombineEnabled,
    ignoreContainerClipping,
    getDroppableRef,
    getPlaceholderRef
  });
  var placeholder = import_react9.default.createElement(AnimateInOut, {
    on: props.placeholder,
    shouldAnimate: props.shouldAnimatePlaceholder
  }, function(_ref) {
    var onClose = _ref.onClose, data = _ref.data, animate = _ref.animate;
    return import_react9.default.createElement(Placeholder$1, {
      placeholder: data,
      onClose,
      innerRef: setPlaceholderRef,
      animate,
      styleContext,
      onTransitionEnd: onPlaceholderTransitionEnd
    });
  });
  var provided = useMemo(function() {
    return {
      innerRef: setDroppableRef,
      placeholder,
      droppableProps: {
        "data-react-beautiful-dnd-droppable": styleContext
      }
    };
  }, [placeholder, setDroppableRef, styleContext]);
  var droppableContext = useMemo(function() {
    return {
      droppableId,
      type
    };
  }, [droppableId, type]);
  useValidation({
    props,
    getDroppableRef: function getDroppableRef2() {
      return droppableRef.current;
    },
    getPlaceholderRef: function getPlaceholderRef2() {
      return placeholderRef.current;
    }
  });
  return import_react9.default.createElement(DroppableContext.Provider, {
    value: droppableContext
  }, children(provided, snapshot));
}
var isStrictEqual = function(a, b) {
  return a === b;
};
var whatIsDraggedOverFromResult = function(result) {
  var combine2 = result.combine, destination = result.destination;
  if (destination) {
    return destination.droppableId;
  }
  if (combine2) {
    return combine2.droppableId;
  }
  return null;
};
var isMatchingType = function isMatchingType2(type, critical) {
  return type === critical.droppable.type;
};
var getDraggable = function getDraggable2(critical, dimensions) {
  return dimensions.draggables[critical.draggable.id];
};
var makeMapStateToProps = function makeMapStateToProps2() {
  var idle2 = {
    placeholder: null,
    shouldAnimatePlaceholder: true,
    snapshot: {
      isDraggingOver: false,
      draggingOverWith: null,
      draggingFromThisWith: null
    }
  };
  var idleWithoutAnimation = _extends2({}, idle2, {
    shouldAnimatePlaceholder: false
  });
  var getMapProps = memoize_one_esm_default(function(id, isDraggingOver, dragging, snapshot) {
    var isHome = dragging.descriptor.droppableId === id;
    if (isHome) {
      return {
        placeholder: dragging.placeholder,
        shouldAnimatePlaceholder: false,
        snapshot
      };
    }
    if (!isDraggingOver) {
      return idle2;
    }
    return {
      placeholder: dragging.placeholder,
      shouldAnimatePlaceholder: true,
      snapshot
    };
  });
  var getSnapshot = memoize_one_esm_default(function(id, isDraggingOver, dragging) {
    var draggableId = dragging.descriptor.id;
    var isHome = dragging.descriptor.droppableId === id;
    var draggingOverWith = isDraggingOver ? draggableId : null;
    var draggingFromThisWith = isHome ? draggableId : null;
    return {
      isDraggingOver,
      draggingOverWith,
      draggingFromThisWith
    };
  });
  var selector2 = function selector3(state, ownProps) {
    var id = ownProps.droppableId;
    var type = ownProps.type;
    if (state.isDragging) {
      var critical = state.critical;
      if (!isMatchingType(type, critical)) {
        return idle2;
      }
      var dragging = getDraggable(critical, state.dimensions);
      var isDraggingOver = whatIsDraggedOver(state.impact) === id;
      var snapshot = getSnapshot(id, isDraggingOver, dragging);
      return getMapProps(id, isDraggingOver, dragging, snapshot);
    }
    if (state.phase === "DROP_ANIMATING") {
      var completed = state.completed;
      if (!isMatchingType(type, completed.critical)) {
        return idle2;
      }
      var _dragging = getDraggable(completed.critical, state.dimensions);
      var _snapshot = getSnapshot(id, whatIsDraggedOverFromResult(completed.result) === id, _dragging);
      return getMapProps(id, whatIsDraggedOver(completed.impact) === id, _dragging, _snapshot);
    }
    if (state.phase === "IDLE" && !state.completed && state.shouldFlush) {
      return idleWithoutAnimation;
    }
    if (state.phase === "IDLE" && state.completed) {
      var _completed = state.completed;
      if (!isMatchingType(type, _completed.critical)) {
        return idle2;
      }
      var wasOver = whatIsDraggedOver(_completed.impact) === id;
      var wasCombining = Boolean(_completed.impact.merge);
      if (state.shouldFlush) {
        return idleWithoutAnimation;
      }
      if (wasOver) {
        return wasCombining ? idle2 : idleWithoutAnimation;
      }
      return idle2;
    }
    return idle2;
  };
  return selector2;
};
var mapDispatchToProps = {
  updateViewportMaxScroll
};
var defaultProps = {
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: false,
  isCombineEnabled: false,
  ignoreContainerClipping: false
};
var ConnectedDroppable = connect_default(makeMapStateToProps, mapDispatchToProps, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Droppable);
ConnectedDroppable.defaultProps = defaultProps;
var zIndexOptions = {
  dragging: 5e3,
  dropAnimating: 4500
};
var getDraggingTransition = function getDraggingTransition2(shouldAnimateDragMovement, dropping) {
  if (dropping) {
    return transitions.drop(dropping.duration);
  }
  if (shouldAnimateDragMovement) {
    return transitions.snap;
  }
  return transitions.fluid;
};
var getDraggingOpacity = function getDraggingOpacity2(isCombining, isDropAnimating) {
  if (!isCombining) {
    return null;
  }
  return isDropAnimating ? combine.opacity.drop : combine.opacity.combining;
};
var getShouldDraggingAnimate = function getShouldDraggingAnimate2(dragging) {
  if (dragging.forceShouldAnimate != null) {
    return dragging.forceShouldAnimate;
  }
  return dragging.mode === "SNAP";
};
function getDraggingStyle(dragging) {
  var dimension = dragging.dimension;
  var box = dimension.client;
  var offset3 = dragging.offset, combineWith = dragging.combineWith, dropping = dragging.dropping;
  var isCombining = Boolean(combineWith);
  var shouldAnimate = getShouldDraggingAnimate(dragging);
  var isDropAnimating = Boolean(dropping);
  var transform = isDropAnimating ? transforms.drop(offset3, isCombining) : transforms.moveTo(offset3);
  var style2 = {
    position: "fixed",
    top: box.marginBox.top,
    left: box.marginBox.left,
    boxSizing: "border-box",
    width: box.borderBox.width,
    height: box.borderBox.height,
    transition: getDraggingTransition(shouldAnimate, dropping),
    transform,
    opacity: getDraggingOpacity(isCombining, isDropAnimating),
    zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
    pointerEvents: "none"
  };
  return style2;
}
function getSecondaryStyle(secondary) {
  return {
    transform: transforms.moveTo(secondary.offset),
    transition: secondary.shouldAnimateDisplacement ? null : "none"
  };
}
function getStyle$1(mapped) {
  return mapped.type === "DRAGGING" ? getDraggingStyle(mapped) : getSecondaryStyle(mapped);
}
var createEventMarshal = function() {
  var isMouseDownHandled = false;
  var handle = function handle2() {
    !!isMouseDownHandled ? true ? invariant(false, "Cannot handle mouse down as it is already handled") : invariant(false) : void 0;
    isMouseDownHandled = true;
  };
  var isHandled = function isHandled2() {
    return isMouseDownHandled;
  };
  var reset = function reset2() {
    isMouseDownHandled = false;
  };
  return {
    handle,
    isHandled,
    reset
  };
};
var getOptions = function getOptions2(shared, fromBinding) {
  return _extends2({}, shared, fromBinding);
};
var bindEvents = function bindEvents2(el, bindings, sharedOptions2) {
  bindings.forEach(function(binding) {
    var options = getOptions(sharedOptions2, binding.options);
    el.addEventListener(binding.eventName, binding.fn, options);
  });
};
var unbindEvents = function unbindEvents2(el, bindings, sharedOptions2) {
  bindings.forEach(function(binding) {
    var options = getOptions(sharedOptions2, binding.options);
    el.removeEventListener(binding.eventName, binding.fn, options);
  });
};
var createScheduler = function(callbacks) {
  var memoizedMove = memoize_one_esm_default(function(x, y) {
    var point = {
      x,
      y
    };
    callbacks.onMove(point);
  });
  var move3 = raf_schd_esm_default(function(point) {
    return memoizedMove(point.x, point.y);
  });
  var moveUp3 = raf_schd_esm_default(callbacks.onMoveUp);
  var moveDown3 = raf_schd_esm_default(callbacks.onMoveDown);
  var moveRight3 = raf_schd_esm_default(callbacks.onMoveRight);
  var moveLeft3 = raf_schd_esm_default(callbacks.onMoveLeft);
  var windowScrollMove = raf_schd_esm_default(callbacks.onWindowScroll);
  var cancel = function cancel2() {
    move3.cancel();
    moveUp3.cancel();
    moveDown3.cancel();
    moveRight3.cancel();
    moveLeft3.cancel();
    windowScrollMove.cancel();
  };
  return {
    move: move3,
    moveUp: moveUp3,
    moveDown: moveDown3,
    moveRight: moveRight3,
    moveLeft: moveLeft3,
    windowScrollMove,
    cancel
  };
};
var tab = 9;
var enter = 13;
var escape = 27;
var space = 32;
var pageUp = 33;
var pageDown = 34;
var end = 35;
var home = 36;
var arrowLeft = 37;
var arrowUp = 38;
var arrowRight = 39;
var arrowDown = 40;
var supportedEventName = function() {
  var base = "visibilitychange";
  if (typeof document === "undefined") {
    return base;
  }
  var candidates = [base, "ms" + base, "webkit" + base, "moz" + base, "o" + base];
  var supported = find(candidates, function(eventName) {
    return "on" + eventName in document;
  });
  return supported || base;
}();
var sharedOptions = {
  capture: true
};
var createPostDragEventPreventer = function(getWindow) {
  var isBound = false;
  var bind = function bind2() {
    if (isBound) {
      return;
    }
    isBound = true;
    bindEvents(getWindow(), pointerEvents, sharedOptions);
  };
  var unbind = function unbind2() {
    if (!isBound) {
      return;
    }
    isBound = false;
    unbindEvents(getWindow(), pointerEvents, sharedOptions);
  };
  var pointerEvents = [{
    eventName: "click",
    fn: function fn(event) {
      event.preventDefault();
      unbind();
    }
  }, {
    eventName: "mousedown",
    fn: unbind
  }, {
    eventName: "touchstart",
    fn: unbind
  }];
  var preventNext = function preventNext2() {
    if (isBound) {
      unbind();
    }
    bind();
  };
  var preventer = {
    preventNext,
    abort: unbind
  };
  return preventer;
};
var sloppyClickThreshold = 5;
var isSloppyClickThresholdExceeded = function(original, current) {
  return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
};
var _preventedKeys;
var preventedKeys = (_preventedKeys = {}, _preventedKeys[enter] = true, _preventedKeys[tab] = true, _preventedKeys);
var preventStandardKeyEvents = function(event) {
  if (preventedKeys[event.keyCode]) {
    event.preventDefault();
  }
};
var primaryButton = 0;
var noop$1 = function noop2() {
};
var mouseDownMarshal = createEventMarshal();
function useMouseSensor(args) {
  var canStartCapturing = args.canStartCapturing, getWindow = args.getWindow, callbacks = args.callbacks, onCaptureStart = args.onCaptureStart, onCaptureEnd = args.onCaptureEnd;
  var pendingRef = (0, import_react9.useRef)(null);
  var isDraggingRef = (0, import_react9.useRef)(false);
  var unbindWindowEventsRef = (0, import_react9.useRef)(noop$1);
  var getIsCapturing = useCallback(function() {
    return Boolean(pendingRef.current || isDraggingRef.current);
  }, []);
  var schedule = useMemo(function() {
    !!getIsCapturing() ? true ? invariant(false, "Should not recreate scheduler while capturing") : invariant(false) : void 0;
    return createScheduler(callbacks);
  }, [callbacks, getIsCapturing]);
  var postDragEventPreventer = useMemo(function() {
    return createPostDragEventPreventer(getWindow);
  }, [getWindow]);
  var stop = useCallback(function() {
    if (!getIsCapturing()) {
      return;
    }
    schedule.cancel();
    unbindWindowEventsRef.current();
    var shouldBlockClick = isDraggingRef.current;
    mouseDownMarshal.reset();
    if (shouldBlockClick) {
      postDragEventPreventer.preventNext();
    }
    pendingRef.current = null;
    isDraggingRef.current = false;
    onCaptureEnd();
  }, [getIsCapturing, onCaptureEnd, postDragEventPreventer, schedule]);
  var cancel = useCallback(function() {
    var wasDragging = isDraggingRef.current;
    stop();
    if (wasDragging) {
      callbacks.onCancel();
    }
  }, [callbacks, stop]);
  var startDragging = useCallback(function() {
    !!isDraggingRef.current ? true ? invariant(false, "Cannot start a drag while dragging") : invariant(false) : void 0;
    var pending = pendingRef.current;
    !pending ? true ? invariant(false, "Cannot start a drag without a pending drag") : invariant(false) : void 0;
    pendingRef.current = null;
    isDraggingRef.current = true;
    callbacks.onLift({
      clientSelection: pending,
      movementMode: "FLUID"
    });
  }, [callbacks]);
  var windowBindings = useMemo(function() {
    !!getIsCapturing() ? true ? invariant(false, "Should not recreate window bindings while capturing") : invariant(false) : void 0;
    var bindings = [{
      eventName: "mousemove",
      fn: function fn(event) {
        var button = event.button, clientX = event.clientX, clientY = event.clientY;
        if (button !== primaryButton) {
          return;
        }
        var point = {
          x: clientX,
          y: clientY
        };
        if (isDraggingRef.current) {
          event.preventDefault();
          schedule.move(point);
          return;
        }
        var pending = pendingRef.current;
        if (!pending) {
          stop();
          true ? invariant(false, "Expected there to be an active or pending drag when window mousemove event is received") : invariant(false);
        }
        if (!isSloppyClickThresholdExceeded(pending, point)) {
          return;
        }
        event.preventDefault();
        startDragging();
      }
    }, {
      eventName: "mouseup",
      fn: function fn(event) {
        var wasDragging = isDraggingRef.current;
        stop();
        if (wasDragging) {
          event.preventDefault();
          callbacks.onDrop();
        }
      }
    }, {
      eventName: "mousedown",
      fn: function fn(event) {
        if (isDraggingRef.current) {
          event.preventDefault();
        }
        cancel();
      }
    }, {
      eventName: "keydown",
      fn: function fn(event) {
        if (pendingRef.current) {
          stop();
          return;
        }
        if (event.keyCode === escape) {
          event.preventDefault();
          cancel();
          return;
        }
        preventStandardKeyEvents(event);
      }
    }, {
      eventName: "resize",
      fn: cancel
    }, {
      eventName: "scroll",
      options: {
        passive: true,
        capture: false
      },
      fn: function fn(event) {
        if (event.currentTarget !== getWindow()) {
          return;
        }
        if (pendingRef.current) {
          stop();
          return;
        }
        schedule.windowScrollMove();
      }
    }, {
      eventName: "webkitmouseforcedown",
      fn: function fn() {
        cancel();
      }
    }, {
      eventName: supportedEventName,
      fn: cancel
    }];
    return bindings;
  }, [getIsCapturing, cancel, startDragging, schedule, stop, callbacks, getWindow]);
  var bindWindowEvents = useCallback(function() {
    var win = getWindow();
    var options = {
      capture: true
    };
    unbindWindowEventsRef.current = function() {
      return unbindEvents(win, windowBindings, options);
    };
    bindEvents(win, windowBindings, options);
  }, [getWindow, windowBindings]);
  var startPendingDrag = useCallback(function(point) {
    !!pendingRef.current ? true ? invariant(false, "Expected there to be no pending drag") : invariant(false) : void 0;
    pendingRef.current = point;
    onCaptureStart(stop);
    bindWindowEvents();
  }, [bindWindowEvents, onCaptureStart, stop]);
  var onMouseDown = useCallback(function(event) {
    if (mouseDownMarshal.isHandled()) {
      return;
    }
    !!getIsCapturing() ? true ? invariant(false, "Should not be able to perform a mouse down while a drag or pending drag is occurring") : invariant(false) : void 0;
    if (!canStartCapturing(event)) {
      return;
    }
    if (event.button !== primaryButton) {
      return;
    }
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
      return;
    }
    mouseDownMarshal.handle();
    event.preventDefault();
    var point = {
      x: event.clientX,
      y: event.clientY
    };
    startPendingDrag(point);
  }, [canStartCapturing, getIsCapturing, startPendingDrag]);
  return onMouseDown;
}
function isElement(el) {
  return el instanceof getWindowFromEl(el).Element;
}
var interactiveTagNames = {
  input: true,
  button: true,
  textarea: true,
  select: true,
  option: true,
  optgroup: true,
  video: true,
  audio: true
};
var isAnInteractiveElement = function isAnInteractiveElement2(parent, current) {
  if (current == null) {
    return false;
  }
  var hasAnInteractiveTag = Boolean(interactiveTagNames[current.tagName.toLowerCase()]);
  if (hasAnInteractiveTag) {
    return true;
  }
  var attribute = current.getAttribute("contenteditable");
  if (attribute === "true" || attribute === "") {
    return true;
  }
  if (current === parent) {
    return false;
  }
  return isAnInteractiveElement2(parent, current.parentElement);
};
var shouldAllowDraggingFromTarget = function(event, canDragInteractiveElements) {
  if (canDragInteractiveElements) {
    return true;
  }
  var target = event.target, currentTarget = event.currentTarget;
  if (!isElement(target) || !isElement(currentTarget)) {
    return true;
  }
  return !isAnInteractiveElement(currentTarget, target);
};
var getBorderBoxCenterPosition = function(el) {
  return getRect(el.getBoundingClientRect()).center;
};
var _scrollJumpKeys;
var scrollJumpKeys = (_scrollJumpKeys = {}, _scrollJumpKeys[pageDown] = true, _scrollJumpKeys[pageUp] = true, _scrollJumpKeys[home] = true, _scrollJumpKeys[end] = true, _scrollJumpKeys);
function noop$2() {
}
function useKeyboardSensor(args) {
  var canStartCapturing = args.canStartCapturing, getWindow = args.getWindow, callbacks = args.callbacks, onCaptureStart = args.onCaptureStart, onCaptureEnd = args.onCaptureEnd, getDraggableRef = args.getDraggableRef;
  var isDraggingRef = (0, import_react9.useRef)(false);
  var unbindWindowEventsRef = (0, import_react9.useRef)(noop$2);
  var getIsDragging = useCallback(function() {
    return isDraggingRef.current;
  }, []);
  var schedule = useMemo(function() {
    !!getIsDragging() ? true ? invariant(false, "Should not recreate scheduler while capturing") : invariant(false) : void 0;
    return createScheduler(callbacks);
  }, [callbacks, getIsDragging]);
  var stop = useCallback(function() {
    if (!getIsDragging()) {
      return;
    }
    schedule.cancel();
    unbindWindowEventsRef.current();
    isDraggingRef.current = false;
    onCaptureEnd();
  }, [getIsDragging, onCaptureEnd, schedule]);
  var cancel = useCallback(function() {
    var wasDragging = isDraggingRef.current;
    stop();
    if (wasDragging) {
      callbacks.onCancel();
    }
  }, [callbacks, stop]);
  var windowBindings = useMemo(function() {
    !!getIsDragging() ? true ? invariant(false, "Should not recreate window bindings when dragging") : invariant(false) : void 0;
    return [{
      eventName: "mousedown",
      fn: cancel
    }, {
      eventName: "mouseup",
      fn: cancel
    }, {
      eventName: "click",
      fn: cancel
    }, {
      eventName: "touchstart",
      fn: cancel
    }, {
      eventName: "resize",
      fn: cancel
    }, {
      eventName: "wheel",
      fn: cancel,
      options: {
        passive: true
      }
    }, {
      eventName: "scroll",
      options: {
        capture: false
      },
      fn: function fn(event) {
        if (event.currentTarget !== getWindow()) {
          return;
        }
        callbacks.onWindowScroll();
      }
    }, {
      eventName: supportedEventName,
      fn: cancel
    }];
  }, [callbacks, cancel, getIsDragging, getWindow]);
  var bindWindowEvents = useCallback(function() {
    var win = getWindow();
    var options = {
      capture: true
    };
    unbindWindowEventsRef.current = function() {
      return unbindEvents(win, windowBindings, options);
    };
    bindEvents(win, windowBindings, options);
  }, [getWindow, windowBindings]);
  var startDragging = useCallback(function() {
    !!isDraggingRef.current ? true ? invariant(false, "Cannot start a drag while dragging") : invariant(false) : void 0;
    var ref = getDraggableRef();
    !ref ? true ? invariant(false, "Cannot start a keyboard drag without a draggable ref") : invariant(false) : void 0;
    isDraggingRef.current = true;
    onCaptureStart(stop);
    bindWindowEvents();
    var center = getBorderBoxCenterPosition(ref);
    callbacks.onLift({
      clientSelection: center,
      movementMode: "SNAP"
    });
  }, [bindWindowEvents, callbacks, getDraggableRef, onCaptureStart, stop]);
  var onKeyDown = useCallback(function(event) {
    if (!getIsDragging()) {
      if (event.defaultPrevented) {
        return;
      }
      if (!canStartCapturing(event)) {
        return;
      }
      if (event.keyCode !== space) {
        return;
      }
      event.preventDefault();
      startDragging();
      return;
    }
    if (event.keyCode === escape) {
      event.preventDefault();
      cancel();
      return;
    }
    if (event.keyCode === space) {
      event.preventDefault();
      stop();
      callbacks.onDrop();
      return;
    }
    if (event.keyCode === arrowDown) {
      event.preventDefault();
      schedule.moveDown();
      return;
    }
    if (event.keyCode === arrowUp) {
      event.preventDefault();
      schedule.moveUp();
      return;
    }
    if (event.keyCode === arrowRight) {
      event.preventDefault();
      schedule.moveRight();
      return;
    }
    if (event.keyCode === arrowLeft) {
      event.preventDefault();
      schedule.moveLeft();
      return;
    }
    if (scrollJumpKeys[event.keyCode]) {
      event.preventDefault();
      return;
    }
    preventStandardKeyEvents(event);
  }, [callbacks, canStartCapturing, cancel, getIsDragging, schedule, startDragging, stop]);
  return onKeyDown;
}
var timeForLongPress = 120;
var forcePressThreshold = 0.15;
var touchStartMarshal = createEventMarshal();
var noop$3 = function noop3() {
};
function useTouchSensor(args) {
  var callbacks = args.callbacks, getWindow = args.getWindow, canStartCapturing = args.canStartCapturing, getShouldRespectForcePress = args.getShouldRespectForcePress, onCaptureStart = args.onCaptureStart, onCaptureEnd = args.onCaptureEnd;
  var pendingRef = (0, import_react9.useRef)(null);
  var isDraggingRef = (0, import_react9.useRef)(false);
  var hasMovedRef = (0, import_react9.useRef)(false);
  var unbindWindowEventsRef = (0, import_react9.useRef)(noop$3);
  var getIsCapturing = useCallback(function() {
    return Boolean(pendingRef.current || isDraggingRef.current);
  }, []);
  var postDragClickPreventer = useMemo(function() {
    return createPostDragEventPreventer(getWindow);
  }, [getWindow]);
  var schedule = useMemo(function() {
    !!getIsCapturing() ? true ? invariant(false, "Should not recreate scheduler while capturing") : invariant(false) : void 0;
    return createScheduler(callbacks);
  }, [callbacks, getIsCapturing]);
  var stop = useCallback(function() {
    if (!getIsCapturing()) {
      return;
    }
    schedule.cancel();
    unbindWindowEventsRef.current();
    touchStartMarshal.reset();
    hasMovedRef.current = false;
    onCaptureEnd();
    if (isDraggingRef.current) {
      postDragClickPreventer.preventNext();
      isDraggingRef.current = false;
      return;
    }
    var pending = pendingRef.current;
    !pending ? true ? invariant(false, "Expected a pending drag") : invariant(false) : void 0;
    clearTimeout(pending.longPressTimerId);
    pendingRef.current = null;
  }, [getIsCapturing, onCaptureEnd, postDragClickPreventer, schedule]);
  var cancel = useCallback(function() {
    var wasDragging = isDraggingRef.current;
    stop();
    if (wasDragging) {
      callbacks.onCancel();
    }
  }, [callbacks, stop]);
  var windowBindings = useMemo(function() {
    !!getIsCapturing() ? true ? invariant(false, "Should not recreate window bindings while capturing") : invariant(false) : void 0;
    var bindings = [{
      eventName: "touchmove",
      options: {
        passive: false,
        capture: false
      },
      fn: function fn(event) {
        if (!isDraggingRef.current) {
          stop();
          return;
        }
        if (!hasMovedRef.current) {
          hasMovedRef.current = true;
        }
        var touch = event.touches[0];
        if (!touch) {
          return;
        }
        var point = {
          x: touch.clientX,
          y: touch.clientY
        };
        event.preventDefault();
        schedule.move(point);
      }
    }, {
      eventName: "touchend",
      fn: function fn(event) {
        if (!isDraggingRef.current) {
          stop();
          return;
        }
        event.preventDefault();
        stop();
        callbacks.onDrop();
      }
    }, {
      eventName: "touchcancel",
      fn: function fn(event) {
        if (!isDraggingRef.current) {
          stop();
          return;
        }
        event.preventDefault();
        cancel();
      }
    }, {
      eventName: "touchstart",
      fn: cancel
    }, {
      eventName: "orientationchange",
      fn: cancel
    }, {
      eventName: "resize",
      fn: cancel
    }, {
      eventName: "scroll",
      options: {
        passive: true,
        capture: false
      },
      fn: function fn() {
        if (pendingRef.current) {
          stop();
          return;
        }
        schedule.windowScrollMove();
      }
    }, {
      eventName: "contextmenu",
      fn: function fn(event) {
        event.preventDefault();
      }
    }, {
      eventName: "keydown",
      fn: function fn(event) {
        if (!isDraggingRef.current) {
          cancel();
          return;
        }
        if (event.keyCode === escape) {
          event.preventDefault();
        }
        cancel();
      }
    }, {
      eventName: "touchforcechange",
      fn: function fn(event) {
        var touch = event.touches[0];
        var isForcePress = touch.force >= forcePressThreshold;
        if (!isForcePress) {
          return;
        }
        var shouldRespect = getShouldRespectForcePress();
        if (pendingRef.current) {
          if (shouldRespect) {
            cancel();
          }
          return;
        }
        if (shouldRespect) {
          if (hasMovedRef.current) {
            event.preventDefault();
            return;
          }
          cancel();
          return;
        }
        event.preventDefault();
      }
    }, {
      eventName: supportedEventName,
      fn: cancel
    }];
    return bindings;
  }, [callbacks, cancel, getIsCapturing, getShouldRespectForcePress, schedule, stop]);
  var bindWindowEvents = useCallback(function() {
    var win = getWindow();
    var options = {
      capture: true
    };
    unbindWindowEventsRef.current = function() {
      return unbindEvents(win, windowBindings, options);
    };
    bindEvents(win, windowBindings, options);
  }, [getWindow, windowBindings]);
  var startDragging = useCallback(function() {
    var pending = pendingRef.current;
    !pending ? true ? invariant(false, "Cannot start a drag without a pending drag") : invariant(false) : void 0;
    isDraggingRef.current = true;
    pendingRef.current = null;
    hasMovedRef.current = false;
    callbacks.onLift({
      clientSelection: pending.point,
      movementMode: "FLUID"
    });
  }, [callbacks]);
  var startPendingDrag = useCallback(function(event) {
    !!pendingRef.current ? true ? invariant(false, "Expected there to be no pending drag") : invariant(false) : void 0;
    var touch = event.touches[0];
    var clientX = touch.clientX, clientY = touch.clientY;
    var point = {
      x: clientX,
      y: clientY
    };
    var longPressTimerId = setTimeout(startDragging, timeForLongPress);
    var pending = {
      point,
      longPressTimerId
    };
    pendingRef.current = pending;
    onCaptureStart(stop);
    bindWindowEvents();
  }, [bindWindowEvents, onCaptureStart, startDragging, stop]);
  var onTouchStart = function onTouchStart2(event) {
    if (touchStartMarshal.isHandled()) {
      return;
    }
    !!getIsCapturing() ? true ? invariant(false, "Should not be able to perform a touch start while a drag or pending drag is occurring") : invariant(false) : void 0;
    if (!canStartCapturing(event)) {
      return;
    }
    touchStartMarshal.handle();
    startPendingDrag(event);
  };
  useIsomorphicLayoutEffect2(function webkitHack() {
    var unbind = bindEvents(window, [{
      eventName: "touchmove",
      fn: noop$3,
      options: {
        capture: false,
        passive: false
      }
    }]);
    return unbind;
  }, []);
  return onTouchStart;
}
function isSvgElement(el) {
  return Boolean(getWindowFromEl(el).SVGElement) && el instanceof getWindowFromEl(el).SVGElement;
}
var selector = "[" + dragHandle + "]";
var throwIfSVG = function throwIfSVG2(el) {
  !!isSvgElement(el) ? true ? invariant(false, "A drag handle cannot be an SVGElement: it has inconsistent focus support.\n\n    More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/dragging-svgs.md") : invariant(false) : void 0;
};
var getDragHandleRef = function getDragHandleRef2(draggableRef) {
  if (draggableRef.hasAttribute(dragHandle)) {
    throwIfSVG(draggableRef);
    return draggableRef;
  }
  var el = draggableRef.querySelector(selector);
  throwIfSVG(draggableRef);
  !el ? true ? invariant(false, "\n      Cannot find drag handle element inside of Draggable.\n      Please be sure to apply the {...provided.dragHandleProps} to your Draggable\n\n      More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/draggable.md\n    ") : invariant(false) : void 0;
  !isHtmlElement(el) ? true ? invariant(false, "A drag handle must be a HTMLElement") : invariant(false) : void 0;
  return el;
};
function useValidation$1(_ref) {
  var isEnabled2 = _ref.isEnabled, getDraggableRef = _ref.getDraggableRef;
  (0, import_react9.useEffect)(function() {
    if (true) {
      if (!isEnabled2) {
        return;
      }
      var draggableRef = getDraggableRef();
      !draggableRef ? true ? invariant(false, "Drag handle was unable to find draggable ref") : invariant(false) : void 0;
      getDragHandleRef(draggableRef);
    }
  }, [getDraggableRef, isEnabled2]);
}
var retainingFocusFor = null;
var listenerOptions = {
  capture: true
};
var clearRetentionOnFocusChange = function() {
  var isBound = false;
  var bind = function bind2() {
    if (isBound) {
      return;
    }
    isBound = true;
    window.addEventListener("focus", onWindowFocusChange, listenerOptions);
  };
  var unbind = function unbind2() {
    if (!isBound) {
      return;
    }
    isBound = false;
    window.removeEventListener("focus", onWindowFocusChange, listenerOptions);
  };
  var onWindowFocusChange = function onWindowFocusChange2() {
    unbind();
    retainingFocusFor = null;
  };
  var result = function result2() {
    return bind();
  };
  result.cancel = function() {
    return unbind();
  };
  return result;
}();
var retain = function retain2(id) {
  retainingFocusFor = id;
  clearRetentionOnFocusChange();
};
var tryRestoreFocus = function tryRestoreFocus2(id, draggableRef) {
  if (!retainingFocusFor) {
    return;
  }
  if (id !== retainingFocusFor) {
    return;
  }
  retainingFocusFor = null;
  clearRetentionOnFocusChange.cancel();
  var dragHandleRef = getDragHandleRef(draggableRef);
  if (!dragHandleRef) {
    true ? warning2("Could not find drag handle in the DOM to focus on it") : void 0;
    return;
  }
  dragHandleRef.focus();
};
var retainer = {
  retain,
  tryRestoreFocus
};
function noop$4() {
}
function useFocusRetainer(args) {
  var isFocusedRef = (0, import_react9.useRef)(false);
  var lastArgsRef = usePrevious(args);
  var getDraggableRef = args.getDraggableRef;
  var onFocus = useCallback(function() {
    isFocusedRef.current = true;
  }, []);
  var onBlur = useCallback(function() {
    isFocusedRef.current = false;
  }, []);
  useIsomorphicLayoutEffect2(function() {
    var first = lastArgsRef.current;
    if (!first.isEnabled) {
      return noop$4;
    }
    var draggable2 = getDraggableRef();
    !draggable2 ? true ? invariant(false, "Drag handle could not obtain draggable ref") : invariant(false) : void 0;
    var dragHandle2 = getDragHandleRef(draggable2);
    retainer.tryRestoreFocus(first.draggableId, dragHandle2);
    return function() {
      var last = lastArgsRef.current;
      var shouldRetainFocus = function() {
        if (!last.isEnabled) {
          return false;
        }
        if (!isFocusedRef.current) {
          return false;
        }
        return last.isDragging || last.isDropAnimating;
      }();
      if (shouldRetainFocus) {
        retainer.retain(last.draggableId);
      }
    };
  }, [getDraggableRef, lastArgsRef]);
  var lastDraggableRef = (0, import_react9.useRef)(null);
  useIsomorphicLayoutEffect2(function() {
    if (!lastDraggableRef.current) {
      return;
    }
    var draggableRef = getDraggableRef();
    if (!draggableRef) {
      return;
    }
    if (draggableRef === lastDraggableRef.current) {
      return;
    }
    if (isFocusedRef.current && lastArgsRef.current.isEnabled) {
      getDragHandleRef(draggableRef).focus();
    }
  });
  useIsomorphicLayoutEffect2(function() {
    lastDraggableRef.current = getDraggableRef();
  });
  return {
    onBlur,
    onFocus
  };
}
function preventHtml5Dnd(event) {
  event.preventDefault();
}
function useDragHandle(args) {
  var capturingRef = (0, import_react9.useRef)(null);
  var onCaptureStart = useCallback(function(abort) {
    !!capturingRef.current ? true ? invariant(false, "Cannot start capturing while something else is") : invariant(false) : void 0;
    capturingRef.current = {
      abort
    };
  }, []);
  var onCaptureEnd = useCallback(function() {
    !capturingRef.current ? true ? invariant(false, "Cannot stop capturing while nothing is capturing") : invariant(false) : void 0;
    capturingRef.current = null;
  }, []);
  var abortCapture = useCallback(function() {
    !capturingRef.current ? true ? invariant(false, "Cannot abort capture when there is none") : invariant(false) : void 0;
    capturingRef.current.abort();
  }, []);
  var _useRequiredContext = useRequiredContext(AppContext), canLift = _useRequiredContext.canLift, styleContext = _useRequiredContext.style;
  var isDragging = args.isDragging, isEnabled2 = args.isEnabled, draggableId = args.draggableId, callbacks = args.callbacks, getDraggableRef = args.getDraggableRef, getShouldRespectForcePress = args.getShouldRespectForcePress, canDragInteractiveElements = args.canDragInteractiveElements;
  var lastArgsRef = usePrevious(args);
  useValidation$1({
    isEnabled: isEnabled2,
    getDraggableRef
  });
  var getWindow = useCallback(function() {
    return getWindowFromEl(getDraggableRef());
  }, [getDraggableRef]);
  var canStartCapturing = useCallback(function(event) {
    if (!isEnabled2) {
      return false;
    }
    if (capturingRef.current) {
      return false;
    }
    if (!canLift(draggableId)) {
      return false;
    }
    return shouldAllowDraggingFromTarget(event, canDragInteractiveElements);
  }, [canDragInteractiveElements, canLift, draggableId, isEnabled2]);
  var _useFocusRetainer = useFocusRetainer(args), onBlur = _useFocusRetainer.onBlur, onFocus = _useFocusRetainer.onFocus;
  var mouseArgs = useMemo(function() {
    return {
      callbacks,
      getDraggableRef,
      getWindow,
      canStartCapturing,
      onCaptureStart,
      onCaptureEnd,
      getShouldRespectForcePress
    };
  }, [callbacks, getDraggableRef, getWindow, canStartCapturing, onCaptureStart, onCaptureEnd, getShouldRespectForcePress]);
  var onMouseDown = useMouseSensor(mouseArgs);
  var keyboardArgs = useMemo(function() {
    return {
      callbacks,
      getDraggableRef,
      getWindow,
      canStartCapturing,
      onCaptureStart,
      onCaptureEnd
    };
  }, [callbacks, canStartCapturing, getDraggableRef, getWindow, onCaptureEnd, onCaptureStart]);
  var onKeyDown = useKeyboardSensor(keyboardArgs);
  var touchArgs = useMemo(function() {
    return {
      callbacks,
      getDraggableRef,
      getWindow,
      canStartCapturing,
      getShouldRespectForcePress,
      onCaptureStart,
      onCaptureEnd
    };
  }, [callbacks, getDraggableRef, getWindow, canStartCapturing, getShouldRespectForcePress, onCaptureStart, onCaptureEnd]);
  var onTouchStart = useTouchSensor(touchArgs);
  useIsomorphicLayoutEffect2(function() {
    return function() {
      if (!capturingRef.current) {
        return;
      }
      abortCapture();
      if (lastArgsRef.current.isDragging) {
        lastArgsRef.current.callbacks.onCancel();
      }
    };
  }, []);
  if (!isEnabled2 && capturingRef.current) {
    abortCapture();
    if (lastArgsRef.current.isDragging) {
      true ? warning2("You have disabled dragging on a Draggable while it was dragging. The drag has been cancelled") : void 0;
      callbacks.onCancel();
    }
  }
  useIsomorphicLayoutEffect2(function() {
    if (!isDragging && capturingRef.current) {
      abortCapture();
    }
  }, [abortCapture, isDragging]);
  var props = useMemo(function() {
    if (!isEnabled2) {
      return null;
    }
    return {
      onMouseDown,
      onKeyDown,
      onTouchStart,
      onFocus,
      onBlur,
      tabIndex: 0,
      "data-react-beautiful-dnd-drag-handle": styleContext,
      "aria-roledescription": "Draggable item. Press space bar to lift",
      draggable: false,
      onDragStart: preventHtml5Dnd
    };
  }, [isEnabled2, onBlur, onFocus, onKeyDown, onMouseDown, onTouchStart, styleContext]);
  return props;
}
function getDimension$1(descriptor, el, windowScroll) {
  if (windowScroll === void 0) {
    windowScroll = origin;
  }
  var computedStyles = window.getComputedStyle(el);
  var borderBox = el.getBoundingClientRect();
  var client = calculateBox(borderBox, computedStyles);
  var page = withScroll(client, windowScroll);
  var placeholder = {
    client,
    tagName: el.tagName.toLowerCase(),
    display: computedStyles.display
  };
  var displaceBy = {
    x: client.marginBox.width,
    y: client.marginBox.height
  };
  var dimension = {
    descriptor,
    placeholder,
    displaceBy,
    client,
    page
  };
  return dimension;
}
function useDraggableDimensionPublisher(args) {
  var draggableId = args.draggableId, index = args.index, getDraggableRef = args.getDraggableRef;
  var appContext = useRequiredContext(AppContext);
  var marshal = appContext.marshal;
  var droppableContext = useRequiredContext(DroppableContext);
  var droppableId = droppableContext.droppableId, type = droppableContext.type;
  var descriptor = useMemo(function() {
    var result = {
      id: draggableId,
      droppableId,
      type,
      index
    };
    return result;
  }, [draggableId, droppableId, index, type]);
  var publishedDescriptorRef = (0, import_react9.useRef)(descriptor);
  var makeDimension = useCallback(function(windowScroll) {
    var latest = publishedDescriptorRef.current;
    var el = getDraggableRef();
    !el ? true ? invariant(false, "Cannot get dimension when no ref is set") : invariant(false) : void 0;
    return getDimension$1(latest, el, windowScroll);
  }, [getDraggableRef]);
  useIsomorphicLayoutEffect2(function() {
    marshal.registerDraggable(publishedDescriptorRef.current, makeDimension);
    return function() {
      return marshal.unregisterDraggable(publishedDescriptorRef.current);
    };
  }, [makeDimension, marshal]);
  useIsomorphicLayoutEffect2(function() {
    if (publishedDescriptorRef.current === descriptor) {
      return;
    }
    var previous = publishedDescriptorRef.current;
    publishedDescriptorRef.current = descriptor;
    marshal.updateDraggable(previous, descriptor, makeDimension);
  }, [descriptor, makeDimension, marshal]);
}
function checkOwnProps$1(props) {
  !(0, import_is_integer.default)(props.index) ? true ? invariant(false, "Draggable requires an integer index prop") : invariant(false) : void 0;
  !props.draggableId ? true ? invariant(false, "Draggable requires a draggableId") : invariant(false) : void 0;
  !(typeof props.isDragDisabled === "boolean") ? true ? invariant(false, "isDragDisabled must be a boolean") : invariant(false) : void 0;
}
function checkForOutdatedProps(props) {
  if (Object.prototype.hasOwnProperty.call(props, "shouldRespectForceTouch")) {
    true ? warning2("shouldRespectForceTouch has been renamed to shouldRespectForcePress") : void 0;
  }
}
function useValidation$2(props, getRef) {
  (0, import_react9.useEffect)(function() {
    if (true) {
      checkOwnProps$1(props);
      checkForOutdatedProps(props);
      checkIsValidInnerRef(getRef());
    }
  });
}
function Draggable(props) {
  var ref = (0, import_react9.useRef)(null);
  var setRef = useCallback(function(el) {
    ref.current = el;
  }, []);
  var getRef = useCallback(function() {
    return ref.current;
  }, []);
  var appContext = useRequiredContext(AppContext);
  useValidation$2(props, getRef);
  var children = props.children, draggableId = props.draggableId, isDragDisabled = props.isDragDisabled, shouldRespectForcePress = props.shouldRespectForcePress, canDragInteractiveElements = props.disableInteractiveElementBlocking, index = props.index, mapped = props.mapped, moveUpAction = props.moveUp, moveAction = props.move, dropAction = props.drop, moveDownAction = props.moveDown, moveRightAction = props.moveRight, moveLeftAction = props.moveLeft, moveByWindowScrollAction = props.moveByWindowScroll, liftAction = props.lift, dropAnimationFinishedAction = props.dropAnimationFinished;
  var forPublisher = useMemo(function() {
    return {
      draggableId,
      index,
      getDraggableRef: getRef
    };
  }, [draggableId, getRef, index]);
  useDraggableDimensionPublisher(forPublisher);
  var onLift = useCallback(function(options) {
    start("LIFT");
    var el = ref.current;
    !el ? true ? invariant(false) : invariant(false) : void 0;
    !!isDragDisabled ? true ? invariant(false, "Cannot lift a Draggable when it is disabled") : invariant(false) : void 0;
    var clientSelection = options.clientSelection, movementMode = options.movementMode;
    liftAction({
      id: draggableId,
      clientSelection,
      movementMode
    });
    finish("LIFT");
  }, [draggableId, isDragDisabled, liftAction]);
  var getShouldRespectForcePress = useCallback(function() {
    return shouldRespectForcePress;
  }, [shouldRespectForcePress]);
  var callbacks = useMemo(function() {
    return {
      onLift,
      onMove: function onMove(clientSelection) {
        return moveAction({
          client: clientSelection
        });
      },
      onDrop: function onDrop() {
        return dropAction({
          reason: "DROP"
        });
      },
      onCancel: function onCancel() {
        return dropAction({
          reason: "CANCEL"
        });
      },
      onMoveUp: moveUpAction,
      onMoveDown: moveDownAction,
      onMoveRight: moveRightAction,
      onMoveLeft: moveLeftAction,
      onWindowScroll: function onWindowScroll() {
        return moveByWindowScrollAction({
          newScroll: getWindowScroll3()
        });
      }
    };
  }, [dropAction, moveAction, moveByWindowScrollAction, moveDownAction, moveLeftAction, moveRightAction, moveUpAction, onLift]);
  var isDragging = mapped.type === "DRAGGING";
  var isDropAnimating = mapped.type === "DRAGGING" && Boolean(mapped.dropping);
  var dragHandleArgs = useMemo(function() {
    return {
      draggableId,
      isDragging,
      isDropAnimating,
      isEnabled: !isDragDisabled,
      callbacks,
      getDraggableRef: getRef,
      canDragInteractiveElements,
      getShouldRespectForcePress
    };
  }, [callbacks, canDragInteractiveElements, draggableId, getRef, getShouldRespectForcePress, isDragDisabled, isDragging, isDropAnimating]);
  var dragHandleProps = useDragHandle(dragHandleArgs);
  var onMoveEnd = useCallback(function(event) {
    if (mapped.type !== "DRAGGING") {
      return;
    }
    if (!mapped.dropping) {
      return;
    }
    if (event.propertyName !== "transform") {
      return;
    }
    dropAnimationFinishedAction();
  }, [dropAnimationFinishedAction, mapped]);
  var provided = useMemo(function() {
    var style2 = getStyle$1(mapped);
    var onTransitionEnd = mapped.type === "DRAGGING" && mapped.dropping ? onMoveEnd : null;
    var result = {
      innerRef: setRef,
      draggableProps: {
        "data-react-beautiful-dnd-draggable": appContext.style,
        style: style2,
        onTransitionEnd
      },
      dragHandleProps
    };
    return result;
  }, [appContext.style, dragHandleProps, mapped, onMoveEnd, setRef]);
  return children(provided, mapped.snapshot);
}
var getCombineWithFromResult = function getCombineWithFromResult2(result) {
  return result.combine ? result.combine.draggableId : null;
};
var getCombineWithFromImpact = function getCombineWithFromImpact2(impact) {
  return impact.merge ? impact.merge.combine.draggableId : null;
};
var makeMapStateToProps$1 = function makeMapStateToProps3() {
  var getDraggingSnapshot = memoize_one_esm_default(function(mode, draggingOver, combineWith, dropping) {
    return {
      isDragging: true,
      isDropAnimating: Boolean(dropping),
      dropAnimation: dropping,
      mode,
      draggingOver,
      combineWith,
      combineTargetFor: null
    };
  });
  var getSecondarySnapshot = memoize_one_esm_default(function(combineTargetFor) {
    return {
      isDragging: false,
      isDropAnimating: false,
      dropAnimation: null,
      mode: null,
      draggingOver: null,
      combineTargetFor,
      combineWith: null
    };
  });
  var defaultMapProps = {
    mapped: {
      type: "SECONDARY",
      offset: origin,
      combineTargetFor: null,
      shouldAnimateDisplacement: true,
      snapshot: getSecondarySnapshot(null)
    }
  };
  var memoizedOffset = memoize_one_esm_default(function(x, y) {
    return {
      x,
      y
    };
  });
  var getDraggingProps = memoize_one_esm_default(function(offset3, mode, dimension, draggingOver, combineWith, forceShouldAnimate) {
    return {
      mapped: {
        type: "DRAGGING",
        dropping: null,
        draggingOver,
        combineWith,
        mode,
        offset: offset3,
        dimension,
        forceShouldAnimate,
        snapshot: getDraggingSnapshot(mode, draggingOver, combineWith, null)
      }
    };
  });
  var getSecondaryProps = memoize_one_esm_default(function(offset3, combineTargetFor, shouldAnimateDisplacement) {
    if (combineTargetFor === void 0) {
      combineTargetFor = null;
    }
    return {
      mapped: {
        type: "SECONDARY",
        offset: offset3,
        combineTargetFor,
        shouldAnimateDisplacement,
        snapshot: getSecondarySnapshot(combineTargetFor)
      }
    };
  });
  var getSecondaryMovement = function getSecondaryMovement2(ownId, draggingId, impact) {
    var map = impact.movement.map;
    var displacement = map[ownId];
    var movement = impact.movement;
    var merge = impact.merge;
    var isCombinedWith = Boolean(merge && merge.combine.draggableId === ownId);
    var displacedBy = movement.displacedBy.point;
    var offset3 = memoizedOffset(displacedBy.x, displacedBy.y);
    if (isCombinedWith) {
      return getSecondaryProps(displacement ? offset3 : origin, draggingId, displacement ? displacement.shouldAnimate : true);
    }
    if (!displacement) {
      return null;
    }
    if (!displacement.isVisible) {
      return null;
    }
    return getSecondaryProps(offset3, null, displacement.shouldAnimate);
  };
  var draggingSelector = function draggingSelector2(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id !== ownProps.draggableId) {
        return null;
      }
      var offset3 = state.current.client.offset;
      var dimension = state.dimensions.draggables[ownProps.draggableId];
      var mode = state.movementMode;
      var draggingOver = whatIsDraggedOver(state.impact);
      var combineWith = getCombineWithFromImpact(state.impact);
      var forceShouldAnimate = state.forceShouldAnimate;
      return getDraggingProps(memoizedOffset(offset3.x, offset3.y), mode, dimension, draggingOver, combineWith, forceShouldAnimate);
    }
    if (state.phase === "DROP_ANIMATING") {
      var completed = state.completed;
      if (completed.result.draggableId !== ownProps.draggableId) {
        return null;
      }
      var _dimension = state.dimensions.draggables[ownProps.draggableId];
      var result = completed.result;
      var _mode = result.mode;
      var _draggingOver = whatIsDraggedOverFromResult(result);
      var _combineWith = getCombineWithFromResult(result);
      var duration = state.dropDuration;
      var dropping = {
        duration,
        curve: curves.drop,
        moveTo: state.newHomeClientOffset,
        opacity: _combineWith ? combine.opacity.drop : null,
        scale: _combineWith ? combine.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: state.newHomeClientOffset,
          dimension: _dimension,
          dropping,
          draggingOver: _draggingOver,
          combineWith: _combineWith,
          mode: _mode,
          forceShouldAnimate: null,
          snapshot: getDraggingSnapshot(_mode, _draggingOver, _combineWith, dropping)
        }
      };
    }
    return null;
  };
  var secondarySelector = function secondarySelector2(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id === ownProps.draggableId) {
        return null;
      }
      return getSecondaryMovement(ownProps.draggableId, state.critical.draggable.id, state.impact);
    }
    if (state.phase === "DROP_ANIMATING") {
      var completed = state.completed;
      if (completed.result.draggableId === ownProps.draggableId) {
        return null;
      }
      return getSecondaryMovement(ownProps.draggableId, completed.result.draggableId, completed.impact);
    }
    return null;
  };
  var selector2 = function selector3(state, ownProps) {
    return draggingSelector(state, ownProps) || secondarySelector(state, ownProps) || defaultMapProps;
  };
  return selector2;
};
var mapDispatchToProps$1 = {
  lift,
  move,
  moveUp,
  moveDown,
  moveLeft,
  moveRight,
  moveByWindowScroll,
  drop,
  dropAnimationFinished
};
var defaultProps$1 = {
  isDragDisabled: false,
  disableInteractiveElementBlocking: false,
  shouldRespectForcePress: false
};
var ConnectedDraggable = connect_default(makeMapStateToProps$1, mapDispatchToProps$1, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Draggable);
ConnectedDraggable.defaultProps = defaultProps$1;

// .yarn/cache/@babel-runtime-npm-7.23.5-6e68b78aa3-0f1669f639.zip/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}

// .yarn/cache/@babel-runtime-npm-7.23.5-6e68b78aa3-0f1669f639.zip/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}

// .yarn/cache/@babel-runtime-npm-7.23.5-6e68b78aa3-0f1669f639.zip/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}

// .yarn/cache/@babel-runtime-npm-7.23.5-6e68b78aa3-0f1669f639.zip/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

// .yarn/cache/@babel-runtime-npm-7.23.5-6e68b78aa3-0f1669f639.zip/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// .yarn/cache/@babel-runtime-npm-7.23.5-6e68b78aa3-0f1669f639.zip/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

// .yarn/__virtual__/@atlaskit-tree-virtual-fc12252a2f/0/cache/@atlaskit-tree-npm-8.8.7-4e826b86c3-9da4774d00.zip/node_modules/@atlaskit/tree/dist/esm/utils/path.js
var isSamePath = function isSamePath2(a, b) {
  if (a === b) {
    return true;
  }
  return a.length === b.length && a.every(function(v, i) {
    return v === b[i];
  });
};
var hasSameParent = function hasSameParent2(a, b) {
  return isSamePath(getParentPath(a), getParentPath(b));
};
var getParentPath = function getParentPath2(child) {
  return child.slice(0, child.length - 1);
};
var isTopOfSubtree = function isTopOfSubtree2(belowPath, abovePath) {
  return !abovePath || isParentOf(abovePath, belowPath);
};
var isParentOf = function isParentOf2(parent, child) {
  return isSamePath(parent, getParentPath(child));
};
var getIndexAmongSiblings = function getIndexAmongSiblings2(path) {
  var lastIndex = path[path.length - 1];
  return lastIndex;
};
var getPathOnLevel = function getPathOnLevel2(path, level) {
  return path.slice(0, level);
};
var moveAfterPath = function moveAfterPath2(after, from) {
  var newPath = _toConsumableArray(after);
  var movedDownOnTheSameLevel = isLowerSibling(newPath, from);
  if (!movedDownOnTheSameLevel) {
    newPath[newPath.length - 1] += 1;
  }
  return newPath;
};
var isLowerSibling = function isLowerSibling2(a, other) {
  return hasSameParent(a, other) && getIndexAmongSiblings(a) > getIndexAmongSiblings(other);
};

// .yarn/__virtual__/@atlaskit-tree-virtual-fc12252a2f/0/cache/@atlaskit-tree-npm-8.8.7-4e826b86c3-9da4774d00.zip/node_modules/@atlaskit/tree/dist/esm/utils/mutateTree.js
function ownKeys2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var mutateTree = function mutateTree2(tree, itemId, mutation) {
  var itemToChange = tree.items[itemId];
  if (!itemToChange) {
    return tree;
  }
  return {
    // rootId should not change
    rootId: tree.rootId,
    items: _objectSpread(_objectSpread({}, tree.items), {}, _defineProperty({}, itemId, _objectSpread(_objectSpread({}, itemToChange), mutation)))
  };
};

// .yarn/__virtual__/@atlaskit-tree-virtual-fc12252a2f/0/cache/@atlaskit-tree-npm-8.8.7-4e826b86c3-9da4774d00.zip/node_modules/@atlaskit/tree/dist/esm/utils/tree.js
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var flattenTree = function flattenTree2(tree) {
  var path = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return tree.items[tree.rootId] ? tree.items[tree.rootId].children.reduce(function(accum, itemId, index) {
    var item = tree.items[itemId];
    var currentPath = [].concat(_toConsumableArray(path), [index]);
    var currentItem = createFlattenedItem(item, currentPath);
    var children = flattenChildren(tree, item, currentPath);
    return [].concat(_toConsumableArray(accum), [currentItem], _toConsumableArray(children));
  }, []) : [];
};
var createFlattenedItem = function createFlattenedItem2(item, currentPath) {
  return {
    item,
    path: currentPath
  };
};
var flattenChildren = function flattenChildren2(tree, item, currentPath) {
  return item.isExpanded ? flattenTree({
    rootId: item.id,
    items: tree.items
  }, currentPath) : [];
};
var getItem = function getItem2(tree, path) {
  var cursor = tree.items[tree.rootId];
  var _iterator = _createForOfIteratorHelper(path), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var i = _step.value;
      cursor = tree.items[cursor.children[i]];
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return cursor;
};
var getParent = function getParent2(tree, path) {
  var parentPath = getParentPath(path);
  return getItem(tree, parentPath);
};
var getTreePosition = function getTreePosition2(tree, path) {
  var parent = getParent(tree, path);
  var index = getIndexAmongSiblings(path);
  return {
    parentId: parent.id,
    index
  };
};
var hasLoadedChildren = function hasLoadedChildren2(item) {
  return !!item.hasChildren && item.children.length > 0;
};
var isLeafItem = function isLeafItem2(item) {
  return !item.hasChildren;
};
var removeItemFromTree = function removeItemFromTree2(tree, position3) {
  var sourceParent = tree.items[position3.parentId];
  var newSourceChildren = _toConsumableArray(sourceParent.children);
  var itemRemoved = newSourceChildren.splice(position3.index, 1)[0];
  var newTree = mutateTree(tree, position3.parentId, {
    children: newSourceChildren,
    hasChildren: newSourceChildren.length > 0,
    isExpanded: newSourceChildren.length > 0 && sourceParent.isExpanded
  });
  return {
    tree: newTree,
    itemRemoved
  };
};
var addItemToTree = function addItemToTree2(tree, position3, item) {
  var destinationParent = tree.items[position3.parentId];
  var newDestinationChildren = _toConsumableArray(destinationParent.children);
  if (typeof position3.index === "undefined") {
    if (hasLoadedChildren(destinationParent) || isLeafItem(destinationParent)) {
      newDestinationChildren.push(item);
    }
  } else {
    newDestinationChildren.splice(position3.index, 0, item);
  }
  return mutateTree(tree, position3.parentId, {
    children: newDestinationChildren,
    hasChildren: true
  });
};

// .yarn/__virtual__/@atlaskit-tree-virtual-fc12252a2f/0/cache/@atlaskit-tree-npm-8.8.7-4e826b86c3-9da4774d00.zip/node_modules/@atlaskit/tree/dist/esm/utils/handy.js
var noop4 = function noop5() {
};
var between = function between2(min, max, number) {
  return Math.min(max, Math.max(min, number));
};

// .yarn/__virtual__/@atlaskit-tree-virtual-fc12252a2f/0/cache/@atlaskit-tree-npm-8.8.7-4e826b86c3-9da4774d00.zip/node_modules/@atlaskit/tree/dist/esm/utils/flat-tree.js
var getFlatItemPath = function getFlatItemPath2(flattenedTree, sourceIndex) {
  return flattenedTree[sourceIndex].path;
};
var getSourcePath = getFlatItemPath;
var getDestinationPath = function getDestinationPath2(flattenedTree, sourceIndex, destinationIndex, level) {
  var down = destinationIndex > sourceIndex;
  var sourcePath = getSourcePath(flattenedTree, sourceIndex);
  var sameIndex = destinationIndex === sourceIndex;
  var upperPath = down ? flattenedTree[destinationIndex].path : flattenedTree[destinationIndex - 1] && flattenedTree[destinationIndex - 1].path;
  var lowerPath = down || sameIndex ? flattenedTree[destinationIndex + 1] && flattenedTree[destinationIndex + 1].path : flattenedTree[destinationIndex].path;
  if (sameIndex) {
    if (typeof level !== "number") {
      return sourcePath;
    }
    if (!upperPath) {
      return sourcePath;
    }
    var minLevel = lowerPath ? lowerPath.length : 1;
    var maxLevel = Math.max(sourcePath.length, upperPath.length);
    var finalLevel = between(minLevel, maxLevel, level);
    var sameLevel = finalLevel === sourcePath.length;
    if (sameLevel) {
      return sourcePath;
    }
    var previousPathOnTheFinalLevel = getPathOnLevel(upperPath, finalLevel);
    return moveAfterPath(previousPathOnTheFinalLevel, sourcePath);
  }
  if (lowerPath && isTopOfSubtree(lowerPath, upperPath)) {
    return lowerPath;
  }
  if (upperPath && lowerPath && hasSameParent(upperPath, lowerPath)) {
    if (down && hasSameParent(upperPath, sourcePath)) {
      return upperPath;
    }
    return lowerPath;
  }
  if (upperPath) {
    var _finalLevel = calculateFinalLevel(sourcePath, upperPath, lowerPath, level);
    var _previousPathOnTheFinalLevel = getPathOnLevel(upperPath, _finalLevel);
    return moveAfterPath(_previousPathOnTheFinalLevel, sourcePath);
  }
  return sourcePath;
};
var calculateFinalLevel = function calculateFinalLevel2(sourcePath, upperPath, lowerPath, level) {
  var upperLevel = upperPath.length;
  var lowerLevel = lowerPath ? lowerPath.length : 1;
  var sourceLevel = sourcePath.length;
  if (typeof level === "number") {
    return between(lowerLevel, upperLevel, level);
  }
  return sourceLevel <= lowerLevel ? lowerLevel : upperLevel;
};
var getItemById = function getItemById2(flattenedTree, id) {
  return flattenedTree.find(function(item) {
    return item.item.id === id;
  });
};
var getIndexById = function getIndexById2(flattenedTree, id) {
  return flattenedTree.findIndex(function(item) {
    return item.item.id === id;
  });
};

// .yarn/__virtual__/@atlaskit-tree-virtual-fc12252a2f/0/cache/@atlaskit-tree-npm-8.8.7-4e826b86c3-9da4774d00.zip/node_modules/@atlaskit/tree/dist/esm/components/Tree/Tree-utils.js
function ownKeys3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys3(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var calculateFinalDropPositions = function calculateFinalDropPositions2(tree, flattenedTree, dragState) {
  var source = dragState.source, destination = dragState.destination, combine2 = dragState.combine, horizontalLevel = dragState.horizontalLevel;
  var sourcePath = getSourcePath(flattenedTree, source.index);
  var sourcePosition = getTreePosition(tree, sourcePath);
  if (combine2) {
    return {
      sourcePosition,
      destinationPosition: {
        parentId: combine2.draggableId
      }
    };
  }
  if (!destination) {
    return {
      sourcePosition,
      destinationPosition: void 0
    };
  }
  var destinationPath = getDestinationPath(flattenedTree, source.index, destination.index, horizontalLevel);
  var destinationPosition = _objectSpread3({}, getTreePosition(tree, destinationPath));
  return {
    sourcePosition,
    destinationPosition
  };
};

// .yarn/__virtual__/@atlaskit-tree-virtual-fc12252a2f/0/cache/@atlaskit-tree-npm-8.8.7-4e826b86c3-9da4774d00.zip/node_modules/@atlaskit/tree/dist/esm/components/TreeItem/TreeItem.js
var import_react10 = __toESM(require_react());

// .yarn/__virtual__/@atlaskit-tree-virtual-fc12252a2f/0/cache/@atlaskit-tree-npm-8.8.7-4e826b86c3-9da4774d00.zip/node_modules/@atlaskit/tree/dist/esm/utils/react.js
var sameProps = function sameProps2(oldProps, newProps, props) {
  return props.find(function(p) {
    return oldProps[p] !== newProps[p];
  }) === void 0;
};

// .yarn/__virtual__/@atlaskit-tree-virtual-fc12252a2f/0/cache/@atlaskit-tree-npm-8.8.7-4e826b86c3-9da4774d00.zip/node_modules/@atlaskit/tree/dist/esm/components/TreeItem/TreeItem.js
function ownKeys4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys4(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys4(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var TreeItem = function(_Component) {
  _inherits(TreeItem2, _Component);
  var _super = _createSuper(TreeItem2);
  function TreeItem2() {
    var _this;
    _classCallCheck(this, TreeItem2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "patchDraggableProps", function(draggableProps, snapshot) {
      var _this$props = _this.props, path = _this$props.path, offsetPerLevel = _this$props.offsetPerLevel;
      var transitions2 = draggableProps.style && draggableProps.style.transition ? [draggableProps.style.transition] : [];
      if (snapshot.dropAnimation) {
        transitions2.push(
          // @ts-ignore
          "padding-left ".concat(snapshot.dropAnimation.duration, "s ").concat(snapshot.dropAnimation.curve)
        );
      }
      var transition = transitions2.join(", ");
      return _objectSpread4(_objectSpread4({}, draggableProps), {}, {
        style: _objectSpread4(_objectSpread4({}, draggableProps.style), {}, {
          paddingLeft: (path.length - 1) * offsetPerLevel,
          // @ts-ignore
          transition
        })
      });
    });
    return _this;
  }
  _createClass(TreeItem2, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !sameProps(this.props, nextProps, ["item", "provided", "snapshot", "onCollapse", "onExpand"]) || !isSamePath(this.props.path, nextProps.path) || // also rerender tree item even if the item is not draggable, this allows draggable/nondraggable items to behave the same
      this.props.provided.dragHandleProps === null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props, item = _this$props2.item, path = _this$props2.path, _onExpand = _this$props2.onExpand, _onCollapse = _this$props2.onCollapse, renderItem = _this$props2.renderItem, provided = _this$props2.provided, snapshot = _this$props2.snapshot, itemRef = _this$props2.itemRef;
      var innerRef = function innerRef2(el) {
        itemRef(item.id, el);
        provided.innerRef(el);
      };
      var finalProvided = {
        draggableProps: this.patchDraggableProps(provided.draggableProps, snapshot),
        dragHandleProps: provided.dragHandleProps,
        innerRef
      };
      return renderItem({
        item,
        depth: path.length - 1,
        onExpand: function onExpand(itemId) {
          return _onExpand(itemId, path);
        },
        onCollapse: function onCollapse(itemId) {
          return _onCollapse(itemId, path);
        },
        provided: finalProvided,
        snapshot
      });
    }
  }]);
  return TreeItem2;
}(import_react10.Component);

// .yarn/__virtual__/@atlaskit-tree-virtual-fc12252a2f/0/cache/@atlaskit-tree-npm-8.8.7-4e826b86c3-9da4774d00.zip/node_modules/@atlaskit/tree/dist/esm/utils/delayed-function.js
var DelayedFunction = function() {
  function DelayedFunction2(delay) {
    _classCallCheck(this, DelayedFunction2);
    this.delay = delay;
  }
  _createClass(DelayedFunction2, [{
    key: "start",
    value: function start3(fn) {
      this.stop();
      this.timeoutId = window.setTimeout(fn, this.delay);
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = void 0;
      }
    }
  }]);
  return DelayedFunction2;
}();

// .yarn/__virtual__/@atlaskit-tree-virtual-fc12252a2f/0/cache/@atlaskit-tree-npm-8.8.7-4e826b86c3-9da4774d00.zip/node_modules/@atlaskit/tree/dist/esm/components/Tree/Tree.js
function ownKeys5(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread5(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys5(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys5(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _createSuper2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct2() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var Tree = function(_Component) {
  _inherits(Tree2, _Component);
  var _super = _createSuper2(Tree2);
  function Tree2() {
    var _this;
    _classCallCheck(this, Tree2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      flattenedTree: [],
      draggedItemId: void 0
    });
    _defineProperty(_assertThisInitialized(_this), "itemsElement", {});
    _defineProperty(_assertThisInitialized(_this), "expandTimer", new DelayedFunction(500));
    _defineProperty(_assertThisInitialized(_this), "onDragStart", function(result) {
      var onDragStart3 = _this.props.onDragStart;
      _this.dragState = {
        source: result.source,
        destination: result.source,
        mode: result.mode
      };
      _this.setState({
        draggedItemId: result.draggableId
      });
      if (onDragStart3) {
        onDragStart3(result.draggableId);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onDragUpdate", function(update2) {
      var onExpand = _this.props.onExpand;
      var flattenedTree = _this.state.flattenedTree;
      if (!_this.dragState) {
        return;
      }
      _this.expandTimer.stop();
      if (update2.combine) {
        var draggableId = update2.combine.draggableId;
        var item = getItemById(flattenedTree, draggableId);
        if (item && _this.isExpandable(item)) {
          _this.expandTimer.start(function() {
            return onExpand(draggableId, item.path);
          });
        }
      }
      _this.dragState = _objectSpread5(_objectSpread5({}, _this.dragState), {}, {
        destination: update2.destination,
        combine: update2.combine
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onDropAnimating", function() {
      _this.expandTimer.stop();
    });
    _defineProperty(_assertThisInitialized(_this), "onDragEnd", function(result) {
      var _this$props = _this.props, onDragEnd3 = _this$props.onDragEnd, tree = _this$props.tree;
      var flattenedTree = _this.state.flattenedTree;
      _this.expandTimer.stop();
      var finalDragState = _objectSpread5(_objectSpread5({}, _this.dragState), {}, {
        source: result.source,
        destination: result.destination,
        combine: result.combine
      });
      _this.setState({
        draggedItemId: void 0
      });
      var _calculateFinalDropPo = calculateFinalDropPositions(tree, flattenedTree, finalDragState), sourcePosition = _calculateFinalDropPo.sourcePosition, destinationPosition = _calculateFinalDropPo.destinationPosition;
      onDragEnd3(sourcePosition, destinationPosition);
      _this.dragState = void 0;
    });
    _defineProperty(_assertThisInitialized(_this), "onPointerMove", function() {
      if (_this.dragState) {
        _this.dragState = _objectSpread5(_objectSpread5({}, _this.dragState), {}, {
          horizontalLevel: _this.getDroppedLevel()
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "calculateEffectivePath", function(flatItem, snapshot) {
      var _this$state = _this.state, flattenedTree = _this$state.flattenedTree, draggedItemId = _this$state.draggedItemId;
      if (_this.dragState && draggedItemId === flatItem.item.id && (_this.dragState.destination || _this.dragState.combine)) {
        var _this$dragState = _this.dragState, source = _this$dragState.source, destination = _this$dragState.destination, combine2 = _this$dragState.combine, horizontalLevel = _this$dragState.horizontalLevel, mode = _this$dragState.mode;
        if (mode === "SNAP" || snapshot.isDropAnimating) {
          if (destination) {
            return getDestinationPath(flattenedTree, source.index, destination.index, horizontalLevel);
          }
          if (combine2) {
            return getDestinationPath(flattenedTree, source.index, getIndexById(flattenedTree, combine2.draggableId), horizontalLevel);
          }
        }
      }
      return flatItem.path;
    });
    _defineProperty(_assertThisInitialized(_this), "isExpandable", function(item) {
      return !!item.item.hasChildren && !item.item.isExpanded;
    });
    _defineProperty(_assertThisInitialized(_this), "getDroppedLevel", function() {
      var offsetPerLevel = _this.props.offsetPerLevel;
      var draggedItemId = _this.state.draggedItemId;
      if (!_this.dragState || !_this.containerElement) {
        return void 0;
      }
      var containerLeft = getBox(_this.containerElement).contentBox.left;
      var itemElement = _this.itemsElement[draggedItemId];
      if (itemElement) {
        var currentLeft = getBox(itemElement).contentBox.left;
        var relativeLeft = Math.max(currentLeft - containerLeft, 0);
        return Math.floor((relativeLeft + offsetPerLevel / 2) / offsetPerLevel) + 1;
      }
      return void 0;
    });
    _defineProperty(_assertThisInitialized(_this), "patchDroppableProvided", function(provided) {
      return _objectSpread5(_objectSpread5({}, provided), {}, {
        innerRef: function innerRef(el) {
          _this.containerElement = el;
          provided.innerRef(el);
        }
      });
    });
    _defineProperty(_assertThisInitialized(_this), "setItemRef", function(itemId, el) {
      if (!!el) {
        _this.itemsElement[itemId] = el;
      }
    });
    _defineProperty(_assertThisInitialized(_this), "renderItems", function() {
      var flattenedTree = _this.state.flattenedTree;
      return flattenedTree.map(_this.renderItem);
    });
    _defineProperty(_assertThisInitialized(_this), "renderItem", function(flatItem, index) {
      var isDragEnabled = _this.props.isDragEnabled;
      if (isDragEnabled === false) {
        return _this.renderTreeItem({
          flatItem,
          path: flatItem.path,
          provided: {
            draggableProps: {
              "data-react-beautiful-dnd-draggable": ""
            },
            innerRef: function innerRef() {
            },
            dragHandleProps: null
          },
          snapshot: {
            isDragging: false,
            isDropAnimating: false
          }
        });
      }
      var isDragDisabled = typeof isDragEnabled === "function" ? !isDragEnabled(flatItem.item) : !isDragEnabled;
      return import_react12.default.createElement(ConnectedDraggable, {
        key: flatItem.item.id,
        draggableId: flatItem.item.id.toString(),
        index,
        isDragDisabled
      }, _this.renderDraggableItem(flatItem));
    });
    _defineProperty(_assertThisInitialized(_this), "renderDraggableItem", function(flatItem) {
      return function(provided, snapshot) {
        var currentPath = _this.calculateEffectivePath(flatItem, snapshot);
        if (snapshot.isDropAnimating) {
          _this.onDropAnimating();
        }
        return _this.renderTreeItem({
          flatItem,
          path: currentPath,
          provided,
          snapshot
        });
      };
    });
    _defineProperty(_assertThisInitialized(_this), "renderTreeItem", function(_ref) {
      var flatItem = _ref.flatItem, path = _ref.path, provided = _ref.provided, snapshot = _ref.snapshot;
      var _this$props2 = _this.props, renderItem = _this$props2.renderItem, onExpand = _this$props2.onExpand, onCollapse = _this$props2.onCollapse, offsetPerLevel = _this$props2.offsetPerLevel;
      return import_react12.default.createElement(TreeItem, {
        key: flatItem.item.id,
        item: flatItem.item,
        path,
        onExpand,
        onCollapse,
        renderItem,
        provided,
        snapshot,
        itemRef: _this.setItemRef,
        offsetPerLevel
      });
    });
    return _this;
  }
  _createClass(Tree2, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var isNestingEnabled = this.props.isNestingEnabled;
      var renderedItems = this.renderItems();
      return import_react12.default.createElement(DragDropContext, {
        onDragStart: this.onDragStart,
        onDragEnd: this.onDragEnd,
        onDragUpdate: this.onDragUpdate
      }, import_react12.default.createElement(ConnectedDroppable, {
        droppableId: "tree",
        isCombineEnabled: isNestingEnabled,
        ignoreContainerClipping: true
      }, function(provided) {
        var finalProvided = _this2.patchDroppableProvided(provided);
        return import_react12.default.createElement("div", _extends({
          ref: finalProvided.innerRef,
          style: {
            pointerEvents: "auto"
          },
          onTouchMove: _this2.onPointerMove,
          onMouseMove: _this2.onPointerMove
        }, finalProvided.droppableProps), renderedItems, provided.placeholder);
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var draggedItemId = state.draggedItemId;
      var tree = props.tree;
      var finalTree = Tree2.closeParentIfNeeded(tree, draggedItemId);
      var flattenedTree = flattenTree(finalTree);
      return _objectSpread5(_objectSpread5({}, state), {}, {
        flattenedTree
      });
    }
  }, {
    key: "closeParentIfNeeded",
    value: function closeParentIfNeeded(tree, draggedItemId) {
      if (!!draggedItemId) {
        return mutateTree(tree, draggedItemId, {
          isExpanded: false
        });
      }
      return tree;
    }
  }]);
  return Tree2;
}(import_react12.Component);
_defineProperty(Tree, "defaultProps", {
  tree: {
    children: []
  },
  onExpand: noop4,
  onCollapse: noop4,
  onDragStart: noop4,
  onDragEnd: noop4,
  renderItem: noop4,
  offsetPerLevel: 35,
  isDragEnabled: false,
  isNestingEnabled: false
});

// .yarn/__virtual__/@atlaskit-tree-virtual-fc12252a2f/0/cache/@atlaskit-tree-npm-8.8.7-4e826b86c3-9da4774d00.zip/node_modules/@atlaskit/tree/dist/esm/utils/moveItemOnTree.js
var moveItemOnTree = function moveItemOnTree2(tree, from, to) {
  var _removeItemFromTree = removeItemFromTree(tree, from), treeWithoutSource = _removeItemFromTree.tree, itemRemoved = _removeItemFromTree.itemRemoved;
  return addItemToTree(treeWithoutSource, to, itemRemoved);
};
export {
  Tree as default,
  moveItemOnTree,
  mutateTree
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

react-is/cjs/react-is.development.js:
  (** @license React v17.0.2
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=@atlaskit_tree.js.map
