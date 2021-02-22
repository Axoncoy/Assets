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

//按F12时跳转页面
var element = new Image();
Object.defineProperty(element, 'id', {
    get: function() {
        window.location.href = "https://xxxm.net/blog/"
    }
});
console.log(element);

//本站运行时间代码
var s1 = '2020-02-22';//设置为你的建站时间
s1 = new Date(s1.replace(/-/g, "/"));
s2 = new Date();
var days = s2.getTime() - s1.getTime();
var number_of_days = parseInt(days / (1000 * 60 * 60 * 24));
document.getElementById('days').innerHTML = number_of_days;
