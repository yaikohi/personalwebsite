<script lang="ts">
	import { isDarkTheme } from '$lib/store/theme'

	/**
	 * Toggles the theme from dark to light and reverse.
	 */
	export const toggleTheme = async () => {
		isDarkTheme.update((darktheme: boolean) => (darktheme = !darktheme))
	}
	let isDark: boolean

	/**
	 * Subscribing to the store so that the local variable `isDark` is updated when the store `isDarkTheme` is updated.
	 */
	isDarkTheme.subscribe((val) => (isDark = val))

	/**
	 * Custom class naming and tailwindcss styling
	 */
	export let className: string = ''
	let finalClass = `${className} text-black dark:text-white hover:border-y-2 dark:hover:border-yellow-300 hover:-mt-2 hover:border-blue-900`
</script>

<button
	class={finalClass}
	on:click|preventDefault={() => {
		toggleTheme()
	}}
>
	{isDark ? 'light ☀️' : 'dark 🌑'}
</button>
