function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire9284"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire9284"] = parcelRequire;
}
parcelRequire.register("e2YZL", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $a3a090fa1644b516$export$2e2bcd8739ae039);

var $4gus7 = parcelRequire("4gus7");
class $a3a090fa1644b516$var$Modal {
    constructor(config){
        this.backdrop = config.backdrop;
        this.backdropActiveClass = config.backdropActiveClass;
        this.modal = config.modal;
        this.modalActiveClass = config.modalActiveClass;
        this.modalID = config.modalIdTarget;
        this.timeBackDrop = 0;
        this.timeModal = 0;
        this.onshow = config.onShow;
        this.onhide = config.onHide;
        this.JSUTIL = new (0, (/*@__PURE__*/$parcel$interopDefault($4gus7)))();
        this.init();
        this.events();
    }
    init() {
    // empty for now
    }
    events() {
        document.querySelectorAll(`[tf-ds-modal-target='${this.modalID}']`).forEach((element)=>{
            element.addEventListener("click", (event)=>this.show());
        });
        document.querySelectorAll(`[tf-ds-modal-close='${this.modalID}']`).forEach((element)=>{
            element.addEventListener("click", (event)=>this.hide());
        });
    }
    async hide() {
        // Start Modal
        await this.tf_sto(this.timeModal);
        this.JSUTIL.removeClass(document.getElementById(`${this.modalID}`), this.modalActiveClass);
        // End Modal
        // Backdrop
        await this.tf_sto(this.timeBackDrop);
        this.JSUTIL.removeClass(document.querySelector(`.${this.backdrop}`), this.backdropActiveClass);
        await this.tf_sto(this.timeBackDrop);
        if (document.querySelector(`.${this.backdrop}`)) {
            var backdropHTML = document.querySelector(`.${this.backdrop}`);
            backdropHTML.parentNode.removeChild(backdropHTML);
        }
        // End Backdrop
        if (this.onhide) this.onhide();
    }
    async show(element) {
        // Backdrop
        var backdropHTML = document.createElement("div");
        backdropHTML.className = this.backdrop;
        document.body.appendChild(backdropHTML);
        // get animation duration from set css in index.html for the backdrop
        const styleBackdrop = getComputedStyle(document.querySelector(`.${this.backdrop}`));
        Object.keys(styleBackdrop).forEach((key)=>{
            if (key == "transitionDuration") this.timeBackDrop = styleBackdrop[key];
        });
        this.timeBackDropSplit = String(this.timeBackDrop).split("s");
        this.timeBackDrop = parseFloat(this.timeBackDropSplit[0]) * 1000;
        // get animation duration from set css in index.html for the modal
        const styleModal = getComputedStyle(document.querySelector(`.${this.modal}`));
        Object.keys(styleModal).forEach((key)=>{
            if (key == "transitionDuration") this.timeModal = styleModal[key];
        });
        this.timeModalSplit = String(this.timeModal).split("s");
        this.timeModal = parseFloat(this.timeModalSplit[0]) * 1000;
        await this.tf_sto(this.timeBackDrop);
        this.JSUTIL.toggleClass(document.querySelector(`.${this.backdrop}`), this.backdropActiveClass);
        await this.tf_sto(this.timeModal);
        this.JSUTIL.toggleClass(document.getElementById(this.modalID), this.modalActiveClass);
        if (document.querySelector(`.${this.backdrop}`)) document.querySelector(`.${this.backdrop}`).addEventListener("click", (event)=>this.hide());
        if (this.onshow) this.onshow();
    }
    async tf_sto(time) {
        return new Promise((resolve, reject)=>{
            if (isNaN(time)) reject(new Error("is not a number"));
            else setTimeout(resolve, time);
        });
    }
}
var $a3a090fa1644b516$export$2e2bcd8739ae039 = $a3a090fa1644b516$var$Modal;

});
parcelRequire.register("4gus7", function(module, exports) {

module.exports = (parcelRequire("cr0T4"));

});
parcelRequire.register("cr0T4", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $90d8b1d95622026c$export$2e2bcd8739ae039);
class $90d8b1d95622026c$var$JSUTIL {
    _getElements(id) {
        if (typeof id == "object") return [
            id
        ];
        else return document.querySelectorAll(id);
    }
    // .hide(selector)
    hide(sel) {
        this._hideElements(this._getElements(sel));
    }
    _hideElements(elements) {
        var i, l = elements.length;
        for(i = 0; i < l; i++)this._hideElement(elements[i]);
    }
    _hideElement(element) {
        this._styleElement(element, "display", "none");
    }
    //.show(selector)
    show(sel, a) {
        var elements = this._getElements(sel);
        if (a) this._hideElements(elements);
        this._showElements(elements);
    }
    _showElements(elements) {
        var i, l = elements.length;
        for(i = 0; i < l; i++)this._showElement(elements[i]);
    }
    _showElement(element) {
        this._styleElement(element, "display", "block");
    }
    //addStyle [element, property, value]
    addStyle(sel, prop, val) {
        this._styleElements(this._getElements(sel), prop, val);
    }
    _styleElements(elements, prop, val) {
        var i, l = elements.length;
        for(i = 0; i < l; i++)this._styleElement(elements[i], prop, val);
    }
    _styleElement(element, prop, val) {
        element.style.setProperty(prop, val);
    }
    //toggleShow(selector)
    toggleShow(sel) {
        var i, x = this._getElements(sel), l = x.length;
        for(i = 0; i < l; i++)if (x[i].style.display == "none") this._styleElement(x[i], "display", "block");
        else this._styleElement(x[i], "display", "none");
    }
    // addClass(selector,'class')
    addClass(sel, name) {
        this._addClassElements(this._getElements(sel), name);
    }
    _addClassElements(elements, name) {
        var i, l = elements.length;
        for(i = 0; i < l; i++)this._addClassElement(elements[i], name);
    }
    _addClassElement(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for(i = 0; i < arr2.length; i++)if (arr1.indexOf(arr2[i]) == -1) element.className += " " + arr2[i];
    }
    //removeClass(selector,'class')
    removeClass(sel, name) {
        this._removeClassElements(this._getElements(sel), name);
    }
    _removeClassElements(elements, name) {
        var i, l = elements.length, arr1, arr2, j;
        for(i = 0; i < l; i++)this._removeClassElement(elements[i], name);
    }
    _removeClassElement(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for(i = 0; i < arr2.length; i++)while(arr1.indexOf(arr2[i]) > -1)arr1.splice(arr1.indexOf(arr2[i]), 1);
        element.className = arr1.join(" ");
    }
    //ToggleClass('class')
    toggleClass(sel, c1, c2) {
        this._toggleClassElements(this._getElements(sel), c1, c2);
    }
    _toggleClassElements(elements, c1, c2) {
        var i, l = elements.length;
        for(i = 0; i < l; i++)this._toggleClassElement(elements[i], c1, c2);
    }
    _toggleClassElement(element, c1, c2) {
        var t1, t2, t1Arr, t2Arr, j, arr, allPresent;
        t1 = c1 || "";
        t2 = c2 || "";
        t1Arr = t1.split(" ");
        t2Arr = t2.split(" ");
        arr = element.className.split(" ");
        if (t2Arr.length == 0) {
            allPresent = true;
            for(j = 0; j < t1Arr.length; j++)if (arr.indexOf(t1Arr[j]) == -1) allPresent = false;
            if (allPresent) this._removeClassElement(element, t1);
            else this._addClassElement(element, t1);
        } else {
            allPresent = true;
            for(j = 0; j < t1Arr.length; j++)if (arr.indexOf(t1Arr[j]) == -1) allPresent = false;
            if (allPresent) {
                this._removeClassElement(element, t1);
                this._addClassElement(element, t2);
            } else {
                this._removeClassElement(element, t2);
                this._addClassElement(element, t1);
            }
        }
    }
    // BROWSER DETECTION
    getBrowser(browser) {
        switch(browser){
            // CHROME 1+
            case "chrome":
                return navigator.userAgent.indexOf("Chrome") != -1 && !navigator.userAgent.match(/edg/i) || navigator.userAgent.indexOf("CriOS") >= 0;
            // SAFARI 3.0+
            case "safari":
                return /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !(navigator.userAgent.indexOf("CriOS") >= 0);
            // FIREFOX 1.0+
            case "firefox":
                return typeof InstallTrigger !== "undefined";
            // INTERNET EXPLORER 6-11
            case "ie":
                return !!document.documentMode;
            // EDGE 20+
            case "edge":
                return navigator.userAgent.match(/edg/i) || navigator.userAgent.indexOf("Edge/") != -1 ? true : false;
            default:
                return null;
        }
    }
    getTypeDevice(system) {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        switch(system){
            case "touch":
                return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
            case "android":
                return /android/i.test(userAgent);
            case "ios":
                return typeof navigator.standalone === "boolean";
            default:
                return null;
        }
    }
}
var $90d8b1d95622026c$export$2e2bcd8739ae039 = $90d8b1d95622026c$var$JSUTIL;

});



