//禁止右键查看源代码
document.oncontextmenu = function(t) {
    window.event && (t = window.event);
    try {
        var e = t.srcElement;
        return "INPUT" == e.tagName && "text" == e.type.toLowerCase() || "TEXTAREA" == e.tagName ? !0 : !1
    } catch(n) {
        return ! 1
    }
},
document.onpaste = function(t) {
    window.event && (t = window.event);
    try {
        var e = t.srcElement;
        return "INPUT" == e.tagName && "text" == e.type.toLowerCase() || "TEXTAREA" == e.tagName ? !0 : !1
    } catch(n) {
        return ! 1
    }
},
document.oncopy = function(t) {
    window.event && (t = window.event);
    try {
        var e = t.srcElement;
        return "INPUT" == e.tagName && "text" == e.type.toLowerCase() || "TEXTAREA" == e.tagName ? !0 : !1
    } catch(n) {
        return ! 1
    }
},
document.oncut = function(t) {
    window.event && (t = window.event);
    try {
        var e = t.srcElement;
        return "INPUT" == e.tagName && "text" == e.type.toLowerCase() || "TEXTAREA" == e.tagName ? !0 : !1
    } catch(n) {
        return ! 1
    }
},
document.onselectstart = function(t) {
    window.event && (t = window.event);
    try {
        var e = t.srcElement;
        return "INPUT" == e.tagName && "text" == e.type.toLowerCase() || "TEXTAREA" == e.tagName ? !0 : !1
    } catch(n) {
        return ! 1
    }
};

//debug调试时跳转页面
var element = new Image();
Object.defineProperty(element, 'id', {
    get: function() {
        window.location.href = "https://xxxm.net/blog/"
    }
});
console.log(element);