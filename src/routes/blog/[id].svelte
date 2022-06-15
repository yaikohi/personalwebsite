<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit'
	export const load: Load = async ({ params }) => {
		const id = params.id

		const response = await fetch('blog.json')
		const json = await response.json()
		const images = json.data
		const image = images[id]

		return {
			props: {
				id,
				image,
			},
		}
	}
</script>

<script lang="ts">
	import { posts } from '$lib/store/posts'
	import type { IPost } from '$lib/types/blogposts'

	export let id: string
	export let image: string
	export let blogPost: IPost = $posts.filter((post) => post.id === parseInt(id))[0]
</script>

<div class="container mx-auto px-6 md:max-w-xl lg:max-w-4xl ">
	<article class="flex flex-col py-4">
		<img class="lg:max-w-sm" src={image} alt="dog" />
		<h2 class="py-5">{blogPost.title}</h2>
		<p class="">{blogPost.body}</p>
	</article>
</div>
