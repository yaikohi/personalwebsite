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

<div class="container mx-auto md:max-w-xl md:grid-cols-1 lg:max-w-6xl">
	<section class="mt-20 p-12 text-left">
		<h1 class="pt-2 font-ptsans">Welcome to my &nbsp;'Work in progress' page</h1>
		<h2 class="mt-7 py-2 font-ptsans text-4xl sm:mt-2">
			Enjoy lorem ipsum and leonberger dogs here!
		</h2>
	</section>
	<div class="grid lg:grid-cols-2 ">
		{#each $posts as post}
			<section
				class="relative m-2 flex max-h-[600px] flex-col rounded-xl bg-slate-100 py-10 px-8 dark:bg-slate-800 dark:text-white  max-w-lg"
			>
				<img
					class="mb-4 overflow-hidden rounded-xl object-cover saturate-100 transition-all delay-200 ease-in-out hover:saturate-200"
					src={images[post.id]}
					alt="Leonberger dog"
				/>
				<h2 class="py-2 font-ptsans font-bold capitalize">{post.title}</h2>
				<div class="pl-2">
					<p class="overflow-hidden py-2 font-sourcesans font-light">
						{post.body}
						{post.body}
					</p>
				</div>
				<a class="py-4 font-sourcesans font-medium " href={`/blog/${post.id}`}>Read more...</a>
			</section>
		{/each}
	</div>
</div>
