class DOMTF {
    constructor(){
    }

    init(){
        
    }

    _debounce(func) {
        let timer;
        return function(event) {
            if(timer) clearTimeout(timer);
            timer = setTimeout(func, 400, event);
        }
    }

    getDocumentSize(){
        var documentSize = {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        }
        window.addEventListener("resize", this._debounce(function(e) {
            var documentSize = {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
            }
            return documentSize;
        }));
        return documentSize;
    }

    getWindowSize(){
        var windowSize = {
            width: window.innerWidth,
            height: window.innerHeight,
        }
        window.addEventListener("resize", this._debounce(function(e) {
            var windowSize = {
                width: window.innerWidth,
                height: window.innerHeight,
            }
            return windowSize;
        }));
        return windowSize;
    }

    // GET BREAKPOINT --> depends on window width // breakpoints in intro.js
    getBreakpoint(breakpoints) {
        for (let i = 0; i < breakpoints.length; i++) {
            // the smallest (mobile)
            if (window.innerWidth <= Object.keys(breakpoints[0]).map(e => breakpoints[0][e])) {
                return Object.keys(breakpoints[0])
            // the biggest
            } else if (window.innerWidth > Object.keys(breakpoints[breakpoints.length - 1]).map(e => breakpoints[breakpoints.length - 1][e])) {
                return 'all'
            } else if ((i > 0 && window.innerWidth > Object.keys(breakpoints[i - 1]).map(e => breakpoints[i - 1][e])) && (window.innerWidth <= Object.keys(breakpoints[i]).map(e => breakpoints[i][e]))) {
                return Object.keys(breakpoints[i])
            }
        }
    }

    // GET BREAKPOINT refresh and resize
    getBreakpointResize(breakpoints) {
        window.addEventListener("resize", this._debounce((e) => {
            return this.getBreakpoint(breakpoints);
        }));
        return this.getBreakpoint(breakpoints);
    }

    //
    // BROWSER DETECTION
    // uno que te diga cual es
    getBrowser(browser) {
        switch (browser) {
            // CHROME 1+
            case 'chrome':
                return navigator.userAgent.indexOf("Chrome") != -1 && !navigator.userAgent.match(/edg/i) || navigator.userAgent.indexOf('CriOS') >= 0;
            // SAFARI 3.0+
            case 'safari':
                return /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !(navigator.userAgent.indexOf('CriOS') >= 0);
            // FIREFOX 1.0+
            case 'firefox':
                return typeof InstallTrigger !== 'undefined';
            // INTERNET EXPLORER 6-11
            case 'ie':
                return /*@cc_on!@*/false || !!document.documentMode;
            // EDGE 20+
            case 'edge':
                return (navigator.userAgent.match(/edg/i) || navigator.userAgent.indexOf("Edge/") != -1) ? true : false;
            default:
                return null;
        }
    }

    //
    // TYPE OF DEVICE DETECTION
    //

    getTypeDevice(system) {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        switch (system) {
            case 'touch':
                return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
            case 'android':
                return /android/i.test(userAgent);
            case 'ios':
                return typeof navigator.standalone === 'boolean';
            default:
                return null;
        }
    }
}

export default DOMTF;