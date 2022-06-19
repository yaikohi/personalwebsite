<script lang="ts">
	import NavbarLink from './NavbarLink.svelte'
	import ToggleTheme from './ToggleTheme.svelte'
</script>

<nav
	class="sticky top-0 z-20 mx-auto bg-white pt-6 px-6 opacity-80 dark:bg-slate-900 dark:bg-opacity-80"
>
	<div class="flex-col md:flex ">
		<ul class="container mx-auto flex max-w-4xl justify-between">
			<ToggleTheme className="tracking-wider uppercase font-medium" />
			<div class="flex space-x-10 justify-between">
				<NavbarLink linksTo="/">Home</NavbarLink>
				<NavbarLink linksTo="/blog">Blog</NavbarLink>
			</div>
		</ul>
		<div class="mt-2 hidden" />
	</div>
</nav>
