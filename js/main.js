window.onload = function () {
	document.querySelectorAll('#closetWindow').forEach(popupClassic => {
		popupClassic.addEventListener('click', function () {
			popupClassic.parentElement.classList.toggle('remove');
			setTimeout(() => {
				popupClassic.parentElement.style.display = 'none';
			}, 1000)
		})
	});
};