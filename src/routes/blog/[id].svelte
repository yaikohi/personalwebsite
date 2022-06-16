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

<div class="mx-auto mt-20 block max-w-7xl">
	<div class="flex flex-row justify-between px-16 md:max-w-xl lg:max-w-4xl ">
		<!-- <div class="h-full lg:block hidden bg-red-900">something</div> -->
		<article class="flex h-full flex-col py-4">
			<!-- Title -->
			<h1 class="mb-4 pt-5 font-ptsans font-bold capitalize">{blogPost.title}</h1>
			<!-- Date posted -->
			<p class="py-2 text-sm italic">
				Date posted: <time datetime={date}> {date} </time>
			</p>
			<!-- Image -->
			<div
				class="z-0 mt-12 rounded-l-3xl bg-transparent bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800"
			>
				<img
					class="z-20 rounded-3xl py-5 pl-5 saturate-100 transition-all delay-200 ease-in-out hover:saturate-200 "
					src={image}
					alt="dog"
				/>
			</div>
			<!--  Subtitle -->
			<div
				class="divide mb-8 mt-6 w-full border-l-4 border-l-slate-200 py-8 dark:border-l-slate-100"
			>
				<h2 class="pl-8 italic text-slate-600 dark:text-slate-400 ">
					Est {blogPost.title}
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