/**
 * Modal
 */ var $759c2a7f3dfc1e28$exports = {};

$759c2a7f3dfc1e28$exports = (parcelRequire("e2YZL"));


var $d9151238d109d25a$exports = {};
(function(root, blazy) {
    if (typeof define === "function" && define.amd) // AMD. Register bLazy as an anonymous module
    define(blazy);
    else // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    $d9151238d109d25a$exports = blazy();
})($d9151238d109d25a$exports, function() {
    "use strict";
    //private vars
    var _source, _viewport, _isRetina, _supportClosest, _attrSrc = "src", _attrSrcset = "srcset";
    // constructor
    return function Blazy(options) {
        //IE7- fallback for missing querySelectorAll support
        if (!document.querySelectorAll) {
            var s = document.createStyleSheet();
            document.querySelectorAll = function(r, c, i, j, a) {
                a = document.all, c = [], r = r.replace(/\[for\b/gi, "[htmlFor").split(",");
                for(i = r.length; i--;){
                    s.addRule(r[i], "k:v");
                    for(j = a.length; j--;)a[j].currentStyle.k && c.push(a[j]);
                    s.removeRule(0);
                }
                return c;
            };
        }
        //options and helper vars
        var scope = this;
        var util = scope._util = {};
        util.elements = [];
        util.destroyed = true;
        scope.options = options || {};
        scope.options.error = scope.options.error || false;
        scope.options.offset = scope.options.offset || 100;
        scope.options.root = scope.options.root || document;
        scope.options.success = scope.options.success || false;
        scope.options.selector = scope.options.selector || ".b-lazy";
        scope.options.separator = scope.options.separator || "|";
        scope.options.containerClass = scope.options.container;
        scope.options.container = scope.options.containerClass ? document.querySelectorAll(scope.options.containerClass) : false;
        scope.options.errorClass = scope.options.errorClass || "b-error";
        scope.options.breakpoints = scope.options.breakpoints || false;
        scope.options.loadInvisible = scope.options.loadInvisible || false;
        scope.options.successClass = scope.options.successClass || "b-loaded";
        scope.options.validateDelay = scope.options.validateDelay || 25;
        scope.options.saveViewportOffsetDelay = scope.options.saveViewportOffsetDelay || 50;
        scope.options.srcset = scope.options.srcset || "data-srcset";
        scope.options.src = _source = scope.options.src || "data-src";
        _supportClosest = Element.prototype.closest;
        _isRetina = window.devicePixelRatio > 1;
        _viewport = {};
        _viewport.top = 0 - scope.options.offset;
        _viewport.left = 0 - scope.options.offset;
        /* public functions
         ************************************/ scope.revalidate = function() {
            initialize(scope);
        };
        scope.load = function(elements, force) {
            var opt = this.options;
            if (elements && elements.length === undefined) loadElement(elements, force, opt);
            else each(elements, function(element) {
                loadElement(element, force, opt);
            });
        };
        scope.destroy = function() {
            var util = scope._util;
            if (scope.options.container) each(scope.options.container, function(object) {
                unbindEvent(object, "scroll", util.validateT);
            });
            unbindEvent(window, "scroll", util.validateT);
            unbindEvent(window, "resize", util.validateT);
            unbindEvent(window, "resize", util.saveViewportOffsetT);
            util.count = 0;
            util.elements.length = 0;
            util.destroyed = true;
        };
        //throttle, ensures that we don't call the functions too often
        util.validateT = throttle(function() {
            validate(scope);
        }, scope.options.validateDelay, scope);
        util.saveViewportOffsetT = throttle(function() {
            saveViewportOffset(scope.options.offset);
        }, scope.options.saveViewportOffsetDelay, scope);
        saveViewportOffset(scope.options.offset);
        //handle multi-served image src (obsolete)
        each(scope.options.breakpoints, function(object) {
            if (object.width >= window.screen.width) {
                _source = object.src;
                return false;
            }
        });
        // start lazy load
        setTimeout(function() {
            initialize(scope);
        }); // "dom ready" fix
    };
    /* Private helper functions
     ************************************/ function initialize(self) {
        var util = self._util;
        // First we create an array of elements to lazy load
        util.elements = toArray(self.options);
        util.count = util.elements.length;
        // Then we bind resize and scroll events if not already binded
        if (util.destroyed) {
            util.destroyed = false;
            if (self.options.container) each(self.options.container, function(object) {
                bindEvent(object, "scroll", util.validateT);
            });
            bindEvent(window, "resize", util.saveViewportOffsetT);
            bindEvent(window, "resize", util.validateT);
            bindEvent(window, "scroll", util.validateT);
        }
        // And finally, we start to lazy load.
        validate(self);
    }
    function validate(self) {
        var util = self._util;
        for(var i = 0; i < util.count; i++){
            var element = util.elements[i];
            if (elementInView(element, self.options) || hasClass(element, self.options.successClass)) {
                self.load(element);
                util.elements.splice(i, 1);
                util.count--;
                i--;
            }
        }
        if (util.count === 0) self.destroy();
    }
    function elementInView(ele, options) {
        var rect = ele.getBoundingClientRect();
        if (options.container && _supportClosest) {
            // Is element inside a container?
            var elementContainer = ele.closest(options.containerClass);
            if (elementContainer) {
                var containerRect = elementContainer.getBoundingClientRect();
                // Is container in view?
                if (inView(containerRect, _viewport)) {
                    var top = containerRect.top - options.offset;
                    var right = containerRect.right + options.offset;
                    var bottom = containerRect.bottom + options.offset;
                    var left = containerRect.left - options.offset;
                    var containerRectWithOffset = {
                        top: top > _viewport.top ? top : _viewport.top,
                        right: right < _viewport.right ? right : _viewport.right,
                        bottom: bottom < _viewport.bottom ? bottom : _viewport.bottom,
                        left: left > _viewport.left ? left : _viewport.left
                    };
                    // Is element in view of container?
                    return inView(rect, containerRectWithOffset);
                } else return false;
            }
        }
        return inView(rect, _viewport);
    }
    function inView(rect, viewport) {
        // Intersection
        return rect.right >= viewport.left && rect.bottom >= viewport.top && rect.left <= viewport.right && rect.top <= viewport.bottom;
    }
    function loadElement(ele, force, options) {
        // if element is visible, not loaded or forced
        if (!hasClass(ele, options.successClass) && (force || options.loadInvisible || ele.offsetWidth > 0 && ele.offsetHeight > 0)) {
            var dataSrc = getAttr(ele, _source) || getAttr(ele, options.src); // fallback to default 'data-src'
            if (dataSrc) {
                var dataSrcSplitted = dataSrc.split(options.separator);
                var src = dataSrcSplitted[_isRetina && dataSrcSplitted.length > 1 ? 1 : 0];
                var srcset = getAttr(ele, options.srcset);
                var isImage = equal(ele, "img");
                var parent = ele.parentNode;
                var isPicture = parent && equal(parent, "picture");
                // Image or background image
                if (isImage || ele.src === undefined) {
                    var img = new Image();
                    // using EventListener instead of onerror and onload
                    // due to bug introduced in chrome v50 
                    // (https://productforums.google.com/forum/#!topic/chrome/p51Lk7vnP2o)
                    var onErrorHandler = function() {
                        if (options.error) options.error(ele, "invalid");
                        addClass(ele, options.errorClass);
                        unbindEvent(img, "error", onErrorHandler);
                        unbindEvent(img, "load", onLoadHandler);
                    };
                    var onLoadHandler = function() {
                        // Is element an image
                        if (isImage) {
                            if (!isPicture) handleSources(ele, src, srcset);
                        } else ele.style.backgroundImage = 'url("' + src + '")';
                        itemLoaded(ele, options);
                        unbindEvent(img, "load", onLoadHandler);
                        unbindEvent(img, "error", onErrorHandler);
                    };
                    // Picture element
                    if (isPicture) {
                        img = ele; // Image tag inside picture element wont get preloaded
                        each(parent.getElementsByTagName("source"), function(source) {
                            handleSource(source, _attrSrcset, options.srcset);
                        });
                    }
                    bindEvent(img, "error", onErrorHandler);
                    bindEvent(img, "load", onLoadHandler);
                    handleSources(img, src, srcset); // Preload
                } else {
                    ele.src = src;
                    itemLoaded(ele, options);
                }
            } else // video with child source
            if (equal(ele, "video")) {
                each(ele.getElementsByTagName("source"), function(source) {
                    handleSource(source, _attrSrc, options.src);
                });
                ele.load();
                itemLoaded(ele, options);
            } else {
                if (options.error) options.error(ele, "missing");
                addClass(ele, options.errorClass);
            }
        }
    }
    function itemLoaded(ele, options) {
        addClass(ele, options.successClass);
        if (options.success) options.success(ele);
        // cleanup markup, remove data source attributes
        removeAttr(ele, options.src);
        removeAttr(ele, options.srcset);
        each(options.breakpoints, function(object) {
            removeAttr(ele, object.src);
        });
    }
    function handleSource(ele, attr, dataAttr) {
        var dataSrc = getAttr(ele, dataAttr);
        if (dataSrc) {
            setAttr(ele, attr, dataSrc);
            removeAttr(ele, dataAttr);
        }
    }
    function handleSources(ele, src, srcset) {
        if (srcset) setAttr(ele, _attrSrcset, srcset); //srcset
        ele.src = src; //src 
    }
    function setAttr(ele, attr, value) {
        ele.setAttribute(attr, value);
    }
    function getAttr(ele, attr) {
        return ele.getAttribute(attr);
    }
    function removeAttr(ele, attr) {
        ele.removeAttribute(attr);
    }
    function equal(ele, str) {
        return ele.nodeName.toLowerCase() === str;
    }
    function hasClass(ele, className) {
        return (" " + ele.className + " ").indexOf(" " + className + " ") !== -1;
    }
    function addClass(ele, className) {
        if (!hasClass(ele, className)) ele.className += " " + className;
    }
    function toArray(options) {
        var array = [];
        var nodelist = options.root.querySelectorAll(options.selector);
        for(var i = nodelist.length; i--; array.unshift(nodelist[i]));
        return array;
    }
    function saveViewportOffset(offset) {
        _viewport.bottom = (window.innerHeight || document.documentElement.clientHeight) + offset;
        _viewport.right = (window.innerWidth || document.documentElement.clientWidth) + offset;
    }
    function bindEvent(ele, type, fn) {
        if (ele.attachEvent) ele.attachEvent && ele.attachEvent("on" + type, fn);
        else ele.addEventListener(type, fn, {
            capture: false,
            passive: true
        });
    }
    function unbindEvent(ele, type, fn) {
        if (ele.detachEvent) ele.detachEvent && ele.detachEvent("on" + type, fn);
        else ele.removeEventListener(type, fn, {
            capture: false,
            passive: true
        });
    }
    function each(object, fn) {
        if (object && fn) {
            var l = object.length;
            for(var i = 0; i < l && fn(object[i], i) !== false; i++);
        }
    }
    function throttle(fn, minDelay, scope) {
        var lastCall = 0;
        return function() {
            var now = +new Date();
            if (now - lastCall < minDelay) return;
            lastCall = now;
            fn.apply(scope, arguments);
        };
    }
});


const $f251efa71d2fc3cc$var$modal = new (0, (/*@__PURE__*/$parcel$interopDefault($759c2a7f3dfc1e28$exports)))({
    backdrop: "g--backdrop-01",
    backdropActiveClass: "g--backdrop-01--is-active",
    modal: "g--modal-01",
    modalIdTarget: "modal-1",
    modalActiveClass: "g--modal-01--is-active",
    onHide: ()=>{
    //do something when the modal closes
    },
    onShow: ()=>{
    //do something when the modal pops up
    }
});
class $f251efa71d2fc3cc$var$Index {
    constructor(){
        this.init();
    }
    init() {
        // lazy loading for images
        new (0, (/*@__PURE__*/$parcel$interopDefault($d9151238d109d25a$exports)))({
            selector: ".g--lazy-01",
            successClass: "g--lazy-01--is-loaded",
            errorClass: "g--lazy-01--is-error"
        });
    }
}
var $f251efa71d2fc3cc$export$2e2bcd8739ae039 = $f251efa71d2fc3cc$var$Index;
new $f251efa71d2fc3cc$var$Index() //
;


//# sourceMappingURL=modal.96dc1566.js.map
