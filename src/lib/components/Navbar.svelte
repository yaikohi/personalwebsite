<script lang="ts">
	import NavbarLink from './NavbarLink.svelte';
	export let dark: boolean;
</script>

<nav class="sticky top-0 z-20 mx-auto  py-6 sm:px-6 ">
	<ul class="container mx-auto flex max-w-4xl items-center justify-between px-6">
		<NavbarLink linksTo="/">Erik Beem</NavbarLink>
		<NavbarLink linksTo="/blog">Blog</NavbarLink>
		<button
			class="text-black dark:text-white md:text-xl"
			on:click|preventDefault={() => {
				dark = !dark;
			}}>{dark ? 'day☀️' : 'night🌑'}</button
		>
	</ul>
</nav>
