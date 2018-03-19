export function trim(s) {
	return s.replace(/(^\s*)|(\s*$)/g, "");
}

export function createToast(_this) {
	return _this.$createToast({
			txt: '加载中..',
			mask: true
		})
}

export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }

  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function parseUrl(data) {
	let url = ''
	for(var k in data) {
		let value = data[k] !== undefined ? data[k] : ''
		url += '&' + k + '=' + encodeURIComponent(value)
	}
	return url ? url.substring(1) : ''
}
