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


    (function () {

      module.hot = {
        data: __nollup__global__.__hot.dataCache[module.id] || undefined,

        accept: function (callback) {
          this._accept = callback || function () {
            _require(null, module.id)
          };
        },

        dispose: function (callback) {
          this._dispose = callback;
        },

        status: function () {
          return __nollup__global__.__hot.status;
        },

        addStatusHandler: function (callback) {
          __nollup__global__.__hot.statusHandlers.push(callback);
        },

        removeStatusHandler: function (callback) {
          var callbackIndex = __nollup__global__.__hot.statusHandlers.indexOf(callback);
          if (callbackIndex > -1) {
            __nollup__global__.__hot.statusHandlers.splice(callbackIndex, 1);
          }
        }
      };

    })();


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


  (function () {

    __nollup__global__.__hot = {
      status: 'idle',
      options: {
        "verbose": true,
        "bundleId": ""
      },
      statusHandlers: [],
      dataCache: {}
    };

    var ws;

    if (typeof WebSocket === 'function') {
      var protocol = __nollup__global__.location.protocol === 'https:' ? 'wss://' : 'ws://';
      ws = new WebSocket(protocol + __nollup__global__.location.host + '/__hmr');
    }

    function verboseLog() {
      if (!__nollup__global__.__hot.options.verbose) {
        return;
      }

      console.log.apply(console, ['[HMR]'].concat(Array.prototype.slice.call(arguments)));
    }

    function setHotStatus(status) {
      verboseLog('Status Change', status);
      __nollup__global__.__hot.status = status;
      __nollup__global__.__hot.statusHandlers.forEach(function (handler) {
        handler(status);
      });
    }

    function getDiposableAcceptableModules(id) {
      var instanceIds = Object.keys(instances).map(k => parseInt(k));
      var disposable = [];
      var acceptable = [];
      var acceptable_args = {
        branches: {}
      };

      if (instances[id] && instances[id].hot._accept) {
        acceptable.push(id);
        disposable.push(id);
        acceptable_args.branches[id] = [id];
      }

      if (acceptable.length === 0) {
        var branches = [
          [id]
        ];

        var checkForAcceptable = function (branch) {
          var latest = branch[branch.length - 1];
          if (instances[latest].hot._accept) {
            if (acceptable.indexOf(latest) === -1) {
              acceptable.push(latest);
              acceptable_args.branches[latest] = branch.slice(0);
            }

            for (var i = 0; i < branch.length; i++) {
              if (disposable.indexOf(branch[i]) === -1) {
                disposable.push(branch[i]);
              }
            }

            return true;
          }
        }

        while (branches.length) {
          var newBranches = [];
          for (var i = 0; i < branches.length; i++) {
            var branch = branches[i];
            var lastId = branch[branch.length - 1];
            var parents = instanceIds.filter(function (i) {
              return (
                instances[i].dependencies.indexOf(lastId) > -1 || (
                  instances[i].dynamicDependencies &&
                  instances[i].dynamicDependencies.indexOf(lastId) > -1
                )
              )
            }).filter(function (i) {
              return branch.indexOf(i) === -1;
            });

            if (parents.length > 0) {
              branch.push(parents[0]);
              if (checkForAcceptable(branch)) {
                branches.splice(i, 1);
              }

              for (var j = 1; j < parents.length; j++) {
                var newBranch = branch.slice(0, branch.length - 1).concat([parents[j]]);
                if (!checkForAcceptable(newBranch)) {
                  newBranches.push(newBranch);
                }
              }
            } else {
              branches.splice(i, 1);
            }

          }

          branches = branches.concat(newBranches);
        }
      }

      if (acceptable.length === 0) {
        return {
          acceptable: [],
          disposable: [],
          acceptable_args: acceptable_args
        };
      }

      return {
        acceptable: acceptable,
        disposable: disposable,
        acceptable_args: acceptable_args
      };
    }

    function hmrDisposeCallback(disposable) {
      disposable.forEach(function (id) {
        instances[id].invalidate = true;

        var data = {};
        if (instances[id] && instances[id].hot && instances[id].hot._dispose) {
          instances[id].hot._dispose(data);
        }
        __nollup__global__.__hot.dataCache[id] = data;
      });
    }

    function hmrAcceptCallback(acceptable, acceptable_args) {
      acceptable.forEach(function (id) {
        if (instances[id] && instances[id].hot && instances[id].hot._accept) {
          instances[id].hot._accept({
            disposed: acceptable_args.branches[id]
          });
        }
      });
    }

    if (ws) {
      ws.onmessage = function (e) {
        var hot = JSON.parse(e.data);

        if (hot.greeting) {
          verboseLog('Enabled');
        }

        if (hot.status) {
          setHotStatus(hot.status);
        }

        if (hot.changes) {
          verboseLog('Changes Received');

          hot.changes.forEach(function (change) {
            if (!change.removed) {
              modules[change.id] = eval(change.code);
            }

            // For when a module is added back, but isn't part of any dependency tree
            if (instances[change.id]) {
              instances[change.id].invalidate = true;
            }
          });

          hot.changes.forEach(function (change) {
            setHotStatus('dispose');
            var mods = getDiposableAcceptableModules(change.id);
            hmrDisposeCallback(mods.disposable);

            if (!change.removed) {
              setHotStatus('apply');
              hmrAcceptCallback(mods.acceptable, mods.acceptable_args);
            }
          });

          setHotStatus('idle');
        }
      };
    }


  })();



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
\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbGFwaXMvcmVwb3MvZ2gvdGVzdC1ub2xsdXAtd2l0aC1leHRlcm5hbHMtYW5kLXJlYWN0L2RlbW9fdXNpbmdfZXh0ZXJuYWxzL2luZGV4LmpzIiwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkRlbW8iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiJub2xsdXA6Ly8vIiwic291cmNlcyI6WyJkZW1vX3VzaW5nX2V4dGVybmFscy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuXG5pbXBvcnQge0RlbW99IGZyb20gJy4vc3JjL0RlbW8nXG5cbmltcG9ydCAnLi9hc3NldHMvc3R5bGUuc2NzcydcblxuUmVhY3RET00ucmVuZGVyKDxEZW1vLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZW1vLWNvbnRhaW5lcicpKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsV0FBckI7QUFFQSxTQUFRQyxJQUFSLFFBQW1CLFlBQW5CO0FBRUEsT0FBTyxxQkFBUDtBQUVBRCxRQUFRLENBQUNFLE1BQVQsZUFBZ0Isb0JBQUMsSUFBRCxPQUFoQixFQUF5QkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQUF6QiJ9\n\n//# sourceURL=nollup-int:///demo_using_externals/index.js');

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
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "test-nollup-with-externals-and-react"), /*#__PURE__*/React.createElement("div", null, "Demo is running successfully!"), /*#__PURE__*/React.createElement("div", null, "We are using ", /*#__PURE__*/React.createElement("i", null, "rollup-plugin-node-externals"), ". React is not included in our bundle."), /*#__PURE__*/React.createElement("div", null, "All bundled ok using ", /*#__PURE__*/React.createElement("b", null, "DevServer API"), "."));\n\
};\n\
\n\
__e__( { Demo: function () { return Demo } });\
\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvbGFwaXMvcmVwb3MvZ2gvdGVzdC1ub2xsdXAtd2l0aC1leHRlcm5hbHMtYW5kLXJlYWN0L2RlbW9fdXNpbmdfZXh0ZXJuYWxzL3NyYy9EZW1vLmpzIiwibmFtZXMiOlsiUmVhY3QiLCJEZW1vIl0sInNvdXJjZVJvb3QiOiJub2xsdXA6Ly8vIiwic291cmNlcyI6WyJkZW1vX3VzaW5nX2V4dGVybmFscy9zcmMvRGVtby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgIGZyb20gJ3JlYWN0J1xuXG5jb25zdCBEZW1vID0gKCkgPT4ge1xuICBcblxuICByZXR1cm4gKCAgXG5cbiAgICA8ZGl2PlxuICAgICAgPGgxPnRlc3Qtbm9sbHVwLXdpdGgtZXh0ZXJuYWxzLWFuZC1yZWFjdDwvaDE+XG4gICAgICBcbiAgICAgIDxkaXY+XG4gICAgICAgIERlbW8gaXMgcnVubmluZyBzdWNjZXNzZnVsbHkhIFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICBXZSBhcmUgdXNpbmcgPGk+cm9sbHVwLXBsdWdpbi1ub2RlLWV4dGVybmFsczwvaT4uIFJlYWN0IGlzIG5vdCBpbmNsdWRlZCBpbiBvdXIgYnVuZGxlLlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICBBbGwgYnVuZGxlZCBvayB1c2luZyA8Yj5EZXZTZXJ2ZXIgQVBJPC9iPi5cbiAgICAgIDwvZGl2PiAgICAgICBcbiAgICA8L2Rpdj5cblxuICApXG59XG5cbmV4cG9ydCB7RGVtb30iXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBbUIsT0FBbkI7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLE1BQU07RUFHakIsb0JBRUUsOENBQ0UsdUVBREYsZUFHRSxpRUFIRixlQU1FLCtEQUNlLDhEQURmLDJDQU5GLGVBU0UsdUVBQ3VCLCtDQUR2QixNQVRGLENBRkY7QUFpQkQsQ0FwQkQ7O0FBc0JBLFNBQVFBLElBQVIifQ==\n\n//# sourceURL=nollup-int:///demo_using_externals/src/Demo.js');

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
\n//# sourceURL=nollup-int:///demo_using_externals/assets/style.scss');

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
  if ( ref === void 0 ) ref = {};\n\
  var insertAt = ref.insertAt;\n\
\n\
  if (!css || typeof document === \'undefined\') { return; }\n\
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
var __ex_default__ = styleInject; __e__(\'default\', function () { return __ex_default__ });;\n\
\
\n//# sourceURL=nollup-int:///node_modules/style-inject/dist/style-inject.es.js');

    }.bind(undefined));



  }

}, typeof globalThis !== 'undefined' ? globalThis : (
  typeof self !== 'undefined' ? self : this
));