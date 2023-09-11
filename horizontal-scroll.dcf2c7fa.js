function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
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
function $8bf2f9ddbdb26115$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $8bf2f9ddbdb26115$var$_inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
/*!
 * GSAP 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var $8bf2f9ddbdb26115$export$4922bee768729a77 = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, $8bf2f9ddbdb26115$var$_defaults = {
    duration: .5,
    overwrite: false,
    delay: 0
}, $8bf2f9ddbdb26115$var$_suppressOverwrites, $8bf2f9ddbdb26115$var$_reverting, $8bf2f9ddbdb26115$var$_context, $8bf2f9ddbdb26115$var$_bigNum = 1e8, $8bf2f9ddbdb26115$var$_tinyNum = 1 / $8bf2f9ddbdb26115$var$_bigNum, $8bf2f9ddbdb26115$var$_2PI = Math.PI * 2, $8bf2f9ddbdb26115$var$_HALF_PI = $8bf2f9ddbdb26115$var$_2PI / 4, $8bf2f9ddbdb26115$var$_gsID = 0, $8bf2f9ddbdb26115$var$_sqrt = Math.sqrt, $8bf2f9ddbdb26115$var$_cos = Math.cos, $8bf2f9ddbdb26115$var$_sin = Math.sin, $8bf2f9ddbdb26115$export$f664476fd67145ca = function _isString(value) {
    return typeof value === "string";
}, $8bf2f9ddbdb26115$var$_isFunction = function _isFunction(value) {
    return typeof value === "function";
}, $8bf2f9ddbdb26115$var$_isNumber = function _isNumber(value) {
    return typeof value === "number";
}, $8bf2f9ddbdb26115$export$a8178c063a9fd3a1 = function _isUndefined(value) {
    return typeof value === "undefined";
}, $8bf2f9ddbdb26115$var$_isObject = function _isObject(value) {
    return typeof value === "object";
}, $8bf2f9ddbdb26115$var$_isNotFalse = function _isNotFalse(value) {
    return value !== false;
}, $8bf2f9ddbdb26115$var$_windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, $8bf2f9ddbdb26115$var$_isFuncOrString = function _isFuncOrString(value) {
    return $8bf2f9ddbdb26115$var$_isFunction(value) || $8bf2f9ddbdb26115$export$f664476fd67145ca(value);
}, $8bf2f9ddbdb26115$var$_isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {}, // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
$8bf2f9ddbdb26115$var$_isArray = Array.isArray, $8bf2f9ddbdb26115$var$_strictNumExp = /(?:-?\.?\d|\.)+/gi, //only numbers (including negatives and decimals) but NOT relative values.
$8bf2f9ddbdb26115$export$b9d44bb6523120d6 = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
$8bf2f9ddbdb26115$export$65c88bbd597e7b0a = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, $8bf2f9ddbdb26115$var$_complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
$8bf2f9ddbdb26115$export$5a680e28b0b61bc = /[+-]=-?[.\d]+/, $8bf2f9ddbdb26115$var$_delimitedValueExp = /[^,'"\[\]\s]+/gi, // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
$8bf2f9ddbdb26115$var$_unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, $8bf2f9ddbdb26115$var$_globalTimeline, $8bf2f9ddbdb26115$var$_win, $8bf2f9ddbdb26115$var$_coreInitted, $8bf2f9ddbdb26115$var$_doc, $8bf2f9ddbdb26115$var$_globals = {}, $8bf2f9ddbdb26115$var$_installScope = {}, $8bf2f9ddbdb26115$var$_coreReady, $8bf2f9ddbdb26115$var$_install = function _install(scope) {
    return ($8bf2f9ddbdb26115$var$_installScope = $8bf2f9ddbdb26115$var$_merge(scope, $8bf2f9ddbdb26115$var$_globals)) && $8bf2f9ddbdb26115$export$99ee26438460406a;
}, $8bf2f9ddbdb26115$export$7fb54635790b59a5 = function _missingPlugin(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
}, $8bf2f9ddbdb26115$var$_warn = function _warn(message, suppress) {
    return !suppress && console.warn(message);
}, $8bf2f9ddbdb26115$var$_addGlobal = function _addGlobal(name, obj) {
    return name && ($8bf2f9ddbdb26115$var$_globals[name] = obj) && $8bf2f9ddbdb26115$var$_installScope && ($8bf2f9ddbdb26115$var$_installScope[name] = obj) || $8bf2f9ddbdb26115$var$_globals;
}, $8bf2f9ddbdb26115$var$_emptyFunc = function _emptyFunc() {
    return 0;
}, $8bf2f9ddbdb26115$var$_startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
}, $8bf2f9ddbdb26115$var$_revertConfigNoKill = {
    suppressEvents: true,
    kill: false
}, $8bf2f9ddbdb26115$var$_revertConfig = {
    suppressEvents: true
}, $8bf2f9ddbdb26115$var$_reservedProps = {}, $8bf2f9ddbdb26115$var$_lazyTweens = [], $8bf2f9ddbdb26115$var$_lazyLookup = {}, $8bf2f9ddbdb26115$var$_lastRenderedFrame, $8bf2f9ddbdb26115$export$d305d8ec5d7c26b8 = {}, $8bf2f9ddbdb26115$var$_effects = {}, $8bf2f9ddbdb26115$var$_nextGCFrame = 30, $8bf2f9ddbdb26115$var$_harnessPlugins = [], $8bf2f9ddbdb26115$var$_callbackNames = "", $8bf2f9ddbdb26115$var$_harness = function _harness(targets) {
    var target = targets[0], harnessPlugin, i;
    $8bf2f9ddbdb26115$var$_isObject(target) || $8bf2f9ddbdb26115$var$_isFunction(target) || (targets = [
        targets
    ]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
        // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
        i = $8bf2f9ddbdb26115$var$_harnessPlugins.length;
        while(i-- && !$8bf2f9ddbdb26115$var$_harnessPlugins[i].targetTest(target));
        harnessPlugin = $8bf2f9ddbdb26115$var$_harnessPlugins[i];
    }
    i = targets.length;
    while(i--)targets[i] && (targets[i]._gsap || (targets[i]._gsap = new $8bf2f9ddbdb26115$export$cf10981d5419cad5(targets[i], harnessPlugin))) || targets.splice(i, 1);
    return targets;
}, $8bf2f9ddbdb26115$export$8b9be379d2de2a39 = function _getCache(target) {
    return target._gsap || $8bf2f9ddbdb26115$var$_harness($8bf2f9ddbdb26115$export$45b10814cc054894(target))[0]._gsap;
}, $8bf2f9ddbdb26115$export$51d6bbe898aef1f9 = function _getProperty(target, property, v) {
    return (v = target[property]) && $8bf2f9ddbdb26115$var$_isFunction(v) ? target[property]() : $8bf2f9ddbdb26115$export$a8178c063a9fd3a1(v) && target.getAttribute && target.getAttribute(property) || v;
}, $8bf2f9ddbdb26115$export$f9000b814859f126 = function _forEachName(names, func) {
    return (names = names.split(",")).forEach(func) || names;
}, //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
$8bf2f9ddbdb26115$export$9c8d725d65e13f94 = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
}, $8bf2f9ddbdb26115$var$_roundPrecise = function _roundPrecise(value) {
    return Math.round(value * 10000000) / 10000000 || 0;
}, // increased precision mostly for timing values.
$8bf2f9ddbdb26115$export$dac762bc6301b560 = function _parseRelative(start, value) {
    var operator = value.charAt(0), end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
}, $8bf2f9ddbdb26115$var$_arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
    //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
    var l = toFind.length, i = 0;
    for(; toSearch.indexOf(toFind[i]) < 0 && ++i < l;);
    return i < l;
}, $8bf2f9ddbdb26115$var$_lazyRender = function _lazyRender() {
    var l = $8bf2f9ddbdb26115$var$_lazyTweens.length, a = $8bf2f9ddbdb26115$var$_lazyTweens.slice(0), i, tween;
    $8bf2f9ddbdb26115$var$_lazyLookup = {};
    $8bf2f9ddbdb26115$var$_lazyTweens.length = 0;
    for(i = 0; i < l; i++){
        tween = a[i];
        tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
}, $8bf2f9ddbdb26115$var$_lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    $8bf2f9ddbdb26115$var$_lazyTweens.length && !$8bf2f9ddbdb26115$var$_reverting && $8bf2f9ddbdb26115$var$_lazyRender();
    animation.render(time, suppressEvents, force || $8bf2f9ddbdb26115$var$_reverting && time < 0 && (animation._initted || animation._startAt));
    $8bf2f9ddbdb26115$var$_lazyTweens.length && !$8bf2f9ddbdb26115$var$_reverting && $8bf2f9ddbdb26115$var$_lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
}, $8bf2f9ddbdb26115$var$_numericIfPossible = function _numericIfPossible(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match($8bf2f9ddbdb26115$var$_delimitedValueExp).length < 2 ? n : $8bf2f9ddbdb26115$export$f664476fd67145ca(value) ? value.trim() : value;
}, $8bf2f9ddbdb26115$var$_passThrough = function _passThrough(p) {
    return p;
}, $8bf2f9ddbdb26115$export$dc2b19673bb53610 = function _setDefaults(obj, defaults) {
    for(var p in defaults)p in obj || (obj[p] = defaults[p]);
    return obj;
}, $8bf2f9ddbdb26115$var$_setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
    return function(obj, defaults) {
        for(var p in defaults)p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    };
}, $8bf2f9ddbdb26115$var$_merge = function _merge(base, toMerge) {
    for(var p in toMerge)base[p] = toMerge[p];
    return base;
}, $8bf2f9ddbdb26115$var$_mergeDeep = function _mergeDeep(base, toMerge) {
    for(var p in toMerge)p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = $8bf2f9ddbdb26115$var$_isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    return base;
}, $8bf2f9ddbdb26115$var$_copyExcluding = function _copyExcluding(obj, excluding) {
    var copy = {}, p;
    for(p in obj)p in excluding || (copy[p] = obj[p]);
    return copy;
}, $8bf2f9ddbdb26115$var$_inheritDefaults = function _inheritDefaults(vars) {
    var parent = vars.parent || $8bf2f9ddbdb26115$var$_globalTimeline, func = vars.keyframes ? $8bf2f9ddbdb26115$var$_setKeyframeDefaults($8bf2f9ddbdb26115$var$_isArray(vars.keyframes)) : $8bf2f9ddbdb26115$export$dc2b19673bb53610;
    if ($8bf2f9ddbdb26115$var$_isNotFalse(vars.inherit)) while(parent){
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
    }
    return vars;
}, $8bf2f9ddbdb26115$var$_arraysMatch = function _arraysMatch(a1, a2) {
    var i = a1.length, match = i === a2.length;
    while(match && i-- && a1[i] === a2[i]);
    return i < 0;
}, $8bf2f9ddbdb26115$var$_addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) firstProp = "_first";
    if (lastProp === void 0) lastProp = "_last";
    var prev = parent[lastProp], t;
    if (sortBy) {
        t = child[sortBy];
        while(prev && prev[sortBy] > t)prev = prev._prev;
    }
    if (prev) {
        child._next = prev._next;
        prev._next = child;
    } else {
        child._next = parent[firstProp];
        parent[firstProp] = child;
    }
    if (child._next) child._next._prev = child;
    else parent[lastProp] = child;
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
}, $8bf2f9ddbdb26115$export$cd008aa6cd8844e3 = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) firstProp = "_first";
    if (lastProp === void 0) lastProp = "_last";
    var prev = child._prev, next = child._next;
    if (prev) prev._next = next;
    else if (parent[firstProp] === child) parent[firstProp] = next;
    if (next) next._prev = prev;
    else if (parent[lastProp] === child) parent[lastProp] = prev;
    child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
}, $8bf2f9ddbdb26115$var$_removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
    child._act = 0;
}, $8bf2f9ddbdb26115$var$_uncache = function _uncache(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
        // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
        var a = animation;
        while(a){
            a._dirty = 1;
            a = a.parent;
        }
    }
    return animation;
}, $8bf2f9ddbdb26115$var$_recacheAncestors = function _recacheAncestors(animation) {
    var parent = animation.parent;
    while(parent && parent.parent){
        //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
        parent._dirty = 1;
        parent.totalDuration();
        parent = parent.parent;
    }
    return animation;
}, $8bf2f9ddbdb26115$var$_rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
    return tween._startAt && ($8bf2f9ddbdb26115$var$_reverting ? tween._startAt.revert($8bf2f9ddbdb26115$var$_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
}, $8bf2f9ddbdb26115$var$_hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
}, $8bf2f9ddbdb26115$var$_elapsedCycleDuration = function _elapsedCycleDuration(animation) {
    return animation._repeat ? $8bf2f9ddbdb26115$var$_animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
}, // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
$8bf2f9ddbdb26115$var$_animationCycle = function _animationCycle(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
}, $8bf2f9ddbdb26115$var$_parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
}, $8bf2f9ddbdb26115$var$_setEnd = function _setEnd(animation) {
    return animation._end = $8bf2f9ddbdb26115$var$_roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || $8bf2f9ddbdb26115$var$_tinyNum) || 0));
}, $8bf2f9ddbdb26115$var$_alignPlayhead = function _alignPlayhead(animation, totalTime) {
    // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
        animation._start = $8bf2f9ddbdb26115$var$_roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
        $8bf2f9ddbdb26115$var$_setEnd(animation);
        parent._dirty || $8bf2f9ddbdb26115$var$_uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
    }
    return animation;
}, /*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/ $8bf2f9ddbdb26115$var$_postAddChecks = function _postAddChecks(timeline, child) {
    var t;
    if (child._time || child._initted && !child._dur) {
        //in case, for example, the _start is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
        t = $8bf2f9ddbdb26115$var$_parentToChildTotalTime(timeline.rawTime(), child);
        if (!child._dur || $8bf2f9ddbdb26115$var$_clamp(0, child.totalDuration(), t) - child._tTime > $8bf2f9ddbdb26115$var$_tinyNum) child.render(t, true);
    } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
    if ($8bf2f9ddbdb26115$var$_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
        //in case any of the ancestors had completed but should now be enabled...
        if (timeline._dur < timeline.duration()) {
            t = timeline;
            while(t._dp){
                t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.
                t = t._dp;
            }
        }
        timeline._zTime = -$8bf2f9ddbdb26115$var$_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
    }
}, $8bf2f9ddbdb26115$var$_addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
    child.parent && $8bf2f9ddbdb26115$var$_removeFromParent(child);
    child._start = $8bf2f9ddbdb26115$var$_roundPrecise(($8bf2f9ddbdb26115$var$_isNumber(position) ? position : position || timeline !== $8bf2f9ddbdb26115$var$_globalTimeline ? $8bf2f9ddbdb26115$var$_parsePosition(timeline, position, child) : timeline._time) + child._delay);
    child._end = $8bf2f9ddbdb26115$var$_roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    $8bf2f9ddbdb26115$var$_addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
    $8bf2f9ddbdb26115$var$_isFromOrFromStart(child) || (timeline._recent = child);
    skipChecks || $8bf2f9ddbdb26115$var$_postAddChecks(timeline, child);
    timeline._ts < 0 && $8bf2f9ddbdb26115$var$_alignPlayhead(timeline, timeline._tTime); // if the timeline is reversed and the new child makes it longer, we may need to adjust the parent's _start (push it back)
    return timeline;
}, $8bf2f9ddbdb26115$var$_scrollTrigger = function _scrollTrigger(animation, trigger) {
    return ($8bf2f9ddbdb26115$var$_globals.ScrollTrigger || $8bf2f9ddbdb26115$export$7fb54635790b59a5("scrollTrigger", trigger)) && $8bf2f9ddbdb26115$var$_globals.ScrollTrigger.create(trigger, animation);
}, $8bf2f9ddbdb26115$var$_attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
    $8bf2f9ddbdb26115$var$_initTween(tween, time, tTime);
    if (!tween._initted) return 1;
    if (!force && tween._pt && !$8bf2f9ddbdb26115$var$_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && $8bf2f9ddbdb26115$var$_lastRenderedFrame !== $8bf2f9ddbdb26115$export$762ed8fbedb691e3.frame) {
        $8bf2f9ddbdb26115$var$_lazyTweens.push(tween);
        tween._lazy = [
            tTime,
            suppressEvents
        ];
        return 1;
    }
}, $8bf2f9ddbdb26115$var$_parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
}, // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
$8bf2f9ddbdb26115$var$_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
}, $8bf2f9ddbdb26115$var$_renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && $8bf2f9ddbdb26115$var$_parentPlayheadIsBeforeStart(tween) && !(!tween._initted && $8bf2f9ddbdb26115$var$_isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !$8bf2f9ddbdb26115$var$_isFromOrFromStart(tween)) ? 0 : 1, // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
    repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
        // in case there's a zero-duration tween that has a repeat with a repeatDelay
        tTime = $8bf2f9ddbdb26115$var$_clamp(0, tween._tDur, totalTime);
        iteration = $8bf2f9ddbdb26115$var$_animationCycle(tTime, repeatDelay);
        tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
        if (iteration !== $8bf2f9ddbdb26115$var$_animationCycle(tween._tTime, repeatDelay)) {
            // if iteration changed
            prevRatio = 1 - ratio;
            tween.vars.repeatRefresh && tween._initted && tween.invalidate();
        }
    }
    if (ratio !== prevRatio || $8bf2f9ddbdb26115$var$_reverting || force || tween._zTime === $8bf2f9ddbdb26115$var$_tinyNum || !totalTime && tween._zTime) {
        if (!tween._initted && $8bf2f9ddbdb26115$var$_attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
        return;
        prevIteration = tween._zTime;
        tween._zTime = totalTime || (suppressEvents ? $8bf2f9ddbdb26115$var$_tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
        suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.
        tween.ratio = ratio;
        tween._from && (ratio = 1 - ratio);
        tween._time = 0;
        tween._tTime = tTime;
        pt = tween._pt;
        while(pt){
            pt.r(ratio, pt.d);
            pt = pt._next;
        }
        totalTime < 0 && $8bf2f9ddbdb26115$var$_rewindStartAt(tween, totalTime, suppressEvents, true);
        tween._onUpdate && !suppressEvents && $8bf2f9ddbdb26115$var$_callback(tween, "onUpdate");
        tTime && tween._repeat && !suppressEvents && tween.parent && $8bf2f9ddbdb26115$var$_callback(tween, "onRepeat");
        if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
            ratio && $8bf2f9ddbdb26115$var$_removeFromParent(tween, 1);
            if (!suppressEvents && !$8bf2f9ddbdb26115$var$_reverting) {
                $8bf2f9ddbdb26115$var$_callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
                tween._prom && tween._prom();
            }
        }
    } else if (!tween._zTime) tween._zTime = totalTime;
}, $8bf2f9ddbdb26115$var$_findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
        child = animation._first;
        while(child && child._start <= time){
            if (child.data === "isPause" && child._start > prevTime) return child;
            child = child._next;
        }
    } else {
        child = animation._last;
        while(child && child._start >= time){
            if (child.data === "isPause" && child._start < prevTime) return child;
            child = child._prev;
        }
    }
}, $8bf2f9ddbdb26115$var$_setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = $8bf2f9ddbdb26115$var$_roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : $8bf2f9ddbdb26115$var$_roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && $8bf2f9ddbdb26115$var$_alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && $8bf2f9ddbdb26115$var$_setEnd(animation);
    skipUncache || $8bf2f9ddbdb26115$var$_uncache(animation.parent, animation);
    return animation;
}, $8bf2f9ddbdb26115$var$_onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
    return animation instanceof $8bf2f9ddbdb26115$export$e6a97ba2cae5bb94 ? $8bf2f9ddbdb26115$var$_uncache(animation) : $8bf2f9ddbdb26115$var$_setDuration(animation, animation._dur);
}, $8bf2f9ddbdb26115$var$_zeroPosition = {
    _start: 0,
    endTime: $8bf2f9ddbdb26115$var$_emptyFunc,
    totalDuration: $8bf2f9ddbdb26115$var$_emptyFunc
}, $8bf2f9ddbdb26115$var$_parsePosition = function _parsePosition(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || $8bf2f9ddbdb26115$var$_zeroPosition, clippedDuration = animation.duration() >= $8bf2f9ddbdb26115$var$_bigNum ? recent.endTime(false) : animation._dur, //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
    i, offset, isPercent;
    if ($8bf2f9ddbdb26115$export$f664476fd67145ca(position) && (isNaN(position) || position in labels)) {
        //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
        offset = position.charAt(0);
        isPercent = position.substr(-1) === "%";
        i = position.indexOf("=");
        if (offset === "<" || offset === ">") {
            i >= 0 && (position = position.replace(/=/, ""));
            return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
        }
        if (i < 0) {
            position in labels || (labels[position] = clippedDuration);
            return labels[position];
        }
        offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
        if (isPercent && percentAnimation) offset = offset / 100 * ($8bf2f9ddbdb26115$var$_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
        return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
}, $8bf2f9ddbdb26115$var$_createTweenType = function _createTweenType(type, params, timeline) {
    var isLegacy = $8bf2f9ddbdb26115$var$_isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline;
    if (type) {
        irVars = vars;
        parent = timeline;
        while(parent && !("immediateRender" in irVars)){
            // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
            irVars = parent.vars.defaults || {};
            parent = $8bf2f9ddbdb26115$var$_isNotFalse(parent.vars.inherit) && parent.parent;
        }
        vars.immediateRender = $8bf2f9ddbdb26115$var$_isNotFalse(irVars.immediateRender);
        type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
    }
    return new $8bf2f9ddbdb26115$export$208a41d6b4e37b97(params[0], vars, params[varsIndex + 1]);
}, $8bf2f9ddbdb26115$var$_conditionalReturn = function _conditionalReturn(value, func) {
    return value || value === 0 ? func(value) : func;
}, $8bf2f9ddbdb26115$var$_clamp = function _clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
}, $8bf2f9ddbdb26115$export$65f2564e9a9b9222 = function getUnit(value, v) {
    return !$8bf2f9ddbdb26115$export$f664476fd67145ca(value) || !(v = $8bf2f9ddbdb26115$var$_unitExp.exec(value)) ? "" : v[1];
}, // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
$8bf2f9ddbdb26115$export$7d15b64cf5a3a4c4 = function clamp(min, max, value) {
    return $8bf2f9ddbdb26115$var$_conditionalReturn(value, function(v) {
        return $8bf2f9ddbdb26115$var$_clamp(min, max, v);
    });
}, $8bf2f9ddbdb26115$var$_slice = [].slice, $8bf2f9ddbdb26115$var$_isArrayLike = function _isArrayLike(value, nonEmpty) {
    return value && $8bf2f9ddbdb26115$var$_isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && $8bf2f9ddbdb26115$var$_isObject(value[0])) && !value.nodeType && value !== $8bf2f9ddbdb26115$var$_win;
}, $8bf2f9ddbdb26115$var$_flatten = function _flatten(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) accumulator = [];
    return ar.forEach(function(value) {
        var _accumulator;
        return $8bf2f9ddbdb26115$export$f664476fd67145ca(value) && !leaveStrings || $8bf2f9ddbdb26115$var$_isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, $8bf2f9ddbdb26115$export$45b10814cc054894(value)) : accumulator.push(value);
    }) || accumulator;
}, //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
$8bf2f9ddbdb26115$export$45b10814cc054894 = function toArray(value, scope, leaveStrings) {
    return $8bf2f9ddbdb26115$var$_context && !scope && $8bf2f9ddbdb26115$var$_context.selector ? $8bf2f9ddbdb26115$var$_context.selector(value) : $8bf2f9ddbdb26115$export$f664476fd67145ca(value) && !leaveStrings && ($8bf2f9ddbdb26115$var$_coreInitted || !$8bf2f9ddbdb26115$var$_wake()) ? $8bf2f9ddbdb26115$var$_slice.call((scope || $8bf2f9ddbdb26115$var$_doc).querySelectorAll(value), 0) : $8bf2f9ddbdb26115$var$_isArray(value) ? $8bf2f9ddbdb26115$var$_flatten(value, leaveStrings) : $8bf2f9ddbdb26115$var$_isArrayLike(value) ? $8bf2f9ddbdb26115$var$_slice.call(value, 0) : value ? [
        value
    ] : [];
}, $8bf2f9ddbdb26115$export$aea217a45095ce11 = function selector(value) {
    value = $8bf2f9ddbdb26115$export$45b10814cc054894(value)[0] || $8bf2f9ddbdb26115$var$_warn("Invalid scope") || {};
    return function(v) {
        var el = value.current || value.nativeElement || value;
        return $8bf2f9ddbdb26115$export$45b10814cc054894(v, el.querySelectorAll ? el : el === value ? $8bf2f9ddbdb26115$var$_warn("Invalid scope") || $8bf2f9ddbdb26115$var$_doc.createElement("div") : value);
    };
}, $8bf2f9ddbdb26115$export$448332262467e042 = function shuffle(a) {
    return a.sort(function() {
        return .5 - Math.random();
    });
}, // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
$8bf2f9ddbdb26115$export$f02a9ddbe4480f19 = function distribute(v) {
    if ($8bf2f9ddbdb26115$var$_isFunction(v)) return v;
    var vars = $8bf2f9ddbdb26115$var$_isObject(v) ? v : {
        each: v
    }, //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
    ease = $8bf2f9ddbdb26115$var$_parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if ($8bf2f9ddbdb26115$export$f664476fd67145ca(from)) ratioX = ratioY = ({
        center: .5,
        edges: .5,
        end: 1
    })[from] || 0;
    else if (!isDecimal && ratios) {
        ratioX = from[0];
        ratioY = from[1];
    }
    return function(i, target, a) {
        var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
        if (!distances) {
            wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [
                1,
                $8bf2f9ddbdb26115$var$_bigNum
            ])[1];
            if (!wrapAt) {
                max = -$8bf2f9ddbdb26115$var$_bigNum;
                while(max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l);
                wrapAt--;
            }
            distances = cache[l] = [];
            originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
            originY = wrapAt === $8bf2f9ddbdb26115$var$_bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
            max = 0;
            min = $8bf2f9ddbdb26115$var$_bigNum;
            for(j = 0; j < l; j++){
                x = j % wrapAt - originX;
                y = originY - (j / wrapAt | 0);
                distances[j] = d = !axis ? $8bf2f9ddbdb26115$var$_sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
                d > max && (max = d);
                d < min && (min = d);
            }
            from === "random" && $8bf2f9ddbdb26115$export$448332262467e042(distances);
            distances.max = max - min;
            distances.min = min;
            distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
            distances.b = l < 0 ? base - l : base;
            distances.u = $8bf2f9ddbdb26115$export$65f2564e9a9b9222(vars.amount || vars.each) || 0; //unit
            ease = ease && l < 0 ? $8bf2f9ddbdb26115$var$_invertEase(ease) : ease;
        }
        l = (distances[i] - distances.min) / distances.max || 0;
        return $8bf2f9ddbdb26115$var$_roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
    };
}, $8bf2f9ddbdb26115$export$dd12390e6b265a17 = function _roundModifier(v) {
    //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())
    return function(raw) {
        var n = $8bf2f9ddbdb26115$var$_roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
        return (n - n % 1) / p + ($8bf2f9ddbdb26115$var$_isNumber(raw) ? 0 : $8bf2f9ddbdb26115$export$65f2564e9a9b9222(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
    };
}, $8bf2f9ddbdb26115$export$51a0620f7a28532b = function snap(snapTo, value) {
    var isArray = $8bf2f9ddbdb26115$var$_isArray(snapTo), radius, is2D;
    if (!isArray && $8bf2f9ddbdb26115$var$_isObject(snapTo)) {
        radius = isArray = snapTo.radius || $8bf2f9ddbdb26115$var$_bigNum;
        if (snapTo.values) {
            snapTo = $8bf2f9ddbdb26115$export$45b10814cc054894(snapTo.values);
            if (is2D = !$8bf2f9ddbdb26115$var$_isNumber(snapTo[0])) radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
        } else snapTo = $8bf2f9ddbdb26115$export$dd12390e6b265a17(snapTo.increment);
    }
    return $8bf2f9ddbdb26115$var$_conditionalReturn(value, !isArray ? $8bf2f9ddbdb26115$export$dd12390e6b265a17(snapTo) : $8bf2f9ddbdb26115$var$_isFunction(snapTo) ? function(raw) {
        is2D = snapTo(raw);
        return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
        var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = $8bf2f9ddbdb26115$var$_bigNum, closest = 0, i = snapTo.length, dx, dy;
        while(i--){
            if (is2D) {
                dx = snapTo[i].x - x;
                dy = snapTo[i].y - y;
                dx = dx * dx + dy * dy;
            } else dx = Math.abs(snapTo[i] - x);
            if (dx < min) {
                min = dx;
                closest = i;
            }
        }
        closest = !radius || min <= radius ? snapTo[closest] : raw;
        return is2D || closest === raw || $8bf2f9ddbdb26115$var$_isNumber(raw) ? closest : closest + $8bf2f9ddbdb26115$export$65f2564e9a9b9222(raw);
    });
}, $8bf2f9ddbdb26115$export$4385e60b38654f68 = function random(min, max, roundingIncrement, returnFunction) {
    return $8bf2f9ddbdb26115$var$_conditionalReturn($8bf2f9ddbdb26115$var$_isArray(min) ? !max : roundingIncrement === true ? (roundingIncrement = 0, false) : !returnFunction, function() {
        return $8bf2f9ddbdb26115$var$_isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5, returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
}, $8bf2f9ddbdb26115$export$a4627e546088548d = function pipe() {
    for(var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++)functions[_key] = arguments[_key];
    return function(value) {
        return functions.reduce(function(v, f) {
            return f(v);
        }, value);
    };
}, $8bf2f9ddbdb26115$export$d7502930aa5492de = function unitize(func, unit) {
    return function(value) {
        return func(parseFloat(value)) + (unit || $8bf2f9ddbdb26115$export$65f2564e9a9b9222(value));
    };
}, $8bf2f9ddbdb26115$export$a3295358bff77e = function normalize(min, max, value) {
    return $8bf2f9ddbdb26115$export$f65a7599bbc6b121(min, max, 0, 1, value);
}, $8bf2f9ddbdb26115$var$_wrapArray = function _wrapArray(a, wrapper, value) {
    return $8bf2f9ddbdb26115$var$_conditionalReturn(value, function(index) {
        return a[~~wrapper(index)];
    });
}, $8bf2f9ddbdb26115$export$4997ffc0176396a6 = function wrap(min, max, value) {
    // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
    var range = max - min;
    return $8bf2f9ddbdb26115$var$_isArray(min) ? $8bf2f9ddbdb26115$var$_wrapArray(min, wrap(0, min.length), max) : $8bf2f9ddbdb26115$var$_conditionalReturn(value, function(value) {
        return (range + (value - min) % range) % range + min;
    });
}, $8bf2f9ddbdb26115$export$cfc0b067273edc55 = function wrapYoyo(min, max, value) {
    var range = max - min, total = range * 2;
    return $8bf2f9ddbdb26115$var$_isArray(min) ? $8bf2f9ddbdb26115$var$_wrapArray(min, wrapYoyo(0, min.length - 1), max) : $8bf2f9ddbdb26115$var$_conditionalReturn(value, function(value) {
        value = (total + (value - min) % total) % total || 0;
        return min + (value > range ? total - value : value);
    });
}, $8bf2f9ddbdb26115$export$d5962a97e3cde94d = function _replaceRandom(value) {
    //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
    var prev = 0, s = "", i, nums, end, isArray;
    while(~(i = value.indexOf("random(", prev))){
        end = value.indexOf(")", i);
        isArray = value.charAt(i + 7) === "[";
        nums = value.substr(i + 7, end - i - 7).match(isArray ? $8bf2f9ddbdb26115$var$_delimitedValueExp : $8bf2f9ddbdb26115$var$_strictNumExp);
        s += value.substr(prev, i - prev) + $8bf2f9ddbdb26115$export$4385e60b38654f68(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
        prev = end + 1;
    }
    return s + value.substr(prev, value.length - prev);
}, $8bf2f9ddbdb26115$export$f65a7599bbc6b121 = function mapRange(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return $8bf2f9ddbdb26115$var$_conditionalReturn(value, function(value) {
        return outMin + ((value - inMin) / inRange * outRange || 0);
    });
}, $8bf2f9ddbdb26115$export$89e29e4ab65e70a9 = function interpolate(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p) {
        return (1 - p) * start + p * end;
    };
    if (!func) {
        var isString = $8bf2f9ddbdb26115$export$f664476fd67145ca(start), master = {}, p, i, interpolators, l, il;
        progress === true && (mutate = 1) && (progress = null);
        if (isString) {
            start = {
                p: start
            };
            end = {
                p: end
            };
        } else if ($8bf2f9ddbdb26115$var$_isArray(start) && !$8bf2f9ddbdb26115$var$_isArray(end)) {
            interpolators = [];
            l = start.length;
            il = l - 2;
            for(i = 1; i < l; i++)interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
            l--;
            func = function func(p) {
                p *= l;
                var i = Math.min(il, ~~p);
                return interpolators[i](p - i);
            };
            progress = end;
        } else if (!mutate) start = $8bf2f9ddbdb26115$var$_merge($8bf2f9ddbdb26115$var$_isArray(start) ? [] : {}, start);
        if (!interpolators) {
            for(p in end)$8bf2f9ddbdb26115$var$_addPropTween.call(master, start, p, "get", end[p]);
            func = function func(p) {
                return $8bf2f9ddbdb26115$var$_renderPropTweens(p, master) || (isString ? start.p : start);
            };
        }
    }
    return $8bf2f9ddbdb26115$var$_conditionalReturn(progress, func);
}, $8bf2f9ddbdb26115$var$_getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
    //used for nextLabel() and previousLabel()
    var labels = timeline.labels, min = $8bf2f9ddbdb26115$var$_bigNum, p, distance, label;
    for(p in labels){
        distance = labels[p] - fromTime;
        if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
            label = p;
            min = distance;
        }
    }
    return label;
}, $8bf2f9ddbdb26115$var$_callback = function _callback(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], prevContext = $8bf2f9ddbdb26115$var$_context, context = animation._ctx, params, scope, result;
    if (!callback) return;
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && $8bf2f9ddbdb26115$var$_lazyTweens.length && $8bf2f9ddbdb26115$var$_lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
    context && ($8bf2f9ddbdb26115$var$_context = context);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    $8bf2f9ddbdb26115$var$_context = prevContext;
    return result;
}, $8bf2f9ddbdb26115$var$_interrupt = function _interrupt(animation) {
    $8bf2f9ddbdb26115$var$_removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!$8bf2f9ddbdb26115$var$_reverting);
    animation.progress() < 1 && $8bf2f9ddbdb26115$var$_callback(animation, "onInterrupt");
    return animation;
}, $8bf2f9ddbdb26115$var$_quickTween, $8bf2f9ddbdb26115$var$_registerPluginQueue = [], $8bf2f9ddbdb26115$var$_createPlugin = function _createPlugin(config) {
    if ($8bf2f9ddbdb26115$var$_windowExists() && config) {
        // edge case: some build tools may pass in a null/undefined value
        config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.
        var name = config.name, isFunc = $8bf2f9ddbdb26115$var$_isFunction(config), Plugin = name && !isFunc && config.init ? function() {
            this._props = [];
        } : config, //in case someone passes in an object that's not a plugin, like CustomEase
        instanceDefaults = {
            init: $8bf2f9ddbdb26115$var$_emptyFunc,
            render: $8bf2f9ddbdb26115$var$_renderPropTweens,
            add: $8bf2f9ddbdb26115$var$_addPropTween,
            kill: $8bf2f9ddbdb26115$var$_killPropTweensOf,
            modifier: $8bf2f9ddbdb26115$var$_addPluginModifier,
            rawVars: 0
        }, statics = {
            targetTest: 0,
            get: 0,
            getSetter: $8bf2f9ddbdb26115$export$d60fbc1e0278aaf0,
            aliases: {},
            register: 0
        };
        $8bf2f9ddbdb26115$var$_wake();
        if (config !== Plugin) {
            if ($8bf2f9ddbdb26115$export$d305d8ec5d7c26b8[name]) return;
            $8bf2f9ddbdb26115$export$dc2b19673bb53610(Plugin, $8bf2f9ddbdb26115$export$dc2b19673bb53610($8bf2f9ddbdb26115$var$_copyExcluding(config, instanceDefaults), statics)); //static methods
            $8bf2f9ddbdb26115$var$_merge(Plugin.prototype, $8bf2f9ddbdb26115$var$_merge(instanceDefaults, $8bf2f9ddbdb26115$var$_copyExcluding(config, statics))); //instance methods
            $8bf2f9ddbdb26115$export$d305d8ec5d7c26b8[Plugin.prop = name] = Plugin;
            if (config.targetTest) {
                $8bf2f9ddbdb26115$var$_harnessPlugins.push(Plugin);
                $8bf2f9ddbdb26115$var$_reservedProps[name] = 1;
            }
            name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
        }
        $8bf2f9ddbdb26115$var$_addGlobal(name, Plugin);
        config.register && config.register($8bf2f9ddbdb26115$export$99ee26438460406a, Plugin, $8bf2f9ddbdb26115$export$3a67f7f44b1e838a);
    } else config && $8bf2f9ddbdb26115$var$_registerPluginQueue.push(config);
}, /*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */ $8bf2f9ddbdb26115$var$_255 = 255, $8bf2f9ddbdb26115$var$_colorLookup = {
    aqua: [
        0,
        $8bf2f9ddbdb26115$var$_255,
        $8bf2f9ddbdb26115$var$_255
    ],
    lime: [
        0,
        $8bf2f9ddbdb26115$var$_255,
        0
    ],
    silver: [
        192,
        192,
        192
    ],
    black: [
        0,
        0,
        0
    ],
    maroon: [
        128,
        0,
        0
    ],
    teal: [
        0,
        128,
        128
    ],
    blue: [
        0,
        0,
        $8bf2f9ddbdb26115$var$_255
    ],
    navy: [
        0,
        0,
        128
    ],
    white: [
        $8bf2f9ddbdb26115$var$_255,
        $8bf2f9ddbdb26115$var$_255,
        $8bf2f9ddbdb26115$var$_255
    ],
    olive: [
        128,
        128,
        0
    ],
    yellow: [
        $8bf2f9ddbdb26115$var$_255,
        $8bf2f9ddbdb26115$var$_255,
        0
    ],
    orange: [
        $8bf2f9ddbdb26115$var$_255,
        165,
        0
    ],
    gray: [
        128,
        128,
        128
    ],
    purple: [
        128,
        0,
        128
    ],
    green: [
        0,
        128,
        0
    ],
    red: [
        $8bf2f9ddbdb26115$var$_255,
        0,
        0
    ],
    pink: [
        $8bf2f9ddbdb26115$var$_255,
        192,
        203
    ],
    cyan: [
        0,
        $8bf2f9ddbdb26115$var$_255,
        $8bf2f9ddbdb26115$var$_255
    ],
    transparent: [
        $8bf2f9ddbdb26115$var$_255,
        $8bf2f9ddbdb26115$var$_255,
        $8bf2f9ddbdb26115$var$_255,
        0
    ]
}, // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
$8bf2f9ddbdb26115$var$_hue = function _hue(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * $8bf2f9ddbdb26115$var$_255 + .5 | 0;
}, $8bf2f9ddbdb26115$export$73d6f35be992df24 = function splitColor(v, toHSL, forceAlpha) {
    var a = !v ? $8bf2f9ddbdb26115$var$_colorLookup.black : $8bf2f9ddbdb26115$var$_isNumber(v) ? [
        v >> 16,
        v >> 8 & $8bf2f9ddbdb26115$var$_255,
        v & $8bf2f9ddbdb26115$var$_255
    ] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
    if (!a) {
        if (v.substr(-1) === ",") //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
        v = v.substr(0, v.length - 1);
        if ($8bf2f9ddbdb26115$var$_colorLookup[v]) a = $8bf2f9ddbdb26115$var$_colorLookup[v];
        else if (v.charAt(0) === "#") {
            if (v.length < 6) {
                //for shorthand like #9F0 or #9F0F (could have alpha)
                r = v.charAt(1);
                g = v.charAt(2);
                b = v.charAt(3);
                v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
            }
            if (v.length === 9) {
                // hex with alpha, like #fd5e53ff
                a = parseInt(v.substr(1, 6), 16);
                return [
                    a >> 16,
                    a >> 8 & $8bf2f9ddbdb26115$var$_255,
                    a & $8bf2f9ddbdb26115$var$_255,
                    parseInt(v.substr(7), 16) / 255
                ];
            }
            v = parseInt(v.substr(1), 16);
            a = [
                v >> 16,
                v >> 8 & $8bf2f9ddbdb26115$var$_255,
                v & $8bf2f9ddbdb26115$var$_255
            ];
        } else if (v.substr(0, 3) === "hsl") {
            a = wasHSL = v.match($8bf2f9ddbdb26115$var$_strictNumExp);
            if (!toHSL) {
                h = +a[0] % 360 / 360;
                s = +a[1] / 100;
                l = +a[2] / 100;
                g = l <= .5 ? l * (s + 1) : l + s - l * s;
                r = l * 2 - g;
                a.length > 3 && (a[3] *= 1); //cast as number
                a[0] = $8bf2f9ddbdb26115$var$_hue(h + 1 / 3, r, g);
                a[1] = $8bf2f9ddbdb26115$var$_hue(h, r, g);
                a[2] = $8bf2f9ddbdb26115$var$_hue(h - 1 / 3, r, g);
            } else if (~v.indexOf("=")) {
                //if relative values are found, just return the raw strings with the relative prefixes in place.
                a = v.match($8bf2f9ddbdb26115$export$b9d44bb6523120d6);
                forceAlpha && a.length < 4 && (a[3] = 1);
                return a;
            }
        } else a = v.match($8bf2f9ddbdb26115$var$_strictNumExp) || $8bf2f9ddbdb26115$var$_colorLookup.transparent;
        a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
        r = a[0] / $8bf2f9ddbdb26115$var$_255;
        g = a[1] / $8bf2f9ddbdb26115$var$_255;
        b = a[2] / $8bf2f9ddbdb26115$var$_255;
        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        l = (max + min) / 2;
        if (max === min) h = s = 0;
        else {
            d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
            h *= 60;
        }
        a[0] = ~~(h + .5);
        a[1] = ~~(s * 100 + .5);
        a[2] = ~~(l * 100 + .5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
}, $8bf2f9ddbdb26115$var$_colorOrderData = function _colorOrderData(v) {
    // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
    var values = [], c = [], i = -1;
    v.split($8bf2f9ddbdb26115$export$dd733e62515be2bd).forEach(function(v) {
        var a = v.match($8bf2f9ddbdb26115$export$65c88bbd597e7b0a) || [];
        values.push.apply(values, a);
        c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
}, $8bf2f9ddbdb26115$var$_formatColors = function _formatColors(s, toHSL, orderMatchData) {
    var result = "", colors = (s + result).match($8bf2f9ddbdb26115$export$dd733e62515be2bd), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
    if (!colors) return s;
    colors = colors.map(function(color) {
        return (color = $8bf2f9ddbdb26115$export$73d6f35be992df24(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
        d = $8bf2f9ddbdb26115$var$_colorOrderData(s);
        c = orderMatchData.c;
        if (c.join(result) !== d.c.join(result)) {
            shell = s.replace($8bf2f9ddbdb26115$export$dd733e62515be2bd, "1").split($8bf2f9ddbdb26115$export$65c88bbd597e7b0a);
            l = shell.length - 1;
            for(; i < l; i++)result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
    }
    if (!shell) {
        shell = s.split($8bf2f9ddbdb26115$export$dd733e62515be2bd);
        l = shell.length - 1;
        for(; i < l; i++)result += shell[i] + colors[i];
    }
    return result + shell[l];
}, $8bf2f9ddbdb26115$export$dd733e62515be2bd = function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
    p;
    for(p in $8bf2f9ddbdb26115$var$_colorLookup)s += "|" + p + "\\b";
    return new RegExp(s + ")", "gi");
}(), $8bf2f9ddbdb26115$var$_hslExp = /hsl[a]?\(/, $8bf2f9ddbdb26115$export$7eb2e5eb5eeb96a4 = function _colorStringFilter(a) {
    var combined = a.join(" "), toHSL;
    $8bf2f9ddbdb26115$export$dd733e62515be2bd.lastIndex = 0;
    if ($8bf2f9ddbdb26115$export$dd733e62515be2bd.test(combined)) {
        toHSL = $8bf2f9ddbdb26115$var$_hslExp.test(combined);
        a[1] = $8bf2f9ddbdb26115$var$_formatColors(a[1], toHSL);
        a[0] = $8bf2f9ddbdb26115$var$_formatColors(a[0], toHSL, $8bf2f9ddbdb26115$var$_colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.
        return true;
    }
}, /*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */ $8bf2f9ddbdb26115$var$_tickerActive, $8bf2f9ddbdb26115$export$762ed8fbedb691e3 = function() {
    var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1000 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick(v) {
        var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
        elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
        _lastUpdate += elapsed;
        time = _lastUpdate - _startTime;
        overlap = time - _nextTime;
        if (overlap > 0 || manual) {
            frame = ++_self.frame;
            _delta = time - _self.time * 1000;
            _self.time = time = time / 1000;
            _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
            dispatch = 1;
        }
        manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
        if (dispatch) for(_i = 0; _i < _listeners.length; _i++)// use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
    };
    _self = {
        time: 0,
        frame: 0,
        tick: function tick() {
            _tick(true);
        },
        deltaRatio: function deltaRatio(fps) {
            return _delta / (1000 / (fps || 60));
        },
        wake: function wake() {
            if ($8bf2f9ddbdb26115$var$_coreReady) {
                if (!$8bf2f9ddbdb26115$var$_coreInitted && $8bf2f9ddbdb26115$var$_windowExists()) {
                    $8bf2f9ddbdb26115$var$_win = $8bf2f9ddbdb26115$var$_coreInitted = window;
                    $8bf2f9ddbdb26115$var$_doc = $8bf2f9ddbdb26115$var$_win.document || {};
                    $8bf2f9ddbdb26115$var$_globals.gsap = $8bf2f9ddbdb26115$export$99ee26438460406a;
                    ($8bf2f9ddbdb26115$var$_win.gsapVersions || ($8bf2f9ddbdb26115$var$_win.gsapVersions = [])).push($8bf2f9ddbdb26115$export$99ee26438460406a.version);
                    $8bf2f9ddbdb26115$var$_install($8bf2f9ddbdb26115$var$_installScope || $8bf2f9ddbdb26115$var$_win.GreenSockGlobals || !$8bf2f9ddbdb26115$var$_win.gsap && $8bf2f9ddbdb26115$var$_win || {});
                    _raf = $8bf2f9ddbdb26115$var$_win.requestAnimationFrame;
                    $8bf2f9ddbdb26115$var$_registerPluginQueue.forEach($8bf2f9ddbdb26115$var$_createPlugin);
                }
                _id && _self.sleep();
                _req = _raf || function(f) {
                    return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
                };
                $8bf2f9ddbdb26115$var$_tickerActive = 1;
                _tick(2);
            }
        },
        sleep: function sleep() {
            (_raf ? $8bf2f9ddbdb26115$var$_win.cancelAnimationFrame : clearTimeout)(_id);
            $8bf2f9ddbdb26115$var$_tickerActive = 0;
            _req = $8bf2f9ddbdb26115$var$_emptyFunc;
        },
        lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
            _lagThreshold = threshold || Infinity; // zero should be interpreted as basically unlimited
            _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
        },
        fps: function fps(_fps) {
            _gap = 1000 / (_fps || 240);
            _nextTime = _self.time * 1000 + _gap;
        },
        add: function add(callback, once, prioritize) {
            var func = once ? function(t, d, f, v) {
                callback(t, d, f, v);
                _self.remove(func);
            } : callback;
            _self.remove(callback);
            _listeners[prioritize ? "unshift" : "push"](func);
            $8bf2f9ddbdb26115$var$_wake();
            return func;
        },
        remove: function remove(callback, i) {
            ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
        },
        _listeners: _listeners
    };
    return _self;
}(), $8bf2f9ddbdb26115$var$_wake = function _wake() {
    return !$8bf2f9ddbdb26115$var$_tickerActive && $8bf2f9ddbdb26115$export$762ed8fbedb691e3.wake();
}, //also ensures the core classes are initialized.
/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/ $8bf2f9ddbdb26115$var$_easeMap = {}, $8bf2f9ddbdb26115$var$_customEaseExp = /^[\d.\-M][\d.\-,\s]/, $8bf2f9ddbdb26115$var$_quotesExp = /["']/g, $8bf2f9ddbdb26115$var$_parseObjectInString = function _parseObjectInString(value) {
    //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
    for(; i < l; i++){
        val = split[i];
        index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
        parsedVal = val.substr(0, index);
        obj[key] = isNaN(parsedVal) ? parsedVal.replace($8bf2f9ddbdb26115$var$_quotesExp, "").trim() : +parsedVal;
        key = val.substr(index + 1).trim();
    }
    return obj;
}, $8bf2f9ddbdb26115$var$_valueInParentheses = function _valueInParentheses(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
}, $8bf2f9ddbdb26115$var$_configEaseFromString = function _configEaseFromString(name) {
    //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
    var split = (name + "").split("("), ease = $8bf2f9ddbdb26115$var$_easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [
        $8bf2f9ddbdb26115$var$_parseObjectInString(split[1])
    ] : $8bf2f9ddbdb26115$var$_valueInParentheses(name).split(",").map($8bf2f9ddbdb26115$var$_numericIfPossible)) : $8bf2f9ddbdb26115$var$_easeMap._CE && $8bf2f9ddbdb26115$var$_customEaseExp.test(name) ? $8bf2f9ddbdb26115$var$_easeMap._CE("", name) : ease;
}, $8bf2f9ddbdb26115$var$_invertEase = function _invertEase(ease) {
    return function(p) {
        return 1 - ease(1 - p);
    };
}, // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
$8bf2f9ddbdb26115$var$_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
    var child = timeline._first, ease;
    while(child){
        if (child instanceof $8bf2f9ddbdb26115$export$e6a97ba2cae5bb94) _propagateYoyoEase(child, isYoyo);
        else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
            if (child.timeline) _propagateYoyoEase(child.timeline, isYoyo);
            else {
                ease = child._ease;
                child._ease = child._yEase;
                child._yEase = ease;
                child._yoyo = isYoyo;
            }
        }
        child = child._next;
    }
}, $8bf2f9ddbdb26115$var$_parseEase = function _parseEase(ease, defaultEase) {
    return !ease ? defaultEase : ($8bf2f9ddbdb26115$var$_isFunction(ease) ? ease : $8bf2f9ddbdb26115$var$_easeMap[ease] || $8bf2f9ddbdb26115$var$_configEaseFromString(ease)) || defaultEase;
}, $8bf2f9ddbdb26115$var$_insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) easeOut = function easeOut(p) {
        return 1 - easeIn(1 - p);
    };
    if (easeInOut === void 0) easeInOut = function easeInOut(p) {
        return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
    var ease = {
        easeIn: easeIn,
        easeOut: easeOut,
        easeInOut: easeInOut
    }, lowercaseName;
    $8bf2f9ddbdb26115$export$f9000b814859f126(names, function(name) {
        $8bf2f9ddbdb26115$var$_easeMap[name] = $8bf2f9ddbdb26115$var$_globals[name] = ease;
        $8bf2f9ddbdb26115$var$_easeMap[lowercaseName = name.toLowerCase()] = easeOut;
        for(var p in ease)$8bf2f9ddbdb26115$var$_easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = $8bf2f9ddbdb26115$var$_easeMap[name + "." + p] = ease[p];
    });
    return ease;
}, $8bf2f9ddbdb26115$var$_easeInOutFromOut = function _easeInOutFromOut(easeOut) {
    return function(p) {
        return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
    };
}, $8bf2f9ddbdb26115$var$_configElastic = function _configElastic(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
    p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / $8bf2f9ddbdb26115$var$_2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
        return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * $8bf2f9ddbdb26115$var$_sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
        return 1 - easeOut(1 - p);
    } : $8bf2f9ddbdb26115$var$_easeInOutFromOut(easeOut);
    p2 = $8bf2f9ddbdb26115$var$_2PI / p2; //precalculate to optimize
    ease.config = function(amplitude, period) {
        return _configElastic(type, amplitude, period);
    };
    return ease;
}, $8bf2f9ddbdb26115$var$_configBack = function _configBack(type, overshoot) {
    if (overshoot === void 0) overshoot = 1.70158;
    var easeOut = function easeOut(p) {
        return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
        return 1 - easeOut(1 - p);
    } : $8bf2f9ddbdb26115$var$_easeInOutFromOut(easeOut);
    ease.config = function(overshoot) {
        return _configBack(type, overshoot);
    };
    return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };
$8bf2f9ddbdb26115$export$f9000b814859f126("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
    var power = i < 5 ? i + 1 : i;
    $8bf2f9ddbdb26115$var$_insertEase(name + ",Power" + (power - 1), i ? function(p) {
        return Math.pow(p, power);
    } : function(p) {
        return p;
    }, function(p) {
        return 1 - Math.pow(1 - p, power);
    }, function(p) {
        return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
});
$8bf2f9ddbdb26115$var$_easeMap.Linear.easeNone = $8bf2f9ddbdb26115$var$_easeMap.none = $8bf2f9ddbdb26115$var$_easeMap.Linear.easeIn;
$8bf2f9ddbdb26115$var$_insertEase("Elastic", $8bf2f9ddbdb26115$var$_configElastic("in"), $8bf2f9ddbdb26115$var$_configElastic("out"), $8bf2f9ddbdb26115$var$_configElastic());
(function(n, c) {
    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
        return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
    };
    $8bf2f9ddbdb26115$var$_insertEase("Bounce", function(p) {
        return 1 - easeOut(1 - p);
    }, easeOut);
})(7.5625, 2.75);
$8bf2f9ddbdb26115$var$_insertEase("Expo", function(p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
});
$8bf2f9ddbdb26115$var$_insertEase("Circ", function(p) {
    return -($8bf2f9ddbdb26115$var$_sqrt(1 - p * p) - 1);
});
$8bf2f9ddbdb26115$var$_insertEase("Sine", function(p) {
    return p === 1 ? 1 : -$8bf2f9ddbdb26115$var$_cos(p * $8bf2f9ddbdb26115$var$_HALF_PI) + 1;
});
$8bf2f9ddbdb26115$var$_insertEase("Back", $8bf2f9ddbdb26115$var$_configBack("in"), $8bf2f9ddbdb26115$var$_configBack("out"), $8bf2f9ddbdb26115$var$_configBack());
$8bf2f9ddbdb26115$var$_easeMap.SteppedEase = $8bf2f9ddbdb26115$var$_easeMap.steps = $8bf2f9ddbdb26115$var$_globals.SteppedEase = {
    config: function config(steps, immediateStart) {
        if (steps === void 0) steps = 1;
        var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - $8bf2f9ddbdb26115$var$_tinyNum;
        return function(p) {
            return ((p2 * $8bf2f9ddbdb26115$var$_clamp(0, max, p) | 0) + p3) * p1;
        };
    }
};
$8bf2f9ddbdb26115$var$_defaults.ease = $8bf2f9ddbdb26115$var$_easeMap["quad.out"];
$8bf2f9ddbdb26115$export$f9000b814859f126("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return $8bf2f9ddbdb26115$var$_callbackNames += name + "," + name + "Params,";
});
var $8bf2f9ddbdb26115$export$cf10981d5419cad5 = function GSCache(target, harness) {
    this.id = $8bf2f9ddbdb26115$var$_gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : $8bf2f9ddbdb26115$export$51d6bbe898aef1f9;
    this.set = harness ? harness.getSetter : $8bf2f9ddbdb26115$export$d60fbc1e0278aaf0;
};
var $8bf2f9ddbdb26115$export$c35d437ae5945fcd = /*#__PURE__*/ function() {
    function Animation(vars) {
        this.vars = vars;
        this._delay = +vars.delay || 0;
        if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
            // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
            this._rDelay = vars.repeatDelay || 0;
            this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
        }
        this._ts = 1;
        $8bf2f9ddbdb26115$var$_setDuration(this, +vars.duration, 1, 1);
        this.data = vars.data;
        if ($8bf2f9ddbdb26115$var$_context) {
            this._ctx = $8bf2f9ddbdb26115$var$_context;
            $8bf2f9ddbdb26115$var$_context.data.push(this);
        }
        $8bf2f9ddbdb26115$var$_tickerActive || $8bf2f9ddbdb26115$export$762ed8fbedb691e3.wake();
    }
    var _proto = Animation.prototype;
    _proto.delay = function delay(value) {
        if (value || value === 0) {
            this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
            this._delay = value;
            return this;
        }
        return this._delay;
    };
    _proto.duration = function duration(value) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
        if (!arguments.length) return this._tDur;
        this._dirty = 0;
        return $8bf2f9ddbdb26115$var$_setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
        $8bf2f9ddbdb26115$var$_wake();
        if (!arguments.length) return this._tTime;
        var parent = this._dp;
        if (parent && parent.smoothChildTiming && this._ts) {
            $8bf2f9ddbdb26115$var$_alignPlayhead(this, _totalTime);
            !parent._dp || parent.parent || $8bf2f9ddbdb26115$var$_postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
            //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.
            while(parent && parent.parent){
                if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) parent.totalTime(parent._tTime, true);
                parent = parent.parent;
            }
            if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
            $8bf2f9ddbdb26115$var$_addToTimeline(this._dp, this, this._start - this._delay);
        }
        if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === $8bf2f9ddbdb26115$var$_tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
            // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
            this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
            //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
            //   this._lock = 1;
            $8bf2f9ddbdb26115$var$_lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
        //}
        }
        return this;
    };
    _proto.time = function time(value, suppressEvents) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + $8bf2f9ddbdb26115$var$_elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };
    _proto.progress = function progress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + $8bf2f9ddbdb26115$var$_elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
        var cycleDuration = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? $8bf2f9ddbdb26115$var$_animationCycle(this._tTime, cycleDuration) + 1 : 1;
    } // potential future addition:
    ;
    _proto.timeScale = function timeScale(value) {
        if (!arguments.length) return this._rts === -$8bf2f9ddbdb26115$var$_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
        if (this._rts === value) return this;
        var tTime = this.parent && this._ts ? $8bf2f9ddbdb26115$var$_parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
        // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
        //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
        // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.
        this._rts = +value || 0;
        this._ts = this._ps || value === -$8bf2f9ddbdb26115$var$_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.
        this.totalTime($8bf2f9ddbdb26115$var$_clamp(-Math.abs(this._delay), this._tDur, tTime), true);
        $8bf2f9ddbdb26115$var$_setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.
        return $8bf2f9ddbdb26115$var$_recacheAncestors(this);
    };
    _proto.paused = function paused(value) {
        if (!arguments.length) return this._ps;
        if (this._ps !== value) {
            this._ps = value;
            if (value) {
                this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.
                this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
            } else {
                $8bf2f9ddbdb26115$var$_wake();
                this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.
                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== $8bf2f9ddbdb26115$var$_tinyNum && (this._tTime -= $8bf2f9ddbdb26115$var$_tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
            }
        }
        return this;
    };
    _proto.startTime = function startTime(value) {
        if (arguments.length) {
            this._start = value;
            var parent = this.parent || this._dp;
            parent && (parent._sort || !this.parent) && $8bf2f9ddbdb26115$var$_addToTimeline(parent, this, value - this._delay);
            return this;
        }
        return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
        return this._start + ($8bf2f9ddbdb26115$var$_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
        var parent = this.parent || this._dp; // _dp = detached parent
        return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : $8bf2f9ddbdb26115$var$_parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.revert = function revert(config) {
        if (config === void 0) config = $8bf2f9ddbdb26115$var$_revertConfig;
        var prevIsReverting = $8bf2f9ddbdb26115$var$_reverting;
        $8bf2f9ddbdb26115$var$_reverting = config;
        if (this._initted || this._startAt) {
            this.timeline && this.timeline.revert(config);
            this.totalTime(-0.01, config.suppressEvents);
        }
        this.data !== "nested" && config.kill !== false && this.kill();
        $8bf2f9ddbdb26115$var$_reverting = prevIsReverting;
        return this;
    };
    _proto.globalTime = function globalTime(rawTime) {
        var animation = this, time = arguments.length ? rawTime : animation.rawTime();
        while(animation){
            time = animation._start + time / (animation._ts || 1);
            animation = animation._dp;
        }
        return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(rawTime) : time; // the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
    };
    _proto.repeat = function repeat(value) {
        if (arguments.length) {
            this._repeat = value === Infinity ? -2 : value;
            return $8bf2f9ddbdb26115$var$_onUpdateTotalDuration(this);
        }
        return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
        if (arguments.length) {
            var time = this._time;
            this._rDelay = value;
            $8bf2f9ddbdb26115$var$_onUpdateTotalDuration(this);
            return time ? this.time(time) : this;
        }
        return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
        if (arguments.length) {
            this._yoyo = value;
            return this;
        }
        return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
        return this.totalTime($8bf2f9ddbdb26115$var$_parsePosition(this, position), $8bf2f9ddbdb26115$var$_isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
        return this.play().totalTime(includeDelay ? -this._delay : 0, $8bf2f9ddbdb26115$var$_isNotFalse(suppressEvents));
    };
    _proto.play = function play(from, suppressEvents) {
        from != null && this.seek(from, suppressEvents);
        return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
        from != null && this.seek(from || this.totalDuration(), suppressEvents);
        return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
        atTime != null && this.seek(atTime, suppressEvents);
        return this.paused(true);
    };
    _proto.resume = function resume() {
        return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
        if (arguments.length) {
            !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -$8bf2f9ddbdb26115$var$_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.
            return this;
        }
        return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
        this._initted = this._act = 0;
        this._zTime = -$8bf2f9ddbdb26115$var$_tinyNum;
        return this;
    };
    _proto.isActive = function isActive() {
        var parent = this.parent || this._dp, start = this._start, rawTime;
        return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - $8bf2f9ddbdb26115$var$_tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
        var vars = this.vars;
        if (arguments.length > 1) {
            if (!callback) delete vars[type];
            else {
                vars[type] = callback;
                params && (vars[type + "Params"] = params);
                type === "onUpdate" && (this._onUpdate = callback);
            }
            return this;
        }
        return vars[type];
    };
    _proto.then = function then(onFulfilled) {
        var self = this;
        return new Promise(function(resolve) {
            var f = $8bf2f9ddbdb26115$var$_isFunction(onFulfilled) ? onFulfilled : $8bf2f9ddbdb26115$var$_passThrough, _resolve = function _resolve() {
                var _then = self.then;
                self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)
                $8bf2f9ddbdb26115$var$_isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
                resolve(f);
                self.then = _then;
            };
            if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) _resolve();
            else self._prom = _resolve;
        });
    };
    _proto.kill = function kill() {
        $8bf2f9ddbdb26115$var$_interrupt(this);
    };
    return Animation;
}();
$8bf2f9ddbdb26115$export$dc2b19673bb53610($8bf2f9ddbdb26115$export$c35d437ae5945fcd.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -$8bf2f9ddbdb26115$var$_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
});
var $8bf2f9ddbdb26115$export$e6a97ba2cae5bb94 = /*#__PURE__*/ function(_Animation) {
    $8bf2f9ddbdb26115$var$_inheritsLoose(Timeline, _Animation);
    function Timeline(vars, position) {
        var _this;
        if (vars === void 0) vars = {};
        _this = _Animation.call(this, vars) || this;
        _this.labels = {};
        _this.smoothChildTiming = !!vars.smoothChildTiming;
        _this.autoRemoveChildren = !!vars.autoRemoveChildren;
        _this._sort = $8bf2f9ddbdb26115$var$_isNotFalse(vars.sortChildren);
        $8bf2f9ddbdb26115$var$_globalTimeline && $8bf2f9ddbdb26115$var$_addToTimeline(vars.parent || $8bf2f9ddbdb26115$var$_globalTimeline, $8bf2f9ddbdb26115$var$_assertThisInitialized(_this), position);
        vars.reversed && _this.reverse();
        vars.paused && _this.paused(true);
        vars.scrollTrigger && $8bf2f9ddbdb26115$var$_scrollTrigger($8bf2f9ddbdb26115$var$_assertThisInitialized(_this), vars.scrollTrigger);
        return _this;
    }
    var _proto2 = Timeline.prototype;
    _proto2.to = function to(targets, vars, position) {
        $8bf2f9ddbdb26115$var$_createTweenType(0, arguments, this);
        return this;
    };
    _proto2.from = function from(targets, vars, position) {
        $8bf2f9ddbdb26115$var$_createTweenType(1, arguments, this);
        return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
        $8bf2f9ddbdb26115$var$_createTweenType(2, arguments, this);
        return this;
    };
    _proto2.set = function set(targets, vars, position) {
        vars.duration = 0;
        vars.parent = this;
        $8bf2f9ddbdb26115$var$_inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
        vars.immediateRender = !!vars.immediateRender;
        new $8bf2f9ddbdb26115$export$208a41d6b4e37b97(targets, vars, $8bf2f9ddbdb26115$var$_parsePosition(this, position), 1);
        return this;
    };
    _proto2.call = function call(callback, params, position) {
        return $8bf2f9ddbdb26115$var$_addToTimeline(this, $8bf2f9ddbdb26115$export$208a41d6b4e37b97.delayedCall(0, callback, params), position);
    } //ONLY for backward compatibility! Maybe delete?
    ;
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.duration = duration;
        vars.stagger = vars.stagger || stagger;
        vars.onComplete = onCompleteAll;
        vars.onCompleteParams = onCompleteAllParams;
        vars.parent = this;
        new $8bf2f9ddbdb26115$export$208a41d6b4e37b97(targets, vars, $8bf2f9ddbdb26115$var$_parsePosition(this, position));
        return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.runBackwards = 1;
        $8bf2f9ddbdb26115$var$_inheritDefaults(vars).immediateRender = $8bf2f9ddbdb26115$var$_isNotFalse(vars.immediateRender);
        return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
        toVars.startAt = fromVars;
        $8bf2f9ddbdb26115$var$_inheritDefaults(toVars).immediateRender = $8bf2f9ddbdb26115$var$_isNotFalse(toVars.immediateRender);
        return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : $8bf2f9ddbdb26115$var$_roundPrecise(totalTime), // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
        crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
        this !== $8bf2f9ddbdb26115$var$_globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
        if (tTime !== this._tTime || force || crossingStart) {
            if (prevTime !== this._time && dur) {
                //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
                tTime += this._time - prevTime;
                totalTime += this._time - prevTime;
            }
            time = tTime;
            prevStart = this._start;
            timeScale = this._ts;
            prevPaused = !timeScale;
            if (crossingStart) {
                dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
                (totalTime || !suppressEvents) && (this._zTime = totalTime);
            }
            if (this._repeat) {
                //adjust the time for repeats and yoyos
                yoyo = this._yoyo;
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && totalTime < 0) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                time = $8bf2f9ddbdb26115$var$_roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                if (tTime === tDur) {
                    // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                    iteration = this._repeat;
                    time = dur;
                } else {
                    iteration = ~~(tTime / cycleDuration);
                    if (iteration && iteration === tTime / cycleDuration) {
                        time = dur;
                        iteration--;
                    }
                    time > dur && (time = dur);
                }
                prevIteration = $8bf2f9ddbdb26115$var$_animationCycle(this._tTime, cycleDuration);
                !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005 also, this._tTime - prevIteration * cycleDuration - this._dur <= 0 just checks to make sure it wasn't previously in the "repeatDelay" portion
                if (yoyo && iteration & 1) {
                    time = dur - time;
                    isYoyo = 1;
                }
                /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */ if (iteration !== prevIteration && !this._lock) {
                    var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                    iteration < prevIteration && (rewinding = !rewinding);
                    prevTime = rewinding ? 0 : dur;
                    this._lock = 1;
                    this.render(prevTime || (isYoyo ? 0 : $8bf2f9ddbdb26115$var$_roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                    this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.
                    !suppressEvents && this.parent && $8bf2f9ddbdb26115$var$_callback(this, "onRepeat");
                    this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                    if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
                    return this;
                    dur = this._dur; // in case the duration changed in the onRepeat
                    tDur = this._tDur;
                    if (doesWrap) {
                        this._lock = 2;
                        prevTime = rewinding ? dur : -0.0001;
                        this.render(prevTime, true);
                        this.vars.repeatRefresh && !isYoyo && this.invalidate();
                    }
                    this._lock = 0;
                    if (!this._ts && !prevPaused) return this;
                     //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.
                    $8bf2f9ddbdb26115$var$_propagateYoyoEase(this, isYoyo);
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2) {
                pauseTween = $8bf2f9ddbdb26115$var$_findNextPauseTween(this, $8bf2f9ddbdb26115$var$_roundPrecise(prevTime), $8bf2f9ddbdb26115$var$_roundPrecise(time));
                if (pauseTween) tTime -= time - (time = pauseTween._start);
            }
            this._tTime = tTime;
            this._time = time;
            this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
            if (!this._initted) {
                this._onUpdate = this.vars.onUpdate;
                this._initted = 1;
                this._zTime = totalTime;
                prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
            }
            if (!prevTime && time && !suppressEvents && !iteration) {
                $8bf2f9ddbdb26115$var$_callback(this, "onStart");
                if (this._tTime !== tTime) // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
                return this;
            }
            if (time >= prevTime && totalTime >= 0) {
                child = this._first;
                while(child){
                    next = child._next;
                    if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                        if (child.parent !== this) // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                        return this.render(totalTime, suppressEvents, force);
                        child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                        if (time !== this._time || !this._ts && !prevPaused) {
                            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                            pauseTween = 0;
                            next && (tTime += this._zTime = -$8bf2f9ddbdb26115$var$_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)
                            break;
                        }
                    }
                    child = next;
                }
            } else {
                child = this._last;
                var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.
                while(child){
                    next = child._prev;
                    if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                        if (child.parent !== this) // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                        return this.render(totalTime, suppressEvents, force);
                        child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || $8bf2f9ddbdb26115$var$_reverting && (child._initted || child._startAt)); // if reverting, we should always force renders of initted tweens (but remember that .fromTo() or .from() may have a _startAt but not _initted yet). If, for example, a .fromTo() tween with a stagger (which creates an internal timeline) gets reverted BEFORE some of its child tweens render for the first time, it may not properly trigger them to revert.
                        if (time !== this._time || !this._ts && !prevPaused) {
                            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                            pauseTween = 0;
                            next && (tTime += this._zTime = adjustedTime ? -$8bf2f9ddbdb26115$var$_tinyNum : $8bf2f9ddbdb26115$var$_tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)
                            break;
                        }
                    }
                    child = next;
                }
            }
            if (pauseTween && !suppressEvents) {
                this.pause();
                pauseTween.render(time >= prevTime ? 0 : -$8bf2f9ddbdb26115$var$_tinyNum)._zTime = time >= prevTime ? 1 : -1;
                if (this._ts) {
                    //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
                    this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.
                    $8bf2f9ddbdb26115$var$_setEnd(this);
                    return this.render(totalTime, suppressEvents, force);
                }
            }
            this._onUpdate && !suppressEvents && $8bf2f9ddbdb26115$var$_callback(this, "onUpdate", true);
            if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
                if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
                    if (!this._lock) {
                        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
                        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && $8bf2f9ddbdb26115$var$_removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                            $8bf2f9ddbdb26115$var$_callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                        }
                    }
                }
            }
        }
        return this;
    };
    _proto2.add = function add(child, position) {
        var _this2 = this;
        $8bf2f9ddbdb26115$var$_isNumber(position) || (position = $8bf2f9ddbdb26115$var$_parsePosition(this, position, child));
        if (!(child instanceof $8bf2f9ddbdb26115$export$c35d437ae5945fcd)) {
            if ($8bf2f9ddbdb26115$var$_isArray(child)) {
                child.forEach(function(obj) {
                    return _this2.add(obj, position);
                });
                return this;
            }
            if ($8bf2f9ddbdb26115$export$f664476fd67145ca(child)) return this.addLabel(child, position);
            if ($8bf2f9ddbdb26115$var$_isFunction(child)) child = $8bf2f9ddbdb26115$export$208a41d6b4e37b97.delayedCall(0, child);
            else return this;
        }
        return this !== child ? $8bf2f9ddbdb26115$var$_addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
        if (nested === void 0) nested = true;
        if (tweens === void 0) tweens = true;
        if (timelines === void 0) timelines = true;
        if (ignoreBeforeTime === void 0) ignoreBeforeTime = -$8bf2f9ddbdb26115$var$_bigNum;
        var a = [], child = this._first;
        while(child){
            if (child._start >= ignoreBeforeTime) {
                if (child instanceof $8bf2f9ddbdb26115$export$208a41d6b4e37b97) tweens && a.push(child);
                else {
                    timelines && a.push(child);
                    nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
                }
            }
            child = child._next;
        }
        return a;
    };
    _proto2.getById = function getById(id) {
        var animations = this.getChildren(1, 1, 1), i = animations.length;
        while(i--){
            if (animations[i].vars.id === id) return animations[i];
        }
    };
    _proto2.remove = function remove(child) {
        if ($8bf2f9ddbdb26115$export$f664476fd67145ca(child)) return this.removeLabel(child);
        if ($8bf2f9ddbdb26115$var$_isFunction(child)) return this.killTweensOf(child);
        $8bf2f9ddbdb26115$export$cd008aa6cd8844e3(this, child);
        if (child === this._recent) this._recent = this._last;
        return $8bf2f9ddbdb26115$var$_uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
        if (!arguments.length) return this._tTime;
        this._forcing = 1;
        if (!this._dp && this._ts) //special case for the global timeline (or any other that has no parent or detached parent).
        this._start = $8bf2f9ddbdb26115$var$_roundPrecise($8bf2f9ddbdb26115$export$762ed8fbedb691e3.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
        _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
        this._forcing = 0;
        return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
        this.labels[label] = $8bf2f9ddbdb26115$var$_parsePosition(this, position);
        return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
        delete this.labels[label];
        return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
        var t = $8bf2f9ddbdb26115$export$208a41d6b4e37b97.delayedCall(0, callback || $8bf2f9ddbdb26115$var$_emptyFunc, params);
        t.data = "isPause";
        this._hasPause = 1;
        return $8bf2f9ddbdb26115$var$_addToTimeline(this, t, $8bf2f9ddbdb26115$var$_parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
        var child = this._first;
        position = $8bf2f9ddbdb26115$var$_parsePosition(this, position);
        while(child){
            if (child._start === position && child.data === "isPause") $8bf2f9ddbdb26115$var$_removeFromParent(child);
            child = child._next;
        }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
        while(i--)$8bf2f9ddbdb26115$var$_overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
        return this;
    };
    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
        var a = [], parsedTargets = $8bf2f9ddbdb26115$export$45b10814cc054894(targets), child = this._first, isGlobalTime = $8bf2f9ddbdb26115$var$_isNumber(onlyActive), // a number is interpreted as a global time. If the animation spans
        children;
        while(child){
            if (child instanceof $8bf2f9ddbdb26115$export$208a41d6b4e37b97) {
                if ($8bf2f9ddbdb26115$var$_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!$8bf2f9ddbdb26115$var$_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
                a.push(child);
            } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) a.push.apply(a, children);
            child = child._next;
        }
        return a;
    } // potential future feature - targets() on timelines
    ;
    _proto2.tweenTo = function tweenTo(position, vars) {
        vars = vars || {};
        var tl = this, endTime = $8bf2f9ddbdb26115$var$_parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = $8bf2f9ddbdb26115$export$208a41d6b4e37b97.to(tl, $8bf2f9ddbdb26115$export$dc2b19673bb53610({
            ease: vars.ease || "none",
            lazy: false,
            immediateRender: false,
            time: endTime,
            overwrite: "auto",
            duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || $8bf2f9ddbdb26115$var$_tinyNum,
            onStart: function onStart() {
                tl.pause();
                if (!initted) {
                    var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
                    tween._dur !== duration && $8bf2f9ddbdb26115$var$_setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                    initted = 1;
                }
                _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
            }
        }, vars));
        return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
        return this.tweenTo(toPosition, $8bf2f9ddbdb26115$export$dc2b19673bb53610({
            startAt: {
                time: $8bf2f9ddbdb26115$var$_parsePosition(this, fromPosition)
            }
        }, vars));
    };
    _proto2.recent = function recent() {
        return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
        if (afterTime === void 0) afterTime = this._time;
        return $8bf2f9ddbdb26115$var$_getLabelInDirection(this, $8bf2f9ddbdb26115$var$_parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
        if (beforeTime === void 0) beforeTime = this._time;
        return $8bf2f9ddbdb26115$var$_getLabelInDirection(this, $8bf2f9ddbdb26115$var$_parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
        return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + $8bf2f9ddbdb26115$var$_tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
        if (ignoreBeforeTime === void 0) ignoreBeforeTime = 0;
        var child = this._first, labels = this.labels, p;
        while(child){
            if (child._start >= ignoreBeforeTime) {
                child._start += amount;
                child._end += amount;
            }
            child = child._next;
        }
        if (adjustLabels) {
            for(p in labels)if (labels[p] >= ignoreBeforeTime) labels[p] += amount;
        }
        return $8bf2f9ddbdb26115$var$_uncache(this);
    };
    _proto2.invalidate = function invalidate(soft) {
        var child = this._first;
        this._lock = 0;
        while(child){
            child.invalidate(soft);
            child = child._next;
        }
        return _Animation.prototype.invalidate.call(this, soft);
    };
    _proto2.clear = function clear(includeLabels) {
        if (includeLabels === void 0) includeLabels = true;
        var child = this._first, next;
        while(child){
            next = child._next;
            this.remove(child);
            child = next;
        }
        this._dp && (this._time = this._tTime = this._pTime = 0);
        includeLabels && (this.labels = {});
        return $8bf2f9ddbdb26115$var$_uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
        var max = 0, self = this, child = self._last, prevStart = $8bf2f9ddbdb26115$var$_bigNum, prev, start, parent;
        if (arguments.length) return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
        if (self._dirty) {
            parent = self.parent;
            while(child){
                prev = child._prev; //record it here in case the tween changes position in the sequence...
                child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.
                start = child._start;
                if (start > prevStart && self._sort && child._ts && !self._lock) {
                    //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
                    self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().
                    $8bf2f9ddbdb26115$var$_addToTimeline(self, child, start - child._delay, 1)._lock = 0;
                } else prevStart = start;
                if (start < 0 && child._ts) {
                    //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
                    max -= start;
                    if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                        self._start += start / self._ts;
                        self._time -= start;
                        self._tTime -= start;
                    }
                    self.shiftChildren(-start, false, -Infinity);
                    prevStart = 0;
                }
                child._end > max && child._ts && (max = child._end);
                child = prev;
            }
            $8bf2f9ddbdb26115$var$_setDuration(self, self === $8bf2f9ddbdb26115$var$_globalTimeline && self._time > max ? self._time : max, 1, 1);
            self._dirty = 0;
        }
        return self._tDur;
    };
    Timeline.updateRoot = function updateRoot(time) {
        if ($8bf2f9ddbdb26115$var$_globalTimeline._ts) {
            $8bf2f9ddbdb26115$var$_lazySafeRender($8bf2f9ddbdb26115$var$_globalTimeline, $8bf2f9ddbdb26115$var$_parentToChildTotalTime(time, $8bf2f9ddbdb26115$var$_globalTimeline));
            $8bf2f9ddbdb26115$var$_lastRenderedFrame = $8bf2f9ddbdb26115$export$762ed8fbedb691e3.frame;
        }
        if ($8bf2f9ddbdb26115$export$762ed8fbedb691e3.frame >= $8bf2f9ddbdb26115$var$_nextGCFrame) {
            $8bf2f9ddbdb26115$var$_nextGCFrame += $8bf2f9ddbdb26115$export$4922bee768729a77.autoSleep || 120;
            var child = $8bf2f9ddbdb26115$var$_globalTimeline._first;
            if (!child || !child._ts) {
                if ($8bf2f9ddbdb26115$export$4922bee768729a77.autoSleep && $8bf2f9ddbdb26115$export$762ed8fbedb691e3._listeners.length < 2) {
                    while(child && !child._ts)child = child._next;
                    child || $8bf2f9ddbdb26115$export$762ed8fbedb691e3.sleep();
                }
            }
        }
    };
    return Timeline;
}($8bf2f9ddbdb26115$export$c35d437ae5945fcd);
$8bf2f9ddbdb26115$export$dc2b19673bb53610($8bf2f9ddbdb26115$export$e6a97ba2cae5bb94.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var $8bf2f9ddbdb26115$var$_addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
    //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    var pt = new $8bf2f9ddbdb26115$export$3a67f7f44b1e838a(this._pt, target, prop, 0, 1, $8bf2f9ddbdb26115$export$c5bc8e04394ecb2, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += ""; //ensure values are strings
    end += "";
    if (hasRandom = ~end.indexOf("random(")) end = $8bf2f9ddbdb26115$export$d5962a97e3cde94d(end);
    if (stringFilter) {
        a = [
            start,
            end
        ];
        stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
        start = a[0];
        end = a[1];
    }
    startNums = start.match($8bf2f9ddbdb26115$var$_complexStringNumExp) || [];
    while(result = $8bf2f9ddbdb26115$var$_complexStringNumExp.exec(end)){
        endNum = result[0];
        chunk = end.substring(index, result.index);
        if (color) color = (color + 1) % 5;
        else if (chunk.substr(-5) === "rgba(") color = 1;
        if (endNum !== startNums[matchIndex++]) {
            startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
            pt._pt = {
                _next: pt._pt,
                p: chunk || matchIndex === 1 ? chunk : ",",
                //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                s: startNum,
                c: endNum.charAt(1) === "=" ? $8bf2f9ddbdb26115$export$dac762bc6301b560(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
                m: color && color < 4 ? Math.round : 0
            };
            index = $8bf2f9ddbdb26115$var$_complexStringNumExp.lastIndex;
        }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    pt.fp = funcParam;
    if ($8bf2f9ddbdb26115$export$5a680e28b0b61bc.test(end) || hasRandom) pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    return pt;
}, $8bf2f9ddbdb26115$var$_addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    $8bf2f9ddbdb26115$var$_isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !$8bf2f9ddbdb26115$var$_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !$8bf2f9ddbdb26115$var$_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !$8bf2f9ddbdb26115$var$_isFunction(currentValue) ? $8bf2f9ddbdb26115$var$_setterPlain : funcParam ? $8bf2f9ddbdb26115$var$_setterFuncWithParam : $8bf2f9ddbdb26115$var$_setterFunc, pt;
    if ($8bf2f9ddbdb26115$export$f664476fd67145ca(end)) {
        if (~end.indexOf("random(")) end = $8bf2f9ddbdb26115$export$d5962a97e3cde94d(end);
        if (end.charAt(1) === "=") {
            pt = $8bf2f9ddbdb26115$export$dac762bc6301b560(parsedStart, end) + ($8bf2f9ddbdb26115$export$65f2564e9a9b9222(parsedStart) || 0);
            if (pt || pt === 0) // to avoid isNaN, like if someone passes in a value like "!= whatever"
            end = pt;
        }
    }
    if (!optional || parsedStart !== end || $8bf2f9ddbdb26115$var$_forceAllPropTweens) {
        if (!isNaN(parsedStart * end) && end !== "") {
            // fun fact: any number multiplied by "" is evaluated as the number 0!
            pt = new $8bf2f9ddbdb26115$export$3a67f7f44b1e838a(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? $8bf2f9ddbdb26115$var$_renderBoolean : $8bf2f9ddbdb26115$var$_renderPlain, 0, setter);
            funcParam && (pt.fp = funcParam);
            modifier && pt.modifier(modifier, this, target);
            return this._pt = pt;
        }
        !currentValue && !(prop in target) && $8bf2f9ddbdb26115$export$7fb54635790b59a5(prop, end);
        return $8bf2f9ddbdb26115$var$_addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || $8bf2f9ddbdb26115$export$4922bee768729a77.stringFilter, funcParam);
    }
}, //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
$8bf2f9ddbdb26115$var$_processVars = function _processVars(vars, index, target, targets, tween) {
    $8bf2f9ddbdb26115$var$_isFunction(vars) && (vars = $8bf2f9ddbdb26115$var$_parseFuncOrString(vars, tween, index, target, targets));
    if (!$8bf2f9ddbdb26115$var$_isObject(vars) || vars.style && vars.nodeType || $8bf2f9ddbdb26115$var$_isArray(vars) || $8bf2f9ddbdb26115$var$_isTypedArray(vars)) return $8bf2f9ddbdb26115$export$f664476fd67145ca(vars) ? $8bf2f9ddbdb26115$var$_parseFuncOrString(vars, tween, index, target, targets) : vars;
    var copy = {}, p;
    for(p in vars)copy[p] = $8bf2f9ddbdb26115$var$_parseFuncOrString(vars[p], tween, index, target, targets);
    return copy;
}, $8bf2f9ddbdb26115$export$5c457b74208010cf = function _checkPlugin(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if ($8bf2f9ddbdb26115$export$d305d8ec5d7c26b8[property] && (plugin = new $8bf2f9ddbdb26115$export$d305d8ec5d7c26b8[property]()).init(target, plugin.rawVars ? vars[property] : $8bf2f9ddbdb26115$var$_processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
        tween._pt = pt = new $8bf2f9ddbdb26115$export$3a67f7f44b1e838a(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
        if (tween !== $8bf2f9ddbdb26115$var$_quickTween) {
            ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.
            i = plugin._props.length;
            while(i--)ptLookup[plugin._props[i]] = pt;
        }
    }
    return plugin;
}, $8bf2f9ddbdb26115$var$_overwritingTween, //store a reference temporarily so we can avoid overwriting itself.
$8bf2f9ddbdb26115$var$_forceAllPropTweens, $8bf2f9ddbdb26115$var$_initTween = function _initTween(tween, time, tTime) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !$8bf2f9ddbdb26115$var$_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = $8bf2f9ddbdb26115$var$_parseEase(ease, $8bf2f9ddbdb26115$var$_defaults.ease);
    tween._yEase = yoyoEase ? $8bf2f9ddbdb26115$var$_invertEase($8bf2f9ddbdb26115$var$_parseEase(yoyoEase === true ? ease : yoyoEase, $8bf2f9ddbdb26115$var$_defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
        //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
        yoyoEase = tween._yEase;
        tween._yEase = tween._ease;
        tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.
    if (!tl || keyframes && !vars.stagger) {
        //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
        harness = targets[0] ? $8bf2f9ddbdb26115$export$8b9be379d2de2a39(targets[0]).harness : 0;
        harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.
        cleanVars = $8bf2f9ddbdb26115$var$_copyExcluding(vars, $8bf2f9ddbdb26115$var$_reservedProps);
        if (prevStartAt) {
            prevStartAt._zTime < 0 && prevStartAt.progress(1); // in case it's a lazy startAt that hasn't rendered yet.
            time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? $8bf2f9ddbdb26115$var$_revertConfigNoKill : $8bf2f9ddbdb26115$var$_startAtRevertConfig); // if it's a "startAt" (not "from()" or runBackwards: true), we only need to do a shallow revert (keep transforms cached in CSSPlugin)
            // don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.
            prevStartAt._lazy = 0;
        }
        if (startAt) {
            $8bf2f9ddbdb26115$var$_removeFromParent(tween._startAt = $8bf2f9ddbdb26115$export$208a41d6b4e37b97.set(targets, $8bf2f9ddbdb26115$export$dc2b19673bb53610({
                data: "isStart",
                overwrite: false,
                parent: parent,
                immediateRender: true,
                lazy: !prevStartAt && $8bf2f9ddbdb26115$var$_isNotFalse(lazy),
                startAt: null,
                delay: 0,
                onUpdate: onUpdate,
                onUpdateParams: onUpdateParams,
                callbackScope: callbackScope,
                stagger: 0
            }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);
            tween._startAt._dp = 0; // don't allow it to get put back into root timeline! Like when revert() is called and totalTime() gets set.
            tween._startAt._sat = tween; // used in globalTime(). _sat stands for _startAtTween
            time < 0 && ($8bf2f9ddbdb26115$var$_reverting || !immediateRender && !autoRevert) && tween._startAt.revert($8bf2f9ddbdb26115$var$_revertConfigNoKill); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.
            if (immediateRender) {
                if (dur && time <= 0 && tTime <= 0) {
                    // check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
                    time && (tween._zTime = time);
                    return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
                }
            }
        } else if (runBackwards && dur) //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
        {
            if (!prevStartAt) {
                time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
                p = $8bf2f9ddbdb26115$export$dc2b19673bb53610({
                    overwrite: false,
                    data: "isFromStart",
                    //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
                    lazy: immediateRender && !prevStartAt && $8bf2f9ddbdb26115$var$_isNotFalse(lazy),
                    immediateRender: immediateRender,
                    //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
                    stagger: 0,
                    parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})
                }, cleanVars);
                harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})
                $8bf2f9ddbdb26115$var$_removeFromParent(tween._startAt = $8bf2f9ddbdb26115$export$208a41d6b4e37b97.set(targets, p));
                tween._startAt._dp = 0; // don't allow it to get put back into root timeline!
                tween._startAt._sat = tween; // used in globalTime()
                time < 0 && ($8bf2f9ddbdb26115$var$_reverting ? tween._startAt.revert($8bf2f9ddbdb26115$var$_revertConfigNoKill) : tween._startAt.render(-1, true));
                tween._zTime = time;
                if (!immediateRender) _initTween(tween._startAt, $8bf2f9ddbdb26115$var$_tinyNum, $8bf2f9ddbdb26115$var$_tinyNum); //ensures that the initial values are recorded
                else if (!time) return;
            }
        }
        tween._pt = tween._ptCache = 0;
        lazy = dur && $8bf2f9ddbdb26115$var$_isNotFalse(lazy) || lazy && !dur;
        for(i = 0; i < targets.length; i++){
            target = targets[i];
            gsData = target._gsap || $8bf2f9ddbdb26115$var$_harness(targets)[i]._gsap;
            tween._ptLookup[i] = ptLookup = {};
            $8bf2f9ddbdb26115$var$_lazyLookup[gsData.id] && $8bf2f9ddbdb26115$var$_lazyTweens.length && $8bf2f9ddbdb26115$var$_lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
            index = fullTargets === targets ? i : fullTargets.indexOf(target);
            if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
                tween._pt = pt = new $8bf2f9ddbdb26115$export$3a67f7f44b1e838a(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
                plugin._props.forEach(function(name) {
                    ptLookup[name] = pt;
                });
                plugin.priority && (hasPriority = 1);
            }
            if (!harness || harnessVars) {
                for(p in cleanVars)if ($8bf2f9ddbdb26115$export$d305d8ec5d7c26b8[p] && (plugin = $8bf2f9ddbdb26115$export$5c457b74208010cf(p, cleanVars, tween, index, target, fullTargets))) plugin.priority && (hasPriority = 1);
                else ptLookup[p] = pt = $8bf2f9ddbdb26115$var$_addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
            tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
            if (autoOverwrite && tween._pt) {
                $8bf2f9ddbdb26115$var$_overwritingTween = tween;
                $8bf2f9ddbdb26115$var$_globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!
                overwritten = !tween.parent;
                $8bf2f9ddbdb26115$var$_overwritingTween = 0;
            }
            tween._pt && lazy && ($8bf2f9ddbdb26115$var$_lazyLookup[gsData.id] = 1);
        }
        hasPriority && $8bf2f9ddbdb26115$export$eed5824f53346d57(tween);
        tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.
    keyframes && time <= 0 && tl.render($8bf2f9ddbdb26115$var$_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
}, $8bf2f9ddbdb26115$var$_updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
    if (!ptCache) {
        ptCache = tween._ptCache[property] = [];
        lookup = tween._ptLookup;
        i = tween._targets.length;
        while(i--){
            pt = lookup[i][property];
            if (pt && pt.d && pt.d._pt) {
                // it's a plugin, so find the nested PropTween
                pt = pt.d._pt;
                while(pt && pt.p !== property && pt.fp !== property)// "fp" is functionParam for things like setting CSS variables which require .setProperty("--var-name", value)
                pt = pt._next;
            }
            if (!pt) {
                // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
                // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
                $8bf2f9ddbdb26115$var$_forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.
                tween.vars[property] = "+=0";
                $8bf2f9ddbdb26115$var$_initTween(tween, time);
                $8bf2f9ddbdb26115$var$_forceAllPropTweens = 0;
                return 1;
            }
            ptCache.push(pt);
        }
    }
    i = ptCache.length;
    while(i--){
        rootPT = ptCache[i];
        pt = rootPT._pt || rootPT; // complex values may have nested PropTweens. We only accommodate the FIRST value.
        pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
        pt.c = value - pt.s;
        rootPT.e && (rootPT.e = $8bf2f9ddbdb26115$export$9c8d725d65e13f94(value) + $8bf2f9ddbdb26115$export$65f2564e9a9b9222(rootPT.e)); // mainly for CSSPlugin (end value)
        rootPT.b && (rootPT.b = pt.s + $8bf2f9ddbdb26115$export$65f2564e9a9b9222(rootPT.b)); // (beginning value)
    }
}, $8bf2f9ddbdb26115$var$_addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? $8bf2f9ddbdb26115$export$8b9be379d2de2a39(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
    if (!propertyAliases) return vars;
    copy = $8bf2f9ddbdb26115$var$_merge({}, vars);
    for(p in propertyAliases)if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while(i--)copy[aliases[i]] = copy[p];
    }
    return copy;
}, // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
$8bf2f9ddbdb26115$var$_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p, a;
    if ($8bf2f9ddbdb26115$var$_isArray(obj)) {
        a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease
        obj.forEach(function(value, i) {
            return a.push({
                t: i / (obj.length - 1) * 100,
                v: value,
                e: ease
            });
        });
    } else for(p in obj){
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
            t: parseFloat(prop),
            v: obj[p],
            e: ease
        });
    }
}, $8bf2f9ddbdb26115$var$_parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return $8bf2f9ddbdb26115$var$_isFunction(value) ? value.call(tween, i, target, targets) : $8bf2f9ddbdb26115$export$f664476fd67145ca(value) && ~value.indexOf("random(") ? $8bf2f9ddbdb26115$export$d5962a97e3cde94d(value) : value;
}, $8bf2f9ddbdb26115$var$_staggerTweenProps = $8bf2f9ddbdb26115$var$_callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", $8bf2f9ddbdb26115$var$_staggerPropsToSkip = {};
$8bf2f9ddbdb26115$export$f9000b814859f126($8bf2f9ddbdb26115$var$_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return $8bf2f9ddbdb26115$var$_staggerPropsToSkip[name] = 1;
});
var $8bf2f9ddbdb26115$export$208a41d6b4e37b97 = /*#__PURE__*/ function(_Animation2) {
    $8bf2f9ddbdb26115$var$_inheritsLoose(Tween, _Animation2);
    function Tween(targets, vars, position, skipInherit) {
        var _this3;
        if (typeof vars === "number") {
            position.duration = vars;
            vars = position;
            position = null;
        }
        _this3 = _Animation2.call(this, skipInherit ? vars : $8bf2f9ddbdb26115$var$_inheritDefaults(vars)) || this;
        var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || $8bf2f9ddbdb26115$var$_globalTimeline, parsedTargets = ($8bf2f9ddbdb26115$var$_isArray(targets) || $8bf2f9ddbdb26115$var$_isTypedArray(targets) ? $8bf2f9ddbdb26115$var$_isNumber(targets[0]) : "length" in vars) ? [
            targets
        ] : $8bf2f9ddbdb26115$export$45b10814cc054894(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
        _this3._targets = parsedTargets.length ? $8bf2f9ddbdb26115$var$_harness(parsedTargets) : $8bf2f9ddbdb26115$var$_warn("GSAP target " + targets + " not found. https://greensock.com", !$8bf2f9ddbdb26115$export$4922bee768729a77.nullTargetWarn) || [];
        _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property
        _this3._overwrite = overwrite;
        if (keyframes || stagger || $8bf2f9ddbdb26115$var$_isFuncOrString(duration) || $8bf2f9ddbdb26115$var$_isFuncOrString(delay)) {
            vars = _this3.vars;
            tl = _this3.timeline = new $8bf2f9ddbdb26115$export$e6a97ba2cae5bb94({
                data: "nested",
                defaults: defaults || {},
                targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
            }); // we need to store the targets because for staggers and keyframes, we end up creating an individual tween for each but function-based values need to know the index and the whole Array of targets.
            tl.kill();
            tl.parent = tl._dp = $8bf2f9ddbdb26115$var$_assertThisInitialized(_this3);
            tl._start = 0;
            if (stagger || $8bf2f9ddbdb26115$var$_isFuncOrString(duration) || $8bf2f9ddbdb26115$var$_isFuncOrString(delay)) {
                l = parsedTargets.length;
                staggerFunc = stagger && $8bf2f9ddbdb26115$export$f02a9ddbe4480f19(stagger);
                if ($8bf2f9ddbdb26115$var$_isObject(stagger)) {
                    //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
                    for(p in stagger)if (~$8bf2f9ddbdb26115$var$_staggerTweenProps.indexOf(p)) {
                        staggerVarsToMerge || (staggerVarsToMerge = {});
                        staggerVarsToMerge[p] = stagger[p];
                    }
                }
                for(i = 0; i < l; i++){
                    copy = $8bf2f9ddbdb26115$var$_copyExcluding(vars, $8bf2f9ddbdb26115$var$_staggerPropsToSkip);
                    copy.stagger = 0;
                    yoyoEase && (copy.yoyoEase = yoyoEase);
                    staggerVarsToMerge && $8bf2f9ddbdb26115$var$_merge(copy, staggerVarsToMerge);
                    curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.
                    copy.duration = +$8bf2f9ddbdb26115$var$_parseFuncOrString(duration, $8bf2f9ddbdb26115$var$_assertThisInitialized(_this3), i, curTarget, parsedTargets);
                    copy.delay = (+$8bf2f9ddbdb26115$var$_parseFuncOrString(delay, $8bf2f9ddbdb26115$var$_assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                    if (!stagger && l === 1 && copy.delay) {
                        // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
                        _this3._delay = delay = copy.delay;
                        _this3._start += delay;
                        copy.delay = 0;
                    }
                    tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
                    tl._ease = $8bf2f9ddbdb26115$var$_easeMap.none;
                }
                tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
            } else if (keyframes) {
                $8bf2f9ddbdb26115$var$_inheritDefaults($8bf2f9ddbdb26115$export$dc2b19673bb53610(tl.vars.defaults, {
                    ease: "none"
                }));
                tl._ease = $8bf2f9ddbdb26115$var$_parseEase(keyframes.ease || vars.ease || "none");
                var time = 0, a, kf, v;
                if ($8bf2f9ddbdb26115$var$_isArray(keyframes)) {
                    keyframes.forEach(function(frame) {
                        return tl.to(parsedTargets, frame, ">");
                    });
                    tl.duration(); // to ensure tl._dur is cached because we tap into it for performance purposes in the render() method.
                } else {
                    copy = {};
                    for(p in keyframes)p === "ease" || p === "easeEach" || $8bf2f9ddbdb26115$var$_parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
                    for(p in copy){
                        a = copy[p].sort(function(a, b) {
                            return a.t - b.t;
                        });
                        time = 0;
                        for(i = 0; i < a.length; i++){
                            kf = a[i];
                            v = {
                                ease: kf.e,
                                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                            };
                            v[p] = kf.v;
                            tl.to(parsedTargets, v, time);
                            time += v.duration;
                        }
                    }
                    tl.duration() < duration && tl.to({}, {
                        duration: duration - tl.duration()
                    }); // in case keyframes didn't go to 100%
                }
            }
            duration || _this3.duration(duration = tl.duration());
        } else _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
        if (overwrite === true && !$8bf2f9ddbdb26115$var$_suppressOverwrites) {
            $8bf2f9ddbdb26115$var$_overwritingTween = $8bf2f9ddbdb26115$var$_assertThisInitialized(_this3);
            $8bf2f9ddbdb26115$var$_globalTimeline.killTweensOf(parsedTargets);
            $8bf2f9ddbdb26115$var$_overwritingTween = 0;
        }
        $8bf2f9ddbdb26115$var$_addToTimeline(parent, $8bf2f9ddbdb26115$var$_assertThisInitialized(_this3), position);
        vars.reversed && _this3.reverse();
        vars.paused && _this3.paused(true);
        if (immediateRender || !duration && !keyframes && _this3._start === $8bf2f9ddbdb26115$var$_roundPrecise(parent._time) && $8bf2f9ddbdb26115$var$_isNotFalse(immediateRender) && $8bf2f9ddbdb26115$var$_hasNoPausedAncestors($8bf2f9ddbdb26115$var$_assertThisInitialized(_this3)) && parent.data !== "nested") {
            _this3._tTime = -$8bf2f9ddbdb26115$var$_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
            _this3.render(Math.max(0, -delay) || 0); //in case delay is negative
        }
        scrollTrigger && $8bf2f9ddbdb26115$var$_scrollTrigger($8bf2f9ddbdb26115$var$_assertThisInitialized(_this3), scrollTrigger);
        return _this3;
    }
    var _proto3 = Tween.prototype;
    _proto3.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - $8bf2f9ddbdb26115$var$_tinyNum && !isNegative ? tDur : totalTime < $8bf2f9ddbdb26115$var$_tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
        if (!dur) $8bf2f9ddbdb26115$var$_renderZeroDurationTween(this, totalTime, suppressEvents, force);
        else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
            //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
            time = tTime;
            timeline = this.timeline;
            if (this._repeat) {
                //adjust the time for repeats and yoyos
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && isNegative) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                time = $8bf2f9ddbdb26115$var$_roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                if (tTime === tDur) {
                    // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                    iteration = this._repeat;
                    time = dur;
                } else {
                    iteration = ~~(tTime / cycleDuration);
                    if (iteration && iteration === tTime / cycleDuration) {
                        time = dur;
                        iteration--;
                    }
                    time > dur && (time = dur);
                }
                isYoyo = this._yoyo && iteration & 1;
                if (isYoyo) {
                    yoyoEase = this._yEase;
                    time = dur - time;
                }
                prevIteration = $8bf2f9ddbdb26115$var$_animationCycle(this._tTime, cycleDuration);
                if (time === prevTime && !force && this._initted) {
                    //could be during the repeatDelay part. No need to render and fire callbacks.
                    this._tTime = tTime;
                    return this;
                }
                if (iteration !== prevIteration) {
                    timeline && this._yEase && $8bf2f9ddbdb26115$var$_propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality
                    if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                        this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.
                        this.render($8bf2f9ddbdb26115$var$_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
                    }
                }
            }
            if (!this._initted) {
                if ($8bf2f9ddbdb26115$var$_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
                    this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.
                    return this;
                }
                if (prevTime !== this._time) // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values.
                return this;
                if (dur !== this._dur) // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
                return this.render(totalTime, suppressEvents, force);
            }
            this._tTime = tTime;
            this._time = time;
            if (!this._act && this._ts) {
                this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
                this._lazy = 0;
            }
            this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
            if (this._from) this.ratio = ratio = 1 - ratio;
            if (time && !prevTime && !suppressEvents && !iteration) {
                $8bf2f9ddbdb26115$var$_callback(this, "onStart");
                if (this._tTime !== tTime) // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
                return this;
            }
            pt = this._pt;
            while(pt){
                pt.r(ratio, pt.d);
                pt = pt._next;
            }
            timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -$8bf2f9ddbdb26115$var$_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
            if (this._onUpdate && !suppressEvents) {
                isNegative && $8bf2f9ddbdb26115$var$_rewindStartAt(this, totalTime, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
                $8bf2f9ddbdb26115$var$_callback(this, "onUpdate");
            }
            this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && $8bf2f9ddbdb26115$var$_callback(this, "onRepeat");
            if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
                isNegative && !this._onUpdate && $8bf2f9ddbdb26115$var$_rewindStartAt(this, totalTime, true, true);
                (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && $8bf2f9ddbdb26115$var$_removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
                    // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
                    $8bf2f9ddbdb26115$var$_callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                    this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                }
            }
        }
        return this;
    };
    _proto3.targets = function targets() {
        return this._targets;
    };
    _proto3.invalidate = function invalidate(soft) {
        // "soft" gives us a way to clear out everything EXCEPT the recorded pre-"from" portion of from() tweens. Otherwise, for example, if you tween.progress(1).render(0, true true).invalidate(), the "from" values would persist and then on the next render, the from() tweens would initialize and the current value would match the "from" values, thus animate from the same value to the same value (no animation). We tap into this in ScrollTrigger's refresh() where we must push a tween to completion and then back again but honor its init state in case the tween is dependent on another tween further up on the page.
        (!soft || !this.vars.runBackwards) && (this._startAt = 0);
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
        this._ptLookup = [];
        this.timeline && this.timeline.invalidate(soft);
        return _Animation2.prototype.invalidate.call(this, soft);
    };
    _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
        $8bf2f9ddbdb26115$var$_tickerActive || $8bf2f9ddbdb26115$export$762ed8fbedb691e3.wake();
        this._ts || this.play();
        var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
        this._initted || $8bf2f9ddbdb26115$var$_initTween(this, time);
        ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
        // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
        // if (_isObject(property)) { // performance optimization
        // 	for (p in property) {
        // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
        // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
        // 		}
        // 	}
        // } else {
        if ($8bf2f9ddbdb26115$var$_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
         //}
        $8bf2f9ddbdb26115$var$_alignPlayhead(this, 0);
        this.parent || $8bf2f9ddbdb26115$var$_addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
        return this.render(0);
    };
    _proto3.kill = function kill(targets, vars) {
        if (vars === void 0) vars = "all";
        if (!targets && (!vars || vars === "all")) {
            this._lazy = this._pt = 0;
            return this.parent ? $8bf2f9ddbdb26115$var$_interrupt(this) : this;
        }
        if (this.timeline) {
            var tDur = this.timeline.totalDuration();
            this.timeline.killTweensOf(targets, vars, $8bf2f9ddbdb26115$var$_overwritingTween && $8bf2f9ddbdb26115$var$_overwritingTween.vars.overwrite !== true)._first || $8bf2f9ddbdb26115$var$_interrupt(this); // if nothing is left tweening, interrupt.
            this.parent && tDur !== this.timeline.totalDuration() && $8bf2f9ddbdb26115$var$_setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.
            return this;
        }
        var parsedTargets = this._targets, killingTargets = targets ? $8bf2f9ddbdb26115$export$45b10814cc054894(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
        if ((!vars || vars === "all") && $8bf2f9ddbdb26115$var$_arraysMatch(parsedTargets, killingTargets)) {
            vars === "all" && (this._pt = 0);
            return $8bf2f9ddbdb26115$var$_interrupt(this);
        }
        overwrittenProps = this._op = this._op || [];
        if (vars !== "all") {
            //so people can pass in a comma-delimited list of property names
            if ($8bf2f9ddbdb26115$export$f664476fd67145ca(vars)) {
                p = {};
                $8bf2f9ddbdb26115$export$f9000b814859f126(vars, function(name) {
                    return p[name] = 1;
                });
                vars = p;
            }
            vars = $8bf2f9ddbdb26115$var$_addAliasesToVars(parsedTargets, vars);
        }
        i = parsedTargets.length;
        while(i--)if (~killingTargets.indexOf(parsedTargets[i])) {
            curLookup = propTweenLookup[i];
            if (vars === "all") {
                overwrittenProps[i] = vars;
                props = curLookup;
                curOverwriteProps = {};
            } else {
                curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
                props = vars;
            }
            for(p in props){
                pt = curLookup && curLookup[p];
                if (pt) {
                    if (!("kill" in pt.d) || pt.d.kill(p) === true) $8bf2f9ddbdb26115$export$cd008aa6cd8844e3(this, pt, "_pt");
                    delete curLookup[p];
                }
                if (curOverwriteProps !== "all") curOverwriteProps[p] = 1;
            }
        }
        this._initted && !this._pt && firstPT && $8bf2f9ddbdb26115$var$_interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
        return this;
    };
    Tween.to = function to(targets, vars) {
        return new Tween(targets, vars, arguments[2]);
    };
    Tween.from = function from(targets, vars) {
        return $8bf2f9ddbdb26115$var$_createTweenType(1, arguments);
    };
    Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
        return new Tween(callback, 0, {
            immediateRender: false,
            lazy: false,
            overwrite: false,
            delay: delay,
            onComplete: callback,
            onReverseComplete: callback,
            onCompleteParams: params,
            onReverseCompleteParams: params,
            callbackScope: scope
        }); // we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
    };
    Tween.fromTo = function fromTo(targets, fromVars, toVars) {
        return $8bf2f9ddbdb26115$var$_createTweenType(2, arguments);
    };
    Tween.set = function set(targets, vars) {
        vars.duration = 0;
        vars.repeatDelay || (vars.repeat = 0);
        return new Tween(targets, vars);
    };
    Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        return $8bf2f9ddbdb26115$var$_globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween;
}($8bf2f9ddbdb26115$export$c35d437ae5945fcd);
$8bf2f9ddbdb26115$export$dc2b19673bb53610($8bf2f9ddbdb26115$export$208a41d6b4e37b97.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.
$8bf2f9ddbdb26115$export$f9000b814859f126("staggerTo,staggerFrom,staggerFromTo", function(name) {
    $8bf2f9ddbdb26115$export$208a41d6b4e37b97[name] = function() {
        var tl = new $8bf2f9ddbdb26115$export$e6a97ba2cae5bb94(), params = $8bf2f9ddbdb26115$var$_slice.call(arguments, 0);
        params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
        return tl[name].apply(tl, params);
    };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */ var $8bf2f9ddbdb26115$var$_setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
}, $8bf2f9ddbdb26115$var$_setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
}, $8bf2f9ddbdb26115$var$_setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
}, $8bf2f9ddbdb26115$var$_setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
}, $8bf2f9ddbdb26115$export$d60fbc1e0278aaf0 = function _getSetter(target, property) {
    return $8bf2f9ddbdb26115$var$_isFunction(target[property]) ? $8bf2f9ddbdb26115$var$_setterFunc : $8bf2f9ddbdb26115$export$a8178c063a9fd3a1(target[property]) && target.setAttribute ? $8bf2f9ddbdb26115$var$_setterAttribute : $8bf2f9ddbdb26115$var$_setterPlain;
}, $8bf2f9ddbdb26115$var$_renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
}, $8bf2f9ddbdb26115$var$_renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
}, $8bf2f9ddbdb26115$export$c5bc8e04394ecb2 = function _renderComplexString(ratio, data) {
    var pt = data._pt, s = "";
    if (!ratio && data.b) //b = beginning string
    s = data.b;
    else if (ratio === 1 && data.e) //e = ending string
    s = data.e;
    else {
        while(pt){
            s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.
            pt = pt._next;
        }
        s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
    }
    data.set(data.t, data.p, s, data);
}, $8bf2f9ddbdb26115$var$_renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;
    while(pt){
        pt.r(ratio, pt.d);
        pt = pt._next;
    }
}, $8bf2f9ddbdb26115$var$_addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt, next;
    while(pt){
        next = pt._next;
        pt.p === property && pt.modifier(modifier, tween, target);
        pt = next;
    }
}, $8bf2f9ddbdb26115$var$_killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while(pt){
        next = pt._next;
        if (pt.p === property && !pt.op || pt.op === property) $8bf2f9ddbdb26115$export$cd008aa6cd8844e3(this, pt, "_pt");
        else if (!pt.dep) hasNonDependentRemaining = 1;
        pt = next;
    }
    return !hasNonDependentRemaining;
}, $8bf2f9ddbdb26115$var$_setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
}, $8bf2f9ddbdb26115$export$eed5824f53346d57 = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt, next, pt2, first, last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)
    while(pt){
        next = pt._next;
        pt2 = first;
        while(pt2 && pt2.pr > pt.pr)pt2 = pt2._next;
        if (pt._prev = pt2 ? pt2._prev : last) pt._prev._next = pt;
        else first = pt;
        if (pt._next = pt2) pt2._prev = pt;
        else last = pt;
        pt = next;
    }
    parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)
var $8bf2f9ddbdb26115$export$3a67f7f44b1e838a = /*#__PURE__*/ function() {
    function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
        this.t = target;
        this.s = start;
        this.c = change;
        this.p = prop;
        this.r = renderer || $8bf2f9ddbdb26115$var$_renderPlain;
        this.d = data || this;
        this.set = setter || $8bf2f9ddbdb26115$var$_setterPlain;
        this.pr = priority || 0;
        this._next = next;
        if (next) next._prev = this;
    }
    var _proto4 = PropTween.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
        this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)
        this.set = $8bf2f9ddbdb26115$var$_setterWithModifier;
        this.m = func;
        this.mt = target; //modifier target
        this.tween = tween;
    };
    return PropTween;
}(); //Initialization tasks
$8bf2f9ddbdb26115$export$f9000b814859f126($8bf2f9ddbdb26115$var$_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
    return $8bf2f9ddbdb26115$var$_reservedProps[name] = 1;
});
$8bf2f9ddbdb26115$var$_globals.TweenMax = $8bf2f9ddbdb26115$var$_globals.TweenLite = $8bf2f9ddbdb26115$export$208a41d6b4e37b97;
$8bf2f9ddbdb26115$var$_globals.TimelineLite = $8bf2f9ddbdb26115$var$_globals.TimelineMax = $8bf2f9ddbdb26115$export$e6a97ba2cae5bb94;
$8bf2f9ddbdb26115$var$_globalTimeline = new $8bf2f9ddbdb26115$export$e6a97ba2cae5bb94({
    sortChildren: false,
    defaults: $8bf2f9ddbdb26115$var$_defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
});
$8bf2f9ddbdb26115$export$4922bee768729a77.stringFilter = $8bf2f9ddbdb26115$export$7eb2e5eb5eeb96a4;
var $8bf2f9ddbdb26115$var$_media = [], $8bf2f9ddbdb26115$var$_listeners = {}, $8bf2f9ddbdb26115$var$_emptyArray = [], $8bf2f9ddbdb26115$var$_lastMediaTime = 0, $8bf2f9ddbdb26115$var$_contextID = 0, $8bf2f9ddbdb26115$var$_dispatch = function _dispatch(type) {
    return ($8bf2f9ddbdb26115$var$_listeners[type] || $8bf2f9ddbdb26115$var$_emptyArray).map(function(f) {
        return f();
    });
}, $8bf2f9ddbdb26115$var$_onMediaChange = function _onMediaChange() {
    var time = Date.now(), matches = [];
    if (time - $8bf2f9ddbdb26115$var$_lastMediaTime > 2) {
        $8bf2f9ddbdb26115$var$_dispatch("matchMediaInit");
        $8bf2f9ddbdb26115$var$_media.forEach(function(c) {
            var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
            for(p in queries){
                match = $8bf2f9ddbdb26115$var$_win.matchMedia(queries[p]).matches; // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.
                match && (anyMatch = 1);
                if (match !== conditions[p]) {
                    conditions[p] = match;
                    toggled = 1;
                }
            }
            if (toggled) {
                c.revert();
                anyMatch && matches.push(c);
            }
        });
        $8bf2f9ddbdb26115$var$_dispatch("matchMediaRevert");
        matches.forEach(function(c) {
            return c.onMatch(c);
        });
        $8bf2f9ddbdb26115$var$_lastMediaTime = time;
        $8bf2f9ddbdb26115$var$_dispatch("matchMedia");
    }
};
var $8bf2f9ddbdb26115$var$Context = /*#__PURE__*/ function() {
    function Context(func, scope) {
        this.selector = scope && $8bf2f9ddbdb26115$export$aea217a45095ce11(scope);
        this.data = [];
        this._r = []; // returned/cleanup functions
        this.isReverted = false;
        this.id = $8bf2f9ddbdb26115$var$_contextID++; // to work around issues that frameworks like Vue cause by making things into Proxies which make it impossible to do something like _media.indexOf(this) because "this" would no longer refer to the Context instance itself - it'd refer to a Proxy! We needed a way to identify the context uniquely
        func && this.add(func);
    }
    var _proto5 = Context.prototype;
    _proto5.add = function add(name, func, scope) {
        // possible future addition if we need the ability to add() an animation to a context and for whatever reason cannot create that animation inside of a context.add(() => {...}) function.
        // if (name && _isFunction(name.revert)) {
        // 	this.data.push(name);
        // 	return (name._ctx = this);
        // }
        if ($8bf2f9ddbdb26115$var$_isFunction(name)) {
            scope = func;
            func = name;
            name = $8bf2f9ddbdb26115$var$_isFunction;
        }
        var self = this, f = function f() {
            var prev = $8bf2f9ddbdb26115$var$_context, prevSelector = self.selector, result;
            prev && prev !== self && prev.data.push(self);
            scope && (self.selector = $8bf2f9ddbdb26115$export$aea217a45095ce11(scope));
            $8bf2f9ddbdb26115$var$_context = self;
            result = func.apply(self, arguments);
            $8bf2f9ddbdb26115$var$_isFunction(result) && self._r.push(result);
            $8bf2f9ddbdb26115$var$_context = prev;
            self.selector = prevSelector;
            self.isReverted = false;
            return result;
        };
        self.last = f;
        return name === $8bf2f9ddbdb26115$var$_isFunction ? f(self) : name ? self[name] = f : f;
    };
    _proto5.ignore = function ignore(func) {
        var prev = $8bf2f9ddbdb26115$var$_context;
        $8bf2f9ddbdb26115$var$_context = null;
        func(this);
        $8bf2f9ddbdb26115$var$_context = prev;
    };
    _proto5.getTweens = function getTweens() {
        var a = [];
        this.data.forEach(function(e) {
            return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof $8bf2f9ddbdb26115$export$208a41d6b4e37b97 && !(e.parent && e.parent.data === "nested") && a.push(e);
        });
        return a;
    };
    _proto5.clear = function clear() {
        this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill(revert, matchMedia) {
        var _this4 = this;
        if (revert) {
            var tweens = this.getTweens();
            this.data.forEach(function(t) {
                // Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
                if (t.data === "isFlip") {
                    t.revert();
                    t.getChildren(true, true, false).forEach(function(tween) {
                        return tweens.splice(tweens.indexOf(tween), 1);
                    });
                }
            }); // save as an object so that we can cache the globalTime for each tween to optimize performance during the sort
            tweens.map(function(t) {
                return {
                    g: t.globalTime(0),
                    t: t
                };
            }).sort(function(a, b) {
                return b.g - a.g || -1;
            }).forEach(function(o) {
                return o.t.revert(revert);
            }); // note: all of the _startAt tweens should be reverted in reverse order that they were created, and they'll all have the same globalTime (-1) so the " || -1" in the sort keeps the order properly.
            this.data.forEach(function(e) {
                return e instanceof $8bf2f9ddbdb26115$export$e6a97ba2cae5bb94 ? e.data !== "nested" && e.kill() : !(e instanceof $8bf2f9ddbdb26115$export$208a41d6b4e37b97) && e.revert && e.revert(revert);
            });
            this._r.forEach(function(f) {
                return f(revert, _this4);
            });
            this.isReverted = true;
        } else this.data.forEach(function(e) {
            return e.kill && e.kill();
        });
        this.clear();
        if (matchMedia) {
            var i = $8bf2f9ddbdb26115$var$_media.length;
            while(i--)// previously, we checked _media.indexOf(this), but some frameworks like Vue enforce Proxy objects that make it impossible to get the proper result that way, so we must use a unique ID number instead.
            $8bf2f9ddbdb26115$var$_media[i].id === this.id && $8bf2f9ddbdb26115$var$_media.splice(i, 1);
        }
    };
    _proto5.revert = function revert(config) {
        this.kill(config || {});
    };
    return Context;
}();
var $8bf2f9ddbdb26115$var$MatchMedia = /*#__PURE__*/ function() {
    function MatchMedia(scope) {
        this.contexts = [];
        this.scope = scope;
    }
    var _proto6 = MatchMedia.prototype;
    _proto6.add = function add(conditions, func, scope) {
        $8bf2f9ddbdb26115$var$_isObject(conditions) || (conditions = {
            matches: conditions
        });
        var context = new $8bf2f9ddbdb26115$var$Context(0, scope || this.scope), cond = context.conditions = {}, mq, p, active;
        $8bf2f9ddbdb26115$var$_context && !context.selector && (context.selector = $8bf2f9ddbdb26115$var$_context.selector); // in case a context is created inside a context. Like a gsap.matchMedia() that's inside a scoped gsap.context()
        this.contexts.push(context);
        func = context.add("onMatch", func);
        context.queries = conditions;
        for(p in conditions)if (p === "all") active = 1;
        else {
            mq = $8bf2f9ddbdb26115$var$_win.matchMedia(conditions[p]);
            if (mq) {
                $8bf2f9ddbdb26115$var$_media.indexOf(context) < 0 && $8bf2f9ddbdb26115$var$_media.push(context);
                (cond[p] = mq.matches) && (active = 1);
                mq.addListener ? mq.addListener($8bf2f9ddbdb26115$var$_onMediaChange) : mq.addEventListener("change", $8bf2f9ddbdb26115$var$_onMediaChange);
            }
        }
        active && func(context);
        return this;
    } // refresh() {
    ;
    _proto6.revert = function revert(config) {
        this.kill(config || {});
    };
    _proto6.kill = function kill(revert) {
        this.contexts.forEach(function(c) {
            return c.kill(revert, true);
        });
    };
    return MatchMedia;
}();
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */ var $8bf2f9ddbdb26115$var$_gsap = {
    registerPlugin: function registerPlugin() {
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        args.forEach(function(config) {
            return $8bf2f9ddbdb26115$var$_createPlugin(config);
        });
    },
    timeline: function timeline(vars) {
        return new $8bf2f9ddbdb26115$export$e6a97ba2cae5bb94(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
        return $8bf2f9ddbdb26115$var$_globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
        $8bf2f9ddbdb26115$export$f664476fd67145ca(target) && (target = $8bf2f9ddbdb26115$export$45b10814cc054894(target)[0]); //in case selector text or an array is passed in
        var getter = $8bf2f9ddbdb26115$export$8b9be379d2de2a39(target || {}).get, format = unit ? $8bf2f9ddbdb26115$var$_passThrough : $8bf2f9ddbdb26115$var$_numericIfPossible;
        unit === "native" && (unit = "");
        return !target ? target : !property ? function(property, unit, uncache) {
            return format(($8bf2f9ddbdb26115$export$d305d8ec5d7c26b8[property] && $8bf2f9ddbdb26115$export$d305d8ec5d7c26b8[property].get || getter)(target, property, unit, uncache));
        } : format(($8bf2f9ddbdb26115$export$d305d8ec5d7c26b8[property] && $8bf2f9ddbdb26115$export$d305d8ec5d7c26b8[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
        target = $8bf2f9ddbdb26115$export$45b10814cc054894(target);
        if (target.length > 1) {
            var setters = target.map(function(t) {
                return $8bf2f9ddbdb26115$export$99ee26438460406a.quickSetter(t, property, unit);
            }), l = setters.length;
            return function(value) {
                var i = l;
                while(i--)setters[i](value);
            };
        }
        target = target[0] || {};
        var Plugin = $8bf2f9ddbdb26115$export$d305d8ec5d7c26b8[property], cache = $8bf2f9ddbdb26115$export$8b9be379d2de2a39(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, // in case it's an alias, like "rotate" for "rotation".
        setter = Plugin ? function(value) {
            var p = new Plugin();
            $8bf2f9ddbdb26115$var$_quickTween._pt = 0;
            p.init(target, unit ? value + unit : value, $8bf2f9ddbdb26115$var$_quickTween, 0, [
                target
            ]);
            p.render(1, p);
            $8bf2f9ddbdb26115$var$_quickTween._pt && $8bf2f9ddbdb26115$var$_renderPropTweens(1, $8bf2f9ddbdb26115$var$_quickTween);
        } : cache.set(target, p);
        return Plugin ? setter : function(value) {
            return setter(target, p, unit ? value + unit : value, cache, 1);
        };
    },
    quickTo: function quickTo(target, property, vars) {
        var _merge2;
        var tween = $8bf2f9ddbdb26115$export$99ee26438460406a.to(target, $8bf2f9ddbdb26115$var$_merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})), func = function func(value, start, startIsRelative) {
            return tween.resetTo(property, value, start, startIsRelative);
        };
        func.tween = tween;
        return func;
    },
    isTweening: function isTweening(targets) {
        return $8bf2f9ddbdb26115$var$_globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
        value && value.ease && (value.ease = $8bf2f9ddbdb26115$var$_parseEase(value.ease, $8bf2f9ddbdb26115$var$_defaults.ease));
        return $8bf2f9ddbdb26115$var$_mergeDeep($8bf2f9ddbdb26115$var$_defaults, value || {});
    },
    config: function config(value) {
        return $8bf2f9ddbdb26115$var$_mergeDeep($8bf2f9ddbdb26115$export$4922bee768729a77, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
        var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
        (plugins || "").split(",").forEach(function(pluginName) {
            return pluginName && !$8bf2f9ddbdb26115$export$d305d8ec5d7c26b8[pluginName] && !$8bf2f9ddbdb26115$var$_globals[pluginName] && $8bf2f9ddbdb26115$var$_warn(name + " effect requires " + pluginName + " plugin.");
        });
        $8bf2f9ddbdb26115$var$_effects[name] = function(targets, vars, tl) {
            return effect($8bf2f9ddbdb26115$export$45b10814cc054894(targets), $8bf2f9ddbdb26115$export$dc2b19673bb53610(vars || {}, defaults), tl);
        };
        if (extendTimeline) $8bf2f9ddbdb26115$export$e6a97ba2cae5bb94.prototype[name] = function(targets, vars, position) {
            return this.add($8bf2f9ddbdb26115$var$_effects[name](targets, $8bf2f9ddbdb26115$var$_isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
    },
    registerEase: function registerEase(name, ease) {
        $8bf2f9ddbdb26115$var$_easeMap[name] = $8bf2f9ddbdb26115$var$_parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
        return arguments.length ? $8bf2f9ddbdb26115$var$_parseEase(ease, defaultEase) : $8bf2f9ddbdb26115$var$_easeMap;
    },
    getById: function getById(id) {
        return $8bf2f9ddbdb26115$var$_globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
        if (vars === void 0) vars = {};
        var tl = new $8bf2f9ddbdb26115$export$e6a97ba2cae5bb94(vars), child, next;
        tl.smoothChildTiming = $8bf2f9ddbdb26115$var$_isNotFalse(vars.smoothChildTiming);
        $8bf2f9ddbdb26115$var$_globalTimeline.remove(tl);
        tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).
        tl._time = tl._tTime = $8bf2f9ddbdb26115$var$_globalTimeline._time;
        child = $8bf2f9ddbdb26115$var$_globalTimeline._first;
        while(child){
            next = child._next;
            if (includeDelayedCalls || !(!child._dur && child instanceof $8bf2f9ddbdb26115$export$208a41d6b4e37b97 && child.vars.onComplete === child._targets[0])) $8bf2f9ddbdb26115$var$_addToTimeline(tl, child, child._start - child._delay);
            child = next;
        }
        $8bf2f9ddbdb26115$var$_addToTimeline($8bf2f9ddbdb26115$var$_globalTimeline, tl, 0);
        return tl;
    },
    context: function context(func, scope) {
        return func ? new $8bf2f9ddbdb26115$var$Context(func, scope) : $8bf2f9ddbdb26115$var$_context;
    },
    matchMedia: function matchMedia(scope) {
        return new $8bf2f9ddbdb26115$var$MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
        return $8bf2f9ddbdb26115$var$_media.forEach(function(c) {
            var cond = c.conditions, found, p;
            for(p in cond)if (cond[p]) {
                cond[p] = false;
                found = 1;
            }
            found && c.revert();
        }) || $8bf2f9ddbdb26115$var$_onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
        var a = $8bf2f9ddbdb26115$var$_listeners[type] || ($8bf2f9ddbdb26115$var$_listeners[type] = []);
        ~a.indexOf(callback) || a.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
        var a = $8bf2f9ddbdb26115$var$_listeners[type], i = a && a.indexOf(callback);
        i >= 0 && a.splice(i, 1);
    },
    utils: {
        wrap: $8bf2f9ddbdb26115$export$4997ffc0176396a6,
        wrapYoyo: $8bf2f9ddbdb26115$export$cfc0b067273edc55,
        distribute: $8bf2f9ddbdb26115$export$f02a9ddbe4480f19,
        random: $8bf2f9ddbdb26115$export$4385e60b38654f68,
        snap: $8bf2f9ddbdb26115$export$51a0620f7a28532b,
        normalize: $8bf2f9ddbdb26115$export$a3295358bff77e,
        getUnit: $8bf2f9ddbdb26115$export$65f2564e9a9b9222,
        clamp: $8bf2f9ddbdb26115$export$7d15b64cf5a3a4c4,
        splitColor: $8bf2f9ddbdb26115$export$73d6f35be992df24,
        toArray: $8bf2f9ddbdb26115$export$45b10814cc054894,
        selector: $8bf2f9ddbdb26115$export$aea217a45095ce11,
        mapRange: $8bf2f9ddbdb26115$export$f65a7599bbc6b121,
        pipe: $8bf2f9ddbdb26115$export$a4627e546088548d,
        unitize: $8bf2f9ddbdb26115$export$d7502930aa5492de,
        interpolate: $8bf2f9ddbdb26115$export$89e29e4ab65e70a9,
        shuffle: $8bf2f9ddbdb26115$export$448332262467e042
    },
    install: $8bf2f9ddbdb26115$var$_install,
    effects: $8bf2f9ddbdb26115$var$_effects,
    ticker: $8bf2f9ddbdb26115$export$762ed8fbedb691e3,
    updateRoot: $8bf2f9ddbdb26115$export$e6a97ba2cae5bb94.updateRoot,
    plugins: $8bf2f9ddbdb26115$export$d305d8ec5d7c26b8,
    globalTimeline: $8bf2f9ddbdb26115$var$_globalTimeline,
    core: {
        PropTween: $8bf2f9ddbdb26115$export$3a67f7f44b1e838a,
        globals: $8bf2f9ddbdb26115$var$_addGlobal,
        Tween: $8bf2f9ddbdb26115$export$208a41d6b4e37b97,
        Timeline: $8bf2f9ddbdb26115$export$e6a97ba2cae5bb94,
        Animation: $8bf2f9ddbdb26115$export$c35d437ae5945fcd,
        getCache: $8bf2f9ddbdb26115$export$8b9be379d2de2a39,
        _removeLinkedListItem: $8bf2f9ddbdb26115$export$cd008aa6cd8844e3,
        reverting: function reverting() {
            return $8bf2f9ddbdb26115$var$_reverting;
        },
        context: function context(toAdd) {
            if (toAdd && $8bf2f9ddbdb26115$var$_context) {
                $8bf2f9ddbdb26115$var$_context.data.push(toAdd);
                toAdd._ctx = $8bf2f9ddbdb26115$var$_context;
            }
            return $8bf2f9ddbdb26115$var$_context;
        },
        suppressOverwrites: function suppressOverwrites(value) {
            return $8bf2f9ddbdb26115$var$_suppressOverwrites = value;
        }
    }
};
$8bf2f9ddbdb26115$export$f9000b814859f126("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return $8bf2f9ddbdb26115$var$_gsap[name] = $8bf2f9ddbdb26115$export$208a41d6b4e37b97[name];
});
$8bf2f9ddbdb26115$export$762ed8fbedb691e3.add($8bf2f9ddbdb26115$export$e6a97ba2cae5bb94.updateRoot);
$8bf2f9ddbdb26115$var$_quickTween = $8bf2f9ddbdb26115$var$_gsap.to({}, {
    duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------
var $8bf2f9ddbdb26115$var$_getPluginPropTween = function _getPluginPropTween(plugin, prop) {
    var pt = plugin._pt;
    while(pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop)pt = pt._next;
    return pt;
}, $8bf2f9ddbdb26115$var$_addModifiers = function _addModifiers(tween, modifiers) {
    var targets = tween._targets, p, i, pt;
    for(p in modifiers){
        i = targets.length;
        while(i--){
            pt = tween._ptLookup[i][p];
            if (pt && (pt = pt.d)) {
                if (pt._pt) // is a plugin
                pt = $8bf2f9ddbdb26115$var$_getPluginPropTween(pt, p);
                pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
            }
        }
    }
}, $8bf2f9ddbdb26115$var$_buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
    return {
        name: name,
        rawVars: 1,
        //don't pre-process function-based values or "random()" strings.
        init: function init(target, vars, tween) {
            tween._onInit = function(tween) {
                var temp, p;
                if ($8bf2f9ddbdb26115$export$f664476fd67145ca(vars)) {
                    temp = {};
                    $8bf2f9ddbdb26115$export$f9000b814859f126(vars, function(name) {
                        return temp[name] = 1;
                    }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.
                    vars = temp;
                }
                if (modifier) {
                    temp = {};
                    for(p in vars)temp[p] = modifier(vars[p]);
                    vars = temp;
                }
                $8bf2f9ddbdb26115$var$_addModifiers(tween, vars);
            };
        }
    };
}; //register core plugins
var $8bf2f9ddbdb26115$export$99ee26438460406a = $8bf2f9ddbdb26115$var$_gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
        var p, pt, v;
        this.tween = tween;
        for(p in vars){
            v = target.getAttribute(p) || "";
            pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
            pt.op = p;
            pt.b = v; // record the beginning value so we can revert()
            this._props.push(p);
        }
    },
    render: function render(ratio, data) {
        var pt = data._pt;
        while(pt){
            $8bf2f9ddbdb26115$var$_reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d); // if reverting, go back to the original (pt.b)
            pt = pt._next;
        }
    }
}, {
    name: "endArray",
    init: function init(target, value) {
        var i = value.length;
        while(i--)this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
}, $8bf2f9ddbdb26115$var$_buildModifierPlugin("roundProps", $8bf2f9ddbdb26115$export$dd12390e6b265a17), $8bf2f9ddbdb26115$var$_buildModifierPlugin("modifiers"), $8bf2f9ddbdb26115$var$_buildModifierPlugin("snap", $8bf2f9ddbdb26115$export$51a0620f7a28532b)) || $8bf2f9ddbdb26115$var$_gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.
$8bf2f9ddbdb26115$export$208a41d6b4e37b97.version = $8bf2f9ddbdb26115$export$e6a97ba2cae5bb94.version = $8bf2f9ddbdb26115$export$99ee26438460406a.version = "3.12.1";
$8bf2f9ddbdb26115$var$_coreReady = 1;
$8bf2f9ddbdb26115$var$_windowExists() && $8bf2f9ddbdb26115$var$_wake();
var $8bf2f9ddbdb26115$export$2fae1e8613537d5f = $8bf2f9ddbdb26115$var$_easeMap.Power0, $8bf2f9ddbdb26115$export$5d84ab4efbecec39 = $8bf2f9ddbdb26115$var$_easeMap.Power1, $8bf2f9ddbdb26115$export$d8c694b7490ad65d = $8bf2f9ddbdb26115$var$_easeMap.Power2, $8bf2f9ddbdb26115$export$acebdf2b184a0b6f = $8bf2f9ddbdb26115$var$_easeMap.Power3, $8bf2f9ddbdb26115$export$42e40a141003d2f0 = $8bf2f9ddbdb26115$var$_easeMap.Power4, $8bf2f9ddbdb26115$export$cff00ccf6e2392de = $8bf2f9ddbdb26115$var$_easeMap.Linear, $8bf2f9ddbdb26115$export$7005c9eb6671414d = $8bf2f9ddbdb26115$var$_easeMap.Quad, $8bf2f9ddbdb26115$export$755261d5a1567778 = $8bf2f9ddbdb26115$var$_easeMap.Cubic, $8bf2f9ddbdb26115$export$daf531446cad3d2a = $8bf2f9ddbdb26115$var$_easeMap.Quart, $8bf2f9ddbdb26115$export$4c407d38ce8ad8cc = $8bf2f9ddbdb26115$var$_easeMap.Quint, $8bf2f9ddbdb26115$export$f301627d437cff88 = $8bf2f9ddbdb26115$var$_easeMap.Strong, $8bf2f9ddbdb26115$export$56ebabebb04a9ca9 = $8bf2f9ddbdb26115$var$_easeMap.Elastic, $8bf2f9ddbdb26115$export$25e48ac541203d4a = $8bf2f9ddbdb26115$var$_easeMap.Back, $8bf2f9ddbdb26115$export$f7a11c7543d81853 = $8bf2f9ddbdb26115$var$_easeMap.SteppedEase, $8bf2f9ddbdb26115$export$d20e79fdc3899e95 = $8bf2f9ddbdb26115$var$_easeMap.Bounce, $8bf2f9ddbdb26115$export$bed2d20ad96b784c = $8bf2f9ddbdb26115$var$_easeMap.Sine, $8bf2f9ddbdb26115$export$41e9d1ff1a2fb15a = $8bf2f9ddbdb26115$var$_easeMap.Expo, $8bf2f9ddbdb26115$export$ce49a57dd865b86c = $8bf2f9ddbdb26115$var$_easeMap.Circ;


/*!
 * CSSPlugin 3.12.1
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ 
var $8e515b832afe5669$var$_win, $8e515b832afe5669$var$_doc, $8e515b832afe5669$var$_docElement, $8e515b832afe5669$var$_pluginInitted, $8e515b832afe5669$var$_tempDiv, $8e515b832afe5669$var$_tempDivStyler, $8e515b832afe5669$var$_recentSetterPlugin, $8e515b832afe5669$var$_reverting, $8e515b832afe5669$var$_windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, $8e515b832afe5669$var$_transformProps = {}, $8e515b832afe5669$var$_RAD2DEG = 180 / Math.PI, $8e515b832afe5669$var$_DEG2RAD = Math.PI / 180, $8e515b832afe5669$var$_atan2 = Math.atan2, $8e515b832afe5669$var$_bigNum = 1e8, $8e515b832afe5669$var$_capsExp = /([A-Z])/g, $8e515b832afe5669$var$_horizontalExp = /(left|right|width|margin|padding|x)/i, $8e515b832afe5669$var$_complexExp = /[\s,\(]\S/, $8e515b832afe5669$var$_propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, $8e515b832afe5669$var$_renderCSSProp = function _renderCSSProp(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
}, $8e515b832afe5669$var$_renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
}, $8e515b832afe5669$var$_renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
}, //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
$8e515b832afe5669$var$_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : .5)) + data.u, data);
}, $8e515b832afe5669$var$_renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
}, $8e515b832afe5669$var$_renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
}, $8e515b832afe5669$var$_setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
}, $8e515b832afe5669$var$_setterCSSProp = function _setterCSSProp(target, property, value) {
    return target.style.setProperty(property, value);
}, $8e515b832afe5669$var$_setterTransform = function _setterTransform(target, property, value) {
    return target._gsap[property] = value;
}, $8e515b832afe5669$var$_setterScale = function _setterScale(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
}, $8e515b832afe5669$var$_setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
}, $8e515b832afe5669$var$_setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
}, $8e515b832afe5669$var$_transformProp = "transform", $8e515b832afe5669$var$_transformOriginProp = $8e515b832afe5669$var$_transformProp + "Origin", $8e515b832afe5669$var$_saveStyle = function _saveStyle(property, isNotCSS) {
    var _this = this;
    var target = this.target, style = target.style;
    if (property in $8e515b832afe5669$var$_transformProps && style) {
        this.tfm = this.tfm || {};
        if (property !== "transform") {
            property = $8e515b832afe5669$var$_propertyAliases[property] || property;
            ~property.indexOf(",") ? property.split(",").forEach(function(a) {
                return _this.tfm[a] = $8e515b832afe5669$var$_get(target, a);
            }) : this.tfm[property] = target._gsap.x ? target._gsap[property] : $8e515b832afe5669$var$_get(target, property); // note: scale would map to "scaleX,scaleY", thus we loop and apply them both.
        } else return $8e515b832afe5669$var$_propertyAliases.transform.split(",").forEach(function(p) {
            return _saveStyle.call(_this, p, isNotCSS);
        });
        if (this.props.indexOf($8e515b832afe5669$var$_transformProp) >= 0) return;
        if (target._gsap.svg) {
            this.svgo = target.getAttribute("data-svg-origin");
            this.props.push($8e515b832afe5669$var$_transformOriginProp, isNotCSS, "");
        }
        property = $8e515b832afe5669$var$_transformProp;
    }
    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
}, $8e515b832afe5669$var$_removeIndependentTransforms = function _removeIndependentTransforms(style) {
    if (style.translate) {
        style.removeProperty("translate");
        style.removeProperty("scale");
        style.removeProperty("rotate");
    }
}, $8e515b832afe5669$var$_revertStyle = function _revertStyle() {
    var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
    for(i = 0; i < props.length; i += 3)// stored like this: property, isNotCSS, value
    props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace($8e515b832afe5669$var$_capsExp, "-$1").toLowerCase());
    if (this.tfm) {
        for(p in this.tfm)cache[p] = this.tfm[p];
        if (cache.svg) {
            cache.renderTransform();
            target.setAttribute("data-svg-origin", this.svgo || "");
        }
        i = $8e515b832afe5669$var$_reverting();
        if ((!i || !i.isStart) && !style[$8e515b832afe5669$var$_transformProp]) {
            $8e515b832afe5669$var$_removeIndependentTransforms(style);
            cache.uncache = 1; // if it's a startAt that's being reverted in the _initTween() of the core, we don't need to uncache transforms. This is purely a performance optimization.
        }
    }
}, $8e515b832afe5669$var$_getStyleSaver = function _getStyleSaver(target, properties) {
    var saver = {
        target: target,
        props: [],
        revert: $8e515b832afe5669$var$_revertStyle,
        save: $8e515b832afe5669$var$_saveStyle
    };
    target._gsap || (0, $8bf2f9ddbdb26115$export$99ee26438460406a).core.getCache(target); // just make sure there's a _gsap cache defined because we read from it in _saveStyle() and it's more efficient to just check it here once.
    properties && properties.split(",").forEach(function(p) {
        return saver.save(p);
    });
    return saver;
}, $8e515b832afe5669$var$_supports3D, $8e515b832afe5669$export$a232bb0480ae674a = function _createElement(type, ns) {
    var e = $8e515b832afe5669$var$_doc.createElementNS ? $8e515b832afe5669$var$_doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : $8e515b832afe5669$var$_doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.
    return e.style ? e : $8e515b832afe5669$var$_doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
}, $8e515b832afe5669$var$_getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace($8e515b832afe5669$var$_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, $8e515b832afe5669$export$8cbef5dd49a09c8b(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
}, $8e515b832afe5669$var$_prefixes = "O,Moz,ms,Ms,Webkit".split(","), $8e515b832afe5669$export$8cbef5dd49a09c8b = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || $8e515b832afe5669$var$_tempDiv, s = e.style, i = 5;
    if (property in s && !preferPrefix) return property;
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while(i-- && !($8e515b832afe5669$var$_prefixes[i] + property in s));
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? $8e515b832afe5669$var$_prefixes[i] : "") + property;
}, $8e515b832afe5669$var$_initCore = function _initCore() {
    if ($8e515b832afe5669$var$_windowExists() && window.document) {
        $8e515b832afe5669$var$_win = window;
        $8e515b832afe5669$var$_doc = $8e515b832afe5669$var$_win.document;
        $8e515b832afe5669$var$_docElement = $8e515b832afe5669$var$_doc.documentElement;
        $8e515b832afe5669$var$_tempDiv = $8e515b832afe5669$export$a232bb0480ae674a("div") || {
            style: {}
        };
        $8e515b832afe5669$var$_tempDivStyler = $8e515b832afe5669$export$a232bb0480ae674a("div");
        $8e515b832afe5669$var$_transformProp = $8e515b832afe5669$export$8cbef5dd49a09c8b($8e515b832afe5669$var$_transformProp);
        $8e515b832afe5669$var$_transformOriginProp = $8e515b832afe5669$var$_transformProp + "Origin";
        $8e515b832afe5669$var$_tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.
        $8e515b832afe5669$var$_supports3D = !!$8e515b832afe5669$export$8cbef5dd49a09c8b("perspective");
        $8e515b832afe5669$var$_reverting = (0, $8bf2f9ddbdb26115$export$99ee26438460406a).core.reverting;
        $8e515b832afe5669$var$_pluginInitted = 1;
    }
}, $8e515b832afe5669$var$_getBBoxHack = function _getBBoxHack(swapIfPossible) {
    //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
    var svg = $8e515b832afe5669$export$a232bb0480ae674a("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
    $8e515b832afe5669$var$_docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox; //store the original
        this.getBBox = _getBBoxHack;
    } catch (e) {}
    else if (this._gsapBBox) bbox = this._gsapBBox();
    if (oldParent) {
        if (oldSibling) oldParent.insertBefore(this, oldSibling);
        else oldParent.appendChild(this);
    }
    $8e515b832afe5669$var$_docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
}, $8e515b832afe5669$var$_getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;
    while(i--){
        if (target.hasAttribute(attributesArray[i])) return target.getAttribute(attributesArray[i]);
    }
}, $8e515b832afe5669$export$41bc7c2d1e04f11b = function _getBBox(target) {
    var bounds;
    try {
        bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
    } catch (error) {
        bounds = $8e515b832afe5669$var$_getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === $8e515b832afe5669$var$_getBBoxHack || (bounds = $8e515b832afe5669$var$_getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
        x: +$8e515b832afe5669$var$_getAttributeFallbacks(target, [
            "x",
            "cx",
            "x1"
        ]) || 0,
        y: +$8e515b832afe5669$var$_getAttributeFallbacks(target, [
            "y",
            "cy",
            "y1"
        ]) || 0,
        width: 0,
        height: 0
    } : bounds;
}, $8e515b832afe5669$var$_isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && $8e515b832afe5669$export$41bc7c2d1e04f11b(e));
}, //reports if the element is an SVG on which getBBox() actually works
$8e515b832afe5669$var$_removeProperty = function _removeProperty(target, property) {
    if (property) {
        var style = target.style;
        if (property in $8e515b832afe5669$var$_transformProps && property !== $8e515b832afe5669$var$_transformOriginProp) property = $8e515b832afe5669$var$_transformProp;
        if (style.removeProperty) {
            if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
            property = "-" + property;
            style.removeProperty(property.replace($8e515b832afe5669$var$_capsExp, "-$1").toLowerCase());
        } else //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
        style.removeAttribute(property);
    }
}, $8e515b832afe5669$var$_addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new (0, $8bf2f9ddbdb26115$export$3a67f7f44b1e838a)(plugin._pt, target, property, 0, 1, onlySetAtEnd ? $8e515b832afe5669$var$_renderNonTweeningValueOnlyAtEnd : $8e515b832afe5669$var$_renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
}, $8e515b832afe5669$var$_nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
}, $8e515b832afe5669$var$_nonStandardLayouts = {
    grid: 1,
    flex: 1
}, //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
$8e515b832afe5669$var$_convertToUnit = function _convertToUnit(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
    style = $8e515b832afe5669$var$_tempDiv.style, horizontal = $8e515b832afe5669$var$_horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || $8e515b832afe5669$var$_nonConvertibleUnits[unit] || $8e515b832afe5669$var$_nonConvertibleUnits[curUnit]) return curValue;
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
    isSVG = target.getCTM && $8e515b832afe5669$var$_isSVG(target);
    if ((toPercent || curUnit === "%") && ($8e515b832afe5669$var$_transformProps[property] || ~property.indexOf("adius"))) {
        px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
        return (0, $8bf2f9ddbdb26115$export$9c8d725d65e13f94)(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) parent = (target.ownerSVGElement || {}).parentNode;
    if (!parent || parent === $8e515b832afe5669$var$_doc || !parent.appendChild) parent = $8e515b832afe5669$var$_doc.body;
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === (0, $8bf2f9ddbdb26115$export$762ed8fbedb691e3).time && !cache.uncache) return (0, $8bf2f9ddbdb26115$export$9c8d725d65e13f94)(curValue / cache.width * amount);
    else {
        (toPercent || curUnit === "%") && !$8e515b832afe5669$var$_nonStandardLayouts[$8e515b832afe5669$var$_getComputedProperty(parent, "display")] && (style.position = $8e515b832afe5669$var$_getComputedProperty(target, "position"));
        parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.
        parent.appendChild($8e515b832afe5669$var$_tempDiv);
        px = $8e515b832afe5669$var$_tempDiv[measureProperty];
        parent.removeChild($8e515b832afe5669$var$_tempDiv);
        style.position = "absolute";
        if (horizontal && toPercent) {
            cache = (0, $8bf2f9ddbdb26115$export$8b9be379d2de2a39)(parent);
            cache.time = (0, $8bf2f9ddbdb26115$export$762ed8fbedb691e3).time;
            cache.width = parent[measureProperty];
        }
    }
    return (0, $8bf2f9ddbdb26115$export$9c8d725d65e13f94)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
}, $8e515b832afe5669$var$_get = function _get(target, property, unit, uncache) {
    var value;
    $8e515b832afe5669$var$_pluginInitted || $8e515b832afe5669$var$_initCore();
    if (property in $8e515b832afe5669$var$_propertyAliases && property !== "transform") {
        property = $8e515b832afe5669$var$_propertyAliases[property];
        if (~property.indexOf(",")) property = property.split(",")[0];
    }
    if ($8e515b832afe5669$var$_transformProps[property] && property !== "transform") {
        value = $8e515b832afe5669$var$_parseTransform(target, uncache);
        value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : $8e515b832afe5669$var$_firstTwoOnly($8e515b832afe5669$var$_getComputedProperty(target, $8e515b832afe5669$var$_transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
        value = target.style[property];
        if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) value = $8e515b832afe5669$var$_specialProps[property] && $8e515b832afe5669$var$_specialProps[property](target, property, unit) || $8e515b832afe5669$var$_getComputedProperty(target, property) || (0, $8bf2f9ddbdb26115$export$51d6bbe898aef1f9)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
    return unit && !~(value + "").trim().indexOf(" ") ? $8e515b832afe5669$var$_convertToUnit(target, property, value, unit) + unit : value;
}, $8e515b832afe5669$var$_tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    if (!start || start === "none") {
        // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
        var p = $8e515b832afe5669$export$8cbef5dd49a09c8b(prop, target, 1), s = p && $8e515b832afe5669$var$_getComputedProperty(target, p, 1);
        if (s && s !== start) {
            prop = p;
            start = s;
        } else if (prop === "borderColor") start = $8e515b832afe5669$var$_getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
    var pt = new (0, $8bf2f9ddbdb26115$export$3a67f7f44b1e838a)(this._pt, target.style, prop, 0, 1, (0, $8bf2f9ddbdb26115$export$c5bc8e04394ecb2)), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
    pt.b = start;
    pt.e = end;
    start += ""; // ensure values are strings
    end += "";
    if (end === "auto") {
        target.style[prop] = end;
        end = $8e515b832afe5669$var$_getComputedProperty(target, prop) || end;
        target.style[prop] = start;
    }
    a = [
        start,
        end
    ];
    (0, $8bf2f9ddbdb26115$export$7eb2e5eb5eeb96a4)(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().
    start = a[0];
    end = a[1];
    startValues = start.match((0, $8bf2f9ddbdb26115$export$65c88bbd597e7b0a)) || [];
    endValues = end.match((0, $8bf2f9ddbdb26115$export$65c88bbd597e7b0a)) || [];
    if (endValues.length) {
        while(result = (0, $8bf2f9ddbdb26115$export$65c88bbd597e7b0a).exec(end)){
            endValue = result[0];
            chunk = end.substring(index, result.index);
            if (color) color = (color + 1) % 5;
            else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") color = 1;
            if (endValue !== (startValue = startValues[matchIndex++] || "")) {
                startNum = parseFloat(startValue) || 0;
                startUnit = startValue.substr((startNum + "").length);
                endValue.charAt(1) === "=" && (endValue = (0, $8bf2f9ddbdb26115$export$dac762bc6301b560)(startNum, endValue) + startUnit);
                endNum = parseFloat(endValue);
                endUnit = endValue.substr((endNum + "").length);
                index = (0, $8bf2f9ddbdb26115$export$65c88bbd597e7b0a).lastIndex - endUnit.length;
                if (!endUnit) {
                    //if something like "perspective:300" is passed in and we must add a unit to the end
                    endUnit = endUnit || (0, $8bf2f9ddbdb26115$export$4922bee768729a77).units[prop] || startUnit;
                    if (index === end.length) {
                        end += endUnit;
                        pt.e += endUnit;
                    }
                }
                if (startUnit !== endUnit) startNum = $8e515b832afe5669$var$_convertToUnit(target, prop, startValue, endUnit) || 0;
                 // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
                pt._pt = {
                    _next: pt._pt,
                    p: chunk || matchIndex === 1 ? chunk : ",",
                    //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                    s: startNum,
                    c: endNum - startNum,
                    m: color && color < 4 || prop === "zIndex" ? Math.round : 0
                };
            }
        }
        pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    } else pt.r = prop === "display" && end === "none" ? $8e515b832afe5669$var$_renderNonTweeningValueOnlyAtEnd : $8e515b832afe5669$var$_renderNonTweeningValue;
    (0, $8bf2f9ddbdb26115$export$5a680e28b0b61bc).test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.
    return pt;
}, $8e515b832afe5669$var$_keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, $8e515b832afe5669$var$_convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
        //the user provided them in the wrong order, so flip them
        value = x;
        x = y;
        y = value;
    }
    split[0] = $8e515b832afe5669$var$_keywordToPercent[x] || x;
    split[1] = $8e515b832afe5669$var$_keywordToPercent[y] || y;
    return split.join(" ");
}, $8e515b832afe5669$var$_renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
        var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
        if (props === "all" || props === true) {
            style.cssText = "";
            clearTransforms = 1;
        } else {
            props = props.split(",");
            i = props.length;
            while(--i > -1){
                prop = props[i];
                if ($8e515b832afe5669$var$_transformProps[prop]) {
                    clearTransforms = 1;
                    prop = prop === "transformOrigin" ? $8e515b832afe5669$var$_transformOriginProp : $8e515b832afe5669$var$_transformProp;
                }
                $8e515b832afe5669$var$_removeProperty(target, prop);
            }
        }
        if (clearTransforms) {
            $8e515b832afe5669$var$_removeProperty(target, $8e515b832afe5669$var$_transformProp);
            if (cache) {
                cache.svg && target.removeAttribute("transform");
                $8e515b832afe5669$var$_parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.
                cache.uncache = 1;
                $8e515b832afe5669$var$_removeIndependentTransforms(style);
            }
        }
    }
}, // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
$8e515b832afe5669$var$_specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
        if (tween.data !== "isFromStart") {
            var pt = plugin._pt = new (0, $8bf2f9ddbdb26115$export$3a67f7f44b1e838a)(plugin._pt, target, property, 0, 0, $8e515b832afe5669$var$_renderClearProps);
            pt.u = endValue;
            pt.pr = -10;
            pt.tween = tween;
            plugin._props.push(property);
            return 1;
        }
    }
}, /*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */ $8e515b832afe5669$var$_identity2DMatrix = [
    1,
    0,
    0,
    1,
    0,
    0
], $8e515b832afe5669$var$_rotationalProperties = {}, $8e515b832afe5669$var$_isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
}, $8e515b832afe5669$var$_getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = $8e515b832afe5669$var$_getComputedProperty(target, $8e515b832afe5669$var$_transformProp);
    return $8e515b832afe5669$var$_isNullTransform(matrixString) ? $8e515b832afe5669$var$_identity2DMatrix : matrixString.substr(7).match((0, $8bf2f9ddbdb26115$export$b9d44bb6523120d6)).map((0, $8bf2f9ddbdb26115$export$9c8d725d65e13f94));
}, $8e515b832afe5669$var$_getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || (0, $8bf2f9ddbdb26115$export$8b9be379d2de2a39)(target), style = target.style, matrix = $8e515b832afe5669$var$_getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
        temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.
        matrix = [
            temp.a,
            temp.b,
            temp.c,
            temp.d,
            temp.e,
            temp.f
        ];
        return matrix.join(",") === "1,0,0,1,0,0" ? $8e515b832afe5669$var$_identity2DMatrix : matrix;
    } else if (matrix === $8e515b832afe5669$var$_identity2DMatrix && !target.offsetParent && target !== $8e515b832afe5669$var$_docElement && !cache.svg) {
        //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
        temp = style.display;
        style.display = "block";
        parent = target.parentNode;
        if (!parent || !target.offsetParent) {
            // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
            addedToDOM = 1; //flag
            nextSibling = target.nextElementSibling;
            $8e515b832afe5669$var$_docElement.appendChild(target); //we must add it to the DOM in order to get values properly
        }
        matrix = $8e515b832afe5669$var$_getComputedTransformMatrixAsArray(target);
        temp ? style.display = temp : $8e515b832afe5669$var$_removeProperty(target, "display");
        if (addedToDOM) nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : $8e515b832afe5669$var$_docElement.removeChild(target);
    }
    return force2D && matrix.length > 6 ? [
        matrix[0],
        matrix[1],
        matrix[4],
        matrix[5],
        matrix[12],
        matrix[13]
    ] : matrix;
}, $8e515b832afe5669$var$_applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || $8e515b832afe5669$var$_getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
        bounds = $8e515b832afe5669$export$41bc7c2d1e04f11b(target);
        xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
        yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== $8e515b832afe5669$var$_identity2DMatrix && (determinant = a * d - b * c)) {
        //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
        x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
        y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
        xOrigin = x;
        yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
        tx = xOrigin - xOriginOld;
        ty = yOrigin - yOriginOld;
        cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
        cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else cache.xOffset = cache.yOffset = 0;
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[$8e515b832afe5669$var$_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).
    if (pluginToAddPropTweensTo) {
        $8e515b832afe5669$var$_addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
        $8e515b832afe5669$var$_addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
        $8e515b832afe5669$var$_addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
        $8e515b832afe5669$var$_addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
}, $8e515b832afe5669$var$_parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new (0, $8bf2f9ddbdb26115$export$cf10981d5419cad5)(target);
    if ("x" in cache && !uncache && !cache.uncache) return cache;
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = $8e515b832afe5669$var$_getComputedProperty(target, $8e515b832afe5669$var$_transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && $8e515b832afe5669$var$_isSVG(target));
    if (cs.translate) {
        // accommodate independent transforms by combining them into normal ones.
        if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") style[$8e515b832afe5669$var$_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[$8e515b832afe5669$var$_transformProp] !== "none" ? cs[$8e515b832afe5669$var$_transformProp] : "");
        style.scale = style.rotate = style.translate = "none";
    }
    matrix = $8e515b832afe5669$var$_getMatrix(target, cache.svg);
    if (cache.svg) {
        if (cache.uncache) {
            // if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
            t2 = target.getBBox();
            origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
            t1 = "";
        } else t1 = !uncache && target.getAttribute("data-svg-origin"); //  Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
        $8e515b832afe5669$var$_applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== $8e515b832afe5669$var$_identity2DMatrix) {
        a = matrix[0]; //a11
        b = matrix[1]; //a21
        c = matrix[2]; //a31
        d = matrix[3]; //a41
        x = a12 = matrix[4];
        y = a22 = matrix[5]; //2D matrix
        if (matrix.length === 6) {
            scaleX = Math.sqrt(a * a + b * b);
            scaleY = Math.sqrt(d * d + c * c);
            rotation = a || b ? $8e515b832afe5669$var$_atan2(b, a) * $8e515b832afe5669$var$_RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
            skewX = c || d ? $8e515b832afe5669$var$_atan2(c, d) * $8e515b832afe5669$var$_RAD2DEG + rotation : 0;
            skewX && (scaleY *= Math.abs(Math.cos(skewX * $8e515b832afe5669$var$_DEG2RAD)));
            if (cache.svg) {
                x -= xOrigin - (xOrigin * a + yOrigin * c);
                y -= yOrigin - (xOrigin * b + yOrigin * d);
            } //3D matrix
        } else {
            a32 = matrix[6];
            a42 = matrix[7];
            a13 = matrix[8];
            a23 = matrix[9];
            a33 = matrix[10];
            a43 = matrix[11];
            x = matrix[12];
            y = matrix[13];
            z = matrix[14];
            angle = $8e515b832afe5669$var$_atan2(a32, a33);
            rotationX = angle * $8e515b832afe5669$var$_RAD2DEG; //rotationX
            if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a12 * cos + a13 * sin;
                t2 = a22 * cos + a23 * sin;
                t3 = a32 * cos + a33 * sin;
                a13 = a12 * -sin + a13 * cos;
                a23 = a22 * -sin + a23 * cos;
                a33 = a32 * -sin + a33 * cos;
                a43 = a42 * -sin + a43 * cos;
                a12 = t1;
                a22 = t2;
                a32 = t3;
            } //rotationY
            angle = $8e515b832afe5669$var$_atan2(-c, a33);
            rotationY = angle * $8e515b832afe5669$var$_RAD2DEG;
            if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a * cos - a13 * sin;
                t2 = b * cos - a23 * sin;
                t3 = c * cos - a33 * sin;
                a43 = d * sin + a43 * cos;
                a = t1;
                b = t2;
                c = t3;
            } //rotationZ
            angle = $8e515b832afe5669$var$_atan2(b, a);
            rotation = angle * $8e515b832afe5669$var$_RAD2DEG;
            if (angle) {
                cos = Math.cos(angle);
                sin = Math.sin(angle);
                t1 = a * cos + b * sin;
                t2 = a12 * cos + a22 * sin;
                b = b * cos - a * sin;
                a22 = a22 * cos - a12 * sin;
                a = t1;
                a12 = t2;
            }
            if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
                //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
                rotationX = rotation = 0;
                rotationY = 180 - rotationY;
            }
            scaleX = (0, $8bf2f9ddbdb26115$export$9c8d725d65e13f94)(Math.sqrt(a * a + b * b + c * c));
            scaleY = (0, $8bf2f9ddbdb26115$export$9c8d725d65e13f94)(Math.sqrt(a22 * a22 + a32 * a32));
            angle = $8e515b832afe5669$var$_atan2(a12, a22);
            skewX = Math.abs(angle) > 0.0002 ? angle * $8e515b832afe5669$var$_RAD2DEG : 0;
            perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
        }
        if (cache.svg) {
            //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
            t1 = target.getAttribute("transform");
            cache.forceCSS = target.setAttribute("transform", "") || !$8e515b832afe5669$var$_isNullTransform($8e515b832afe5669$var$_getComputedProperty(target, $8e515b832afe5669$var$_transformProp));
            t1 && target.setAttribute("transform", t1);
        }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
        if (invertedScaleX) {
            scaleX *= -1;
            skewX += rotation <= 0 ? 180 : -180;
            rotation += rotation <= 0 ? 180 : -180;
        } else {
            scaleY *= -1;
            skewX += skewX <= 0 ? 180 : -180;
        }
    }
    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = (0, $8bf2f9ddbdb26115$export$9c8d725d65e13f94)(scaleX);
    cache.scaleY = (0, $8bf2f9ddbdb26115$export$9c8d725d65e13f94)(scaleY);
    cache.rotation = (0, $8bf2f9ddbdb26115$export$9c8d725d65e13f94)(rotation) + deg;
    cache.rotationX = (0, $8bf2f9ddbdb26115$export$9c8d725d65e13f94)(rotationX) + deg;
    cache.rotationY = (0, $8bf2f9ddbdb26115$export$9c8d725d65e13f94)(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) style[$8e515b832afe5669$var$_transformOriginProp] = $8e515b832afe5669$var$_firstTwoOnly(origin);
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = (0, $8bf2f9ddbdb26115$export$4922bee768729a77).force3D;
    cache.renderTransform = cache.svg ? $8e515b832afe5669$var$_renderSVGTransforms : $8e515b832afe5669$var$_supports3D ? $8e515b832afe5669$var$_renderCSSTransforms : $8e515b832afe5669$var$_renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
}, $8e515b832afe5669$var$_firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
}, //for handling transformOrigin values, stripping out the 3rd dimension
$8e515b832afe5669$var$_addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = (0, $8bf2f9ddbdb26115$export$65f2564e9a9b9222)(start);
    return (0, $8bf2f9ddbdb26115$export$9c8d725d65e13f94)(parseFloat(start) + parseFloat($8e515b832afe5669$var$_convertToUnit(target, "x", value + "px", unit))) + unit;
}, $8e515b832afe5669$var$_renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    $8e515b832afe5669$var$_renderCSSTransforms(ratio, cache);
}, $8e515b832afe5669$var$_zeroDeg = "0deg", $8e515b832afe5669$var$_zeroPx = "0px", $8e515b832afe5669$var$_endParenthesis = ") ", $8e515b832afe5669$var$_renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)
    if (zOrigin && (rotationX !== $8e515b832afe5669$var$_zeroDeg || rotationY !== $8e515b832afe5669$var$_zeroDeg)) {
        var angle = parseFloat(rotationY) * $8e515b832afe5669$var$_DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
        angle = parseFloat(rotationX) * $8e515b832afe5669$var$_DEG2RAD;
        cos = Math.cos(angle);
        x = $8e515b832afe5669$var$_addPxTranslate(target, x, a13 * cos * -zOrigin);
        y = $8e515b832afe5669$var$_addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
        z = $8e515b832afe5669$var$_addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== $8e515b832afe5669$var$_zeroPx) transforms += "perspective(" + transformPerspective + $8e515b832afe5669$var$_endParenthesis;
    if (xPercent || yPercent) transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    if (use3D || x !== $8e515b832afe5669$var$_zeroPx || y !== $8e515b832afe5669$var$_zeroPx || z !== $8e515b832afe5669$var$_zeroPx) transforms += z !== $8e515b832afe5669$var$_zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + $8e515b832afe5669$var$_endParenthesis;
    if (rotation !== $8e515b832afe5669$var$_zeroDeg) transforms += "rotate(" + rotation + $8e515b832afe5669$var$_endParenthesis;
    if (rotationY !== $8e515b832afe5669$var$_zeroDeg) transforms += "rotateY(" + rotationY + $8e515b832afe5669$var$_endParenthesis;
    if (rotationX !== $8e515b832afe5669$var$_zeroDeg) transforms += "rotateX(" + rotationX + $8e515b832afe5669$var$_endParenthesis;
    if (skewX !== $8e515b832afe5669$var$_zeroDeg || skewY !== $8e515b832afe5669$var$_zeroDeg) transforms += "skew(" + skewX + ", " + skewY + $8e515b832afe5669$var$_endParenthesis;
    if (scaleX !== 1 || scaleY !== 1) transforms += "scale(" + scaleX + ", " + scaleY + $8e515b832afe5669$var$_endParenthesis;
    target.style[$8e515b832afe5669$var$_transformProp] = transforms || "translate(0, 0)";
}, $8e515b832afe5669$var$_renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
        //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
        skewY = parseFloat(skewY);
        skewX += skewY;
        rotation += skewY;
    }
    if (rotation || skewX) {
        rotation *= $8e515b832afe5669$var$_DEG2RAD;
        skewX *= $8e515b832afe5669$var$_DEG2RAD;
        a11 = Math.cos(rotation) * scaleX;
        a21 = Math.sin(rotation) * scaleX;
        a12 = Math.sin(rotation - skewX) * -scaleY;
        a22 = Math.cos(rotation - skewX) * scaleY;
        if (skewX) {
            skewY *= $8e515b832afe5669$var$_DEG2RAD;
            temp = Math.tan(skewX - skewY);
            temp = Math.sqrt(1 + temp * temp);
            a12 *= temp;
            a22 *= temp;
            if (skewY) {
                temp = Math.tan(skewY);
                temp = Math.sqrt(1 + temp * temp);
                a11 *= temp;
                a21 *= temp;
            }
        }
        a11 = (0, $8bf2f9ddbdb26115$export$9c8d725d65e13f94)(a11);
        a21 = (0, $8bf2f9ddbdb26115$export$9c8d725d65e13f94)(a21);
        a12 = (0, $8bf2f9ddbdb26115$export$9c8d725d65e13f94)(a12);
        a22 = (0, $8bf2f9ddbdb26115$export$9c8d725d65e13f94)(a22);
    } else {
        a11 = scaleX;
        a22 = scaleY;
        a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
        tx = $8e515b832afe5669$var$_convertToUnit(target, "x", x, "px");
        ty = $8e515b832afe5669$var$_convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
        tx = (0, $8bf2f9ddbdb26115$export$9c8d725d65e13f94)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
        ty = (0, $8bf2f9ddbdb26115$export$9c8d725d65e13f94)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
        //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
        temp = target.getBBox();
        tx = (0, $8bf2f9ddbdb26115$export$9c8d725d65e13f94)(tx + xPercent / 100 * temp.width);
        ty = (0, $8bf2f9ddbdb26115$export$9c8d725d65e13f94)(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[$8e515b832afe5669$var$_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the transform attribute changes!)
}, $8e515b832afe5669$var$_addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
    var cap = 360, isString = (0, $8bf2f9ddbdb26115$export$f664476fd67145ca)(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? $8e515b832afe5669$var$_RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
        direction = endValue.split("_")[1];
        if (direction === "short") {
            change %= cap;
            if (change !== change % (cap / 2)) change += change < 0 ? cap : -cap;
        }
        if (direction === "cw" && change < 0) change = (change + cap * $8e515b832afe5669$var$_bigNum) % cap - ~~(change / cap) * cap;
        else if (direction === "ccw" && change > 0) change = (change - cap * $8e515b832afe5669$var$_bigNum) % cap - ~~(change / cap) * cap;
    }
    plugin._pt = pt = new (0, $8bf2f9ddbdb26115$export$3a67f7f44b1e838a)(plugin._pt, target, property, startNum, change, $8e515b832afe5669$var$_renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
}, $8e515b832afe5669$var$_assign = function _assign(target, source) {
    // Internet Explorer doesn't have Object.assign(), so we recreate it here.
    for(var p in source)target[p] = source[p];
    return target;
}, $8e515b832afe5669$var$_addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
    var startCache = $8e515b832afe5669$var$_assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
        startValue = target.getAttribute("transform");
        target.setAttribute("transform", "");
        style[$8e515b832afe5669$var$_transformProp] = transforms;
        endCache = $8e515b832afe5669$var$_parseTransform(target, 1);
        $8e515b832afe5669$var$_removeProperty(target, $8e515b832afe5669$var$_transformProp);
        target.setAttribute("transform", startValue);
    } else {
        startValue = getComputedStyle(target)[$8e515b832afe5669$var$_transformProp];
        style[$8e515b832afe5669$var$_transformProp] = transforms;
        endCache = $8e515b832afe5669$var$_parseTransform(target, 1);
        style[$8e515b832afe5669$var$_transformProp] = startValue;
    }
    for(p in $8e515b832afe5669$var$_transformProps){
        startValue = startCache[p];
        endValue = endCache[p];
        if (startValue !== endValue && exclude.indexOf(p) < 0) {
            //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
            startUnit = (0, $8bf2f9ddbdb26115$export$65f2564e9a9b9222)(startValue);
            endUnit = (0, $8bf2f9ddbdb26115$export$65f2564e9a9b9222)(endValue);
            startNum = startUnit !== endUnit ? $8e515b832afe5669$var$_convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
            endNum = parseFloat(endValue);
            plugin._pt = new (0, $8bf2f9ddbdb26115$export$3a67f7f44b1e838a)(plugin._pt, endCache, p, startNum, endNum - startNum, $8e515b832afe5669$var$_renderCSSProp);
            plugin._pt.u = endUnit || 0;
            plugin._props.push(p);
        }
    }
    $8e515b832afe5669$var$_assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.
(0, $8bf2f9ddbdb26115$export$f9000b814859f126)("padding,margin,Width,Radius", function(name, index) {
    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [
        t,
        r,
        b,
        l
    ] : [
        t + l,
        t + r,
        b + r,
        b + l
    ]).map(function(side) {
        return index < 2 ? name + side : "border" + side + name;
    });
    $8e515b832afe5669$var$_specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
        var a, vars;
        if (arguments.length < 4) {
            // getter, passed target, property, and unit (from _get())
            a = props.map(function(prop) {
                return $8e515b832afe5669$var$_get(plugin, prop, property);
            });
            vars = a.join(" ");
            return vars.split(a[0]).length === 5 ? a[0] : vars;
        }
        a = (endValue + "").split(" ");
        vars = {};
        props.forEach(function(prop, i) {
            return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
        });
        plugin.init(target, vars, tween);
    };
});
var $8e515b832afe5669$export$855822f522f18eef = {
    name: "css",
    register: $8e515b832afe5669$var$_initCore,
    targetTest: function targetTest(target) {
        return target.style && target.nodeType;
    },
    init: function init(target, vars, tween, index, targets) {
        var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
        $8e515b832afe5669$var$_pluginInitted || $8e515b832afe5669$var$_initCore(); // we may call init() multiple times on the same plugin instance, like when adding special properties, so make sure we don't overwrite the revert data or inlineProps
        this.styles = this.styles || $8e515b832afe5669$var$_getStyleSaver(target);
        inlineProps = this.styles.props;
        this.tween = tween;
        for(p in vars){
            if (p === "autoRound") continue;
            endValue = vars[p];
            if ((0, $8bf2f9ddbdb26115$export$d305d8ec5d7c26b8)[p] && (0, $8bf2f9ddbdb26115$export$5c457b74208010cf)(p, vars, tween, index, target, targets)) continue;
            type = typeof endValue;
            specialProp = $8e515b832afe5669$var$_specialProps[p];
            if (type === "function") {
                endValue = endValue.call(tween, index, target, targets);
                type = typeof endValue;
            }
            if (type === "string" && ~endValue.indexOf("random(")) endValue = (0, $8bf2f9ddbdb26115$export$d5962a97e3cde94d)(endValue);
            if (specialProp) specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
            else if (p.substr(0, 2) === "--") {
                //CSS variable
                startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
                endValue += "";
                (0, $8bf2f9ddbdb26115$export$dd733e62515be2bd).lastIndex = 0;
                if (!(0, $8bf2f9ddbdb26115$export$dd733e62515be2bd).test(startValue)) {
                    // colors don't have units
                    startUnit = (0, $8bf2f9ddbdb26115$export$65f2564e9a9b9222)(startValue);
                    endUnit = (0, $8bf2f9ddbdb26115$export$65f2564e9a9b9222)(endValue);
                }
                endUnit ? startUnit !== endUnit && (startValue = $8e515b832afe5669$var$_convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
                this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
                props.push(p);
                inlineProps.push(p, 0, style[p]);
            } else if (type !== "undefined") {
                if (startAt && p in startAt) {
                    // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
                    startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                    (0, $8bf2f9ddbdb26115$export$f664476fd67145ca)(startValue) && ~startValue.indexOf("random(") && (startValue = (0, $8bf2f9ddbdb26115$export$d5962a97e3cde94d)(startValue));
                    (0, $8bf2f9ddbdb26115$export$65f2564e9a9b9222)(startValue + "") || (startValue += (0, $8bf2f9ddbdb26115$export$4922bee768729a77).units[p] || (0, $8bf2f9ddbdb26115$export$65f2564e9a9b9222)($8e515b832afe5669$var$_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.
                    (startValue + "").charAt(1) === "=" && (startValue = $8e515b832afe5669$var$_get(target, p)); // can't work with relative values
                } else startValue = $8e515b832afe5669$var$_get(target, p);
                startNum = parseFloat(startValue);
                relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
                relative && (endValue = endValue.substr(2));
                endNum = parseFloat(endValue);
                if (p in $8e515b832afe5669$var$_propertyAliases) {
                    if (p === "autoAlpha") {
                        //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
                        if (startNum === 1 && $8e515b832afe5669$var$_get(target, "visibility") === "hidden" && endNum) //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
                        startNum = 0;
                        inlineProps.push("visibility", 0, style.visibility);
                        $8e515b832afe5669$var$_addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                    }
                    if (p !== "scale" && p !== "transform") {
                        p = $8e515b832afe5669$var$_propertyAliases[p];
                        ~p.indexOf(",") && (p = p.split(",")[0]);
                    }
                }
                isTransformRelated = p in $8e515b832afe5669$var$_transformProps; //--- TRANSFORM-RELATED ---
                if (isTransformRelated) {
                    this.styles.save(p);
                    if (!transformPropTween) {
                        cache = target._gsap;
                        cache.renderTransform && !vars.parseTransform || $8e515b832afe5669$var$_parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.
                        smooth = vars.smoothOrigin !== false && cache.smooth;
                        transformPropTween = this._pt = new (0, $8bf2f9ddbdb26115$export$3a67f7f44b1e838a)(this._pt, style, $8e515b832afe5669$var$_transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)
                        transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
                    }
                    if (p === "scale") {
                        this._pt = new (0, $8bf2f9ddbdb26115$export$3a67f7f44b1e838a)(this._pt, cache, "scaleY", cache.scaleY, (relative ? (0, $8bf2f9ddbdb26115$export$dac762bc6301b560)(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, $8e515b832afe5669$var$_renderCSSProp);
                        this._pt.u = 0;
                        props.push("scaleY", p);
                        p += "X";
                    } else if (p === "transformOrigin") {
                        inlineProps.push($8e515b832afe5669$var$_transformOriginProp, 0, style[$8e515b832afe5669$var$_transformOriginProp]);
                        endValue = $8e515b832afe5669$var$_convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.
                        if (cache.svg) $8e515b832afe5669$var$_applySVGOrigin(target, endValue, 0, smooth, 0, this);
                        else {
                            endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!
                            endUnit !== cache.zOrigin && $8e515b832afe5669$var$_addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                            $8e515b832afe5669$var$_addNonTweeningPT(this, style, p, $8e515b832afe5669$var$_firstTwoOnly(startValue), $8e515b832afe5669$var$_firstTwoOnly(endValue));
                        }
                        continue;
                    } else if (p === "svgOrigin") {
                        $8e515b832afe5669$var$_applySVGOrigin(target, endValue, 1, smooth, 0, this);
                        continue;
                    } else if (p in $8e515b832afe5669$var$_rotationalProperties) {
                        $8e515b832afe5669$var$_addRotationalPropTween(this, cache, p, startNum, relative ? (0, $8bf2f9ddbdb26115$export$dac762bc6301b560)(startNum, relative + endValue) : endValue);
                        continue;
                    } else if (p === "smoothOrigin") {
                        $8e515b832afe5669$var$_addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                        continue;
                    } else if (p === "force3D") {
                        cache[p] = endValue;
                        continue;
                    } else if (p === "transform") {
                        $8e515b832afe5669$var$_addRawTransformPTs(this, endValue, target);
                        continue;
                    }
                } else if (!(p in style)) p = $8e515b832afe5669$export$8cbef5dd49a09c8b(p) || p;
                if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !$8e515b832afe5669$var$_complexExp.test(endValue) && p in style) {
                    startUnit = (startValue + "").substr((startNum + "").length);
                    endNum || (endNum = 0); // protect against NaN
                    endUnit = (0, $8bf2f9ddbdb26115$export$65f2564e9a9b9222)(endValue) || (p in (0, $8bf2f9ddbdb26115$export$4922bee768729a77).units ? (0, $8bf2f9ddbdb26115$export$4922bee768729a77).units[p] : startUnit);
                    startUnit !== endUnit && (startNum = $8e515b832afe5669$var$_convertToUnit(target, p, startValue, endUnit));
                    this._pt = new (0, $8bf2f9ddbdb26115$export$3a67f7f44b1e838a)(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? (0, $8bf2f9ddbdb26115$export$dac762bc6301b560)(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? $8e515b832afe5669$var$_renderRoundedCSSProp : $8e515b832afe5669$var$_renderCSSProp);
                    this._pt.u = endUnit || 0;
                    if (startUnit !== endUnit && endUnit !== "%") {
                        //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
                        this._pt.b = startValue;
                        this._pt.r = $8e515b832afe5669$var$_renderCSSPropWithBeginning;
                    }
                } else if (!(p in style)) {
                    if (p in target) //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
                    this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
                    else if (p !== "parseTransform") {
                        (0, $8bf2f9ddbdb26115$export$7fb54635790b59a5)(p, endValue);
                        continue;
                    }
                } else $8e515b832afe5669$var$_tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
                isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
                props.push(p);
            }
        }
        hasPriority && (0, $8bf2f9ddbdb26115$export$eed5824f53346d57)(this);
    },
    render: function render(ratio, data) {
        if (data.tween._time || !$8e515b832afe5669$var$_reverting()) {
            var pt = data._pt;
            while(pt){
                pt.r(ratio, pt.d);
                pt = pt._next;
            }
        } else data.styles.revert();
    },
    get: $8e515b832afe5669$var$_get,
    aliases: $8e515b832afe5669$var$_propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
        //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
        var p = $8e515b832afe5669$var$_propertyAliases[property];
        p && p.indexOf(",") < 0 && (property = p);
        return property in $8e515b832afe5669$var$_transformProps && property !== $8e515b832afe5669$var$_transformOriginProp && (target._gsap.x || $8e515b832afe5669$var$_get(target, "x")) ? plugin && $8e515b832afe5669$var$_recentSetterPlugin === plugin ? property === "scale" ? $8e515b832afe5669$var$_setterScale : $8e515b832afe5669$var$_setterTransform : ($8e515b832afe5669$var$_recentSetterPlugin = plugin || {}, property === "scale" ? $8e515b832afe5669$var$_setterScaleWithRender : $8e515b832afe5669$var$_setterTransformWithRender) : target.style && !(0, $8bf2f9ddbdb26115$export$a8178c063a9fd3a1)(target.style[property]) ? $8e515b832afe5669$var$_setterCSSStyle : ~property.indexOf("-") ? $8e515b832afe5669$var$_setterCSSProp : (0, $8bf2f9ddbdb26115$export$d60fbc1e0278aaf0)(target, property);
    },
    core: {
        _removeProperty: $8e515b832afe5669$var$_removeProperty,
        _getMatrix: $8e515b832afe5669$var$_getMatrix
    }
};
(0, $8bf2f9ddbdb26115$export$99ee26438460406a).utils.checkPrefix = $8e515b832afe5669$export$8cbef5dd49a09c8b;
(0, $8bf2f9ddbdb26115$export$99ee26438460406a).core.getStyleSaver = $8e515b832afe5669$var$_getStyleSaver;
(function(positionAndScale, rotation, others, aliases) {
    var all = (0, $8bf2f9ddbdb26115$export$f9000b814859f126)(positionAndScale + "," + rotation + "," + others, function(name) {
        $8e515b832afe5669$var$_transformProps[name] = 1;
    });
    (0, $8bf2f9ddbdb26115$export$f9000b814859f126)(rotation, function(name) {
        (0, $8bf2f9ddbdb26115$export$4922bee768729a77).units[name] = "deg";
        $8e515b832afe5669$var$_rotationalProperties[name] = 1;
    });
    $8e515b832afe5669$var$_propertyAliases[all[13]] = positionAndScale + "," + rotation;
    (0, $8bf2f9ddbdb26115$export$f9000b814859f126)(aliases, function(name) {
        var split = name.split(":");
        $8e515b832afe5669$var$_propertyAliases[split[1]] = all[split[0]];
    });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
(0, $8bf2f9ddbdb26115$export$f9000b814859f126)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    (0, $8bf2f9ddbdb26115$export$4922bee768729a77).units[name] = "px";
});
(0, $8bf2f9ddbdb26115$export$99ee26438460406a).registerPlugin($8e515b832afe5669$export$855822f522f18eef);


var $3065398eb637bd52$export$99ee26438460406a = (0, $8bf2f9ddbdb26115$export$99ee26438460406a).registerPlugin((0, $8e515b832afe5669$export$855822f522f18eef)) || (0, $8bf2f9ddbdb26115$export$99ee26438460406a), // to protect from tree shaking
$3065398eb637bd52$export$7b23975ad686bf91 = $3065398eb637bd52$export$99ee26438460406a.core.Tween;


/*!
 * ScrollTrigger 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ function $a129d6ec0733e75c$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $a129d6ec0733e75c$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $a129d6ec0733e75c$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $a129d6ec0733e75c$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}
/*!
 * Observer 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var $a129d6ec0733e75c$var$gsap, $a129d6ec0733e75c$var$_coreInitted, $a129d6ec0733e75c$var$_clamp, $a129d6ec0733e75c$var$_win, $a129d6ec0733e75c$var$_doc, $a129d6ec0733e75c$var$_docEl, $a129d6ec0733e75c$var$_body, $a129d6ec0733e75c$var$_isTouch, $a129d6ec0733e75c$var$_pointerType, $a129d6ec0733e75c$var$ScrollTrigger, $a129d6ec0733e75c$var$_root, $a129d6ec0733e75c$var$_normalizer, $a129d6ec0733e75c$var$_eventTypes, $a129d6ec0733e75c$var$_context, $a129d6ec0733e75c$var$_getGSAP = function _getGSAP() {
    return $a129d6ec0733e75c$var$gsap || typeof window !== "undefined" && ($a129d6ec0733e75c$var$gsap = window.gsap) && $a129d6ec0733e75c$var$gsap.registerPlugin && $a129d6ec0733e75c$var$gsap;
}, $a129d6ec0733e75c$var$_startup = 1, $a129d6ec0733e75c$var$_observers = [], $a129d6ec0733e75c$export$3cd1cee43d19b683 = [], $a129d6ec0733e75c$export$d8e56d510a804d0a = [], $a129d6ec0733e75c$var$_getTime = Date.now, $a129d6ec0733e75c$var$_bridge = function _bridge(name, value) {
    return value;
}, $a129d6ec0733e75c$var$_integrate = function _integrate() {
    var core = $a129d6ec0733e75c$var$ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
    scrollers.push.apply(scrollers, $a129d6ec0733e75c$export$3cd1cee43d19b683);
    proxies.push.apply(proxies, $a129d6ec0733e75c$export$d8e56d510a804d0a);
    $a129d6ec0733e75c$export$3cd1cee43d19b683 = scrollers;
    $a129d6ec0733e75c$export$d8e56d510a804d0a = proxies;
    $a129d6ec0733e75c$var$_bridge = function _bridge(name, value) {
        return data[name](value);
    };
}, $a129d6ec0733e75c$export$6078f1ef08b38af9 = function _getProxyProp(element, property) {
    return ~$a129d6ec0733e75c$export$d8e56d510a804d0a.indexOf(element) && $a129d6ec0733e75c$export$d8e56d510a804d0a[$a129d6ec0733e75c$export$d8e56d510a804d0a.indexOf(element) + 1][property];
}, $a129d6ec0733e75c$export$4330f3a92e5d2e94 = function _isViewport(el) {
    return !!~$a129d6ec0733e75c$var$_root.indexOf(el);
}, $a129d6ec0733e75c$var$_addListener = function _addListener(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
        passive: !nonPassive,
        capture: !!capture
    });
}, $a129d6ec0733e75c$var$_removeListener = function _removeListener(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
}, $a129d6ec0733e75c$var$_scrollLeft = "scrollLeft", $a129d6ec0733e75c$var$_scrollTop = "scrollTop", $a129d6ec0733e75c$var$_onScroll = function _onScroll() {
    return $a129d6ec0733e75c$var$_normalizer && $a129d6ec0733e75c$var$_normalizer.isPressed || $a129d6ec0733e75c$export$3cd1cee43d19b683.cache++;
}, $a129d6ec0733e75c$var$_scrollCacheFunc = function _scrollCacheFunc(f, doNotCache) {
    var cachingFunc = function cachingFunc(value) {
        // since reading the scrollTop/scrollLeft/pageOffsetY/pageOffsetX can trigger a layout, this function allows us to cache the value so it only gets read fresh after a "scroll" event fires (or while we're refreshing because that can lengthen the page and alter the scroll position). when "soft" is true, that means don't actually set the scroll, but cache the new value instead (useful in ScrollSmoother)
        if (value || value === 0) {
            $a129d6ec0733e75c$var$_startup && ($a129d6ec0733e75c$var$_win.history.scrollRestoration = "manual"); // otherwise the new position will get overwritten by the browser onload.
            var isNormalizing = $a129d6ec0733e75c$var$_normalizer && $a129d6ec0733e75c$var$_normalizer.isPressed;
            value = cachingFunc.v = Math.round(value) || ($a129d6ec0733e75c$var$_normalizer && $a129d6ec0733e75c$var$_normalizer.iOS ? 1 : 0); //TODO: iOS Bug: if you allow it to go to 0, Safari can start to report super strange (wildly inaccurate) touch positions!
            f(value);
            cachingFunc.cacheID = $a129d6ec0733e75c$export$3cd1cee43d19b683.cache;
            isNormalizing && $a129d6ec0733e75c$var$_bridge("ss", value); // set scroll (notify ScrollTrigger so it can dispatch a "scrollStart" event if necessary
        } else if (doNotCache || $a129d6ec0733e75c$export$3cd1cee43d19b683.cache !== cachingFunc.cacheID || $a129d6ec0733e75c$var$_bridge("ref")) {
            cachingFunc.cacheID = $a129d6ec0733e75c$export$3cd1cee43d19b683.cache;
            cachingFunc.v = f();
        }
        return cachingFunc.v + cachingFunc.offset;
    };
    cachingFunc.offset = 0;
    return f && cachingFunc;
}, $a129d6ec0733e75c$export$b2cabb342cb0ebe1 = {
    s: $a129d6ec0733e75c$var$_scrollLeft,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: $a129d6ec0733e75c$var$_scrollCacheFunc(function(value) {
        return arguments.length ? $a129d6ec0733e75c$var$_win.scrollTo(value, $a129d6ec0733e75c$export$8e40fc98ff518e9d.sc()) : $a129d6ec0733e75c$var$_win.pageXOffset || $a129d6ec0733e75c$var$_doc[$a129d6ec0733e75c$var$_scrollLeft] || $a129d6ec0733e75c$var$_docEl[$a129d6ec0733e75c$var$_scrollLeft] || $a129d6ec0733e75c$var$_body[$a129d6ec0733e75c$var$_scrollLeft] || 0;
    })
}, $a129d6ec0733e75c$export$8e40fc98ff518e9d = {
    s: $a129d6ec0733e75c$var$_scrollTop,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: $a129d6ec0733e75c$export$b2cabb342cb0ebe1,
    sc: $a129d6ec0733e75c$var$_scrollCacheFunc(function(value) {
        return arguments.length ? $a129d6ec0733e75c$var$_win.scrollTo($a129d6ec0733e75c$export$b2cabb342cb0ebe1.sc(), value) : $a129d6ec0733e75c$var$_win.pageYOffset || $a129d6ec0733e75c$var$_doc[$a129d6ec0733e75c$var$_scrollTop] || $a129d6ec0733e75c$var$_docEl[$a129d6ec0733e75c$var$_scrollTop] || $a129d6ec0733e75c$var$_body[$a129d6ec0733e75c$var$_scrollTop] || 0;
    })
}, $a129d6ec0733e75c$export$937374fea3f88711 = function _getTarget(t, self) {
    return (self && self._ctx && self._ctx.selector || $a129d6ec0733e75c$var$gsap.utils.toArray)(t)[0] || (typeof t === "string" && $a129d6ec0733e75c$var$gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
}, $a129d6ec0733e75c$export$8665aac53dad5647 = function _getScrollFunc(element, _ref) {
    var s = _ref.s, sc = _ref.sc;
    // we store the scroller functions in an alternating sequenced Array like [element, verticalScrollFunc, horizontalScrollFunc, ...] so that we can minimize memory, maximize performance, and we also record the last position as a ".rec" property in order to revert to that after refreshing to ensure things don't shift around.
    $a129d6ec0733e75c$export$4330f3a92e5d2e94(element) && (element = $a129d6ec0733e75c$var$_doc.scrollingElement || $a129d6ec0733e75c$var$_docEl);
    var i = $a129d6ec0733e75c$export$3cd1cee43d19b683.indexOf(element), offset = sc === $a129d6ec0733e75c$export$8e40fc98ff518e9d.sc ? 1 : 2;
    !~i && (i = $a129d6ec0733e75c$export$3cd1cee43d19b683.push(element) - 1);
    $a129d6ec0733e75c$export$3cd1cee43d19b683[i + offset] || element.addEventListener("scroll", $a129d6ec0733e75c$var$_onScroll); // clear the cache when a scroll occurs
    var prev = $a129d6ec0733e75c$export$3cd1cee43d19b683[i + offset], func = prev || ($a129d6ec0733e75c$export$3cd1cee43d19b683[i + offset] = $a129d6ec0733e75c$var$_scrollCacheFunc($a129d6ec0733e75c$export$6078f1ef08b38af9(element, s), true) || ($a129d6ec0733e75c$export$4330f3a92e5d2e94(element) ? sc : $a129d6ec0733e75c$var$_scrollCacheFunc(function(value) {
        return arguments.length ? element[s] = value : element[s];
    })));
    func.target = element;
    prev || (func.smooth = $a129d6ec0733e75c$var$gsap.getProperty(element, "scrollBehavior") === "smooth"); // only set it the first time (don't reset every time a scrollFunc is requested because perhaps it happens during a refresh() when it's disabled in ScrollTrigger.
    return func;
}, $a129d6ec0733e75c$export$5de019f4480f0f8d = function _getVelocityProp(value, minTimeRefresh, useDelta) {
    var v1 = value, v2 = value, t1 = $a129d6ec0733e75c$var$_getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update(value, force) {
        var t = $a129d6ec0733e75c$var$_getTime();
        if (force || t - t1 > min) {
            v2 = v1;
            v1 = value;
            t2 = t1;
            t1 = t;
        } else if (useDelta) v1 += value;
        else // not totally necessary, but makes it a bit more accurate by adjusting the v1 value according to the new slope. This way we're not just ignoring the incoming data. Removing for now because it doesn't seem to make much practical difference and it's probably not worth the kb.
        v1 = v2 + (value - v2) / (t - t2) * (t1 - t2);
    }, reset = function reset() {
        v2 = v1 = useDelta ? 0 : v1;
        t2 = t1 = 0;
    }, getVelocity = function getVelocity(latestValue) {
        var tOld = t2, vOld = v2, t = $a129d6ec0733e75c$var$_getTime();
        (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
        return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1000;
    };
    return {
        update: update,
        reset: reset,
        getVelocity: getVelocity
    };
}, $a129d6ec0733e75c$var$_getEvent = function _getEvent(e, preventDefault) {
    preventDefault && !e._gsapAllow && e.preventDefault();
    return e.changedTouches ? e.changedTouches[0] : e;
}, $a129d6ec0733e75c$var$_getAbsoluteMax = function _getAbsoluteMax(a) {
    var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
    return Math.abs(max) >= Math.abs(min) ? max : min;
}, $a129d6ec0733e75c$var$_setScrollTrigger = function _setScrollTrigger() {
    $a129d6ec0733e75c$var$ScrollTrigger = $a129d6ec0733e75c$var$gsap.core.globals().ScrollTrigger;
    $a129d6ec0733e75c$var$ScrollTrigger && $a129d6ec0733e75c$var$ScrollTrigger.core && $a129d6ec0733e75c$var$_integrate();
}, $a129d6ec0733e75c$var$_initCore = function _initCore(core) {
    $a129d6ec0733e75c$var$gsap = core || $a129d6ec0733e75c$var$_getGSAP();
    if ($a129d6ec0733e75c$var$gsap && typeof document !== "undefined" && document.body) {
        $a129d6ec0733e75c$var$_win = window;
        $a129d6ec0733e75c$var$_doc = document;
        $a129d6ec0733e75c$var$_docEl = $a129d6ec0733e75c$var$_doc.documentElement;
        $a129d6ec0733e75c$var$_body = $a129d6ec0733e75c$var$_doc.body;
        $a129d6ec0733e75c$var$_root = [
            $a129d6ec0733e75c$var$_win,
            $a129d6ec0733e75c$var$_doc,
            $a129d6ec0733e75c$var$_docEl,
            $a129d6ec0733e75c$var$_body
        ];
        $a129d6ec0733e75c$var$_clamp = $a129d6ec0733e75c$var$gsap.utils.clamp;
        $a129d6ec0733e75c$var$_context = $a129d6ec0733e75c$var$gsap.core.context || function() {};
        $a129d6ec0733e75c$var$_pointerType = "onpointerenter" in $a129d6ec0733e75c$var$_body ? "pointer" : "mouse"; // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.
        $a129d6ec0733e75c$var$_isTouch = $a129d6ec0733e75c$export$c1cbdee04e18ea8b.isTouch = $a129d6ec0733e75c$var$_win.matchMedia && $a129d6ec0733e75c$var$_win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in $a129d6ec0733e75c$var$_win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
        $a129d6ec0733e75c$var$_eventTypes = $a129d6ec0733e75c$export$c1cbdee04e18ea8b.eventTypes = ("ontouchstart" in $a129d6ec0733e75c$var$_docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in $a129d6ec0733e75c$var$_docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
        setTimeout(function() {
            return $a129d6ec0733e75c$var$_startup = 0;
        }, 500);
        $a129d6ec0733e75c$var$_setScrollTrigger();
        $a129d6ec0733e75c$var$_coreInitted = 1;
    }
    return $a129d6ec0733e75c$var$_coreInitted;
};
$a129d6ec0733e75c$export$b2cabb342cb0ebe1.op = $a129d6ec0733e75c$export$8e40fc98ff518e9d;
$a129d6ec0733e75c$export$3cd1cee43d19b683.cache = 0;
var $a129d6ec0733e75c$export$c1cbdee04e18ea8b = /*#__PURE__*/ function() {
    function Observer(vars) {
        this.init(vars);
    }
    var _proto = Observer.prototype;
    _proto.init = function init(vars) {
        $a129d6ec0733e75c$var$_coreInitted || $a129d6ec0733e75c$var$_initCore($a129d6ec0733e75c$var$gsap) || console.warn("Please gsap.registerPlugin(Observer)");
        $a129d6ec0733e75c$var$ScrollTrigger || $a129d6ec0733e75c$var$_setScrollTrigger();
        var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
        this.target = target = $a129d6ec0733e75c$export$937374fea3f88711(target) || $a129d6ec0733e75c$var$_docEl;
        this.vars = vars;
        ignore && (ignore = $a129d6ec0733e75c$var$gsap.utils.toArray(ignore));
        tolerance = tolerance || 1e-9;
        dragMinimum = dragMinimum || 0;
        wheelSpeed = wheelSpeed || 1;
        scrollSpeed = scrollSpeed || 1;
        type = type || "wheel,touch,pointer";
        debounce = debounce !== false;
        lineHeight || (lineHeight = parseFloat($a129d6ec0733e75c$var$_win.getComputedStyle($a129d6ec0733e75c$var$_body).lineHeight) || 22); // note: browser may report "normal", so default to 22.
        var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self = this, prevDeltaX = 0, prevDeltaY = 0, scrollFuncX = $a129d6ec0733e75c$export$8665aac53dad5647(target, $a129d6ec0733e75c$export$b2cabb342cb0ebe1), scrollFuncY = $a129d6ec0733e75c$export$8665aac53dad5647(target, $a129d6ec0733e75c$export$8e40fc98ff518e9d), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && $a129d6ec0733e75c$var$_eventTypes[0] === "pointerdown", // for devices that accommodate mouse events and touch events, we need to distinguish.
        isViewport = $a129d6ec0733e75c$export$4330f3a92e5d2e94(target), ownerDoc = target.ownerDocument || $a129d6ec0733e75c$var$_doc, deltaX = [
            0,
            0,
            0
        ], // wheel, scroll, pointer/touch
        deltaY = [
            0,
            0,
            0
        ], onClickTime = 0, clickCapture = function clickCapture() {
            return onClickTime = $a129d6ec0733e75c$var$_getTime();
        }, _ignoreCheck = function _ignoreCheck(e, isPointerOrTouch) {
            return (self.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
        }, onStopFunc = function onStopFunc() {
            self._vx.reset();
            self._vy.reset();
            onStopDelayedCall.pause();
            onStop && onStop(self);
        }, update = function update() {
            var dx = self.deltaX = $a129d6ec0733e75c$var$_getAbsoluteMax(deltaX), dy = self.deltaY = $a129d6ec0733e75c$var$_getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
            onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY); // in ScrollTrigger.normalizeScroll(), we need to know if it was touch/pointer so we need access to the deltaX/deltaY Arrays before we clear them out.
            if (changedX) {
                onRight && self.deltaX > 0 && onRight(self);
                onLeft && self.deltaX < 0 && onLeft(self);
                onChangeX && onChangeX(self);
                onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
                prevDeltaX = self.deltaX;
                deltaX[0] = deltaX[1] = deltaX[2] = 0;
            }
            if (changedY) {
                onDown && self.deltaY > 0 && onDown(self);
                onUp && self.deltaY < 0 && onUp(self);
                onChangeY && onChangeY(self);
                onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
                prevDeltaY = self.deltaY;
                deltaY[0] = deltaY[1] = deltaY[2] = 0;
            }
            if (moved || dragged) {
                onMove && onMove(self);
                if (dragged) {
                    onDrag(self);
                    dragged = false;
                }
                moved = false;
            }
            locked && (locked = false, true) && onLockAxis && onLockAxis(self);
            if (wheeled) {
                onWheel(self);
                wheeled = false;
            }
            id = 0;
        }, onDelta = function onDelta(x, y, index) {
            deltaX[index] += x;
            deltaY[index] += y;
            self._vx.update(x);
            self._vy.update(y);
            debounce ? id || (id = requestAnimationFrame(update)) : update();
        }, onTouchOrPointerDelta = function onTouchOrPointerDelta(x, y) {
            if (lockAxis && !axis) {
                self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
                locked = true;
            }
            if (axis !== "y") {
                deltaX[2] += x;
                self._vx.update(x, true); // update the velocity as frequently as possible instead of in the debounced function so that very quick touch-scrolls (flicks) feel natural. If it's the mouse/touch/pointer, force it so that we get snappy/accurate momentum scroll.
            }
            if (axis !== "x") {
                deltaY[2] += y;
                self._vy.update(y, true);
            }
            debounce ? id || (id = requestAnimationFrame(update)) : update();
        }, _onDrag = function _onDrag(e) {
            if (_ignoreCheck(e, 1)) return;
            e = $a129d6ec0733e75c$var$_getEvent(e, preventDefault);
            var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y, isDragging = self.isDragging;
            self.x = x;
            self.y = y;
            if (isDragging || Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum) {
                onDrag && (dragged = true);
                isDragging || (self.isDragging = true);
                onTouchOrPointerDelta(dx, dy);
                isDragging || onDragStart && onDragStart(self);
            }
        }, _onPress = self.onPress = function(e) {
            if (_ignoreCheck(e, 1) || e && e.button) return;
            self.axis = axis = null;
            onStopDelayedCall.pause();
            self.isPressed = true;
            e = $a129d6ec0733e75c$var$_getEvent(e); // note: may need to preventDefault(?) Won't side-scroll on iOS Safari if we do, though.
            prevDeltaX = prevDeltaY = 0;
            self.startX = self.x = e.clientX;
            self.startY = self.y = e.clientY;
            self._vx.reset(); // otherwise the t2 may be stale if the user touches and flicks super fast and releases in less than 2 requestAnimationFrame ticks, causing velocity to be 0.
            self._vy.reset();
            $a129d6ec0733e75c$var$_addListener(isNormalizer ? target : ownerDoc, $a129d6ec0733e75c$var$_eventTypes[1], _onDrag, preventDefault, true);
            self.deltaX = self.deltaY = 0;
            onPress && onPress(self);
        }, _onRelease = self.onRelease = function(e) {
            if (_ignoreCheck(e, 1)) return;
            $a129d6ec0733e75c$var$_removeListener(isNormalizer ? target : ownerDoc, $a129d6ec0733e75c$var$_eventTypes[1], _onDrag, true);
            var isTrackingDrag = !isNaN(self.y - self.startY), wasDragging = self.isDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3), // some touch devices need some wiggle room in terms of sensing clicks - the finger may move a few pixels.
            eventData = $a129d6ec0733e75c$var$_getEvent(e);
            if (!wasDragging && isTrackingDrag) {
                self._vx.reset();
                self._vy.reset();
                if (preventDefault && allowClicks) $a129d6ec0733e75c$var$gsap.delayedCall(0.08, function() {
                    // some browsers (like Firefox) won't trust script-generated clicks, so if the user tries to click on a video to play it, for example, it simply won't work. Since a regular "click" event will most likely be generated anyway (one that has its isTrusted flag set to true), we must slightly delay our script-generated click so that the "real"/trusted one is prioritized. Remember, when there are duplicate events in quick succession, we suppress all but the first one. Some browsers don't even trigger the "real" one at all, so our synthetic one is a safety valve that ensures that no matter what, a click event does get dispatched.
                    if ($a129d6ec0733e75c$var$_getTime() - onClickTime > 300 && !e.defaultPrevented) {
                        if (e.target.click) //some browsers (like mobile Safari) don't properly trigger the click event
                        e.target.click();
                        else if (ownerDoc.createEvent) {
                            var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                            syntheticEvent.initMouseEvent("click", true, true, $a129d6ec0733e75c$var$_win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                            e.target.dispatchEvent(syntheticEvent);
                        }
                    }
                });
            }
            self.isDragging = self.isGesturing = self.isPressed = false;
            onStop && !isNormalizer && onStopDelayedCall.restart(true);
            onDragEnd && wasDragging && onDragEnd(self);
            onRelease && onRelease(self, wasDragging);
        }, _onGestureStart = function _onGestureStart(e) {
            return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
        }, _onGestureEnd = function _onGestureEnd() {
            return self.isGesturing = false, onGestureEnd(self);
        }, onScroll = function onScroll(e) {
            if (_ignoreCheck(e)) return;
            var x = scrollFuncX(), y = scrollFuncY();
            onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
            scrollX = x;
            scrollY = y;
            onStop && onStopDelayedCall.restart(true);
        }, _onWheel = function _onWheel(e) {
            if (_ignoreCheck(e)) return;
            e = $a129d6ec0733e75c$var$_getEvent(e, preventDefault);
            onWheel && (wheeled = true);
            var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? $a129d6ec0733e75c$var$_win.innerHeight : 1) * wheelSpeed;
            onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
            onStop && !isNormalizer && onStopDelayedCall.restart(true);
        }, _onMove = function _onMove(e) {
            if (_ignoreCheck(e)) return;
            var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y;
            self.x = x;
            self.y = y;
            moved = true;
            (dx || dy) && onTouchOrPointerDelta(dx, dy);
        }, _onHover = function _onHover(e) {
            self.event = e;
            onHover(self);
        }, _onHoverEnd = function _onHoverEnd(e) {
            self.event = e;
            onHoverEnd(self);
        }, _onClick = function _onClick(e) {
            return _ignoreCheck(e) || $a129d6ec0733e75c$var$_getEvent(e, preventDefault) && onClick(self);
        };
        onStopDelayedCall = self._dc = $a129d6ec0733e75c$var$gsap.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
        self.deltaX = self.deltaY = 0;
        self._vx = $a129d6ec0733e75c$export$5de019f4480f0f8d(0, 50, true);
        self._vy = $a129d6ec0733e75c$export$5de019f4480f0f8d(0, 50, true);
        self.scrollX = scrollFuncX;
        self.scrollY = scrollFuncY;
        self.isDragging = self.isGesturing = self.isPressed = false;
        $a129d6ec0733e75c$var$_context(this);
        self.enable = function(e) {
            if (!self.isEnabled) {
                $a129d6ec0733e75c$var$_addListener(isViewport ? ownerDoc : target, "scroll", $a129d6ec0733e75c$var$_onScroll);
                type.indexOf("scroll") >= 0 && $a129d6ec0733e75c$var$_addListener(isViewport ? ownerDoc : target, "scroll", onScroll, preventDefault, capture);
                type.indexOf("wheel") >= 0 && $a129d6ec0733e75c$var$_addListener(target, "wheel", _onWheel, preventDefault, capture);
                if (type.indexOf("touch") >= 0 && $a129d6ec0733e75c$var$_isTouch || type.indexOf("pointer") >= 0) {
                    $a129d6ec0733e75c$var$_addListener(target, $a129d6ec0733e75c$var$_eventTypes[0], _onPress, preventDefault, capture);
                    $a129d6ec0733e75c$var$_addListener(ownerDoc, $a129d6ec0733e75c$var$_eventTypes[2], _onRelease);
                    $a129d6ec0733e75c$var$_addListener(ownerDoc, $a129d6ec0733e75c$var$_eventTypes[3], _onRelease);
                    allowClicks && $a129d6ec0733e75c$var$_addListener(target, "click", clickCapture, false, true);
                    onClick && $a129d6ec0733e75c$var$_addListener(target, "click", _onClick);
                    onGestureStart && $a129d6ec0733e75c$var$_addListener(ownerDoc, "gesturestart", _onGestureStart);
                    onGestureEnd && $a129d6ec0733e75c$var$_addListener(ownerDoc, "gestureend", _onGestureEnd);
                    onHover && $a129d6ec0733e75c$var$_addListener(target, $a129d6ec0733e75c$var$_pointerType + "enter", _onHover);
                    onHoverEnd && $a129d6ec0733e75c$var$_addListener(target, $a129d6ec0733e75c$var$_pointerType + "leave", _onHoverEnd);
                    onMove && $a129d6ec0733e75c$var$_addListener(target, $a129d6ec0733e75c$var$_pointerType + "move", _onMove);
                }
                self.isEnabled = true;
                e && e.type && _onPress(e);
                onEnable && onEnable(self);
            }
            return self;
        };
        self.disable = function() {
            if (self.isEnabled) {
                // only remove the _onScroll listener if there aren't any others that rely on the functionality.
                $a129d6ec0733e75c$var$_observers.filter(function(o) {
                    return o !== self && $a129d6ec0733e75c$export$4330f3a92e5d2e94(o.target);
                }).length || $a129d6ec0733e75c$var$_removeListener(isViewport ? ownerDoc : target, "scroll", $a129d6ec0733e75c$var$_onScroll);
                if (self.isPressed) {
                    self._vx.reset();
                    self._vy.reset();
                    $a129d6ec0733e75c$var$_removeListener(isNormalizer ? target : ownerDoc, $a129d6ec0733e75c$var$_eventTypes[1], _onDrag, true);
                }
                $a129d6ec0733e75c$var$_removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
                $a129d6ec0733e75c$var$_removeListener(target, "wheel", _onWheel, capture);
                $a129d6ec0733e75c$var$_removeListener(target, $a129d6ec0733e75c$var$_eventTypes[0], _onPress, capture);
                $a129d6ec0733e75c$var$_removeListener(ownerDoc, $a129d6ec0733e75c$var$_eventTypes[2], _onRelease);
                $a129d6ec0733e75c$var$_removeListener(ownerDoc, $a129d6ec0733e75c$var$_eventTypes[3], _onRelease);
                $a129d6ec0733e75c$var$_removeListener(target, "click", clickCapture, true);
                $a129d6ec0733e75c$var$_removeListener(target, "click", _onClick);
                $a129d6ec0733e75c$var$_removeListener(ownerDoc, "gesturestart", _onGestureStart);
                $a129d6ec0733e75c$var$_removeListener(ownerDoc, "gestureend", _onGestureEnd);
                $a129d6ec0733e75c$var$_removeListener(target, $a129d6ec0733e75c$var$_pointerType + "enter", _onHover);
                $a129d6ec0733e75c$var$_removeListener(target, $a129d6ec0733e75c$var$_pointerType + "leave", _onHoverEnd);
                $a129d6ec0733e75c$var$_removeListener(target, $a129d6ec0733e75c$var$_pointerType + "move", _onMove);
                self.isEnabled = self.isPressed = self.isDragging = false;
                onDisable && onDisable(self);
            }
        };
        self.kill = self.revert = function() {
            self.disable();
            var i = $a129d6ec0733e75c$var$_observers.indexOf(self);
            i >= 0 && $a129d6ec0733e75c$var$_observers.splice(i, 1);
            $a129d6ec0733e75c$var$_normalizer === self && ($a129d6ec0733e75c$var$_normalizer = 0);
        };
        $a129d6ec0733e75c$var$_observers.push(self);
        isNormalizer && $a129d6ec0733e75c$export$4330f3a92e5d2e94(target) && ($a129d6ec0733e75c$var$_normalizer = self);
        self.enable(event);
    };
    $a129d6ec0733e75c$var$_createClass(Observer, [
        {
            key: "velocityX",
            get: function get() {
                return this._vx.getVelocity();
            }
        },
        {
            key: "velocityY",
            get: function get() {
                return this._vy.getVelocity();
            }
        }
    ]);
    return Observer;
}();
$a129d6ec0733e75c$export$c1cbdee04e18ea8b.version = "3.12.1";
$a129d6ec0733e75c$export$c1cbdee04e18ea8b.create = function(vars) {
    return new $a129d6ec0733e75c$export$c1cbdee04e18ea8b(vars);
};
$a129d6ec0733e75c$export$c1cbdee04e18ea8b.register = $a129d6ec0733e75c$var$_initCore;
$a129d6ec0733e75c$export$c1cbdee04e18ea8b.getAll = function() {
    return $a129d6ec0733e75c$var$_observers.slice();
};
$a129d6ec0733e75c$export$c1cbdee04e18ea8b.getById = function(id) {
    return $a129d6ec0733e75c$var$_observers.filter(function(o) {
        return o.vars.id === id;
    })[0];
};
$a129d6ec0733e75c$var$_getGSAP() && $a129d6ec0733e75c$var$gsap.registerPlugin($a129d6ec0733e75c$export$c1cbdee04e18ea8b);


var $79bd7f461221d269$var$gsap, $79bd7f461221d269$var$_coreInitted, $79bd7f461221d269$var$_win, $79bd7f461221d269$var$_doc, $79bd7f461221d269$var$_docEl, $79bd7f461221d269$var$_body, $79bd7f461221d269$var$_root, $79bd7f461221d269$var$_resizeDelay, $79bd7f461221d269$var$_toArray, $79bd7f461221d269$var$_clamp, $79bd7f461221d269$var$_time2, $79bd7f461221d269$var$_syncInterval, $79bd7f461221d269$var$_refreshing, $79bd7f461221d269$var$_pointerIsDown, $79bd7f461221d269$var$_transformProp, $79bd7f461221d269$var$_i, $79bd7f461221d269$var$_prevWidth, $79bd7f461221d269$var$_prevHeight, $79bd7f461221d269$var$_autoRefresh, $79bd7f461221d269$var$_sort, $79bd7f461221d269$var$_suppressOverwrites, $79bd7f461221d269$var$_ignoreResize, $79bd7f461221d269$var$_normalizer, $79bd7f461221d269$var$_ignoreMobileResize, $79bd7f461221d269$var$_baseScreenHeight, $79bd7f461221d269$var$_baseScreenWidth, $79bd7f461221d269$var$_fixIOSBug, $79bd7f461221d269$var$_context, $79bd7f461221d269$var$_scrollRestoration, $79bd7f461221d269$var$_limitCallbacks, // if true, we'll only trigger callbacks if the active state toggles, so if you scroll immediately past both the start and end positions of a ScrollTrigger (thus inactive to inactive), neither its onEnter nor onLeave will be called. This is useful during startup.
$79bd7f461221d269$var$_startup = 1, $79bd7f461221d269$var$_getTime = Date.now, $79bd7f461221d269$var$_time1 = $79bd7f461221d269$var$_getTime(), $79bd7f461221d269$var$_lastScrollTime = 0, $79bd7f461221d269$var$_enabled = 0, $79bd7f461221d269$var$_parseClamp = function _parseClamp(value, type, self) {
    var clamp = $79bd7f461221d269$var$_isString(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
    self["_" + type + "Clamp"] = clamp;
    return clamp ? value.substr(6, value.length - 7) : value;
}, $79bd7f461221d269$var$_keepClamp = function _keepClamp(value, clamp) {
    return clamp && (!$79bd7f461221d269$var$_isString(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
}, $79bd7f461221d269$var$_rafBugFix = function _rafBugFix() {
    return $79bd7f461221d269$var$_enabled && requestAnimationFrame(_rafBugFix);
}, // in some browsers (like Firefox), screen repaints weren't consistent unless we had SOMETHING queued up in requestAnimationFrame()! So this just creates a super simple loop to keep it alive and smooth out repaints.
$79bd7f461221d269$var$_pointerDownHandler = function _pointerDownHandler() {
    return $79bd7f461221d269$var$_pointerIsDown = 1;
}, $79bd7f461221d269$var$_pointerUpHandler = function _pointerUpHandler() {
    return $79bd7f461221d269$var$_pointerIsDown = 0;
}, $79bd7f461221d269$var$_passThrough = function _passThrough(v) {
    return v;
}, $79bd7f461221d269$var$_round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
}, $79bd7f461221d269$var$_windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, $79bd7f461221d269$var$_getGSAP = function _getGSAP() {
    return $79bd7f461221d269$var$gsap || $79bd7f461221d269$var$_windowExists() && ($79bd7f461221d269$var$gsap = window.gsap) && $79bd7f461221d269$var$gsap.registerPlugin && $79bd7f461221d269$var$gsap;
}, $79bd7f461221d269$var$_isViewport = function _isViewport(e) {
    return !!~$79bd7f461221d269$var$_root.indexOf(e);
}, $79bd7f461221d269$var$_getBoundsFunc = function _getBoundsFunc(element) {
    return (0, $a129d6ec0733e75c$export$6078f1ef08b38af9)(element, "getBoundingClientRect") || ($79bd7f461221d269$var$_isViewport(element) ? function() {
        $79bd7f461221d269$var$_winOffsets.width = $79bd7f461221d269$var$_win.innerWidth;
        $79bd7f461221d269$var$_winOffsets.height = $79bd7f461221d269$var$_win.innerHeight;
        return $79bd7f461221d269$var$_winOffsets;
    } : function() {
        return $79bd7f461221d269$var$_getBounds(element);
    });
}, $79bd7f461221d269$var$_getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref) {
    var d = _ref.d, d2 = _ref.d2, a = _ref.a;
    return (a = (0, $a129d6ec0733e75c$export$6078f1ef08b38af9)(scroller, "getBoundingClientRect")) ? function() {
        return a()[d];
    } : function() {
        return (isViewport ? $79bd7f461221d269$var$_win["inner" + d2] : scroller["client" + d2]) || 0;
    };
}, $79bd7f461221d269$var$_getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
    return !isViewport || ~(0, $a129d6ec0733e75c$export$d8e56d510a804d0a).indexOf(element) ? $79bd7f461221d269$var$_getBoundsFunc(element) : function() {
        return $79bd7f461221d269$var$_winOffsets;
    };
}, $79bd7f461221d269$var$_maxScroll = function _maxScroll(element, _ref2) {
    var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
    return Math.max(0, (s = "scroll" + d2, a = (0, $a129d6ec0733e75c$export$6078f1ef08b38af9)(element, s)) ? a() - $79bd7f461221d269$var$_getBoundsFunc(element)()[d] : $79bd7f461221d269$var$_isViewport(element) ? ($79bd7f461221d269$var$_docEl[s] || $79bd7f461221d269$var$_body[s]) - ($79bd7f461221d269$var$_win["inner" + d2] || $79bd7f461221d269$var$_docEl["client" + d2] || $79bd7f461221d269$var$_body["client" + d2]) : element[s] - element["offset" + d2]);
}, $79bd7f461221d269$var$_iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
    for(var i = 0; i < $79bd7f461221d269$var$_autoRefresh.length; i += 3)(!events || ~events.indexOf($79bd7f461221d269$var$_autoRefresh[i + 1])) && func($79bd7f461221d269$var$_autoRefresh[i], $79bd7f461221d269$var$_autoRefresh[i + 1], $79bd7f461221d269$var$_autoRefresh[i + 2]);
}, $79bd7f461221d269$var$_isString = function _isString(value) {
    return typeof value === "string";
}, $79bd7f461221d269$var$_isFunction = function _isFunction(value) {
    return typeof value === "function";
}, $79bd7f461221d269$var$_isNumber = function _isNumber(value) {
    return typeof value === "number";
}, $79bd7f461221d269$var$_isObject = function _isObject(value) {
    return typeof value === "object";
}, $79bd7f461221d269$var$_endAnimation = function _endAnimation(animation, reversed, pause) {
    return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
}, $79bd7f461221d269$var$_callback = function _callback(self, func) {
    if (self.enabled) {
        var result = func(self);
        result && result.totalTime && (self.callbackAnimation = result);
    }
}, $79bd7f461221d269$var$_abs = Math.abs, $79bd7f461221d269$var$_left = "left", $79bd7f461221d269$var$_top = "top", $79bd7f461221d269$var$_right = "right", $79bd7f461221d269$var$_bottom = "bottom", $79bd7f461221d269$var$_width = "width", $79bd7f461221d269$var$_height = "height", $79bd7f461221d269$var$_Right = "Right", $79bd7f461221d269$var$_Left = "Left", $79bd7f461221d269$var$_Top = "Top", $79bd7f461221d269$var$_Bottom = "Bottom", $79bd7f461221d269$var$_padding = "padding", $79bd7f461221d269$var$_margin = "margin", $79bd7f461221d269$var$_Width = "Width", $79bd7f461221d269$var$_Height = "Height", $79bd7f461221d269$var$_px = "px", $79bd7f461221d269$var$_getComputedStyle = function _getComputedStyle(element) {
    return $79bd7f461221d269$var$_win.getComputedStyle(element);
}, $79bd7f461221d269$var$_makePositionable = function _makePositionable(element) {
    // if the element already has position: absolute or fixed, leave that, otherwise make it position: relative
    var position = $79bd7f461221d269$var$_getComputedStyle(element).position;
    element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
}, $79bd7f461221d269$var$_setDefaults = function _setDefaults(obj, defaults) {
    for(var p in defaults)p in obj || (obj[p] = defaults[p]);
    return obj;
}, $79bd7f461221d269$var$_getBounds = function _getBounds(element, withoutTransforms) {
    var tween = withoutTransforms && $79bd7f461221d269$var$_getComputedStyle(element)[$79bd7f461221d269$var$_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && $79bd7f461221d269$var$gsap.to(element, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1), bounds = element.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
}, $79bd7f461221d269$var$_getSize = function _getSize(element, _ref3) {
    var d2 = _ref3.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
}, $79bd7f461221d269$var$_getLabelRatioArray = function _getLabelRatioArray(timeline) {
    var a = [], labels = timeline.labels, duration = timeline.duration(), p;
    for(p in labels)a.push(labels[p] / duration);
    return a;
}, $79bd7f461221d269$var$_getClosestLabel = function _getClosestLabel(animation) {
    return function(value) {
        return $79bd7f461221d269$var$gsap.utils.snap($79bd7f461221d269$var$_getLabelRatioArray(animation), value);
    };
}, $79bd7f461221d269$var$_snapDirectional = function _snapDirectional(snapIncrementOrArray) {
    var snap = $79bd7f461221d269$var$gsap.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a, b) {
        return a - b;
    });
    return a ? function(value, direction, threshold) {
        if (threshold === void 0) threshold = 1e-3;
        var i;
        if (!direction) return snap(value);
        if (direction > 0) {
            value -= threshold; // to avoid rounding errors. If we're too strict, it might snap forward, then immediately again, and again.
            for(i = 0; i < a.length; i++){
                if (a[i] >= value) return a[i];
            }
            return a[i - 1];
        } else {
            i = a.length;
            value += threshold;
            while(i--){
                if (a[i] <= value) return a[i];
            }
        }
        return a[0];
    } : function(value, direction, threshold) {
        if (threshold === void 0) threshold = 1e-3;
        var snapped = snap(value);
        return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
    };
}, $79bd7f461221d269$var$_getLabelAtDirection = function _getLabelAtDirection(timeline) {
    return function(value, st) {
        return $79bd7f461221d269$var$_snapDirectional($79bd7f461221d269$var$_getLabelRatioArray(timeline))(value, st.direction);
    };
}, $79bd7f461221d269$var$_multiListener = function _multiListener(func, element, types, callback) {
    return types.split(",").forEach(function(type) {
        return func(element, type, callback);
    });
}, $79bd7f461221d269$var$_addListener = function _addListener(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
        passive: !nonPassive,
        capture: !!capture
    });
}, $79bd7f461221d269$var$_removeListener = function _removeListener(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
}, $79bd7f461221d269$var$_wheelListener = function _wheelListener(func, el, scrollFunc) {
    scrollFunc = scrollFunc && scrollFunc.wheelHandler;
    if (scrollFunc) {
        func(el, "wheel", scrollFunc);
        func(el, "touchmove", scrollFunc);
    }
}, $79bd7f461221d269$var$_markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, $79bd7f461221d269$var$_defaults = {
    toggleActions: "play",
    anticipatePin: 0
}, $79bd7f461221d269$var$_keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
}, $79bd7f461221d269$var$_offsetToPx = function _offsetToPx(value, size) {
    if ($79bd7f461221d269$var$_isString(value)) {
        var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
        if (~eqIndex) {
            value.indexOf("%") > eqIndex && (relative *= size / 100);
            value = value.substr(0, eqIndex - 1);
        }
        value = relative + (value in $79bd7f461221d269$var$_keywords ? $79bd7f461221d269$var$_keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
    }
    return value;
}, $79bd7f461221d269$var$_createMarker = function _createMarker(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
    var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
    var e = $79bd7f461221d269$var$_doc.createElement("div"), useFixedPosition = $79bd7f461221d269$var$_isViewport(container) || (0, $a129d6ec0733e75c$export$6078f1ef08b38af9)(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? $79bd7f461221d269$var$_body : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === (0, $a129d6ec0733e75c$export$8e40fc98ff518e9d) ? $79bd7f461221d269$var$_right : $79bd7f461221d269$var$_bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e._isStart = isStart;
    e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
    e.style.cssText = css;
    e.innerText = name || name === 0 ? type + "-" + name : type;
    parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
    e._offset = e["offset" + direction.op.d2];
    $79bd7f461221d269$var$_positionMarker(e, 0, direction, isStart);
    return e;
}, $79bd7f461221d269$var$_positionMarker = function _positionMarker(marker, start, direction, flipped) {
    var vars = {
        display: "block"
    }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + $79bd7f461221d269$var$_Width] = 1;
    vars["border" + oppositeSide + $79bd7f461221d269$var$_Width] = 0;
    vars[direction.p] = start + "px";
    $79bd7f461221d269$var$gsap.set(marker, vars);
}, $79bd7f461221d269$var$_triggers = [], $79bd7f461221d269$var$_ids = {}, $79bd7f461221d269$var$_rafID, $79bd7f461221d269$var$_sync = function _sync() {
    return $79bd7f461221d269$var$_getTime() - $79bd7f461221d269$var$_lastScrollTime > 34 && ($79bd7f461221d269$var$_rafID || ($79bd7f461221d269$var$_rafID = requestAnimationFrame($79bd7f461221d269$var$_updateAll)));
}, $79bd7f461221d269$var$_onScroll = function _onScroll() {
    // previously, we tried to optimize performance by batching/deferring to the next requestAnimationFrame(), but discovered that Safari has a few bugs that make this unworkable (especially on iOS). See https://codepen.io/GreenSock/pen/16c435b12ef09c38125204818e7b45fc?editors=0010 and https://codepen.io/GreenSock/pen/JjOxYpQ/3dd65ccec5a60f1d862c355d84d14562?editors=0010 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503?editors=0010
    if (!$79bd7f461221d269$var$_normalizer || !$79bd7f461221d269$var$_normalizer.isPressed || $79bd7f461221d269$var$_normalizer.startX > $79bd7f461221d269$var$_body.clientWidth) {
        // if the user is dragging the scrollbar, allow it.
        (0, $a129d6ec0733e75c$export$3cd1cee43d19b683).cache++;
        if ($79bd7f461221d269$var$_normalizer) $79bd7f461221d269$var$_rafID || ($79bd7f461221d269$var$_rafID = requestAnimationFrame($79bd7f461221d269$var$_updateAll));
        else $79bd7f461221d269$var$_updateAll(); // Safari in particular (on desktop) NEEDS the immediate update rather than waiting for a requestAnimationFrame() whereas iOS seems to benefit from waiting for the requestAnimationFrame() tick, at least when normalizing. See https://codepen.io/GreenSock/pen/qBYozqO?editors=0110
        $79bd7f461221d269$var$_lastScrollTime || $79bd7f461221d269$var$_dispatch("scrollStart");
        $79bd7f461221d269$var$_lastScrollTime = $79bd7f461221d269$var$_getTime();
    }
}, $79bd7f461221d269$var$_setBaseDimensions = function _setBaseDimensions() {
    $79bd7f461221d269$var$_baseScreenWidth = $79bd7f461221d269$var$_win.innerWidth;
    $79bd7f461221d269$var$_baseScreenHeight = $79bd7f461221d269$var$_win.innerHeight;
}, $79bd7f461221d269$var$_onResize = function _onResize() {
    (0, $a129d6ec0733e75c$export$3cd1cee43d19b683).cache++;
    !$79bd7f461221d269$var$_refreshing && !$79bd7f461221d269$var$_ignoreResize && !$79bd7f461221d269$var$_doc.fullscreenElement && !$79bd7f461221d269$var$_doc.webkitFullscreenElement && (!$79bd7f461221d269$var$_ignoreMobileResize || $79bd7f461221d269$var$_baseScreenWidth !== $79bd7f461221d269$var$_win.innerWidth || Math.abs($79bd7f461221d269$var$_win.innerHeight - $79bd7f461221d269$var$_baseScreenHeight) > $79bd7f461221d269$var$_win.innerHeight * 0.25) && $79bd7f461221d269$var$_resizeDelay.restart(true);
}, // ignore resizes triggered by refresh()
$79bd7f461221d269$var$_listeners = {}, $79bd7f461221d269$var$_emptyArray = [], $79bd7f461221d269$var$_softRefresh = function _softRefresh() {
    return $79bd7f461221d269$var$_removeListener($79bd7f461221d269$export$875bcbe48555930, "scrollEnd", _softRefresh) || $79bd7f461221d269$var$_refreshAll(true);
}, $79bd7f461221d269$var$_dispatch = function _dispatch(type) {
    return $79bd7f461221d269$var$_listeners[type] && $79bd7f461221d269$var$_listeners[type].map(function(f) {
        return f();
    }) || $79bd7f461221d269$var$_emptyArray;
}, $79bd7f461221d269$var$_savedStyles = [], // when ScrollTrigger.saveStyles() is called, the inline styles are recorded in this Array in a sequential format like [element, cssText, gsCache, media]. This keeps it very memory-efficient and fast to iterate through.
$79bd7f461221d269$var$_revertRecorded = function _revertRecorded(media) {
    for(var i = 0; i < $79bd7f461221d269$var$_savedStyles.length; i += 5)if (!media || $79bd7f461221d269$var$_savedStyles[i + 4] && $79bd7f461221d269$var$_savedStyles[i + 4].query === media) {
        $79bd7f461221d269$var$_savedStyles[i].style.cssText = $79bd7f461221d269$var$_savedStyles[i + 1];
        $79bd7f461221d269$var$_savedStyles[i].getBBox && $79bd7f461221d269$var$_savedStyles[i].setAttribute("transform", $79bd7f461221d269$var$_savedStyles[i + 2] || "");
        $79bd7f461221d269$var$_savedStyles[i + 3].uncache = 1;
    }
}, $79bd7f461221d269$var$_revertAll = function _revertAll(kill, media) {
    var trigger;
    for($79bd7f461221d269$var$_i = 0; $79bd7f461221d269$var$_i < $79bd7f461221d269$var$_triggers.length; $79bd7f461221d269$var$_i++){
        trigger = $79bd7f461221d269$var$_triggers[$79bd7f461221d269$var$_i];
        if (trigger && (!media || trigger._ctx === media)) {
            if (kill) trigger.kill(1);
            else trigger.revert(true, true);
        }
    }
    media && $79bd7f461221d269$var$_revertRecorded(media);
    media || $79bd7f461221d269$var$_dispatch("revert");
}, $79bd7f461221d269$var$_clearScrollMemory = function _clearScrollMemory(scrollRestoration, force) {
    // zero-out all the recorded scroll positions. Don't use _triggers because if, for example, .matchMedia() is used to create some ScrollTriggers and then the user resizes and it removes ALL ScrollTriggers, and then go back to a size where there are ScrollTriggers, it would have kept the position(s) saved from the initial state.
    (0, $a129d6ec0733e75c$export$3cd1cee43d19b683).cache++;
    (force || !$79bd7f461221d269$var$_refreshingAll) && (0, $a129d6ec0733e75c$export$3cd1cee43d19b683).forEach(function(obj) {
        return $79bd7f461221d269$var$_isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
    });
    $79bd7f461221d269$var$_isString(scrollRestoration) && ($79bd7f461221d269$var$_win.history.scrollRestoration = $79bd7f461221d269$var$_scrollRestoration = scrollRestoration);
}, $79bd7f461221d269$var$_refreshingAll, $79bd7f461221d269$var$_refreshID = 0, $79bd7f461221d269$var$_queueRefreshID, $79bd7f461221d269$var$_queueRefreshAll = function _queueRefreshAll() {
    // we don't want to call _refreshAll() every time we create a new ScrollTrigger (for performance reasons) - it's better to batch them. Some frameworks dynamically load content and we can't rely on the window's "load" or "DOMContentLoaded" events to trigger it.
    if ($79bd7f461221d269$var$_queueRefreshID !== $79bd7f461221d269$var$_refreshID) {
        var id = $79bd7f461221d269$var$_queueRefreshID = $79bd7f461221d269$var$_refreshID;
        requestAnimationFrame(function() {
            return id === $79bd7f461221d269$var$_refreshID && $79bd7f461221d269$var$_refreshAll(true);
        });
    }
}, $79bd7f461221d269$var$_refreshAll = function _refreshAll(force, skipRevert) {
    if ($79bd7f461221d269$var$_lastScrollTime && !force) {
        $79bd7f461221d269$var$_addListener($79bd7f461221d269$export$875bcbe48555930, "scrollEnd", $79bd7f461221d269$var$_softRefresh);
        return;
    }
    $79bd7f461221d269$var$_refreshingAll = $79bd7f461221d269$export$875bcbe48555930.isRefreshing = true;
    (0, $a129d6ec0733e75c$export$3cd1cee43d19b683).forEach(function(obj) {
        return $79bd7f461221d269$var$_isFunction(obj) && ++obj.cacheID && (obj.rec = obj());
    }); // force the clearing of the cache because some browsers take a little while to dispatch the "scroll" event and the user may have changed the scroll position and then called ScrollTrigger.refresh() right away
    var refreshInits = $79bd7f461221d269$var$_dispatch("refreshInit");
    $79bd7f461221d269$var$_sort && $79bd7f461221d269$export$875bcbe48555930.sort();
    skipRevert || $79bd7f461221d269$var$_revertAll();
    (0, $a129d6ec0733e75c$export$3cd1cee43d19b683).forEach(function(obj) {
        if ($79bd7f461221d269$var$_isFunction(obj)) {
            obj.smooth && (obj.target.style.scrollBehavior = "auto"); // smooth scrolling interferes
            obj(0);
        }
    });
    $79bd7f461221d269$var$_triggers.slice(0).forEach(function(t) {
        return t.refresh();
    }); // don't loop with _i because during a refresh() someone could call ScrollTrigger.update() which would iterate through _i resulting in a skip.
    $79bd7f461221d269$var$_triggers.forEach(function(t, i) {
        // nested pins (pinnedContainer) with pinSpacing may expand the container, so we must accommodate that here.
        if (t._subPinOffset && t.pin) {
            var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t.pin[prop];
            t.revert(true, 1);
            t.adjustPinSpacing(t.pin[prop] - original);
            t.refresh();
        }
    });
    $79bd7f461221d269$var$_triggers.forEach(function(t) {
        // the scroller's max scroll position may change after all the ScrollTriggers refreshed (like pinning could push it down), so we need to loop back and correct any with end: "max". Same for anything with a clamped end
        var max = $79bd7f461221d269$var$_maxScroll(t.scroller, t._dir);
        (t.vars.end === "max" || t._endClamp && t.end > max) && t.setPositions(t.start, Math.max(t.start + 1, max), true);
    });
    refreshInits.forEach(function(result) {
        return result && result.render && result.render(-1);
    }); // if the onRefreshInit() returns an animation (typically a gsap.set()), revert it. This makes it easy to put things in a certain spot before refreshing for measurement purposes, and then put things back.
    (0, $a129d6ec0733e75c$export$3cd1cee43d19b683).forEach(function(obj) {
        if ($79bd7f461221d269$var$_isFunction(obj)) {
            obj.smooth && requestAnimationFrame(function() {
                return obj.target.style.scrollBehavior = "smooth";
            });
            obj.rec && obj(obj.rec);
        }
    });
    $79bd7f461221d269$var$_clearScrollMemory($79bd7f461221d269$var$_scrollRestoration, 1);
    $79bd7f461221d269$var$_resizeDelay.pause();
    $79bd7f461221d269$var$_refreshID++;
    $79bd7f461221d269$var$_refreshingAll = 2;
    $79bd7f461221d269$var$_updateAll(2);
    $79bd7f461221d269$var$_triggers.forEach(function(t) {
        return $79bd7f461221d269$var$_isFunction(t.vars.onRefresh) && t.vars.onRefresh(t);
    });
    $79bd7f461221d269$var$_refreshingAll = $79bd7f461221d269$export$875bcbe48555930.isRefreshing = false;
    $79bd7f461221d269$var$_dispatch("refresh");
}, $79bd7f461221d269$var$_lastScroll = 0, $79bd7f461221d269$var$_direction = 1, $79bd7f461221d269$var$_primary, $79bd7f461221d269$var$_updateAll = function _updateAll(force) {
    if (!$79bd7f461221d269$var$_refreshingAll || force === 2) {
        $79bd7f461221d269$export$875bcbe48555930.isUpdating = true;
        $79bd7f461221d269$var$_primary && $79bd7f461221d269$var$_primary.update(0); // ScrollSmoother uses refreshPriority -9999 to become the primary that gets updated before all others because it affects the scroll position.
        var l = $79bd7f461221d269$var$_triggers.length, time = $79bd7f461221d269$var$_getTime(), recordVelocity = time - $79bd7f461221d269$var$_time1 >= 50, scroll = l && $79bd7f461221d269$var$_triggers[0].scroll();
        $79bd7f461221d269$var$_direction = $79bd7f461221d269$var$_lastScroll > scroll ? -1 : 1;
        $79bd7f461221d269$var$_refreshingAll || ($79bd7f461221d269$var$_lastScroll = scroll);
        if (recordVelocity) {
            if ($79bd7f461221d269$var$_lastScrollTime && !$79bd7f461221d269$var$_pointerIsDown && time - $79bd7f461221d269$var$_lastScrollTime > 200) {
                $79bd7f461221d269$var$_lastScrollTime = 0;
                $79bd7f461221d269$var$_dispatch("scrollEnd");
            }
            $79bd7f461221d269$var$_time2 = $79bd7f461221d269$var$_time1;
            $79bd7f461221d269$var$_time1 = time;
        }
        if ($79bd7f461221d269$var$_direction < 0) {
            $79bd7f461221d269$var$_i = l;
            while($79bd7f461221d269$var$_i-- > 0)$79bd7f461221d269$var$_triggers[$79bd7f461221d269$var$_i] && $79bd7f461221d269$var$_triggers[$79bd7f461221d269$var$_i].update(0, recordVelocity);
            $79bd7f461221d269$var$_direction = 1;
        } else for($79bd7f461221d269$var$_i = 0; $79bd7f461221d269$var$_i < l; $79bd7f461221d269$var$_i++)$79bd7f461221d269$var$_triggers[$79bd7f461221d269$var$_i] && $79bd7f461221d269$var$_triggers[$79bd7f461221d269$var$_i].update(0, recordVelocity);
        $79bd7f461221d269$export$875bcbe48555930.isUpdating = false;
    }
    $79bd7f461221d269$var$_rafID = 0;
}, $79bd7f461221d269$var$_propNamesToCopy = [
    $79bd7f461221d269$var$_left,
    $79bd7f461221d269$var$_top,
    $79bd7f461221d269$var$_bottom,
    $79bd7f461221d269$var$_right,
    $79bd7f461221d269$var$_margin + $79bd7f461221d269$var$_Bottom,
    $79bd7f461221d269$var$_margin + $79bd7f461221d269$var$_Right,
    $79bd7f461221d269$var$_margin + $79bd7f461221d269$var$_Top,
    $79bd7f461221d269$var$_margin + $79bd7f461221d269$var$_Left,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order"
], $79bd7f461221d269$var$_stateProps = $79bd7f461221d269$var$_propNamesToCopy.concat([
    $79bd7f461221d269$var$_width,
    $79bd7f461221d269$var$_height,
    "boxSizing",
    "max" + $79bd7f461221d269$var$_Width,
    "max" + $79bd7f461221d269$var$_Height,
    "position",
    $79bd7f461221d269$var$_margin,
    $79bd7f461221d269$var$_padding,
    $79bd7f461221d269$var$_padding + $79bd7f461221d269$var$_Top,
    $79bd7f461221d269$var$_padding + $79bd7f461221d269$var$_Right,
    $79bd7f461221d269$var$_padding + $79bd7f461221d269$var$_Bottom,
    $79bd7f461221d269$var$_padding + $79bd7f461221d269$var$_Left
]), $79bd7f461221d269$var$_swapPinOut = function _swapPinOut(pin, spacer, state) {
    $79bd7f461221d269$var$_setState(state);
    var cache = pin._gsap;
    if (cache.spacerIsNative) $79bd7f461221d269$var$_setState(cache.spacerState);
    else if (pin._gsap.swappedIn) {
        var parent = spacer.parentNode;
        if (parent) {
            parent.insertBefore(pin, spacer);
            parent.removeChild(spacer);
        }
    }
    pin._gsap.swappedIn = false;
}, $79bd7f461221d269$var$_swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
    if (!pin._gsap.swappedIn) {
        var i = $79bd7f461221d269$var$_propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
        while(i--){
            p = $79bd7f461221d269$var$_propNamesToCopy[i];
            spacerStyle[p] = cs[p];
        }
        spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
        cs.display === "inline" && (spacerStyle.display = "inline-block");
        pinStyle[$79bd7f461221d269$var$_bottom] = pinStyle[$79bd7f461221d269$var$_right] = "auto";
        spacerStyle.flexBasis = cs.flexBasis || "auto";
        spacerStyle.overflow = "visible";
        spacerStyle.boxSizing = "border-box";
        spacerStyle[$79bd7f461221d269$var$_width] = $79bd7f461221d269$var$_getSize(pin, (0, $a129d6ec0733e75c$export$b2cabb342cb0ebe1)) + $79bd7f461221d269$var$_px;
        spacerStyle[$79bd7f461221d269$var$_height] = $79bd7f461221d269$var$_getSize(pin, (0, $a129d6ec0733e75c$export$8e40fc98ff518e9d)) + $79bd7f461221d269$var$_px;
        spacerStyle[$79bd7f461221d269$var$_padding] = pinStyle[$79bd7f461221d269$var$_margin] = pinStyle[$79bd7f461221d269$var$_top] = pinStyle[$79bd7f461221d269$var$_left] = "0";
        $79bd7f461221d269$var$_setState(spacerState);
        pinStyle[$79bd7f461221d269$var$_width] = pinStyle["max" + $79bd7f461221d269$var$_Width] = cs[$79bd7f461221d269$var$_width];
        pinStyle[$79bd7f461221d269$var$_height] = pinStyle["max" + $79bd7f461221d269$var$_Height] = cs[$79bd7f461221d269$var$_height];
        pinStyle[$79bd7f461221d269$var$_padding] = cs[$79bd7f461221d269$var$_padding];
        if (pin.parentNode !== spacer) {
            pin.parentNode.insertBefore(spacer, pin);
            spacer.appendChild(pin);
        }
        pin._gsap.swappedIn = true;
    }
}, $79bd7f461221d269$var$_capsExp = /([A-Z])/g, $79bd7f461221d269$var$_setState = function _setState(state) {
    if (state) {
        var style = state.t.style, l = state.length, i = 0, p, value;
        (state.t._gsap || $79bd7f461221d269$var$gsap.core.getCache(state.t)).uncache = 1; // otherwise transforms may be off
        for(; i < l; i += 2){
            value = state[i + 1];
            p = state[i];
            if (value) style[p] = value;
            else if (style[p]) style.removeProperty(p.replace($79bd7f461221d269$var$_capsExp, "-$1").toLowerCase());
        }
    }
}, $79bd7f461221d269$var$_getState = function _getState(element) {
    // returns an Array with alternating values like [property, value, property, value] and a "t" property pointing to the target (element). Makes it fast and cheap.
    var l = $79bd7f461221d269$var$_stateProps.length, style = element.style, state = [], i = 0;
    for(; i < l; i++)state.push($79bd7f461221d269$var$_stateProps[i], style[$79bd7f461221d269$var$_stateProps[i]]);
    state.t = element;
    return state;
}, $79bd7f461221d269$var$_copyState = function _copyState(state, override, omitOffsets) {
    var result = [], l = state.length, i = omitOffsets ? 8 : 0, // skip top, left, right, bottom if omitOffsets is true
    p;
    for(; i < l; i += 2){
        p = state[i];
        result.push(p, p in override ? override[p] : state[i + 1]);
    }
    result.t = state.t;
    return result;
}, $79bd7f461221d269$var$_winOffsets = {
    left: 0,
    top: 0
}, // // potential future feature (?) Allow users to calculate where a trigger hits (scroll position) like getScrollPosition("#id", "top bottom")
// _getScrollPosition = (trigger, position, {scroller, containerAnimation, horizontal}) => {
// 	scroller = _getTarget(scroller || _win);
// 	let direction = horizontal ? _horizontal : _vertical,
// 		isViewport = _isViewport(scroller);
// 	_getSizeFunc(scroller, isViewport, direction);
// 	return _parsePosition(position, _getTarget(trigger), _getSizeFunc(scroller, isViewport, direction)(), direction, _getScrollFunc(scroller, direction)(), 0, 0, 0, _getOffsetsFunc(scroller, isViewport)(), isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, 0, containerAnimation ? containerAnimation.duration() : _maxScroll(scroller), containerAnimation);
// },
$79bd7f461221d269$var$_parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
    $79bd7f461221d269$var$_isFunction(value) && (value = value(self));
    if ($79bd7f461221d269$var$_isString(value) && value.substr(0, 3) === "max") value = scrollerMax + (value.charAt(4) === "=" ? $79bd7f461221d269$var$_offsetToPx("0" + value.substr(3), scrollerSize) : 0);
    var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
    containerAnimation && containerAnimation.seek(0);
    isNaN(value) || (value = +value); // convert a string number like "45" to an actual number
    if (!$79bd7f461221d269$var$_isNumber(value)) {
        $79bd7f461221d269$var$_isFunction(trigger) && (trigger = trigger(self));
        var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
        element = (0, $a129d6ec0733e75c$export$937374fea3f88711)(trigger, self) || $79bd7f461221d269$var$_body;
        bounds = $79bd7f461221d269$var$_getBounds(element) || {};
        if ((!bounds || !bounds.left && !bounds.top) && $79bd7f461221d269$var$_getComputedStyle(element).display === "none") {
            // if display is "none", it won't report getBoundingClientRect() properly
            display = element.style.display;
            element.style.display = "block";
            bounds = $79bd7f461221d269$var$_getBounds(element);
            display ? element.style.display = display : element.style.removeProperty("display");
        }
        localOffset = $79bd7f461221d269$var$_offsetToPx(offsets[0], bounds[direction.d]);
        globalOffset = $79bd7f461221d269$var$_offsetToPx(offsets[1] || "0", scrollerSize);
        value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
        markerScroller && $79bd7f461221d269$var$_positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
        scrollerSize -= scrollerSize - globalOffset; // adjust for the marker
    } else {
        containerAnimation && (value = $79bd7f461221d269$var$gsap.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
        markerScroller && $79bd7f461221d269$var$_positionMarker(markerScroller, scrollerSize, direction, true);
    }
    if (clampZeroProp) {
        self[clampZeroProp] = value || -0.001;
        value < 0 && (value = 0);
    }
    if (marker) {
        var position = value + scrollerSize, isStart = marker._isStart;
        p1 = "scroll" + direction.d2;
        $79bd7f461221d269$var$_positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max($79bd7f461221d269$var$_body[p1], $79bd7f461221d269$var$_docEl[p1]) : marker.parentNode[p1]) <= position + 1);
        if (useFixedPosition) {
            scrollerBounds = $79bd7f461221d269$var$_getBounds(markerScroller);
            useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + $79bd7f461221d269$var$_px);
        }
    }
    if (containerAnimation && element) {
        p1 = $79bd7f461221d269$var$_getBounds(element);
        containerAnimation.seek(scrollerMax);
        p2 = $79bd7f461221d269$var$_getBounds(element);
        containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
        value = value / containerAnimation._caScrollDist * scrollerMax;
    }
    containerAnimation && containerAnimation.seek(time);
    return containerAnimation ? value : Math.round(value);
}, $79bd7f461221d269$var$_prefixExp = /(webkit|moz|length|cssText|inset)/i, $79bd7f461221d269$var$_reparent = function _reparent(element, parent, top, left) {
    if (element.parentNode !== parent) {
        var style = element.style, p, cs;
        if (parent === $79bd7f461221d269$var$_body) {
            element._stOrig = style.cssText; // record original inline styles so we can revert them later
            cs = $79bd7f461221d269$var$_getComputedStyle(element);
            for(p in cs)// must copy all relevant styles to ensure that nothing changes visually when we reparent to the <body>. Skip the vendor prefixed ones.
            if (!+p && !$79bd7f461221d269$var$_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") style[p] = cs[p];
            style.top = top;
            style.left = left;
        } else style.cssText = element._stOrig;
        $79bd7f461221d269$var$gsap.core.getCache(element).uncache = 1;
        parent.appendChild(element);
    }
}, $79bd7f461221d269$var$_interruptionTracker = function _interruptionTracker(getValueFunc, initialValue, onInterrupt) {
    var last1 = initialValue, last2 = last1;
    return function(value) {
        var current = Math.round(getValueFunc()); // round because in some [very uncommon] Windows environments, scroll can get reported with decimals even though it was set without.
        if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
            // if the user scrolls, kill the tween. iOS Safari intermittently misreports the scroll position, it may be the most recently-set one or the one before that! When Safari is zoomed (CMD-+), it often misreports as 1 pixel off too! So if we set the scroll position to 125, for example, it'll actually report it as 124.
            value = current;
            onInterrupt && onInterrupt();
        }
        last2 = last1;
        last1 = value;
        return value;
    };
}, $79bd7f461221d269$var$_shiftMarker = function _shiftMarker(marker, direction, value) {
    var vars = {};
    vars[direction.p] = "+=" + value;
    $79bd7f461221d269$var$gsap.set(marker, vars);
}, // _mergeAnimations = animations => {
// 	let tl = gsap.timeline({smoothChildTiming: true}).startTime(Math.min(...animations.map(a => a.globalTime(0))));
// 	animations.forEach(a => {let time = a.totalTime(); tl.add(a); a.totalTime(time); });
// 	tl.smoothChildTiming = false;
// 	return tl;
// },
// returns a function that can be used to tween the scroll position in the direction provided, and when doing so it'll add a .tween property to the FUNCTION itself, and remove it when the tween completes or gets killed. This gives us a way to have multiple ScrollTriggers use a central function for any given scroller and see if there's a scroll tween running (which would affect if/how things get updated)
$79bd7f461221d269$var$_getTweenCreator = function _getTweenCreator(scroller, direction) {
    var getScroll = (0, $a129d6ec0733e75c$export$8665aac53dad5647)(scroller, direction), prop = "_scroll" + direction.p2, // add a tweenable property to the scroller that's a getter/setter function, like _scrollTop or _scrollLeft. This way, if someone does gsap.killTweensOf(scroller) it'll kill the scroll tween.
    getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
        var tween = getTween.tween, onComplete = vars.onComplete, modifiers = {};
        initialValue = initialValue || getScroll();
        var checkForInterruption = $79bd7f461221d269$var$_interruptionTracker(getScroll, initialValue, function() {
            tween.kill();
            getTween.tween = 0;
        });
        change2 = change1 && change2 || 0; // if change1 is 0, we set that to the difference and ignore change2. Otherwise, there would be a compound effect.
        change1 = change1 || scrollTo - initialValue;
        tween && tween.kill();
        vars[prop] = scrollTo;
        vars.modifiers = modifiers;
        modifiers[prop] = function() {
            return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
        };
        vars.onUpdate = function() {
            (0, $a129d6ec0733e75c$export$3cd1cee43d19b683).cache++;
            $79bd7f461221d269$var$_updateAll();
        };
        vars.onComplete = function() {
            getTween.tween = 0;
            onComplete && onComplete.call(tween);
        };
        tween = getTween.tween = $79bd7f461221d269$var$gsap.to(scroller, vars);
        return tween;
    };
    scroller[prop] = getScroll;
    getScroll.wheelHandler = function() {
        return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    };
    $79bd7f461221d269$var$_addListener(scroller, "wheel", getScroll.wheelHandler); // Windows machines handle mousewheel scrolling in chunks (like "3 lines per scroll") meaning the typical strategy for cancelling the scroll isn't as sensitive. It's much more likely to match one of the previous 2 scroll event positions. So we kill any snapping as soon as there's a wheel event.
    $79bd7f461221d269$export$875bcbe48555930.isTouch && $79bd7f461221d269$var$_addListener(scroller, "touchmove", getScroll.wheelHandler);
    return getTween;
};
var $79bd7f461221d269$export$875bcbe48555930 = /*#__PURE__*/ function() {
    function ScrollTrigger(vars, animation) {
        $79bd7f461221d269$var$_coreInitted || ScrollTrigger.register($79bd7f461221d269$var$gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
        $79bd7f461221d269$var$_context(this);
        this.init(vars, animation);
    }
    var _proto = ScrollTrigger.prototype;
    _proto.init = function init(vars, animation) {
        this.progress = this.start = 0;
        this.vars && this.kill(true, true); // in case it's being initted again
        if (!$79bd7f461221d269$var$_enabled) {
            this.update = this.refresh = this.kill = $79bd7f461221d269$var$_passThrough;
            return;
        }
        vars = $79bd7f461221d269$var$_setDefaults($79bd7f461221d269$var$_isString(vars) || $79bd7f461221d269$var$_isNumber(vars) || vars.nodeType ? {
            trigger: vars
        } : vars, $79bd7f461221d269$var$_defaults);
        var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? (0, $a129d6ec0733e75c$export$b2cabb342cb0ebe1) : (0, $a129d6ec0733e75c$export$8e40fc98ff518e9d), isToggle = !scrub && scrub !== 0, scroller = (0, $a129d6ec0733e75c$export$937374fea3f88711)(vars.scroller || $79bd7f461221d269$var$_win), scrollerCache = $79bd7f461221d269$var$gsap.core.getCache(scroller), isViewport = $79bd7f461221d269$var$_isViewport(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : (0, $a129d6ec0733e75c$export$6078f1ef08b38af9)(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [
            vars.onEnter,
            vars.onLeave,
            vars.onEnterBack,
            vars.onLeaveBack
        ], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : $79bd7f461221d269$var$_defaults.markers, borderWidth = isViewport ? 0 : parseFloat($79bd7f461221d269$var$_getComputedStyle(scroller)["border" + direction.p2 + $79bd7f461221d269$var$_Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
            return vars.onRefreshInit(self);
        }, getScrollerSize = $79bd7f461221d269$var$_getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = $79bd7f461221d269$var$_getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = (0, $a129d6ec0733e75c$export$8665aac53dad5647)(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap2, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn; // for the sake of efficiency, _startClamp/_endClamp serve like a truthy value indicating that clamping was enabled on the start/end, and ALSO store the actual pre-clamped numeric value. We tap into that in ScrollSmoother for speed effects. So for example, if start="clamp(top bottom)" results in a start of -100 naturally, it would get clamped to 0 but -100 would be stored in _startClamp.
        self._startClamp = self._endClamp = false;
        self._dir = direction;
        anticipatePin *= 45;
        self.scroller = scroller;
        self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
        scroll1 = scrollFunc();
        self.vars = vars;
        animation = animation || vars.animation;
        if ("refreshPriority" in vars) {
            $79bd7f461221d269$var$_sort = 1;
            vars.refreshPriority === -9999 && ($79bd7f461221d269$var$_primary = self); // used by ScrollSmoother
        }
        scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
            top: $79bd7f461221d269$var$_getTweenCreator(scroller, (0, $a129d6ec0733e75c$export$8e40fc98ff518e9d)),
            left: $79bd7f461221d269$var$_getTweenCreator(scroller, (0, $a129d6ec0733e75c$export$b2cabb342cb0ebe1))
        };
        self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
        self.scrubDuration = function(value) {
            scrubSmooth = $79bd7f461221d269$var$_isNumber(value) && value;
            if (!scrubSmooth) {
                scrubTween && scrubTween.progress(1).kill();
                scrubTween = 0;
            } else scrubTween ? scrubTween.duration(value) : scrubTween = $79bd7f461221d269$var$gsap.to(animation, {
                ease: "expo",
                totalProgress: "+=0",
                duration: scrubSmooth,
                paused: true,
                onComplete: function onComplete() {
                    return onScrubComplete && onScrubComplete(self);
                }
            });
        };
        if (animation) {
            animation.vars.lazy = false;
            animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true); // special case: if this ScrollTrigger gets re-initted, a from() tween with a stagger could get initted initially and then reverted on the re-init which means it'll need to get rendered again here to properly display things. Otherwise, See https://greensock.com/forums/topic/36777-scrollsmoother-splittext-nextjs/ and https://codepen.io/GreenSock/pen/eYPyPpd?editors=0010
            self.animation = animation.pause();
            animation.scrollTrigger = self;
            self.scrubDuration(scrub);
            snap1 = 0;
            id || (id = animation.vars.id);
        }
        if (snap) {
            // TODO: potential idea: use legitimate CSS scroll snapping by pushing invisible elements into the DOM that serve as snap positions, and toggle the document.scrollingElement.style.scrollSnapType onToggle. See https://codepen.io/GreenSock/pen/JjLrgWM for a quick proof of concept.
            if (!$79bd7f461221d269$var$_isObject(snap) || snap.push) snap = {
                snapTo: snap
            };
            "scrollBehavior" in $79bd7f461221d269$var$_body.style && $79bd7f461221d269$var$gsap.set(isViewport ? [
                $79bd7f461221d269$var$_body,
                $79bd7f461221d269$var$_docEl
            ] : scroller, {
                scrollBehavior: "auto"
            }); // smooth scrolling doesn't work with snap.
            (0, $a129d6ec0733e75c$export$3cd1cee43d19b683).forEach(function(o) {
                return $79bd7f461221d269$var$_isFunction(o) && o.target === (isViewport ? $79bd7f461221d269$var$_doc.scrollingElement || $79bd7f461221d269$var$_docEl : scroller) && (o.smooth = false);
            }); // note: set smooth to false on both the vertical and horizontal scroll getters/setters
            snapFunc = $79bd7f461221d269$var$_isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? $79bd7f461221d269$var$_getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? $79bd7f461221d269$var$_getLabelAtDirection(animation) : snap.directional !== false ? function(value, st) {
                return $79bd7f461221d269$var$_snapDirectional(snap.snapTo)(value, $79bd7f461221d269$var$_getTime() - lastRefresh < 500 ? 0 : st.direction);
            } : $79bd7f461221d269$var$gsap.utils.snap(snap.snapTo);
            snapDurClamp = snap.duration || {
                min: 0.1,
                max: 2
            };
            snapDurClamp = $79bd7f461221d269$var$_isObject(snapDurClamp) ? $79bd7f461221d269$var$_clamp(snapDurClamp.min, snapDurClamp.max) : $79bd7f461221d269$var$_clamp(snapDurClamp, snapDurClamp);
            snapDelayedCall = $79bd7f461221d269$var$gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function() {
                var scroll = scrollFunc(), refreshedRecently = $79bd7f461221d269$var$_getTime() - lastRefresh < 500, tween = tweenTo.tween;
                if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !$79bd7f461221d269$var$_pointerIsDown && lastSnap !== scroll) {
                    var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap2) / ($79bd7f461221d269$var$_getTime() - $79bd7f461221d269$var$_time2) * 1000 || 0, change1 = $79bd7f461221d269$var$gsap.utils.clamp(-progress, 1 - progress, $79bd7f461221d269$var$_abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap.inertia === false ? 0 : change1), endValue = $79bd7f461221d269$var$_clamp(0, 1, snapFunc(naturalEnd, self)), endScroll = Math.round(start + endValue * change), _snap = snap, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
                    if (scroll <= end && scroll >= start && endScroll !== scroll) {
                        if (tween && !tween._initted && tween.data <= $79bd7f461221d269$var$_abs(endScroll - scroll)) // there's an overlapping snap! So we must figure out which one is closer and let that tween live.
                        return;
                        if (snap.inertia === false) change1 = endValue - progress;
                        tweenTo(endScroll, {
                            duration: snapDurClamp($79bd7f461221d269$var$_abs(Math.max($79bd7f461221d269$var$_abs(naturalEnd - totalProgress), $79bd7f461221d269$var$_abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                            ease: snap.ease || "power3",
                            data: $79bd7f461221d269$var$_abs(endScroll - scroll),
                            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
                            onInterrupt: function onInterrupt() {
                                return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
                            },
                            onComplete: function onComplete() {
                                self.update();
                                lastSnap = scrollFunc();
                                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                                onSnapComplete && onSnapComplete(self);
                                _onComplete && _onComplete(self);
                            }
                        }, scroll, change1 * change, endScroll - scroll - change1 * change);
                        onStart && onStart(self, tweenTo.tween);
                    }
                } else if (self.isActive && lastSnap !== scroll) snapDelayedCall.restart(true);
            }).pause();
        }
        id && ($79bd7f461221d269$var$_ids[id] = self);
        trigger = self.trigger = (0, $a129d6ec0733e75c$export$937374fea3f88711)(trigger || pin !== true && pin); // if a trigger has some kind of scroll-related effect applied that could contaminate the "y" or "x" position (like a ScrollSmoother effect), we needed a way to temporarily revert it, so we use the stRevert property of the gsCache. It can return another function that we'll call at the end so it can return to its normal state.
        customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
        customRevertReturn && (customRevertReturn = customRevertReturn(self));
        pin = pin === true ? trigger : (0, $a129d6ec0733e75c$export$937374fea3f88711)(pin);
        $79bd7f461221d269$var$_isString(toggleClass) && (toggleClass = {
            targets: trigger,
            className: toggleClass
        });
        if (pin) {
            pinSpacing === false || pinSpacing === $79bd7f461221d269$var$_margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && $79bd7f461221d269$var$_getComputedStyle(pin.parentNode).display === "flex" ? false : $79bd7f461221d269$var$_padding); // if the parent is display: flex, don't apply pinSpacing by default. We should check that pin.parentNode is an element (not shadow dom window)
            self.pin = pin;
            pinCache = $79bd7f461221d269$var$gsap.core.getCache(pin);
            if (!pinCache.spacer) {
                // record the spacer and pinOriginalState on the cache in case someone tries pinning the same element with MULTIPLE ScrollTriggers - we don't want to have multiple spacers or record the "original" pin state after it has already been affected by another ScrollTrigger.
                if (pinSpacer) {
                    pinSpacer = (0, $a129d6ec0733e75c$export$937374fea3f88711)(pinSpacer);
                    pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement); // for React & Angular
                    pinCache.spacerIsNative = !!pinSpacer;
                    pinSpacer && (pinCache.spacerState = $79bd7f461221d269$var$_getState(pinSpacer));
                }
                pinCache.spacer = spacer = pinSpacer || $79bd7f461221d269$var$_doc.createElement("div");
                spacer.classList.add("pin-spacer");
                id && spacer.classList.add("pin-spacer-" + id);
                pinCache.pinState = pinOriginalState = $79bd7f461221d269$var$_getState(pin);
            } else pinOriginalState = pinCache.pinState;
            vars.force3D !== false && $79bd7f461221d269$var$gsap.set(pin, {
                force3D: true
            });
            self.spacer = spacer = pinCache.spacer;
            cs = $79bd7f461221d269$var$_getComputedStyle(pin);
            spacingStart = cs[pinSpacing + direction.os2];
            pinGetter = $79bd7f461221d269$var$gsap.getProperty(pin);
            pinSetter = $79bd7f461221d269$var$gsap.quickSetter(pin, direction.a, $79bd7f461221d269$var$_px); // pin.firstChild && !_maxScroll(pin, direction) && (pin.style.overflow = "hidden"); // protects from collapsing margins, but can have unintended consequences as demonstrated here: https://codepen.io/GreenSock/pen/1e42c7a73bfa409d2cf1e184e7a4248d so it was removed in favor of just telling people to set up their CSS to avoid the collapsing margins (overflow: hidden | auto is just one option. Another is border-top: 1px solid transparent).
            $79bd7f461221d269$var$_swapPinIn(pin, spacer, cs);
            pinState = $79bd7f461221d269$var$_getState(pin);
        }
        if (markers) {
            markerVars = $79bd7f461221d269$var$_isObject(markers) ? $79bd7f461221d269$var$_setDefaults(markers, $79bd7f461221d269$var$_markerDefaults) : $79bd7f461221d269$var$_markerDefaults;
            markerStartTrigger = $79bd7f461221d269$var$_createMarker("scroller-start", id, scroller, direction, markerVars, 0);
            markerEndTrigger = $79bd7f461221d269$var$_createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
            offset = markerStartTrigger["offset" + direction.op.d2];
            var content = (0, $a129d6ec0733e75c$export$937374fea3f88711)((0, $a129d6ec0733e75c$export$6078f1ef08b38af9)(scroller, "content") || scroller);
            markerStart = this.markerStart = $79bd7f461221d269$var$_createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
            markerEnd = this.markerEnd = $79bd7f461221d269$var$_createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
            containerAnimation && (caMarkerSetter = $79bd7f461221d269$var$gsap.quickSetter([
                markerStart,
                markerEnd
            ], direction.a, $79bd7f461221d269$var$_px));
            if (!useFixedPosition && !((0, $a129d6ec0733e75c$export$d8e56d510a804d0a).length && (0, $a129d6ec0733e75c$export$6078f1ef08b38af9)(scroller, "fixedMarkers") === true)) {
                $79bd7f461221d269$var$_makePositionable(isViewport ? $79bd7f461221d269$var$_body : scroller);
                $79bd7f461221d269$var$gsap.set([
                    markerStartTrigger,
                    markerEndTrigger
                ], {
                    force3D: true
                });
                markerStartSetter = $79bd7f461221d269$var$gsap.quickSetter(markerStartTrigger, direction.a, $79bd7f461221d269$var$_px);
                markerEndSetter = $79bd7f461221d269$var$gsap.quickSetter(markerEndTrigger, direction.a, $79bd7f461221d269$var$_px);
            }
        }
        if (containerAnimation) {
            var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
            containerAnimation.eventCallback("onUpdate", function() {
                self.update(0, 0, 1);
                oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
            });
        }
        self.previous = function() {
            return $79bd7f461221d269$var$_triggers[$79bd7f461221d269$var$_triggers.indexOf(self) - 1];
        };
        self.next = function() {
            return $79bd7f461221d269$var$_triggers[$79bd7f461221d269$var$_triggers.indexOf(self) + 1];
        };
        self.revert = function(revert, temp) {
            if (!temp) return self.kill(true);
             // for compatibility with gsap.context() and gsap.matchMedia() which call revert()
            var r = revert !== false || !self.enabled, prevRefreshing = $79bd7f461221d269$var$_refreshing;
            if (r !== self.isReverted) {
                if (r) {
                    prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0); // record the scroll so we can revert later (repositioning/pinning things can affect scroll position). In the static refresh() method, we first record all the scroll positions as a reference.
                    prevProgress = self.progress;
                    prevAnimProgress = animation && animation.progress();
                }
                markerStart && [
                    markerStart,
                    markerEnd,
                    markerStartTrigger,
                    markerEndTrigger
                ].forEach(function(m) {
                    return m.style.display = r ? "none" : "block";
                });
                if (r) {
                    $79bd7f461221d269$var$_refreshing = self;
                    self.update(r); // make sure the pin is back in its original position so that all the measurements are correct. do this BEFORE swapping the pin out
                }
                if (pin && (!pinReparent || !self.isActive)) {
                    if (r) $79bd7f461221d269$var$_swapPinOut(pin, spacer, pinOriginalState);
                    else $79bd7f461221d269$var$_swapPinIn(pin, spacer, $79bd7f461221d269$var$_getComputedStyle(pin), spacerState);
                }
                r || self.update(r); // when we're restoring, the update should run AFTER swapping the pin into its pin-spacer.
                $79bd7f461221d269$var$_refreshing = prevRefreshing; // restore. We set it to true during the update() so that things fire properly in there.
                self.isReverted = r;
            }
        };
        self.refresh = function(soft, force, position, pinOffset) {
            // position is typically only defined if it's coming from setPositions() - it's a way to skip the normal parsing. pinOffset is also only from setPositions() and is mostly related to fancy stuff we need to do in ScrollSmoother with effects
            if (($79bd7f461221d269$var$_refreshing || !self.enabled) && !force) return;
            if (pin && soft && $79bd7f461221d269$var$_lastScrollTime) {
                $79bd7f461221d269$var$_addListener(ScrollTrigger, "scrollEnd", $79bd7f461221d269$var$_softRefresh);
                return;
            }
            !$79bd7f461221d269$var$_refreshingAll && onRefreshInit && onRefreshInit(self);
            $79bd7f461221d269$var$_refreshing = self;
            if (tweenTo.tween) {
                tweenTo.tween.kill();
                tweenTo.tween = 0;
            }
            scrubTween && scrubTween.pause();
            invalidateOnRefresh && animation && animation.revert({
                kill: false
            }).invalidate();
            self.isReverted || self.revert(true, true);
            self._subPinOffset = false; // we'll set this to true in the sub-pins if we find any
            var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : $79bd7f461221d269$var$_maxScroll(scroller, direction), isFirstRefresh = change <= 0.01, offset = 0, otherPinOffset = pinOffset || 0, parsedEnd = $79bd7f461221d269$var$_isObject(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = $79bd7f461221d269$var$_isObject(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self.pinnedContainer = vars.pinnedContainer && (0, $a129d6ec0733e75c$export$937374fea3f88711)(vars.pinnedContainer, self), triggerIndex = trigger && Math.max(0, $79bd7f461221d269$var$_triggers.indexOf(self)) || 0, i = triggerIndex, cs, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
            if (markers && $79bd7f461221d269$var$_isObject(position)) {
                // if we alter the start/end positions with .setPositions(), it generally feeds in absolute NUMBERS which don't convey information about where to line up the markers, so to keep it intuitive, we record how far the trigger positions shift after applying the new numbers and then offset by that much in the opposite direction. We do the same to the associated trigger markers too of course.
                markerStartOffset = $79bd7f461221d269$var$gsap.getProperty(markerStartTrigger, direction.p);
                markerEndOffset = $79bd7f461221d269$var$gsap.getProperty(markerEndTrigger, direction.p);
            }
            while(i--){
                // user might try to pin the same element more than once, so we must find any prior triggers with the same pin, revert them, and determine how long they're pinning so that we can offset things appropriately. Make sure we revert from last to first so that things "rewind" properly.
                curTrigger = $79bd7f461221d269$var$_triggers[i];
                curTrigger.end || curTrigger.refresh(0, 1) || ($79bd7f461221d269$var$_refreshing = self); // if it's a timeline-based trigger that hasn't been fully initialized yet because it's waiting for 1 tick, just force the refresh() here, otherwise if it contains a pin that's supposed to affect other ScrollTriggers further down the page, they won't be adjusted properly.
                curPin = curTrigger.pin;
                if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
                    revertedPins || (revertedPins = []);
                    revertedPins.unshift(curTrigger); // we'll revert from first to last to make sure things reach their end state properly
                    curTrigger.revert(true, true);
                }
                if (curTrigger !== $79bd7f461221d269$var$_triggers[i]) {
                    // in case it got removed.
                    triggerIndex--;
                    i--;
                }
            }
            $79bd7f461221d269$var$_isFunction(parsedStart) && (parsedStart = parsedStart(self));
            parsedStart = $79bd7f461221d269$var$_parseClamp(parsedStart, "start", self);
            start = $79bd7f461221d269$var$_parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -0.001 : 0);
            $79bd7f461221d269$var$_isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));
            if ($79bd7f461221d269$var$_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
                if (~parsedEnd.indexOf(" ")) parsedEnd = ($79bd7f461221d269$var$_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
                else {
                    offset = $79bd7f461221d269$var$_offsetToPx(parsedEnd.substr(2), size);
                    parsedEnd = $79bd7f461221d269$var$_isString(parsedStart) ? parsedStart : (containerAnimation ? $79bd7f461221d269$var$gsap.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset; // _parsePosition won't factor in the offset if the start is a number, so do it here.
                    parsedEndTrigger = trigger;
                }
            }
            parsedEnd = $79bd7f461221d269$var$_parseClamp(parsedEnd, "end", self);
            end = Math.max(start, $79bd7f461221d269$var$_parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -0.001;
            offset = 0;
            i = triggerIndex;
            while(i--){
                curTrigger = $79bd7f461221d269$var$_triggers[i];
                curPin = curTrigger.pin;
                if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
                    cs = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
                    if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) // numeric start values shouldn't be offset at all - treat them as absolute
                    offset += cs * (1 - curTrigger.progress);
                    curPin === pin && (otherPinOffset += cs);
                }
            }
            start += offset;
            end += offset;
            self._startClamp && (self._startClamp += offset);
            if (self._endClamp && !$79bd7f461221d269$var$_refreshingAll) {
                self._endClamp = end || -0.001;
                end = Math.min(end, $79bd7f461221d269$var$_maxScroll(scroller, direction));
            }
            change = end - start || (start -= 0.01) && 0.001;
            if (isFirstRefresh) // on the very first refresh(), the prevProgress couldn't have been accurate yet because the start/end were never calculated, so we set it here. Before 3.11.5, it could lead to an inaccurate scroll position restoration with snapping.
            prevProgress = $79bd7f461221d269$var$gsap.utils.clamp(0, 1, $79bd7f461221d269$var$gsap.utils.normalize(start, end, prevScroll));
            self._pinPush = otherPinOffset;
            if (markerStart && offset) {
                // offset the markers if necessary
                cs = {};
                cs[direction.a] = "+=" + offset;
                pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
                $79bd7f461221d269$var$gsap.set([
                    markerStart,
                    markerEnd
                ], cs);
            }
            if (pin) {
                cs = $79bd7f461221d269$var$_getComputedStyle(pin);
                isVertical = direction === (0, $a129d6ec0733e75c$export$8e40fc98ff518e9d);
                scroll = scrollFunc(); // recalculate because the triggers can affect the scroll
                pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
                if (!max && end > 1) {
                    // makes sure the scroller has a scrollbar, otherwise if something has width: 100%, for example, it would be too big (exclude the scrollbar). See https://greensock.com/forums/topic/25182-scrolltrigger-width-of-page-increase-where-markers-are-set-to-false/
                    forcedOverflow = (isViewport ? $79bd7f461221d269$var$_doc.scrollingElement || $79bd7f461221d269$var$_docEl : scroller).style;
                    forcedOverflow = {
                        style: forcedOverflow,
                        value: forcedOverflow["overflow" + direction.a.toUpperCase()]
                    };
                    if (isViewport && $79bd7f461221d269$var$_getComputedStyle($79bd7f461221d269$var$_body)["overflow" + direction.a.toUpperCase()] !== "scroll") // avoid an extra scrollbar if BOTH <html> and <body> have overflow set to "scroll"
                    forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
                }
                $79bd7f461221d269$var$_swapPinIn(pin, spacer, cs);
                pinState = $79bd7f461221d269$var$_getState(pin); // transforms will interfere with the top/left/right/bottom placement, so remove them temporarily. getBoundingClientRect() factors in transforms.
                bounds = $79bd7f461221d269$var$_getBounds(pin, true);
                oppositeScroll = useFixedPosition && (0, $a129d6ec0733e75c$export$8665aac53dad5647)(scroller, isVertical ? (0, $a129d6ec0733e75c$export$b2cabb342cb0ebe1) : (0, $a129d6ec0733e75c$export$8e40fc98ff518e9d))();
                if (pinSpacing) {
                    spacerState = [
                        pinSpacing + direction.os2,
                        change + otherPinOffset + $79bd7f461221d269$var$_px
                    ];
                    spacerState.t = spacer;
                    i = pinSpacing === $79bd7f461221d269$var$_padding ? $79bd7f461221d269$var$_getSize(pin, direction) + change + otherPinOffset : 0;
                    i && spacerState.push(direction.d, i + $79bd7f461221d269$var$_px); // for box-sizing: border-box (must include padding).
                    $79bd7f461221d269$var$_setState(spacerState);
                    if (pinnedContainer) // in ScrollTrigger.refresh(), we need to re-evaluate the pinContainer's size because this pinSpacing may stretch it out, but we can't just add the exact distance because depending on layout, it may not push things down or it may only do so partially.
                    $79bd7f461221d269$var$_triggers.forEach(function(t) {
                        if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) t._subPinOffset = true;
                    });
                    useFixedPosition && scrollFunc(prevScroll);
                }
                if (useFixedPosition) {
                    override = {
                        top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + $79bd7f461221d269$var$_px,
                        left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + $79bd7f461221d269$var$_px,
                        boxSizing: "border-box",
                        position: "fixed"
                    };
                    override[$79bd7f461221d269$var$_width] = override["max" + $79bd7f461221d269$var$_Width] = Math.ceil(bounds.width) + $79bd7f461221d269$var$_px;
                    override[$79bd7f461221d269$var$_height] = override["max" + $79bd7f461221d269$var$_Height] = Math.ceil(bounds.height) + $79bd7f461221d269$var$_px;
                    override[$79bd7f461221d269$var$_margin] = override[$79bd7f461221d269$var$_margin + $79bd7f461221d269$var$_Top] = override[$79bd7f461221d269$var$_margin + $79bd7f461221d269$var$_Right] = override[$79bd7f461221d269$var$_margin + $79bd7f461221d269$var$_Bottom] = override[$79bd7f461221d269$var$_margin + $79bd7f461221d269$var$_Left] = "0";
                    override[$79bd7f461221d269$var$_padding] = cs[$79bd7f461221d269$var$_padding];
                    override[$79bd7f461221d269$var$_padding + $79bd7f461221d269$var$_Top] = cs[$79bd7f461221d269$var$_padding + $79bd7f461221d269$var$_Top];
                    override[$79bd7f461221d269$var$_padding + $79bd7f461221d269$var$_Right] = cs[$79bd7f461221d269$var$_padding + $79bd7f461221d269$var$_Right];
                    override[$79bd7f461221d269$var$_padding + $79bd7f461221d269$var$_Bottom] = cs[$79bd7f461221d269$var$_padding + $79bd7f461221d269$var$_Bottom];
                    override[$79bd7f461221d269$var$_padding + $79bd7f461221d269$var$_Left] = cs[$79bd7f461221d269$var$_padding + $79bd7f461221d269$var$_Left];
                    pinActiveState = $79bd7f461221d269$var$_copyState(pinOriginalState, override, pinReparent);
                    $79bd7f461221d269$var$_refreshingAll && scrollFunc(0);
                }
                if (animation) {
                    // the animation might be affecting the transform, so we must jump to the end, check the value, and compensate accordingly. Otherwise, when it becomes unpinned, the pinSetter() will get set to a value that doesn't include whatever the animation did.
                    initted = animation._initted; // if not, we must invalidate() after this step, otherwise it could lock in starting values prematurely.
                    $79bd7f461221d269$var$_suppressOverwrites(1);
                    animation.render(animation.duration(), true, true);
                    pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
                    pinMoves = Math.abs(change - pinChange) > 1;
                    useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2); // transform is the last property/value set in the state Array. Since the animation is controlling that, we should omit it.
                    animation.render(0, true, true);
                    initted || animation.invalidate(true);
                    animation.parent || animation.totalTime(animation.totalTime()); // if, for example, a toggleAction called play() and then refresh() happens and when we render(1) above, it would cause the animation to complete and get removed from its parent, so this makes sure it gets put back in.
                    $79bd7f461221d269$var$_suppressOverwrites(0);
                } else pinChange = change;
                forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
            } else if (trigger && scrollFunc() && !containerAnimation) {
                // it may be INSIDE a pinned element, so walk up the tree and look for any elements with _pinOffset to compensate because anything with pinSpacing that's already scrolled would throw off the measurements in getBoundingClientRect()
                bounds = trigger.parentNode;
                while(bounds && bounds !== $79bd7f461221d269$var$_body){
                    if (bounds._pinOffset) {
                        start -= bounds._pinOffset;
                        end -= bounds._pinOffset;
                    }
                    bounds = bounds.parentNode;
                }
            }
            revertedPins && revertedPins.forEach(function(t) {
                return t.revert(false, true);
            });
            self.start = start;
            self.end = end;
            scroll1 = scroll2 = $79bd7f461221d269$var$_refreshingAll ? prevScroll : scrollFunc(); // reset velocity
            if (!containerAnimation && !$79bd7f461221d269$var$_refreshingAll) {
                scroll1 < prevScroll && scrollFunc(prevScroll);
                self.scroll.rec = 0;
            }
            self.revert(false, true);
            lastRefresh = $79bd7f461221d269$var$_getTime();
            if (snapDelayedCall) {
                lastSnap = -1;
                self.isActive && scrollFunc(start + change * prevProgress); // just so snapping gets re-enabled, clear out any recorded last value
                snapDelayedCall.restart(true);
            }
            $79bd7f461221d269$var$_refreshing = 0;
            animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true); // must force a re-render because if saveStyles() was used on the target(s), the styles could have been wiped out during the refresh().
            if (isFirstRefresh || prevProgress !== self.progress || containerAnimation) {
                // ensures that the direction is set properly (when refreshing, progress is set back to 0 initially, then back again to wherever it needs to be) and that callbacks are triggered.
                animation && !isToggle && animation.totalProgress(containerAnimation && start < -0.001 && !prevProgress ? $79bd7f461221d269$var$gsap.utils.normalize(start, end, 0) : prevProgress, true); // to avoid issues where animation callbacks like onStart aren't triggered.
                self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
            }
            pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
            scrubTween && scrubTween.invalidate();
            if (!isNaN(markerStartOffset)) {
                // numbers were passed in for the position which are absolute, so instead of just putting the markers at the very bottom of the viewport, we figure out how far they shifted down (it's safe to assume they were originally positioned in closer relation to the trigger element with values like "top", "center", a percentage or whatever, so we offset that much in the opposite direction to basically revert them to the relative position thy were at previously.
                markerStartOffset -= $79bd7f461221d269$var$gsap.getProperty(markerStartTrigger, direction.p);
                markerEndOffset -= $79bd7f461221d269$var$gsap.getProperty(markerEndTrigger, direction.p);
                $79bd7f461221d269$var$_shiftMarker(markerStartTrigger, direction, markerStartOffset);
                $79bd7f461221d269$var$_shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
                $79bd7f461221d269$var$_shiftMarker(markerEndTrigger, direction, markerEndOffset);
                $79bd7f461221d269$var$_shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
            }
            isFirstRefresh && !$79bd7f461221d269$var$_refreshingAll && self.update(); // edge case - when you reload a page when it's already scrolled down, some browsers fire a "scroll" event before DOMContentLoaded, triggering an updateAll(). If we don't update the self.progress as part of refresh(), then when it happens next, it may record prevProgress as 0 when it really shouldn't, potentially causing a callback in an animation to fire again.
            if (onRefresh && !$79bd7f461221d269$var$_refreshingAll && !executingOnRefresh) {
                // when refreshing all, we do extra work to correct pinnedContainer sizes and ensure things don't exceed the maxScroll, so we should do all the refreshes at the end after all that work so that the start/end values are corrected.
                executingOnRefresh = true;
                onRefresh(self);
                executingOnRefresh = false;
            }
        };
        self.getVelocity = function() {
            return (scrollFunc() - scroll2) / ($79bd7f461221d269$var$_getTime() - $79bd7f461221d269$var$_time2) * 1000 || 0;
        };
        self.endAnimation = function() {
            $79bd7f461221d269$var$_endAnimation(self.callbackAnimation);
            if (animation) scrubTween ? scrubTween.progress(1) : !animation.paused() ? $79bd7f461221d269$var$_endAnimation(animation, animation.reversed()) : isToggle || $79bd7f461221d269$var$_endAnimation(animation, self.direction < 0, 1);
        };
        self.labelToScroll = function(label) {
            return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
        };
        self.getTrailing = function(name) {
            var i = $79bd7f461221d269$var$_triggers.indexOf(self), a = self.direction > 0 ? $79bd7f461221d269$var$_triggers.slice(0, i).reverse() : $79bd7f461221d269$var$_triggers.slice(i + 1);
            return ($79bd7f461221d269$var$_isString(name) ? a.filter(function(t) {
                return t.vars.preventOverlaps === name;
            }) : a).filter(function(t) {
                return self.direction > 0 ? t.end <= start : t.start >= end;
            });
        };
        self.update = function(reset, recordVelocity, forceFake) {
            if (containerAnimation && !forceFake && !reset) return;
            var scroll = $79bd7f461221d269$var$_refreshingAll === true ? prevScroll : self.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress = self.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
            if (recordVelocity) {
                scroll2 = scroll1;
                scroll1 = containerAnimation ? scrollFunc() : scroll;
                if (snap) {
                    snap2 = snap1;
                    snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
                }
            } // anticipate the pinning a few ticks ahead of time based on velocity to avoid a visual glitch due to the fact that most browsers do scrolling on a separate thread (not synced with requestAnimationFrame).
            anticipatePin && !clipped && pin && !$79bd7f461221d269$var$_refreshing && !$79bd7f461221d269$var$_startup && $79bd7f461221d269$var$_lastScrollTime && start < scroll + (scroll - scroll2) / ($79bd7f461221d269$var$_getTime() - $79bd7f461221d269$var$_time2) * anticipatePin && (clipped = 0.0001);
            if (clipped !== prevProgress && self.enabled) {
                isActive = self.isActive = !!clipped && clipped < 1;
                wasActive = !!prevProgress && prevProgress < 1;
                toggled = isActive !== wasActive;
                stateChanged = toggled || !!clipped !== !!prevProgress; // could go from start all the way to end, thus it didn't toggle but it did change state in a sense (may need to fire a callback)
                self.direction = clipped > prevProgress ? 1 : -1;
                self.progress = clipped;
                if (stateChanged && !$79bd7f461221d269$var$_refreshing) {
                    toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3; // 0 = enter, 1 = leave, 2 = enterBack, 3 = leaveBack (we prioritize the FIRST encounter, thus if you scroll really fast past the onEnter and onLeave in one tick, it'd prioritize onEnter.
                    if (isToggle) {
                        action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState]; // if it didn't toggle, that means it shot right past and since we prioritize the "enter" action, we should switch to the "leave" in this case (but only if one is defined)
                        isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
                    }
                }
                preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && ($79bd7f461221d269$var$_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function(t) {
                    return t.endAnimation();
                }));
                if (!isToggle) {
                    if (scrubTween && !$79bd7f461221d269$var$_refreshing && !$79bd7f461221d269$var$_startup) {
                        scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start); // if there's a scrub on both the container animation and this one (or a ScrollSmoother), the update order would cause this one not to have rendered yet, so it wouldn't make any progress before we .restart() it heading toward the new progress so it'd appear stuck thus we force a render here.
                        if (scrubTween.resetTo) scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
                        else {
                            // legacy support (courtesy), before 3.10.0
                            scrubTween.vars.totalProgress = clipped;
                            scrubTween.invalidate().restart();
                        }
                    } else if (animation) animation.totalProgress(clipped, !!($79bd7f461221d269$var$_refreshing && (lastRefresh || reset)));
                }
                if (pin) {
                    reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
                    if (!useFixedPosition) pinSetter($79bd7f461221d269$var$_round(pinStart + pinChange * clipped));
                    else if (stateChanged) {
                        isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= $79bd7f461221d269$var$_maxScroll(scroller, direction); // if it's at the VERY end of the page, don't switch away from position: fixed because it's pointless and it could cause a brief flash when the user scrolls back up (when it gets pinned again)
                        if (pinReparent) {
                            if (!reset && (isActive || isAtMax)) {
                                var bounds = $79bd7f461221d269$var$_getBounds(pin, true), _offset = scroll - start;
                                $79bd7f461221d269$var$_reparent(pin, $79bd7f461221d269$var$_body, bounds.top + (direction === (0, $a129d6ec0733e75c$export$8e40fc98ff518e9d) ? _offset : 0) + $79bd7f461221d269$var$_px, bounds.left + (direction === (0, $a129d6ec0733e75c$export$8e40fc98ff518e9d) ? 0 : _offset) + $79bd7f461221d269$var$_px);
                            } else $79bd7f461221d269$var$_reparent(pin, spacer);
                        }
                        $79bd7f461221d269$var$_setState(isActive || isAtMax ? pinActiveState : pinState);
                        pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
                    }
                }
                snap && !tweenTo.tween && !$79bd7f461221d269$var$_refreshing && !$79bd7f461221d269$var$_startup && snapDelayedCall.restart(true);
                toggleClass && (toggled || once && clipped && (clipped < 1 || !$79bd7f461221d269$var$_limitCallbacks)) && $79bd7f461221d269$var$_toArray(toggleClass.targets).forEach(function(el) {
                    return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
                }); // classes could affect positioning, so do it even if reset or refreshing is true.
                onUpdate && !isToggle && !reset && onUpdate(self);
                if (stateChanged && !$79bd7f461221d269$var$_refreshing) {
                    if (isToggle) {
                        if (isTakingAction) {
                            if (action === "complete") animation.pause().totalProgress(1);
                            else if (action === "reset") animation.restart(true).pause();
                            else if (action === "restart") animation.restart(true);
                            else animation[action]();
                        }
                        onUpdate && onUpdate(self);
                    }
                    if (toggled || !$79bd7f461221d269$var$_limitCallbacks) {
                        // on startup, the page could be scrolled and we don't want to fire callbacks that didn't toggle. For example onEnter shouldn't fire if the ScrollTrigger isn't actually entered.
                        onToggle && toggled && $79bd7f461221d269$var$_callback(self, onToggle);
                        callbacks[toggleState] && $79bd7f461221d269$var$_callback(self, callbacks[toggleState]);
                        once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0); // a callback shouldn't be called again if once is true.
                        if (!toggled) {
                            // it's possible to go completely past, like from before the start to after the end (or vice-versa) in which case BOTH callbacks should be fired in that order
                            toggleState = clipped === 1 ? 1 : 3;
                            callbacks[toggleState] && $79bd7f461221d269$var$_callback(self, callbacks[toggleState]);
                        }
                    }
                    if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > ($79bd7f461221d269$var$_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
                        $79bd7f461221d269$var$_endAnimation(self.callbackAnimation);
                        scrubTween ? scrubTween.progress(1) : $79bd7f461221d269$var$_endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
                    }
                } else if (isToggle && onUpdate && !$79bd7f461221d269$var$_refreshing) onUpdate(self);
            } // update absolutely-positioned markers (only if the scroller isn't the viewport)
            if (markerEndSetter) {
                var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
                markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
                markerEndSetter(n);
            }
            caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
        };
        self.enable = function(reset, refresh) {
            if (!self.enabled) {
                self.enabled = true;
                $79bd7f461221d269$var$_addListener(scroller, "resize", $79bd7f461221d269$var$_onResize);
                $79bd7f461221d269$var$_addListener(isViewport ? $79bd7f461221d269$var$_doc : scroller, "scroll", $79bd7f461221d269$var$_onScroll);
                onRefreshInit && $79bd7f461221d269$var$_addListener(ScrollTrigger, "refreshInit", onRefreshInit);
                if (reset !== false) {
                    self.progress = prevProgress = 0;
                    scroll1 = scroll2 = lastSnap = scrollFunc();
                }
                refresh !== false && self.refresh();
            }
        };
        self.getTween = function(snap) {
            return snap && tweenTo ? tweenTo.tween : scrubTween;
        };
        self.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
            // doesn't persist after refresh()! Intended to be a way to override values that were set during refresh(), like you could set it in onRefresh()
            if (containerAnimation) {
                // convert ratios into scroll positions. Remember, start/end values on ScrollTriggers that have a containerAnimation refer to the time (in seconds), NOT scroll positions.
                var st = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st.end - st.start;
                newStart = st.start + _change * newStart / duration;
                newEnd = st.start + _change * newEnd / duration;
            }
            self.refresh(false, false, {
                start: $79bd7f461221d269$var$_keepClamp(newStart, keepClamp && !!self._startClamp),
                end: $79bd7f461221d269$var$_keepClamp(newEnd, keepClamp && !!self._endClamp)
            }, pinOffset);
            self.update();
        };
        self.adjustPinSpacing = function(amount) {
            if (spacerState && amount) {
                var i = spacerState.indexOf(direction.d) + 1;
                spacerState[i] = parseFloat(spacerState[i]) + amount + $79bd7f461221d269$var$_px;
                spacerState[1] = parseFloat(spacerState[1]) + amount + $79bd7f461221d269$var$_px;
                $79bd7f461221d269$var$_setState(spacerState);
            }
        };
        self.disable = function(reset, allowAnimation) {
            if (self.enabled) {
                reset !== false && self.revert(true, true);
                self.enabled = self.isActive = false;
                allowAnimation || scrubTween && scrubTween.pause();
                prevScroll = 0;
                pinCache && (pinCache.uncache = 1);
                onRefreshInit && $79bd7f461221d269$var$_removeListener(ScrollTrigger, "refreshInit", onRefreshInit);
                if (snapDelayedCall) {
                    snapDelayedCall.pause();
                    tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
                }
                if (!isViewport) {
                    var i = $79bd7f461221d269$var$_triggers.length;
                    while(i--){
                        if ($79bd7f461221d269$var$_triggers[i].scroller === scroller && $79bd7f461221d269$var$_triggers[i] !== self) return; //don't remove the listeners if there are still other triggers referencing it.
                    }
                    $79bd7f461221d269$var$_removeListener(scroller, "resize", $79bd7f461221d269$var$_onResize);
                    $79bd7f461221d269$var$_removeListener(scroller, "scroll", $79bd7f461221d269$var$_onScroll);
                }
            }
        };
        self.kill = function(revert, allowAnimation) {
            self.disable(revert, allowAnimation);
            scrubTween && !allowAnimation && scrubTween.kill();
            id && delete $79bd7f461221d269$var$_ids[id];
            var i = $79bd7f461221d269$var$_triggers.indexOf(self);
            i >= 0 && $79bd7f461221d269$var$_triggers.splice(i, 1);
            i === $79bd7f461221d269$var$_i && $79bd7f461221d269$var$_direction > 0 && $79bd7f461221d269$var$_i--; // if we're in the middle of a refresh() or update(), splicing would cause skips in the index, so adjust...
            // if no other ScrollTrigger instances of the same scroller are found, wipe out any recorded scroll position. Otherwise, in a single page application, for example, it could maintain scroll position when it really shouldn't.
            i = 0;
            $79bd7f461221d269$var$_triggers.forEach(function(t) {
                return t.scroller === self.scroller && (i = 1);
            });
            i || $79bd7f461221d269$var$_refreshingAll || (self.scroll.rec = 0);
            if (animation) {
                animation.scrollTrigger = null;
                revert && animation.revert({
                    kill: false
                });
                allowAnimation || animation.kill();
            }
            markerStart && [
                markerStart,
                markerEnd,
                markerStartTrigger,
                markerEndTrigger
            ].forEach(function(m) {
                return m.parentNode && m.parentNode.removeChild(m);
            });
            $79bd7f461221d269$var$_primary === self && ($79bd7f461221d269$var$_primary = 0);
            if (pin) {
                pinCache && (pinCache.uncache = 1);
                i = 0;
                $79bd7f461221d269$var$_triggers.forEach(function(t) {
                    return t.pin === pin && i++;
                });
                i || (pinCache.spacer = 0); // if there aren't any more ScrollTriggers with the same pin, remove the spacer, otherwise it could be contaminated with old/stale values if the user re-creates a ScrollTrigger for the same element.
            }
            vars.onKill && vars.onKill(self);
        };
        $79bd7f461221d269$var$_triggers.push(self);
        self.enable(false, false);
        customRevertReturn && customRevertReturn(self);
        if (animation && animation.add && !change) {
            // if the animation is a timeline, it may not have been populated yet, so it wouldn't render at the proper place on the first refresh(), thus we should schedule one for the next tick. If "change" is defined, we know it must be re-enabling, thus we can refresh() right away.
            var updateFunc = self.update; // some browsers may fire a scroll event BEFORE a tick elapses and/or the DOMContentLoaded fires. So there's a chance update() will be called BEFORE a refresh() has happened on a Timeline-attached ScrollTrigger which means the start/end won't be calculated yet. We don't want to add conditional logic inside the update() method (like check to see if end is defined and if not, force a refresh()) because that's a function that gets hit a LOT (performance). So we swap out the real update() method for this one that'll re-attach it the first time it gets called and of course forces a refresh().
            self.update = function() {
                self.update = updateFunc;
                start || end || self.refresh();
            };
            $79bd7f461221d269$var$gsap.delayedCall(0.01, self.update);
            change = 0.01;
            start = end = 0;
        } else self.refresh();
        pin && $79bd7f461221d269$var$_queueRefreshAll(); // pinning could affect the positions of other things, so make sure we queue a full refresh()
    };
    ScrollTrigger.register = function register(core) {
        if (!$79bd7f461221d269$var$_coreInitted) {
            $79bd7f461221d269$var$gsap = core || $79bd7f461221d269$var$_getGSAP();
            $79bd7f461221d269$var$_windowExists() && window.document && ScrollTrigger.enable();
            $79bd7f461221d269$var$_coreInitted = $79bd7f461221d269$var$_enabled;
        }
        return $79bd7f461221d269$var$_coreInitted;
    };
    ScrollTrigger.defaults = function defaults(config) {
        if (config) for(var p in config)$79bd7f461221d269$var$_defaults[p] = config[p];
        return $79bd7f461221d269$var$_defaults;
    };
    ScrollTrigger.disable = function disable(reset, kill) {
        $79bd7f461221d269$var$_enabled = 0;
        $79bd7f461221d269$var$_triggers.forEach(function(trigger) {
            return trigger[kill ? "kill" : "disable"](reset);
        });
        $79bd7f461221d269$var$_removeListener($79bd7f461221d269$var$_win, "wheel", $79bd7f461221d269$var$_onScroll);
        $79bd7f461221d269$var$_removeListener($79bd7f461221d269$var$_doc, "scroll", $79bd7f461221d269$var$_onScroll);
        clearInterval($79bd7f461221d269$var$_syncInterval);
        $79bd7f461221d269$var$_removeListener($79bd7f461221d269$var$_doc, "touchcancel", $79bd7f461221d269$var$_passThrough);
        $79bd7f461221d269$var$_removeListener($79bd7f461221d269$var$_body, "touchstart", $79bd7f461221d269$var$_passThrough);
        $79bd7f461221d269$var$_multiListener($79bd7f461221d269$var$_removeListener, $79bd7f461221d269$var$_doc, "pointerdown,touchstart,mousedown", $79bd7f461221d269$var$_pointerDownHandler);
        $79bd7f461221d269$var$_multiListener($79bd7f461221d269$var$_removeListener, $79bd7f461221d269$var$_doc, "pointerup,touchend,mouseup", $79bd7f461221d269$var$_pointerUpHandler);
        $79bd7f461221d269$var$_resizeDelay.kill();
        $79bd7f461221d269$var$_iterateAutoRefresh($79bd7f461221d269$var$_removeListener);
        for(var i = 0; i < (0, $a129d6ec0733e75c$export$3cd1cee43d19b683).length; i += 3){
            $79bd7f461221d269$var$_wheelListener($79bd7f461221d269$var$_removeListener, (0, $a129d6ec0733e75c$export$3cd1cee43d19b683)[i], (0, $a129d6ec0733e75c$export$3cd1cee43d19b683)[i + 1]);
            $79bd7f461221d269$var$_wheelListener($79bd7f461221d269$var$_removeListener, (0, $a129d6ec0733e75c$export$3cd1cee43d19b683)[i], (0, $a129d6ec0733e75c$export$3cd1cee43d19b683)[i + 2]);
        }
    };
    ScrollTrigger.enable = function enable() {
        $79bd7f461221d269$var$_win = window;
        $79bd7f461221d269$var$_doc = document;
        $79bd7f461221d269$var$_docEl = $79bd7f461221d269$var$_doc.documentElement;
        $79bd7f461221d269$var$_body = $79bd7f461221d269$var$_doc.body;
        if ($79bd7f461221d269$var$gsap) {
            $79bd7f461221d269$var$_toArray = $79bd7f461221d269$var$gsap.utils.toArray;
            $79bd7f461221d269$var$_clamp = $79bd7f461221d269$var$gsap.utils.clamp;
            $79bd7f461221d269$var$_context = $79bd7f461221d269$var$gsap.core.context || $79bd7f461221d269$var$_passThrough;
            $79bd7f461221d269$var$_suppressOverwrites = $79bd7f461221d269$var$gsap.core.suppressOverwrites || $79bd7f461221d269$var$_passThrough;
            $79bd7f461221d269$var$_scrollRestoration = $79bd7f461221d269$var$_win.history.scrollRestoration || "auto";
            $79bd7f461221d269$var$_lastScroll = $79bd7f461221d269$var$_win.pageYOffset;
            $79bd7f461221d269$var$gsap.core.globals("ScrollTrigger", ScrollTrigger); // must register the global manually because in Internet Explorer, functions (classes) don't have a "name" property.
            if ($79bd7f461221d269$var$_body) {
                $79bd7f461221d269$var$_enabled = 1;
                $79bd7f461221d269$var$_rafBugFix();
                (0, $a129d6ec0733e75c$export$c1cbdee04e18ea8b).register($79bd7f461221d269$var$gsap); // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.
                ScrollTrigger.isTouch = (0, $a129d6ec0733e75c$export$c1cbdee04e18ea8b).isTouch;
                $79bd7f461221d269$var$_fixIOSBug = (0, $a129d6ec0733e75c$export$c1cbdee04e18ea8b).isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent); // since 2017, iOS has had a bug that causes event.clientX/Y to be inaccurate when a scroll occurs, thus we must alternate ignoring every other touchmove event to work around it. See https://bugs.webkit.org/show_bug.cgi?id=181954 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503
                $79bd7f461221d269$var$_addListener($79bd7f461221d269$var$_win, "wheel", $79bd7f461221d269$var$_onScroll); // mostly for 3rd party smooth scrolling libraries.
                $79bd7f461221d269$var$_root = [
                    $79bd7f461221d269$var$_win,
                    $79bd7f461221d269$var$_doc,
                    $79bd7f461221d269$var$_docEl,
                    $79bd7f461221d269$var$_body
                ];
                if ($79bd7f461221d269$var$gsap.matchMedia) {
                    ScrollTrigger.matchMedia = function(vars) {
                        var mm = $79bd7f461221d269$var$gsap.matchMedia(), p;
                        for(p in vars)mm.add(p, vars[p]);
                        return mm;
                    };
                    $79bd7f461221d269$var$gsap.addEventListener("matchMediaInit", function() {
                        return $79bd7f461221d269$var$_revertAll();
                    });
                    $79bd7f461221d269$var$gsap.addEventListener("matchMediaRevert", function() {
                        return $79bd7f461221d269$var$_revertRecorded();
                    });
                    $79bd7f461221d269$var$gsap.addEventListener("matchMedia", function() {
                        $79bd7f461221d269$var$_refreshAll(0, 1);
                        $79bd7f461221d269$var$_dispatch("matchMedia");
                    });
                    $79bd7f461221d269$var$gsap.matchMedia("(orientation: portrait)", function() {
                        // when orientation changes, we should take new base measurements for the ignoreMobileResize feature.
                        $79bd7f461221d269$var$_setBaseDimensions();
                        return $79bd7f461221d269$var$_setBaseDimensions;
                    });
                } else console.warn("Requires GSAP 3.11.0 or later");
                $79bd7f461221d269$var$_setBaseDimensions();
                $79bd7f461221d269$var$_addListener($79bd7f461221d269$var$_doc, "scroll", $79bd7f461221d269$var$_onScroll); // some browsers (like Chrome), the window stops dispatching scroll events on the window if you scroll really fast, but it's consistent on the document!
                var bodyStyle = $79bd7f461221d269$var$_body.style, border = bodyStyle.borderTopStyle, AnimationProto = $79bd7f461221d269$var$gsap.core.Animation.prototype, bounds, i;
                AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
                    value: function value() {
                        return this.time(-0.01, true);
                    }
                }); // only for backwards compatibility (Animation.revert() was added after 3.10.4)
                bodyStyle.borderTopStyle = "solid"; // works around an issue where a margin of a child element could throw off the bounds of the _body, making it seem like there's a margin when there actually isn't. The border ensures that the bounds are accurate.
                bounds = $79bd7f461221d269$var$_getBounds($79bd7f461221d269$var$_body);
                (0, $a129d6ec0733e75c$export$8e40fc98ff518e9d).m = Math.round(bounds.top + (0, $a129d6ec0733e75c$export$8e40fc98ff518e9d).sc()) || 0; // accommodate the offset of the <body> caused by margins and/or padding
                (0, $a129d6ec0733e75c$export$b2cabb342cb0ebe1).m = Math.round(bounds.left + (0, $a129d6ec0733e75c$export$b2cabb342cb0ebe1).sc()) || 0;
                border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style"); // TODO: (?) maybe move to leveraging the velocity mechanism in Observer and skip intervals.
                $79bd7f461221d269$var$_syncInterval = setInterval($79bd7f461221d269$var$_sync, 250);
                $79bd7f461221d269$var$gsap.delayedCall(0.5, function() {
                    return $79bd7f461221d269$var$_startup = 0;
                });
                $79bd7f461221d269$var$_addListener($79bd7f461221d269$var$_doc, "touchcancel", $79bd7f461221d269$var$_passThrough); // some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document.
                $79bd7f461221d269$var$_addListener($79bd7f461221d269$var$_body, "touchstart", $79bd7f461221d269$var$_passThrough); //works around Safari bug: https://greensock.com/forums/topic/21450-draggable-in-iframe-on-mobile-is-buggy/
                $79bd7f461221d269$var$_multiListener($79bd7f461221d269$var$_addListener, $79bd7f461221d269$var$_doc, "pointerdown,touchstart,mousedown", $79bd7f461221d269$var$_pointerDownHandler);
                $79bd7f461221d269$var$_multiListener($79bd7f461221d269$var$_addListener, $79bd7f461221d269$var$_doc, "pointerup,touchend,mouseup", $79bd7f461221d269$var$_pointerUpHandler);
                $79bd7f461221d269$var$_transformProp = $79bd7f461221d269$var$gsap.utils.checkPrefix("transform");
                $79bd7f461221d269$var$_stateProps.push($79bd7f461221d269$var$_transformProp);
                $79bd7f461221d269$var$_coreInitted = $79bd7f461221d269$var$_getTime();
                $79bd7f461221d269$var$_resizeDelay = $79bd7f461221d269$var$gsap.delayedCall(0.2, $79bd7f461221d269$var$_refreshAll).pause();
                $79bd7f461221d269$var$_autoRefresh = [
                    $79bd7f461221d269$var$_doc,
                    "visibilitychange",
                    function() {
                        var w = $79bd7f461221d269$var$_win.innerWidth, h = $79bd7f461221d269$var$_win.innerHeight;
                        if ($79bd7f461221d269$var$_doc.hidden) {
                            $79bd7f461221d269$var$_prevWidth = w;
                            $79bd7f461221d269$var$_prevHeight = h;
                        } else if ($79bd7f461221d269$var$_prevWidth !== w || $79bd7f461221d269$var$_prevHeight !== h) $79bd7f461221d269$var$_onResize();
                    },
                    $79bd7f461221d269$var$_doc,
                    "DOMContentLoaded",
                    $79bd7f461221d269$var$_refreshAll,
                    $79bd7f461221d269$var$_win,
                    "load",
                    $79bd7f461221d269$var$_refreshAll,
                    $79bd7f461221d269$var$_win,
                    "resize",
                    $79bd7f461221d269$var$_onResize
                ];
                $79bd7f461221d269$var$_iterateAutoRefresh($79bd7f461221d269$var$_addListener);
                $79bd7f461221d269$var$_triggers.forEach(function(trigger) {
                    return trigger.enable(0, 1);
                });
                for(i = 0; i < (0, $a129d6ec0733e75c$export$3cd1cee43d19b683).length; i += 3){
                    $79bd7f461221d269$var$_wheelListener($79bd7f461221d269$var$_removeListener, (0, $a129d6ec0733e75c$export$3cd1cee43d19b683)[i], (0, $a129d6ec0733e75c$export$3cd1cee43d19b683)[i + 1]);
                    $79bd7f461221d269$var$_wheelListener($79bd7f461221d269$var$_removeListener, (0, $a129d6ec0733e75c$export$3cd1cee43d19b683)[i], (0, $a129d6ec0733e75c$export$3cd1cee43d19b683)[i + 2]);
                }
            }
        }
    };
    ScrollTrigger.config = function config(vars) {
        "limitCallbacks" in vars && ($79bd7f461221d269$var$_limitCallbacks = !!vars.limitCallbacks);
        var ms = vars.syncInterval;
        ms && clearInterval($79bd7f461221d269$var$_syncInterval) || ($79bd7f461221d269$var$_syncInterval = ms) && setInterval($79bd7f461221d269$var$_sync, ms);
        "ignoreMobileResize" in vars && ($79bd7f461221d269$var$_ignoreMobileResize = ScrollTrigger.isTouch === 1 && vars.ignoreMobileResize);
        if ("autoRefreshEvents" in vars) {
            $79bd7f461221d269$var$_iterateAutoRefresh($79bd7f461221d269$var$_removeListener) || $79bd7f461221d269$var$_iterateAutoRefresh($79bd7f461221d269$var$_addListener, vars.autoRefreshEvents || "none");
            $79bd7f461221d269$var$_ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
        }
    };
    ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
        var t = (0, $a129d6ec0733e75c$export$937374fea3f88711)(target), i = (0, $a129d6ec0733e75c$export$3cd1cee43d19b683).indexOf(t), isViewport = $79bd7f461221d269$var$_isViewport(t);
        if (~i) (0, $a129d6ec0733e75c$export$3cd1cee43d19b683).splice(i, isViewport ? 6 : 2);
        if (vars) isViewport ? (0, $a129d6ec0733e75c$export$d8e56d510a804d0a).unshift($79bd7f461221d269$var$_win, vars, $79bd7f461221d269$var$_body, vars, $79bd7f461221d269$var$_docEl, vars) : (0, $a129d6ec0733e75c$export$d8e56d510a804d0a).unshift(t, vars);
    };
    ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
        $79bd7f461221d269$var$_triggers.forEach(function(t) {
            return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
        });
    };
    ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
        var bounds = ($79bd7f461221d269$var$_isString(element) ? (0, $a129d6ec0733e75c$export$937374fea3f88711)(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? $79bd7f461221d269$var$_width : $79bd7f461221d269$var$_height] * ratio || 0;
        return horizontal ? bounds.right - offset > 0 && bounds.left + offset < $79bd7f461221d269$var$_win.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < $79bd7f461221d269$var$_win.innerHeight;
    };
    ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
        $79bd7f461221d269$var$_isString(element) && (element = (0, $a129d6ec0733e75c$export$937374fea3f88711)(element));
        var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? $79bd7f461221d269$var$_width : $79bd7f461221d269$var$_height], offset = referencePoint == null ? size / 2 : referencePoint in $79bd7f461221d269$var$_keywords ? $79bd7f461221d269$var$_keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
        return horizontal ? (bounds.left + offset) / $79bd7f461221d269$var$_win.innerWidth : (bounds.top + offset) / $79bd7f461221d269$var$_win.innerHeight;
    };
    ScrollTrigger.killAll = function killAll(allowListeners) {
        $79bd7f461221d269$var$_triggers.slice(0).forEach(function(t) {
            return t.vars.id !== "ScrollSmoother" && t.kill();
        });
        if (allowListeners !== true) {
            var listeners = $79bd7f461221d269$var$_listeners.killAll || [];
            $79bd7f461221d269$var$_listeners = {};
            listeners.forEach(function(f) {
                return f();
            });
        }
    };
    return ScrollTrigger;
}();
$79bd7f461221d269$export$875bcbe48555930.version = "3.12.1";
$79bd7f461221d269$export$875bcbe48555930.saveStyles = function(targets) {
    return targets ? $79bd7f461221d269$var$_toArray(targets).forEach(function(target) {
        // saved styles are recorded in a consecutive alternating Array, like [element, cssText, transform attribute, cache, matchMedia, ...]
        if (target && target.style) {
            var i = $79bd7f461221d269$var$_savedStyles.indexOf(target);
            i >= 0 && $79bd7f461221d269$var$_savedStyles.splice(i, 5);
            $79bd7f461221d269$var$_savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), $79bd7f461221d269$var$gsap.core.getCache(target), $79bd7f461221d269$var$_context());
        }
    }) : $79bd7f461221d269$var$_savedStyles;
};
$79bd7f461221d269$export$875bcbe48555930.revert = function(soft, media) {
    return $79bd7f461221d269$var$_revertAll(!soft, media);
};
$79bd7f461221d269$export$875bcbe48555930.create = function(vars, animation) {
    return new $79bd7f461221d269$export$875bcbe48555930(vars, animation);
};
$79bd7f461221d269$export$875bcbe48555930.refresh = function(safe) {
    return safe ? $79bd7f461221d269$var$_onResize() : ($79bd7f461221d269$var$_coreInitted || $79bd7f461221d269$export$875bcbe48555930.register()) && $79bd7f461221d269$var$_refreshAll(true);
};
$79bd7f461221d269$export$875bcbe48555930.update = function(force) {
    return ++(0, $a129d6ec0733e75c$export$3cd1cee43d19b683).cache && $79bd7f461221d269$var$_updateAll(force === true ? 2 : 0);
};
$79bd7f461221d269$export$875bcbe48555930.clearScrollMemory = $79bd7f461221d269$var$_clearScrollMemory;
$79bd7f461221d269$export$875bcbe48555930.maxScroll = function(element, horizontal) {
    return $79bd7f461221d269$var$_maxScroll(element, horizontal ? (0, $a129d6ec0733e75c$export$b2cabb342cb0ebe1) : (0, $a129d6ec0733e75c$export$8e40fc98ff518e9d));
};
$79bd7f461221d269$export$875bcbe48555930.getScrollFunc = function(element, horizontal) {
    return (0, $a129d6ec0733e75c$export$8665aac53dad5647)((0, $a129d6ec0733e75c$export$937374fea3f88711)(element), horizontal ? (0, $a129d6ec0733e75c$export$b2cabb342cb0ebe1) : (0, $a129d6ec0733e75c$export$8e40fc98ff518e9d));
};
$79bd7f461221d269$export$875bcbe48555930.getById = function(id) {
    return $79bd7f461221d269$var$_ids[id];
};
$79bd7f461221d269$export$875bcbe48555930.getAll = function() {
    return $79bd7f461221d269$var$_triggers.filter(function(t) {
        return t.vars.id !== "ScrollSmoother";
    });
}; // it's common for people to ScrollTrigger.getAll(t => t.kill()) on page routes, for example, and we don't want it to ruin smooth scrolling by killing the main ScrollSmoother one.
$79bd7f461221d269$export$875bcbe48555930.isScrolling = function() {
    return !!$79bd7f461221d269$var$_lastScrollTime;
};
$79bd7f461221d269$export$875bcbe48555930.snapDirectional = $79bd7f461221d269$var$_snapDirectional;
$79bd7f461221d269$export$875bcbe48555930.addEventListener = function(type, callback) {
    var a = $79bd7f461221d269$var$_listeners[type] || ($79bd7f461221d269$var$_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
};
$79bd7f461221d269$export$875bcbe48555930.removeEventListener = function(type, callback) {
    var a = $79bd7f461221d269$var$_listeners[type], i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
};
$79bd7f461221d269$export$875bcbe48555930.batch = function(targets, vars) {
    var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback(type, callback) {
        var elements = [], triggers = [], delay = $79bd7f461221d269$var$gsap.delayedCall(interval, function() {
            callback(elements, triggers);
            elements = [];
            triggers = [];
        }).pause();
        return function(self) {
            elements.length || delay.restart(true);
            elements.push(self.trigger);
            triggers.push(self);
            batchMax <= elements.length && delay.progress(1);
        };
    }, p;
    for(p in vars)varsCopy[p] = p.substr(0, 2) === "on" && $79bd7f461221d269$var$_isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
    if ($79bd7f461221d269$var$_isFunction(batchMax)) {
        batchMax = batchMax();
        $79bd7f461221d269$var$_addListener($79bd7f461221d269$export$875bcbe48555930, "refresh", function() {
            return batchMax = vars.batchMax();
        });
    }
    $79bd7f461221d269$var$_toArray(targets).forEach(function(target) {
        var config = {};
        for(p in varsCopy)config[p] = varsCopy[p];
        config.trigger = target;
        result.push($79bd7f461221d269$export$875bcbe48555930.create(config));
    });
    return result;
}; // to reduce file size. clamps the scroll and also returns a duration multiplier so that if the scroll gets chopped shorter, the duration gets curtailed as well (otherwise if you're very close to the top of the page, for example, and swipe up really fast, it'll suddenly slow down and take a long time to reach the top).
var $79bd7f461221d269$var$_clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier(scrollFunc, current, end, max) {
    current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
    return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
}, $79bd7f461221d269$var$_allowNativePanning = function _allowNativePanning(target, direction) {
    if (direction === true) target.style.removeProperty("touch-action");
    else target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + ((0, $a129d6ec0733e75c$export$c1cbdee04e18ea8b).isTouch ? " pinch-zoom" : "") : "none"; // note: Firefox doesn't support it pinch-zoom properly, at least in addition to a pan-x or pan-y.
    target === $79bd7f461221d269$var$_docEl && _allowNativePanning($79bd7f461221d269$var$_body, direction);
}, $79bd7f461221d269$var$_overflow = {
    auto: 1,
    scroll: 1
}, $79bd7f461221d269$var$_nestedScroll = function _nestedScroll(_ref5) {
    var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
    var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || $79bd7f461221d269$var$gsap.core.getCache(node), time = $79bd7f461221d269$var$_getTime(), cs;
    if (!cache._isScrollT || time - cache._isScrollT > 2000) {
        // cache for 2 seconds to improve performance.
        while(node && node !== $79bd7f461221d269$var$_body && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !($79bd7f461221d269$var$_overflow[(cs = $79bd7f461221d269$var$_getComputedStyle(node)).overflowY] || $79bd7f461221d269$var$_overflow[cs.overflowX])))node = node.parentNode;
        cache._isScroll = node && node !== target && !$79bd7f461221d269$var$_isViewport(node) && ($79bd7f461221d269$var$_overflow[(cs = $79bd7f461221d269$var$_getComputedStyle(node)).overflowY] || $79bd7f461221d269$var$_overflow[cs.overflowX]);
        cache._isScrollT = time;
    }
    if (cache._isScroll || axis === "x") {
        event.stopPropagation();
        event._gsapAllow = true;
    }
}, // capture events on scrollable elements INSIDE the <body> and allow those by calling stopPropagation() when we find a scrollable ancestor
$79bd7f461221d269$var$_inputObserver = function _inputObserver(target, type, inputs, nested) {
    return (0, $a129d6ec0733e75c$export$c1cbdee04e18ea8b).create({
        target: target,
        capture: true,
        debounce: false,
        lockAxis: true,
        type: type,
        onWheel: nested = nested && $79bd7f461221d269$var$_nestedScroll,
        onPress: nested,
        onDrag: nested,
        onScroll: nested,
        onEnable: function onEnable() {
            return inputs && $79bd7f461221d269$var$_addListener($79bd7f461221d269$var$_doc, (0, $a129d6ec0733e75c$export$c1cbdee04e18ea8b).eventTypes[0], $79bd7f461221d269$var$_captureInputs, false, true);
        },
        onDisable: function onDisable() {
            return $79bd7f461221d269$var$_removeListener($79bd7f461221d269$var$_doc, (0, $a129d6ec0733e75c$export$c1cbdee04e18ea8b).eventTypes[0], $79bd7f461221d269$var$_captureInputs, true);
        }
    });
}, $79bd7f461221d269$var$_inputExp = /(input|label|select|textarea)/i, $79bd7f461221d269$var$_inputIsFocused, $79bd7f461221d269$var$_captureInputs = function _captureInputs(e) {
    var isInput = $79bd7f461221d269$var$_inputExp.test(e.target.tagName);
    if (isInput || $79bd7f461221d269$var$_inputIsFocused) {
        e._gsapAllow = true;
        $79bd7f461221d269$var$_inputIsFocused = isInput;
    }
}, $79bd7f461221d269$var$_getScrollNormalizer = function _getScrollNormalizer(vars) {
    $79bd7f461221d269$var$_isObject(vars) || (vars = {});
    vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
    vars.type || (vars.type = "wheel,touch");
    vars.debounce = !!vars.debounce;
    vars.id = vars.id || "normalizer";
    var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self, maxY, target = (0, $a129d6ec0733e75c$export$937374fea3f88711)(vars.target) || $79bd7f461221d269$var$_docEl, smoother = $79bd7f461221d269$var$gsap.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = $79bd7f461221d269$var$_fixIOSBug && (vars.content && (0, $a129d6ec0733e75c$export$937374fea3f88711)(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = (0, $a129d6ec0733e75c$export$8665aac53dad5647)(target, (0, $a129d6ec0733e75c$export$8e40fc98ff518e9d)), scrollFuncX = (0, $a129d6ec0733e75c$export$8665aac53dad5647)(target, (0, $a129d6ec0733e75c$export$b2cabb342cb0ebe1)), scale = 1, initialScale = ((0, $a129d6ec0733e75c$export$c1cbdee04e18ea8b).isTouch && $79bd7f461221d269$var$_win.visualViewport ? $79bd7f461221d269$var$_win.visualViewport.scale * $79bd7f461221d269$var$_win.visualViewport.width : $79bd7f461221d269$var$_win.outerWidth) / $79bd7f461221d269$var$_win.innerWidth, wheelRefresh = 0, resolveMomentumDuration = $79bd7f461221d269$var$_isFunction(momentum) ? function() {
        return momentum(self);
    } : function() {
        return momentum || 2.8;
    }, lastRefreshID, skipTouchMove, inputObserver = $79bd7f461221d269$var$_inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove() {
        return skipTouchMove = false;
    }, scrollClampX = $79bd7f461221d269$var$_passThrough, scrollClampY = $79bd7f461221d269$var$_passThrough, updateClamps = function updateClamps() {
        maxY = $79bd7f461221d269$var$_maxScroll(target, (0, $a129d6ec0733e75c$export$8e40fc98ff518e9d));
        scrollClampY = $79bd7f461221d269$var$_clamp($79bd7f461221d269$var$_fixIOSBug ? 1 : 0, maxY);
        normalizeScrollX && (scrollClampX = $79bd7f461221d269$var$_clamp(0, $79bd7f461221d269$var$_maxScroll(target, (0, $a129d6ec0733e75c$export$b2cabb342cb0ebe1))));
        lastRefreshID = $79bd7f461221d269$var$_refreshID;
    }, removeContentOffset = function removeContentOffset() {
        content._gsap.y = $79bd7f461221d269$var$_round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
        content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
        scrollFuncY.offset = scrollFuncY.cacheID = 0;
    }, ignoreDrag = function ignoreDrag() {
        if (skipTouchMove) {
            requestAnimationFrame(resumeTouchMove);
            var offset = $79bd7f461221d269$var$_round(self.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
            if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
                scrollFuncY.offset = scroll - scrollFuncY.v;
                var y = $79bd7f461221d269$var$_round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
                content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
                content._gsap.y = y + "px";
                scrollFuncY.cacheID = (0, $a129d6ec0733e75c$export$3cd1cee43d19b683).cache;
                $79bd7f461221d269$var$_updateAll();
            }
            return true;
        }
        scrollFuncY.offset && removeContentOffset();
        skipTouchMove = true;
    }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize() {
        // if the window resizes, like on an iPhone which Apple FORCES the address bar to show/hide even if we event.preventDefault(), it may be scrolling too far now that the address bar is showing, so we must dynamically adjust the momentum tween.
        updateClamps();
        if (tween.isActive() && tween.vars.scrollY > maxY) scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
    };
    content && $79bd7f461221d269$var$gsap.set(content, {
        y: "+=0"
    }); // to ensure there's a cache (element._gsap)
    vars.ignoreCheck = function(e) {
        return $79bd7f461221d269$var$_fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
    };
    vars.onPress = function() {
        skipTouchMove = false;
        var prevScale = scale;
        scale = $79bd7f461221d269$var$_round(($79bd7f461221d269$var$_win.visualViewport && $79bd7f461221d269$var$_win.visualViewport.scale || 1) / initialScale);
        tween.pause();
        prevScale !== scale && $79bd7f461221d269$var$_allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
        startScrollX = scrollFuncX();
        startScrollY = scrollFuncY();
        updateClamps();
        lastRefreshID = $79bd7f461221d269$var$_refreshID;
    };
    vars.onRelease = vars.onGestureStart = function(self, wasDragging) {
        scrollFuncY.offset && removeContentOffset();
        if (!wasDragging) onStopDelayedCall.restart(true);
        else {
            (0, $a129d6ec0733e75c$export$3cd1cee43d19b683).cache++; // make sure we're pulling the non-cached value
            // alternate algorithm: durX = Math.min(6, Math.abs(self.velocityX / 800)),	dur = Math.max(durX, Math.min(6, Math.abs(self.velocityY / 800))); dur = dur * (0.4 + (1 - _power4In(dur / 6)) * 0.6)) * (momentumSpeed || 1)
            var dur = resolveMomentumDuration(), currentScroll, endScroll;
            if (normalizeScrollX) {
                currentScroll = scrollFuncX();
                endScroll = currentScroll + dur * 0.05 * -self.velocityX / 0.227; // the constant .227 is from power4(0.05). velocity is inverted because scrolling goes in the opposite direction.
                dur *= $79bd7f461221d269$var$_clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, $79bd7f461221d269$var$_maxScroll(target, (0, $a129d6ec0733e75c$export$b2cabb342cb0ebe1)));
                tween.vars.scrollX = scrollClampX(endScroll);
            }
            currentScroll = scrollFuncY();
            endScroll = currentScroll + dur * 0.05 * -self.velocityY / 0.227; // the constant .227 is from power4(0.05)
            dur *= $79bd7f461221d269$var$_clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, $79bd7f461221d269$var$_maxScroll(target, (0, $a129d6ec0733e75c$export$8e40fc98ff518e9d)));
            tween.vars.scrollY = scrollClampY(endScroll);
            tween.invalidate().duration(dur).play(0.01);
            if ($79bd7f461221d269$var$_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) // iOS bug: it'll show the address bar but NOT fire the window "resize" event until the animation is done but we must protect against overshoot so we leverage an onUpdate to do so.
            $79bd7f461221d269$var$gsap.to({}, {
                onUpdate: onResize,
                duration: dur
            });
        }
        onRelease && onRelease(self);
    };
    vars.onWheel = function() {
        tween._ts && tween.pause();
        if ($79bd7f461221d269$var$_getTime() - wheelRefresh > 1000) {
            // after 1 second, refresh the clamps otherwise that'll only happen when ScrollTrigger.refresh() is called or for touch-scrolling.
            lastRefreshID = 0;
            wheelRefresh = $79bd7f461221d269$var$_getTime();
        }
    };
    vars.onChange = function(self, dx, dy, xArray, yArray) {
        $79bd7f461221d269$var$_refreshID !== lastRefreshID && updateClamps();
        dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self.startX - self.x) : scrollFuncX() + dx - xArray[1])); // for more precision, we track pointer/touch movement from the start, otherwise it'll drift.
        if (dy) {
            scrollFuncY.offset && removeContentOffset();
            var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self.startY - self.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
            isTouch && y !== yClamped && (startScrollY += yClamped - y);
            scrollFuncY(yClamped);
        }
        (dy || dx) && $79bd7f461221d269$var$_updateAll();
    };
    vars.onEnable = function() {
        $79bd7f461221d269$var$_allowNativePanning(target, normalizeScrollX ? false : "x");
        $79bd7f461221d269$export$875bcbe48555930.addEventListener("refresh", onResize);
        $79bd7f461221d269$var$_addListener($79bd7f461221d269$var$_win, "resize", onResize);
        if (scrollFuncY.smooth) {
            scrollFuncY.target.style.scrollBehavior = "auto";
            scrollFuncY.smooth = scrollFuncX.smooth = false;
        }
        inputObserver.enable();
    };
    vars.onDisable = function() {
        $79bd7f461221d269$var$_allowNativePanning(target, true);
        $79bd7f461221d269$var$_removeListener($79bd7f461221d269$var$_win, "resize", onResize);
        $79bd7f461221d269$export$875bcbe48555930.removeEventListener("refresh", onResize);
        inputObserver.kill();
    };
    vars.lockAxis = vars.lockAxis !== false;
    self = new (0, $a129d6ec0733e75c$export$c1cbdee04e18ea8b)(vars);
    self.iOS = $79bd7f461221d269$var$_fixIOSBug; // used in the Observer getCachedScroll() function to work around an iOS bug that wreaks havoc with TouchEvent.clientY if we allow scroll to go all the way back to 0.
    $79bd7f461221d269$var$_fixIOSBug && !scrollFuncY() && scrollFuncY(1); // iOS bug causes event.clientY values to freak out (wildly inaccurate) if the scroll position is exactly 0.
    $79bd7f461221d269$var$_fixIOSBug && $79bd7f461221d269$var$gsap.ticker.add($79bd7f461221d269$var$_passThrough); // prevent the ticker from sleeping
    onStopDelayedCall = self._dc;
    tween = $79bd7f461221d269$var$gsap.to(self, {
        ease: "power4",
        paused: true,
        scrollX: normalizeScrollX ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
            scrollY: $79bd7f461221d269$var$_interruptionTracker(scrollFuncY, scrollFuncY(), function() {
                return tween.pause();
            })
        },
        onUpdate: $79bd7f461221d269$var$_updateAll,
        onComplete: onStopDelayedCall.vars.onComplete
    }); // we need the modifier to sense if the scroll position is altered outside of the momentum tween (like with a scrollTo tween) so we can pause() it to prevent conflicts.
    return self;
};
$79bd7f461221d269$export$875bcbe48555930.sort = function(func) {
    return $79bd7f461221d269$var$_triggers.sort(func || function(a, b) {
        return (a.vars.refreshPriority || 0) * -1000000 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1000000);
    });
};
$79bd7f461221d269$export$875bcbe48555930.observe = function(vars) {
    return new (0, $a129d6ec0733e75c$export$c1cbdee04e18ea8b)(vars);
};
$79bd7f461221d269$export$875bcbe48555930.normalizeScroll = function(vars) {
    if (typeof vars === "undefined") return $79bd7f461221d269$var$_normalizer;
    if (vars === true && $79bd7f461221d269$var$_normalizer) return $79bd7f461221d269$var$_normalizer.enable();
    if (vars === false) return $79bd7f461221d269$var$_normalizer && $79bd7f461221d269$var$_normalizer.kill();
    var normalizer = vars instanceof (0, $a129d6ec0733e75c$export$c1cbdee04e18ea8b) ? vars : $79bd7f461221d269$var$_getScrollNormalizer(vars);
    $79bd7f461221d269$var$_normalizer && $79bd7f461221d269$var$_normalizer.target === normalizer.target && $79bd7f461221d269$var$_normalizer.kill();
    $79bd7f461221d269$var$_isViewport(normalizer.target) && ($79bd7f461221d269$var$_normalizer = normalizer);
    return normalizer;
};
$79bd7f461221d269$export$875bcbe48555930.core = {
    // smaller file size way to leverage in ScrollSmoother and Observer
    _getVelocityProp: (0, $a129d6ec0733e75c$export$5de019f4480f0f8d),
    _inputObserver: $79bd7f461221d269$var$_inputObserver,
    _scrollers: (0, $a129d6ec0733e75c$export$3cd1cee43d19b683),
    _proxies: (0, $a129d6ec0733e75c$export$d8e56d510a804d0a),
    bridge: {
        // when normalizeScroll sets the scroll position (ss = setScroll)
        ss: function ss() {
            $79bd7f461221d269$var$_lastScrollTime || $79bd7f461221d269$var$_dispatch("scrollStart");
            $79bd7f461221d269$var$_lastScrollTime = $79bd7f461221d269$var$_getTime();
        },
        // a way to get the _refreshing value in Observer
        ref: function ref() {
            return $79bd7f461221d269$var$_refreshing;
        }
    }
};
$79bd7f461221d269$var$_getGSAP() && $79bd7f461221d269$var$gsap.registerPlugin($79bd7f461221d269$export$875bcbe48555930);


// Object.keys
var $aa534fe9a3b82c52$var$win = window;
var $aa534fe9a3b82c52$export$27f233d61a9e2fa4 = $aa534fe9a3b82c52$var$win.requestAnimationFrame || $aa534fe9a3b82c52$var$win.webkitRequestAnimationFrame || $aa534fe9a3b82c52$var$win.mozRequestAnimationFrame || $aa534fe9a3b82c52$var$win.msRequestAnimationFrame || function(cb) {
    return setTimeout(cb, 16);
};


var $136c643e31c13686$var$win = window;
var $136c643e31c13686$export$75aab3dbee8deceb = $136c643e31c13686$var$win.cancelAnimationFrame || $136c643e31c13686$var$win.mozCancelAnimationFrame || function(id) {
    clearTimeout(id);
};


function $ab7a5f7dfc3d7ee9$export$8b58be045bf06082() {
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


function $cec617894089d04c$export$79d1167a24e4e930(value) {
    return [
        "true",
        "false"
    ].indexOf(value) >= 0 ? JSON.parse(value) : value;
}


function $1829dbb315d52daa$export$1f73f60bdb811cb1(storage, key, value, access) {
    if (access) try {
        storage.setItem(key, value);
    } catch (e) {}
    return value;
}


function $a267de20ddc5b145$export$ff0ccbbb2d1923f6() {
    var id = window.tnsId;
    window.tnsId = !id ? 1 : id + 1;
    return "tns" + window.tnsId;
}


// get css-calc 
// @return - false | calc | -webkit-calc | -moz-calc
// @usage - var calc = getCalc(); 
function $ec7477067ffb29d6$export$135b49d4bc2964c6() {
    var doc = document, body = doc.body;
    if (!body) {
        body = doc.createElement("body");
        body.fake = true;
    }
    return body;
}


var $867d179a3c9866c7$export$9dfbf2fa8806212d = document.documentElement;


function $d1754105de3eb6d7$export$4078b67b5eba0c5(body) {
    var docOverflow = "";
    if (body.fake) {
        docOverflow = (0, $867d179a3c9866c7$export$9dfbf2fa8806212d).style.overflow;
        //avoid crashing IE8, if background image is used
        body.style.background = "";
        //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
        body.style.overflow = (0, $867d179a3c9866c7$export$9dfbf2fa8806212d).style.overflow = "hidden";
        (0, $867d179a3c9866c7$export$9dfbf2fa8806212d).appendChild(body);
    }
    return docOverflow;
}



function $a95e3ee50de6c1dd$export$81b27fa331809b9b(body, docOverflow) {
    if (body.fake) {
        body.remove();
        (0, $867d179a3c9866c7$export$9dfbf2fa8806212d).style.overflow = docOverflow;
        // Trigger layout so kinetic scrolling isn't disabled in iOS6+
        // eslint-disable-next-line
        (0, $867d179a3c9866c7$export$9dfbf2fa8806212d).offsetHeight;
    }
}


function $46147bcfc1f8d1fb$export$42bfa9b2d4dad91a() {
    var doc = document, body = (0, $ec7477067ffb29d6$export$135b49d4bc2964c6)(), docOverflow = (0, $d1754105de3eb6d7$export$4078b67b5eba0c5)(body), div = doc.createElement("div"), result = false;
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
    body.fake ? (0, $a95e3ee50de6c1dd$export$81b27fa331809b9b)(body, docOverflow) : div.remove();
    return result;
}


// get subpixel support value
// @return - boolean



function $9aa10a24f7d9d184$export$7b334bfa4e585549() {
    // check subpixel layout supporting
    var doc = document, body = (0, $ec7477067ffb29d6$export$135b49d4bc2964c6)(), docOverflow = (0, $d1754105de3eb6d7$export$4078b67b5eba0c5)(body), wrapper = doc.createElement("div"), outer = doc.createElement("div"), str = "", count = 70, perPage = 3, supported = false;
    wrapper.className = "tns-t-subp2";
    outer.className = "tns-t-ct";
    for(var i = 0; i < count; i++)str += "<div></div>";
    outer.innerHTML = str;
    wrapper.appendChild(outer);
    body.appendChild(wrapper);
    supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;
    body.fake ? (0, $a95e3ee50de6c1dd$export$81b27fa331809b9b)(body, docOverflow) : wrapper.remove();
    return supported;
}





function $d8173467046bff39$export$48976c233ddfebe2() {
    if (window.matchMedia || window.msMatchMedia) return true;
    var doc = document, body = (0, $ec7477067ffb29d6$export$135b49d4bc2964c6)(), docOverflow = (0, $d1754105de3eb6d7$export$4078b67b5eba0c5)(body), div = doc.createElement("div"), style = doc.createElement("style"), rule = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", position;
    style.type = "text/css";
    div.className = "tns-mq-test";
    body.appendChild(style);
    body.appendChild(div);
    if (style.styleSheet) style.styleSheet.cssText = rule;
    else style.appendChild(doc.createTextNode(rule));
    position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle["position"];
    body.fake ? (0, $a95e3ee50de6c1dd$export$81b27fa331809b9b)(body, docOverflow) : div.remove();
    return position === "absolute";
}


// create and append style sheet
function $6d765303807f779e$export$d07d6a5154e3b470(media, nonce) {
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


// cross browsers addRule method

function $ac2c2630c6622fe8$export$bf97e331026f75ba(sheet, selector, rules, index) {
    // return raf(function() {
    "insertRule" in sheet ? sheet.insertRule(selector + "{" + rules + "}", index) : sheet.addRule(selector, rules, index);
// });
}


// cross browsers addRule method

function $b2b2f31267c2d368$export$271e480b8a432c4a(sheet, index) {
    // return raf(function() {
    "deleteRule" in sheet ? sheet.deleteRule(index) : sheet.removeRule(index);
// });
}


function $d4508f002f0f36ad$export$ccd7e907f4f59892(sheet) {
    var rule = "insertRule" in sheet ? sheet.cssRules : sheet.rules;
    return rule.length;
}


function $2bbc5253175a6c84$export$c796d9d3e501591f(y, x) {
    return Math.atan2(y, x) * (180 / Math.PI);
}


function $220b5440deab0062$export$83b6d73568c72b60(angle, range) {
    var direction = false, gap = Math.abs(90 - Math.abs(angle));
    if (gap >= 90 - range) direction = "horizontal";
    else if (gap <= range) direction = "vertical";
    return direction;
}


// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
function $1049e7a63b214b22$export$4b80e395e36b5a56(arr, callback, scope) {
    for(var i = 0, l = arr.length; i < l; i++)callback.call(scope, arr[i], i);
}


var $6e09cafcefaa8179$export$8b753db5fc454027 = "classList" in document.createElement("_");


var $eb69d94d62e4dc45$export$4ea3d958472af68f = (0, $6e09cafcefaa8179$export$8b753db5fc454027) ? function(el, str) {
    return el.classList.contains(str);
} : function(el, str) {
    return el.className.indexOf(str) >= 0;
};



var $46f3407947cf2355$export$d2cf6cd1dc7067d3 = (0, $6e09cafcefaa8179$export$8b753db5fc454027) ? function(el, str) {
    if (!(0, $eb69d94d62e4dc45$export$4ea3d958472af68f)(el, str)) el.classList.add(str);
} : function(el, str) {
    if (!(0, $eb69d94d62e4dc45$export$4ea3d958472af68f)(el, str)) el.className += " " + str;
};



var $f6f188badac61409$export$c2255604a80b4506 = (0, $6e09cafcefaa8179$export$8b753db5fc454027) ? function(el, str) {
    if ((0, $eb69d94d62e4dc45$export$4ea3d958472af68f)(el, str)) el.classList.remove(str);
} : function(el, str) {
    if ((0, $eb69d94d62e4dc45$export$4ea3d958472af68f)(el, str)) el.className = el.className.replace(str, "");
};


function $582013da8d64c0e3$export$5608640b1bf2f6d7(el, attr) {
    return el.hasAttribute(attr);
}


function $f995ed4be9577fcc$export$6a93fe6b2b4c71a0(el, attr) {
    return el.getAttribute(attr);
}


function $4fc4709f46e00ea4$export$ff45fc08c57bb9d0(el) {
    // Only NodeList has the "item()" function
    return typeof el.item !== "undefined";
}


function $b39fb9920d0c23dd$export$7e45664a2081efb1(els, attrs) {
    els = (0, $4fc4709f46e00ea4$export$ff45fc08c57bb9d0)(els) || els instanceof Array ? els : [
        els
    ];
    if (Object.prototype.toString.call(attrs) !== "[object Object]") return;
    for(var i = els.length; i--;)for(var key in attrs)els[i].setAttribute(key, attrs[key]);
}



function $e8b8a168e520d5ab$export$711225beb0f1ef57(els, attrs) {
    els = (0, $4fc4709f46e00ea4$export$ff45fc08c57bb9d0)(els) || els instanceof Array ? els : [
        els
    ];
    attrs = attrs instanceof Array ? attrs : [
        attrs
    ];
    var attrLength = attrs.length;
    for(var i = els.length; i--;)for(var j = attrLength; j--;)els[i].removeAttribute(attrs[j]);
}


function $4418b89e674db92c$export$19b645cc08e75c7c(nl) {
    var arr = [];
    for(var i = 0, l = nl.length; i < l; i++)arr.push(nl[i]);
    return arr;
}


function $35f7fcd6b64164fa$export$7669482c90f5c50f(el, forceHide) {
    if (el.style.display !== "none") el.style.display = "none";
}


function $e20cd32291ee454a$export$998191bfdf710c72(el, forceHide) {
    if (el.style.display === "none") el.style.display = "";
}


function $b42ff6b159ec6122$export$795910f5f15a9633(el) {
    return window.getComputedStyle(el).display !== "none";
}


function $d8badc6bf7c176c3$export$d7ea39ebd37f24a6(props) {
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





function $c877516f56834464$export$c0585cbcaae92b06(tf) {
    if (!tf) return false;
    if (!window.getComputedStyle) return false;
    var doc = document, body = (0, $ec7477067ffb29d6$export$135b49d4bc2964c6)(), docOverflow = (0, $d1754105de3eb6d7$export$4078b67b5eba0c5)(body), el = doc.createElement("p"), has3d, cssTF = tf.length > 9 ? "-" + tf.slice(0, -9).toLowerCase() + "-" : "";
    cssTF += "transform";
    // Add it to the body to get the computed style
    body.insertBefore(el, null);
    el.style[tf] = "translate3d(1px,1px,1px)";
    has3d = window.getComputedStyle(el).getPropertyValue(cssTF);
    body.fake ? (0, $a95e3ee50de6c1dd$export$81b27fa331809b9b)(body, docOverflow) : el.remove();
    return has3d !== undefined && has3d.length > 0 && has3d !== "none";
}


// get transitionend, animationend based on transitionDuration
// @propin: string
// @propOut: string, first-letter uppercase
// Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
function $6fc9527ba5bc750a$export$41e71ffeacbff65e(propIn, propOut) {
    var endProp = false;
    if (/^Webkit/.test(propIn)) endProp = "webkit" + propOut + "End";
    else if (/^O/.test(propIn)) endProp = "o" + propOut + "End";
    else if (propIn) endProp = propOut.toLowerCase() + "end";
    return endProp;
}


// Test via a getter in the options object to see if the passive property is accessed
var $04b54d63ca053508$var$supportsPassive = false;
try {
    var $04b54d63ca053508$var$opts = Object.defineProperty({}, "passive", {
        get: function() {
            $04b54d63ca053508$var$supportsPassive = true;
        }
    });
    window.addEventListener("test", null, $04b54d63ca053508$var$opts);
} catch (e) {}
var $04b54d63ca053508$export$555390bf67cc3262 = $04b54d63ca053508$var$supportsPassive ? {
    passive: true
} : false;


function $061cad390577ffb1$export$aadfb65bee660f96(el, obj, preventScrolling) {
    for(var prop in obj){
        var option = [
            "touchstart",
            "touchmove"
        ].indexOf(prop) >= 0 && !preventScrolling ? (0, $04b54d63ca053508$export$555390bf67cc3262) : false;
        el.addEventListener(prop, obj[prop], option);
    }
}



function $7a991fc0a0cd84d9$export$da5f6eb3bb522cd(el, obj) {
    for(var prop in obj){
        var option = [
            "touchstart",
            "touchmove"
        ].indexOf(prop) >= 0 ? (0, $04b54d63ca053508$export$555390bf67cc3262) : false;
        el.removeEventListener(prop, obj[prop], option);
    }
}


function $70e17437ef9574c6$export$ada873a34909da65() {
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


function $0060788919ddc6b2$export$e2705a83c013f564(element, attr, prefix, postfix, to, duration, callback) {
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


if (!Object.keys) Object.keys = function(object) {
    var keys = [];
    for(var name in object)if (Object.prototype.hasOwnProperty.call(object, name)) keys.push(name);
    return keys;
};
// ChildNode.remove
if (!("remove" in Element.prototype)) Element.prototype.remove = function() {
    if (this.parentNode) this.parentNode.removeChild(this);
};
var $04445ee8d0c82197$export$51fe319e24d9d8c9 = function(options) {
    options = (0, $ab7a5f7dfc3d7ee9$export$8b58be045bf06082)({
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
    var CALC = tnsStorage["tC"] ? (0, $cec617894089d04c$export$79d1167a24e4e930)(tnsStorage["tC"]) : (0, $1829dbb315d52daa$export$1f73f60bdb811cb1)(tnsStorage, "tC", (0, $46147bcfc1f8d1fb$export$42bfa9b2d4dad91a)(), localStorageAccess), PERCENTAGELAYOUT = tnsStorage["tPL"] ? (0, $cec617894089d04c$export$79d1167a24e4e930)(tnsStorage["tPL"]) : (0, $1829dbb315d52daa$export$1f73f60bdb811cb1)(tnsStorage, "tPL", (0, $9aa10a24f7d9d184$export$7b334bfa4e585549)(), localStorageAccess), CSSMQ = tnsStorage["tMQ"] ? (0, $cec617894089d04c$export$79d1167a24e4e930)(tnsStorage["tMQ"]) : (0, $1829dbb315d52daa$export$1f73f60bdb811cb1)(tnsStorage, "tMQ", (0, $d8173467046bff39$export$48976c233ddfebe2)(), localStorageAccess), TRANSFORM = tnsStorage["tTf"] ? (0, $cec617894089d04c$export$79d1167a24e4e930)(tnsStorage["tTf"]) : (0, $1829dbb315d52daa$export$1f73f60bdb811cb1)(tnsStorage, "tTf", (0, $d8badc6bf7c176c3$export$d7ea39ebd37f24a6)("transform"), localStorageAccess), HAS3DTRANSFORMS = tnsStorage["t3D"] ? (0, $cec617894089d04c$export$79d1167a24e4e930)(tnsStorage["t3D"]) : (0, $1829dbb315d52daa$export$1f73f60bdb811cb1)(tnsStorage, "t3D", (0, $c877516f56834464$export$c0585cbcaae92b06)(TRANSFORM), localStorageAccess), TRANSITIONDURATION = tnsStorage["tTDu"] ? (0, $cec617894089d04c$export$79d1167a24e4e930)(tnsStorage["tTDu"]) : (0, $1829dbb315d52daa$export$1f73f60bdb811cb1)(tnsStorage, "tTDu", (0, $d8badc6bf7c176c3$export$d7ea39ebd37f24a6)("transitionDuration"), localStorageAccess), TRANSITIONDELAY = tnsStorage["tTDe"] ? (0, $cec617894089d04c$export$79d1167a24e4e930)(tnsStorage["tTDe"]) : (0, $1829dbb315d52daa$export$1f73f60bdb811cb1)(tnsStorage, "tTDe", (0, $d8badc6bf7c176c3$export$d7ea39ebd37f24a6)("transitionDelay"), localStorageAccess), ANIMATIONDURATION = tnsStorage["tADu"] ? (0, $cec617894089d04c$export$79d1167a24e4e930)(tnsStorage["tADu"]) : (0, $1829dbb315d52daa$export$1f73f60bdb811cb1)(tnsStorage, "tADu", (0, $d8badc6bf7c176c3$export$d7ea39ebd37f24a6)("animationDuration"), localStorageAccess), ANIMATIONDELAY = tnsStorage["tADe"] ? (0, $cec617894089d04c$export$79d1167a24e4e930)(tnsStorage["tADe"]) : (0, $1829dbb315d52daa$export$1f73f60bdb811cb1)(tnsStorage, "tADe", (0, $d8badc6bf7c176c3$export$d7ea39ebd37f24a6)("animationDelay"), localStorageAccess), TRANSITIONEND = tnsStorage["tTE"] ? (0, $cec617894089d04c$export$79d1167a24e4e930)(tnsStorage["tTE"]) : (0, $1829dbb315d52daa$export$1f73f60bdb811cb1)(tnsStorage, "tTE", (0, $6fc9527ba5bc750a$export$41e71ffeacbff65e)(TRANSITIONDURATION, "Transition"), localStorageAccess), ANIMATIONEND = tnsStorage["tAE"] ? (0, $cec617894089d04c$export$79d1167a24e4e930)(tnsStorage["tAE"]) : (0, $1829dbb315d52daa$export$1f73f60bdb811cb1)(tnsStorage, "tAE", (0, $6fc9527ba5bc750a$export$41e71ffeacbff65e)(ANIMATIONDURATION, "Animation"), localStorageAccess);
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
            options = (0, $ab7a5f7dfc3d7ee9$export$8b58be045bf06082)(options, responsive[0]);
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
    var autoWidth = options.autoWidth, fixedWidth = getOption("fixedWidth"), edgePadding = getOption("edgePadding"), gutter = getOption("gutter"), viewport = getViewportWidth(), center = getOption("center"), items = !autoWidth ? Math.floor(getOption("items")) : 1, slideBy = getOption("slideBy"), viewportMax = options.viewportMax || options.fixedWidthViewportWidth, arrowKeys = getOption("arrowKeys"), speed = getOption("speed"), rewind = options.rewind, loop = rewind ? false : options.loop, autoHeight = getOption("autoHeight"), controls = getOption("controls"), controlsText = getOption("controlsText"), nav = getOption("nav"), touch = getOption("touch"), mouseDrag = getOption("mouseDrag"), autoplay = getOption("autoplay"), autoplayTimeout = getOption("autoplayTimeout"), autoplayText = getOption("autoplayText"), autoplayHoverPause = getOption("autoplayHoverPause"), autoplayResetOnVisibility = getOption("autoplayResetOnVisibility"), sheet = (0, $6d765303807f779e$export$d07d6a5154e3b470)(null, getOption("nonce")), lazyload = options.lazyload, lazyloadSelector = options.lazyloadSelector, slidePositions, slideItemsOut = [], cloneCount = loop ? getCloneCountForLoop() : 0, slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2, hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false, rightBoundary = fixedWidth ? getRightBoundary() : null, updateIndexBeforeTransform = !carousel || !loop ? true : false, // transform
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
    resizeTimer, preventActionWhenRunning = options.preventActionWhenRunning, swipeAngle = options.swipeAngle, moveDirectionExpected = swipeAngle ? "?" : true, running = false, onInit = options.onInit, events = new (0, $70e17437ef9574c6$export$ada873a34909da65)(), // id, class
    newContainerClasses = " tns-slider tns-" + options.mode, slideId = container.id || (0, $a267de20ddc5b145$export$ff0ccbbb2d1923f6)(), disable = getOption("disable"), disabled = false, freezable = options.freezable, freeze = freezable && !autoWidth ? getFreeze() : false, frozen = false, controlsEvents = {
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
        (0, $1049e7a63b214b22$export$4b80e395e36b5a56)(slideItems, function(item, i) {
            (0, $46f3407947cf2355$export$d2cf6cd1dc7067d3)(item, "tns-item");
            if (!item.id) item.id = slideId + "-item" + i;
            if (!carousel && animateNormal) (0, $46f3407947cf2355$export$d2cf6cd1dc7067d3)(item, animateNormal);
            (0, $b39fb9920d0c23dd$export$7e45664a2081efb1)(item, {
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
                (0, $46f3407947cf2355$export$d2cf6cd1dc7067d3)(cloneFirst, slideClonedClass);
                (0, $e8b8a168e520d5ab$export$711225beb0f1ef57)(cloneFirst, "id");
                fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);
                if (carousel) {
                    var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
                    (0, $46f3407947cf2355$export$d2cf6cd1dc7067d3)(cloneLast, slideClonedClass);
                    (0, $e8b8a168e520d5ab$export$711225beb0f1ef57)(cloneLast, "id");
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
            (0, $1049e7a63b214b22$export$4b80e395e36b5a56)(imgs, function(img) {
                var src = img.src;
                if (!lazyload) {
                    // not data img
                    if (src && src.indexOf("data:image") < 0) {
                        img.src = "";
                        (0, $061cad390577ffb1$export$aadfb65bee660f96)(img, imgEvents);
                        (0, $46f3407947cf2355$export$d2cf6cd1dc7067d3)(img, "loading");
                        img.src = src;
                    // data img
                    } else imgLoaded(img);
                }
            });
            // set imgsComplete
            (0, $aa534fe9a3b82c52$export$27f233d61a9e2fa4)(function() {
                imgsLoadedCheck((0, $4418b89e674db92c$export$19b645cc08e75c7c)(imgs), function() {
                    imgsComplete = true;
                });
            });
            // reset imgs for auto height: check visible imgs only
            if (hasOption("autoHeight")) imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1));
            lazyload ? initSliderTransformStyleCheck() : (0, $aa534fe9a3b82c52$export$27f233d61a9e2fa4)(function() {
                imgsLoadedCheck((0, $4418b89e674db92c$export$19b645cc08e75c7c)(imgs), initSliderTransformStyleCheck);
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
            (0, $46f3407947cf2355$export$d2cf6cd1dc7067d3)(item, animateIn);
            (0, $f6f188badac61409$export$c2255604a80b4506)(item, animateNormal);
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
                (0, $ac2c2630c6622fe8$export$bf97e331026f75ba)(sheet, "#" + slideId + " > .tns-item", "font-size:" + win.getComputedStyle(slideItems[0]).fontSize + ";", (0, $d4508f002f0f36ad$export$ccd7e907f4f59892)(sheet));
                (0, $ac2c2630c6622fe8$export$bf97e331026f75ba)(sheet, "#" + slideId, "font-size:0;", (0, $d4508f002f0f36ad$export$ccd7e907f4f59892)(sheet));
            } else if (carousel) (0, $1049e7a63b214b22$export$4b80e395e36b5a56)(slideItems, function(slide, i) {
                slide.style.marginLeft = getSlideMarginLeft(i);
            });
        }
        // ## BASIC STYLES
        if (CSSMQ) {
            // middle wrapper style
            if (TRANSITIONDURATION) {
                var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : "";
                (0, $ac2c2630c6622fe8$export$bf97e331026f75ba)(sheet, "#" + slideId + "-mw", str, (0, $d4508f002f0f36ad$export$ccd7e907f4f59892)(sheet));
            }
            // inner wrapper styles
            str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
            (0, $ac2c2630c6622fe8$export$bf97e331026f75ba)(sheet, "#" + slideId + "-iw", str, (0, $d4508f002f0f36ad$export$ccd7e907f4f59892)(sheet));
            // container styles
            if (carousel) {
                str = horizontal && !autoWidth ? "width:" + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ";" : "";
                if (TRANSITIONDURATION) str += getTransitionDurationStyle(speed);
                (0, $ac2c2630c6622fe8$export$bf97e331026f75ba)(sheet, "#" + slideId, str, (0, $d4508f002f0f36ad$export$ccd7e907f4f59892)(sheet));
            }
            // slide styles
            str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : "";
            if (options.gutter) str += getSlideGutterStyle(options.gutter);
            // set gallery items transition-duration
            if (!carousel) {
                if (TRANSITIONDURATION) str += getTransitionDurationStyle(speed);
                if (ANIMATIONDURATION) str += getAnimationDurationStyle(speed);
            }
            if (str) (0, $ac2c2630c6622fe8$export$bf97e331026f75ba)(sheet, "#" + slideId + " > .tns-item", str, (0, $d4508f002f0f36ad$export$ccd7e907f4f59892)(sheet));
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
            if (str) (0, $ac2c2630c6622fe8$export$bf97e331026f75ba)(sheet, "#" + slideId + " > .tns-item", str, (0, $d4508f002f0f36ad$export$ccd7e907f4f59892)(sheet));
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
            if (autoplayButton) (0, $b39fb9920d0c23dd$export$7e45664a2081efb1)(autoplayButton, {
                "data-action": txt
            });
            else if (options.autoplayButtonOutput) {
                outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button type="button" data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + "</button>");
                autoplayButton = outerWrapper.querySelector("[data-action]");
            }
            // add event
            if (autoplayButton) (0, $061cad390577ffb1$export$aadfb65bee660f96)(autoplayButton, {
                "click": toggleAutoplay
            });
            if (autoplay) {
                startAutoplay();
                if (autoplayHoverPause) (0, $061cad390577ffb1$export$aadfb65bee660f96)(container, hoverEvents);
                if (autoplayResetOnVisibility) (0, $061cad390577ffb1$export$aadfb65bee660f96)(container, visibilityEvent);
            }
        }
        // == navInit ==
        if (hasNav) {
            var initIndex = !carousel ? 0 : cloneCount;
            // customized nav
            // will not hide the navs in case they're thumbnails
            if (navContainer) {
                (0, $b39fb9920d0c23dd$export$7e45664a2081efb1)(navContainer, {
                    "aria-label": "Carousel Pagination"
                });
                navItems = navContainer.children;
                (0, $1049e7a63b214b22$export$4b80e395e36b5a56)(navItems, function(item, i) {
                    (0, $b39fb9920d0c23dd$export$7e45664a2081efb1)(item, {
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
                (0, $ac2c2630c6622fe8$export$bf97e331026f75ba)(sheet, "[aria-controls^=" + slideId + "-item]", str, (0, $d4508f002f0f36ad$export$ccd7e907f4f59892)(sheet));
            }
            (0, $b39fb9920d0c23dd$export$7e45664a2081efb1)(navItems[navCurrentIndex], {
                "aria-label": navStr + (navCurrentIndex + 1) + navStrCurrent
            });
            (0, $e8b8a168e520d5ab$export$711225beb0f1ef57)(navItems[navCurrentIndex], "tabindex");
            (0, $46f3407947cf2355$export$d2cf6cd1dc7067d3)(navItems[navCurrentIndex], navActiveClass);
            // add events
            (0, $061cad390577ffb1$export$aadfb65bee660f96)(navContainer, navEvents);
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
            if (options.controlsContainer) (0, $b39fb9920d0c23dd$export$7e45664a2081efb1)(controlsContainer, {
                "aria-label": "Carousel Navigation",
                "tabindex": "0"
            });
            if (options.controlsContainer || options.prevButton && options.nextButton) (0, $b39fb9920d0c23dd$export$7e45664a2081efb1)([
                prevButton,
                nextButton
            ], {
                "aria-controls": slideId,
                "tabindex": "-1"
            });
            if (options.controlsContainer || options.prevButton && options.nextButton) {
                (0, $b39fb9920d0c23dd$export$7e45664a2081efb1)(prevButton, {
                    "data-controls": "prev"
                });
                (0, $b39fb9920d0c23dd$export$7e45664a2081efb1)(nextButton, {
                    "data-controls": "next"
                });
            }
            prevIsButton = isButton(prevButton);
            nextIsButton = isButton(nextButton);
            updateControlsStatus();
            // add events
            if (controlsContainer) (0, $061cad390577ffb1$export$aadfb65bee660f96)(controlsContainer, controlsEvents);
            else {
                (0, $061cad390577ffb1$export$aadfb65bee660f96)(prevButton, controlsEvents);
                (0, $061cad390577ffb1$export$aadfb65bee660f96)(nextButton, controlsEvents);
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
            (0, $061cad390577ffb1$export$aadfb65bee660f96)(container, eve);
        }
        if (touch) (0, $061cad390577ffb1$export$aadfb65bee660f96)(container, touchEvents, options.preventScrollOnTouch);
        if (mouseDrag) (0, $061cad390577ffb1$export$aadfb65bee660f96)(container, dragEvents);
        if (arrowKeys) (0, $061cad390577ffb1$export$aadfb65bee660f96)(doc, docmentKeydownEvent);
        if (nested === "inner") events.on("outerResized", function() {
            resizeTasks();
            events.emit("innerLoaded", info());
        });
        else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) (0, $061cad390577ffb1$export$aadfb65bee660f96)(win, {
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
        (0, $7a991fc0a0cd84d9$export$da5f6eb3bb522cd)(win, {
            "resize": onResize
        });
        // arrowKeys, controls, nav
        if (arrowKeys) (0, $7a991fc0a0cd84d9$export$da5f6eb3bb522cd)(doc, docmentKeydownEvent);
        if (controlsContainer) (0, $7a991fc0a0cd84d9$export$da5f6eb3bb522cd)(controlsContainer, controlsEvents);
        if (navContainer) (0, $7a991fc0a0cd84d9$export$da5f6eb3bb522cd)(navContainer, navEvents);
        // autoplay
        (0, $7a991fc0a0cd84d9$export$da5f6eb3bb522cd)(container, hoverEvents);
        (0, $7a991fc0a0cd84d9$export$da5f6eb3bb522cd)(container, visibilityEvent);
        if (autoplayButton) (0, $7a991fc0a0cd84d9$export$da5f6eb3bb522cd)(autoplayButton, {
            "click": toggleAutoplay
        });
        if (autoplay) clearInterval(autoplayTimer);
        // container
        if (carousel && TRANSITIONEND) {
            var eve = {};
            eve[TRANSITIONEND] = onTransitionEnd;
            (0, $7a991fc0a0cd84d9$export$da5f6eb3bb522cd)(container, eve);
        }
        if (touch) (0, $7a991fc0a0cd84d9$export$da5f6eb3bb522cd)(container, touchEvents);
        if (mouseDrag) (0, $7a991fc0a0cd84d9$export$da5f6eb3bb522cd)(container, dragEvents);
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
        (0, $aa534fe9a3b82c52$export$27f233d61a9e2fa4)(function() {
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
        if (arrowKeys !== arrowKeysTem) arrowKeys ? (0, $061cad390577ffb1$export$aadfb65bee660f96)(doc, docmentKeydownEvent) : (0, $7a991fc0a0cd84d9$export$da5f6eb3bb522cd)(doc, docmentKeydownEvent);
        if (controls !== controlsTem) {
            if (controls) {
                if (controlsContainer) (0, $e20cd32291ee454a$export$998191bfdf710c72)(controlsContainer);
                else {
                    if (prevButton) (0, $e20cd32291ee454a$export$998191bfdf710c72)(prevButton);
                    if (nextButton) (0, $e20cd32291ee454a$export$998191bfdf710c72)(nextButton);
                }
            } else if (controlsContainer) (0, $35f7fcd6b64164fa$export$7669482c90f5c50f)(controlsContainer);
            else {
                if (prevButton) (0, $35f7fcd6b64164fa$export$7669482c90f5c50f)(prevButton);
                if (nextButton) (0, $35f7fcd6b64164fa$export$7669482c90f5c50f)(nextButton);
            }
        }
        if (nav !== navTem) {
            if (nav) {
                (0, $e20cd32291ee454a$export$998191bfdf710c72)(navContainer);
                updateNavVisibility();
            } else (0, $35f7fcd6b64164fa$export$7669482c90f5c50f)(navContainer);
        }
        if (touch !== touchTem) touch ? (0, $061cad390577ffb1$export$aadfb65bee660f96)(container, touchEvents, options.preventScrollOnTouch) : (0, $7a991fc0a0cd84d9$export$da5f6eb3bb522cd)(container, touchEvents);
        if (mouseDrag !== mouseDragTem) mouseDrag ? (0, $061cad390577ffb1$export$aadfb65bee660f96)(container, dragEvents) : (0, $7a991fc0a0cd84d9$export$da5f6eb3bb522cd)(container, dragEvents);
        if (autoplay !== autoplayTem) {
            if (autoplay) {
                if (autoplayButton) (0, $e20cd32291ee454a$export$998191bfdf710c72)(autoplayButton);
                if (!animating && !autoplayUserPaused) startAutoplay();
            } else {
                if (autoplayButton) (0, $35f7fcd6b64164fa$export$7669482c90f5c50f)(autoplayButton);
                if (animating) stopAutoplay();
            }
        }
        if (autoplayHoverPause !== autoplayHoverPauseTem) autoplayHoverPause ? (0, $061cad390577ffb1$export$aadfb65bee660f96)(container, hoverEvents) : (0, $7a991fc0a0cd84d9$export$da5f6eb3bb522cd)(container, hoverEvents);
        if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) autoplayResetOnVisibility ? (0, $061cad390577ffb1$export$aadfb65bee660f96)(doc, visibilityEvent) : (0, $7a991fc0a0cd84d9$export$da5f6eb3bb522cd)(doc, visibilityEvent);
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
                    (0, $b2b2f31267c2d368$export$271e480b8a432c4a)(sheet, (0, $d4508f002f0f36ad$export$ccd7e907f4f59892)(sheet) - 1);
                    (0, $ac2c2630c6622fe8$export$bf97e331026f75ba)(sheet, "#" + slideId + " > .tns-item", str, (0, $d4508f002f0f36ad$export$ccd7e907f4f59892)(sheet));
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
        if (!autoplay && autoplayButton) (0, $35f7fcd6b64164fa$export$7669482c90f5c50f)(autoplayButton);
        if (!nav && navContainer) (0, $35f7fcd6b64164fa$export$7669482c90f5c50f)(navContainer);
        if (!controls) {
            if (controlsContainer) (0, $35f7fcd6b64164fa$export$7669482c90f5c50f)(controlsContainer);
            else {
                if (prevButton) (0, $35f7fcd6b64164fa$export$7669482c90f5c50f)(prevButton);
                if (nextButton) (0, $35f7fcd6b64164fa$export$7669482c90f5c50f)(nextButton);
            }
        }
    }
    function enableUI() {
        if (autoplay && autoplayButton) (0, $e20cd32291ee454a$export$998191bfdf710c72)(autoplayButton);
        if (nav && navContainer) (0, $e20cd32291ee454a$export$998191bfdf710c72)(navContainer);
        if (controls) {
            if (controlsContainer) (0, $e20cd32291ee454a$export$998191bfdf710c72)(controlsContainer);
            else {
                if (prevButton) (0, $e20cd32291ee454a$export$998191bfdf710c72)(prevButton);
                if (nextButton) (0, $e20cd32291ee454a$export$998191bfdf710c72)(nextButton);
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
                if (carousel) (0, $46f3407947cf2355$export$d2cf6cd1dc7067d3)(slideItems[i], str);
                (0, $46f3407947cf2355$export$d2cf6cd1dc7067d3)(slideItems[slideCountNew - i - 1], str);
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
                if (carousel) (0, $f6f188badac61409$export$c2255604a80b4506)(slideItems[i], str);
                (0, $f6f188badac61409$export$c2255604a80b4506)(slideItems[slideCountNew - i - 1], str);
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
        (0, $e8b8a168e520d5ab$export$711225beb0f1ef57)(container, [
            "style"
        ]);
        if (loop) for(var j = cloneCount; j--;){
            if (carousel) (0, $35f7fcd6b64164fa$export$7669482c90f5c50f)(slideItems[j]);
            (0, $35f7fcd6b64164fa$export$7669482c90f5c50f)(slideItems[slideCountNew - j - 1]);
        }
        // vertical slider
        if (!horizontal || !carousel) (0, $e8b8a168e520d5ab$export$711225beb0f1ef57)(innerWrapper, [
            "style"
        ]);
        // gallery
        if (!carousel) for(var i = index, l = index + slideCount; i < l; i++){
            var item = slideItems[i];
            (0, $e8b8a168e520d5ab$export$711225beb0f1ef57)(item, [
                "style"
            ]);
            (0, $f6f188badac61409$export$c2255604a80b4506)(item, animateIn);
            (0, $f6f188badac61409$export$c2255604a80b4506)(item, animateNormal);
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
            if (carousel) (0, $e20cd32291ee454a$export$998191bfdf710c72)(slideItems[j]);
            (0, $e20cd32291ee454a$export$998191bfdf710c72)(slideItems[slideCountNew - j - 1]);
        }
        // gallery
        if (!carousel) for(var i = index, l = index + slideCount; i < l; i++){
            var item = slideItems[i], classN = i < index + items ? animateIn : animateNormal;
            item.style.left = (i - index) * 100 / items + "%";
            (0, $46f3407947cf2355$export$d2cf6cd1dc7067d3)(item, classN);
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
                if (!(0, $eb69d94d62e4dc45$export$4ea3d958472af68f)(img, imgCompleteClass)) {
                    // stop propagation transitionend event to container
                    var eve = {};
                    eve[TRANSITIONEND] = function(e) {
                        e.stopPropagation();
                    };
                    (0, $061cad390577ffb1$export$aadfb65bee660f96)(img, eve);
                    (0, $061cad390577ffb1$export$aadfb65bee660f96)(img, imgEvents);
                    // update src
                    img.src = (0, $f995ed4be9577fcc$export$6a93fe6b2b4c71a0)(img, "data-src");
                    // update srcset
                    var srcset = (0, $f995ed4be9577fcc$export$6a93fe6b2b4c71a0)(img, "data-srcset");
                    if (srcset) img.srcset = srcset;
                    (0, $46f3407947cf2355$export$d2cf6cd1dc7067d3)(img, "loading");
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
        (0, $46f3407947cf2355$export$d2cf6cd1dc7067d3)(img, "loaded");
        imgCompleted(img);
    }
    function imgFailed(img) {
        (0, $46f3407947cf2355$export$d2cf6cd1dc7067d3)(img, "failed");
        imgCompleted(img);
    }
    function imgCompleted(img) {
        (0, $46f3407947cf2355$export$d2cf6cd1dc7067d3)(img, imgCompleteClass);
        (0, $f6f188badac61409$export$c2255604a80b4506)(img, "loading");
        (0, $7a991fc0a0cd84d9$export$da5f6eb3bb522cd)(img, imgEvents);
    }
    function getImageArray(start, end, imgSelector) {
        var imgs = [];
        if (!imgSelector) imgSelector = "img";
        while(start <= end){
            (0, $1049e7a63b214b22$export$4b80e395e36b5a56)(slideItems[start].querySelectorAll(imgSelector), function(img) {
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
        (0, $aa534fe9a3b82c52$export$27f233d61a9e2fa4)(function() {
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
            if ((0, $eb69d94d62e4dc45$export$4ea3d958472af68f)(img, imgCompleteClass)) imgs.splice(index, 1);
        });
        // execute callback function if selected images are all complete
        if (!imgs.length) return cb();
        // otherwise execute this functiona again
        (0, $aa534fe9a3b82c52$export$27f233d61a9e2fa4)(function() {
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
        (0, $1049e7a63b214b22$export$4b80e395e36b5a56)(slideItems, function(item, i) {
            // skip the first slide
            if (i) slidePositions.push(item.getBoundingClientRect()[attr] - base);
            // add the end edge
            if (i === slideCountNew - 1) slidePositions.push(item.getBoundingClientRect()[attr2] - base);
        });
    }
    // update slide
    function updateSlideStatus() {
        var range = getVisibleSlideRange(), start = range[0], end = range[1];
        (0, $1049e7a63b214b22$export$4b80e395e36b5a56)(slideItems, function(item, i) {
            // show slides
            if (i >= start && i <= end) {
                if ((0, $582013da8d64c0e3$export$5608640b1bf2f6d7)(item, "aria-hidden")) {
                    (0, $e8b8a168e520d5ab$export$711225beb0f1ef57)(item, [
                        "aria-hidden",
                        "tabindex"
                    ]);
                    (0, $46f3407947cf2355$export$d2cf6cd1dc7067d3)(item, slideActiveClass);
                }
            } else if (!(0, $582013da8d64c0e3$export$5608640b1bf2f6d7)(item, "aria-hidden")) {
                (0, $b39fb9920d0c23dd$export$7e45664a2081efb1)(item, {
                    "aria-hidden": "true",
                    "tabindex": "-1"
                });
                (0, $f6f188badac61409$export$c2255604a80b4506)(item, slideActiveClass);
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
                (0, $46f3407947cf2355$export$d2cf6cd1dc7067d3)(item, "tns-moving");
                item.style.left = (i - index) * 100 / items + "%";
                (0, $46f3407947cf2355$export$d2cf6cd1dc7067d3)(item, animateIn);
                (0, $f6f188badac61409$export$c2255604a80b4506)(item, animateNormal);
            } else if (item.style.left) {
                item.style.left = "";
                (0, $46f3407947cf2355$export$d2cf6cd1dc7067d3)(item, animateNormal);
                (0, $f6f188badac61409$export$c2255604a80b4506)(item, animateIn);
            }
            // remove outlet animation
            (0, $f6f188badac61409$export$c2255604a80b4506)(item, animateOut);
        }
        // removing '.tns-moving'
        setTimeout(function() {
            (0, $1049e7a63b214b22$export$4b80e395e36b5a56)(slideItems, function(el) {
                (0, $f6f188badac61409$export$c2255604a80b4506)(el, "tns-moving");
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
                (0, $b39fb9920d0c23dd$export$7e45664a2081efb1)(navPrev, {
                    "tabindex": "-1",
                    "aria-label": navStr + (navCurrentIndexCached + 1)
                });
                (0, $f6f188badac61409$export$c2255604a80b4506)(navPrev, navActiveClass);
                (0, $b39fb9920d0c23dd$export$7e45664a2081efb1)(navCurrent, {
                    "aria-label": navStr + (navCurrentIndex + 1) + navStrCurrent
                });
                (0, $e8b8a168e520d5ab$export$711225beb0f1ef57)(navCurrent, "tabindex");
                (0, $46f3407947cf2355$export$d2cf6cd1dc7067d3)(navCurrent, navActiveClass);
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
            (0, $f6f188badac61409$export$c2255604a80b4506)(item, classOut);
            (0, $46f3407947cf2355$export$d2cf6cd1dc7067d3)(item, classIn);
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
                if (!speed || !(0, $b42ff6b159ec6122$export$795910f5f15a9633)(container)) onTransitionEnd();
            } else // for old browser with non-zero duration
            (0, $0060788919ddc6b2$export$e2705a83c013f564)(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
            if (!horizontal) updateContentWrapperHeight();
        } : function() {
            slideItemsOut = [];
            var eve = {};
            eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
            (0, $7a991fc0a0cd84d9$export$da5f6eb3bb522cd)(slideItems[indexCached], eve);
            (0, $061cad390577ffb1$export$aadfb65bee660f96)(slideItems[index], eve);
            animateSlide(indexCached, animateIn, animateOut, true);
            animateSlide(index, animateNormal, animateIn);
            // run fallback function manually
            // when transition or animation not supported / duration is 0
            if (!TRANSITIONEND || !ANIMATIONEND || !speed || !(0, $b42ff6b159ec6122$export$795910f5f15a9633)(container)) onTransitionEnd();
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
                (0, $f6f188badac61409$export$c2255604a80b4506)(item, animateOut);
                (0, $46f3407947cf2355$export$d2cf6cd1dc7067d3)(item, animateNormal);
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
        while(target !== navContainer && !(0, $582013da8d64c0e3$export$5608640b1bf2f6d7)(target, "data-nav"))target = target.parentNode;
        if ((0, $582013da8d64c0e3$export$5608640b1bf2f6d7)(target, "data-nav")) {
            var navIndex = navClicked = Number((0, $f995ed4be9577fcc$export$6a93fe6b2b4c71a0)(target, "data-nav")), targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items, targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
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
        (0, $b39fb9920d0c23dd$export$7e45664a2081efb1)(autoplayButton, {
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
        if (!(0, $582013da8d64c0e3$export$5608640b1bf2f6d7)(curElement, "data-nav")) return;
        // var code = e.keyCode,
        var keyIndex = [
            KEYS.LEFT,
            KEYS.RIGHT,
            KEYS.ENTER,
            KEYS.SPACE
        ].indexOf(e.keyCode), navIndex = Number((0, $f995ed4be9577fcc$export$6a93fe6b2b4c71a0)(curElement, "data-nav"));
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
        return (0, $220b5440deab0062$export$83b6d73568c72b60)((0, $2bbc5253175a6c84$export$c796d9d3e501591f)(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
    }
    function onPanStart(e) {
        if (running) {
            if (preventActionWhenRunning) return;
            else onTransitionEnd();
        }
        if (autoplay && animating) stopAutoplayTimer();
        panStart = true;
        if (rafIndex) {
            (0, $136c643e31c13686$export$75aab3dbee8deceb)(rafIndex);
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
                if (!rafIndex) rafIndex = (0, $aa534fe9a3b82c52$export$27f233d61a9e2fa4)(function() {
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
        (0, $136c643e31c13686$export$75aab3dbee8deceb)(rafIndex);
        if (panStart) rafIndex = (0, $aa534fe9a3b82c52$export$27f233d61a9e2fa4)(function() {
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
                (0, $136c643e31c13686$export$75aab3dbee8deceb)(rafIndex);
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
                    (0, $061cad390577ffb1$export$aadfb65bee660f96)(target, {
                        "click": function preventClick(e) {
                            preventDefaultBehavior(e);
                            (0, $7a991fc0a0cd84d9$export$da5f6eb3bb522cd)(target, {
                                "click": preventClick
                            });
                        }
                    });
                }
                if (carousel) rafIndex = (0, $aa534fe9a3b82c52$export$27f233d61a9e2fa4)(function() {
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
            var min = pagesCached, max = pages, fn = (0, $e20cd32291ee454a$export$998191bfdf710c72);
            if (pagesCached > pages) {
                min = pages;
                max = pagesCached;
                fn = (0, $35f7fcd6b64164fa$export$7669482c90f5c50f);
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
            return $04445ee8d0c82197$export$51fe319e24d9d8c9((0, $ab7a5f7dfc3d7ee9$export$8b58be045bf06082)(options, optionsElements));
        }
    };
};


class $83ddd20095ec0c3e$var$DOMTF {
    constructor(){}
    init() {}
    _debounce(func) {
        let timer;
        return function(event) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(func, 400, event);
        };
    }
    getDocumentSize() {
        var documentSize = {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        };
        window.addEventListener("resize", this._debounce(function(e) {
            var documentSize = {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            };
            return documentSize;
        }));
        return documentSize;
    }
    getWindowSize() {
        var windowSize = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        window.addEventListener("resize", this._debounce(function(e) {
            var windowSize = {
                width: window.innerWidth,
                height: window.innerHeight
            };
            return windowSize;
        }));
        return windowSize;
    }
    // GET BREAKPOINT --> depends on window width // breakpoints in intro.js
    getBreakpoint(breakpoints) {
        for(let i = 0; i < breakpoints.length; i++){
            // the smallest (mobile)
            if (window.innerWidth <= Object.keys(breakpoints[0]).map((e)=>breakpoints[0][e])) return Object.keys(breakpoints[0]);
            else if (window.innerWidth > Object.keys(breakpoints[breakpoints.length - 1]).map((e)=>breakpoints[breakpoints.length - 1][e])) return "all";
            else if (i > 0 && window.innerWidth > Object.keys(breakpoints[i - 1]).map((e)=>breakpoints[i - 1][e]) && window.innerWidth <= Object.keys(breakpoints[i]).map((e)=>breakpoints[i][e])) return Object.keys(breakpoints[i]);
        }
    }
    // GET BREAKPOINT refresh and resize
    getBreakpointResize(breakpoints) {
        window.addEventListener("resize", this._debounce((e)=>{
            return this.getBreakpoint(breakpoints);
        }));
        return this.getBreakpoint(breakpoints);
    }
    //
    // BROWSER DETECTION
    // uno que te diga cual es
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
    //
    // TYPE OF DEVICE DETECTION
    //
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
var $83ddd20095ec0c3e$export$2e2bcd8739ae039 = $83ddd20095ec0c3e$var$DOMTF;



var $4gus7 = parcelRequire("4gus7");

var $anSuF = parcelRequire("anSuF");
(0, $3065398eb637bd52$export$99ee26438460406a).registerPlugin((0, $79bd7f461221d269$export$875bcbe48555930));
class $a56622dd82734ce7$var$HorizontalScroll {
    constructor(){
        this.DOM = {
            // container: document.querySelectorAll(".f--vw-container"),
            container: document.querySelectorAll(".g--horizontal-scroll-01__wrapper__item"),
            columns: document.querySelectorAll("*[class*='f--vw-col']"),
            sections: document.querySelectorAll(".js--horizontal-wrapper"),
            trigger: document.querySelectorAll(".js--horizontal-section"),
            slider: document.querySelectorAll(".js--slider-01")
        };
        this.classes = {
            // container: 'f--vw-container--remove-row',
            container: "g--horizontal-scroll-01__wrapper__item--remove-row",
            col: "display--flex"
        };
        this.init();
    }
    init() {
        this.dom_tf = new (0, $83ddd20095ec0c3e$export$2e2bcd8739ae039)();
        this.js_ui = new (0, (/*@__PURE__*/$parcel$interopDefault($4gus7)))();
        if (this.DOM.sections && this.DOM.trigger) this.DOM.sections.forEach((section)=>{
            var tl = (0, $3065398eb637bd52$export$99ee26438460406a).to(section, {
                x: ()=>-(section.scrollWidth - document.documentElement.clientWidth) + "px",
                ease: "none",
                duration: 4,
                scrollTrigger: {
                    trigger: section.parentElement,
                    invalidateOnRefresh: true,
                    pin: true,
                    scrub: 1,
                    end: ()=>"+=" + section.offsetWidth
                }
            });
            const newLocal = (0, $3065398eb637bd52$export$99ee26438460406a).to(".js--test", {
                left: "-50%",
                ease: "none",
                scrollTrigger: {
                    trigger: ".js--test",
                    containerAnimation: tl,
                    start: "left 90%",
                    end: "left 10%",
                    scrub: true,
                    // id: "2",
                    markers: true
                }
            });
        });
        this.containerHeight();
        window.addEventListener("resize", (0, $anSuF.tf_debounce)((e)=>{
            this.containerHeight();
        }, 500));
        this.DOM.slider.forEach((el)=>{
            var slider = (0, $04445ee8d0c82197$export$51fe319e24d9d8c9)({
                container: el,
                items: 2,
                gutter: 32,
                slideBy: 2,
                nav: false,
                controls: false,
                rewind: false,
                swipeAngle: false,
                lazyload: true,
                lazyloadSelector: ".g--lazy-01",
                preventActionWhenRunning: true,
                mouseDrag: true,
                autoplayButtonOutput: false,
                speed: 1000,
                autoplay: true,
                responsive: {
                    581: {
                        items: 3,
                        slideBy: 3
                    },
                    811: {
                        items: 4,
                        slideBy: 4
                    },
                    1025: {
                        items: 6,
                        slideBy: 6
                    }
                }
            });
        });
    }
    containerHeight() {
        this.DOM.container.forEach((el)=>{
            if (this.js_ui.matches(el, this.classes.container)) this.js_ui.removeClass(el, this.classes.container);
            if (el.offsetHeight > window.innerHeight) this.js_ui.addClass(el, this.classes.container);
        });
        this.DOM.columns.forEach((element)=>{
            if (this.js_ui.matches(element, this.classes.col)) this.js_ui.removeClass(element, this.classes.col);
            if (element.offsetHeight > window.innerHeight) this.js_ui.addClass(element, this.classes.col);
        });
    }
}
var $a56622dd82734ce7$export$2e2bcd8739ae039 = $a56622dd82734ce7$var$HorizontalScroll;
new $a56622dd82734ce7$var$HorizontalScroll();


//# sourceMappingURL=horizontal-scroll.dcf2c7fa.js.map
