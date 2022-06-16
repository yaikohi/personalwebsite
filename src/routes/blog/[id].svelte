<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit'
	export const load: Load = async ({ fetch, params }) => {
		const id = params.id

		const response = await fetch('../query/blog.json')
		const json = await response.json()
		const image = json.data.images[id]
		const blogPost = json.data.posts.find((post: TBlogPost) => post.id === parseInt(id))

		return {
			props: {
				image,
				blogPost,
			},
		}
	}
</script>

<script lang="ts">
	import type { TBlogPost } from '../query/blog.json'

	export let image: string
	export let blogPost: TBlogPost
</script>

<div class="container mx-auto px-6 md:max-w-xl lg:max-w-4xl ">
	<article class="mt-20 flex  flex-col py-4">
		<h1 class="py-5 font-ptsans font-bold capitalize">{blogPost.title}</h1>

		<p class="max-w-xl font-sourcesans text-xl">
			{blogPost.body}
			{blogPost.body}
			<br />
			<br />
			{blogPost.body}
			{blogPost.body}
			<br />
			<br />
			{blogPost.body}
			{blogPost.body}
			{blogPost.body}
			<br />
			{blogPost.body}
			{blogPost.body}
			<br />
			<br />
			{blogPost.body}
			{blogPost.body}
			{blogPost.body}
		</p>
		<div class="z-0 bg-slate-400 bg-gradient-to-l from-black to-transparent">
			<img
				class="z-20 max-w-xs bg-white saturate-0 transition-all delay-200 ease-in-out hover:saturate-50 md:max-w-md "
				src={image}
				alt="dog"
			/>
		</div>
	</article>
</div>
