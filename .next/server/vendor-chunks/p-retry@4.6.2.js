"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/p-retry@4.6.2";
exports.ids = ["vendor-chunks/p-retry@4.6.2"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/p-retry@4.6.2/node_modules/p-retry/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/.pnpm/p-retry@4.6.2/node_modules/p-retry/index.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst retry = __webpack_require__(/*! retry */ \"(rsc)/./node_modules/.pnpm/retry@0.13.1/node_modules/retry/index.js\");\n\nconst networkErrorMsgs = [\n\t'Failed to fetch', // Chrome\n\t'NetworkError when attempting to fetch resource.', // Firefox\n\t'The Internet connection appears to be offline.', // Safari\n\t'Network request failed' // `cross-fetch`\n];\n\nclass AbortError extends Error {\n\tconstructor(message) {\n\t\tsuper();\n\n\t\tif (message instanceof Error) {\n\t\t\tthis.originalError = message;\n\t\t\t({message} = message);\n\t\t} else {\n\t\t\tthis.originalError = new Error(message);\n\t\t\tthis.originalError.stack = this.stack;\n\t\t}\n\n\t\tthis.name = 'AbortError';\n\t\tthis.message = message;\n\t}\n}\n\nconst decorateErrorWithCounts = (error, attemptNumber, options) => {\n\t// Minus 1 from attemptNumber because the first attempt does not count as a retry\n\tconst retriesLeft = options.retries - (attemptNumber - 1);\n\n\terror.attemptNumber = attemptNumber;\n\terror.retriesLeft = retriesLeft;\n\treturn error;\n};\n\nconst isNetworkError = errorMessage => networkErrorMsgs.includes(errorMessage);\n\nconst pRetry = (input, options) => new Promise((resolve, reject) => {\n\toptions = {\n\t\tonFailedAttempt: () => {},\n\t\tretries: 10,\n\t\t...options\n\t};\n\n\tconst operation = retry.operation(options);\n\n\toperation.attempt(async attemptNumber => {\n\t\ttry {\n\t\t\tresolve(await input(attemptNumber));\n\t\t} catch (error) {\n\t\t\tif (!(error instanceof Error)) {\n\t\t\t\treject(new TypeError(`Non-error was thrown: \"${error}\". You should only throw errors.`));\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tif (error instanceof AbortError) {\n\t\t\t\toperation.stop();\n\t\t\t\treject(error.originalError);\n\t\t\t} else if (error instanceof TypeError && !isNetworkError(error.message)) {\n\t\t\t\toperation.stop();\n\t\t\t\treject(error);\n\t\t\t} else {\n\t\t\t\tdecorateErrorWithCounts(error, attemptNumber, options);\n\n\t\t\t\ttry {\n\t\t\t\t\tawait options.onFailedAttempt(error);\n\t\t\t\t} catch (error) {\n\t\t\t\t\treject(error);\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif (!operation.retry(error)) {\n\t\t\t\t\treject(operation.mainError());\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t});\n});\n\nmodule.exports = pRetry;\n// TODO: remove this in the next major version\nmodule.exports[\"default\"] = pRetry;\n\nmodule.exports.AbortError = AbortError;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vcC1yZXRyeUA0LjYuMi9ub2RlX21vZHVsZXMvcC1yZXRyeS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLGNBQWMsbUJBQU8sQ0FBQyxrRkFBTzs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxTQUFTO0FBQ2QsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsbURBQW1ELE1BQU07QUFDekQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBLHlCQUFzQjs7QUFFdEIseUJBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVnYWwtc2VtYW50aWMtc2VhcmNoLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3AtcmV0cnlANC42LjIvbm9kZV9tb2R1bGVzL3AtcmV0cnkvaW5kZXguanM/NGM5NCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCByZXRyeSA9IHJlcXVpcmUoJ3JldHJ5Jyk7XG5cbmNvbnN0IG5ldHdvcmtFcnJvck1zZ3MgPSBbXG5cdCdGYWlsZWQgdG8gZmV0Y2gnLCAvLyBDaHJvbWVcblx0J05ldHdvcmtFcnJvciB3aGVuIGF0dGVtcHRpbmcgdG8gZmV0Y2ggcmVzb3VyY2UuJywgLy8gRmlyZWZveFxuXHQnVGhlIEludGVybmV0IGNvbm5lY3Rpb24gYXBwZWFycyB0byBiZSBvZmZsaW5lLicsIC8vIFNhZmFyaVxuXHQnTmV0d29yayByZXF1ZXN0IGZhaWxlZCcgLy8gYGNyb3NzLWZldGNoYFxuXTtcblxuY2xhc3MgQWJvcnRFcnJvciBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHRpZiAobWVzc2FnZSBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHR0aGlzLm9yaWdpbmFsRXJyb3IgPSBtZXNzYWdlO1xuXHRcdFx0KHttZXNzYWdlfSA9IG1lc3NhZ2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9yaWdpbmFsRXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG5cdFx0XHR0aGlzLm9yaWdpbmFsRXJyb3Iuc3RhY2sgPSB0aGlzLnN0YWNrO1xuXHRcdH1cblxuXHRcdHRoaXMubmFtZSA9ICdBYm9ydEVycm9yJztcblx0XHR0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXHR9XG59XG5cbmNvbnN0IGRlY29yYXRlRXJyb3JXaXRoQ291bnRzID0gKGVycm9yLCBhdHRlbXB0TnVtYmVyLCBvcHRpb25zKSA9PiB7XG5cdC8vIE1pbnVzIDEgZnJvbSBhdHRlbXB0TnVtYmVyIGJlY2F1c2UgdGhlIGZpcnN0IGF0dGVtcHQgZG9lcyBub3QgY291bnQgYXMgYSByZXRyeVxuXHRjb25zdCByZXRyaWVzTGVmdCA9IG9wdGlvbnMucmV0cmllcyAtIChhdHRlbXB0TnVtYmVyIC0gMSk7XG5cblx0ZXJyb3IuYXR0ZW1wdE51bWJlciA9IGF0dGVtcHROdW1iZXI7XG5cdGVycm9yLnJldHJpZXNMZWZ0ID0gcmV0cmllc0xlZnQ7XG5cdHJldHVybiBlcnJvcjtcbn07XG5cbmNvbnN0IGlzTmV0d29ya0Vycm9yID0gZXJyb3JNZXNzYWdlID0+IG5ldHdvcmtFcnJvck1zZ3MuaW5jbHVkZXMoZXJyb3JNZXNzYWdlKTtcblxuY29uc3QgcFJldHJ5ID0gKGlucHV0LCBvcHRpb25zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdG9wdGlvbnMgPSB7XG5cdFx0b25GYWlsZWRBdHRlbXB0OiAoKSA9PiB7fSxcblx0XHRyZXRyaWVzOiAxMCxcblx0XHQuLi5vcHRpb25zXG5cdH07XG5cblx0Y29uc3Qgb3BlcmF0aW9uID0gcmV0cnkub3BlcmF0aW9uKG9wdGlvbnMpO1xuXG5cdG9wZXJhdGlvbi5hdHRlbXB0KGFzeW5jIGF0dGVtcHROdW1iZXIgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXNvbHZlKGF3YWl0IGlucHV0KGF0dGVtcHROdW1iZXIpKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0aWYgKCEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcblx0XHRcdFx0cmVqZWN0KG5ldyBUeXBlRXJyb3IoYE5vbi1lcnJvciB3YXMgdGhyb3duOiBcIiR7ZXJyb3J9XCIuIFlvdSBzaG91bGQgb25seSB0aHJvdyBlcnJvcnMuYCkpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEFib3J0RXJyb3IpIHtcblx0XHRcdFx0b3BlcmF0aW9uLnN0b3AoKTtcblx0XHRcdFx0cmVqZWN0KGVycm9yLm9yaWdpbmFsRXJyb3IpO1xuXHRcdFx0fSBlbHNlIGlmIChlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvciAmJiAhaXNOZXR3b3JrRXJyb3IoZXJyb3IubWVzc2FnZSkpIHtcblx0XHRcdFx0b3BlcmF0aW9uLnN0b3AoKTtcblx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRlY29yYXRlRXJyb3JXaXRoQ291bnRzKGVycm9yLCBhdHRlbXB0TnVtYmVyLCBvcHRpb25zKTtcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGF3YWl0IG9wdGlvbnMub25GYWlsZWRBdHRlbXB0KGVycm9yKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICghb3BlcmF0aW9uLnJldHJ5KGVycm9yKSkge1xuXHRcdFx0XHRcdHJlamVjdChvcGVyYXRpb24ubWFpbkVycm9yKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBSZXRyeTtcbi8vIFRPRE86IHJlbW92ZSB0aGlzIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb25cbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBwUmV0cnk7XG5cbm1vZHVsZS5leHBvcnRzLkFib3J0RXJyb3IgPSBBYm9ydEVycm9yO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/p-retry@4.6.2/node_modules/p-retry/index.js\n");

/***/ })

};
;