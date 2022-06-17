import { writable } from 'svelte/store'

/**
 * Boolean writable.
 *
 * Is dark theme active?
 */
export const isDarkTheme = writable(false)
