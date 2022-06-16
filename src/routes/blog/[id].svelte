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

<div class="mx-auto block md:max-w-7xl">
	<div class="px-6 md:max-w-xl lg:max-w-4xl flex flex-row justify-between ">
		<div class="w-[80px] h-full">something</div>
		<article class="mt-20 flex h-full flex-col py-4">
			<h1 class="py-5 font-ptsans font-bold capitalize">{blogPost.title}</h1>

			<div class="z-0 bg-slate-400 bg-gradient-to-l from-black to-transparent">
				<img
					class="z-20 max-w-xs bg-white saturate-0 transition-all delay-200 ease-in-out hover:saturate-50 md:max-w-md "
					src={image}
					alt="dog"
				/>
			</div>
			<div class="w-full max-h-44 border-l-4 border-l-slate-100 py-8 divide mb-8 mt-6">
				<h2 class="italic text-slate-400 pl-8 ">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere in quos natus consequatur
					repudiandae tenetur ad eum accusamus est quisquam. Fugiat nihil explicabo odit suscipit
					harum optio libero consectetur rerum.
				</h2>
			</div>
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
		</article>
		<div class="w-[400px] h-full">something</div>
	</div>
</div>
