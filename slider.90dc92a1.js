// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cSiU4":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "3514d3b690dc92a1";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"f7KXl":[function(require,module,exports) {
/**
 * Styles
 */ // import "./index.scss";
/**
 * Lazy Loading
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _slider01 = require("./Slider01");
var _slider01Default = parcelHelpers.interopDefault(_slider01);
class Index {
    constructor(){
        this.init();
    }
    init() {
        new (0, _slider01Default.default)();
    }
}
exports.default = Index;
new Index();

},{"./Slider01":"gIgSI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gIgSI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tinySliderJs = require("/node_modules/tiny-slider/src/tiny-slider.js");
var _sliderIndex = require("./sliderIndex");
var _gsap = require("gsap");
var _gsapDefault = parcelHelpers.interopDefault(_gsap);
class Slider01 {
    constructor(){
        this.DOM = {
            element: document.querySelectorAll(".js--slider-01")
        };
        this.autoplayTime = 15;
        this.tl = (0, _gsapDefault.default).timeline();
        if (this.DOM.element) this.init();
    }
    init() {
        this.DOM.element.forEach((el)=>{
            var tl = (0, _gsapDefault.default).timeline();
            var slider01Wrapper = (0, _tinySliderJs.tns)({
                container: el,
                items: 1,
                center: true,
                gutter: 32,
                slideBy: 1,
                nav: false,
                controls: false,
                controlsContainer: el.nextElementSibling,
                rewind: false,
                swipeAngle: false,
                lazyload: false,
                lazyloadSelector: ".g--lazy-01",
                preventActionWhenRunning: true,
                mouseDrag: true,
                autoplayButtonOutput: false,
                speed: 1000
            });
            if (slider01Wrapper) {
                this.customizedFunction(el, slider01Wrapper, tl);
                const slider01 = document.querySelectorAll(".g--slider-01");
                slider01.forEach((element)=>{
                    element.addEventListener("mouseover", ()=>{
                        tl.pause();
                    });
                });
                slider01.forEach((element)=>{
                    element.addEventListener("mouseout", ()=>{
                        tl.resume();
                    });
                });
                slider01Wrapper.events.on("indexChanged", ()=>{
                    el.closest(".g--slider-01").querySelector(".js--dash").style.width = 0;
                    tl.restart();
                });
                slider01Wrapper.events.on("transitionEnd", ()=>{
                    (0, _sliderIndex.sliderIndex)(".js--slider-01");
                });
            }
        });
    }
    customizedFunction(el, slider, tl) {
        tl.fromTo(el.closest(".g--slider-01").querySelector(".js--dash"), {
            width: "0%"
        }, {
            width: "100%",
            duration: this.autoplayTime,
            repeat: -1,
            ease: "power0.out",
            onRepeat: ()=>{
                this.tl.restart();
                slider.goTo("next");
            }
        });
    }
}
exports.default = Slider01;

},{"/node_modules/tiny-slider/src/tiny-slider.js":"9yajy","./sliderIndex":"fP31w","gsap":"fPSuC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9yajy":[function(require,module,exports) {
// Object.keys
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tns", ()=>tns);
var _rafJs = require("./helpers/raf.js");
var _cafJs = require("./helpers/caf.js");
var _extendJs = require("./helpers/extend.js");
var _checkStorageValueJs = require("./helpers/checkStorageValue.js");
var _setLocalStorageJs = require("./helpers/setLocalStorage.js");
var _getSlideIdJs = require("./helpers/getSlideId.js");
var _calcJs = require("./helpers/calc.js");
var _percentageLayoutJs = require("./helpers/percentageLayout.js");
var _mediaquerySupportJs = require("./helpers/mediaquerySupport.js");
var _createStyleSheetJs = require("./helpers/createStyleSheet.js");
var _addCSSRuleJs = require("./helpers/addCSSRule.js");
var _removeCSSRuleJs = require("./helpers/removeCSSRule.js");
var _getCssRulesLengthJs = require("./helpers/getCssRulesLength.js");
var _toDegreeJs = require("./helpers/toDegree.js");
var _getTouchDirectionJs = require("./helpers/getTouchDirection.js");
var _forEachJs = require("./helpers/forEach.js");
var _hasClassJs = require("./helpers/hasClass.js");
var _addClassJs = require("./helpers/addClass.js");
var _removeClassJs = require("./helpers/removeClass.js");
var _hasAttrJs = require("./helpers/hasAttr.js");
var _getAttrJs = require("./helpers/getAttr.js");
var _setAttrsJs = require("./helpers/setAttrs.js");
var _removeAttrsJs = require("./helpers/removeAttrs.js");
var _arrayFromNodeListJs = require("./helpers/arrayFromNodeList.js");
var _hideElementJs = require("./helpers/hideElement.js");
var _showElementJs = require("./helpers/showElement.js");
var _isVisibleJs = require("./helpers/isVisible.js");
var _whichPropertyJs = require("./helpers/whichProperty.js");
var _has3DTransformsJs = require("./helpers/has3DTransforms.js");
var _getEndPropertyJs = require("./helpers/getEndProperty.js");
var _addEventsJs = require("./helpers/addEvents.js");
var _removeEventsJs = require("./helpers/removeEvents.js");
var _eventsJs = require("./helpers/events.js");
var _jsTransformJs = require("./helpers/jsTransform.js");
if (!Object.keys) Object.keys = function(object) {
    var keys = [];
    for(var name in object)if (Object.prototype.hasOwnProperty.call(object, name)) keys.push(name);
    return keys;
};
// ChildNode.remove
if (!("remove" in Element.prototype)) Element.prototype.remove = function() {
    if (this.parentNode) this.parentNode.removeChild(this);
};
var tns = function(options) {
    options = (0, _extendJs.extend)({
        container: ".slider",
        mode: "carousel",
        axis: "horizontal",
        items: 1,
        gutter: 0,
        edgePadding: 0,
        fixedWidth: false,
        autoWidth: false,
        viewportMax: false,
        slideBy: 1,
        center: false,
        controls: true,
        controlsPosition: "top",
        controlsText: [
            "prev",
            "next"
        ],
        controlsContainer: false,
        prevButton: false,
        nextButton: false,
        nav: true,
        navPosition: "top",
        navContainer: false,
        navAsThumbnails: false,
        arrowKeys: false,
        speed: 300,
        autoplay: false,
        autoplayPosition: "top",
        autoplayTimeout: 5000,
        autoplayDirection: "forward",
        autoplayText: [
            "start",
            "stop"
        ],
        autoplayHoverPause: false,
        autoplayButton: false,
        autoplayButtonOutput: true,
        autoplayResetOnVisibility: true,
        animateIn: "tns-fadeIn",
        animateOut: "tns-fadeOut",
        animateNormal: "tns-normal",
        animateDelay: false,
        loop: true,
        rewind: false,
        autoHeight: false,
        responsive: false,
        lazyload: false,
        lazyloadSelector: ".tns-lazy-img",
        touch: true,
        mouseDrag: false,
        swipeAngle: 15,
        nested: false,
        preventActionWhenRunning: false,
        preventScrollOnTouch: false,
        freezable: true,
        onInit: false,
        useLocalStorage: true,
        nonce: false
    }, options || {});
    var doc = document, win = window, KEYS = {
        ENTER: 13,
        SPACE: 32,
        LEFT: 37,
        RIGHT: 39
    }, tnsStorage = {}, localStorageAccess = options.useLocalStorage;
    if (localStorageAccess) {
        // check browser version and local storage access
        var browserInfo = navigator.userAgent;
        var uid = new Date;
        try {
            tnsStorage = win.localStorage;
            if (tnsStorage) {
                tnsStorage.setItem(uid, uid);
                localStorageAccess = tnsStorage.getItem(uid) == uid;
                tnsStorage.removeItem(uid);
            } else localStorageAccess = false;
            if (!localStorageAccess) tnsStorage = {};
        } catch (e) {
            localStorageAccess = false;
        }
        if (localStorageAccess) {
            // remove storage when browser version changes
            if (tnsStorage["tnsApp"] && tnsStorage["tnsApp"] !== browserInfo) [
                "tC",
                "tPL",
                "tMQ",
                "tTf",
                "t3D",
                "tTDu",
                "tTDe",
                "tADu",
                "tADe",
                "tTE",
                "tAE"
            ].forEach(function(item) {
                tnsStorage.removeItem(item);
            });
            // update browserInfo
            localStorage["tnsApp"] = browserInfo;
        }
    }
    var CALC = tnsStorage["tC"] ? (0, _checkStorageValueJs.checkStorageValue)(tnsStorage["tC"]) : (0, _setLocalStorageJs.setLocalStorage)(tnsStorage, "tC", (0, _calcJs.calc)(), localStorageAccess), PERCENTAGELAYOUT = tnsStorage["tPL"] ? (0, _checkStorageValueJs.checkStorageValue)(tnsStorage["tPL"]) : (0, _setLocalStorageJs.setLocalStorage)(tnsStorage, "tPL", (0, _percentageLayoutJs.percentageLayout)(), localStorageAccess), CSSMQ = tnsStorage["tMQ"] ? (0, _checkStorageValueJs.checkStorageValue)(tnsStorage["tMQ"]) : (0, _setLocalStorageJs.setLocalStorage)(tnsStorage, "tMQ", (0, _mediaquerySupportJs.mediaquerySupport)(), localStorageAccess), TRANSFORM = tnsStorage["tTf"] ? (0, _checkStorageValueJs.checkStorageValue)(tnsStorage["tTf"]) : (0, _setLocalStorageJs.setLocalStorage)(tnsStorage, "tTf", (0, _whichPropertyJs.whichProperty)("transform"), localStorageAccess), HAS3DTRANSFORMS = tnsStorage["t3D"] ? (0, _checkStorageValueJs.checkStorageValue)(tnsStorage["t3D"]) : (0, _setLocalStorageJs.setLocalStorage)(tnsStorage, "t3D", (0, _has3DTransformsJs.has3DTransforms)(TRANSFORM), localStorageAccess), TRANSITIONDURATION = tnsStorage["tTDu"] ? (0, _checkStorageValueJs.checkStorageValue)(tnsStorage["tTDu"]) : (0, _setLocalStorageJs.setLocalStorage)(tnsStorage, "tTDu", (0, _whichPropertyJs.whichProperty)("transitionDuration"), localStorageAccess), TRANSITIONDELAY = tnsStorage["tTDe"] ? (0, _checkStorageValueJs.checkStorageValue)(tnsStorage["tTDe"]) : (0, _setLocalStorageJs.setLocalStorage)(tnsStorage, "tTDe", (0, _whichPropertyJs.whichProperty)("transitionDelay"), localStorageAccess), ANIMATIONDURATION = tnsStorage["tADu"] ? (0, _checkStorageValueJs.checkStorageValue)(tnsStorage["tADu"]) : (0, _setLocalStorageJs.setLocalStorage)(tnsStorage, "tADu", (0, _whichPropertyJs.whichProperty)("animationDuration"), localStorageAccess), ANIMATIONDELAY = tnsStorage["tADe"] ? (0, _checkStorageValueJs.checkStorageValue)(tnsStorage["tADe"]) : (0, _setLocalStorageJs.setLocalStorage)(tnsStorage, "tADe", (0, _whichPropertyJs.whichProperty)("animationDelay"), localStorageAccess), TRANSITIONEND = tnsStorage["tTE"] ? (0, _checkStorageValueJs.checkStorageValue)(tnsStorage["tTE"]) : (0, _setLocalStorageJs.setLocalStorage)(tnsStorage, "tTE", (0, _getEndPropertyJs.getEndProperty)(TRANSITIONDURATION, "Transition"), localStorageAccess), ANIMATIONEND = tnsStorage["tAE"] ? (0, _checkStorageValueJs.checkStorageValue)(tnsStorage["tAE"]) : (0, _setLocalStorageJs.setLocalStorage)(tnsStorage, "tAE", (0, _getEndPropertyJs.getEndProperty)(ANIMATIONDURATION, "Animation"), localStorageAccess);
    // get element nodes from selectors
    var supportConsoleWarn = win.console && typeof win.console.warn === "function", tnsList = [
        "container",
        "controlsContainer",
        "prevButton",
        "nextButton",
        "navContainer",
        "autoplayButton"
    ], optionsElements = {};
    tnsList.forEach(function(item) {
        if (typeof options[item] === "string") {
            var str = options[item], el = doc.querySelector(str);
            optionsElements[item] = str;
            if (el && el.nodeName) options[item] = el;
            else {
                if (supportConsoleWarn) console.warn("Can't find", options[item]);
                return;
            }
        }
    });
    // make sure at least 1 slide
    if (options.container.children.length < 1) {
        if (supportConsoleWarn) console.warn("No slides found in", options.container);
        return;
    }
    // update options
    var responsive = options.responsive, nested = options.nested, carousel = options.mode === "carousel" ? true : false;
    if (responsive) {
        // apply responsive[0] to options and remove it
        if (0 in responsive) {
            options = (0, _extendJs.extend)(options, responsive[0]);
            delete responsive[0];
        }
        var responsiveTem = {};
        for(var key in responsive){
            var val = responsive[key];
            // update responsive
            // from: 300: 2
            // to:
            //   300: {
            //     items: 2
            //   }
            val = typeof val === "number" ? {
                items: val
            } : val;
            responsiveTem[key] = val;
        }
        responsive = responsiveTem;
        responsiveTem = null;
    }
    // update options
    function updateOptions(obj) {
        for(var key in obj){
            if (!carousel) {
                if (key === "slideBy") obj[key] = "page";
                if (key === "edgePadding") obj[key] = false;
                if (key === "autoHeight") obj[key] = false;
            }
            // update responsive options
            if (key === "responsive") updateOptions(obj[key]);
        }
    }
    if (!carousel) updateOptions(options);
    // === define and set variables ===
    if (!carousel) {
        options.axis = "horizontal";
        options.slideBy = "page";
        options.edgePadding = false;
        var animateIn = options.animateIn, animateOut = options.animateOut, animateDelay = options.animateDelay, animateNormal = options.animateNormal;
    }
    var horizontal = options.axis === "horizontal" ? true : false, outerWrapper = doc.createElement("div"), innerWrapper = doc.createElement("div"), middleWrapper, container = options.container, containerParent = container.parentNode, containerHTML = container.outerHTML, slideItems = container.children, slideCount = slideItems.length, breakpointZone, windowWidth = getWindowWidth(), isOn = false;
    if (responsive) setBreakpointZone();
    if (carousel) container.className += " tns-vpfix";
    // fixedWidth: viewport > rightBoundary > indexMax
    var autoWidth = options.autoWidth, fixedWidth = getOption("fixedWidth"), edgePadding = getOption("edgePadding"), gutter = getOption("gutter"), viewport = getViewportWidth(), center = getOption("center"), items = !autoWidth ? Math.floor(getOption("items")) : 1, slideBy = getOption("slideBy"), viewportMax = options.viewportMax || options.fixedWidthViewportWidth, arrowKeys = getOption("arrowKeys"), speed = getOption("speed"), rewind = options.rewind, loop = rewind ? false : options.loop, autoHeight = getOption("autoHeight"), controls = getOption("controls"), controlsText = getOption("controlsText"), nav = getOption("nav"), touch = getOption("touch"), mouseDrag = getOption("mouseDrag"), autoplay = getOption("autoplay"), autoplayTimeout = getOption("autoplayTimeout"), autoplayText = getOption("autoplayText"), autoplayHoverPause = getOption("autoplayHoverPause"), autoplayResetOnVisibility = getOption("autoplayResetOnVisibility"), sheet = (0, _createStyleSheetJs.createStyleSheet)(null, getOption("nonce")), lazyload = options.lazyload, lazyloadSelector = options.lazyloadSelector, slidePositions, slideItemsOut = [], cloneCount = loop ? getCloneCountForLoop() : 0, slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2, hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false, rightBoundary = fixedWidth ? getRightBoundary() : null, updateIndexBeforeTransform = !carousel || !loop ? true : false, // transform
    transformAttr = horizontal ? "left" : "top", transformPrefix = "", transformPostfix = "", // index
    getIndexMax = function() {
        if (fixedWidth) return function() {
            return center && !loop ? slideCount - 1 : Math.ceil(-rightBoundary / (fixedWidth + gutter));
        };
        else if (autoWidth) return function() {
            for(var i = 0; i < slideCountNew; i++){
                if (slidePositions[i] >= -rightBoundary) return i;
            }
        };
        else return function() {
            if (center && carousel && !loop) return slideCount - 1;
            else return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
        };
    }(), index = getStartIndex(getOption("startIndex")), indexCached = index, displayIndex = getCurrentSlide(), indexMin = 0, indexMax = !autoWidth ? getIndexMax() : null, // resize
    resizeTimer, preventActionWhenRunning = options.preventActionWhenRunning, swipeAngle = options.swipeAngle, moveDirectionExpected = swipeAngle ? "?" : true, running = false, onInit = options.onInit, events = new (0, _eventsJs.Events)(), // id, class
    newContainerClasses = " tns-slider tns-" + options.mode, slideId = container.id || (0, _getSlideIdJs.getSlideId)(), disable = getOption("disable"), disabled = false, freezable = options.freezable, freeze = freezable && !autoWidth ? getFreeze() : false, frozen = false, controlsEvents = {
        "click": onControlsClick,
        "keydown": onControlsKeydown
    }, navEvents = {
        "click": onNavClick,
        "keydown": onNavKeydown
    }, hoverEvents = {
        "mouseover": mouseoverPause,
        "mouseout": mouseoutRestart
    }, visibilityEvent = {
        "visibilitychange": onVisibilityChange
    }, docmentKeydownEvent = {
        "keydown": onDocumentKeydown
    }, touchEvents = {
        "touchstart": onPanStart,
        "touchmove": onPanMove,
        "touchend": onPanEnd,
        "touchcancel": onPanEnd
    }, dragEvents = {
        "mousedown": onPanStart,
        "mousemove": onPanMove,
        "mouseup": onPanEnd,
        "mouseleave": onPanEnd
    }, hasControls = hasOption("controls"), hasNav = hasOption("nav"), navAsThumbnails = autoWidth ? true : options.navAsThumbnails, hasAutoplay = hasOption("autoplay"), hasTouch = hasOption("touch"), hasMouseDrag = hasOption("mouseDrag"), slideActiveClass = "tns-slide-active", slideClonedClass = "tns-slide-cloned", imgCompleteClass = "tns-complete", imgEvents = {
        "load": onImgLoaded,
        "error": onImgFailed
    }, imgsComplete, liveregionCurrent, preventScroll = options.preventScrollOnTouch === "force" ? true : false;
    // controls
    if (hasControls) var controlsContainer = options.controlsContainer, controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : "", prevButton = options.prevButton, nextButton = options.nextButton, prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : "", nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : "", prevIsButton, nextIsButton;
    // nav
    if (hasNav) var navContainer = options.navContainer, navContainerHTML = options.navContainer ? options.navContainer.outerHTML : "", navItems, pages = autoWidth ? slideCount : getPages(), pagesCached = 0, navClicked = -1, navCurrentIndex = getCurrentNavIndex(), navCurrentIndexCached = navCurrentIndex, navActiveClass = "tns-nav-active", navStr = "Carousel Page ", navStrCurrent = " (Current Slide)";
    // autoplay
    if (hasAutoplay) var autoplayDirection = options.autoplayDirection === "forward" ? 1 : -1, autoplayButton = options.autoplayButton, autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : "", autoplayHtmlStrings = [
        "<span class='tns-visually-hidden'>",
        " animation</span>"
    ], autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused;
    if (hasTouch || hasMouseDrag) var initPosition = {}, lastPosition = {}, translateInit, disX, disY, panStart = false, rafIndex, getDist = horizontal ? function(a, b) {
        return a.x - b.x;
    } : function(a, b) {
        return a.y - b.y;
    };
    // disable slider when slidecount <= items
    if (!autoWidth) resetVariblesWhenDisable(disable || freeze);
    if (TRANSFORM) {
        transformAttr = TRANSFORM;
        transformPrefix = "translate";
        if (HAS3DTRANSFORMS) {
            transformPrefix += horizontal ? "3d(" : "3d(0px, ";
            transformPostfix = horizontal ? ", 0px, 0px)" : ", 0px)";
        } else {
            transformPrefix += horizontal ? "X(" : "Y(";
            transformPostfix = ")";
        }
    }
    if (carousel) container.className = container.className.replace("tns-vpfix", "");
    initStructure();
    initSheet();
    initSliderTransform();
    // === COMMON FUNCTIONS === //
    function resetVariblesWhenDisable(condition) {
        if (condition) controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
    }
    function getCurrentSlide() {
        var tem = carousel ? index - cloneCount : index;
        while(tem < 0)tem += slideCount;
        return tem % slideCount + 1;
    }
    function getStartIndex(ind) {
        ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
        return carousel ? ind + cloneCount : ind;
    }
    function getAbsIndex(i) {
        if (i == null) i = index;
        if (carousel) i -= cloneCount;
        while(i < 0)i += slideCount;
        return Math.floor(i % slideCount);
    }
    function getCurrentNavIndex() {
        var absIndex = getAbsIndex(), result;
        result = navAsThumbnails ? absIndex : fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) : Math.floor(absIndex / items);
        // set active nav to the last one when reaches the right edge
        if (!loop && carousel && index === indexMax) result = pages - 1;
        return result;
    }
    function getItemsMax() {
        // fixedWidth or autoWidth while viewportMax is not available
        if (autoWidth || fixedWidth && !viewportMax) return slideCount - 1;
        else {
            var str = fixedWidth ? "fixedWidth" : "items", arr = [];
            if (fixedWidth || options[str] < slideCount) arr.push(options[str]);
            if (responsive) for(var bp in responsive){
                var tem = responsive[bp][str];
                if (tem && (fixedWidth || tem < slideCount)) arr.push(tem);
            }
            if (!arr.length) arr.push(0);
            return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
        }
    }
    function getCloneCountForLoop() {
        var itemsMax = getItemsMax(), result = carousel ? Math.ceil((itemsMax * 5 - slideCount) / 2) : itemsMax * 4 - slideCount;
        result = Math.max(itemsMax, result);
        return hasOption("edgePadding") ? result + 1 : result;
    }
    function getWindowWidth() {
        return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
    }
    function getInsertPosition(pos) {
        return pos === "top" ? "afterbegin" : "beforeend";
    }
    function getClientWidth(el) {
        if (el == null) return;
        var div = doc.createElement("div"), rect, width;
        el.appendChild(div);
        rect = div.getBoundingClientRect();
        width = rect.right - rect.left;
        div.remove();
        return width || getClientWidth(el.parentNode);
    }
    function getViewportWidth() {
        var gap = edgePadding ? edgePadding * 2 - gutter : 0;
        return getClientWidth(containerParent) - gap;
    }
    function hasOption(item) {
        if (options[item]) return true;
        else {
            if (responsive) for(var bp in responsive){
                if (responsive[bp][item]) return true;
            }
            return false;
        }
    }
    // get option:
    // fixed width: viewport, fixedWidth, gutter => items
    // others: window width => all variables
    // all: items => slideBy
    function getOption(item, ww) {
        if (ww == null) ww = windowWidth;
        if (item === "items" && fixedWidth) return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;
        else {
            var result = options[item];
            if (responsive) for(var bp in responsive){
                // bp: convert string to number
                if (ww >= parseInt(bp)) {
                    if (item in responsive[bp]) result = responsive[bp][item];
                }
            }
            if (item === "slideBy" && result === "page") result = getOption("items");
            if (!carousel && (item === "slideBy" || item === "items")) result = Math.floor(result);
            return result;
        }
    }
    function getSlideMarginLeft(i) {
        return CALC ? CALC + "(" + i * 100 + "% / " + slideCountNew + ")" : i * 100 / slideCountNew + "%";
    }
    function getInnerWrapperStyles(edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
        var str = "";
        if (edgePaddingTem !== undefined) {
            var gap = edgePaddingTem;
            if (gutterTem) gap -= gutterTem;
            str = horizontal ? "margin: 0 " + gap + "px 0 " + edgePaddingTem + "px;" : "margin: " + edgePaddingTem + "px 0 " + gap + "px 0;";
        } else if (gutterTem && !fixedWidthTem) {
            var gutterTemUnit = "-" + gutterTem + "px", dir = horizontal ? gutterTemUnit + " 0 0" : "0 " + gutterTemUnit + " 0";
            str = "margin: 0 " + dir + ";";
        }
        if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) str += getTransitionDurationStyle(speedTem);
        return str;
    }
    function getContainerWidth(fixedWidthTem, gutterTem, itemsTem) {
        if (fixedWidthTem) return (fixedWidthTem + gutterTem) * slideCountNew + "px";
        else return CALC ? CALC + "(" + slideCountNew * 100 + "% / " + itemsTem + ")" : slideCountNew * 100 / itemsTem + "%";
    }
    function getSlideWidthStyle(fixedWidthTem, gutterTem, itemsTem) {
        var width;
        if (fixedWidthTem) width = fixedWidthTem + gutterTem + "px";
        else {
            if (!carousel) itemsTem = Math.floor(itemsTem);
            var dividend = carousel ? slideCountNew : itemsTem;
            width = CALC ? CALC + "(100% / " + dividend + ")" : 100 / dividend + "%";
        }
        width = "width:" + width;
        // inner slider: overwrite outer slider styles
        return nested !== "inner" ? width + ";" : width + " !important;";
    }
    function getSlideGutterStyle(gutterTem) {
        var str = "";
        // gutter maybe interger || 0
        // so can't use 'if (gutter)'
        if (gutterTem !== false) {
            var prop = horizontal ? "padding-" : "margin-", dir = horizontal ? "right" : "bottom";
            str = prop + dir + ": " + gutterTem + "px;";
        }
        return str;
    }
    function getCSSPrefix(name, num) {
        var prefix = name.substring(0, name.length - num).toLowerCase();
        if (prefix) prefix = "-" + prefix + "-";
        return prefix;
    }
    function getTransitionDurationStyle(speed) {
        return getCSSPrefix(TRANSITIONDURATION, 18) + "transition-duration:" + speed / 1000 + "s;";
    }
    function getAnimationDurationStyle(speed) {
        return getCSSPrefix(ANIMATIONDURATION, 17) + "animation-duration:" + speed / 1000 + "s;";
    }
    function initStructure() {
        var classOuter = "tns-outer", classInner = "tns-inner", hasGutter = hasOption("gutter");
        outerWrapper.className = classOuter;
        innerWrapper.className = classInner;
        outerWrapper.id = slideId + "-ow";
        innerWrapper.id = slideId + "-iw";
        // set container properties
        if (container.id === "") container.id = slideId;
        newContainerClasses += PERCENTAGELAYOUT || autoWidth ? " tns-subpixel" : " tns-no-subpixel";
        newContainerClasses += CALC ? " tns-calc" : " tns-no-calc";
        if (autoWidth) newContainerClasses += " tns-autowidth";
        newContainerClasses += " tns-" + options.axis;
        container.className += newContainerClasses;
        // add constrain layer for carousel
        if (carousel) {
            middleWrapper = doc.createElement("div");
            middleWrapper.id = slideId + "-mw";
            middleWrapper.className = "tns-ovh";
            outerWrapper.appendChild(middleWrapper);
            middleWrapper.appendChild(innerWrapper);
        } else outerWrapper.appendChild(innerWrapper);
        if (autoHeight) {
            var wp = middleWrapper ? middleWrapper : innerWrapper;
            wp.className += " tns-ah";
        }
        containerParent.insertBefore(outerWrapper, container);
        innerWrapper.appendChild(container);
        // add id, class, aria attributes
        // before clone slides
        (0, _forEachJs.forEach)(slideItems, function(item, i) {
            (0, _addClassJs.addClass)(item, "tns-item");
            if (!item.id) item.id = slideId + "-item" + i;
            if (!carousel && animateNormal) (0, _addClassJs.addClass)(item, animateNormal);
            (0, _setAttrsJs.setAttrs)(item, {
                "aria-hidden": "true",
                "tabindex": "-1"
            });
        });
        // ## clone slides
        // carousel: n + slides + n
        // gallery:      slides + n
        if (cloneCount) {
            var fragmentBefore = doc.createDocumentFragment(), fragmentAfter = doc.createDocumentFragment();
            for(var j = cloneCount; j--;){
                var num = j % slideCount, cloneFirst = slideItems[num].cloneNode(true);
                (0, _addClassJs.addClass)(cloneFirst, slideClonedClass);
                (0, _removeAttrsJs.removeAttrs)(cloneFirst, "id");
                fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);
                if (carousel) {
                    var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
                    (0, _addClassJs.addClass)(cloneLast, slideClonedClass);
                    (0, _removeAttrsJs.removeAttrs)(cloneLast, "id");
                    fragmentBefore.appendChild(cloneLast);
                }
            }
            container.insertBefore(fragmentBefore, container.firstChild);
            container.appendChild(fragmentAfter);
            slideItems = container.children;
        }
    }
    function initSliderTransform() {
        // ## images loaded/failed
        if (hasOption("autoHeight") || autoWidth || !horizontal) {
            var imgs = container.querySelectorAll("img");
            // add img load event listener
            (0, _forEachJs.forEach)(imgs, function(img) {
                var src = img.src;
                if (!lazyload) {
                    // not data img
                    if (src && src.indexOf("data:image") < 0) {
                        img.src = "";
                        (0, _addEventsJs.addEvents)(img, imgEvents);
                        (0, _addClassJs.addClass)(img, "loading");
                        img.src = src;
                    // data img
                    } else imgLoaded(img);
                }
            });
            // set imgsComplete
            (0, _rafJs.raf)(function() {
                imgsLoadedCheck((0, _arrayFromNodeListJs.arrayFromNodeList)(imgs), function() {
                    imgsComplete = true;
                });
            });
            // reset imgs for auto height: check visible imgs only
            if (hasOption("autoHeight")) imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1));
            lazyload ? initSliderTransformStyleCheck() : (0, _rafJs.raf)(function() {
                imgsLoadedCheck((0, _arrayFromNodeListJs.arrayFromNodeList)(imgs), initSliderTransformStyleCheck);
            });
        } else {
            // set container transform property
            if (carousel) doContainerTransformSilent();
            // update slider tools and events
            initTools();
            initEvents();
        }
    }
    function initSliderTransformStyleCheck() {
        if (autoWidth && slideCount > 1) {
            // check styles application
            var num = loop ? index : slideCount - 1;
            (function stylesApplicationCheck() {
                var left = slideItems[num].getBoundingClientRect().left;
                var right = slideItems[num - 1].getBoundingClientRect().right;
                Math.abs(left - right) <= 1 ? initSliderTransformCore() : setTimeout(function() {
                    stylesApplicationCheck();
                }, 16);
            })();
        } else initSliderTransformCore();
    }
    function initSliderTransformCore() {
        // run Fn()s which are rely on image loading
        if (!horizontal || autoWidth) {
            setSlidePositions();
            if (autoWidth) {
                rightBoundary = getRightBoundary();
                if (freezable) freeze = getFreeze();
                indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=
                resetVariblesWhenDisable(disable || freeze);
            } else updateContentWrapperHeight();
        }
        // set container transform property
        if (carousel) doContainerTransformSilent();
        // update slider tools and events
        initTools();
        initEvents();
    }
    function initSheet() {
        // gallery:
        // set animation classes and left value for gallery slider
        if (!carousel) for(var i = index, l = index + Math.min(slideCount, items); i < l; i++){
            var item = slideItems[i];
            item.style.left = (i - index) * 100 / items + "%";
            (0, _addClassJs.addClass)(item, animateIn);
            (0, _removeClassJs.removeClass)(item, animateNormal);
        }
        // #### LAYOUT
        // ## INLINE-BLOCK VS FLOAT
        // ## PercentageLayout:
        // slides: inline-block
        // remove blank space between slides by set font-size: 0
        // ## Non PercentageLayout:
        // slides: float
        //         margin-right: -100%
        //         margin-left: ~
        // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing
        if (horizontal) {
            if (PERCENTAGELAYOUT || autoWidth) {
                (0, _addCSSRuleJs.addCSSRule)(sheet, "#" + slideId + " > .tns-item", "font-size:" + win.getComputedStyle(slideItems[0]).fontSize + ";", (0, _getCssRulesLengthJs.getCssRulesLength)(sheet));
                (0, _addCSSRuleJs.addCSSRule)(sheet, "#" + slideId, "font-size:0;", (0, _getCssRulesLengthJs.getCssRulesLength)(sheet));
            } else if (carousel) (0, _forEachJs.forEach)(slideItems, function(slide, i) {
                slide.style.marginLeft = getSlideMarginLeft(i);
            });
        }
        // ## BASIC STYLES
        if (CSSMQ) {
            // middle wrapper style
            if (TRANSITIONDURATION) {
                var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : "";
                (0, _addCSSRuleJs.addCSSRule)(sheet, "#" + slideId + "-mw", str, (0, _getCssRulesLengthJs.getCssRulesLength)(sheet));
            }
            // inner wrapper styles
            str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
            (0, _addCSSRuleJs.addCSSRule)(sheet, "#" + slideId + "-iw", str, (0, _getCssRulesLengthJs.getCssRulesLength)(sheet));
            // container styles
            if (carousel) {
                str = horizontal && !autoWidth ? "width:" + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ";" : "";
                if (TRANSITIONDURATION) str += getTransitionDurationStyle(speed);
                (0, _addCSSRuleJs.addCSSRule)(sheet, "#" + slideId, str, (0, _getCssRulesLengthJs.getCssRulesLength)(sheet));
            }
            // slide styles
            str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : "";
            if (options.gutter) str += getSlideGutterStyle(options.gutter);
            // set gallery items transition-duration
            if (!carousel) {
                if (TRANSITIONDURATION) str += getTransitionDurationStyle(speed);
                if (ANIMATIONDURATION) str += getAnimationDurationStyle(speed);
            }
            if (str) (0, _addCSSRuleJs.addCSSRule)(sheet, "#" + slideId + " > .tns-item", str, (0, _getCssRulesLengthJs.getCssRulesLength)(sheet));
        // non CSS mediaqueries: IE8
        // ## update inner wrapper, container, slides if needed
        // set inline styles for inner wrapper & container
        // insert stylesheet (one line) for slides only (since slides are many)
        } else {
            // middle wrapper styles
            update_carousel_transition_duration();
            // inner wrapper styles
            innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight);
            // container styles
            if (carousel && horizontal && !autoWidth) container.style.width = getContainerWidth(fixedWidth, gutter, items);
            // slide styles
            var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : "";
            if (gutter) str += getSlideGutterStyle(gutter);
            // append to the last line
            if (str) (0, _addCSSRuleJs.addCSSRule)(sheet, "#" + slideId + " > .tns-item", str, (0, _getCssRulesLengthJs.getCssRulesLength)(sheet));
        }
        // ## MEDIAQUERIES
        if (responsive && CSSMQ) for(var bp in responsive){
            // bp: convert string to number
            bp = parseInt(bp);
            var opts = responsive[bp], str = "", middleWrapperStr = "", innerWrapperStr = "", containerStr = "", slideStr = "", itemsBP = !autoWidth ? getOption("items", bp) : null, fixedWidthBP = getOption("fixedWidth", bp), speedBP = getOption("speed", bp), edgePaddingBP = getOption("edgePadding", bp), autoHeightBP = getOption("autoHeight", bp), gutterBP = getOption("gutter", bp);
            // middle wrapper string
            if (TRANSITIONDURATION && middleWrapper && getOption("autoHeight", bp) && "speed" in opts) middleWrapperStr = "#" + slideId + "-mw{" + getTransitionDurationStyle(speedBP) + "}";
            // inner wrapper string
            if ("edgePadding" in opts || "gutter" in opts) innerWrapperStr = "#" + slideId + "-iw{" + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + "}";
            // container string
            if (carousel && horizontal && !autoWidth && ("fixedWidth" in opts || "items" in opts || fixedWidth && "gutter" in opts)) containerStr = "width:" + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ";";
            if (TRANSITIONDURATION && "speed" in opts) containerStr += getTransitionDurationStyle(speedBP);
            if (containerStr) containerStr = "#" + slideId + "{" + containerStr + "}";
            // slide string
            if ("fixedWidth" in opts || fixedWidth && "gutter" in opts || !carousel && "items" in opts) slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
            if ("gutter" in opts) slideStr += getSlideGutterStyle(gutterBP);
            // set gallery items transition-duration
            if (!carousel && "speed" in opts) {
                if (TRANSITIONDURATION) slideStr += getTransitionDurationStyle(speedBP);
                if (ANIMATIONDURATION) slideStr += getAnimationDurationStyle(speedBP);
            }
            if (slideStr) slideStr = "#" + slideId + " > .tns-item{" + slideStr + "}";
            // add up
            str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;
            if (str) sheet.insertRule("@media (min-width: " + bp / 16 + "em) {" + str + "}", sheet.cssRules.length);
        }
    }
    function initTools() {
        // == slides ==
        updateSlideStatus();
        // == live region ==
        outerWrapper.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + "</span>  of " + slideCount + "</div>");
        liveregionCurrent = outerWrapper.querySelector(".tns-liveregion .current");
        // == autoplayInit ==
        if (hasAutoplay) {
            var txt = autoplay ? "stop" : "start";
            if (autoplayButton) (0, _setAttrsJs.setAttrs)(autoplayButton, {
                "data-action": txt
            });
            else if (options.autoplayButtonOutput) {
                outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button type="button" data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + "</button>");
                autoplayButton = outerWrapper.querySelector("[data-action]");
            }
            // add event
            if (autoplayButton) (0, _addEventsJs.addEvents)(autoplayButton, {
                "click": toggleAutoplay
            });
            if (autoplay) {
                startAutoplay();
                if (autoplayHoverPause) (0, _addEventsJs.addEvents)(container, hoverEvents);
                if (autoplayResetOnVisibility) (0, _addEventsJs.addEvents)(container, visibilityEvent);
            }
        }
        // == navInit ==
        if (hasNav) {
            var initIndex = !carousel ? 0 : cloneCount;
            // customized nav
            // will not hide the navs in case they're thumbnails
            if (navContainer) {
                (0, _setAttrsJs.setAttrs)(navContainer, {
                    "aria-label": "Carousel Pagination"
                });
                navItems = navContainer.children;
                (0, _forEachJs.forEach)(navItems, function(item, i) {
                    (0, _setAttrsJs.setAttrs)(item, {
                        "data-nav": i,
                        "tabindex": "-1",
                        "aria-label": navStr + (i + 1),
                        "aria-controls": slideId
                    });
                });
            // generated nav
            } else {
                var navHtml = "", hiddenStr = navAsThumbnails ? "" : 'style="display:none"';
                for(var i = 0; i < slideCount; i++)// hide nav items by default
                navHtml += '<button type="button" data-nav="' + i + '" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) + '"></button>';
                navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + "</div>";
                outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);
                navContainer = outerWrapper.querySelector(".tns-nav");
                navItems = navContainer.children;
            }
            updateNavVisibility();
            // add transition
            if (TRANSITIONDURATION) {
                var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(), str = "transition: all " + speed / 1000 + "s";
                if (prefix) str = "-" + prefix + "-" + str;
                (0, _addCSSRuleJs.addCSSRule)(sheet, "[aria-controls^=" + slideId + "-item]", str, (0, _getCssRulesLengthJs.getCssRulesLength)(sheet));
            }
            (0, _setAttrsJs.setAttrs)(navItems[navCurrentIndex], {
                "aria-label": navStr + (navCurrentIndex + 1) + navStrCurrent
            });
            (0, _removeAttrsJs.removeAttrs)(navItems[navCurrentIndex], "tabindex");
            (0, _addClassJs.addClass)(navItems[navCurrentIndex], navActiveClass);
            // add events
            (0, _addEventsJs.addEvents)(navContainer, navEvents);
        }
        // == controlsInit ==
        if (hasControls) {
            if (!controlsContainer && (!prevButton || !nextButton)) {
                outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[1] + "</button></div>");
                controlsContainer = outerWrapper.querySelector(".tns-controls");
            }
            if (!prevButton || !nextButton) {
                prevButton = controlsContainer.children[0];
                nextButton = controlsContainer.children[1];
            }
            if (options.controlsContainer) (0, _setAttrsJs.setAttrs)(controlsContainer, {
                "aria-label": "Carousel Navigation",
                "tabindex": "0"
            });
            if (options.controlsContainer || options.prevButton && options.nextButton) (0, _setAttrsJs.setAttrs)([
                prevButton,
                nextButton
            ], {
                "aria-controls": slideId,
                "tabindex": "-1"
            });
            if (options.controlsContainer || options.prevButton && options.nextButton) {
                (0, _setAttrsJs.setAttrs)(prevButton, {
                    "data-controls": "prev"
                });
                (0, _setAttrsJs.setAttrs)(nextButton, {
                    "data-controls": "next"
                });
            }
            prevIsButton = isButton(prevButton);
            nextIsButton = isButton(nextButton);
            updateControlsStatus();
            // add events
            if (controlsContainer) (0, _addEventsJs.addEvents)(controlsContainer, controlsEvents);
            else {
                (0, _addEventsJs.addEvents)(prevButton, controlsEvents);
                (0, _addEventsJs.addEvents)(nextButton, controlsEvents);
            }
        }
        // hide tools if needed
        disableUI();
    }
    function initEvents() {
        // add events
        if (carousel && TRANSITIONEND) {
            var eve = {};
            eve[TRANSITIONEND] = onTransitionEnd;
            (0, _addEventsJs.addEvents)(container, eve);
        }
        if (touch) (0, _addEventsJs.addEvents)(container, touchEvents, options.preventScrollOnTouch);
        if (mouseDrag) (0, _addEventsJs.addEvents)(container, dragEvents);
        if (arrowKeys) (0, _addEventsJs.addEvents)(doc, docmentKeydownEvent);
        if (nested === "inner") events.on("outerResized", function() {
            resizeTasks();
            events.emit("innerLoaded", info());
        });
        else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) (0, _addEventsJs.addEvents)(win, {
            "resize": onResize
        });
        if (autoHeight) {
            if (nested === "outer") events.on("innerLoaded", doAutoHeight);
            else if (!disable) doAutoHeight();
        }
        doLazyLoad();
        if (disable) disableSlider();
        else if (freeze) freezeSlider();
        events.on("indexChanged", additionalUpdates);
        if (nested === "inner") events.emit("innerLoaded", info());
        if (typeof onInit === "function") onInit(info());
        isOn = true;
    }
    function destroy() {
        // sheet
        sheet.disabled = true;
        if (sheet.ownerNode) sheet.ownerNode.remove();
        // remove win event listeners
        (0, _removeEventsJs.removeEvents)(win, {
            "resize": onResize
        });
        // arrowKeys, controls, nav
        if (arrowKeys) (0, _removeEventsJs.removeEvents)(doc, docmentKeydownEvent);
        if (controlsContainer) (0, _removeEventsJs.removeEvents)(controlsContainer, controlsEvents);
        if (navContainer) (0, _removeEventsJs.removeEvents)(navContainer, navEvents);
        // autoplay
        (0, _removeEventsJs.removeEvents)(container, hoverEvents);
        (0, _removeEventsJs.removeEvents)(container, visibilityEvent);
        if (autoplayButton) (0, _removeEventsJs.removeEvents)(autoplayButton, {
            "click": toggleAutoplay
        });
        if (autoplay) clearInterval(autoplayTimer);
        // container
        if (carousel && TRANSITIONEND) {
            var eve = {};
            eve[TRANSITIONEND] = onTransitionEnd;
            (0, _removeEventsJs.removeEvents)(container, eve);
        }
        if (touch) (0, _removeEventsJs.removeEvents)(container, touchEvents);
        if (mouseDrag) (0, _removeEventsJs.removeEvents)(container, dragEvents);
        // cache Object values in options && reset HTML
        var htmlList = [
            containerHTML,
            controlsContainerHTML,
            prevButtonHTML,
            nextButtonHTML,
            navContainerHTML,
            autoplayButtonHTML
        ];
        tnsList.forEach(function(item, i) {
            var el = item === "container" ? outerWrapper : options[item];
            if (typeof el === "object" && el) {
                var prevEl = el.previousElementSibling ? el.previousElementSibling : false, parentEl = el.parentNode;
                el.outerHTML = htmlList[i];
                options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
            }
        });
        // reset variables
        tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null;
        // check variables
        // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });
        for(var a in this)if (a !== "rebuild") this[a] = null;
        isOn = false;
    }
    // === ON RESIZE ===
    // responsive || fixedWidth || autoWidth || !horizontal
    function onResize(e) {
        (0, _rafJs.raf)(function() {
            resizeTasks(getEvent(e));
        });
    }
    function resizeTasks(e) {
        if (!isOn) return;
        if (nested === "outer") events.emit("outerResized", info(e));
        windowWidth = getWindowWidth();
        var bpChanged, breakpointZoneTem = breakpointZone, needContainerTransform = false;
        if (responsive) {
            setBreakpointZone();
            bpChanged = breakpointZoneTem !== breakpointZone;
            // if (hasRightDeadZone) { needContainerTransform = true; } // *?
            if (bpChanged) events.emit("newBreakpointStart", info(e));
        }
        var indChanged, itemsChanged, itemsTem = items, disableTem = disable, freezeTem = freeze, arrowKeysTem = arrowKeys, controlsTem = controls, navTem = nav, touchTem = touch, mouseDragTem = mouseDrag, autoplayTem = autoplay, autoplayHoverPauseTem = autoplayHoverPause, autoplayResetOnVisibilityTem = autoplayResetOnVisibility, indexTem = index;
        if (bpChanged) {
            var fixedWidthTem = fixedWidth, autoHeightTem = autoHeight, controlsTextTem = controlsText, centerTem = center, autoplayTextTem = autoplayText;
            if (!CSSMQ) var gutterTem = gutter, edgePaddingTem = edgePadding;
        }
        // get option:
        // fixed width: viewport, fixedWidth, gutter => items
        // others: window width => all variables
        // all: items => slideBy
        arrowKeys = getOption("arrowKeys");
        controls = getOption("controls");
        nav = getOption("nav");
        touch = getOption("touch");
        center = getOption("center");
        mouseDrag = getOption("mouseDrag");
        autoplay = getOption("autoplay");
        autoplayHoverPause = getOption("autoplayHoverPause");
        autoplayResetOnVisibility = getOption("autoplayResetOnVisibility");
        if (bpChanged) {
            disable = getOption("disable");
            fixedWidth = getOption("fixedWidth");
            speed = getOption("speed");
            autoHeight = getOption("autoHeight");
            controlsText = getOption("controlsText");
            autoplayText = getOption("autoplayText");
            autoplayTimeout = getOption("autoplayTimeout");
            if (!CSSMQ) {
                edgePadding = getOption("edgePadding");
                gutter = getOption("gutter");
            }
        }
        // update options
        resetVariblesWhenDisable(disable);
        viewport = getViewportWidth(); // <= edgePadding, gutter
        if ((!horizontal || autoWidth) && !disable) {
            setSlidePositions();
            if (!horizontal) {
                updateContentWrapperHeight(); // <= setSlidePositions
                needContainerTransform = true;
            }
        }
        if (fixedWidth || autoWidth) {
            rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
            // fixedWidth: <= viewport, fixedWidth, gutter
            indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
        // fixedWidth: <= rightBoundary, fixedWidth, gutter
        }
        if (bpChanged || fixedWidth) {
            items = getOption("items");
            slideBy = getOption("slideBy");
            itemsChanged = items !== itemsTem;
            if (itemsChanged) {
                if (!fixedWidth && !autoWidth) indexMax = getIndexMax();
                 // <= items
                // check index before transform in case
                // slider reach the right edge then items become bigger
                updateIndex();
            }
        }
        if (bpChanged) {
            if (disable !== disableTem) {
                if (disable) disableSlider();
                else enableSlider(); // <= slidePositions, rightBoundary, indexMax
            }
        }
        if (freezable && (bpChanged || fixedWidth || autoWidth)) {
            freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
            // <= fixedWidth: fixedWidth, gutter, rightBoundary
            // <= others: items
            if (freeze !== freezeTem) {
                if (freeze) {
                    doContainerTransform(getContainerTransformValue(getStartIndex(0)));
                    freezeSlider();
                } else {
                    unfreezeSlider();
                    needContainerTransform = true;
                }
            }
        }
        resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility
        if (!autoplay) autoplayHoverPause = autoplayResetOnVisibility = false;
        if (arrowKeys !== arrowKeysTem) arrowKeys ? (0, _addEventsJs.addEvents)(doc, docmentKeydownEvent) : (0, _removeEventsJs.removeEvents)(doc, docmentKeydownEvent);
        if (controls !== controlsTem) {
            if (controls) {
                if (controlsContainer) (0, _showElementJs.showElement)(controlsContainer);
                else {
                    if (prevButton) (0, _showElementJs.showElement)(prevButton);
                    if (nextButton) (0, _showElementJs.showElement)(nextButton);
                }
            } else if (controlsContainer) (0, _hideElementJs.hideElement)(controlsContainer);
            else {
                if (prevButton) (0, _hideElementJs.hideElement)(prevButton);
                if (nextButton) (0, _hideElementJs.hideElement)(nextButton);
            }
        }
        if (nav !== navTem) {
            if (nav) {
                (0, _showElementJs.showElement)(navContainer);
                updateNavVisibility();
            } else (0, _hideElementJs.hideElement)(navContainer);
        }
        if (touch !== touchTem) touch ? (0, _addEventsJs.addEvents)(container, touchEvents, options.preventScrollOnTouch) : (0, _removeEventsJs.removeEvents)(container, touchEvents);
        if (mouseDrag !== mouseDragTem) mouseDrag ? (0, _addEventsJs.addEvents)(container, dragEvents) : (0, _removeEventsJs.removeEvents)(container, dragEvents);
        if (autoplay !== autoplayTem) {
            if (autoplay) {
                if (autoplayButton) (0, _showElementJs.showElement)(autoplayButton);
                if (!animating && !autoplayUserPaused) startAutoplay();
            } else {
                if (autoplayButton) (0, _hideElementJs.hideElement)(autoplayButton);
                if (animating) stopAutoplay();
            }
        }
        if (autoplayHoverPause !== autoplayHoverPauseTem) autoplayHoverPause ? (0, _addEventsJs.addEvents)(container, hoverEvents) : (0, _removeEventsJs.removeEvents)(container, hoverEvents);
        if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) autoplayResetOnVisibility ? (0, _addEventsJs.addEvents)(doc, visibilityEvent) : (0, _removeEventsJs.removeEvents)(doc, visibilityEvent);
        if (bpChanged) {
            if (fixedWidth !== fixedWidthTem || center !== centerTem) needContainerTransform = true;
            if (autoHeight !== autoHeightTem) {
                if (!autoHeight) innerWrapper.style.height = "";
            }
            if (controls && controlsText !== controlsTextTem) {
                prevButton.innerHTML = controlsText[0];
                nextButton.innerHTML = controlsText[1];
            }
            if (autoplayButton && autoplayText !== autoplayTextTem) {
                var i = autoplay ? 1 : 0, html = autoplayButton.innerHTML, len = html.length - autoplayTextTem[i].length;
                if (html.substring(len) === autoplayTextTem[i]) autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
            }
        } else if (center && (fixedWidth || autoWidth)) needContainerTransform = true;
        if (itemsChanged || fixedWidth && !autoWidth) {
            pages = getPages();
            updateNavVisibility();
        }
        indChanged = index !== indexTem;
        if (indChanged) {
            events.emit("indexChanged", info());
            needContainerTransform = true;
        } else if (itemsChanged) {
            if (!indChanged) additionalUpdates();
        } else if (fixedWidth || autoWidth) {
            doLazyLoad();
            updateSlideStatus();
            updateLiveRegion();
        }
        if (itemsChanged && !carousel) updateGallerySlidePositions();
        if (!disable && !freeze) {
            // non-mediaqueries: IE8
            if (bpChanged && !CSSMQ) {
                // middle wrapper styles
                // inner wrapper styles
                if (edgePadding !== edgePaddingTem || gutter !== gutterTem) innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
                if (horizontal) {
                    // container styles
                    if (carousel) container.style.width = getContainerWidth(fixedWidth, gutter, items);
                    // slide styles
                    var str = getSlideWidthStyle(fixedWidth, gutter, items) + getSlideGutterStyle(gutter);
                    // remove the last line and
                    // add new styles
                    (0, _removeCSSRuleJs.removeCSSRule)(sheet, (0, _getCssRulesLengthJs.getCssRulesLength)(sheet) - 1);
                    (0, _addCSSRuleJs.addCSSRule)(sheet, "#" + slideId + " > .tns-item", str, (0, _getCssRulesLengthJs.getCssRulesLength)(sheet));
                }
            }
            // auto height
            if (autoHeight) doAutoHeight();
            if (needContainerTransform) {
                doContainerTransformSilent();
                indexCached = index;
            }
        }
        if (bpChanged) events.emit("newBreakpointEnd", info(e));
    }
    // === INITIALIZATION FUNCTIONS === //
    function getFreeze() {
        if (!fixedWidth && !autoWidth) {
            var a = center ? items - (items - 1) / 2 : items;
            return slideCount <= a;
        }
        var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount], vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;
        if (center) vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
        return width <= vp;
    }
    function setBreakpointZone() {
        breakpointZone = 0;
        for(var bp in responsive){
            bp = parseInt(bp); // convert string to number
            if (windowWidth >= bp) breakpointZone = bp;
        }
    }
    // (slideBy, indexMin, indexMax) => index
    var updateIndex = function() {
        return loop ? carousel ? // loop + carousel
        function() {
            var leftEdge = indexMin, rightEdge = indexMax;
            leftEdge += slideBy;
            rightEdge -= slideBy;
            // adjust edges when has edge paddings
            // or fixed-width slider with extra space on the right side
            if (edgePadding) {
                leftEdge += 1;
                rightEdge -= 1;
            } else if (fixedWidth) {
                if ((viewport + gutter) % (fixedWidth + gutter)) rightEdge -= 1;
            }
            if (cloneCount) {
                if (index > rightEdge) index -= slideCount;
                else if (index < leftEdge) index += slideCount;
            }
        } : // loop + gallery
        function() {
            if (index > indexMax) while(index >= indexMin + slideCount)index -= slideCount;
            else if (index < indexMin) while(index <= indexMax - slideCount)index += slideCount;
        } : // non-loop
        function() {
            index = Math.max(indexMin, Math.min(indexMax, index));
        };
    }();
    function disableUI() {
        if (!autoplay && autoplayButton) (0, _hideElementJs.hideElement)(autoplayButton);
        if (!nav && navContainer) (0, _hideElementJs.hideElement)(navContainer);
        if (!controls) {
            if (controlsContainer) (0, _hideElementJs.hideElement)(controlsContainer);
            else {
                if (prevButton) (0, _hideElementJs.hideElement)(prevButton);
                if (nextButton) (0, _hideElementJs.hideElement)(nextButton);
            }
        }
    }
    function enableUI() {
        if (autoplay && autoplayButton) (0, _showElementJs.showElement)(autoplayButton);
        if (nav && navContainer) (0, _showElementJs.showElement)(navContainer);
        if (controls) {
            if (controlsContainer) (0, _showElementJs.showElement)(controlsContainer);
            else {
                if (prevButton) (0, _showElementJs.showElement)(prevButton);
                if (nextButton) (0, _showElementJs.showElement)(nextButton);
            }
        }
    }
    function freezeSlider() {
        if (frozen) return;
        // remove edge padding from inner wrapper
        if (edgePadding) innerWrapper.style.margin = "0px";
        // add class tns-transparent to cloned slides
        if (cloneCount) {
            var str = "tns-transparent";
            for(var i = cloneCount; i--;){
                if (carousel) (0, _addClassJs.addClass)(slideItems[i], str);
                (0, _addClassJs.addClass)(slideItems[slideCountNew - i - 1], str);
            }
        }
        // update tools
        disableUI();
        frozen = true;
    }
    function unfreezeSlider() {
        if (!frozen) return;
        // restore edge padding for inner wrapper
        // for mordern browsers
        if (edgePadding && CSSMQ) innerWrapper.style.margin = "";
        // remove class tns-transparent to cloned slides
        if (cloneCount) {
            var str = "tns-transparent";
            for(var i = cloneCount; i--;){
                if (carousel) (0, _removeClassJs.removeClass)(slideItems[i], str);
                (0, _removeClassJs.removeClass)(slideItems[slideCountNew - i - 1], str);
            }
        }
        // update tools
        enableUI();
        frozen = false;
    }
    function disableSlider() {
        if (disabled) return;
        sheet.disabled = true;
        container.className = container.className.replace(newContainerClasses.substring(1), "");
        (0, _removeAttrsJs.removeAttrs)(container, [
            "style"
        ]);
        if (loop) for(var j = cloneCount; j--;){
            if (carousel) (0, _hideElementJs.hideElement)(slideItems[j]);
            (0, _hideElementJs.hideElement)(slideItems[slideCountNew - j - 1]);
        }
        // vertical slider
        if (!horizontal || !carousel) (0, _removeAttrsJs.removeAttrs)(innerWrapper, [
            "style"
        ]);
        // gallery
        if (!carousel) for(var i = index, l = index + slideCount; i < l; i++){
            var item = slideItems[i];
            (0, _removeAttrsJs.removeAttrs)(item, [
                "style"
            ]);
            (0, _removeClassJs.removeClass)(item, animateIn);
            (0, _removeClassJs.removeClass)(item, animateNormal);
        }
        // update tools
        disableUI();
        disabled = true;
    }
    function enableSlider() {
        if (!disabled) return;
        sheet.disabled = false;
        container.className += newContainerClasses;
        doContainerTransformSilent();
        if (loop) for(var j = cloneCount; j--;){
            if (carousel) (0, _showElementJs.showElement)(slideItems[j]);
            (0, _showElementJs.showElement)(slideItems[slideCountNew - j - 1]);
        }
        // gallery
        if (!carousel) for(var i = index, l = index + slideCount; i < l; i++){
            var item = slideItems[i], classN = i < index + items ? animateIn : animateNormal;
            item.style.left = (i - index) * 100 / items + "%";
            (0, _addClassJs.addClass)(item, classN);
        }
        // update tools
        enableUI();
        disabled = false;
    }
    function updateLiveRegion() {
        var str = getLiveRegionStr();
        if (liveregionCurrent.innerHTML !== str) liveregionCurrent.innerHTML = str;
    }
    function getLiveRegionStr() {
        var arr = getVisibleSlideRange(), start = arr[0] + 1, end = arr[1] + 1;
        return start === end ? start + "" : start + " to " + end;
    }
    function getVisibleSlideRange(val) {
        if (val == null) val = getContainerTransformValue();
        var start = index, end, rangestart, rangeend;
        // get range start, range end for autoWidth and fixedWidth
        if (center || edgePadding) {
            if (autoWidth || fixedWidth) {
                rangestart = -(parseFloat(val) + edgePadding);
                rangeend = rangestart + viewport + edgePadding * 2;
            }
        } else if (autoWidth) {
            rangestart = slidePositions[index];
            rangeend = rangestart + viewport;
        }
        // get start, end
        // - check auto width
        if (autoWidth) slidePositions.forEach(function(point, i) {
            if (i < slideCountNew) {
                if ((center || edgePadding) && point <= rangestart + 0.5) start = i;
                if (rangeend - point >= 0.5) end = i;
            }
        });
        else {
            if (fixedWidth) {
                var cell = fixedWidth + gutter;
                if (center || edgePadding) {
                    start = Math.floor(rangestart / cell);
                    end = Math.ceil(rangeend / cell - 1);
                } else end = start + Math.ceil(viewport / cell) - 1;
            } else if (center || edgePadding) {
                var a = items - 1;
                if (center) {
                    start -= a / 2;
                    end = index + a / 2;
                } else end = index + a;
                if (edgePadding) {
                    var b = edgePadding * items / viewport;
                    start -= b;
                    end += b;
                }
                start = Math.floor(start);
                end = Math.ceil(end);
            } else end = start + items - 1;
            start = Math.max(start, 0);
            end = Math.min(end, slideCountNew - 1);
        }
        return [
            start,
            end
        ];
    }
    function doLazyLoad() {
        if (lazyload && !disable) {
            var arg = getVisibleSlideRange();
            arg.push(lazyloadSelector);
            getImageArray.apply(null, arg).forEach(function(img) {
                if (!(0, _hasClassJs.hasClass)(img, imgCompleteClass)) {
                    // stop propagation transitionend event to container
                    var eve = {};
                    eve[TRANSITIONEND] = function(e) {
                        e.stopPropagation();
                    };
                    (0, _addEventsJs.addEvents)(img, eve);
                    (0, _addEventsJs.addEvents)(img, imgEvents);
                    // update src
                    img.src = (0, _getAttrJs.getAttr)(img, "data-src");
                    // update srcset
                    var srcset = (0, _getAttrJs.getAttr)(img, "data-srcset");
                    if (srcset) img.srcset = srcset;
                    (0, _addClassJs.addClass)(img, "loading");
                }
            });
        }
    }
    function onImgLoaded(e) {
        imgLoaded(getTarget(e));
    }
    function onImgFailed(e) {
        imgFailed(getTarget(e));
    }
    function imgLoaded(img) {
        (0, _addClassJs.addClass)(img, "loaded");
        imgCompleted(img);
    }
    function imgFailed(img) {
        (0, _addClassJs.addClass)(img, "failed");
        imgCompleted(img);
    }
    function imgCompleted(img) {
        (0, _addClassJs.addClass)(img, imgCompleteClass);
        (0, _removeClassJs.removeClass)(img, "loading");
        (0, _removeEventsJs.removeEvents)(img, imgEvents);
    }
    function getImageArray(start, end, imgSelector) {
        var imgs = [];
        if (!imgSelector) imgSelector = "img";
        while(start <= end){
            (0, _forEachJs.forEach)(slideItems[start].querySelectorAll(imgSelector), function(img) {
                imgs.push(img);
            });
            start++;
        }
        return imgs;
    }
    // check if all visible images are loaded
    // and update container height if it's done
    function doAutoHeight() {
        var imgs = getImageArray.apply(null, getVisibleSlideRange());
        (0, _rafJs.raf)(function() {
            imgsLoadedCheck(imgs, updateInnerWrapperHeight);
        });
    }
    function imgsLoadedCheck(imgs, cb) {
        // execute callback function if all images are complete
        if (imgsComplete) return cb();
        // check image classes
        imgs.forEach(function(img, index) {
            if (!lazyload && img.complete) imgCompleted(img);
             // Check image.complete
            if ((0, _hasClassJs.hasClass)(img, imgCompleteClass)) imgs.splice(index, 1);
        });
        // execute callback function if selected images are all complete
        if (!imgs.length) return cb();
        // otherwise execute this functiona again
        (0, _rafJs.raf)(function() {
            imgsLoadedCheck(imgs, cb);
        });
    }
    function additionalUpdates() {
        doLazyLoad();
        updateSlideStatus();
        updateLiveRegion();
        updateControlsStatus();
        updateNavStatus();
    }
    function update_carousel_transition_duration() {
        if (carousel && autoHeight) middleWrapper.style[TRANSITIONDURATION] = speed / 1000 + "s";
    }
    function getMaxSlideHeight(slideStart, slideRange) {
        var heights = [];
        for(var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++)heights.push(slideItems[i].offsetHeight);
        return Math.max.apply(null, heights);
    }
    // update inner wrapper height
    // 1. get the max-height of the visible slides
    // 2. set transitionDuration to speed
    // 3. update inner wrapper height to max-height
    // 4. set transitionDuration to 0s after transition done
    function updateInnerWrapperHeight() {
        var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount), wp = middleWrapper ? middleWrapper : innerWrapper;
        if (wp.style.height !== maxHeight) wp.style.height = maxHeight + "px";
    }
    // get the distance from the top edge of the first slide to each slide
    // (init) => slidePositions
    function setSlidePositions() {
        slidePositions = [
            0
        ];
        var attr = horizontal ? "left" : "top", attr2 = horizontal ? "right" : "bottom", base = slideItems[0].getBoundingClientRect()[attr];
        (0, _forEachJs.forEach)(slideItems, function(item, i) {
            // skip the first slide
            if (i) slidePositions.push(item.getBoundingClientRect()[attr] - base);
            // add the end edge
            if (i === slideCountNew - 1) slidePositions.push(item.getBoundingClientRect()[attr2] - base);
        });
    }
    // update slide
    function updateSlideStatus() {
        var range = getVisibleSlideRange(), start = range[0], end = range[1];
        (0, _forEachJs.forEach)(slideItems, function(item, i) {
            // show slides
            if (i >= start && i <= end) {
                if ((0, _hasAttrJs.hasAttr)(item, "aria-hidden")) {
                    (0, _removeAttrsJs.removeAttrs)(item, [
                        "aria-hidden",
                        "tabindex"
                    ]);
                    (0, _addClassJs.addClass)(item, slideActiveClass);
                }
            } else if (!(0, _hasAttrJs.hasAttr)(item, "aria-hidden")) {
                (0, _setAttrsJs.setAttrs)(item, {
                    "aria-hidden": "true",
                    "tabindex": "-1"
                });
                (0, _removeClassJs.removeClass)(item, slideActiveClass);
            }
        });
    }
    // gallery: update slide position
    function updateGallerySlidePositions() {
        var l = index + Math.min(slideCount, items);
        for(var i = slideCountNew; i--;){
            var item = slideItems[i];
            if (i >= index && i < l) {
                // add transitions to visible slides when adjusting their positions
                (0, _addClassJs.addClass)(item, "tns-moving");
                item.style.left = (i - index) * 100 / items + "%";
                (0, _addClassJs.addClass)(item, animateIn);
                (0, _removeClassJs.removeClass)(item, animateNormal);
            } else if (item.style.left) {
                item.style.left = "";
                (0, _addClassJs.addClass)(item, animateNormal);
                (0, _removeClassJs.removeClass)(item, animateIn);
            }
            // remove outlet animation
            (0, _removeClassJs.removeClass)(item, animateOut);
        }
        // removing '.tns-moving'
        setTimeout(function() {
            (0, _forEachJs.forEach)(slideItems, function(el) {
                (0, _removeClassJs.removeClass)(el, "tns-moving");
            });
        }, 300);
    }
    // set tabindex on Nav
    function updateNavStatus() {
        // get current nav
        if (nav) {
            navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
            navClicked = -1;
            if (navCurrentIndex !== navCurrentIndexCached) {
                var navPrev = navItems[navCurrentIndexCached], navCurrent = navItems[navCurrentIndex];
                (0, _setAttrsJs.setAttrs)(navPrev, {
                    "tabindex": "-1",
                    "aria-label": navStr + (navCurrentIndexCached + 1)
                });
                (0, _removeClassJs.removeClass)(navPrev, navActiveClass);
                (0, _setAttrsJs.setAttrs)(navCurrent, {
                    "aria-label": navStr + (navCurrentIndex + 1) + navStrCurrent
                });
                (0, _removeAttrsJs.removeAttrs)(navCurrent, "tabindex");
                (0, _addClassJs.addClass)(navCurrent, navActiveClass);
                navCurrentIndexCached = navCurrentIndex;
            }
        }
    }
    function getLowerCaseNodeName(el) {
        return el.nodeName.toLowerCase();
    }
    function isButton(el) {
        return getLowerCaseNodeName(el) === "button";
    }
    function isAriaDisabled(el) {
        return el.getAttribute("aria-disabled") === "true";
    }
    function disEnableElement(isButton, el, val) {
        if (isButton) el.disabled = val;
        else el.setAttribute("aria-disabled", val.toString());
    }
    // set 'disabled' to true on controls when reach the edges
    function updateControlsStatus() {
        if (!controls || rewind || loop) return;
        var prevDisabled = prevIsButton ? prevButton.disabled : isAriaDisabled(prevButton), nextDisabled = nextIsButton ? nextButton.disabled : isAriaDisabled(nextButton), disablePrev = index <= indexMin ? true : false, disableNext = !rewind && index >= indexMax ? true : false;
        if (disablePrev && !prevDisabled) disEnableElement(prevIsButton, prevButton, true);
        if (!disablePrev && prevDisabled) disEnableElement(prevIsButton, prevButton, false);
        if (disableNext && !nextDisabled) disEnableElement(nextIsButton, nextButton, true);
        if (!disableNext && nextDisabled) disEnableElement(nextIsButton, nextButton, false);
    }
    // set duration
    function resetDuration(el, str) {
        if (TRANSITIONDURATION) el.style[TRANSITIONDURATION] = str;
    }
    function getSliderWidth() {
        return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
    }
    function getCenterGap(num) {
        if (num == null) num = index;
        var gap = edgePadding ? gutter : 0;
        return autoWidth ? (viewport - gap - (slidePositions[num + 1] - slidePositions[num] - gutter)) / 2 : fixedWidth ? (viewport - fixedWidth) / 2 : (items - 1) / 2;
    }
    function getRightBoundary() {
        var gap = edgePadding ? gutter : 0, result = viewport + gap - getSliderWidth();
        if (center && !loop) result = fixedWidth ? -(fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() : getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
        if (result > 0) result = 0;
        return result;
    }
    function getContainerTransformValue(num) {
        if (num == null) num = index;
        var val;
        if (horizontal && !autoWidth) {
            if (fixedWidth) {
                val = -(fixedWidth + gutter) * num;
                if (center) val += getCenterGap();
            } else {
                var denominator = TRANSFORM ? slideCountNew : items;
                if (center) num -= getCenterGap();
                val = -num * 100 / denominator;
            }
        } else {
            val = -slidePositions[num];
            if (center && autoWidth) val += getCenterGap();
        }
        if (hasRightDeadZone) val = Math.max(val, rightBoundary);
        val += horizontal && !autoWidth && !fixedWidth ? "%" : "px";
        return val;
    }
    function doContainerTransformSilent(val) {
        resetDuration(container, "0s");
        doContainerTransform(val);
    }
    function doContainerTransform(val) {
        if (val == null) val = getContainerTransformValue();
        container.style[transformAttr] = transformPrefix + val + transformPostfix;
    }
    function animateSlide(number, classOut, classIn, isOut) {
        var l = number + items;
        if (!loop) l = Math.min(l, slideCountNew);
        for(var i = number; i < l; i++){
            var item = slideItems[i];
            // set item positions
            if (!isOut) item.style.left = (i - index) * 100 / items + "%";
            if (animateDelay && TRANSITIONDELAY) item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + "s";
            (0, _removeClassJs.removeClass)(item, classOut);
            (0, _addClassJs.addClass)(item, classIn);
            if (isOut) slideItemsOut.push(item);
        }
    }
    // make transfer after click/drag:
    // 1. change 'transform' property for mordern browsers
    // 2. change 'left' property for legacy browsers
    var transformCore = function() {
        return carousel ? function() {
            resetDuration(container, "");
            if (TRANSITIONDURATION || !speed) {
                // for morden browsers with non-zero duration or
                // zero duration for all browsers
                doContainerTransform();
                // run fallback function manually
                // when duration is 0 / container is hidden
                if (!speed || !(0, _isVisibleJs.isVisible)(container)) onTransitionEnd();
            } else // for old browser with non-zero duration
            (0, _jsTransformJs.jsTransform)(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
            if (!horizontal) updateContentWrapperHeight();
        } : function() {
            slideItemsOut = [];
            var eve = {};
            eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
            (0, _removeEventsJs.removeEvents)(slideItems[indexCached], eve);
            (0, _addEventsJs.addEvents)(slideItems[index], eve);
            animateSlide(indexCached, animateIn, animateOut, true);
            animateSlide(index, animateNormal, animateIn);
            // run fallback function manually
            // when transition or animation not supported / duration is 0
            if (!TRANSITIONEND || !ANIMATIONEND || !speed || !(0, _isVisibleJs.isVisible)(container)) onTransitionEnd();
        };
    }();
    function render(e, sliderMoved) {
        if (updateIndexBeforeTransform) updateIndex();
        // render when slider was moved (touch or drag) even though index may not change
        if (index !== indexCached || sliderMoved) {
            // events
            events.emit("indexChanged", info());
            events.emit("transitionStart", info());
            if (autoHeight) doAutoHeight();
            // pause autoplay when click or keydown from user
            if (animating && e && [
                "click",
                "keydown"
            ].indexOf(e.type) >= 0) stopAutoplay();
            running = true;
            transformCore();
        }
    }
    /*
   * Transfer prefixed properties to the same format
   * CSS: -Webkit-Transform => webkittransform
   * JS: WebkitTransform => webkittransform
   * @param {string} str - property
   *
   */ function strTrans(str) {
        return str.toLowerCase().replace(/-/g, "");
    }
    // AFTER TRANSFORM
    // Things need to be done after a transfer:
    // 1. check index
    // 2. add classes to visible slide
    // 3. disable controls buttons when reach the first/last slide in non-loop slider
    // 4. update nav status
    // 5. lazyload images
    // 6. update container height
    function onTransitionEnd(event) {
        // check running on gallery mode
        // make sure trantionend/animationend events run only once
        if (carousel || running) {
            events.emit("transitionEnd", info(event));
            if (!carousel && slideItemsOut.length > 0) for(var i = 0; i < slideItemsOut.length; i++){
                var item = slideItemsOut[i];
                // set item positions
                item.style.left = "";
                if (ANIMATIONDELAY && TRANSITIONDELAY) {
                    item.style[ANIMATIONDELAY] = "";
                    item.style[TRANSITIONDELAY] = "";
                }
                (0, _removeClassJs.removeClass)(item, animateOut);
                (0, _addClassJs.addClass)(item, animateNormal);
            }
            /* update slides, nav, controls after checking ...
       * => legacy browsers who don't support 'event'
       *    have to check event first, otherwise event.target will cause an error
       * => or 'gallery' mode:
       *   + event target is slide item
       * => or 'carousel' mode:
       *   + event target is container,
       *   + event.property is the same with transform attribute
       */ if (!event || !carousel && event.target.parentNode === container || event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {
                if (!updateIndexBeforeTransform) {
                    var indexTem = index;
                    updateIndex();
                    if (index !== indexTem) {
                        events.emit("indexChanged", info());
                        doContainerTransformSilent();
                    }
                }
                if (nested === "inner") events.emit("innerLoaded", info());
                running = false;
                indexCached = index;
            }
        }
    }
    // # ACTIONS
    function goTo(targetIndex, e) {
        if (freeze) return;
        // prev slideBy
        if (targetIndex === "prev") onControlsClick(e, -1);
        else if (targetIndex === "next") onControlsClick(e, 1);
        else {
            if (running) {
                if (preventActionWhenRunning) return;
                else onTransitionEnd();
            }
            var absIndex = getAbsIndex(), indexGap = 0;
            if (targetIndex === "first") indexGap = -absIndex;
            else if (targetIndex === "last") indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
            else {
                if (typeof targetIndex !== "number") targetIndex = parseInt(targetIndex);
                if (!isNaN(targetIndex)) {
                    // from directly called goTo function
                    if (!e) targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex));
                    indexGap = targetIndex - absIndex;
                }
            }
            // gallery: make sure new page won't overlap with current page
            if (!carousel && indexGap && Math.abs(indexGap) < items) {
                var factor = indexGap > 0 ? 1 : -1;
                indexGap += index + indexGap - slideCount >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
            }
            index += indexGap;
            // make sure index is in range
            if (carousel && loop) {
                if (index < indexMin) index += slideCount;
                if (index > indexMax) index -= slideCount;
            }
            // if index is changed, start rendering
            if (getAbsIndex(index) !== getAbsIndex(indexCached)) render(e);
        }
    }
    // on controls click
    function onControlsClick(e, dir) {
        if (running) {
            if (preventActionWhenRunning) return;
            else onTransitionEnd();
        }
        var passEventObject;
        if (!dir) {
            e = getEvent(e);
            var target = getTarget(e);
            while(target !== controlsContainer && [
                prevButton,
                nextButton
            ].indexOf(target) < 0)target = target.parentNode;
            var targetIn = [
                prevButton,
                nextButton
            ].indexOf(target);
            if (targetIn >= 0) {
                passEventObject = true;
                dir = targetIn === 0 ? -1 : 1;
            }
        }
        if (rewind) {
            if (index === indexMin && dir === -1) {
                goTo("last", e);
                return;
            } else if (index === indexMax && dir === 1) {
                goTo("first", e);
                return;
            }
        }
        if (dir) {
            index += slideBy * dir;
            if (autoWidth) index = Math.floor(index);
            // pass e when click control buttons or keydown
            render(passEventObject || e && e.type === "keydown" ? e : null);
        }
    }
    // on nav click
    function onNavClick(e) {
        if (running) {
            if (preventActionWhenRunning) return;
            else onTransitionEnd();
        }
        e = getEvent(e);
        var target = getTarget(e), navIndex;
        // find the clicked nav item
        while(target !== navContainer && !(0, _hasAttrJs.hasAttr)(target, "data-nav"))target = target.parentNode;
        if ((0, _hasAttrJs.hasAttr)(target, "data-nav")) {
            var navIndex = navClicked = Number((0, _getAttrJs.getAttr)(target, "data-nav")), targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items, targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
            goTo(targetIndex, e);
            if (navCurrentIndex === navIndex) {
                if (animating) stopAutoplay();
                navClicked = -1; // reset navClicked
            }
        }
    }
    // autoplay functions
    function setAutoplayTimer() {
        autoplayTimer = setInterval(function() {
            onControlsClick(null, autoplayDirection);
        }, autoplayTimeout);
        animating = true;
    }
    function stopAutoplayTimer() {
        clearInterval(autoplayTimer);
        animating = false;
    }
    function updateAutoplayButton(action, txt) {
        (0, _setAttrsJs.setAttrs)(autoplayButton, {
            "data-action": action
        });
        autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
    }
    function startAutoplay() {
        setAutoplayTimer();
        if (autoplayButton) updateAutoplayButton("stop", autoplayText[1]);
    }
    function stopAutoplay() {
        stopAutoplayTimer();
        if (autoplayButton) updateAutoplayButton("start", autoplayText[0]);
    }
    // programaitcally play/pause the slider
    function play() {
        if (autoplay && !animating) {
            startAutoplay();
            autoplayUserPaused = false;
        }
    }
    function pause() {
        if (animating) {
            stopAutoplay();
            autoplayUserPaused = true;
        }
    }
    function toggleAutoplay() {
        if (animating) {
            stopAutoplay();
            autoplayUserPaused = true;
        } else {
            startAutoplay();
            autoplayUserPaused = false;
        }
    }
    function onVisibilityChange() {
        if (doc.hidden) {
            if (animating) {
                stopAutoplayTimer();
                autoplayVisibilityPaused = true;
            }
        } else if (autoplayVisibilityPaused) {
            setAutoplayTimer();
            autoplayVisibilityPaused = false;
        }
    }
    function mouseoverPause() {
        if (animating) {
            stopAutoplayTimer();
            autoplayHoverPaused = true;
        }
    }
    function mouseoutRestart() {
        if (autoplayHoverPaused) {
            setAutoplayTimer();
            autoplayHoverPaused = false;
        }
    }
    // keydown events on document
    function onDocumentKeydown(e) {
        e = getEvent(e);
        var keyIndex = [
            KEYS.LEFT,
            KEYS.RIGHT
        ].indexOf(e.keyCode);
        if (keyIndex >= 0) onControlsClick(e, keyIndex === 0 ? -1 : 1);
    }
    // on key control
    function onControlsKeydown(e) {
        e = getEvent(e);
        var keyIndex = [
            KEYS.LEFT,
            KEYS.RIGHT
        ].indexOf(e.keyCode);
        if (keyIndex >= 0) {
            if (keyIndex === 0) {
                if (!prevButton.disabled) onControlsClick(e, -1);
            } else if (!nextButton.disabled) onControlsClick(e, 1);
        }
    }
    // set focus
    function setFocus(el) {
        el.focus();
    }
    // on key nav
    function onNavKeydown(e) {
        e = getEvent(e);
        var curElement = doc.activeElement;
        if (!(0, _hasAttrJs.hasAttr)(curElement, "data-nav")) return;
        // var code = e.keyCode,
        var keyIndex = [
            KEYS.LEFT,
            KEYS.RIGHT,
            KEYS.ENTER,
            KEYS.SPACE
        ].indexOf(e.keyCode), navIndex = Number((0, _getAttrJs.getAttr)(curElement, "data-nav"));
        if (keyIndex >= 0) {
            if (keyIndex === 0) {
                if (navIndex > 0) setFocus(navItems[navIndex - 1]);
            } else if (keyIndex === 1) {
                if (navIndex < pages - 1) setFocus(navItems[navIndex + 1]);
            } else {
                navClicked = navIndex;
                goTo(navIndex, e);
            }
        }
    }
    function getEvent(e) {
        e = e || win.event;
        return isTouchEvent(e) ? e.changedTouches[0] : e;
    }
    function getTarget(e) {
        return e.target || win.event.srcElement;
    }
    function isTouchEvent(e) {
        return e.type.indexOf("touch") >= 0;
    }
    function preventDefaultBehavior(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }
    function getMoveDirectionExpected() {
        return (0, _getTouchDirectionJs.getTouchDirection)((0, _toDegreeJs.toDegree)(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
    }
    function onPanStart(e) {
        if (running) {
            if (preventActionWhenRunning) return;
            else onTransitionEnd();
        }
        if (autoplay && animating) stopAutoplayTimer();
        panStart = true;
        if (rafIndex) {
            (0, _cafJs.caf)(rafIndex);
            rafIndex = null;
        }
        var $ = getEvent(e);
        events.emit(isTouchEvent(e) ? "touchStart" : "dragStart", info(e));
        if (!isTouchEvent(e) && [
            "img",
            "a"
        ].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) preventDefaultBehavior(e);
        lastPosition.x = initPosition.x = $.clientX;
        lastPosition.y = initPosition.y = $.clientY;
        if (carousel) {
            translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ""));
            resetDuration(container, "0s");
        }
    }
    function onPanMove(e) {
        if (panStart) {
            var $ = getEvent(e);
            lastPosition.x = $.clientX;
            lastPosition.y = $.clientY;
            if (carousel) {
                if (!rafIndex) rafIndex = (0, _rafJs.raf)(function() {
                    panUpdate(e);
                });
            } else {
                if (moveDirectionExpected === "?") moveDirectionExpected = getMoveDirectionExpected();
                if (moveDirectionExpected) preventScroll = true;
            }
            if ((typeof e.cancelable !== "boolean" || e.cancelable) && preventScroll) e.preventDefault();
        }
    }
    function panUpdate(e) {
        if (!moveDirectionExpected) {
            panStart = false;
            return;
        }
        (0, _cafJs.caf)(rafIndex);
        if (panStart) rafIndex = (0, _rafJs.raf)(function() {
            panUpdate(e);
        });
        if (moveDirectionExpected === "?") moveDirectionExpected = getMoveDirectionExpected();
        if (moveDirectionExpected) {
            if (!preventScroll && isTouchEvent(e)) preventScroll = true;
            try {
                if (e.type) events.emit(isTouchEvent(e) ? "touchMove" : "dragMove", info(e));
            } catch (err) {}
            var x = translateInit, dist = getDist(lastPosition, initPosition);
            if (!horizontal || fixedWidth || autoWidth) {
                x += dist;
                x += "px";
            } else {
                var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew) : dist * 100 / (viewport + gutter);
                x += percentageX;
                x += "%";
            }
            container.style[transformAttr] = transformPrefix + x + transformPostfix;
        }
    }
    function onPanEnd(e) {
        if (panStart) {
            if (rafIndex) {
                (0, _cafJs.caf)(rafIndex);
                rafIndex = null;
            }
            if (carousel) resetDuration(container, "");
            panStart = false;
            var $ = getEvent(e);
            lastPosition.x = $.clientX;
            lastPosition.y = $.clientY;
            var dist = getDist(lastPosition, initPosition);
            if (Math.abs(dist)) {
                // drag vs click
                if (!isTouchEvent(e)) {
                    // prevent "click"
                    var target = getTarget(e);
                    (0, _addEventsJs.addEvents)(target, {
                        "click": function preventClick(e) {
                            preventDefaultBehavior(e);
                            (0, _removeEventsJs.removeEvents)(target, {
                                "click": preventClick
                            });
                        }
                    });
                }
                if (carousel) rafIndex = (0, _rafJs.raf)(function() {
                    if (horizontal && !autoWidth) {
                        var indexMoved = -dist * items / (viewport + gutter);
                        indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
                        index += indexMoved;
                    } else {
                        var moved = -(translateInit + dist);
                        if (moved <= 0) index = indexMin;
                        else if (moved >= slidePositions[slideCountNew - 1]) index = indexMax;
                        else {
                            var i = 0;
                            while(i < slideCountNew && moved >= slidePositions[i]){
                                index = i;
                                if (moved > slidePositions[i] && dist < 0) index += 1;
                                i++;
                            }
                        }
                    }
                    render(e, dist);
                    events.emit(isTouchEvent(e) ? "touchEnd" : "dragEnd", info(e));
                });
                else if (moveDirectionExpected) onControlsClick(e, dist > 0 ? -1 : 1);
            }
        }
        // reset
        if (options.preventScrollOnTouch === "auto") preventScroll = false;
        if (swipeAngle) moveDirectionExpected = "?";
        if (autoplay && !animating) setAutoplayTimer();
    }
    // === RESIZE FUNCTIONS === //
    // (slidePositions, index, items) => vertical_conentWrapper.height
    function updateContentWrapperHeight() {
        var wp = middleWrapper ? middleWrapper : innerWrapper;
        wp.style.height = slidePositions[index + items] - slidePositions[index] + "px";
    }
    function getPages() {
        var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
        return Math.min(Math.ceil(rough), slideCount);
    }
    /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */ function updateNavVisibility() {
        if (!nav || navAsThumbnails) return;
        if (pages !== pagesCached) {
            var min = pagesCached, max = pages, fn = (0, _showElementJs.showElement);
            if (pagesCached > pages) {
                min = pages;
                max = pagesCached;
                fn = (0, _hideElementJs.hideElement);
            }
            while(min < max){
                fn(navItems[min]);
                min++;
            }
            // cache pages
            pagesCached = pages;
        }
    }
    function info(e) {
        return {
            container: container,
            slideItems: slideItems,
            navContainer: navContainer,
            navItems: navItems,
            controlsContainer: controlsContainer,
            hasControls: hasControls,
            prevButton: prevButton,
            nextButton: nextButton,
            items: items,
            slideBy: slideBy,
            cloneCount: cloneCount,
            slideCount: slideCount,
            slideCountNew: slideCountNew,
            index: index,
            indexCached: indexCached,
            displayIndex: getCurrentSlide(),
            navCurrentIndex: navCurrentIndex,
            navCurrentIndexCached: navCurrentIndexCached,
            pages: pages,
            pagesCached: pagesCached,
            sheet: sheet,
            isOn: isOn,
            event: e || {}
        };
    }
    return {
        version: "2.9.4",
        getInfo: info,
        events: events,
        goTo: goTo,
        play: play,
        pause: pause,
        isOn: isOn,
        updateSliderHeight: updateInnerWrapperHeight,
        refresh: initSliderTransform,
        destroy: destroy,
        rebuild: function() {
            return tns((0, _extendJs.extend)(options, optionsElements));
        }
    };
};

},{"./helpers/raf.js":"iTaHv","./helpers/caf.js":"6I8KS","./helpers/extend.js":"1rBCE","./helpers/checkStorageValue.js":"dsLGg","./helpers/setLocalStorage.js":"jqnkS","./helpers/getSlideId.js":"iKlLF","./helpers/calc.js":"7SQkm","./helpers/percentageLayout.js":"fPsT7","./helpers/mediaquerySupport.js":"aox3Q","./helpers/createStyleSheet.js":"hPsGv","./helpers/addCSSRule.js":"jqERk","./helpers/removeCSSRule.js":"9T5Tq","./helpers/getCssRulesLength.js":"iHGtj","./helpers/toDegree.js":"33bm4","./helpers/getTouchDirection.js":"hENwJ","./helpers/forEach.js":"9NgV0","./helpers/hasClass.js":"71YZI","./helpers/addClass.js":"kxGDP","./helpers/removeClass.js":"lv2Qv","./helpers/hasAttr.js":"61Xfi","./helpers/getAttr.js":"6j0B9","./helpers/setAttrs.js":"d88vh","./helpers/removeAttrs.js":"jERfd","./helpers/arrayFromNodeList.js":"iov3I","./helpers/hideElement.js":"7xdVa","./helpers/showElement.js":"bILE0","./helpers/isVisible.js":"6yEZw","./helpers/whichProperty.js":"2rtlV","./helpers/has3DTransforms.js":"64JGd","./helpers/getEndProperty.js":"hYJtB","./helpers/addEvents.js":"9EvM8","./helpers/removeEvents.js":"8hlrr","./helpers/events.js":"7e3CN","./helpers/jsTransform.js":"9Et8z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iTaHv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "raf", ()=>raf);
var win = window;
var raf = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.msRequestAnimationFrame || function(cb) {
    return setTimeout(cb, 16);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6I8KS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "caf", ()=>caf);
var win = window;
var caf = win.cancelAnimationFrame || win.mozCancelAnimationFrame || function(id) {
    clearTimeout(id);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1rBCE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extend", ()=>extend);
function extend() {
    var obj, name, copy, target = arguments[0] || {}, i = 1, length = arguments.length;
    for(; i < length; i++){
        if ((obj = arguments[i]) !== null) for(name in obj){
            copy = obj[name];
            if (target === copy) continue;
            else if (copy !== undefined) target[name] = copy;
        }
    }
    return target;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dsLGg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkStorageValue", ()=>checkStorageValue);
function checkStorageValue(value) {
    return [
        "true",
        "false"
    ].indexOf(value) >= 0 ? JSON.parse(value) : value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jqnkS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setLocalStorage", ()=>setLocalStorage);
function setLocalStorage(storage, key, value, access) {
    if (access) try {
        storage.setItem(key, value);
    } catch (e) {}
    return value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iKlLF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSlideId", ()=>getSlideId);
function getSlideId() {
    var id = window.tnsId;
    window.tnsId = !id ? 1 : id + 1;
    return "tns" + window.tnsId;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7SQkm":[function(require,module,exports) {
// get css-calc 
// @return - false | calc | -webkit-calc | -moz-calc
// @usage - var calc = getCalc(); 
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calc", ()=>calc);
var _getBodyJs = require("./getBody.js");
var _setFakeBodyJs = require("./setFakeBody.js");
var _resetFakeBodyJs = require("./resetFakeBody.js");
function calc() {
    var doc = document, body = (0, _getBodyJs.getBody)(), docOverflow = (0, _setFakeBodyJs.setFakeBody)(body), div = doc.createElement("div"), result = false;
    body.appendChild(div);
    try {
        var str = "(10px * 10)", vals = [
            "calc" + str,
            "-moz-calc" + str,
            "-webkit-calc" + str
        ], val;
        for(var i = 0; i < 3; i++){
            val = vals[i];
            div.style.width = val;
            if (div.offsetWidth === 100) {
                result = val.replace(str, "");
                break;
            }
        }
    } catch (e) {}
    body.fake ? (0, _resetFakeBodyJs.resetFakeBody)(body, docOverflow) : div.remove();
    return result;
}

},{"./getBody.js":"kF7x4","./setFakeBody.js":"8q5VJ","./resetFakeBody.js":"kuGv3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kF7x4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBody", ()=>getBody);
function getBody() {
    var doc = document, body = doc.body;
    if (!body) {
        body = doc.createElement("body");
        body.fake = true;
    }
    return body;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8q5VJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setFakeBody", ()=>setFakeBody);
var _docElementJs = require("./docElement.js");
function setFakeBody(body) {
    var docOverflow = "";
    if (body.fake) {
        docOverflow = (0, _docElementJs.docElement).style.overflow;
        //avoid crashing IE8, if background image is used
        body.style.background = "";
        //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
        body.style.overflow = (0, _docElementJs.docElement).style.overflow = "hidden";
        (0, _docElementJs.docElement).appendChild(body);
    }
    return docOverflow;
}

},{"./docElement.js":"5N7EF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5N7EF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "docElement", ()=>docElement);
var docElement = document.documentElement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kuGv3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resetFakeBody", ()=>resetFakeBody);
var _docElementJs = require("./docElement.js");
function resetFakeBody(body, docOverflow) {
    if (body.fake) {
        body.remove();
        (0, _docElementJs.docElement).style.overflow = docOverflow;
        // Trigger layout so kinetic scrolling isn't disabled in iOS6+
        // eslint-disable-next-line
        (0, _docElementJs.docElement).offsetHeight;
    }
}

},{"./docElement.js":"5N7EF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fPsT7":[function(require,module,exports) {
// get subpixel support value
// @return - boolean
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "percentageLayout", ()=>percentageLayout);
var _getBodyJs = require("./getBody.js");
var _setFakeBodyJs = require("./setFakeBody.js");
var _resetFakeBodyJs = require("./resetFakeBody.js");
function percentageLayout() {
    // check subpixel layout supporting
    var doc = document, body = (0, _getBodyJs.getBody)(), docOverflow = (0, _setFakeBodyJs.setFakeBody)(body), wrapper = doc.createElement("div"), outer = doc.createElement("div"), str = "", count = 70, perPage = 3, supported = false;
    wrapper.className = "tns-t-subp2";
    outer.className = "tns-t-ct";
    for(var i = 0; i < count; i++)str += "<div></div>";
    outer.innerHTML = str;
    wrapper.appendChild(outer);
    body.appendChild(wrapper);
    supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;
    body.fake ? (0, _resetFakeBodyJs.resetFakeBody)(body, docOverflow) : wrapper.remove();
    return supported;
}

},{"./getBody.js":"kF7x4","./setFakeBody.js":"8q5VJ","./resetFakeBody.js":"kuGv3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aox3Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mediaquerySupport", ()=>mediaquerySupport);
var _getBodyJs = require("./getBody.js");
var _setFakeBodyJs = require("./setFakeBody.js");
var _resetFakeBodyJs = require("./resetFakeBody.js");
function mediaquerySupport() {
    if (window.matchMedia || window.msMatchMedia) return true;
    var doc = document, body = (0, _getBodyJs.getBody)(), docOverflow = (0, _setFakeBodyJs.setFakeBody)(body), div = doc.createElement("div"), style = doc.createElement("style"), rule = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", position;
    style.type = "text/css";
    div.className = "tns-mq-test";
    body.appendChild(style);
    body.appendChild(div);
    if (style.styleSheet) style.styleSheet.cssText = rule;
    else style.appendChild(doc.createTextNode(rule));
    position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle["position"];
    body.fake ? (0, _resetFakeBodyJs.resetFakeBody)(body, docOverflow) : div.remove();
    return position === "absolute";
}

},{"./getBody.js":"kF7x4","./setFakeBody.js":"8q5VJ","./resetFakeBody.js":"kuGv3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hPsGv":[function(require,module,exports) {
// create and append style sheet
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createStyleSheet", ()=>createStyleSheet);
function createStyleSheet(media, nonce) {
    // Create the <style> tag
    var style = document.createElement("style");
    // style.setAttribute("type", "text/css");
    // Add a media (and/or media query) here if you'd like!
    // style.setAttribute("media", "screen")
    // style.setAttribute("media", "only screen and (max-width : 1024px)")
    if (media) style.setAttribute("media", media);
    // Add nonce attribute for Content Security Policy
    if (nonce) style.setAttribute("nonce", nonce);
    // WebKit hack :(
    // style.appendChild(document.createTextNode(""));
    // Add the <style> element to the page
    document.querySelector("head").appendChild(style);
    return style.sheet ? style.sheet : style.styleSheet;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jqERk":[function(require,module,exports) {
// cross browsers addRule method
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addCSSRule", ()=>addCSSRule);
var _rafJs = require("./raf.js");
function addCSSRule(sheet, selector, rules, index) {
    // return raf(function() {
    "insertRule" in sheet ? sheet.insertRule(selector + "{" + rules + "}", index) : sheet.addRule(selector, rules, index);
// });
}

},{"./raf.js":"iTaHv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9T5Tq":[function(require,module,exports) {
// cross browsers addRule method
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "removeCSSRule", ()=>removeCSSRule);
var _rafJs = require("./raf.js");
function removeCSSRule(sheet, index) {
    // return raf(function() {
    "deleteRule" in sheet ? sheet.deleteRule(index) : sheet.removeRule(index);
// });
}

},{"./raf.js":"iTaHv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iHGtj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCssRulesLength", ()=>getCssRulesLength);
function getCssRulesLength(sheet) {
    var rule = "insertRule" in sheet ? sheet.cssRules : sheet.rules;
    return rule.length;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"33bm4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toDegree", ()=>toDegree);
function toDegree(y, x) {
    return Math.atan2(y, x) * (180 / Math.PI);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hENwJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTouchDirection", ()=>getTouchDirection);
function getTouchDirection(angle, range) {
    var direction = false, gap = Math.abs(90 - Math.abs(angle));
    if (gap >= 90 - range) direction = "horizontal";
    else if (gap <= range) direction = "vertical";
    return direction;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9NgV0":[function(require,module,exports) {
// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "forEach", ()=>forEach);
function forEach(arr, callback, scope) {
    for(var i = 0, l = arr.length; i < l; i++)callback.call(scope, arr[i], i);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"71YZI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "classListSupport", ()=>(0, _classListSupportJs.classListSupport));
parcelHelpers.export(exports, "hasClass", ()=>hasClass);
var _classListSupportJs = require("./classListSupport.js");
var hasClass = (0, _classListSupportJs.classListSupport) ? function(el, str) {
    return el.classList.contains(str);
} : function(el, str) {
    return el.className.indexOf(str) >= 0;
};

},{"./classListSupport.js":"5Oyrq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Oyrq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "classListSupport", ()=>classListSupport);
var classListSupport = "classList" in document.createElement("_");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kxGDP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addClass", ()=>addClass);
var _hasClassJs = require("./hasClass.js");
var addClass = (0, _hasClassJs.classListSupport) ? function(el, str) {
    if (!(0, _hasClassJs.hasClass)(el, str)) el.classList.add(str);
} : function(el, str) {
    if (!(0, _hasClassJs.hasClass)(el, str)) el.className += " " + str;
};

},{"./hasClass.js":"71YZI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lv2Qv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "removeClass", ()=>removeClass);
var _hasClassJs = require("./hasClass.js");
var removeClass = (0, _hasClassJs.classListSupport) ? function(el, str) {
    if ((0, _hasClassJs.hasClass)(el, str)) el.classList.remove(str);
} : function(el, str) {
    if ((0, _hasClassJs.hasClass)(el, str)) el.className = el.className.replace(str, "");
};

},{"./hasClass.js":"71YZI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"61Xfi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasAttr", ()=>hasAttr);
function hasAttr(el, attr) {
    return el.hasAttribute(attr);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6j0B9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAttr", ()=>getAttr);
function getAttr(el, attr) {
    return el.getAttribute(attr);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d88vh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setAttrs", ()=>setAttrs);
var _isNodeListJs = require("./isNodeList.js");
function setAttrs(els, attrs) {
    els = (0, _isNodeListJs.isNodeList)(els) || els instanceof Array ? els : [
        els
    ];
    if (Object.prototype.toString.call(attrs) !== "[object Object]") return;
    for(var i = els.length; i--;)for(var key in attrs)els[i].setAttribute(key, attrs[key]);
}

},{"./isNodeList.js":"iVLo9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iVLo9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNodeList", ()=>isNodeList);
function isNodeList(el) {
    // Only NodeList has the "item()" function
    return typeof el.item !== "undefined";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jERfd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "removeAttrs", ()=>removeAttrs);
var _isNodeListJs = require("./isNodeList.js");
function removeAttrs(els, attrs) {
    els = (0, _isNodeListJs.isNodeList)(els) || els instanceof Array ? els : [
        els
    ];
    attrs = attrs instanceof Array ? attrs : [
        attrs
    ];
    var attrLength = attrs.length;
    for(var i = els.length; i--;)for(var j = attrLength; j--;)els[i].removeAttribute(attrs[j]);
}

},{"./isNodeList.js":"iVLo9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iov3I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "arrayFromNodeList", ()=>arrayFromNodeList);
function arrayFromNodeList(nl) {
    var arr = [];
    for(var i = 0, l = nl.length; i < l; i++)arr.push(nl[i]);
    return arr;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7xdVa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hideElement", ()=>hideElement);
function hideElement(el, forceHide) {
    if (el.style.display !== "none") el.style.display = "none";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bILE0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showElement", ()=>showElement);
function showElement(el, forceHide) {
    if (el.style.display === "none") el.style.display = "";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6yEZw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isVisible", ()=>isVisible);
function isVisible(el) {
    return window.getComputedStyle(el).display !== "none";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2rtlV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "whichProperty", ()=>whichProperty);
function whichProperty(props) {
    if (typeof props === "string") {
        var arr = [
            props
        ], Props = props.charAt(0).toUpperCase() + props.substr(1), prefixes = [
            "Webkit",
            "Moz",
            "ms",
            "O"
        ];
        prefixes.forEach(function(prefix) {
            if (prefix !== "ms" || props === "transform") arr.push(prefix + Props);
        });
        props = arr;
    }
    var el = document.createElement("fakeelement"), len = props.length;
    for(var i = 0; i < props.length; i++){
        var prop = props[i];
        if (el.style[prop] !== undefined) return prop;
    }
    return false; // explicit for ie9-
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"64JGd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "has3DTransforms", ()=>has3DTransforms);
var _getBodyJs = require("./getBody.js");
var _setFakeBodyJs = require("./setFakeBody.js");
var _resetFakeBodyJs = require("./resetFakeBody.js");
function has3DTransforms(tf) {
    if (!tf) return false;
    if (!window.getComputedStyle) return false;
    var doc = document, body = (0, _getBodyJs.getBody)(), docOverflow = (0, _setFakeBodyJs.setFakeBody)(body), el = doc.createElement("p"), has3d, cssTF = tf.length > 9 ? "-" + tf.slice(0, -9).toLowerCase() + "-" : "";
    cssTF += "transform";
    // Add it to the body to get the computed style
    body.insertBefore(el, null);
    el.style[tf] = "translate3d(1px,1px,1px)";
    has3d = window.getComputedStyle(el).getPropertyValue(cssTF);
    body.fake ? (0, _resetFakeBodyJs.resetFakeBody)(body, docOverflow) : el.remove();
    return has3d !== undefined && has3d.length > 0 && has3d !== "none";
}

},{"./getBody.js":"kF7x4","./setFakeBody.js":"8q5VJ","./resetFakeBody.js":"kuGv3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hYJtB":[function(require,module,exports) {
// get transitionend, animationend based on transitionDuration
// @propin: string
// @propOut: string, first-letter uppercase
// Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getEndProperty", ()=>getEndProperty);
function getEndProperty(propIn, propOut) {
    var endProp = false;
    if (/^Webkit/.test(propIn)) endProp = "webkit" + propOut + "End";
    else if (/^O/.test(propIn)) endProp = "o" + propOut + "End";
    else if (propIn) endProp = propOut.toLowerCase() + "end";
    return endProp;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9EvM8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addEvents", ()=>addEvents);
var _passiveOptionJs = require("./passiveOption.js");
function addEvents(el, obj, preventScrolling) {
    for(var prop in obj){
        var option = [
            "touchstart",
            "touchmove"
        ].indexOf(prop) >= 0 && !preventScrolling ? (0, _passiveOptionJs.passiveOption) : false;
        el.addEventListener(prop, obj[prop], option);
    }
}

},{"./passiveOption.js":"Jc0AT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Jc0AT":[function(require,module,exports) {
// Test via a getter in the options object to see if the passive property is accessed
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "passiveOption", ()=>passiveOption);
var supportsPassive = false;
try {
    var opts = Object.defineProperty({}, "passive", {
        get: function() {
            supportsPassive = true;
        }
    });
    window.addEventListener("test", null, opts);
} catch (e) {}
var passiveOption = supportsPassive ? {
    passive: true
} : false;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8hlrr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "removeEvents", ()=>removeEvents);
var _passiveOptionJs = require("./passiveOption.js");
function removeEvents(el, obj) {
    for(var prop in obj){
        var option = [
            "touchstart",
            "touchmove"
        ].indexOf(prop) >= 0 ? (0, _passiveOptionJs.passiveOption) : false;
        el.removeEventListener(prop, obj[prop], option);
    }
}

},{"./passiveOption.js":"Jc0AT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7e3CN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Events", ()=>Events);
function Events() {
    return {
        topics: {},
        on: function(eventName, fn) {
            this.topics[eventName] = this.topics[eventName] || [];
            this.topics[eventName].push(fn);
        },
        off: function(eventName, fn) {
            if (this.topics[eventName]) {
                for(var i = 0; i < this.topics[eventName].length; i++)if (this.topics[eventName][i] === fn) {
                    this.topics[eventName].splice(i, 1);
                    break;
                }
            }
        },
        emit: function(eventName, data) {
            data.type = eventName;
            if (this.topics[eventName]) this.topics[eventName].forEach(function(fn) {
                fn(data, eventName);
            });
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Et8z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "jsTransform", ()=>jsTransform);
function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
    var tick = Math.min(duration, 10), unit = to.indexOf("%") >= 0 ? "%" : "px", to = to.replace(unit, ""), from = Number(element.style[attr].replace(prefix, "").replace(postfix, "").replace(unit, "")), positionTick = (to - from) / duration * tick, running;
    setTimeout(moveElement, tick);
    function moveElement() {
        duration -= tick;
        from += positionTick;
        element.style[attr] = prefix + from + unit + postfix;
        if (duration > 0) setTimeout(moveElement, tick);
        else callback();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fP31w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sliderIndex", ()=>sliderIndex);
const sliderIndex = (wrapperClass)=>{
    if (document.querySelector('*[tabindex="-1"]')) {
        document.querySelectorAll('button[tabindex="-1"]').forEach((sliderButton)=>{
            sliderButton.setAttribute("tabindex", "0");
        });
        document.querySelectorAll(`${wrapperClass}>div`).forEach((sliderItem)=>{
            let sliderCard = sliderItem.querySelector("*");
            if (sliderItem.getAttribute("tabIndex") == null) sliderCard.setAttribute("tabIndex", "0");
            else sliderCard.setAttribute("tabIndex", sliderItem.getAttribute("tabIndex"));
        });
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["cSiU4","f7KXl"], "f7KXl", "parcelRequire9284")

//# sourceMappingURL=slider.90dc92a1.js.map
