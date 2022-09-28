var __nollup__external__react__default__ = self.React && self.React.hasOwnProperty('default') ? self.React.default : self.React;
var __nollup__external__react_dom__default__ = self.ReactDOM && self.ReactDOM.hasOwnProperty('default') ? self.ReactDOM.default : self.ReactDOM;

(function (modules, __nollup__global__) {

  function getRelativePath(from, to) {
    from = from === '.' ? [] : from.split('/');
    to = to.split('/');

    var commonLength = from.length;
    for (var i = 0; i < from.length; i++) {
      if (from[i] !== to[i]) {
        commonLength = i;
        break;
      }
    }

    if (from.length - commonLength === 0) {
      return './' + to.slice(commonLength).join('/')
    }

    return from.slice(commonLength)
      .map(() => '..')
      .concat(to.slice(commonLength))
      .join('/');
  }

  var instances = {};
  if (!__nollup__global__.__nollup__chunks__) __nollup__global__.__nollup__chunks__ = {};
  var chunks = __nollup__global__.__nollup__chunks__;

  var create_module = function (number) {

    var module = {
      id: number,
      dependencies: [],
      dynamicDependencies: [],
      exports: {},
      invalidate: false,
      __resolved: false,
      __resolving: false
    };

    instances[number] = module;



    var localRequire = function (dep) {

      if (typeof dep === 'string' || !modules[dep]) {
        throw new Error([
          'Module not found: ' + dep,
          '- Did you call "require" using a string?',
          '- Check if you\'re using untransformed CommonJS.',
          '- If called with an id, module doesn\'t exist in bundle.'
        ].join('\n'));
      }

      return _require(module, dep);
    };



    localRequire.dynamic = function (file, entryIndex) {
      return new Promise(function (resolve) {
        var relative_file = getRelativePath('.', file);

        var cb = () => {
          // Each main overrides the dynamic callback so they all have different chunk references
          let chunk = chunks[file];
          let id = chunk.entry;

          for (var key in chunk.modules) {
            modules[key] = chunk.modules[key];
          }
          if (instances[number].dynamicDependencies.indexOf(id) === -1) {
            instances[number].dynamicDependencies.push(id);
          }

          resolve(_require(module, id));
        };

        // If the chunk already statically included this module, use that instead.
        if (instances[entryIndex]) {
          chunks[file] = {
            entry: entryIndex
          };
          cb();
          return;
        }

        if (chunks[file]) {
          cb();
        } else {



        }
      });
    };


    modules[number](function (dep) {
      if (!instances[dep] || instances[dep].invalidate) {
        create_module(dep);
      }

      if (instances[number].dependencies.indexOf(dep) === -1) {
        instances[number].dependencies.push(dep);
      }

      return true;
    }, function (dep) {
      return get_exports(module, dep);
    }, function (binder, impl) {
      module.__binder = binder;
      module.__impl = impl;
    }, function (arg1, arg2) {
      var bindings = {};
      if (typeof arg1 === 'object') {
        bindings = arg1;
      } else {
        bindings[arg1] = arg2;
      }

      for (var prop in bindings) {

        if (module.exports[prop] !== bindings[prop]()) {
          module.exports[prop] = bindings[prop]();


          Object.keys(instances).forEach(key => {
            if (instances[key].dependencies.indexOf(number) > -1) {
              instances[key].__binder();
            }
          })
        }
      }
    }, localRequire, module, module, __nollup__global__);

    // Initially this will bind nothing, unless
    // the module has been replaced by HMR
    module.__binder();
  };

  var get_exports = function (parent, number) {
    return instances[number].exports;
  };

  var resolve_module = function (parent, number) {
    var module = instances[number];

    if (module.__resolved) {
      return;
    }

    module.__resolving = true;

    var executeModuleImpl = function (module) {

      module.__resolved = true;
      module.__impl();

    };

    module.dependencies.forEach((dep) => {
      if (!instances[dep].__resolved && !instances[dep].__resolving) {
        resolve_module(module, dep);
      }
    });

    // Make sure module wasn't resolved as a result of circular dep.
    if (!module.__resolved) {
      executeModuleImpl(module);
    }
  };

  var _require = function (parent, number) {
    if (!instances[number] || instances[number].invalidate) {
      create_module(number);
    }

    resolve_module(parent, number);
    return instances[number].exports;
  };

  if (!__nollup__global__.__nollup_dynamic_require_callback) {
    __nollup__global__.__nollup_dynamic_require_callback = function (file, chunk_entry_module, chunk_modules) {
      chunks[file] = {
        entry: chunk_entry_module,
        modules: chunk_modules
      };
    };
  }




  return _require(null, 0);

})({

  0: function (__c__, __r__, __d__, __e__, require, module, __m__, __nollup__global__) {



    var _i0;
    var Demo;;
    var _i1;;

    var React = __nollup__external__react__default__;;
    var ReactDOM = __nollup__external__react_dom__default__;

    ;

    __d__(function () {
      Demo = _i0().Demo;;
    }, function () {
      "use strict";
      eval('                          \n\
                                 \n\
                                  \n\
                             \n\
ReactDOM.render( /*#__PURE__*/React.createElement(Demo, null), document.getElementById(\'demo-container\'));\
\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbGFwaXMvcmVwb3MvZ2gvdGVzdC1ub2xsdXAtd2l0aC1leHRlcm5hbHMtYW5kLXJlYWN0L2RlbW9fdXNpbmdfZXh0ZXJuYWxzX2NmaWxlL2luZGV4LmpzIiwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkRlbW8iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiJub2xsdXA6Ly8vIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuXG5pbXBvcnQge0RlbW99IGZyb20gJy4vc3JjL0RlbW8nXG5cbmltcG9ydCAnLi9hc3NldHMvc3R5bGUuc2NzcydcblxuUmVhY3RET00ucmVuZGVyKDxEZW1vLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZW1vLWNvbnRhaW5lcicpKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsV0FBckI7QUFFQSxTQUFRQyxJQUFSLFFBQW1CLFlBQW5CO0FBRUEsT0FBTyxxQkFBUDtBQUVBRCxRQUFRLENBQUNFLE1BQVQsZUFBZ0Isb0JBQUMsSUFBRCxPQUFoQixFQUF5QkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQUF6QiJ9\n\n//# sourceURL=nollup-int:///index.js');

    }.bind(undefined));


    _i0 = __c__(1) && function () {
      return __r__(1)
    };
    _i1 = __c__(2) && function () {
      return __r__(2)
    }
  },
  1: function (__c__, __r__, __d__, __e__, require, module, __m__, __nollup__global__) {





    var React = __nollup__external__react__default__;

    ;

    __d__(function () {

    }, function () {
      "use strict";
      eval('                          \n\
\n\
var Demo = () => {\n\
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "test-nollup-with-externals-and-react"), /*#__PURE__*/React.createElement("div", null, "Demo is running successfully!"), /*#__PURE__*/React.createElement("div", null, "We are using ", /*#__PURE__*/React.createElement("i", null, "rollup-plugin-node-externals"), ". React is not included in our bundle."), /*#__PURE__*/React.createElement("div", null, "All bundled ok using ", /*#__PURE__*/React.createElement("b", null, "Nollup CLI"), "."));\n\
};\n\
\n\
__e__( { Demo: function () { return Demo } });\
\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbGFwaXMvcmVwb3MvZ2gvdGVzdC1ub2xsdXAtd2l0aC1leHRlcm5hbHMtYW5kLXJlYWN0L2RlbW9fdXNpbmdfZXh0ZXJuYWxzX2NmaWxlL3NyYy9EZW1vLmpzIiwibmFtZXMiOlsiUmVhY3QiLCJEZW1vIl0sInNvdXJjZVJvb3QiOiJub2xsdXA6Ly8vIiwic291cmNlcyI6WyJzcmMvRGVtby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgIGZyb20gJ3JlYWN0J1xuXG5jb25zdCBEZW1vID0gKCkgPT4ge1xuICBcblxuICByZXR1cm4gKCAgXG5cbiAgICA8ZGl2PlxuICAgICAgPGgxPnRlc3Qtbm9sbHVwLXdpdGgtZXh0ZXJuYWxzLWFuZC1yZWFjdDwvaDE+XG4gICAgICBcbiAgICAgIDxkaXY+XG4gICAgICAgIERlbW8gaXMgcnVubmluZyBzdWNjZXNzZnVsbHkhIFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICBXZSBhcmUgdXNpbmcgPGk+cm9sbHVwLXBsdWdpbi1ub2RlLWV4dGVybmFsczwvaT4uIFJlYWN0IGlzIG5vdCBpbmNsdWRlZCBpbiBvdXIgYnVuZGxlLlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICBBbGwgYnVuZGxlZCBvayB1c2luZyA8Yj5Ob2xsdXAgQ0xJPC9iPi5cbiAgICAgIDwvZGl2PiAgICAgIFxuICAgIDwvZGl2PlxuXG4gIClcbn1cblxuZXhwb3J0IHtEZW1vfSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFtQixPQUFuQjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsTUFBTTtFQUdqQixvQkFFRSw4Q0FDRSx1RUFERixlQUdFLGlFQUhGLGVBTUUsK0RBQ2UsOERBRGYsMkNBTkYsZUFTRSx1RUFDdUIsNENBRHZCLE1BVEYsQ0FGRjtBQWlCRCxDQXBCRDs7QUFzQkEsU0FBUUEsSUFBUiJ9\n\n//# sourceURL=nollup-int:///src/Demo.js');

    }.bind(undefined));



  },
  2: function (__c__, __r__, __d__, __e__, require, module, __m__, __nollup__global__) {



    var _i0;
    var styleInject;



    ;

    __d__(function () {
      styleInject = _i0().default;
    }, function () {
      "use strict";
      eval('var css_248z = "body {\\n  background: green;\\n  color: darkblue; }\\n";\n\
var __ex_default__ = css_248z; __e__(\'default\', function () { return __ex_default__ });;\n\
var stylesheet="body {\\n  background: green;\\n  color: darkblue; }\\n";; __e__(\'stylesheet\', function () { return stylesheet });\n\
                                                                                                                                      \n\
styleInject(css_248z);\
\n//# sourceURL=nollup-int:///assets/style.scss');

    }.bind(undefined));


    _i0 = __c__(3) && function () {
      return __r__(3)
    }
  },
  3: function (__c__, __r__, __d__, __e__, require, module, __m__, __nollup__global__) {







    ;

    __d__(function () {

    }, function () {
      "use strict";
      eval('function styleInject(css, ref) {\n\
  if (ref === void 0) ref = {};\n\
  var insertAt = ref.insertAt;\n\
\n\
  if (!css || typeof document === \'undefined\') {\n\
    return;\n\
  }\n\
\n\
  var head = document.head || document.getElementsByTagName(\'head\')[0];\n\
  var style = document.createElement(\'style\');\n\
  style.type = \'text/css\';\n\
\n\
  if (insertAt === \'top\') {\n\
    if (head.firstChild) {\n\
      head.insertBefore(style, head.firstChild);\n\
    } else {\n\
      head.appendChild(style);\n\
    }\n\
  } else {\n\
    head.appendChild(style);\n\
  }\n\
\n\
  if (style.styleSheet) {\n\
    style.styleSheet.cssText = css;\n\
  } else {\n\
    style.appendChild(document.createTextNode(css));\n\
  }\n\
}\n\
\n\
var __ex_default__ = styleInject; __e__(\'default\', function () { return __ex_default__ });;\
\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbGFwaXMvcmVwb3MvZ2gvdGVzdC1ub2xsdXAtd2l0aC1leHRlcm5hbHMtYW5kLXJlYWN0L25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCJuYW1lcyI6WyJzdHlsZUluamVjdCIsImNzcyIsInJlZiIsImluc2VydEF0IiwiZG9jdW1lbnQiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjcmVhdGVUZXh0Tm9kZSJdLCJzb3VyY2VSb290Ijoibm9sbHVwOi8vLyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWluamVjdC9kaXN0L3N0eWxlLWluamVjdC5lcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzdHlsZUluamVjdChjc3MsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0ge307XG4gIHZhciBpbnNlcnRBdCA9IHJlZi5pbnNlcnRBdDtcblxuICBpZiAoIWNzcyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybjsgfVxuXG4gIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcblxuICBpZiAoaW5zZXJ0QXQgPT09ICd0b3AnKSB7XG4gICAgaWYgKGhlYWQuZmlyc3RDaGlsZCkge1xuICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGUsIGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlSW5qZWN0O1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxXQUFULENBQXFCQyxHQUFyQixFQUEwQkMsR0FBMUIsRUFBK0I7RUFDN0IsSUFBS0EsR0FBRyxLQUFLLEtBQUssQ0FBbEIsRUFBc0JBLEdBQUcsR0FBRyxFQUFOO0VBQ3RCLElBQUlDLFFBQVEsR0FBR0QsR0FBRyxDQUFDQyxRQUFuQjs7RUFFQSxJQUFJLENBQUNGLEdBQUQsSUFBUSxPQUFPRyxRQUFQLEtBQW9CLFdBQWhDLEVBQTZDO0lBQUU7RUFBUzs7RUFFeEQsSUFBSUMsSUFBSSxHQUFHRCxRQUFRLENBQUNDLElBQVQsSUFBaUJELFFBQVEsQ0FBQ0Usb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FBNUI7RUFDQSxJQUFJQyxLQUFLLEdBQUdILFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixPQUF2QixDQUFaO0VBQ0FELEtBQUssQ0FBQ0UsSUFBTixHQUFhLFVBQWI7O0VBRUEsSUFBSU4sUUFBUSxLQUFLLEtBQWpCLEVBQXdCO0lBQ3RCLElBQUlFLElBQUksQ0FBQ0ssVUFBVCxFQUFxQjtNQUNuQkwsSUFBSSxDQUFDTSxZQUFMLENBQWtCSixLQUFsQixFQUF5QkYsSUFBSSxDQUFDSyxVQUE5QjtJQUNELENBRkQsTUFFTztNQUNMTCxJQUFJLENBQUNPLFdBQUwsQ0FBaUJMLEtBQWpCO0lBQ0Q7RUFDRixDQU5ELE1BTU87SUFDTEYsSUFBSSxDQUFDTyxXQUFMLENBQWlCTCxLQUFqQjtFQUNEOztFQUVELElBQUlBLEtBQUssQ0FBQ00sVUFBVixFQUFzQjtJQUNwQk4sS0FBSyxDQUFDTSxVQUFOLENBQWlCQyxPQUFqQixHQUEyQmIsR0FBM0I7RUFDRCxDQUZELE1BRU87SUFDTE0sS0FBSyxDQUFDSyxXQUFOLENBQWtCUixRQUFRLENBQUNXLGNBQVQsQ0FBd0JkLEdBQXhCLENBQWxCO0VBQ0Q7QUFDRjs7QUFFRCxlQUFlRCxXQUFmIn0=\n\n//# sourceURL=nollup-int:///../node_modules/style-inject/dist/style-inject.es.js');

    }.bind(undefined));



  }

}, typeof globalThis !== 'undefined' ? globalThis : (
  typeof self !== 'undefined' ? self : this
));