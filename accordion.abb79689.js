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
parcelRequire.register("a2zi4", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $74f57737293911f6$export$2e2bcd8739ae039);

var $4gus7 = parcelRequire("4gus7");
class $74f57737293911f6$var$Accordion {
    constructor(config){
        this.accActive = config.accActive;
        this.accActiveClass = config.accActiveClass;
        this.accTrigger = config.accTrigger;
        this.accBody = config.accBody;
        this.accClose = config.accClose;
        this.accAllOpen = config.accAllOpen;
        this.onChange = config.onChange;
        this.JSUTIL = new (0, (/*@__PURE__*/$parcel$interopDefault($4gus7)))();
        this.init();
        this.events();
    }
    init() {
        this.show();
    }
    events() {
        document.querySelectorAll(`[${this.accTrigger}]`).forEach((element)=>{
            element.addEventListener("click", (item)=>{
                item.preventDefault();
                // Hides all active classes
                this.toggle(element);
            });
        });
    }
    show() {
        this.JSUTIL.addClass(document.getElementById(this.accActive), this.accActiveClass);
    }
    open(obj) {
        this.hide();
        this.JSUTIL.addClass(document.getElementById(obj), this.accActiveClass);
        if (this.onChange) this.onChange();
    }
    toggle(element) {
        // Hides all active classes
        // apply class to trigger 
        var targetID = element.getAttribute(`${this.accTrigger}`);
        var bodyelement = document.getElementById(targetID);
        if (this.accClose === true) {
            if (bodyelement.classList.contains(this.accActiveClass)) {
                this.JSUTIL.toggleClass(bodyelement, this.accActiveClass);
                if (!this.accAllOpen) this.hideAllTabsExceptActual(targetID);
            } else {
                if (!this.accAllOpen) this.hide();
                this.JSUTIL.toggleClass(bodyelement, this.accActiveClass);
            }
        } else {
            this.hide();
            //apply class to element   
            this.JSUTIL.toggleClass(bodyelement, this.accActiveClass);
        }
        if (this.onChange) this.onChange();
    }
    hide() {
        //removes class element
        document.querySelectorAll(`[${this.accBody}]`).forEach((element)=>{
            this.JSUTIL.removeClass(element, this.accActiveClass);
        });
    }
    hideAllTabsExceptActual(targetID) {
        //removes class element except actual
        document.querySelectorAll(`[${this.accBody}]`).forEach((element)=>{
            if (element.getAttribute(`${this.accBody}`) != targetID) this.JSUTIL.removeClass(element, this.accActiveClass);
        });
    }
}
var $74f57737293911f6$export$2e2bcd8739ae039 = $74f57737293911f6$var$Accordion;

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



parcelRequire.register("lsN84", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $fa02528544e96b93$export$2e2bcd8739ae039);

var $4gus7 = parcelRequire("4gus7");
parcelRequire("anSuF");
var $anPMD = parcelRequire("anPMD");
class $fa02528544e96b93$var$BackToTop {
    constructor(payload){
        this.DOM = {
            activeClass: payload.activeClass,
            links: document.querySelectorAll("." + payload.linkClass) ?? [],
            distanceTrigger: payload.distanceTrigger
        };
        this.JSUTIL = new (0, (/*@__PURE__*/$parcel$interopDefault($4gus7)))();
        this.events();
    }
    init() {}
    events() {
        if (!!this.DOM.links.length) {
            this.DOM.links.forEach((link)=>{
                this.clickEvent = link.addEventListener("click", this.goBackToTop.bind(this));
            });
            window.addEventListener("scroll", (0, $anPMD.tf_debounce)(()=>{
                this.checkScroll();
            }));
        }
    }
    checkScroll() {
        this.DOM.links.forEach((link)=>{
            if (window.pageYOffset <= link.getAttribute(this.DOM.distanceTrigger)) this.JSUTIL.removeClass(link, this.DOM.activeClass);
            else this.JSUTIL.addClass(link, this.DOM.activeClass);
        });
    }
    goBackToTop(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }
    destroy() {
        this.clickEvent = {};
    }
}
var $fa02528544e96b93$export$2e2bcd8739ae039 = $fa02528544e96b93$var$BackToTop;

});
parcelRequire.register("anSuF", function(module, exports) {

$parcel$export(module.exports, "tf_debounce", () => (parcelRequire("anPMD")).tf_debounce);

var $anPMD = parcelRequire("anPMD");

});
parcelRequire.register("anPMD", function(module, exports) {

$parcel$export(module.exports, "tf_debounce", () => $78f43873aa59a56a$export$d1687a52ea95fdc);
function $78f43873aa59a56a$export$d1687a52ea95fdc(callback, wait) {
    let timeout;
    return (...args)=>{
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(()=>callback.apply(context, args), wait);
    };
}
function $78f43873aa59a56a$export$7ead8aabcf81e045(callback, wait, immediate = false) {
    let timeout = null;
    let initialCall = true;
    return function() {
        const callNow = immediate && initialCall;
        const next = ()=>{
            callback.apply(this, arguments);
            timeout = null;
        };
        if (callNow) {
            initialCall = false;
            next();
        }
        if (!timeout) timeout = setTimeout(next, wait);
    };
}

});



/**
 * Accordion
 */ var $74393331a9c3ba22$exports = {};

$74393331a9c3ba22$exports = (parcelRequire("a2zi4"));


var $c3d5210a46136a9e$exports = {};

$c3d5210a46136a9e$exports = (parcelRequire("lsN84"));


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


const $d8f1d5ec09b64875$var$accordion = new (0, (/*@__PURE__*/$parcel$interopDefault($74393331a9c3ba22$exports)))({
    accActive: "accordion-1",
    accActiveClass: "g--accordion-01--is-active",
    accClose: true,
    accAllOpen: false,
    accTrigger: "tf-ds-acc-target",
    accBody: "tf-ds-acc-body",
    onChange: ()=>{
    //do something
    }
});
const $d8f1d5ec09b64875$var$accordionB = new (0, (/*@__PURE__*/$parcel$interopDefault($74393331a9c3ba22$exports)))({
    accActive: "accordion-4",
    accActiveClass: "g--accordion-02--is-active",
    accClose: true,
    accAllOpen: false,
    accTrigger: "tf-ds-acc-target",
    accBody: "tf-ds-acc-body",
    onChange: ()=>{
    //do something
    }
});
class $d8f1d5ec09b64875$var$Index {
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
        const backToTop = new (0, (/*@__PURE__*/$parcel$interopDefault($c3d5210a46136a9e$exports)))({
            linkClass: "js--back-top",
            activeClass: "g--back-top-01--is-active",
            distanceTrigger: "tf-data-distance"
        });
    }
}
var $d8f1d5ec09b64875$export$2e2bcd8739ae039 = $d8f1d5ec09b64875$var$Index;
new $d8f1d5ec09b64875$var$Index() //
;


//# sourceMappingURL=accordion.abb79689.js.map
