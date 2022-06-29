<script>
	// @ts-nocheck

	/**
	 * It is not yet possible to have typescript with mdsvex as of 2022-06-19.
	 *
	 *
	 * This file starts with an underscore, meaning that this file
	 * is private from the routing and will serve as a layout
	 * file only.
	 *
	 *
	 * Required for reading the 'frontmatter' of the markdown files
	 */
	export let title
	export let date
	export let summary
</script>

<article class="mx-8 max-w-2xl sm:mx-auto">
	<header class="mx-auto mt-20 mb-14 max-w-2xl">
		<h1 class="pb-4 font-medium">{title}</h1>
		<h2 class="font-light italic">{summary}</h2>
		<h3 class="pt-8 text-right text-sm text-slate-800 dark:text-slate-400">Published: {date}</h3>
	</header>
	<div>
		<slot />
	</div>
</article>
