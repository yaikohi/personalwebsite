<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit'
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
	import Post from './blog/_post.svelte'

	export let posts: any
</script>

<div class="mx-auto max-w-xl">
	<div class="container mx-auto max-w-xl md:max-w-xl lg:max-w-6xl ">
		<div class="mx-8 ">
			<section class="py-12 text-left">
				<h1 class="pt-2 font-ptsans">Welcome to my &nbsp;'Work in progress' page</h1>
				<h2 class="mt-7 py-2 font-ptsans text-4xl sm:mt-2">
					Enjoy lorem ipsum and leonberger dogs!
				</h2>
			</section>
			<div class="flex flex-row">
				<div class="flex flex-col" />
				<h2 class="pt-0 pb-8 font-ptsans text-2xl font-thin italic sm:mt-2">
					Some text I can put here as some sort of side-note or something.
				</h2>
			</div>
		</div>
	</div>

	<section class="mx-auto max-w-xl">
		<h2>Blogposts</h2>
		<div class="flex flex-col p-4">
			<ul>
				{#each posts as post}
					<li class="py-2">
						<article>
							<header>
								<h3 class="font-medium py-2">
									<a href={`${post.path}`}>{post.meta.title}</a>
								</h3>
								<p class="font-light">{post.meta.summary}</p>
							</header>
						</article>
					</li>
				{/each}
			</ul>
		</div>
	</section>
</div>
