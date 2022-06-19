<script context="module" lang="ts">
	import type { TBlogPost } from './query/blog.json'
	import type { Load } from '@sveltejs/kit'
	import Image from '$lib/components/Image.svelte'

	export const load: Load = async ({ fetch }) => {
		const response = await fetch('query/blog.json')
		const json = await response.json()

		const images: string[] = json.data.images
		const posts: TBlogPost[] = json.data.posts

		return {
			props: {
				images,
				posts,
			},
		}
	}
</script>

<script lang="ts">
	export let posts: TBlogPost[]
	export let images: string[]
</script>

<div class="container mx-auto max-w-xl md:max-w-xl lg:max-w-6xl ">
	<section class="p-12 text-left">
		<h1 class="pt-2 font-ptsans">Welcome to my &nbsp;'Work in progress' page</h1>
		<h2 class="mt-7 py-2 font-ptsans text-4xl sm:mt-2">Enjoy lorem ipsum and leonberger dogs!</h2>
	</section>
	<div class="flex flex-row">
		<div class="flex flex-col">
			{#each posts as post}
				<section
					class="relative m-8 flex max-h-[600px] max-w-lg flex-col rounded-xl bg-slate-100 px-8 dark:bg-slate-800  dark:text-white"
				>
					<Image
						className="mb-4 overflow-hidden hidden rounded-xl object-scale-down md:object-fit saturate-100 transition-all delay-200 ease-in-out hover:saturate-200"
						src={images[post.id]}
						alt="Leonberger dog"
					/>
					<h2 class="pt-8 pb-4 font-ptsans font-bold capitalize">{post.title}</h2>
					<div class="h-64 max-w-md overflow-x-scroll">
						<p class="indent-4 font-sourcesans font-light">
							Qe
							{post.body}
							{post.body}
							{post.body}
							{post.body}
						</p>
					</div>
					<a
						class="pt-2 pb-8 font-sourcesans font-thin hover:font-medium "
						href={`/blogTest/${post.id}`}>Read more...</a
					>
				</section>
			{/each}
		</div>
		<div class="m-8 hidden flex-col items-start gap-2 md:flex">
			<h2 class="mt-7 mb-12 py-2 font-ptsans text-2xl font-thin italic sm:mt-2">
				I'll put Leonberger dogs here until I know what to do with this space.
			</h2>
			{#each posts as post}
				<Image
					className="mb-4 rounded-xl object-scale-down md:object-fit saturate-100 transition-all delay-200 ease-in-out hover:saturate-200"
					src={images[post.id]}
					alt="Leonberger dog"
				/>
			{/each}
		</div>
	</div>
</div>
