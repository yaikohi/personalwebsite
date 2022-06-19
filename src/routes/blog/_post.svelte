<script lang="ts">
	/**
	 * This file starts with an underscore, meaning that this file
	 * is private from the routing and will serve as a layout
	 * file only.
	 */

	/**
	 * Required for reading the 'frontmatter' of the markdown files
	 */

	export let title: string
	export let date: string
</script>

<h1>{title}</h1>
<p>Published: {date}</p>

<slot />
