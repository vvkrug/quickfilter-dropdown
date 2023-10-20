export const dragscroll = (element) => {
	let isMouseDown = false;
	let startX, scrollLeft;

	element.addEventListener('mousedown', (e) => {
			isMouseDown = true;
			startX = e.pageX - element.offsetLeft;
			scrollLeft = element.scrollLeft;
			e.preventDefault();
	});

	element.addEventListener('mouseleave', () => {
			isMouseDown = false;
	});

	element.addEventListener('mouseup', () => {
			isMouseDown = false;
	});

	element.addEventListener('mousemove', (e) => {
			if(!isMouseDown) return;
			const x = e.pageX - element.offsetLeft;
			const walk = x - startX;
			element.scrollLeft = scrollLeft - walk;
	});
}
