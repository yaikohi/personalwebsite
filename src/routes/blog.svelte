<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit'
	export const load: Load = async ({ fetch }) => {
		const response = await fetch('blog.json')
		const json = await response.json()
		const images = json.data
		return {
			props: {
				images,
			},
		}
	}
</script>

<script lang="ts">
	import { posts } from '$lib/store/posts'

	export let images: any
</script>

<div class="container mx-auto grid-cols-1 md:max-w-xl lg:max-w-6xl">
	<section class="p-12 text-left">
		<h1 class="pt-2 pb-4">Work in progress page</h1>
		<h2 class="py-2">Enjoy lorem ipsum and leonberger dogs here</h2>
		<ul class="px-4">
			<li class="list-disc font-firacode">The images are statically loaded from the server.</li>
			<li class="list-disc font-firacode">
				The blog posts are dynamically fetched on the client-side.
			</li>
		</ul>
	</section>
	<div class="grid lg:grid-cols-2 ">
		{#each $posts as post}
			<section
				class="m-12 flex flex-col bg-slate-100 py-10 px-8 dark:bg-slate-700 dark:text-white lg:max-w-md"
			>
				<img src={images[post.id]} alt="Leonberger dog" />
				<h2 class="py-2 font-bold">{post.title.substring(0, 20)}</h2>
				<div class="pl-2">
					<p class="py-2 font-light">{post.body}</p>
				</div>
				<a class="pt-10 font-medium" href={`/blog/${post.id}`}>Read more...</a>
			</section>
		{/each}
	</div>
</div>
