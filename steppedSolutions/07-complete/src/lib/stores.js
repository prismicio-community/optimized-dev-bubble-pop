import { writable } from 'svelte/store'

export const session = writable(false)

export const score = writable(0)

const savedBubbles = localStorage.bubbles

export const totalBubbles = writable(savedBubbles || 50)

totalBubbles.subscribe(bubbles => localStorage.bubbles = bubbles)

export const savedFinalScore = localStorage.finalScore

export const finalScore = writable(savedFinalScore || 10)

finalScore.subscribe(score => localStorage.finalScore = score)

const savedScore = localStorage.score

export const lastScore = writable(savedScore || null)

lastScore.subscribe(score => localStorage.score = score)

