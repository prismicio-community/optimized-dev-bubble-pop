import { quintIn } from 'svelte/easing'

export const popTransition = (node, options) => {
		const opacity = getComputedStyle(node).opacity

		return {
			easing: quintIn,
			duration: options.duration || 200,
			delay: options.delay || 0,

			css: (t, u) => `transform: scale3d(${u + 1}, ${u + 1}, ${u + 1}); opacity: ${t * opacity}`
		}
	}