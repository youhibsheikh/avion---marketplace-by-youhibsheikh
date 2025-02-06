"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/comma-separated-tokens";
exports.ids = ["vendor-chunks/comma-separated-tokens"];
exports.modules = {

/***/ "(ssr)/./node_modules/comma-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/comma-separated-tokens/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.parse = parse\nexports.stringify = stringify\n\nvar comma = ','\nvar space = ' '\nvar empty = ''\n\n// Parse comma-separated tokens to an array.\nfunction parse(value) {\n  var values = []\n  var input = String(value || empty)\n  var index = input.indexOf(comma)\n  var lastIndex = 0\n  var end = false\n  var val\n\n  while (!end) {\n    if (index === -1) {\n      index = input.length\n      end = true\n    }\n\n    val = input.slice(lastIndex, index).trim()\n\n    if (val || !end) {\n      values.push(val)\n    }\n\n    lastIndex = index + 1\n    index = input.indexOf(comma, lastIndex)\n  }\n\n  return values\n}\n\n// Compile an array to comma-separated tokens.\n// `options.padLeft` (default: `true`) pads a space left of each token, and\n// `options.padRight` (default: `false`) pads a space to the right of each token.\nfunction stringify(values, options) {\n  var settings = options || {}\n  var left = settings.padLeft === false ? empty : space\n  var right = settings.padRight ? space : empty\n\n  // Ensure the last empty entry is seen.\n  if (values[values.length - 1] === empty) {\n    values = values.concat(empty)\n  }\n\n  return values.join(right + comma + left).trim()\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29tbWEtc2VwYXJhdGVkLXRva2Vucy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWixhQUFhO0FBQ2IsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2F0aG9uMi1lY29tbWVyY2UvLi9ub2RlX21vZHVsZXMvY29tbWEtc2VwYXJhdGVkLXRva2Vucy9pbmRleC5qcz84Y2VkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLnBhcnNlID0gcGFyc2VcbmV4cG9ydHMuc3RyaW5naWZ5ID0gc3RyaW5naWZ5XG5cbnZhciBjb21tYSA9ICcsJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgZW1wdHkgPSAnJ1xuXG4vLyBQYXJzZSBjb21tYS1zZXBhcmF0ZWQgdG9rZW5zIHRvIGFuIGFycmF5LlxuZnVuY3Rpb24gcGFyc2UodmFsdWUpIHtcbiAgdmFyIHZhbHVlcyA9IFtdXG4gIHZhciBpbnB1dCA9IFN0cmluZyh2YWx1ZSB8fCBlbXB0eSlcbiAgdmFyIGluZGV4ID0gaW5wdXQuaW5kZXhPZihjb21tYSlcbiAgdmFyIGxhc3RJbmRleCA9IDBcbiAgdmFyIGVuZCA9IGZhbHNlXG4gIHZhciB2YWxcblxuICB3aGlsZSAoIWVuZCkge1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGluZGV4ID0gaW5wdXQubGVuZ3RoXG4gICAgICBlbmQgPSB0cnVlXG4gICAgfVxuXG4gICAgdmFsID0gaW5wdXQuc2xpY2UobGFzdEluZGV4LCBpbmRleCkudHJpbSgpXG5cbiAgICBpZiAodmFsIHx8ICFlbmQpIHtcbiAgICAgIHZhbHVlcy5wdXNoKHZhbClcbiAgICB9XG5cbiAgICBsYXN0SW5kZXggPSBpbmRleCArIDFcbiAgICBpbmRleCA9IGlucHV0LmluZGV4T2YoY29tbWEsIGxhc3RJbmRleClcbiAgfVxuXG4gIHJldHVybiB2YWx1ZXNcbn1cblxuLy8gQ29tcGlsZSBhbiBhcnJheSB0byBjb21tYS1zZXBhcmF0ZWQgdG9rZW5zLlxuLy8gYG9wdGlvbnMucGFkTGVmdGAgKGRlZmF1bHQ6IGB0cnVlYCkgcGFkcyBhIHNwYWNlIGxlZnQgb2YgZWFjaCB0b2tlbiwgYW5kXG4vLyBgb3B0aW9ucy5wYWRSaWdodGAgKGRlZmF1bHQ6IGBmYWxzZWApIHBhZHMgYSBzcGFjZSB0byB0aGUgcmlnaHQgb2YgZWFjaCB0b2tlbi5cbmZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZXMsIG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgbGVmdCA9IHNldHRpbmdzLnBhZExlZnQgPT09IGZhbHNlID8gZW1wdHkgOiBzcGFjZVxuICB2YXIgcmlnaHQgPSBzZXR0aW5ncy5wYWRSaWdodCA/IHNwYWNlIDogZW1wdHlcblxuICAvLyBFbnN1cmUgdGhlIGxhc3QgZW1wdHkgZW50cnkgaXMgc2Vlbi5cbiAgaWYgKHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0gPT09IGVtcHR5KSB7XG4gICAgdmFsdWVzID0gdmFsdWVzLmNvbmNhdChlbXB0eSlcbiAgfVxuXG4gIHJldHVybiB2YWx1ZXMuam9pbihyaWdodCArIGNvbW1hICsgbGVmdCkudHJpbSgpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/comma-separated-tokens/index.js\n");

/***/ })

};
;