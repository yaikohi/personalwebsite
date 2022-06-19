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
</script>

<h1>{title}</h1>
<p>Published: {date}</p>

<slot />
