var ajaxUrl = "http://hapi.554488.com/pdfwlservice_new.asmx/";

//空值判断
function isNull(obj) {
	var result = false;
	if(obj == "undefined" || obj == null || obj.length == 0) {
		result = true;
	}
	return result
}

//获取cookie
function cookieGet(field) {
	if(window.localStorage) {
		var storage = window.localStorage;
		return storage.getItem(field);
	} else {
		var arr, reg = new RegExp("(^| )" + field + "=([^;]*)(;|$)");
		if(arr = document.cookie.match(reg)) {
			return unescape(arr[2]);
		} else {
			return null;
		}
	}
}

//设置cookie
function cookieSet(field, val) {
	if(window.localStorage) {
		var storage = window.localStorage;
		storage.setItem(field, encodeURIComponent(val));
	} else {
		var Days = 30;
		var exp = new Date();
		exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
	}
}

//清除cookie
function cookieRemove(field) {
	if(window.localStorage) {
		var storage = window.localStorage;
		storage.removeItem(name)
	} else {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = getCookie(field);
		if(cval != null)
			document.cookie = field + "=" + cval + ";expires=" + exp.toGMTString();
	}
}