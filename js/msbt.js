function go(page) {
	location.href = page + '.html';
}
function loadBody() {
	var h = $(window).height() - $('#nav').height(); 
	h -= 20;
	$('#pageContainer').css('height', h + 'px');
	$('#sidebar').css('height', h + 'px');
}