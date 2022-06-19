<script context="module" lang="ts">
	import type { TPostFile } from './api/posts.json'
	import type { Load } from '@sveltejs/kit'
	import Post from './blog/_post.svelte'
	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/api/posts.json')
		const posts = await res.json()

		return {
			props: {
				posts,
			},
		}
	}
</script>

<script lang="ts">
	export let posts: any
</script>

<div class="container mx-auto max-w-xl md:max-w-xl lg:max-w-6xl ">
	<div class="mx-8 ">
		<section class="py-12 text-left">
			<h1 class="pt-2 font-ptsans">Welcome to my &nbsp;'Work in progress' page</h1>
			<h2 class="mt-7 py-2 font-ptsans text-4xl sm:mt-2">Enjoy lorem ipsum and leonberger dogs!</h2>
		</section>
		<div class="flex flex-row">
			<div class="flex flex-col" />
			<h2 class="pt-0 pb-8 font-ptsans text-2xl font-thin italic sm:mt-2">
				Some text I can put here as some sort of side-note or something.
			</h2>
		</div>
	</div>
</div>

<div>
	<h2>Blogposts</h2>
	<div class="p-4 flex flex-col">
		{#each posts as post}
			<a class="px-4 py-2" href={`${post.path}`}>{post.meta.title}</a>
		{/each}
	</div>
</div>
