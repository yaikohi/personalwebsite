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

	const longSubtitle =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere in quos natus consequatur repudiandae tenetur ad eum accusamus est quisquam. Fugiat nihil explicabo odit suscipit harum optio libero consectetur rerum.'
	const shortSubtitle = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
	const subtitle =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere in quos natus consequatur repudiandae tenetur ad eum accusamus est quisquam.'

	const today = new Date()
	const date = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(today)
</script>

<div class="mx-auto block max-w-7xl mt-20">
	<div class="px-16 md:max-w-xl lg:max-w-4xl flex flex-row justify-between ">
		<!-- <div class="h-full lg:block hidden bg-red-900">something</div> -->
		<article class="flex h-full flex-col py-4">
			<!-- Title -->
			<h1 class="pt-5 mb-4 font-ptsans font-bold capitalize">{blogPost.title}</h1>
			<!-- Date posted -->
			<p class="py-2 italic text-sm">
				Date posted: <time datetime={date}> {date} </time>
			</p>
			<!-- Image -->
			<div
				class="z-0 bg-transparent mt-12 rounded-l-3xl bg-gradient-to-r from-slate-800 to-transparent"
			>
				<img
					class="z-20 pl-5 py-5 rounded-3xl saturate-100 transition-all delay-200 ease-in-out hover:saturate-200 "
					src={image}
					alt="dog"
				/>
			</div>
			<!--  Subtitle -->
			<div class="w-full border-l-4 border-l-slate-100 py-8 divide mb-8 mt-6">
				<h2 class="italic text-slate-400 pl-8 ">
					{blogPost.title}
					{blogPost.title}
				</h2>
			</div>
			<!-- Content, Paragraphs -->
			<p class="max-w-3xl font-sourcesans text-xl">
				Elle {blogPost.body}
				{blogPost.body}
				{blogPost.body}.
				<br />
				<br />
				Ire {blogPost.body}
				{blogPost.body}.
				<br />
				<br />
				Fuga {blogPost.body}
				{blogPost.body}
				{blogPost.body}.
				<br />
				{blogPost.body}
				{blogPost.body}.
				<br />
				<br />
				A{blogPost.body}
				{blogPost.body}
				{blogPost.body}.
			</p>
		</article>
	</div>
</div>
