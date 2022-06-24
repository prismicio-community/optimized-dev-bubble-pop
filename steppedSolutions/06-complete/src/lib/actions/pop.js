import { randomSound } from '../utils/sounds'

export function popSound(node) {
	const handleClick = e => {
		if (node.contains(e.target)) {
			const popSound = new Audio(randomSound)
			popSound.play()
			node.dispatchEvent(new CustomEvent("pop"))
		}
	}

	document.addEventListener("click", handleClick, true)

	return {
		destroy() {
			document.removeEventListener("click", handleClick, true)
		}
	}
}