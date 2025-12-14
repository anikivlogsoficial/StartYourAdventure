window.onload=function() {
	document.querySelectorAll('#closetWindow').forEach(Aa => {
		Aa.addEventListener('click', function() {
			Aa.parentElement.style.display='none';
		})
	});
}