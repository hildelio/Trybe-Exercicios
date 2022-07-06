
function generateColor() {
	const chars = '0123456789ABCDEF'
	let color = '#'
	for (let i = 0; i < 6; i += 1) {
		color += chars.charAt(Math.floor(Math.random() * chars.length))
	}
	return color;
}
document.getElementById('btn-action').addEventListener('click', () => {
	for (let i = 0; i < 5; i += 1) {
		let color = generateColor()
		let section_color = document.getElementById(`color-${i + 1}`)
		section_color.style.backgroundColor = color
		let text_color = document.getElementById(`text-color-${i + 1}`)
		text_color.textContent = `${color}`
	}
})

