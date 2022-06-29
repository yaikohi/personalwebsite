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

<article class="sm:mx-auto max-w-2xl mx-8">
	<header class="mx-auto max-w-2xl mt-20 mb-14">
		<h1 class="pb-4 font-medium">{title}</h1>
		<h2 class="italic font-light">{summary}</h2>
		<h3 class="text-right pt-8 text-sm text-slate-800 dark:text-slate-400">Published: {date}</h3>
	</header>
	<div>
		<slot />
	</div>
</article>
