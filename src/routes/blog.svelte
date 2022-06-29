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
	export let posts: any
</script>

<div class="mx-auto max-w-xl">
	<div class=" mx-8 sm:mx-auto">
		<div class="container max-w-xl md:max-w-xl lg:max-w-6xl ">
			<section class="mt-14 mb-4 text-left">
				<h1 class="font-ptsans">i am a blogger</h1>
				<h2 class="font-ptsans text-4xl sm:mt-4">professional hobbyist and time waster</h2>
			</section>
			<div class="flex flex-row">
				<div class="flex flex-col" />
				<h2 class="mt-0 mb-8 font-ptsans text-2xl font-thin italic sm:mt-2">
					text-reader, video-watcher, youtube-subscriber, game-gamer, household-developer, and a
					full-time person
				</h2>
			</div>
		</div>

		<section class="mx-auto max-w-xl">
			<h2>Blogposts</h2>
			<div class="flex flex-col">
				<ul>
					{#each posts as post}
						<li class="mt-4">
							<article>
								<header>
									<h3 class="font-medium">
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
</div>
