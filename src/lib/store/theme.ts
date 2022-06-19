import { writable } from 'svelte/store'

/**
 * Boolean writable-type svelte data store.
 *
 * 'Is dark theme active?'
 */
export const isDarkTheme = writable(false)
