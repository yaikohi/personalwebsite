<script lang="ts">
	import NavbarLink from './NavbarLink.svelte'
	import ToggleTheme from './ToggleTheme.svelte'
</script>

<nav
	class="sticky top-0 z-20 mx-auto bg-white py-6 opacity-80 dark:bg-slate-900 dark:bg-opacity-80 sm:px-6 "
>
	<div class="flex-col md:flex ">
		<ul class="container mx-auto flex max-w-4xl justify-between">
			<h2 class="uppercase tracking-wider font-light dark:text-white">Erik Beem</h2>
			<div class="flex space-x-10 justify-between">
				<NavbarLink linksTo="/">Home</NavbarLink>
				<NavbarLink linksTo="/blog">Blog</NavbarLink>
			</div>
		</ul>
		<div>
			<ToggleTheme className="tracking-wider uppercase font-medium" />
		</div>
	</div>
</nav>
