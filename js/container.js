function go(page) {
	location.href = page + '.html';
}
function loadBody() {
	var h = $(window).height() - $('#nav').height();
	h = h - 20;
	document.getElementById('pageContainer').style.height = h + 'px';
}