<script lang="ts">
	import NavbarLink from './NavbarLink.svelte';
	export let dark: boolean;
</script>

<nav class="sticky top-0 z-20 mx-auto bg-white py-6 dark:bg-black sm:px-6">
	<ul class="container mx-auto flex max-w-4xl items-center justify-between px-6">
		<NavbarLink linksTo="/">Erik Beem</NavbarLink>
		<button
			class=" text-xl text-black dark:text-white"
			on:click|preventDefault={() => {
				dark = !dark;
			}}>{dark ? '☀️' : '🌑'}</button
		>
	</ul>
</nav>
