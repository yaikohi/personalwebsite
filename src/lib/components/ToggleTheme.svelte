<script lang="ts">
	import { isDarkTheme } from '$lib/store/theme'

	/**
	 * Toggles the theme from dark to light and reverse.
	 */
	export const toggleTheme = async () => {
		isDarkTheme.update((darktheme: boolean) => (darktheme = !darktheme))
	}
	let isDark: boolean
	isDarkTheme.subscribe((val) => (isDark = val))

	/**
	 * Custom class naming and tailwindcss styling
	 */
	export let className: string = ''

	let finalClass = `${className} text-black dark:text-white`
</script>

<button
	class={finalClass}
	on:click|preventDefault={() => {
		toggleTheme()
	}}
>
	{isDark ? 'day☀️' : 'night🌑'}
</button>
