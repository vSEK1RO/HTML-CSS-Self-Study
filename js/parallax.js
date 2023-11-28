let frontPicture = document.querySelector('.frontPicture');
window.addEventListener('mousemove', function(e) {
	let x = e.clientX / window.innerWidth;
	let y = e.clientY / window.innerHeight;  
	frontPicture.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 15 + 'px)';
});    