"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/json-schema-traverse@1.0.0";
exports.ids = ["vendor-chunks/json-schema-traverse@1.0.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/json-schema-traverse@1.0.0/node_modules/json-schema-traverse/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/json-schema-traverse@1.0.0/node_modules/json-schema-traverse/index.js ***!
  \**************************************************************************************************/
/***/ ((module) => {

eval("\n\nvar traverse = module.exports = function (schema, opts, cb) {\n  // Legacy support for v0.3.1 and earlier.\n  if (typeof opts == 'function') {\n    cb = opts;\n    opts = {};\n  }\n\n  cb = opts.cb || cb;\n  var pre = (typeof cb == 'function') ? cb : cb.pre || function() {};\n  var post = cb.post || function() {};\n\n  _traverse(opts, pre, post, schema, '', schema);\n};\n\n\ntraverse.keywords = {\n  additionalItems: true,\n  items: true,\n  contains: true,\n  additionalProperties: true,\n  propertyNames: true,\n  not: true,\n  if: true,\n  then: true,\n  else: true\n};\n\ntraverse.arrayKeywords = {\n  items: true,\n  allOf: true,\n  anyOf: true,\n  oneOf: true\n};\n\ntraverse.propsKeywords = {\n  $defs: true,\n  definitions: true,\n  properties: true,\n  patternProperties: true,\n  dependencies: true\n};\n\ntraverse.skipKeywords = {\n  default: true,\n  enum: true,\n  const: true,\n  required: true,\n  maximum: true,\n  minimum: true,\n  exclusiveMaximum: true,\n  exclusiveMinimum: true,\n  multipleOf: true,\n  maxLength: true,\n  minLength: true,\n  pattern: true,\n  format: true,\n  maxItems: true,\n  minItems: true,\n  uniqueItems: true,\n  maxProperties: true,\n  minProperties: true\n};\n\n\nfunction _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {\n  if (schema && typeof schema == 'object' && !Array.isArray(schema)) {\n    pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);\n    for (var key in schema) {\n      var sch = schema[key];\n      if (Array.isArray(sch)) {\n        if (key in traverse.arrayKeywords) {\n          for (var i=0; i<sch.length; i++)\n            _traverse(opts, pre, post, sch[i], jsonPtr + '/' + key + '/' + i, rootSchema, jsonPtr, key, schema, i);\n        }\n      } else if (key in traverse.propsKeywords) {\n        if (sch && typeof sch == 'object') {\n          for (var prop in sch)\n            _traverse(opts, pre, post, sch[prop], jsonPtr + '/' + key + '/' + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);\n        }\n      } else if (key in traverse.keywords || (opts.allKeys && !(key in traverse.skipKeywords))) {\n        _traverse(opts, pre, post, sch, jsonPtr + '/' + key, rootSchema, jsonPtr, key, schema);\n      }\n    }\n    post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);\n  }\n}\n\n\nfunction escapeJsonPtr(str) {\n  return str.replace(/~/g, '~0').replace(/\\//g, '~1');\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vanNvbi1zY2hlbWEtdHJhdmVyc2VAMS4wLjAvbm9kZV9tb2R1bGVzL2pzb24tc2NoZW1hLXRyYXZlcnNlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsY0FBYztBQUN0QztBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVnYWwtc2VtYW50aWMtc2VhcmNoLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2pzb24tc2NoZW1hLXRyYXZlcnNlQDEuMC4wL25vZGVfbW9kdWxlcy9qc29uLXNjaGVtYS10cmF2ZXJzZS9pbmRleC5qcz80ZTNjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHRyYXZlcnNlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2NoZW1hLCBvcHRzLCBjYikge1xuICAvLyBMZWdhY3kgc3VwcG9ydCBmb3IgdjAuMy4xIGFuZCBlYXJsaWVyLlxuICBpZiAodHlwZW9mIG9wdHMgPT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiID0gb3B0cztcbiAgICBvcHRzID0ge307XG4gIH1cblxuICBjYiA9IG9wdHMuY2IgfHwgY2I7XG4gIHZhciBwcmUgPSAodHlwZW9mIGNiID09ICdmdW5jdGlvbicpID8gY2IgOiBjYi5wcmUgfHwgZnVuY3Rpb24oKSB7fTtcbiAgdmFyIHBvc3QgPSBjYi5wb3N0IHx8IGZ1bmN0aW9uKCkge307XG5cbiAgX3RyYXZlcnNlKG9wdHMsIHByZSwgcG9zdCwgc2NoZW1hLCAnJywgc2NoZW1hKTtcbn07XG5cblxudHJhdmVyc2Uua2V5d29yZHMgPSB7XG4gIGFkZGl0aW9uYWxJdGVtczogdHJ1ZSxcbiAgaXRlbXM6IHRydWUsXG4gIGNvbnRhaW5zOiB0cnVlLFxuICBhZGRpdGlvbmFsUHJvcGVydGllczogdHJ1ZSxcbiAgcHJvcGVydHlOYW1lczogdHJ1ZSxcbiAgbm90OiB0cnVlLFxuICBpZjogdHJ1ZSxcbiAgdGhlbjogdHJ1ZSxcbiAgZWxzZTogdHJ1ZVxufTtcblxudHJhdmVyc2UuYXJyYXlLZXl3b3JkcyA9IHtcbiAgaXRlbXM6IHRydWUsXG4gIGFsbE9mOiB0cnVlLFxuICBhbnlPZjogdHJ1ZSxcbiAgb25lT2Y6IHRydWVcbn07XG5cbnRyYXZlcnNlLnByb3BzS2V5d29yZHMgPSB7XG4gICRkZWZzOiB0cnVlLFxuICBkZWZpbml0aW9uczogdHJ1ZSxcbiAgcHJvcGVydGllczogdHJ1ZSxcbiAgcGF0dGVyblByb3BlcnRpZXM6IHRydWUsXG4gIGRlcGVuZGVuY2llczogdHJ1ZVxufTtcblxudHJhdmVyc2Uuc2tpcEtleXdvcmRzID0ge1xuICBkZWZhdWx0OiB0cnVlLFxuICBlbnVtOiB0cnVlLFxuICBjb25zdDogdHJ1ZSxcbiAgcmVxdWlyZWQ6IHRydWUsXG4gIG1heGltdW06IHRydWUsXG4gIG1pbmltdW06IHRydWUsXG4gIGV4Y2x1c2l2ZU1heGltdW06IHRydWUsXG4gIGV4Y2x1c2l2ZU1pbmltdW06IHRydWUsXG4gIG11bHRpcGxlT2Y6IHRydWUsXG4gIG1heExlbmd0aDogdHJ1ZSxcbiAgbWluTGVuZ3RoOiB0cnVlLFxuICBwYXR0ZXJuOiB0cnVlLFxuICBmb3JtYXQ6IHRydWUsXG4gIG1heEl0ZW1zOiB0cnVlLFxuICBtaW5JdGVtczogdHJ1ZSxcbiAgdW5pcXVlSXRlbXM6IHRydWUsXG4gIG1heFByb3BlcnRpZXM6IHRydWUsXG4gIG1pblByb3BlcnRpZXM6IHRydWVcbn07XG5cblxuZnVuY3Rpb24gX3RyYXZlcnNlKG9wdHMsIHByZSwgcG9zdCwgc2NoZW1hLCBqc29uUHRyLCByb290U2NoZW1hLCBwYXJlbnRKc29uUHRyLCBwYXJlbnRLZXl3b3JkLCBwYXJlbnRTY2hlbWEsIGtleUluZGV4KSB7XG4gIGlmIChzY2hlbWEgJiYgdHlwZW9mIHNjaGVtYSA9PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShzY2hlbWEpKSB7XG4gICAgcHJlKHNjaGVtYSwganNvblB0ciwgcm9vdFNjaGVtYSwgcGFyZW50SnNvblB0ciwgcGFyZW50S2V5d29yZCwgcGFyZW50U2NoZW1hLCBrZXlJbmRleCk7XG4gICAgZm9yICh2YXIga2V5IGluIHNjaGVtYSkge1xuICAgICAgdmFyIHNjaCA9IHNjaGVtYVtrZXldO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2NoKSkge1xuICAgICAgICBpZiAoa2V5IGluIHRyYXZlcnNlLmFycmF5S2V5d29yZHMpIHtcbiAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8c2NoLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgX3RyYXZlcnNlKG9wdHMsIHByZSwgcG9zdCwgc2NoW2ldLCBqc29uUHRyICsgJy8nICsga2V5ICsgJy8nICsgaSwgcm9vdFNjaGVtYSwganNvblB0ciwga2V5LCBzY2hlbWEsIGkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSBpbiB0cmF2ZXJzZS5wcm9wc0tleXdvcmRzKSB7XG4gICAgICAgIGlmIChzY2ggJiYgdHlwZW9mIHNjaCA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gc2NoKVxuICAgICAgICAgICAgX3RyYXZlcnNlKG9wdHMsIHByZSwgcG9zdCwgc2NoW3Byb3BdLCBqc29uUHRyICsgJy8nICsga2V5ICsgJy8nICsgZXNjYXBlSnNvblB0cihwcm9wKSwgcm9vdFNjaGVtYSwganNvblB0ciwga2V5LCBzY2hlbWEsIHByb3ApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSBpbiB0cmF2ZXJzZS5rZXl3b3JkcyB8fCAob3B0cy5hbGxLZXlzICYmICEoa2V5IGluIHRyYXZlcnNlLnNraXBLZXl3b3JkcykpKSB7XG4gICAgICAgIF90cmF2ZXJzZShvcHRzLCBwcmUsIHBvc3QsIHNjaCwganNvblB0ciArICcvJyArIGtleSwgcm9vdFNjaGVtYSwganNvblB0ciwga2V5LCBzY2hlbWEpO1xuICAgICAgfVxuICAgIH1cbiAgICBwb3N0KHNjaGVtYSwganNvblB0ciwgcm9vdFNjaGVtYSwgcGFyZW50SnNvblB0ciwgcGFyZW50S2V5d29yZCwgcGFyZW50U2NoZW1hLCBrZXlJbmRleCk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBlc2NhcGVKc29uUHRyKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL34vZywgJ34wJykucmVwbGFjZSgvXFwvL2csICd+MScpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/json-schema-traverse@1.0.0/node_modules/json-schema-traverse/index.js\n");

/***/ })

};
;