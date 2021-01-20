export default function resizeFontsize () {
    (function (win, doc) {
		function change () {
		    // 以psd图为375宽时，默认字体大小为 16  750时对应32
		    // 这样图纸测量多少，直接写就行，不用重新换算
			doc.documentElement.style.fontSize = 16 * doc.documentElement.clientWidth / 375 + 'px'
		}
		change()
		win.addEventListener('resize', function () {
			change()
		}, false)
	})(window, document)
}
