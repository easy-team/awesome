import { __awaiter, __generator } from "tslib";
export function createElement(tagName, text, attributes) {
    var tag = document.createElement(tagName);
    tag.innerHTML = text;
    if (attributes) {
        Object.keys(attributes).forEach(function (key) {
            tag[key] = attributes[key];
        });
    }
    document.body.appendChild(tag);
}
export function delay(millsecond) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(function () {
                        resolve();
                    }, millsecond);
                })];
        });
    });
}
export function formatDate(obj, format) {
    if (format === void 0) { format = 'yyyy-MM-dd hh:mm'; }
    if (/ios|ipad|iphone|Macintosh/gi.test(navigator.userAgent) && typeof obj === 'string') {
        obj = (obj || '').replace(/-/g, '/');
    }
    format = new Date(obj).toLocaleDateString() === new Date().toLocaleDateString() ? 'hh:mm' : format;
    var date = obj || new Date();
    if (obj && obj.toString !== '[object Date]') {
        if (isNaN(obj)) {
            date = new Date(obj);
        }
        else {
            date = new Date();
            date.setTime(obj);
        }
    }
    var o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        S: date.getMilliseconds() // millisecond
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, ("" + date.getFullYear()).substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}
